import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/sections/PageBanner";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "SSS - Sıkça Sorulan Sorular | Sigorta Starı",
  description:
    "Trafik, kasko, tamamlayıcı sağlık ve konut sigortası gibi konular hakkında merak ettiklerinize dair tüm soruların cevaplarına buradan kolayca ulaşabilirsiniz.",
  openGraph: {
    title: "SSS - Sıkça Sorulan Sorular | Sigorta Starı",
    type: "website",
    url: "https://www.sigortastari.com/sss",
    description:
      "Trafik, kasko, tamamlayıcı sağlık ve konut sigortası gibi konular hakkında merak ettiklerinize dair tüm soruların cevaplarına buradan kolayca ulaşabilirsiniz.",
    siteName: "Sigortastarı",
    locale: "tr-TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com/sss" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sigorta Primleri Nasıl Hesaplanır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sigorta primleri; poliçe sahibinin yaşına, seçilen teminatlara ve poliçe kapsamına bağlı olarak değişir. Sigorta şirketi tarafından belirlenen faktörler temel alınarak hesaplanır.",
      },
    },
    {
      "@type": "Question",
      name: "Poliçe Kapsamına Ek Teminatlar Nasıl Eklenir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poliçe sahibi olarak, ek teminatlar eklemek için bizimle ile iletişime geçebilirsiniz. Bu teminatlar genellikle özel ihtiyaçlara yönelik ek korumaları içerir.",
      },
    },
    {
      "@type": "Question",
      name: "Trafik Sigortası Nedir ve Nasıl Alabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Zorunlu trafik Sigortası, araç sahiplerinin yaşayabileceği olası kazalarda karşı tarafta oluşan zararı karşılayan bir sigorta türüdür. Sigorta Starı olarak, "Trafik Sigortası" sayfamızdan kolayca teklif alabilir ve trafik sigortası poliçenizi hızlıca düzenleyebilirsiniz.',
      },
    },
    {
      "@type": "Question",
      name: "Sağlık Sigortası Primleri Nasıl Hesaplanır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sağlık sigortası primleri, birçok faktöre dayanarak hesaplanır. Bu faktörler arasında sigortalının yaş, cinsiyet, genel sağlık durumu, poliçe kapsamı, sigorta süresi ve ek teminatlar bulunur.",
      },
    },
    {
      "@type": "Question",
      name: "Seyahat Sağlık Sigortası Nedir ve Neden Gereklidir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seyahat sağlık sigortası, yurt dışında seyahat ederken olası sağlık sorunlarına karşı maddi güvence sağlayan bir sigorta türüdür. Bu sigorta, yurt dışında beklenmedik bir kaza, hastalık veya acil sağlık durumu durumunda tıbbi masrafları karşılamaktadır.",
      },
    },
    {
      "@type": "Question",
      name: "Yabancı Uyruklular İçin Sağlık Sigortası Nasıl Başvurulur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yabancı uyruklular için sağlık sigortasına başvurmak teklif al formunu doldurabilirsiniz. Başvuru süreci, kişinin sağlık durumu, yaş ve sigorta şirketinin politikalarına bağlı olarak değişebilir.",
      },
    },
    {
      "@type": "Question",
      name: "İş Yeri Sigortasının İşverenlere Avantajları Nelerdir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İş yeri sigortası, işverenlere iş yerinde meydana gelebilecek yangın, su baskını, hırsızlık gibi risklere karşı maddi güvence, işyeri malzemelerinin ve makinelerinin teminat altında olması, çalışanlara sağlanan ek avantajlar, iş sürekliliğini sağlama ve hukuki koruma gibi avantajlar sağlar.",
      },
    },
    {
      "@type": "Question",
      name: "Mesleki Sorumluluk Sigortası Nedir ve Kimler İçin Uygundur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mesleki sorumluluk sigortası, bir meslek veya uzmanlık alanında hizmet veren kişilerin, işlerini yerine getirirken olası hatalar veya ihmaller nedeniyle ortaya çıkabilecek maddi zararları karşılamak için tasarlanmış bir sigorta türüdür.",
      },
    },
  ],
};

export default function SSSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageBanner
        title="Sıkça Sorulan Sorular"
        backgroundImage="/images/sss-banner.webp"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Sıkça Sorulan Sorular", href: "/sss" },
        ]}
      />

      <section>
        <div className="container">
          <div
            className="section-heading text-center mb-2-9 mb-lg-6 wow fadeIn"
            data-wow-delay="100ms"
          >
            <span>
              EN ÇOK MERAK EDİLENLER
            </span>
            <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
              Sıkça Sorulan Sorular
            </h2>
          </div>
          <div
            className="row wow fadeIn position-relative z-index-1"
            data-wow-delay="200ms"
          >
            <div className="col-lg-6">
              <FaqAccordion />
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="ps-lg-1-9 image-hover">
                <Image
                  src="/images/sss-sayfaici.webp"
                  className="rounded"
                  alt="SSS Görsel"
                  width={570}
                  height={570}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
