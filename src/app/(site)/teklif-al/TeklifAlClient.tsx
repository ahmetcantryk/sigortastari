"use client";

import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/forms/QuoteForm";

const insuranceBoxes = [
  { icon: "icon-traffic", label: "Trafik Sigortası", slug: "trafik-sigortasi" },
  { icon: "icon-kasko", label: "Kasko Sigortası", slug: "arac-kasko-sigortasi" },
  { icon: "icon-tss", label: "Tamamlayıcı Sağlık Sigortası", slug: "tamamlayici-saglik-sigortasi" },
  { icon: "icon-private-health", label: "Özel Sağlık Sigortası", slug: "ozel-saglik-sigortasi" },
  { icon: "icon-nakliyat", label: "Nakliyat Sigortası", slug: "nakliyat-sigortasi" },
  { icon: "icon-isyeri", label: "İşyeri Sigortası", slug: "is-yeri-sigortasi" },
  { icon: "icon-seyahat-saglik", label: "Seyahat Sağlık Sigortası", slug: "seyahat-saglik-sigortasi" },
  { icon: "icon-konut", label: "Konut Sigortası", slug: "konut-sigortasi" },
  { icon: "icon-ferdi-kaza", label: "Ferdi Kaza Sigortası", slug: "ferdi-kaza-sigortasi" },
  { icon: "icon-sorumluluk", label: "Mesleki Sorumluluk Sigortası", slug: "mesleki-sorumluluk-sigortasi" },
  { icon: "icon-yabanci-saglik", label: "Yabancı Uyruklular İçin Sağlık Sigortası", slug: "yabanci-uyruklular-icin-saglik-sigortasi" },
];

export default function TeklifAlClient() {
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
            <Link
              key={box.slug}
              href={`/urunler/${box.slug}`}
              className="teklif-box"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <i className={box.icon}></i>
              <span>{box.label}</span>
            </Link>
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
          formTitle="Sigorta Teklifi Alın!"
          showInsuranceSelect
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
