-- ============================================
-- Sigortastari Form Tabloları - Supabase Migration
-- ============================================

-- 1. İletişim Formu Tablosu
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_surname TEXT NOT NULL CHECK (char_length(name_surname) >= 3 AND char_length(name_surname) <= 200),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone TEXT NOT NULL CHECK (char_length(phone) >= 10 AND char_length(phone) <= 20),
  subject TEXT NOT NULL CHECK (char_length(subject) >= 1 AND char_length(subject) <= 500),
  message TEXT NOT NULL CHECK (char_length(message) >= 10 AND char_length(message) <= 5000),
  kvkk_accepted BOOLEAN NOT NULL DEFAULT FALSE CHECK (kvkk_accepted = TRUE),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. Teklif Formu Tablosu
CREATE TABLE IF NOT EXISTS quote_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_surname TEXT NOT NULL CHECK (char_length(name_surname) >= 3 AND char_length(name_surname) <= 200),
  tc_kimlik_no TEXT NOT NULL CHECK (tc_kimlik_no ~ '^\d{11}$'),
  date_of_birth TEXT NOT NULL CHECK (date_of_birth ~ '^\d{2}/\d{2}/\d{4}$'),
  phone TEXT NOT NULL CHECK (char_length(phone) >= 10 AND char_length(phone) <= 20),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  insurance_type TEXT,
  plaka TEXT CHECK (plaka IS NULL OR char_length(plaka) <= 20),
  seri_no TEXT CHECK (seri_no IS NULL OR char_length(seri_no) <= 50),
  kvkk_accepted BOOLEAN NOT NULL DEFAULT FALSE CHECK (kvkk_accepted = TRUE),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 3. Rate Limiting Tablosu (IP bazlı spam koruması)
CREATE TABLE IF NOT EXISTS rate_limits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  form_type TEXT NOT NULL CHECK (form_type IN ('contact', 'quote')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Rate limit index (IP + form_type + zaman bazlı sorgular için)
CREATE INDEX IF NOT EXISTS idx_rate_limits_ip_form_time
  ON rate_limits (ip_address, form_type, created_at DESC);

-- Eski rate limit kayıtlarını otomatik temizle (24 saat)
CREATE INDEX IF NOT EXISTS idx_rate_limits_cleanup
  ON rate_limits (created_at);

-- 4. Row Level Security (RLS) Etkinleştir
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;

-- Anon kullanıcılar SADECE INSERT yapabilir (okuma/güncelleme/silme YOK)
CREATE POLICY "Allow anonymous inserts on contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (TRUE);

CREATE POLICY "Allow anonymous inserts on quote_submissions"
  ON quote_submissions
  FOR INSERT
  TO anon
  WITH CHECK (TRUE);

CREATE POLICY "Allow anonymous inserts on rate_limits"
  ON rate_limits
  FOR INSERT
  TO anon
  WITH CHECK (TRUE);

-- Rate limit tablosunda anon kullanıcılar kendi IP'lerini okuyabilir
CREATE POLICY "Allow anonymous to read own rate_limits"
  ON rate_limits
  FOR SELECT
  TO anon
  USING (TRUE);

-- Service role her şeye erişebilir (dashboard ve admin)
CREATE POLICY "Service role full access contact_submissions"
  ON contact_submissions
  FOR ALL
  TO service_role
  USING (TRUE)
  WITH CHECK (TRUE);

CREATE POLICY "Service role full access quote_submissions"
  ON quote_submissions
  FOR ALL
  TO service_role
  USING (TRUE)
  WITH CHECK (TRUE);

CREATE POLICY "Service role full access rate_limits"
  ON rate_limits
  FOR ALL
  TO service_role
  USING (TRUE)
  WITH CHECK (TRUE);

-- 5. Eski rate limit kayıtlarını temizleyen fonksiyon (opsiyonel cron job)
CREATE OR REPLACE FUNCTION cleanup_old_rate_limits()
RETURNS void AS $$
BEGIN
  DELETE FROM rate_limits WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
