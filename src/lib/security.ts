import { supabase } from "./supabase";

// ============================================
// KATMAN 1: Input Sanitizasyonu (XSS & Injection koruması)
// ============================================

/**
 * HTML tag'lerini ve tehlikeli karakterleri temizler.
 * Script injection, XSS, SQL injection vektörlerini engeller.
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .replace(/\\/g, "&#x5C;")
    .replace(/`/g, "&#96;")
    .trim();
}

/**
 * Tehlikeli pattern'ları tespit eder.
 * SQL injection, script injection, command injection denemeleri.
 */
export function containsMaliciousContent(input: string): boolean {
  const maliciousPatterns = [
    /<script\b[^>]*>/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick=, onerror=, onload= vb.
    /data:\s*text\/html/i,
    /vbscript:/i,
    /expression\s*\(/i,
    /eval\s*\(/i,
    /document\.(cookie|domain|write)/i,
    /window\.(location|open)/i,
    /\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|EXEC|EXECUTE)\b.*\b(FROM|INTO|TABLE|SET|WHERE)\b/i,
    /--\s*$/m, // SQL comment
    /;\s*(DROP|DELETE|UPDATE|INSERT)/i,
    /\x00/, // null byte injection
  ];

  return maliciousPatterns.some((pattern) => pattern.test(input));
}

/**
 * Tüm form alanlarını kontrol eder.
 * Serbest metin alanları sanitize edilir, yapısal alanlar (regex ile doğrulanmış)
 * sadece malicious content kontrolünden geçirilir.
 *
 * @param freeTextFields - Kullanıcının serbest yazdığı alanlar (ad, konu, mesaj vb.)
 * @param structuredFields - Format doğrulaması yapılmış alanlar (TC, tarih, telefon, email vb.)
 */
export function validateAndSanitize(
  freeTextFields: Record<string, unknown>,
  structuredFields: Record<string, unknown> = {}
): { sanitized: Record<string, string>; isMalicious: boolean } {
  const sanitized: Record<string, string> = {};
  let isMalicious = false;

  // Serbest metin alanları: malicious kontrol + sanitize
  for (const [key, value] of Object.entries(freeTextFields)) {
    if (typeof value === "string") {
      if (containsMaliciousContent(value)) {
        isMalicious = true;
        return { sanitized, isMalicious };
      }
      sanitized[key] = sanitizeInput(value);
    }
  }

  // Yapısal alanlar: sadece malicious kontrol, sanitize yok (Zod regex yeterli)
  for (const [key, value] of Object.entries(structuredFields)) {
    if (typeof value === "string") {
      if (containsMaliciousContent(value)) {
        isMalicious = true;
        return { sanitized, isMalicious };
      }
      sanitized[key] = value;
    }
  }

  return { sanitized, isMalicious };
}

// ============================================
// KATMAN 2: Honeypot Koruması (Bot tuzağı)
// ============================================

/**
 * Honeypot alanını kontrol eder.
 * Botlar gizli alanları da doldurur - gerçek kullanıcılar göremez.
 */
export function isHoneypotFilled(honeypotValue: string | undefined): boolean {
  return !!honeypotValue && honeypotValue.trim().length > 0;
}

// ============================================
// KATMAN 3: Zamanlama Kontrolü (Bot hız tespiti)
// ============================================

/**
 * Form gönderim süresini kontrol eder.
 * Botlar formu saniyeler içinde doldurur, insanlar en az birkaç saniye harcar.
 */
export function isSubmissionTooFast(
  formLoadTimestamp: number,
  minimumSeconds: number = 3
): boolean {
  const now = Date.now();
  const elapsed = (now - formLoadTimestamp) / 1000;
  return elapsed < minimumSeconds;
}

// ============================================
// KATMAN 4: Rate Limiting (IP bazlı sınırlama)
// ============================================

const RATE_LIMIT_WINDOW_MINUTES = 15;
const MAX_SUBMISSIONS_PER_WINDOW = 5;

/**
 * IP adresinin rate limit'e takılıp takılmadığını kontrol eder.
 * 15 dakika içinde 5'ten fazla gönderim engellenir.
 */
export async function checkRateLimit(
  ipAddress: string,
  formType: "contact" | "quote"
): Promise<{ allowed: boolean; remaining: number }> {
  const windowStart = new Date(
    Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
  ).toISOString();

  const { count, error } = await supabase
    .from("rate_limits")
    .select("*", { count: "exact", head: true })
    .eq("ip_address", ipAddress)
    .eq("form_type", formType)
    .gte("created_at", windowStart);

  if (error) {
    // Hata durumunda güvenli tarafta kal, rate limit'i atla
    console.error("Rate limit check error:", error);
    return { allowed: true, remaining: MAX_SUBMISSIONS_PER_WINDOW };
  }

  const currentCount = count ?? 0;
  const remaining = Math.max(0, MAX_SUBMISSIONS_PER_WINDOW - currentCount);

  return {
    allowed: currentCount < MAX_SUBMISSIONS_PER_WINDOW,
    remaining,
  };
}

/**
 * Rate limit kaydı oluşturur.
 */
export async function recordRateLimit(
  ipAddress: string,
  formType: "contact" | "quote"
): Promise<void> {
  await supabase.from("rate_limits").insert({
    ip_address: ipAddress,
    form_type: formType,
  });
}

// ============================================
// KATMAN 5: TC Kimlik No Doğrulama Algoritması
// ============================================

/**
 * TC Kimlik numarasının matematiksel geçerliliğini kontrol eder.
 * Türkiye Cumhuriyeti kimlik numarası doğrulama algoritması.
 */
export function isValidTcKimlik(tc: string): boolean {
  if (!/^\d{11}$/.test(tc)) return false;
  if (tc[0] === "0") return false;

  const digits = tc.split("").map(Number);

  // 10. hane kontrolü
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  const check10 = (oddSum * 7 - evenSum) % 10;
  if (check10 !== digits[9]) return false;

  // 11. hane kontrolü
  const sum10 = digits.slice(0, 10).reduce((a, b) => a + b, 0);
  if (sum10 % 10 !== digits[10]) return false;

  return true;
}

// ============================================
// KATMAN 6: Email Domain Doğrulama
// ============================================

const DISPOSABLE_EMAIL_DOMAINS = [
  "tempmail.com",
  "throwaway.email",
  "guerrillamail.com",
  "mailinator.com",
  "10minutemail.com",
  "temp-mail.org",
  "fakeinbox.com",
  "sharklasers.com",
  "guerrillamailblock.com",
  "grr.la",
  "dispostable.com",
  "yopmail.com",
  "trashmail.com",
  "maildrop.cc",
];

/**
 * Geçici/tek kullanımlık email adreslerini tespit eder.
 */
export function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return true;
  return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
}

// ============================================
// KATMAN 7: Request Header Doğrulama
// ============================================

/**
 * İsteğin tarayıcıdan gelip gelmediğini doğrular.
 * Bot framework'leri genellikle standart header'ları göndermez.
 */
export function validateRequestHeaders(headers: Headers): {
  valid: boolean;
  reason?: string;
} {
  const contentType = headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return { valid: false, reason: "Invalid content type" };
  }

  const origin = headers.get("origin");
  const referer = headers.get("referer");
  if (!origin && !referer) {
    return { valid: false, reason: "Missing origin/referer" };
  }

  return { valid: true };
}

// ============================================
// IP Adresini Al
// ============================================

export function getClientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headers.get("x-real-ip") ??
    "unknown"
  );
}
