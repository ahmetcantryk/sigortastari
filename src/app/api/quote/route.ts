import { type NextRequest } from "next/server";
import { z } from "zod/v4";
import { supabase } from "@/lib/supabase";
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

const quoteSchema = z.object({
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
  // Güvenlik alanları
  _hp: z.string().optional(), // honeypot
  _ts: z.number().optional(), // timestamp
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
    // Serbest metin alanları sanitize edilir, yapısal alanlar sadece kontrol edilir
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

    const { sanitized, isMalicious } = validateAndSanitize(freeTextFields, structuredFields);

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

    // Supabase'e kaydet
    const { error: insertError } = await supabase
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
      });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return Response.json(
        { success: false, error: "Bir hata oluştu. Lütfen tekrar deneyiniz." },
        { status: 500 }
      );
    }

    // Rate limit kaydı oluştur
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
