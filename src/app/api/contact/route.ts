import { type NextRequest } from "next/server";
import { z } from "zod/v4";
import { supabase } from "@/lib/supabase";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import {
  validateAndSanitize,
  isHoneypotFilled,
  isSubmissionTooFast,
  checkRateLimit,
  recordRateLimit,
  isDisposableEmail,
  validateRequestHeaders,
  getClientIp,
} from "@/lib/security";
import { sendMail } from "@/lib/mail";
import { mailRecipients } from "@/lib/mail-config";
import { contactHtml, contactSubject, contactText } from "@/lib/mail-templates";

const contactSchema = z.object({
  nameSurname: z
    .string()
    .min(3, "Ad Soyad en az 3 karakter olmalıdır")
    .max(200),
  email: z.string().email("Geçerli bir e-posta adresi giriniz").max(254),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası giriniz")
    .max(20),
  subject: z.string().min(1, "Konu zorunludur").max(500),
  message: z
    .string()
    .min(10, "Mesaj en az 10 karakter olmalıdır")
    .max(5000),
  kvkk: z.literal(true, { error: "KVKK onayı zorunludur" }),
  // Güvenlik alanları
  _hp: z.string().optional(), // honeypot
  _ts: z.number().optional(), // timestamp
  _path: z.string().max(500).optional(), // form kaynak path
});

export async function POST(request: NextRequest) {
  try {
    // KATMAN 7: Request header doğrulama
    const headerCheck = validateRequestHeaders(request.headers);
    if (!headerCheck.valid) {
      return Response.json(
        { success: false, error: "Geçersiz istek." },
        { status: 403 }
      );
    }

    const body = await request.json();

    // KATMAN 2: Honeypot kontrolü
    if (isHoneypotFilled(body._hp)) {
      // Bot gibi davran ama başarılı gibi göster (botu yanılt)
      return Response.json({ success: true });
    }

    // KATMAN 3: Zamanlama kontrolü
    if (body._ts && isSubmissionTooFast(body._ts)) {
      return Response.json(
        { success: false, error: "Lütfen formu dikkatli doldurunuz." },
        { status: 429 }
      );
    }

    // Zod validasyonu
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message);
      return Response.json(
        { success: false, error: "Doğrulama hatası.", details: errors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // KATMAN 1: XSS/Injection kontrolü
    const { sanitized, isMalicious } = validateAndSanitize(
      {
        nameSurname: data.nameSurname,
        subject: data.subject,
        message: data.message,
      },
      {
        email: data.email,
        phone: data.phone,
      }
    );

    if (isMalicious) {
      return Response.json(
        { success: false, error: "Geçersiz içerik tespit edildi." },
        { status: 400 }
      );
    }

    // KATMAN 6: Disposable email kontrolü
    if (isDisposableEmail(data.email)) {
      return Response.json(
        {
          success: false,
          error: "Lütfen geçerli bir e-posta adresi kullanınız.",
        },
        { status: 400 }
      );
    }

    // KATMAN 4: Rate limiting
    const clientIp = getClientIp(request.headers);
    const rateCheck = await checkRateLimit(clientIp, "contact");
    if (!rateCheck.allowed) {
      return Response.json(
        {
          success: false,
          error:
            "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyiniz.",
        },
        { status: 429 }
      );
    }

    // ─── Mail + Supabase paralel çalıştır ───
    // Birinin hatası diğerini etkilemez. (Promise.allSettled)
    const submittedAt = new Date();
    const sourcePath =
      typeof body._path === "string" ? body._path.slice(0, 500) : null;
    const mailData = {
      nameSurname: sanitized.nameSurname,
      email: sanitized.email,
      phone: sanitized.phone,
      subject: sanitized.subject,
      message: sanitized.message,
      ipAddress: clientIp,
      sourcePath,
      submittedAt,
    };

    const [mailResult, supabaseResult] = await Promise.allSettled([
      sendMail({
        recipients: mailRecipients.contact,
        subject: contactSubject(mailData),
        html: contactHtml(mailData),
        text: contactText(mailData),
        replyTo: sanitized.email,
      }),
      supabase
        .from("contact_submissions")
        .insert({
          name_surname: sanitized.nameSurname,
          email: sanitized.email,
          phone: sanitized.phone,
          subject: sanitized.subject,
          message: sanitized.message,
          kvkk_accepted: true,
          ip_address: clientIp,
          user_agent: request.headers.get("user-agent") ?? null,
          source_path: sourcePath,
        })
        .select("id")
        .single(),
    ]);

    const mailOk =
      mailResult.status === "fulfilled" && mailResult.value.success;
    const dbOk =
      supabaseResult.status === "fulfilled" &&
      !supabaseResult.value.error &&
      !!supabaseResult.value.data?.id;

    // Hataları logla (kullanıcıya sızdırma)
    let mailErrorMsg: string | null = null;
    if (!mailOk) {
      mailErrorMsg =
        mailResult.status === "rejected"
          ? String(mailResult.reason)
          : (mailResult.value as { error?: string }).error || "Bilinmeyen hata";
      console.error("[contact] mail gönderilemedi:", mailErrorMsg);
    }
    if (!dbOk) {
      const reason =
        supabaseResult.status === "rejected"
          ? supabaseResult.reason
          : supabaseResult.value.error;
      console.error("[contact] supabase kaydedilemedi:", reason);
    }

    // DB başarılıysa mail durumunu UPDATE et (service role - RLS bypass)
    if (dbOk && supabaseResult.status === "fulfilled") {
      try {
        const insertedId = supabaseResult.value.data!.id as string;
        const admin = getSupabaseAdmin();
        const { error: updateErr } = await admin
          .from("contact_submissions")
          .update({
            mail_sent: mailOk,
            mail_error: mailOk ? null : mailErrorMsg?.slice(0, 1000) ?? null,
            mail_sent_at: mailOk ? new Date().toISOString() : null,
          })
          .eq("id", insertedId);

        if (updateErr) {
          console.error("[contact] mail durumu güncellenemedi:", updateErr);
        }
      } catch (e) {
        console.error("[contact] mail durumu update exception:", e);
      }
    }

    // İkisi de başarısızsa hata dön
    if (!mailOk && !dbOk) {
      return Response.json(
        { success: false, error: "Bir hata oluştu. Lütfen tekrar deneyiniz." },
        { status: 500 }
      );
    }

    // En az biri başarılıysa rate limit kaydet ve başarılı dön
    await recordRateLimit(clientIp, "contact");
    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { success: false, error: "Sunucu hatası." },
      { status: 500 }
    );
  }
}
