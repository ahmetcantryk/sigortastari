/**
 * Mail Alıcı Konfigürasyonu
 * ─────────────────────────
 * Her form tipi için to / cc / bcc adreslerini buradan yönet.
 * Birden fazla adres virgülle değil, dizi olarak ekle.
 *
 * Örnek:
 *   to:  ["info@sigortastari.com", "ahmet@sigortastari.com"]
 *   cc:  ["yonetici@sigortastari.com"]
 *   bcc: ["arsiv@sigortastari.com"]
 */

export interface MailRecipients {
  to: string[];
  cc?: string[];
  bcc?: string[];
}

export const mailRecipients = {
  // İletişim formu mailleri
  contact: {
    to: ["kcerennur@gmail.com"],
    cc: ["ahmetcan.1855@gmail.com"],
    bcc: [],
  } satisfies MailRecipients,

  // Teklif al formu mailleri
  quote: {
    to: ["kcerennur@gmail.com"],
    cc: ["ahmetcan.1855@gmail.com"],
    bcc: [],
  } satisfies MailRecipients,
} as const;

/**
 * Gönderici bilgileri (envden gelir, fallback olarak burası)
 */
export const mailSender = {
  name: process.env.SMTP_FROM_NAME || "Sigorta Starı",
  address: process.env.SMTP_USER || "noreply@sigortastari.com",
};
