import nodemailer, { Transporter } from "nodemailer";
import { mailSender, type MailRecipients } from "./mail-config";

/**
 * SMTP Transporter — singleton pattern
 * Connection pool kullanır, her mail'de yeni bağlantı açmaz.
 */
let _transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (_transporter) return _transporter;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP yapılandırması eksik. SMTP_HOST, SMTP_USER, SMTP_PASS env'de tanımlı olmalı."
    );
  }

  _transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user, pass },
    pool: true,
    maxConnections: 3,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    tls: {
      // TLS sürümü 1.2+
      minVersion: "TLSv1.2",
      // Natro shared hosting *.natrohost.com sertifikası kullanıyor,
      // mail.sigortastari.com ile eşleşmiyor — cert kontrolü kapalı.
      rejectUnauthorized: false,
    },
  });

  return _transporter;
}

/**
 * HTML Escape (XSS önleme - kullanıcı verisini HTML body'ye koyarken)
 */
export function escapeHtml(input: string | null | undefined): string {
  if (input == null) return "";
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Mail header injection saldırılarını önle.
 * Kullanıcı email/subject alanlarına \r\n karakteri sokup
 * ek BCC/header eklemesin diye temizle.
 */
function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 500);
}

export interface SendMailParams {
  recipients: MailRecipients;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export interface SendMailResult {
  success: boolean;
  error?: string;
  messageId?: string;
}

/**
 * Mail gönderme — hatalar fırlatılmaz, result objesi döner.
 * Çağıran taraf hata durumunda da akışına devam edebilsin diye.
 */
export async function sendMail(params: SendMailParams): Promise<SendMailResult> {
  try {
    const transporter = getTransporter();

    const info = await transporter.sendMail({
      from: { name: mailSender.name, address: mailSender.address },
      to: params.recipients.to,
      cc: params.recipients.cc,
      bcc: params.recipients.bcc,
      subject: sanitizeHeaderValue(params.subject),
      html: params.html,
      text: params.text,
      replyTo: params.replyTo ? sanitizeHeaderValue(params.replyTo) : undefined,
      headers: {
        "X-Mailer": "sigortastari-next",
        "X-Priority": "3",
      },
    });

    return { success: true, messageId: info.messageId };
  } catch (err) {
    // SMTP hataları client'a sızdırma, sadece logla
    const message = err instanceof Error ? err.message : "Bilinmeyen mail hatası";
    console.error("[mail] gönderim hatası:", message);
    return { success: false, error: message };
  }
}
