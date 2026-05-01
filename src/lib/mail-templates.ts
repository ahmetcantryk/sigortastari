import { escapeHtml } from "./mail";

interface ContactData {
  nameSurname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  ipAddress?: string | null;
  sourcePath?: string | null;
  submittedAt?: Date;
}

interface QuoteData {
  nameSurname: string;
  tcKimlikNo: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  insuranceType?: string | null;
  plaka?: string | null;
  serino?: string | null;
  ipAddress?: string | null;
  sourcePath?: string | null;
  submittedAt?: Date;
}

const BRAND_COLOR = "#E7462C";
const TEXT_COLOR = "#1e293b";
const MUTED_COLOR = "#64748b";
const BORDER_COLOR = "#e2e8f0";
const BG_COLOR = "#f8fafc";

function baseLayout(title: string, contentRows: string, footer: string): string {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${BG_COLOR};font-family:Arial,Helvetica,sans-serif;color:${TEXT_COLOR};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG_COLOR};padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid ${BORDER_COLOR};border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:${BRAND_COLOR};padding:20px 24px;color:#ffffff;">
              <div style="font-size:13px;opacity:0.85;letter-spacing:1px;text-transform:uppercase;">Sigorta Starı</div>
              <div style="font-size:20px;font-weight:700;margin-top:4px;">${escapeHtml(title)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${contentRows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:${BG_COLOR};border-top:1px solid ${BORDER_COLOR};color:${MUTED_COLOR};font-size:12px;line-height:1.5;">
              ${footer}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string | null | undefined, isBlock = false): string {
  if (!value) return "";
  const safe = escapeHtml(value);
  if (isBlock) {
    return `
    <tr>
      <td colspan="2" style="padding:12px 0;border-bottom:1px solid ${BORDER_COLOR};">
        <div style="font-size:12px;color:${MUTED_COLOR};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">${escapeHtml(label)}</div>
        <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;color:${TEXT_COLOR};">${safe}</div>
      </td>
    </tr>`;
  }
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BORDER_COLOR};font-size:13px;color:${MUTED_COLOR};width:160px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid ${BORDER_COLOR};font-size:14px;color:${TEXT_COLOR};">${safe}</td>
    </tr>`;
}

function formatDate(d: Date): string {
  return d.toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ─── İletişim Formu ─── */

export function contactSubject(data: ContactData): string {
  return `Yeni İletişim Mesajı: ${data.nameSurname}`;
}

export function contactHtml(data: ContactData): string {
  const submittedAt = data.submittedAt || new Date();
  const rows =
    row("Ad Soyad", data.nameSurname) +
    row("E-posta", data.email) +
    row("Telefon", data.phone) +
    row("Konu", data.subject) +
    row("Form Kaynağı", data.sourcePath) +
    row("Mesaj", data.message, true);

  const footer = `
    <div>Tarih: ${escapeHtml(formatDate(submittedAt))}</div>
    ${data.ipAddress ? `<div>IP: ${escapeHtml(data.ipAddress)}</div>` : ""}
    <div style="margin-top:6px;">Bu mail sigortastari.com web sitesinden otomatik gönderildi.</div>
  `;

  return baseLayout("Yeni İletişim Mesajı", rows, footer);
}

export function contactText(data: ContactData): string {
  return [
    "YENİ İLETİŞİM MESAJI",
    "─────────────────",
    `Ad Soyad: ${data.nameSurname}`,
    `E-posta:  ${data.email}`,
    `Telefon:  ${data.phone}`,
    `Konu:     ${data.subject}`,
    data.sourcePath ? `Kaynak:   ${data.sourcePath}` : "",
    "",
    "Mesaj:",
    data.message,
    "",
    `Tarih: ${formatDate(data.submittedAt || new Date())}`,
    data.ipAddress ? `IP: ${data.ipAddress}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/* ─── Teklif Al Formu ─── */

export function quoteSubject(data: QuoteData): string {
  const insurance = data.insuranceType ? ` - ${data.insuranceType}` : "";
  return `Yeni Sigorta Teklif Talebi${insurance}: ${data.nameSurname}`;
}

export function quoteHtml(data: QuoteData): string {
  const submittedAt = data.submittedAt || new Date();
  const rows =
    row("Ad Soyad", data.nameSurname) +
    row("TC Kimlik No", data.tcKimlikNo) +
    row("Doğum Tarihi", data.dateOfBirth) +
    row("Telefon", data.phone) +
    row("E-posta", data.email) +
    row("Sigorta Türü", data.insuranceType) +
    row("Plaka", data.plaka) +
    row("Belge Seri No", data.serino) +
    row("Form Kaynağı", data.sourcePath);

  const footer = `
    <div>Tarih: ${escapeHtml(formatDate(submittedAt))}</div>
    ${data.ipAddress ? `<div>IP: ${escapeHtml(data.ipAddress)}</div>` : ""}
    <div style="margin-top:6px;">Bu mail sigortastari.com web sitesinden otomatik gönderildi.</div>
  `;

  return baseLayout("Yeni Teklif Talebi", rows, footer);
}

export function quoteText(data: QuoteData): string {
  return [
    "YENİ TEKLİF TALEBİ",
    "─────────────────",
    `Ad Soyad:       ${data.nameSurname}`,
    `TC Kimlik No:   ${data.tcKimlikNo}`,
    `Doğum Tarihi:   ${data.dateOfBirth}`,
    `Telefon:        ${data.phone}`,
    `E-posta:        ${data.email}`,
    data.insuranceType ? `Sigorta Türü:   ${data.insuranceType}` : "",
    data.plaka ? `Plaka:          ${data.plaka}` : "",
    data.serino ? `Belge Seri No:  ${data.serino}` : "",
    data.sourcePath ? `Kaynak:         ${data.sourcePath}` : "",
    "",
    `Tarih: ${formatDate(data.submittedAt || new Date())}`,
    data.ipAddress ? `IP: ${data.ipAddress}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
