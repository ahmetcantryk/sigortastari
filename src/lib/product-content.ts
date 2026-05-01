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
    bannerImage: "/images/trafik-bnn.png",
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
    bannerImage: "/images/kasko-bnn.png",
    contentImage: "/images/kasko-sayfaici.webp",
    contentImageAlt: "Kasko Sigortası Görseli",
    metaTitle: "Kasko Sigortası | Sigorta Starı",
    metaDescription:
      "En uygun ve en kapsamlı araç kasko sigortasına sahip olmak için hemen Sigorta Starı'ndan hızlı kasko poliçe teklifi alın!",
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
      {
        question: "Araç Kasko Sigortası Zorunlu Mu?",
        answer: "Hayır, kasko sigortası Türkiye'de zorunlu değildir. Ancak aracınızı geniş kapsamlı bir şekilde güvence altına almak istiyorsanız, kasko sigortası yaptırmanız önerilir.",
      },
      {
        question: "Kasko Sigortası Neleri Kapsar?",
        answer: "Kasko sigortası, aracınızın maddi hasarlarını kapsar. Kaza, hırsızlık, doğal afetler, yangın gibi birçok riski teminat altına alır.",
      },
      {
        question: "Kasko Sigortası Neden Önemlidir?",
        answer: "Kasko sigortası, aracınıza gelebilecek çeşitli risklere karşı maddi güvence sağlar. Hem kaza durumlarında hem de hırsızlık gibi olumsuz durumlarda finansal koruma sunar.",
      },
      {
        question: "Kasko Sigortasının Geniş Kapsamı Nedir?",
        answer: "Kasko sigortası, aracınızı çeşitli risklere karşı koruyan geniş kapsamlı bir sigorta türüdür. Temel kapsam arasında kaza, yangın, hırsızlık, cam kırılması ve doğal afetler gibi olaylar bulunur. Ayrıca, ek teminatlarla (yüksek hasar bedeli, kiralık araç teminatı vb.) poliçe kapsamı daha da genişletilebilir.",
      },
      {
        question: "Kasko Poliçesini Yenilemek Avantajlı Mıdır?",
        answer: "Evet, araç kasko poliçesini yenilemek avantajlıdır. Yenileme, mevcut avantajlardan yararlanmanın yanı sıra, aracınıza ekstra koruma eklemenin ve daha uygun fiyatlarla güvence altına almanın bir yoludur. Ayrıca, sürekli sigortalı olmak, olası hasar durumlarında daha güçlü bir maddi koruma sağlar.",
      },
      {
        question: "Hırsızlık Durumunda Kasko Sigortası Nasıl Yardımcı Olur?",
        answer: "Hırsızlık durumunda kasko sigortası, aracınızın çalınması veya içindeki değerli eşyaların çalınması gibi durumlarla ilgili maddi kayıpları karşılar. Sigorta Starı, poliçe kapsamında belirtilen limitler dahilinde, hırsızlık sonucu oluşan zararları tazmin eder. Böylece, aracınızın güvence altında olmasını sağlar ve finansal kayıplarınızı azaltır.",
      },
      {
        question: "Kasko Sigortası Prim Hesaplama Nasıl Yapılır?",
        answer: "Prim hesaplamada aracın değeri, kullanım alanı, sürücü bilgileri ve poliçe kapsamı gibi faktörler etkilidir.",
      },
      {
        question: "Kasko Sigortası Fiyatı Ne Kadar?",
        answer: "Kasko sigortası fiyatları kişiye ve araca göre değişiklik göstermektedir. Size özel sunacağımız kasko sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/konut-bn.png",
    contentImage: "/images/konut-sayfaici.webp",
    contentImageAlt: "Konut Sigortası Görseli",
    metaTitle: "Ev Güvenliğiniz İçin Konut Sigortası | Sigorta Starı",
    metaDescription:
      "Evinizin güvenliği için doğru adres! Konut sigortası ile evinizi ve eşyalarınızı koruma altına alabilirsiniz. Detaylı bilgi ve sigorta teklifi için tıklayın.",
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
      {
        question: "Konut Sigortasının Temel Kapsamları Nelerdir?",
        answer: "Konut sigortası, ev sahiplerini çeşitli risklere karşı koruyan bir sigorta türüdür. Temel kapsamlar arasında yangın, deprem, hırsızlık, su baskını, doğal afetler ve cam kırılması bulunur. Konut sigortası poliçesi, evin değeri ve müşterinin ihtiyaçlarına göre özelleştirilebilir.",
      },
      {
        question: "Su Baskınına Karşı Konut Sigortası Nasıl Koruma Sağlar?",
        answer: "Konut sigortası, su baskınına karşı da koruma sağlar. Su baskını durumunda oluşan hasarları karşılayabilir. Konut sigortası teminatları; sızan borular, sel, su tesisatı arızaları veya aşırı yağış nedeniyle evde meydana gelen su hasarlarını içermektedir. Poliçe kapsamında belirtilen limitler dahilinde, ev sahibini bu tür maddi kayıplardan korur.",
      },
      {
        question: "Konut (Ev) Sigortası Zorunlu Mu?",
        answer: "Hayır, konut sigortası Türkiye'de zorunlu değildir. Ancak ev sahiplerini olası risklere karşı korur ve finansal güvence sağlar.",
      },
      {
        question: "Konut Sigortası Prim Hesaplama Nasıl Yapılır?",
        answer: "Prim hesaplamada evin değeri, konum, kullanım alanı, poliçe kapsamı gibi faktörler etkilidir.",
      },
      {
        question: "Konut Sigortası Neden Önemlidir?",
        answer: "Konut sigortası, ev sahiplerini maddi hasarlara karşı korur ve olası risklere karşı finansal güvence sağlar. Hem ev hem de ev sahibini güven altına alır.",
      },
      {
        question: "Konut Sigortası Fiyatı Ne Kadar?",
        answer: "Konut sigortası fiyatları sigorta yaptırılacak konuta göre değişiklik göstermektedir. Size özel sunacağımız konut sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/isyeri-bn.png",
    contentImage: "/images/isyeri-sayfaici.webp",
    contentImageAlt: "İş Yeri Sigortası Görseli",
    metaTitle: "Güvenliğiniz İçin İş Yeri Sigortası | Sigorta Starı",
    metaDescription:
      "İş yerinizin güvenliği Sigorta Starı ile emin ellerde! İş yeri sigortası ile işinizi koruma altına alabilirsiniz. Detaylı bilgi ve teklif için hemen tıklayın.",
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
      {
        question: "İş Yeri Sigortası Poliçesi Nasıl Düzenlenir?",
        answer: "İş yeri sigortası poliçesi düzenlemek için işverenler sigorta acentesi ile iletişime geçerler. Sigorta acentesi, iş yerinin özelliklerini (yer, sektör, iş hacmi vb.) değerlendirir ve işverenin ihtiyaçlarına uygun bir poliçe teklifi sunar. Poliçe, iş yerinin risklerine ve işverenin taleplerine göre özelleştirilebilir.",
      },
      {
        question: "Çalışanlara İş Yeri Kazalarında İş Yeri Sigortası Nasıl Yardımcı Olur?",
        answer: "İş yeri sigortası, çalışanlara iş yeri kazalarında maddi ve hukuki yardım sağlar. Sigorta, iş yerinde meydana gelen kaza veya hastalıklar sonucu oluşan tedavi masraflarını karşılar. Ayrıca, çalışanlara ödenen maaş kayıpları ve sürekli sakatlık durumlarında tazminat gibi ek teminatlar da içerebilir. Bu sayede, iş yerinde meydana gelen kazalarda çalışanlar maddi kayıplardan korunmuş olur.",
      },
      {
        question: "İş Yeri Sigortası Prim Hesaplama Nasıl Yapılır?",
        answer: "Prim hesaplamada iş yerinin büyüklüğü, faaliyet alanı, konumu gibi faktörler etkilidir.",
      },
      {
        question: "İş Yeri Sigortası Neleri Kapsar?",
        answer: "İş yeri sigortası, iş yerini çeşitli risklere karşı korur. Yangın, hırsızlık, su baskını gibi birçok riski teminat altına alır.",
      },
      {
        question: "İş Yeri Sigortası Neden Önemlidir?",
        answer: "İş yeri sigortası, iş yerini maddi hasarlara karşı korur ve iş durma sürecindeki gelir kaybını karşılar. Hem iş yeri sahibini hem de iş yerini güven altına alır.",
      },
      {
        question: "İş Yeri Sigortası Fiyatı Ne Kadar?",
        answer: "İş yeri sigortası fiyatları kişiye göre değişiklik göstermektedir. Size özel sunacağımız iş yeri sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/ferdi-bn.png",
    contentImage: "/images/ferdi-kazasigortasibanner--sayfaici.webp",
    contentImageAlt: "Ferdi Kaza Sigortası Görseli",
    metaTitle: "Ferdi Kaza Sigortası | Sigorta Starı",
    metaDescription:
      "Beklenmedik kazara karşı finansal güvence! Ferdi kaza sigortası ile sevdiklerinizin geleceğini koruyun. Poliçe teklifi için hemen tıklayın.",
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
      {
        question: "Kaza Durumunda Ferdi Kaza Sigortasının Tazminat Süreci Nasıldır?",
        answer: "Kaza durumunda ferdi kaza sigortası, sigortalıya belirli bir tazminat ödemesi yapar. Tazminat miktarı, poliçede belirtilen kapsam ve limitlere bağlı olarak değişir. Sigortalı, kaza sonrasında derhal sigorta şirketi ile iletişime geçmeli, olayı bildirmeli ve gerekli belgeleri sunmalıdır. Sigorta şirketi, başvuruyu değerlendirerek uygun tazminatı öder.",
      },
      {
        question: "Ferdi Kaza Sigortası Nedir ve Neden Gereklidir?",
        answer: "Ferdi Kaza Sigortası, sigortalının ani ve beklenmedik kazalardan kaynaklanan maddi zararları karşılamayı amaçlayan bir sigorta türüdür. Hayatın belirsizlikleri karşısında finansal güvenlik sağlar, sevdiklerinizi maddi açıdan korur.",
      },
      {
        question: "Yoğun Bakım Yatış Teminatı Nasıl Çalışır ve Hangi Durumları Kapsar?",
        answer: "Yoğun Bakım Yatış Teminatı, COVID-19 hastalığı nedeniyle oluşan yoğun bakım masraflarını karşılamak amacıyla ek teminat olarak sunulur. Bu teminat, harcama belgesine gerek olmadan 30 güne kadar tazminat öder ve ekstra masraflarınıza destek olur.",
      },
      {
        question: "Prim Ödemelerini Nasıl Gerçekleştirebilirim?",
        answer: "Prim ödemelerinizi kredi kartı ile vade farksız 6 eşit taksitle gerçekleştirebilirsiniz. Bu esnek ödeme seçeneğiyle bütçenizi zorlamadan sigorta poliçenizi düzenleyebilirsiniz.",
      },
      {
        question: "COVID-19 Pandemisiyle İlgili Alınan Ek Teminatlar Nelerdir?",
        answer: "Pandemi döneminde Ferdi Kaza Sigortası ile Yoğun Bakım Yatış Teminatını ilave olarak alabilirsiniz. Bu teminatlar, COVID-19 hastalığı kaynaklı masraflarınıza ve iş kaybınıza destek olmayı amaçlar.",
      },
      {
        question: "Teminat Seçenekleri ve Prim Bilgileri Nelerdir?",
        answer: "Ferdi Kaza Sigortası, farklı teminat seçenekleri sunar. Örneğin, 10 yıl boyunca aylık 3.000 TL, 5.000 TL veya 8.000 TL ödeme teminatlarına sahip olabilirsiniz. Primler yıllık bazda belirlenir ve her yıl TÜFE oranında artırılır.",
      },
      {
        question: "Ferdi Kaza Sigortasının Genel Şartları Nelerdir?",
        answer: "Genel şartlar, sigorta kapsamını, istisnaları ve poliçe detaylarını içerir. Ferdi kaza sigortasının şeffaf ve anlaşılır bir şekilde sunulması için genel şartlara özel bir önem verir.",
      },
      {
        question: "Ferdi Kaza Sigortasının Başvuru Süreci Nasıl İşler Ve Ne Kadar Sürede Poliçe Düzenlenir?",
        answer: "Başvuru süreciniz hızlı bir şekilde tamamlanır. Sigorta Starı, uzman kadrosu ile başvurunuzu hızla değerlendirir ve en kısa sürede poliçenizi düzenler. Bu sayede sigortanızı kolayca yaptırabilir ve güvence altına alabilirsiniz.",
      },
      {
        question: "Ferdi Kaza Sigortası Fiyatı Ne Kadar?",
        answer: "Ferdi Kaza Sigortası fiyatları kişiye göre değişiklik göstermektedir. Size özel sunacağımız ferdi kaza sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/mesleki-bn.png",
    contentImage: "/images/meslekisorumluluk--sayfaici.webp",
    contentImageAlt: "Mesleki Sorumluluk Sigortası Görseli",
    metaTitle: "Mali Koruma İçin Mesleki Sorumluluk Sigortası | Sigorta Starı",
    metaDescription:
      "Meslek alanında oluşabilecek hatalara karşı mali koruma! Mesleki sorumluluk sigortası ile işinizi güvence altına alın. Detaylı bilgi ve teklif için tıklayın.",
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
      {
        question: "Mesleki Sorumluluk Sigortası Nedir?",
        answer: "Mesleki Sorumluluk Sigortası, profesyonellerin yaptıkları işlemlerden kaynaklanabilecek maddi zararları karşılamak amacıyla tasarlanmış bir sigorta türüdür.",
      },
      {
        question: "Kimler Mesleki Sorumluluk Sigortası Yaptırmalı?",
        answer: "Mesleki faaliyetlerde bulunan doktorlar, avukatlar, mühendisler, danışmanlar ve diğer profesyoneller, yaptıkları işlemlerden kaynaklanabilecek hukuki risklere karşı bu sigortayı yaptırmalıdır.",
      },
      {
        question: "Teminatlar Neleri Kapsar?",
        answer: "Mesleki Sorumluluk Sigortası, hatalı hizmet, yanlış danışmanlık, ihmal ve diğer mesleki hatalar nedeniyle ortaya çıkabilecek maddi kayıpları ve hukuki sorumlulukları içerir.",
      },
      {
        question: "Sigorta Primleri Nasıl Belirlenir?",
        answer: "Sigorta primleri, sigortalının mesleki risk düzeyine, iş hacmine ve sigorta teminatlarına göre belirlenir. Sigorta şirketi tarafından yapılan bir değerlendirme sonucunda prim hesaplanır.",
      },
      {
        question: "Mesleki Sorumluluk Sigortasının Kapsamı Geniş Midir?",
        answer: "Evet, mesleki sorumluluk sigortası genellikle geniş kapsamlı bir sigorta türüdür. Temel olarak, sigorta poliçesi, sigortalının mesleki faaliyetleri sırasında meydana gelebilecek maddi zararları, hataları, ihmal veya yetersizlikleri kapsar. Poliçe kapsamı, seçilen teminatlara ve sigorta şirketinin politikalarına bağlı olarak değişebilir.",
      },
      {
        question: "Mesleki Sorumluluk Sigortası Fiyatı Ne Kadar?",
        answer: "Mesleki sorumluluk sigortası fiyatları kişiye göre değişiklik göstermektedir. Size özel sunacağımız mesleki sorumluluk sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/nakliyat-bn.png",
    contentImage: "/images/nakliyat-sigortasi-banner--sayfaici.webp",
    contentImageAlt: "Nakliyat Sigortası Görseli",
    metaTitle: "Eşyalarınız İçin Nakliyat Sigortası | Sigorta Starı",
    metaDescription:
      "Taşıma sürecinde oluşabilecek risklere karşı güvence! Nakliyat sigortası ile eşyalarınız tamamen güvende. Detaylı bilgi ve sigorta teklifi almak için tıklayın.",
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
      {
        question: "Poliçe Başlangıç Tarihinden Önce Var Olan Eşyaların Değeri Nasıl Belirlenir?",
        answer: "Nakliyat sigortası poliçesi başlangıç tarihinden önce var olan eşyaların değeri, taşıma öncesi bir ekspertiz değerlendirmesi ile belirlenir. Bu değerleme, eşyaların türü, miktarı ve değeri dikkate alınarak yapılır.",
      },
      {
        question: "Taşınan Eşyaların Değeri Nasıl Belirlenir?",
        answer: "Taşınan eşyaların değeri, taşıma öncesi bir değerleme süreci ile belirlenir. Eşyaların cinsine, miktarına ve değerine göre bir ekspertiz değerlendirmesi yapılır.",
      },
      {
        question: "Harp Teminatı Nedir ve Ek Bir Güvence Midir?",
        answer: "Harp Teminatı, nakliyat sigortasına eklenen bir opsiyoneldir ve taşıma sırasında oluşabilecek harp durumlarına karşı ek bir güvence sağlar. Bu teminat, poliçe sahibinin talebine bağlı olarak eklenir ve ek bir prim ödemesi gerektirir.",
      },
      {
        question: "Nakliyat Sigortasının Taşıma Sürecindeki Önemi Nedir?",
        answer: "Nakliyat sigortası, taşıma sürecinde meydana gelebilecek risklere karşı önemli bir koruma sağlar. Taşınan eşyaların çeşitli risklere maruz kalabileceği durumlarda bu eşyaların kaybı, hasarı veya zarar görmesi durumunda maddi koruma sunar. Bu sayede, taşıma sürecinde olası maddi kayıpları önleyerek güvenli bir taşıma süreci sağlar.",
      },
      {
        question: "Nakliyat Sigortasının Kapsamına Hangi Durumlar Dahildir?",
        answer: "Sigorta kapsamındaki her ürünün gemi batması, fırtına, karaya vurma gibi olaylara karşı korunmasını temin eder. Ayrıca, gemide ortaya çıkan yangınlar ve eşya transferi sırasında gerçekleşen kazalar da poliçe kapsamında değerlendirilir.",
      },
      {
        question: "Nakliyat Sigortası Fiyatı Ne Kadar?",
        answer: "Nakliyat sigortası fiyatları kişiye göre değişiklik göstermektedir. Size özel sunacağımız özel nakliyat sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/tss-bn.png",
    contentImage: "/images/TSS--sayfaici.webp",
    contentImageAlt: "Tamamlayıcı Sağlık Sigortası Görseli",
    metaTitle: "En Kapsamlı Tamamlayıcı Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "SGK'nın sunduğu sağlık hizmetlerine ek koruma sağlayın! Tamamlayıcı sağlık sigortası ile eksik kalanları tamamlayın. Detaylı bilgi ve teklif için tıklayın.",
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
      {
        question: "Tamamlayıcı Sağlık Sigortasının (TSS) Avantajları Nelerdir?",
        answer: "Tamamlayıcı sağlık sigortası, standart sağlık sigortası poliçelerinin ötesinde ek avantajlar sunmaktadır. Bu avantajlar arasında özel hastane seçeneği, refakatçi, ilave tetkikler, yurt dışı tedaviler, yatarak tedavi teminatı, ve daha birçok özel hizmet bulunur. Tamamlayıcı poliçe, sağlık hizmetlerinden daha geniş bir şekilde yararlanmanızı sağlar.",
      },
      {
        question: "Sigorta Başlangıcından Önceki Sağlık Sorunları Kapsama Dahil Edilir Mi?",
        answer: "Poliçe başlangıç tarihinden önce var olan sağlık sorunları, tamamlayıcı sağlık sigortası kapsamı dışındadır. Önceden mevcut olan hastalıklarınızla ilgili doktor muayeneleri, tanı testleri ve diğer işlemler, poliçe devreye girmeden önceki döneme ait olduğu için bu maliyetleri tamamlayıcı sağlık sigortası ile karşılayamazsınız.",
      },
      {
        question: "Tamamlayıcı Sağlık Sigortası Zorunlu Mu?",
        answer: "Hayır, tamamlayıcı sağlık sigortası Türkiye'de zorunlu değildir. Ancak zorunlu sağlık sigortası kapsamının dışında kalan masraflarınızı karşılamak için tercih edilebilir.",
      },
      {
        question: "Prim Hesaplama Nasıl Yapılır?",
        answer: "Prim hesaplamada yaş, cinsiyet, sağlık durumu, teminat seçenekleri gibi faktörler etkilidir. Sigorta prim hesaplama aracımızı kullanarak kolayca fiyat teklifi alabilirsiniz.",
      },
      {
        question: "Tamamlayıcı Sağlık Sigortası Neleri Kapsar?",
        answer: "Tamamlayıcı sağlık sigortası, zorunlu sağlık sigortası kapsamında olmayan veya sınırlı kalan sağlık hizmetlerini kapsar. Belirnenen teminatlara göre muayene, tedavi, ilaç masrafları, diş tedavileri gibi birçok alanı içerebilmektedir.",
      },
      {
        question: "Tamamlayıcı Sağlık Sigortası Hangi Hastanelerde Geçerli?",
        answer: "Tamamlayıcı sağlık sigortası geniş bir hastane ağına sahiptir. Sigorta şirketinizin anlaşmalı olduğu özel hastaneler, poliklinikler ve anlaşmalı sağlık kuruluşlarından hizmet alabilirsiniz.",
      },
      {
        question: "Tamamlayıcı Sağlık Sigortası Fiyatı Ne Kadar?",
        answer: "Tamamlayıcı sağlık sigortası fiyatları kişiye ve belirlenen teminatlara göre değişiklik göstermektedir. Size özel sunacağımız tamamlayıcı sağlık sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/yabanci-bn.png",
    contentImage: "/images/yabancisaglik-sayfaici.webp",
    contentImageAlt: "Yabancı Uyruklular İçin Sağlık Sigortası Görseli",
    metaTitle: "Yabancı Uyruklular İçin Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "Türkiye'de uzun süreli ikamet eden yabancı uyruklular bireyler için yabancı sağlık sigortası (YSS) yapılır. Detaylı bilgi ve teklif almak için hemen tıklayın.",
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
      {
        question: "2 Yıllık Yabancı Sağlık Sigortası Yapılabilir Mi?",
        answer: "Sigorta şirketleri genellikle poliçeyi yıllık olarak düzenler. Poliçe kapsamındaki teminatlar, poliçe süresince geçerlidir ve genellikle 1 yıl ile sınırlıdır. Ancak bazı sigorta şirketleri, talep doğrultusunda 2 yıllık yabancı sağlık sigortası da sunabilmektedir. Sigorta süresini uzatmak mümkündür, ancak 2 yıl geçerli olan yabancı sağlık sigortası için teklif alırken detaylı bilgi alınması önerilir.",
      },
      {
        question: "Yabancı İkamet Sağlık Sigortası Kimler İçin Zorunlu Değildir?",
        answer: "Türkiye Cumhuriyeti vatandaşları ile mavi kart sahipleri, yurt dışında ikamet etmeleri durumunda Türkiye'de ikamet etmek için yabancı sağlık sigortası yaptırmak zorunda değillerdir. \"Mavi Kart nedir?\" sorusuna gelince, Türkiye Cumhuriyeti vatandaşları tarafından terk edilen kişilere verilen bir statüdür. Vatandaşlıktan çıkanlar, mavi kart ile askerlik yapma veya seçme ve seçilebilme gibi bazı haklardan muaf tutulur, ancak diğer haklardan yararlanabilirler.",
      },
      {
        question: "Yabancı Sağlık Sigortası Nasıl İptal Edilir?",
        answer: "Yabancı sağlık sigortası iki durumda iptal edilebilir. Birincisi, yabancı uyrukluların Türkiye'de ikamet ederken SGK'ya dahil olmaları durumunda sigortayı iptal etme hakları vardır. İkinci durum ise yabancı uyrukluların oturma izni almasıdır. Oturma izni alan kişiler, özel sağlık sigortası yaptırdıktan sonra sigorta şirketine başvurarak yabancı sağlık sigortasını iptal ettirebilirler.\n\nAncak iptal işlemleri, yabancı uyruklu kişinin inisiyatifindedir. Kişiler istedikleri takdirde iptal hakkını kullanabilir veya iki farklı sigortanın sağladığı güvencelerden yararlanabilirler.",
      },
      {
        question: "Yabancı Uyruklular İçin Sağlık Sigortası Zorunlu Mu?",
        answer: "Türkiye'ye çalışma, öğrenim veya ikamet amacıyla gelen yabancı uyruklular için zorunlu değildir, ancak ikamet izni başvurusu yaparken talep edilebilir.",
      },
      {
        question: "İkamet İzni Başvurusunda Hangi Belgeler Gereklidir?",
        answer: "Sağlık sigortası poliçesi, ikamet izni başvurusu yapacak olan yabancı uyrukluların talep edilen belgeler arasında yer alır.\n\n• İkamet izni başvuru formu,\n• Pasaport veya yerine geçen bir belgenin aslı ve fotokopisi,\n• 4 adet biyometrik (ICAO standartlarında) fotoğraf,\n• Sağlık sigortası,\n• Adli sicil kaydı,\n• İkamet izni boyunca yetecek miktarda maddi imkanını ispatlar belgeler.",
      },
      {
        question: "Sağlık Sigortası Primi Nasıl Hesaplanır?",
        answer: "Prim hesaplaması, sigortalının yaşı, sağlık durumu, poliçe süresi gibi faktörlere bağlı olarak yapılır. Prim ödeme koşulları poliçe süresi boyunca düzenli olarak ödenir.",
      },
      {
        question: "Yabancı Uyruklular İçin Sağlık Sigortası Fiyatı Ne Kadar?",
        answer: "Yabancı uyruklular için sağlık sigortası fiyatları kişiye göre değişiklik göstermektedir. Size özel sunacağımız yabancı sağlık sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/ozel-bn.png",
    contentImage: "/images/%C3%B6zel-saglik-safaici.webp",
    contentImageAlt: "Özel Sağlık Sigortası Görseli",
    metaTitle: "En Kapsamlı Özel Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "Hayatınızın her anında sağlığınız ön planda! Özel sağlık sigortası ile geniş kapsamlı teminatlara sahip olun. Detaylı bilgi ve teklif almak için hemen tıklayın.",
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
      {
        question: "Özel Sağlık Sigortasının Öne Çıkan Hizmetleri Nelerdir?",
        answer: "Özel sağlık sigortası, anlaşmalı hastaneler, doktor muayenehaneleri, poliklinikler ve fizik tedavi merkezlerinden geniş kapsamlı sağlık kontrolü, tanı ve tedavi hizmetleri almanızı mümkün kılar. Poliçe kapsamında yer alması ve anlaşmalı eczanelerle ilişkili olması şartıyla, ilaçlarını ücretsiz veya düşük bir ücretle temin etme imkanına sahip olabilirsiniz.",
      },
      {
        question: "Özel Sağlık Sigortası (ÖSS) ve Tamamlayıcı Sağlık Sigortası (TSS) Farkı Nedir?",
        answer: "Tamamlayıcı sağlık sigortası (TSS) yurt dışında geçerli değildir, ancak özel sağlık sigortası (ÖSS) ile genişletilmiş teminatlar dahilinde yurt dışında da sağlık hizmetinden faydalanabilirsiniz. ÖSS'nin hastane ağı daha geniştir çünkü TSS, sadece SGK anlaşmalı özel hastanelerde geçerlidir. ÖSS, anlaşmalı hastane ağında SGK anlaşma zorunluluğu olmadan daha fazla özel hastaneyi kapsayabilir.\n\nTSS, özel hastanelerde geçerliyken, ÖSS anlaşmalı doktor kapsamı üzerinden özel muayenehanelerde de geçerlidir. ÖSS poliçesi, anlaşması olan doktorlardan sadece hastane kapsamında değil, özel muayenehanelerinde de sağlık hizmeti alınmasına olanak tanır. Ayrıca, ÖSS anlaşması olmayan doktorlar için bazı indirim avantajları sunabilir.\n\nÖSS'de 60 yaş altındaki herkes sigorta yaptırabilirken, TSS'de bu yaş sınırı 55'tir. TSS'de sadece 15 TL katılım ücreti ödenirken, ÖSS'de sağlık hizmetleri teminatlar dahilinde belirlenen oranda (örneğin %80) karşılanır ve kalan ücreti senin ödemen gerekir. TSS prim ödemeleri, ÖSS'ye göre genellikle daha düşüktür. TSS'den faydalanmak için SGK'lı olmak gerekir, ancak ÖSS yaptırmak için böyle bir gereklilik bulunmaz.",
      },
      {
        question: "Poliçe Başvurusu Sırasında Sağlık Durumu Nasıl Değerlendirilir?",
        answer: "Poliçe başvurusu sırasında sağlık durumu sigortalının yaşına ve geçmiş sağlık geçmişine göre değerlendirilir. Sigorta şirketi, risk durumuna bağlı olarak prim teklifi sunar.",
      },
      {
        question: "Özel Sağlık Sigortası Primleri Nasıl Belirlenir?",
        answer: "Prim hesaplaması, sigortalının yaşına, cinsiyetine, sağlık durumuna, poliçe kapsamına ve seçeneklere bağlı olarak yapılır. Sigorta şirketleri, online platformlarında veya acenteleri aracılığıyla prim hesaplama hizmeti sunar.",
      },
      {
        question: "Acil Durumlar İçin Özel Sağlık Sigortası Ne Gibi Kolaylıklar Sunar?",
        answer: "Özel sağlık sigortası, acil durumlarda hızlı müdahale, özel hastanelerde yüksek standartlarda hizmet ve acil operasyon masraflarını karşılamak gibi avantajlar sunar.",
      },
      {
        question: "Özel Sağlık Sigortası Fiyatı Ne Kadar?",
        answer: "Özel sağlık sigortası fiyatları kişiye ve teminatlara göre değişiklik göstermektedir. Size özel sunacağımız özel sağlık sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
    bannerImage: "/images/seyahat-bnn.png",
    contentImage: "/images/seyahat-saglik.webp",
    contentImageAlt: "Seyahat Sağlık Sigortası Görseli",
    metaTitle: "En Uygun ve Kapsamlı Seyahat Sağlık Sigortası | Sigorta Starı",
    metaDescription:
      "Yurt içi ve yurt dışı seyahatlerinizde sağlığınız güvence altında! Seyahat sağlık sigortası ile anında sigorta poliçesi. Hemen seyahat sağlık sigorta teklifi alın.",
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
      {
        question: "Seyahat Sağlık Sigortası Neden Önemlidir?",
        answer: "Seyahat sağlık sigortası, yurt dışında beklenmedik sağlık sorunlarına karşı mali güvence sağlar ve seyahat edenleri olası mali risklerden korur.",
      },
      {
        question: "Seyahat İptali Teminatı Nedir?",
        answer: "Seyahat iptali teminatı, beklenmedik durumlar nedeniyle seyahatinizin iptal edilmesi durumunda ortaya çıkabilecek masrafları karşılar. Hastalık, kaza veya vize reddi gibi durumları kapsar. Bu durumlar sigorta şirketlerine göre değişiklik gösterebilir.",
      },
      {
        question: "Seyahat Sigortası Zorunlu Mu?",
        answer: "Türkiye'den yurt dışına seyahat edenler için zorunlu değildir, ancak birçok ülkenin vize başvurularında seyahat sağlık sigortası talep ettiği unutulmamalıdır.",
      },
      {
        question: "Prim Ödeme Koşulları Nasıl Belirlenir?",
        answer: "Prim hesaplaması, seyahatin süresi, seyahat edilen ülke, sigortalının yaşı gibi faktörlere bağlı olarak yapılır. Prim ödeme koşulları poliçe süresi boyunca düzenli olarak ödenir.",
      },
      {
        question: "Yurt Dışında Acil Sağlık Durumlarında Nasıl Destek Alabilirim?",
        answer: "Seyahat sağlık sigortası, yurt dışında acil sağlık durumlarında sigortalıya birçok destek sunar. Sigorta şirketi, sigortalının bulunduğu bölgede anlaşmalı olduğu hastaneler ve doktorlarla iletişim kurarak acil müdahaleyi sağlar. Ayrıca, 7/24 acil yardım hattı aracılığıyla sigortalıya rehberlik ve destek hizmeti sunar.",
      },
      {
        question: "Seyahat Sağlık Sigortası Kapsamında Spor Etkinlikleri Sigortalanır Mı?",
        answer: "Evet, çoğu seyahat sağlık sigortası poliçesi, spor etkinliklerini kapsar. Ancak, poliçe üzerinde belirtilen kapsam ve limitlere dikkat edilmelidir. Bazı tehlikeli sporlar veya yüksek riskli etkinlikler, standart poliçe kapsamı dışında olabilir. Bu nedenle, sigortalı spor etkinliklerini kapsayan bir poliçe seçerken detaylı inceleme yapmalıdır.",
      },
      {
        question: "Seyahat Sağlık Sigortası Fiyatı Ne Kadar?",
        answer: "Seyahat sağlık sigortası fiyatları kişiye göre değişiklik göstermektedir. Size özel sunacağımız seyahat sağlık sigortası fiyatlarını değerlendirmek için hemen teklif alabilirsiniz.",
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
