"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Misyonumuz",
      content:
        "Misyonumuz, müşterilerimize en iyi sigorta hizmetini sunarak, onların hayatlarını güvence altına almak ve her anlarında yanlarında olmaktır. Sadece poliçeler sunmakla kalmayıp, aynı zamanda müşteri odaklı yaklaşımımızla güvenilir bir sigorta partneri olmayı hedefliyoruz.",
    },
    {
      label: "Vizyonumuz",
      content:
        "Vizyonumuz, sigorta sektöründe öncü bir marka olmak ve müşterilerimize yenilikçi, güvenilir ve kişiye özel sigorta çözümleri sunarak sektörde fark yaratmaktır. Sürekli gelişen bir dünyada, müşterilerimizin değişen ihtiyaçlarına hızlı ve etkili çözümler sunarak onların güvenini kazanmak en büyük amacımızdır.",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="about-style3 align-items-center row">
          <div className="col-xl-6 fadeIn wow col-lg-7 mb-1-9 mb-lg-0 mb-sm-6">
            <div className="pe-lg-1-9 pe-md-6 position-relative text-center text-sm-start">
              <Image
                loading="lazy"
                alt="Hakkımızda Görseli"
                className="border-radius-5 web-hakkimizda"
                src="/images/ab-anasayfaa.webp"
                width={570}
                height={570}
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
              <Image
                loading="lazy"
                alt="Hakkımızda Görseli"
                className="mobil-hakkimizda"
                src="/images/about-mobil.webp"
                width={400}
                height={400}
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-xl-6 fadeIn wow col-lg-5">
            <div className="ps-xl-7">
              <span className="font-weight-600 letter-spacing-4 mb-3 shape-text small text-muted text-uppercase">
                HAKKIMIZDA
              </span>
              <h2 className="display-22 display-lg-14 display-md-16 display-sm-18 display-xl-10 mb-lg-1-6">
                Bizi Yakından Tanıyın
              </h2>
              <p className="font-weight-600 mb-1-9">
                Sizin için en iyi sigorta çözümlerini üretiyoruz.
              </p>

              <div className="clearfix horizontaltab tab-style1">
                <ul className="hor_1 resp-tabs-list">
                  {tabs.map((tab, i) => (
                    <li
                      key={i}
                      className={activeTab === i ? "resp-tab-active" : ""}
                      onClick={() => setActiveTab(i)}
                      style={{ cursor: "pointer" }}
                    >
                      {tab.label}
                    </li>
                  ))}
                </ul>
                <div className="hor_1  resp-tabs-container pt-4 pb-4">
                  <div>{tabs[activeTab].content}</div>
                </div>
              </div>

              <div className="mt-4 mt-md-0">
                <Link className="about-link border-bottom" href="/hakkimizda">
                  Devamını Okuyun
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
