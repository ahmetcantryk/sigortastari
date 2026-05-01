import type { Metadata } from "next";
import PreloadResources from "@/components/PreloadResources";
import HeroBanner from "@/components/sections/HeroBanner";
import ProductsGrid from "@/components/sections/ProductsGrid";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClientsCarousel from "@/components/sections/ClientsCarousel";
import FaqSection from "@/components/sections/FaqSection";
import BlogSection from "@/components/sections/BlogSection";

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
    locale: "tr_TR",
    images: [{ url: "/images/logos.png" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.sigortastari.com/" },
};

export default function Home() {
  return (
    <>
      <PreloadResources />
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
