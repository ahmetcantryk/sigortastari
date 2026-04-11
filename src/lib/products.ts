export interface Product {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  cardImage: string;
}

export const products: Product[] = [
  {
    slug: "trafik-sigortasi",
    name: "Trafik Sigortası",
    shortName: "Trafik Sigortası",
    icon: "icon-traffic",
    description: "Zorunlu trafik sigortası ile kendinizi ve aracınızı güvence altına alın.",
    metaTitle: "Aracınız İçin Zorunlu Trafik Sigortası | Sigorta Starı",
    metaDescription: "Trafikte güvende olun! Zorunlu araç trafik sigortası ile kazalara karşı kendinizi koruyun.",
    cardImage: "/images/trafk-banner-detay.webp",
  },
  {
    slug: "arac-kasko-sigortasi",
    name: "Araç Kasko Sigortası",
    shortName: "Kasko Sigortası",
    icon: "icon-kasko",
    description: "Kasko sigortası ile aracınızı her türlü riske karşı koruma altına alın.",
    metaTitle: "Araç Kasko Sigortası | Sigorta Starı",
    metaDescription: "Araç kasko sigortası ile aracınızı her türlü riske karşı güvence altına alın.",
    cardImage: "/images/kasko-banner.webp",
  },
  {
    slug: "konut-sigortasi",
    name: "Konut Sigortası",
    shortName: "Konut Sigortası",
    icon: "icon-konut",
    description: "Konut sigortası ile evinizi yangın, hırsızlık, deprem ve diğer risklere karşı koruyun.",
    metaTitle: "Konut Sigortası | Sigorta Starı",
    metaDescription: "Konut sigortası ile evinizi ve eşyalarınızı güvence altına alın.",
    cardImage: "/images/konut-banner.webp",
  },
  {
    slug: "is-yeri-sigortasi",
    name: "İş Yeri Sigortası",
    shortName: "İş Yeri Sigortası",
    icon: "icon-isyeri",
    description: "İş yeri sigortası ile işletmenizi beklenmedik risklere karşı koruma altına alın.",
    metaTitle: "İş Yeri Sigortası | Sigorta Starı",
    metaDescription: "İş yeri sigortası ile işletmenizi yangın, hırsızlık ve diğer risklere karşı koruyun.",
    cardImage: "/images/isyeri-banner.webp",
  },
  {
    slug: "ferdi-kaza-sigortasi",
    name: "Ferdi Kaza Sigortası",
    shortName: "Ferdi Kaza",
    icon: "icon-ferdi-kaza",
    description: "Ferdi kaza sigortası ile kendinizi ve ailenizi beklenmedik kazalara karşı güvence altına alın.",
    metaTitle: "Ferdi Kaza Sigortası | Sigorta Starı",
    metaDescription: "Ferdi kaza sigortası ile kendinizi ve ailenizi koruma altına alın.",
    cardImage: "/images/ferdi-kaza-sigortasi-banner.webp",
  },
  {
    slug: "mesleki-sorumluluk-sigortasi",
    name: "Mesleki Sorumluluk Sigortası",
    shortName: "Mesleki Sorumluluk",
    icon: "icon-sorumluluk",
    description: "Mesleki sorumluluk sigortası ile mesleki faaliyetlerinizden doğabilecek riskleri güvence altına alın.",
    metaTitle: "Mesleki Sorumluluk Sigortası | Sigorta Starı",
    metaDescription: "Mesleki sorumluluk sigortası ile mesleki risklerinizi minimize edin.",
    cardImage: "/images/mesleki-sorumluluk-banner.webp",
  },
  {
    slug: "nakliyat-sigortasi",
    name: "Nakliyat Sigortası",
    shortName: "Nakliyat Sigortası",
    icon: "icon-nakliyat",
    description: "Nakliyat sigortası ile taşınan mallarınızı her türlü riske karşı koruma altına alın.",
    metaTitle: "Nakliyat Sigortası | Sigorta Starı",
    metaDescription: "Nakliyat sigortası ile yüklerinizi güvence altına alın.",
    cardImage: "/images/nakliyat-sigortasi-banner.webp",
  },
  {
    slug: "tamamlayici-saglik-sigortasi",
    name: "Tamamlayıcı Sağlık Sigortası",
    shortName: "Tamamlayıcı Sağlık",
    icon: "icon-tss",
    description: "Tamamlayıcı sağlık sigortası ile SGK'nın karşılamadığı sağlık giderlerinizi güvence altına alın.",
    metaTitle: "Tamamlayıcı Sağlık Sigortası | Sigorta Starı",
    metaDescription: "Tamamlayıcı sağlık sigortası ile sağlık harcamalarınızı minimize edin.",
    cardImage: "/images/tss-banner.webp",
  },
  {
    slug: "yabanci-uyruklular-icin-saglik-sigortasi",
    name: "Yabancı Uyruklular İçin Sağlık Sigortası",
    shortName: "Yabancı Sağlık",
    icon: "icon-yabanci-saglik",
    description: "Yabancı uyruklular için sağlık sigortası ile Türkiye'deki sağlık ihtiyaçlarınızı karşılayın.",
    metaTitle: "Yabancı Uyruklular İçin Sağlık Sigortası | Sigorta Starı",
    metaDescription: "Yabancı uyruklular için sağlık sigortası ile Türkiye'de güvende olun.",
    cardImage: "/images/yabanci-saglik-banner.webp",
  },
  {
    slug: "ozel-saglik-sigortasi",
    name: "Özel Sağlık Sigortası",
    shortName: "Özel Sağlık",
    icon: "icon-private-health",
    description: "Özel sağlık sigortası ile kendinize ve ailenize en iyi sağlık hizmetini sağlayın.",
    metaTitle: "Özel Sağlık Sigortası | Sigorta Starı",
    metaDescription: "Özel sağlık sigortası ile premium sağlık hizmetlerine erişin.",
    cardImage: "/images/ozel-saglik-banner.webp",
  },
  {
    slug: "seyahat-saglik-sigortasi",
    name: "Seyahat Sağlık Sigortası",
    shortName: "Seyahat Sağlık",
    icon: "icon-seyahat-saglik",
    description: "Seyahat sağlık sigortası ile yurt dışında sağlık sorunlarına karşı güvende olun.",
    metaTitle: "Seyahat Sağlık Sigortası | Sigorta Starı",
    metaDescription: "Seyahat sağlık sigortası ile yurt dışı seyahatlerinizde güvende olun.",
    cardImage: "/images/seyhat-saglik-banner.webp",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const insuranceCompanies = [
  { name: "Hepiyi", logo: "/images/hepiyi.svg" },
  { name: "Madgeburger Sigorta", logo: "/images/madgeburger(2).png" },
  { name: "Mapfre", logo: "/images/mapfre(2).png" },
  { name: "Ray Sigorta", logo: "/images/ray(2).png" },
  { name: "Doğa Sigorta", logo: "/images/doga(2).png" },
  { name: "Demir Sigorta", logo: "/images/demir(2).png" },
  { name: "Bereket Sigorta", logo: "/images/bereket(2).png" },
  { name: "AXA", logo: "/images/axa(3).png" },
  { name: "Aveon", logo: "/images/aveon(2).png" },
  { name: "Allianz", logo: "/images/allianz(2).png" },
  { name: "Ak Sigorta", logo: "/images/ak(2).png" },
  { name: "Sompo", logo: "/images/sompo(2).png" },
  { name: "Türkiye Sigorta", logo: "/images/turkiye-sigorta.png" },
  { name: "Türk Nippon", logo: "/images/turk-nippon(2).png" },
  { name: "Anadolu Sigorta", logo: "/images/anadolu(2).png" },
  { name: "Quick Sigorta", logo: "/images/quick-1.png" },
];
