import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "İhtiyacınıza En Uygun Sigorta Ürünleri - Sigorta Starı",
  description:
    "Sigorta Starı'nın sunduğu geniş ürün yelpazesi ile ihtiyacınıza uygun trafik, kasko, ferdi kaza, seyahat, özel sağlık ve diğer sigorta seçenekleri için tıklayın.",
  openGraph: {
    title: "İhtiyacınıza En Uygun Sigorta Ürünleri - Sigorta Starı",
    type: "website",
    url: "https://www.sigortastari.com/urunler",
    description:
      "Sigorta Starı'nın sunduğu geniş ürün yelpazesi ile ihtiyacınıza uygun trafik, kasko, ferdi kaza, seyahat, özel sağlık ve diğer sigorta seçenekleri için tıklayın.",
    siteName: "Sigortastarı",
    locale: "tr-TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com/urunler" },
};

const productCards = [
  {
    slug: "trafik-sigortasi",
    name: "Trafik Sigortası",
    image: "/images/trafk-banner-detay.webp",
    alt: "Trafik Sigortası Görseli",
    description:
      "Seyir halindeyken olası risklere karşı koruma sağlayan zorunlu trafik sigortası ile sürüş keyfini artırın. Sigorta Starı, kaza sonucu üçüncü kişilere verilen hasar masraflarını koruma altına alır.",
  },
  {
    slug: "arac-kasko-sigortasi",
    name: "Kasko Sigortası",
    image: "/images/kasko-banner.webp",
    alt: "Kasko Sigortası Görseli",
    description:
      "Sadece temel zararlardan değil, aynı zamanda hırsızlık, doğal afetler ve daha birçok riskten korunmanızı sağlayan Sigorta Starı'nın kasko sigortası, aracınıza geniş kapsamlı bir güvence sunar.",
  },
  {
    slug: "konut-sigortasi",
    name: "Konut Sigortası",
    image: "/images/konut-banner.webp",
    alt: "Konut Sigortası Görseli",
    description:
      "Ev, sizin için sadece bir mekan değil, aynı zamanda huzurun ve güvenin buluştuğu yerdir. Konut sigortası, evinizi yangın, deprem, hırsızlık gibi beklenmedik durumlara karşı koruma altına alır ve size huzurlu bir yaşam sunar.",
  },
  {
    slug: "is-yeri-sigortasi",
    name: "İş Yeri Sigortası",
    image: "/images/is-yeri-banner.webp",
    alt: "İş Yeri Sigortası Görseli",
    description:
      "İş yerinizdeki risklere karşı kapsamlı bir sigorta çözümü sunuyoruz. Sigorta Starı'nın iş yeri sigortası, iş sürekliliğini ve varlığınızı koruma altına alarak iş dünyasında güvende olmanızı sağlar.",
  },
  {
    slug: "ferdi-kaza-sigortasi",
    name: "Ferdi Kaza Sigortası",
    image: "/images/ferdi-kaza-sigortasi-banner.webp",
    alt: "Ferdi Kaza Sigortası Görseli",
    description:
      "Beklenmedik kaza durumlarına karşı maddi güvence sağlayabilirsiniz. Sigorta Starı'nın ferdi kaza sigortası, hayatınızı etkileyen kazalara karşı finansal olarak korunmanıza yardımcı olur.",
  },
  {
    slug: "mesleki-sorumluluk-sigortasi",
    name: "Mesleki Sorumluluk Sigortası",
    image: "/images/mesleki-sorumluluk-banner.webp",
    alt: "Mesleki Sorumluluk Sigortası Görseli",
    description:
      "Mesleki faaliyetlerinizden kaynaklanan sorumluluklara karşı kendinizi güvence altına alabilirsiniz. Sigorta Starı, mesleki sorumluluk sigortası ile iş hayatınızı emniyet altına alır, olası maddi kayıplarınızı minimize eder.",
  },
  {
    slug: "nakliyat-sigortasi",
    name: "Nakliyat Sigortası",
    image: "/images/nakliyat-sigortasi-banner.webp",
    alt: "Nakliyat Sigortası Görseli",
    description:
      "Taşımacılık süreçlerinizde oluşabilecek risklere karşı yük ve eşyalarınızı sigortalayabilirsiniz. Sigorta Starı, nakliyat sigortası ile taşımanın her aşamasında sizi güvence altına alır, olası kayıplarınızı en aza indirir.",
  },
  {
    slug: "tamamlayici-saglik-sigortasi",
    name: "Tamamlayıcı Sağlık Sigortası",
    image: "/images/tss-banner.webp",
    alt: "Tamamlayıcı Sağlık Sigortası Görseli",
    description:
      "Sigorta Starı'nın tamamlayıcı sağlık sigortası (TSS), geniş bir sağlık hizmetleri yelpazesi sunarak mevcut sağlık sigortanızı destekler. Bu sayede sağlığınız için gereken tüm hizmetlere erişim sağlar, tedavi maliyetlerinizi azaltır.",
  },
  {
    slug: "yabanci-uyruklular-icin-saglik-sigortasi",
    name: "Yabancı Sağlık Sigortası",
    image: "/images/yabanci-saglik-banner.webp",
    alt: "Yabancı Sağlık Sigortası Görseli",
    description:
      "Türkiye'de yaşayan yabancı uyruklular için özel sağlık hizmetleri sunuyoruz. Sigorta Starı'nın yabancı uyruklular için sağlık sigortası, onların sağlık ihtiyaçlarına özel çözümler sunarak yaşamlarını kolaylaştırır.",
  },
  {
    slug: "seyahat-saglik-sigortasi",
    name: "Seyahat Sağlık Sigortası",
    image: "/images/seyhat-saglik-banner.webp",
    alt: "Seyahat Sağlık Sigortası Görseli",
    description:
      "Yurt içi ve yurt dışı seyahatlerinizde güvenliğiniz bizimle. Sigorta Starı'nın seyahat sağlık sigortası, acil sağlık durumlarına karşı dünya genelinde koruma sağlar, seyahatlerinizi güvenle planlamanıza yardımcı olur.",
  },
  {
    slug: "ozel-saglik-sigortasi",
    name: "Özel Sağlık Sigortası",
    image: "/images/ozel-saglik-banner.webp",
    alt: "Özel Sağlık Sigortası Görseli",
    description:
      "Kişiye özel sağlık hizmetleri ile sağlığınızı ön planda tutabilirsiniz. Sigorta Starı'nın özel sağlık sigortası (ÖSS), sizin için en uygun sağlık çözümlerini sunarak hayat kalitenizi artırarak özel hastanelerden hizmet almanızı sağlar.",
  },
];

export default function UrunlerPage() {
  return (
    <>
      <PageBanner
        title="Ürünler"
        backgroundImage="/images/urunler-banner.png"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Ürünler", href: "/urunler" },
        ]}
      />

      <section>
        <div className="container">
          <div className="section-heading text-center mb-2-9 mb-lg-6">
            <span>Ürünlerimiz</span>
            <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
              Size Özel Sigorta Ürünlerimiz
            </h2>
          </div>

          <div className="row g-lg-5 mt-n2-9">
            {productCards.map((product) => (
              <div
                key={product.slug}
                className="col-md-6 col-lg-4 mt-2-9"
              >
                <div className="card-style1">
                  <div className="card-image position-relative">
                    <Image
                      loading="lazy"
                      src={product.image}
                      className="card-img-top"
                      alt={product.alt}
                      width={400}
                      height={250}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="card-body p-1-6 p-sm-1-9 pt-2-3 position-relative">
                    <h3 className="h4 mb-3">
                      <Link href={`/urunler/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mb-4">{product.description}</p>
                    <Link
                      href={`/urunler/${product.slug}`}
                      className="butn-style3"
                    >
                      <span>Detaylı İncele</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
