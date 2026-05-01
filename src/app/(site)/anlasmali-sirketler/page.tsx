import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/sections/PageBanner";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: "Türkiye'nin En İyi Anlaşmalı Sigorta Şirketleri | Sigorta Starı",
  description:
    "Sigorta Starı'nın anlaşmalı olduğu Türkiye'nin en iyi, en kapsamlı ve en uygun sigorta poliçesi veren sigora şirketlerini hemen inceleyin ve sigorta teklifi alın!",
  openGraph: {
    title: "Türkiye'nin En İyi Anlaşmalı Sigorta Şirketleri | Sigorta Starı",
    type: "website",
    url: "https://www.sigortastari.com/anlasmali-sirketler",
    description:
      "Sigorta Starı'nın anlaşmalı olduğu Türkiye'nin en iyi, en kapsamlı ve en uygun sigorta poliçesi veren sigora şirketlerini hemen inceleyin ve sigorta teklifi alın!",
    siteName: "Sigortastarı",
    locale: "tr_TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com/anlasmali-sirketler" },
};

const companies = [
  { name: "Hepiyi", logo: "/images/hepiyi.svg", alt: "Hepiyi Görseli" },
  {
    name: "Madgeburger Sigorta",
    logo: "/images/madgeburger(2).webp",
    alt: "Madgeburger Sigorta Görseli",
  },
  {
    name: "Mapfre Sigorta",
    logo: "/images/mapfre(2).webp",
    alt: "Mapfre Sigorta Görseli",
  },
  {
    name: "Ray Sigorta",
    logo: "/images/ray(2).webp",
    alt: "Ray Sigorta Görseli",
  },
  {
    name: "Doğa Sigorta",
    logo: "/images/doga(2).webp",
    alt: "Doğa Sigorta Görseli",
  },
  {
    name: "Demir Sigorta",
    logo: "/images/demir(2).webp",
    alt: "Demir Sigorta Görseli",
  },
  {
    name: "Bereket Sigorta",
    logo: "/images/bereket(2).webp",
    alt: "Bereket sigorta Görseli",
  },
  {
    name: "Axa Sigorta",
    logo: "/images/axa(3).webp",
    alt: "Axa Sigorta Görseli",
  },
  { name: "Aveon", logo: "/images/aveon(2).webp", alt: "Aveon Görseli" },
  {
    name: "Allianz Sigorta",
    logo: "/images/allianz(2).webp",
    alt: "Allianz Sigorta Görseli",
  },
  {
    name: "Ak Sigorta",
    logo: "/images/ak(2).webp",
    alt: "Ak Sigorta Görseli",
  },
  {
    name: "Sompo Sigorta",
    logo: "/images/sompo(2).webp",
    alt: "Sompo Sigorta Görseli",
  },
  {
    name: "Türkiye Sigorta",
    logo: "/images/turkiye-sigorta.webp",
    alt: "Türkiye Sigorta Görseli",
  },
  {
    name: "Türk Nippon Sigorta",
    logo: "/images/turk-nippon(2).webp",
    alt: "Türk Nippon Sigorta Görseli",
  },
  {
    name: "Anadolu Sigorta",
    logo: "/images/anadolu(2).webp",
    alt: "Anadolu Sigorta Görseli",
  },
  {
    name: "Quick Sigorta",
    logo: "/images/quick-1.webp",
    alt: "Quick Sigorta Görseli",
  },
];

export default function AnlasmaliSirketlerPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.referanceFlex .box {
 width: 265px;
 height: 120px;
 margin: 5px;
 display: flex;
 justify-content: center;
 align-items: center;
 background: #E9E9E9;
 border-radius: 12px;
 padding: 0 20px;
}
.referanceFlex .box img {
 width: 100%;
 object-fit: scale-down;
}
.referanceTitle {
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 800;
 font-size: 40px;
 line-height: 144.9%;
 margin-bottom: 30px;
 text-align: center;
 letter-spacing: 0.24em;
 color: #3B3663;
}
.referanceSection {
 padding: 60px 0;
}
.referanceFlex {
 position: relative;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
}
.teklifSections {
 padding-top: 120px;
}
@media only screen and (max-width:992px) {
 .referanceFlex .box {
  width: 220px;
 }
 .referanceTitle {
  font-size: 36px;
 }
}
@media only screen and (max-width: 768px) {
 .referanceFlex .box {
  width: 47%
 }
 .referanceSection {
  padding-top: 20px;
 }
 .referanceTitle {
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 30px;
 }
 .teklifSections {
  padding-top: 60px;
 }
}
@media (max-width:500px) {
 .blog-padding {
  padding-top: 40px !important;
 }
}
          `,
        }}
      />

      <PageBanner
        title="Anlaşmalı Şirketler"
        backgroundImage="/images/anlasmali-banner.webp"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Anlaşmalı Şirketler", href: "/anlasmali-sirketler" },
        ]}
      />

      {/* Companies Section */}
      <section className="referanceSection pb-0">
        <div className="container">
          <div
            className="section-heading text-center mb-2-9 mt-2-9 mb-lg-6 wow fadeIn"
            data-wow-delay="100ms"
            style={{
              visibility: "visible" as const,
              animationDelay: "100ms",
              animationName: "fadeIn",
            }}
          >
            <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
              Anlaşmalı Şirketler
            </h2>
          </div>
          <div className="referanceFlex">
            {companies.map((company) => (
              <div className="box" key={company.name}>
                <Image
                  loading="lazy"
                  src={company.logo}
                  width={200}
                  height={100}
                  alt={company.alt}
                  style={{ width: "100%", height: "100%" }}
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div className="offer-card">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <h2>
                  Sigorta Starı&apos;ndan Kasko Sigortası Teklifi Aldınız Mı?
                </h2>
              </div>
              <div className="col-lg-6">
                <p>Size özel sigorta poliçesini en uygun fiyata alın!</p>
                <Link href="/teklif-al" className="butn-style3 hover-white">
                  <span>Teklif Al</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />
    </>
  );
}
