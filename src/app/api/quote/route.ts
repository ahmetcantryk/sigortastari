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
  isValidTcKimlik,
  validateRequestHeaders,
  getClientIp,
} from "@/lib/security";
import { sendMail } from "@/lib/mail";
import { mailRecipients } from "@/lib/mail-config";
import { quoteHtml, quoteSubject, quoteText } from "@/lib/mail-templates";

const VEHICLE_TYPES = ["Trafik Sigortası", "Kasko Sigortası"];

const quoteSchema = z
  .object({
    nameSurname: z
      .string()
      .min(3, "Ad Soyad en az 3 karakter olmalıdır")
      .max(200),
    tcKimlikNo: z
      .string()
      .regex(/^\d{11}$/, "TC Kimlik No 11 haneli olmalıdır"),
    dateOfBirth: z
      .string()
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Geçerli bir tarih giriniz (GG/AA/YYYY)"),
    phone: z.string().min(1, "Telefon zorunludur").max(20),
    email: z.string().email("Geçerli bir e-posta adresi giriniz").max(254),
    insuranceType: z.string().optional(),
    plaka: z.string().max(20).optional(),
    serino: z.string().max(50).optional(),
    kvkk: z.literal(true, { error: "KVKK onayı zorunludur" }),
    _hp: z.string().optional(),
    _ts: z.number().optional(),
    _path: z.string().max(500).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.insuranceType && VEHICLE_TYPES.includes(data.insuranceType)) {
      if (!data.plaka || data.plaka.trim().length < 3) {
        ctx.addIssue({
          code: "custom",
          path: ["plaka"],
          message: "Plaka zorunludur",
        });
      }
      if (!data.serino || data.serino.trim().length < 3) {
        ctx.addIssue({
          code: "custom",
          path: ["serino"],
          message: "Belge Seri No zorunludur",
        });
      }
    }
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
    const parsed = quoteSchema.safeParse(body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message);
      return Response.json(
        { success: false, error: "Doğrulama hatası.", details: errors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // KATMAN 5: TC Kimlik No algoritma doğrulaması
    if (!isValidTcKimlik(data.tcKimlikNo)) {
      return Response.json(
        { success: false, error: "Geçersiz TC Kimlik numarası." },
        { status: 400 }
      );
    }

    // KATMAN 1: XSS/Injection kontrolü
    const freeTextFields: Record<string, unknown> = {
      nameSurname: data.nameSurname,
    };
    if (data.insuranceType) freeTextFields.insuranceType = data.insuranceType;
    if (data.plaka) freeTextFields.plaka = data.plaka;
    if (data.serino) freeTextFields.serino = data.serino;

    const structuredFields: Record<string, unknown> = {
      tcKimlikNo: data.tcKimlikNo,
      dateOfBirth: data.dateOfBirth,
      phone: data.phone,
      email: data.email,
    };

    const { sanitized, isMalicious } = validateAndSanitize(
      freeTextFields,
      structuredFields
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
    const rateCheck = await checkRateLimit(clientIp, "quote");
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
    const submittedAt = new Date();
    const sourcePath =
      typeof body._path === "string" ? body._path.slice(0, 500) : null;
    const mailData = {
      nameSurname: sanitized.nameSurname,
      tcKimlikNo: sanitized.tcKimlikNo,
      dateOfBirth: sanitized.dateOfBirth,
      phone: sanitized.phone,
      email: sanitized.email,
      insuranceType: sanitized.insuranceType ?? null,
      plaka: sanitized.plaka ?? null,
      serino: sanitized.serino ?? null,
      ipAddress: clientIp,
      sourcePath,
      submittedAt,
    };

    const [mailResult, supabaseResult] = await Promise.allSettled([
      sendMail({
        recipients: mailRecipients.quote,
        subject: quoteSubject(mailData),
        html: quoteHtml(mailData),
        text: quoteText(mailData),
        replyTo: sanitized.email,
      }),
      supabase
        .from("quote_submissions")
        .insert({
          name_surname: sanitized.nameSurname,
          tc_kimlik_no: sanitized.tcKimlikNo,
          date_of_birth: sanitized.dateOfBirth,
          phone: sanitized.phone,
          email: sanitized.email,
          insurance_type: sanitized.insuranceType ?? null,
          plaka: sanitized.plaka ?? null,
          seri_no: sanitized.serino ?? null,
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
    let dbOk =
      supabaseResult.status === "fulfilled" &&
      !supabaseResult.value.error &&
      !!supabaseResult.value.data?.id;

    let mailErrorMsg: string | null = null;
    if (!mailOk) {
      mailErrorMsg =
        mailResult.status === "rejected"
          ? String(mailResult.reason)
          : (mailResult.value as { error?: string }).error || "Bilinmeyen hata";
      console.error("[quote] mail gönderilemedi:", mailErrorMsg);
    }
    if (!dbOk) {
      const reason =
        supabaseResult.status === "rejected"
          ? supabaseResult.reason
          : supabaseResult.value.error;
      console.error("[quote] supabase (anon) kaydedilemedi:", reason);
    }

    // FALLBACK: anon insert başarısızsa service role ile dene (RLS bypass)
    let insertedId: string | null =
      dbOk && supabaseResult.status === "fulfilled"
        ? (supabaseResult.value.data!.id as string)
        : null;

    if (!dbOk) {
      try {
        const admin = getSupabaseAdmin();
        const { data: adminInsert, error: adminErr } = await admin
          .from("quote_submissions")
          .insert({
            name_surname: sanitized.nameSurname,
            tc_kimlik_no: sanitized.tcKimlikNo,
            date_of_birth: sanitized.dateOfBirth,
            phone: sanitized.phone,
            email: sanitized.email,
            insurance_type: sanitized.insuranceType ?? null,
            plaka: sanitized.plaka ?? null,
            seri_no: sanitized.serino ?? null,
            kvkk_accepted: true,
            ip_address: clientIp,
            user_agent: request.headers.get("user-agent") ?? null,
            source_path: sourcePath,
            mail_sent: mailOk,
            mail_error: mailOk ? null : mailErrorMsg?.slice(0, 1000) ?? null,
            mail_sent_at: mailOk ? new Date().toISOString() : null,
          })
          .select("id")
          .single();
        if (!adminErr && adminInsert?.id) {
          dbOk = true;
          insertedId = adminInsert.id as string;
          console.warn("[quote] supabase service-role fallback başarılı");
        } else {
          console.error("[quote] supabase service-role da başarısız:", adminErr);
        }
      } catch (e) {
        console.error("[quote] supabase service-role exception:", e);
      }
    }

    // Anon yoluyla insert ettiyse mail durumunu UPDATE et
    const wasAnonInsert =
      supabaseResult.status === "fulfilled" &&
      !supabaseResult.value.error &&
      !!supabaseResult.value.data?.id;
    if (dbOk && insertedId && wasAnonInsert) {
      try {
        const admin = getSupabaseAdmin();
        const { error: updateErr } = await admin
          .from("quote_submissions")
          .update({
            mail_sent: mailOk,
            mail_error: mailOk ? null : mailErrorMsg?.slice(0, 1000) ?? null,
            mail_sent_at: mailOk ? new Date().toISOString() : null,
          })
          .eq("id", insertedId);

        if (updateErr) {
          console.error("[quote] mail durumu güncellenemedi:", updateErr);
        }
      } catch (e) {
        console.error("[quote] mail durumu update exception:", e);
      }
    }

    if (!mailOk && !dbOk) {
      return Response.json(
        { success: false, error: "Bir hata oluştu. Lütfen tekrar deneyiniz." },
        { status: 500 }
      );
    }

    await recordRateLimit(clientIp, "quote");
    return Response.json({ success: true });
  } catch (err) {
    console.error("Quote form error:", err);
    return Response.json(
      { success: false, error: "Sunucu hatası." },
      { status: 500 }
    );
  }
}
