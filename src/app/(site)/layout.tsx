import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}
