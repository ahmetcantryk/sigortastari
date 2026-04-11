export interface ProductContent {
  slug: string;
  name: string;
  title: string;
  bannerImage: string;
  contentImage: string;
  contentImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: {
    title: string;
    content?: string;
    list?: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  offerTitle: string;
  offerDescription: string;
}

export const productContents: Record<string, ProductContent> = {
  "trafik-sigortasi": {
    slug: "trafik-sigortasi",
    name: "Trafik Sigortası",
    title: "TRAFİK SİGORTASI",
    bannerImage: "/images/trafik-bnn.webp",
    contentImage: "/images/trafik-sayfaici.webp",
    contentImageAlt: "Trafik Sigortası Görseli",
    metaTitle: "Aracınız İçin Zorunlu Trafik Sigortası | Sigorta Starı",
    metaDescription:
      "Trafikte güvende olun! Zorunlu araç trafik sigortası ile yolda güvenliğinizi sağlayın. Detaylı bilgi ve trafik sigortası poliçe teklifi için hemen tıklayın.",
    intro: [
      "Sigorta Starı olarak, zorunlu trafik sigortası hizmetimizle araç sahiplerine güvenli bir sürüş deneyimi sunuyoruz. Trafik sigortası, Türkiye'de zorunlu bir sigorta türüdür ve araç sahiplerinin yasal yükümlülüklerini yerine getirmelerini sağlar.",
      "Trafik sigortası primi; aracın özellikleri, sürücü bilgileri, poliçe kapsamı gibi faktörlere bağlı olarak belirlenir. Prim ödeme koşulları, poliçe başlangıcından itibaren belirlenen periyotlarda ödenir.",
    ],
    sections: [
      {
        title: "Zorunlu Trafik Sigortası Nedir?",
        content:
          "Zorunlu trafik sigortası, kaza sonucu karşı tarafta meydana gelen maddi zararları karşılamak ve verilen zararları teminat altına almak amacıyla yapılan bir sigortadır. Türkiye'de trafiğe çıkan her araç ve Türkiye'ye giriş yapan tüm yabancı plakalı araçlar için zorunlu tutulmaktadır.\n\nSigorta Starı olarak, zorunlu trafik sigortasıyla ilgili her türlü sorunuz için bizimle iletişime geçebilirsiniz. Trafikte güvende olun!",
      },
      {
        title: "Zorunlu Trafik Sigortası Teminatları",
        list: [
          "Kaza sonucu oluşan maddi zararlar",
          "Diğer araçlara ve kişilere verilen zararlar",
          "Tedavi masrafları",
          "Hukuksal koruma",
          "Yanınızdaki yolcuların tedavi masrafları",
        ],
      },
      {
        title: "Zorunlu Trafik Sigortası Ek Teminatları",
        list: ["Araç kiralama teminatı", "Yol yardım hizmetleri"],
      },
    ],
    faq: [
      {
        question: "Zorunlu Trafik Sigortası Nasıl Hesaplanır?",
        answer:
          "Trafik sigortası primleri, birçok faktöre dayanarak hesaplanır. Bunlar arasında aracın marka-modeli, kullanım amacı, sürücü geçmişi, aracın değeri, kaza oranı ve poliçe kapsamı bulunmaktadır.",
      },
      {
        question: "Trafik Sigortasının Kapsamı Nedir?",
        answer:
          "Trafik Sigortası, araç sahiplerini olası kazalara karşı koruyan bir zorunlu sigorta türüdür. Temel kapsam, üçüncü şahıslara ve araçlara verilebilecek maddi hasarları içermektedir.",
      },
      {
        question: "Hasar Durumunda Trafik Sigortasının Avantajları Nelerdir?",
        answer:
          "Trafik Sigortası, hasar durumunda maddi sorumlulukları azaltarak sürücüyü korur. Kazaya karışan diğer araçların veya kişilerin maddi zararlarını sigortalı araç sahibi yerine sigorta şirketi karşılar.",
      },
      {
        question: "Kaza Durumunda Ne Yapmalıyım?",
        answer:
          "Kazaya karıştığınızda hemen polis ve sigorta şirketinizi bilgilendirmelisiniz. Bu sırada ilk olarak Hasar tespit tutanağı doldurmalısınız.",
      },
      {
        question: "Trafik Sigortası Poliçe Yenileme Süreci Nasıl İşler?",
        answer:
          "Poliçenizin yenileme tarihinden önce size bildirim yapılır. Yenileme sürecinizle ilgili detaylar için müşteri hizmetlerimizle iletişime geçebilirsiniz.",
      },
      {
        question: "Teminatlar Dışında Hangi Durumlar Kapsama Girer?",
        answer:
          "Poliçe detaylarına bağlı olarak, ek teminatlar ve özel durumlar da kapsama dahil olabilir. Poliçenizi inceleyerek detaylı bilgi alabilirsiniz.",
      },
      {
        question: "Trafik Sigortası Fiyatı Ne Kadar?",
        answer:
          "Trafik sigortası fiyatları kişiye göre değişiklik göstermektedir. Size özel sunacağımız trafik sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
      },
    ],
    offerTitle: "Sigorta Starı'ndan Trafik Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun ve kapsamlı zorunlu trafik sigortası poliçesi için hemen teklif alın!",
  },
  "arac-kasko-sigortasi": {
    slug: "arac-kasko-sigortasi",
    name: "Kasko Sigortası",
    title: "KASKO SİGORTASI",
    bannerImage: "/images/kasko-bnn.webp",
    contentImage: "/images/kasko-sayfaici.webp",
    contentImageAlt: "Kasko Sigortası Görseli",
    metaTitle: "Araç Kasko Sigortası | Sigorta Starı",
    metaDescription:
      "Kasko sigortası ile aracınızı her türlü riske karşı güvence altına alın. Detaylı bilgi ve kasko sigortası teklifi için hemen tıklayın.",
    intro: [
      "Sigorta Starı olarak, kasko sigortası hizmetimizle araç sahiplerine kapsamlı bir koruma sunuyoruz. Kasko sigortası, aracınızın başına gelebilecek hırsızlık, kaza, doğal afet gibi birçok riske karşı güvence sağlar.",
      "Kasko sigortası primi; aracın marka ve modeli, yaşı, kullanım amacı ve sürücü profili gibi faktörlere göre belirlenir.",
    ],
    sections: [
      {
        title: "Kasko Sigortası Nedir?",
        content:
          "Kasko sigortası, aracınızın karşılaşabileceği çeşitli risklere karşı kapsamlı bir koruma sağlayan isteğe bağlı bir sigorta türüdür. Trafik sigortasından farklı olarak, kasko sigortası sadece karşı tarafın zararını değil, kendi aracınızın zararını da karşılar.",
      },
      {
        title: "Kasko Sigortası Teminatları",
        list: [
          "Trafik kazası sonucu oluşan hasarlar",
          "Hırsızlık ve hırsızlığa teşebbüs",
          "Doğal afetler (sel, deprem, fırtına vb.)",
          "Yangın",
          "Üçüncü şahısların kötü niyetli davranışları",
        ],
      },
    ],
    faq: [
      {
        question: "Kasko Sigortası Zorunlu mu?",
        answer:
          "Kasko sigortası zorunlu değildir ancak aracınızı kapsamlı bir şekilde korumak istiyorsanız yaptırmanız önerilir.",
      },
      {
        question: "Kasko ile Trafik Sigortası Arasındaki Fark Nedir?",
        answer:
          "Trafik sigortası zorunludur ve karşı tarafın zararını karşılar. Kasko sigortası ise isteğe bağlıdır ve kendi aracınızın zararını da karşılar.",
      },
    ],
    offerTitle: "Sigorta Starı'ndan Kasko Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun kasko sigortası poliçesi için hemen teklif alın!",
  },
  "konut-sigortasi": {
    slug: "konut-sigortasi",
    name: "Konut Sigortası",
    title: "KONUT SİGORTASI",
    bannerImage: "/images/konut-bn.webp",
    contentImage: "/images/konut-sayfaici.webp",
    contentImageAlt: "Konut Sigortası Görseli",
    metaTitle: "Konut Sigortası | Sigorta Starı",
    metaDescription:
      "Konut sigortası ile evinizi ve eşyalarınızı yangın, hırsızlık ve doğal afetlere karşı güvence altına alın.",
    intro: [
      "Sigorta Starı olarak, konut sigortası hizmetimizle evinizi ve değerli eşyalarınızı olası risklere karşı koruma altına alıyoruz.",
      "Konut sigortası, evinizi yangın, hırsızlık, su basması, deprem ve daha birçok riske karşı güvence altına alır.",
    ],
    sections: [
      {
        title: "Konut Sigortası Nedir?",
        content:
          "Konut sigortası, evinizi ve içindeki eşyalarınızı çeşitli risklere karşı koruyan bir sigorta türüdür. Yangın, hırsızlık, su basması gibi beklenmedik durumlarda maddi kayıplarınızı minimize eder.",
      },
      {
        title: "Konut Sigortası Teminatları",
        list: [
          "Yangın ve patlama",
          "Hırsızlık",
          "Su basması",
          "Doğal afetler",
          "Cam kırılması",
        ],
      },
    ],
    faq: [
      {
        question: "Konut Sigortası Zorunlu mu?",
        answer:
          "Konut sigortası zorunlu değildir ancak evinizi ve eşyalarınızı korumak için yaptırmanız önerilir. DASK (Doğal Afet Sigortaları Kurumu) ise deprem riski için zorunludur.",
      },
    ],
    offerTitle: "Sigorta Starı'ndan Konut Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun konut sigortası poliçesi için hemen teklif alın!",
  },
  "is-yeri-sigortasi": {
    slug: "is-yeri-sigortasi",
    name: "İş Yeri Sigortası",
    title: "İŞ YERİ SİGORTASI",
    bannerImage: "/images/isyeri-bn.webp",
    contentImage: "/images/isyeri-sayfaici.webp",
    contentImageAlt: "İş Yeri Sigortası Görseli",
    metaTitle: "İş Yeri Sigortası | Sigorta Starı",
    metaDescription:
      "İş yeri sigortası ile işletmenizi yangın, hırsızlık ve diğer risklere karşı koruyun.",
    intro: [
      "Sigorta Starı olarak, iş yeri sigortası hizmetimizle işletmenizi olası risklere karşı koruma altına alıyoruz.",
      "İş yeri sigortası, iş yerinizi yangın, hırsızlık, doğal afet gibi risklere karşı güvence altına alır ve iş sürekliliğinizi sağlar.",
    ],
    sections: [
      {
        title: "İş Yeri Sigortası Nedir?",
        content:
          "İş yeri sigortası, işletmenizi ve iş yerinizi çeşitli risklere karşı koruyan kapsamlı bir sigorta ürünüdür.",
      },
      {
        title: "İş Yeri Sigortası Teminatları",
        list: [
          "Yangın ve patlama",
          "Hırsızlık",
          "Su basması",
          "Doğal afetler",
          "Cam kırılması",
          "Elektronik cihaz hasarı",
        ],
      },
    ],
    faq: [
      {
        question: "İş Yeri Sigortası Zorunlu mu?",
        answer:
          "İş yeri sigortası zorunlu değildir ancak işletmenizi korumak için yaptırmanız şiddetle önerilir.",
      },
    ],
    offerTitle: "Sigorta Starı'ndan İş Yeri Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun iş yeri sigortası poliçesi için hemen teklif alın!",
  },
  "ferdi-kaza-sigortasi": {
    slug: "ferdi-kaza-sigortasi",
    name: "Ferdi Kaza Sigortası",
    title: "FERDİ KAZA SİGORTASI",
    bannerImage: "/images/ferdi-bn.webp",
    contentImage: "/images/ferdi-kazasigortasibanner--sayfaici.webp",
    contentImageAlt: "Ferdi Kaza Sigortası Görseli",
    metaTitle: "Ferdi Kaza Sigortası | Sigorta Starı",
    metaDescription:
      "Ferdi kaza sigortası ile kendinizi ve ailenizi beklenmedik kazalara karşı güvence altına alın.",
    intro: [
      "Sigorta Starı olarak, ferdi kaza sigortası hizmetimizle sizi ve ailenizi beklenmedik kazalara karşı koruma altına alıyoruz.",
      "Ferdi kaza sigortası, kaza sonucu oluşabilecek vefat, sürekli sakatlık ve tedavi masraflarını karşılar.",
    ],
    sections: [
      {
        title: "Ferdi Kaza Sigortası Nedir?",
        content:
          "Ferdi kaza sigortası, ani ve beklenmedik bir kaza sonucu meydana gelen vefat, sürekli sakatlık ve tedavi masraflarını karşılayan bir sigorta türüdür.",
      },
      {
        title: "Ferdi Kaza Sigortası Teminatları",
        list: [
          "Kaza sonucu vefat teminatı",
          "Sürekli sakatlık teminatı",
          "Tedavi masrafları",
          "Gündelik tazminat",
        ],
      },
    ],
    faq: [
      {
        question: "Ferdi Kaza Sigortası Kimlere Yapılabilir?",
        answer:
          "Ferdi kaza sigortası, bireysel olarak veya grup halinde herkese yapılabilir.",
      },
    ],
    offerTitle: "Sigorta Starı'ndan Ferdi Kaza Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun ferdi kaza sigortası poliçesi için hemen teklif alın!",
  },
  "mesleki-sorumluluk-sigortasi": {
    slug: "mesleki-sorumluluk-sigortasi",
    name: "Mesleki Sorumluluk Sigortası",
    title: "MESLEKİ SORUMLULUK SİGORTASI",
    bannerImage: "/images/mesleki-bn.webp",
    contentImage: "/images/meslekisorumluluk--sayfaici.webp",
    contentImageAlt: "Mesleki Sorumluluk Sigortası Görseli",
    metaTitle: "Mesleki Sorumluluk Sigortası | Sigorta Starı",
    metaDescription:
      "Mesleki sorumluluk sigortası ile mesleki faaliyetlerinizden doğabilecek riskleri güvence altına alın.",
    intro: [
      "Sigorta Starı olarak, mesleki sorumluluk sigortası hizmetimizle meslek sahiplerini mesleki faaliyetlerinden doğabilecek risklere karşı koruma altına alıyoruz.",
      "Mesleki sorumluluk sigortası, mesleki hata veya ihmal sonucu üçüncü kişilere verilen zararları teminat altına alır.",
    ],
    sections: [
      {
        title: "Mesleki Sorumluluk Sigortası Nedir?",
        content:
          "Mesleki sorumluluk sigortası, meslek sahiplerinin mesleki faaliyetleri sırasında üçüncü kişilere verebilecekleri zararları teminat altına alan bir sigorta türüdür.",
      },
      {
        title: "Mesleki Sorumluluk Sigortası Teminatları",
        list: [
          "Mesleki hata ve ihmal teminatı",
          "Hukuki savunma masrafları",
          "Tazminat ödemeleri",
        ],
      },
    ],
    faq: [
      {
        question: "Mesleki Sorumluluk Sigortası Kimlere Yapılabilir?",
        answer:
          "Doktorlar, avukatlar, muhasebeciler, mühendisler ve diğer meslek grupları için mesleki sorumluluk sigortası yapılabilir.",
      },
    ],
    offerTitle:
      "Sigorta Starı'ndan Mesleki Sorumluluk Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun mesleki sorumluluk sigortası poliçesi için hemen teklif alın!",
  },
  "nakliyat-sigortasi": {
    slug: "nakliyat-sigortasi",
    name: "Nakliyat Sigortası",
    title: "NAKLİYAT SİGORTASI",
    bannerImage: "/images/nakliyat-bn.webp",
    contentImage: "/images/nakliyat-sigortasi-banner--sayfaici.webp",
    contentImageAlt: "Nakliyat Sigortası Görseli",
    metaTitle: "Nakliyat Sigortası | Sigorta Starı",
    metaDescription:
      "Nakliyat sigortası ile taşınan mallarınızı her türlü riske karşı koruma altına alın.",
    intro: [
      "Sigorta Starı olarak, nakliyat sigortası hizmetimizle taşınan mallarınızı olası risklere karşı koruma altına alıyoruz.",
      "Nakliyat sigortası, taşıma sürecinde oluşabilecek hasar, kayıp ve hırsızlık gibi riskleri teminat altına alır.",
    ],
    sections: [
      {
        title: "Nakliyat Sigortası Nedir?",
        content:
          "Nakliyat sigortası, kara, deniz, hava veya demiryolu ile taşınan malların taşıma sürecindeki risklere karşı güvence altına alınmasını sağlayan bir sigorta türüdür.",
      },
      {
        title: "Nakliyat Sigortası Teminatları",
        list: [
          "Taşıma sırasında oluşan hasarlar",
          "Kayıp ve çalınma",
          "Doğal afet zararları",
          "Kaza sonucu oluşan zararlar",
        ],
      },
    ],
    faq: [
      {
        question: "Nakliyat Sigortası Zorunlu mu?",
        answer:
          "Nakliyat sigortası zorunlu değildir ancak taşınan mallarınızı korumak için yaptırmanız önerilir.",
      },
    ],
    offerTitle: "Sigorta Starı'ndan Nakliyat Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun nakliyat sigortası poliçesi için hemen teklif alın!",
  },
  "tamamlayici-saglik-sigortasi": {
    slug: "tamamlayici-saglik-sigortasi",
    name: "Tamamlayıcı Sağlık Sigortası",
    title: "TAMAMLAYICI SAĞLIK SİGORTASI",
    bannerImage: "/images/tss-bn.webp",
    contentImage: "/images/TSS--sayfaici.webp",
    contentImageAlt: "Tamamlayıcı Sağlık Sigortası Görseli",
    metaTitle: "Tamamlayıcı Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "Tamamlayıcı sağlık sigortası ile SGK'nın karşılamadığı sağlık giderlerinizi güvence altına alın.",
    intro: [
      "Sigorta Starı olarak, tamamlayıcı sağlık sigortası (TSS) hizmetimizle SGK'nın karşılamadığı sağlık giderlerinizi koruma altına alıyoruz.",
      "TSS, anlaşmalı özel hastanelerde muayene, tetkik, ameliyat ve yatış gibi sağlık hizmetlerinden yararlanmanızı sağlar.",
    ],
    sections: [
      {
        title: "Tamamlayıcı Sağlık Sigortası Nedir?",
        content:
          "Tamamlayıcı sağlık sigortası, SGK güvencesi altında olan kişilerin özel hastanelerde tedavi olabilmesini sağlayan bir sigorta ürünüdür. SGK'nın karşılamadığı fark ücretlerini teminat altına alır.",
      },
      {
        title: "TSS Teminatları",
        list: [
          "Özel hastanede yatarak tedavi",
          "Ayakta tedavi",
          "Küçük müdahaleler",
          "İleri tetkik ve tahlil",
          "Fizik tedavi",
        ],
      },
    ],
    faq: [
      {
        question: "TSS İçin SGK Zorunlu mu?",
        answer:
          "Evet, tamamlayıcı sağlık sigortasından yararlanmak için aktif SGK kaydınızın olması gerekmektedir.",
      },
    ],
    offerTitle:
      "Sigorta Starı'ndan Tamamlayıcı Sağlık Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun tamamlayıcı sağlık sigortası poliçesi için hemen teklif alın!",
  },
  "yabanci-uyruklular-icin-saglik-sigortasi": {
    slug: "yabanci-uyruklular-icin-saglik-sigortasi",
    name: "Yabancı Uyruklular İçin Sağlık Sigortası",
    title: "YABANCI UYRUKLULAR İÇİN SAĞLIK SİGORTASI",
    bannerImage: "/images/yabanci-bn.webp",
    contentImage: "/images/yabancisaglik-sayfaici.webp",
    contentImageAlt: "Yabancı Uyruklular İçin Sağlık Sigortası Görseli",
    metaTitle: "Yabancı Uyruklular İçin Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "Yabancı uyruklular için sağlık sigortası ile Türkiye'deki sağlık ihtiyaçlarınızı karşılayın.",
    intro: [
      "Sigorta Starı olarak, Türkiye'de yaşayan yabancı uyruklu kişilere özel sağlık sigortası hizmeti sunuyoruz.",
      "Yabancı uyruklular için sağlık sigortası, ikamet izni başvuruları için de gerekli olan kapsamlı bir sağlık güvencesi sağlar.",
    ],
    sections: [
      {
        title: "Yabancı Uyruklular İçin Sağlık Sigortası Nedir?",
        content:
          "Bu sigorta, Türkiye'de ikamet eden yabancı uyruklu kişilerin sağlık hizmetlerinden yararlanabilmesi için düzenlenen özel bir sigorta ürünüdür.",
      },
      {
        title: "Teminatlar",
        list: [
          "Yatarak tedavi teminatı",
          "Ayakta tedavi teminatı",
          "Acil sağlık hizmetleri",
          "İlaç teminatı",
        ],
      },
    ],
    faq: [
      {
        question: "İkamet İzni İçin Sağlık Sigortası Zorunlu mu?",
        answer:
          "Evet, Türkiye'de ikamet izni başvurusu yapan yabancı uyruklular için sağlık sigortası zorunludur.",
      },
    ],
    offerTitle:
      "Sigorta Starı'ndan Yabancı Sağlık Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun yabancı uyruklular için sağlık sigortası poliçesi için hemen teklif alın!",
  },
  "ozel-saglik-sigortasi": {
    slug: "ozel-saglik-sigortasi",
    name: "Özel Sağlık Sigortası",
    title: "ÖZEL SAĞLIK SİGORTASI",
    bannerImage: "/images/ozel-bn.webp",
    contentImage: "/images/%C3%B6zel-saglik-safaici.webp",
    contentImageAlt: "Özel Sağlık Sigortası Görseli",
    metaTitle: "Özel Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "Özel sağlık sigortası ile kendinize ve ailenize en iyi sağlık hizmetini sağlayın.",
    intro: [
      "Sigorta Starı olarak, özel sağlık sigortası (ÖSS) hizmetimizle size ve ailenize premium sağlık hizmetleri sunuyoruz.",
      "Özel sağlık sigortası, özel hastanelerde muayene, tetkik, ameliyat ve yatış gibi kapsamlı sağlık hizmetlerinden yararlanmanızı sağlar.",
    ],
    sections: [
      {
        title: "Özel Sağlık Sigortası Nedir?",
        content:
          "Özel sağlık sigortası, SGK'dan bağımsız olarak özel hastanelerde kapsamlı sağlık hizmeti almanızı sağlayan bir sigorta ürünüdür.",
      },
      {
        title: "ÖSS Teminatları",
        list: [
          "Yatarak tedavi",
          "Ayakta tedavi",
          "Ameliyat teminatı",
          "Doğum teminatı",
          "Diş tedavisi",
          "Göz tedavisi",
        ],
      },
    ],
    faq: [
      {
        question: "ÖSS ve TSS Arasındaki Fark Nedir?",
        answer:
          "TSS, SGK güvencesi altındaki kişiler için ek bir koruma sağlarken, ÖSS SGK'dan bağımsız olarak kapsamlı sağlık güvencesi sunar.",
      },
    ],
    offerTitle:
      "Sigorta Starı'ndan Özel Sağlık Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun özel sağlık sigortası poliçesi için hemen teklif alın!",
  },
  "seyahat-saglik-sigortasi": {
    slug: "seyahat-saglik-sigortasi",
    name: "Seyahat Sağlık Sigortası",
    title: "SEYAHAT SAĞLIK SİGORTASI",
    bannerImage: "/images/seyahat-bnn.webp",
    contentImage: "/images/seyahat-saglik.webp",
    contentImageAlt: "Seyahat Sağlık Sigortası Görseli",
    metaTitle: "Seyahat Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "Seyahat sağlık sigortası ile yurt dışı seyahatlerinizde güvende olun.",
    intro: [
      "Sigorta Starı olarak, seyahat sağlık sigortası hizmetimizle yurt içi ve yurt dışı seyahatlerinizde sizi koruma altına alıyoruz.",
      "Seyahat sağlık sigortası, seyahat süresince karşılaşabileceğiniz sağlık sorunlarına karşı kapsamlı bir güvence sağlar.",
    ],
    sections: [
      {
        title: "Seyahat Sağlık Sigortası Nedir?",
        content:
          "Seyahat sağlık sigortası, yurt dışı ve yurt içi seyahatleriniz sırasında karşılaşabileceğiniz acil sağlık durumlarını teminat altına alan bir sigorta ürünüdür.",
      },
      {
        title: "Seyahat Sağlık Sigortası Teminatları",
        list: [
          "Acil tıbbi tedavi masrafları",
          "Hastaneye yatış masrafları",
          "Tıbbi tahliye",
          "Bagaj kaybı",
          "Uçuş gecikmesi teminatı",
        ],
      },
    ],
    faq: [
      {
        question: "Schengen Vizesi İçin Seyahat Sigortası Zorunlu mu?",
        answer:
          "Evet, Schengen vizesi başvurusu için en az 30.000 Euro teminatlı seyahat sağlık sigortası zorunludur.",
      },
    ],
    offerTitle:
      "Sigorta Starı'ndan Seyahat Sağlık Sigortası Teklifi Aldınız Mı?",
    offerDescription:
      "En uygun seyahat sağlık sigortası poliçesi için hemen teklif alın!",
  },
};

export function getProductContent(
  slug: string
): ProductContent | undefined {
  return productContents[slug];
}
