"use client";

import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/forms/QuoteForm";
import { useState } from "react";

const insuranceBoxes = [
  {
    icon: "icon-traffic",
    label: "Trafik Sigortası",
  },
  {
    icon: "icon-kasko",
    label: "Kasko Sigortası",
  },
  {
    icon: "icon-tss",
    label: "Tamamlayıcı Sağlık Sigortası",
  },
  {
    icon: "icon-private-health",
    label: "Özel Sağlık Sigortası",
  },
  {
    icon: "icon-nakliyat",
    label: "Nakliyat Sigortası",
  },
  {
    icon: "icon-isyeri",
    label: "İşyeri Sigortası",
  },
  {
    icon: "icon-seyahat-saglik",
    label: "Seyahat Sağlık Sigortası",
  },
  {
    icon: "icon-konut",
    label: "Konut Sigortası",
  },
  {
    icon: "icon-ferdi-kaza",
    label: "Ferdi Kaza Sigortası",
  },
  {
    icon: "icon-sorumluluk",
    label: "Mesleki Sorumluluk Sigortası",
  },
  {
    icon: "icon-yabanci-saglik",
    label: "Yabancı Uyruklular İçin Sağlık Sigortası",
  },
];

export default function TeklifAlClient() {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleBoxClick = (label: string) => {
    setSelectedProduct(label);
  };

  return (
    <div className="teklif-content">
      <div className="teklif-left">
        <Image
          src="/images/teklif-logo.svg"
          alt="Teklif logo"
          width={200}
          height={60}
          style={{ width: "auto", height: "auto" }}
          sizes="200px"
        />
        <h1>Tüm Sigorta Ürünlerimizde Size Özel İndirimler!</h1>
        <div className="insurance-options">
          {insuranceBoxes.map((box) => (
            <button
              key={box.label}
              className="teklif-box"
              type="button"
              onClick={() => handleBoxClick(box.label)}
              style={{
                cursor: "pointer",
                border:
                  selectedProduct === box.label
                    ? "2px solid #E7462C"
                    : undefined,
              }}
            >
              <i className={box.icon}></i>
              <span>{box.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="teklif-right">
        <Image
          src="/images/teklif-logo.svg"
          alt="Teklif logo"
          width={200}
          height={60}
          style={{ width: "auto", height: "auto" }}
          sizes="200px"
        />
        <QuoteForm
          preselectedProduct={selectedProduct}
          formTitle="Sigorta Teklifi Alın!"
          key={selectedProduct}
        />

        <Link
          className="wp-call"
          href="https://api.whatsapp.com/send?phone=905379509897&text=Merhaba,%20sigorta%20teklifi%20almak%20istiyorum.%20Yard%C4%B1mc%C4%B1%20olur%20musunuz?"
          target="_blank"
        >
          <Image
            id="wp-call"
            src="/images/wp.svg"
            alt="wp"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
            sizes="60px"
          />
          <span>
            WhatsApp
            <br />
            Destek Hattı
          </span>
        </Link>
      </div>
    </div>
  );
}
