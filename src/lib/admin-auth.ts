// Edge Runtime uyumlu (middleware'de çalışır)
// Supabase Auth session token'ı cookie'de saklanır

const COOKIE_NAME = "admin_session";
const TOKEN_MAX_AGE = 24 * 60 * 60; // 1 gün (saniye)

function getSecret(): string {
  return process.env.ADMIN_SECRET || "sigortastari-admin-secret-2026";
}

// Edge-uyumlu basit hash
function simpleHash(input: string): string {
  const str = input + getSecret();
  let h1 = 0;
  for (let i = 0; i < str.length; i++) {
    h1 = ((h1 << 5) - h1 + str.charCodeAt(i)) | 0;
  }
  const str2 = str.split("").reverse().join("") + String(h1);
  let h2 = 0;
  for (let i = 0; i < str2.length; i++) {
    h2 = ((h2 << 7) - h2 + str2.charCodeAt(i)) | 0;
  }
  return Math.abs(h1).toString(36) + Math.abs(h2).toString(36);
}

export function createToken(): string {
  const ts = Date.now().toString();
  const hash = simpleHash(`admin:${ts}`);
  return `admin:${ts}:${hash}`;
}

export function verifyToken(token: string): boolean {
  const parts = token.split(":");
  if (parts.length !== 3 || parts[0] !== "admin") return false;
  const [prefix, ts, hash] = parts;
  const expected = simpleHash(`${prefix}:${ts}`);
  if (hash !== expected) return false;
  // Token 24 saat geçerli
  const age = Date.now() - parseInt(ts, 10);
  return age < TOKEN_MAX_AGE * 1000;
}

export { COOKIE_NAME, TOKEN_MAX_AGE };
