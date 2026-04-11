import type { Metadata } from "next";
import { Open_Sans, Mulish } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    template: "%s | Sigorta Starı",
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
    siteName: "Sigorta Starı",
    images: [{ url: "/images/logos.png" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.sigortastari.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${openSans.variable} ${mulish.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Sigorta Starı",
              legalName: "Bstar Sigorta Aracılık Hizmetleri Limited Şirketi",
              url: "https://www.sigortastari.com",
              logo: "https://www.sigortastari.com/images/logos.png",
              image: "https://www.sigortastari.com/images/logos.png",
              description:
                "Sigorta Starı, tüm sigorta ihtiyaçlarınız için en uygun trafik, kasko, tamamlayıcı sağlık, konut, iş yeri, ferdi kaza, nakliyat ve birçok sigorta ürünü sunar!",
              telephone: ["+902128132633", "+908502426700", "+905330643000"],
              email: "sigorta@sigortastari.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Fulya Mahallesi, Büyükdere Cad. Pekintaş İş Merkezi No:32 Kat:8",
                addressLocality: "Şişli",
                addressRegion: "İstanbul",
                addressCountry: "TR",
              },
              sameAs: [],
              areaServed: {
                "@type": "Country",
                name: "Turkey",
              },
            }),
          }}
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TRX7GPJ9');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRX7GPJ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
