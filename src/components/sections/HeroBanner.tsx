"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    bg: "/images/tss-banners.webp",
    label: "Tamamlayıcı Sağlık Sigortası",
    heading: (
      <>
        Sağlığınızda Güvenin Adı:
        <br />
        TSS! En İyi Sağlık Hizmetleri
        <br />
        İçin Yanınızdayız!
      </>
    ),
    href: "/urunler/tamamlayici-saglik-sigortasi",
  },
  {
    bg: "/images/ferdi-banners2.webp",
    label: "Ferdi Kaza Sigortası",
    heading: (
      <>
        Sizin Değer Verdiklerinizi
        <br /> Ferdi Kaza Sigortası ile <br /> Biz Güvenceye Alalım!
      </>
    ),
    href: "/urunler/ferdi-kaza-sigortasi",
  },
];

export default function HeroBanner() {
  return (
    <section className="banner-03 full-screen p-0 top-position1">
      <h1 className="d-none">
        En Uygun Sigorta, Sigorta Starı - Hayatınıza Yıldız Dokunuşu! - Sigorta
        Starı
      </h1>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="min-vh-100 slider-fade2 w-100"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="bg-img cover-background item"
              style={{ backgroundImage: `url('${slide.bg}')` }}
              data-overlay-dark="7"
            >
              <div className="pt-md-0 container d-flex flex-column pt-sm-6">
                <div className="pt-md-0 align-items-center justify-content-end min-vh-100 pt-6 row text-end">
                  <div className="col-lg-10 mb-1-9 mb-lg-0 py-5">
                    <div className="title-style1 white">
                      <span>{slide.label}</span>
                    </div>
                    <p className="display-18 display-lg-5 display-md-10 display-sm-13 display-xl-4 display-xxl-2 mb-2-3 text-white">
                      {slide.heading}
                    </p>
                    <Link className="butn-style3 me-2" href={slide.href}>
                      <span>Teklif Al</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
