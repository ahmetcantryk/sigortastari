import type { Metadata } from "next";
import { Open_Sans, Mulish } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
});

const mulish = Mulish({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sigortastari.com"),
  title: {
    default: "En Uygun Sigorta, Sigorta Starı - Hayatınıza Yıldız Dokunuşu!",
    template: "%s",
  },
  description:
    "Sigorta Starı, tüm sigorta ihtiyaçlarınız için en uygun trafik, kasko, tamamlayıcı sağlık, konut, iş yeri, ferdi kaza, nakliyat ve birçok sigorta ürünü sunar!",
  keywords: [
    "sigorta",
    "trafik sigortası",
    "kasko",
    "sağlık sigortası",
    "konut sigortası",
    "sigorta starı",
  ],
  icons: { icon: "/images/fav-icon.png" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Sigortastarı",
    images: [{ url: "/images/logos.png" }],
  },
  robots: { index: true, follow: true },
  other: {
    "facebook-domain-verification": "etikai8kseznnh2mn2vcpk0tovkn6b",
  },
  alternates: { canonical: "https://www.sigortastari.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${openSans.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}
