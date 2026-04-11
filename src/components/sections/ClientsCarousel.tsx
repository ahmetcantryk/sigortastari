"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { insuranceCompanies } from "@/lib/products";

import "swiper/css";

export default function ClientsCarousel() {
  return (
    <section className="bg-secondary client-block">
      <div className="logo-bg">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
            className="clients-carousel"
          >
            {insuranceCompanies.map((company) => (
              <SwiperSlide key={company.name}>
                <Image
                  src={company.logo}
                  width={150}
                  height={80}
                  alt={`${company.name} Görseli`}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
