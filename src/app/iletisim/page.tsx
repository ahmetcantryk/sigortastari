import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/sections/PageBanner";
import ContactFormWrapper from "./ContactFormWrapper";

export const metadata: Metadata = {
  title: "Sigorta Teklifi Almak İçin İletişime Geçin - Sigorta Starı",
  description:
    "Kasko, ÖSS, trafik, konut, iş yeri, TSS ve diğer sigorta ürünleri için teklifi almak istiyorsanız Sigorta Starı ile iletişime geçin ve iletişim formunu doldurun.",
  openGraph: {
    title: "Sigorta Teklifi Almak İçin İletişime Geçin - Sigorta Starı",
    type: "website",
    url: "https://www.sigortastari.com/iletisim",
    description:
      "Kasko, ÖSS, trafik, konut, iş yeri, TSS ve diğer sigorta ürünleri için teklifi almak istiyorsanız Sigorta Starı ile iletişime geçin ve iletişim formunu doldurun.",
    siteName: "Sigortastarı",
    locale: "tr-TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.form-input{
 padding: 0 10px 20px 10px;
}
          `,
        }}
      />

      <PageBanner
        title="İletişim"
        backgroundImage="/images/iletisim-banner.webp"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "İletişim", href: "/iletisim" },
        ]}
      />

      <section>
        <div className="container">
          <div className="row">
            {/* Contact Info Cards */}
            <div className="col-lg-5 col-xl-4 mb-2-9 mb-lg-0">
              <div className="pe-lg-3 mt-n1-9">
                {/* Konum */}
                <div className="card card-style4 mt-1-9">
                  <div className="card-body p-1-6 p-sm-1-9">
                    <div className="d-flex">
                      <div className="flex-shrink-0 icon-box">
                        <i className="ti-location-pin text-primary z-index-9 display-8 position-relative"></i>
                        <div className="box-circle primary"></div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h4 className="h5">Konum</h4>
                        <span>
                          Fulya Mahallesi, Büyükdere Cad. Pekintaş İş
                          Merkezi No:32 Kat:8, Şişli/İstanbul
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telefon */}
                <div className="card card-style4 mt-1-9">
                  <div className="card-body p-1-6 p-sm-1-9">
                    <div className="d-flex">
                      <div className="flex-shrink-0 icon-box">
                        <i className="ti-mobile text-primary z-index-9 display-8 position-relative"></i>
                        <div className="box-circle primary"></div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h4 className="h5">Telefon Numarası</h4>
                        <span className="d-block">
                          <Link href="tel:+902128132633">
                            0212 813 26 33
                          </Link>
                        </span>
                        <span className="d-block">
                          <Link href="tel:+908502426700">
                            0850 242 67 00
                          </Link>
                        </span>
                        <span className="d-block">
                          <Link href="tel:+05330643000">
                            0533 064 30 00
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* E-posta */}
                <div className="card card-style4 mt-1-9">
                  <div className="card-body p-1-6 p-sm-1-9">
                    <div className="d-flex">
                      <div className="flex-shrink-0 icon-box">
                        <i className="ti-email text-primary z-index-9 display-8 position-relative"></i>
                        <div className="box-circle primary"></div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h4 className="h5">E-posta Adresi</h4>
                        <span className="d-block">
                          <Link href="mailto:sigorta@sigortastari.com">
                            sigorta@sigortastari.com
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 col-xl-8">
              <div className="ps-xl-3">
                <h2 className="h3 mb-4" style={{ paddingLeft: "10px" }}>
                  Bize Ulaşın
                </h2>
                <ContactFormWrapper />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
