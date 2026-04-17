import type { Metadata } from "next";
import dynamic from "next/dynamic";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FaqSection from "@/components/sections/FaqSection";
import BlogSection from "@/components/sections/BlogSection";

// Swiper-based components: lazy load with SSR placeholder
const HeroBanner = dynamic(
  () => import("@/components/sections/HeroBanner"),
  {
    loading: () => (
      <section
        className="banner-03 full-screen p-0 top-position1 bg-img cover-background"
        style={{ backgroundImage: "url('/images/tss-banners.webp')" }}
        data-overlay-dark="7"
      >
        <div className="pt-md-0 container d-flex flex-column pt-sm-6">
          <div className="pt-md-0 align-items-center justify-content-end min-vh-100 pt-6 row text-end">
            <div className="col-lg-10 mb-1-9 mb-lg-0 py-5">
              <div className="title-style1 white">
                <span>Tamamlayıcı Sağlık Sigortası</span>
              </div>
              <p className="display-18 display-lg-5 display-md-10 display-sm-13 display-xl-4 display-xxl-2 mb-2-3 text-white">
                Sağlığınızda Güvenin Adı:<br />
                TSS! En İyi Sağlık Hizmetleri<br />
                İçin Yanınızdayız!
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  }
);

const ProductsGrid = dynamic(
  () => import("@/components/sections/ProductsGrid"),
  {
    loading: () => (
      <section className="bg-light">
        <div className="container">
          <div className="mb-2-1 section-heading text-center">
            <span>Hizmetlerimiz</span>
            <h2 className="display-22 display-lg-11 display-md-16 display-sm-18 mb-0">
              Sigorta Ürünlerimiz
            </h2>
          </div>
        </div>
      </section>
    ),
  }
);

const ClientsCarousel = dynamic(
  () => import("@/components/sections/ClientsCarousel"),
  {
    loading: () => (
      <section className="bg-secondary client-block">
        <div className="logo-bg">
          <div className="container" style={{ minHeight: 120 }} />
        </div>
      </section>
    ),
  }
);

export const metadata: Metadata = {
  title: "En Uygun Sigorta, Sigorta Starı - Hayatınıza Yıldız Dokunuşu!",
  description:
    "Sigorta Starı, tüm sigorta ihtiyaçlarınız için en uygun trafik, kasko, tamamlayıcı sağlık, konut, iş yeri, ferdi kaza, nakliyat ve birçok sigorta ürünü sunar!",
  openGraph: {
    title: "En Uygun Sigorta, Sigorta Starı - Hayatınıza Yıldız Dokunuşu!",
    type: "website",
    url: "https://www.sigortastari.com/",
    description:
      "Sigorta Starı, tüm sigorta ihtiyaçlarınız için en uygun trafik, kasko, tamamlayıcı sağlık, konut, iş yeri, ferdi kaza, nakliyat ve birçok sigorta ürünü sunar!",
    siteName: "Sigortastarı",
    locale: "tr-TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com" },
};

export default function Home() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .slider-fade2 .owl-nav {
              display: none;
            }
            .clients-carousel .swiper-slide {
              height: 120px;
              display: flex;
              align-items: center;
            }
            .logo-bg {
              background: #fff;
              padding-bottom: 50px;
            }
            @media (max-width: 500px) {
              .blog-padding {
                padding-top: 40px !important;
              }
              .ex {
                background-image: url("/images/anne-g.webp") !important;
              }
            }
          `,
        }}
      />

      <HeroBanner />
      <ProductsGrid />
      <AboutSection />
      <WhyChooseUs />
      <ClientsCarousel />
      <FaqSection />
      <BlogSection />
    </>
  );
}
