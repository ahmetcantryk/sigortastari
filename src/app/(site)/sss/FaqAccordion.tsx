"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  answerHtml?: string;
}

const faqItems: FaqItem[] = [
  {
    id: "656591bb6c230c6e09308800",
    question: "Sigorta Primleri Nasıl Hesaplanır?",
    answer:
      "Sigorta primleri; poliçe sahibinin yaşına, seçilen teminatlara ve poliçe kapsamına bağlı olarak değişir. Sigorta şirketi tarafından belirlenen faktörler temel alınarak hesaplanır.",
  },
  {
    id: "656591d86c230c6e09308802",
    question: "Poliçe Kapsamına Ek Teminatlar Nasıl Eklenir?",
    answer:
      "Poliçe sahibi olarak, ek teminatlar eklemek için bizimle ile iletişime geçebilirsiniz. Bu teminatlar genellikle özel ihtiyaçlara yönelik ek korumaları içerir.",
  },
  {
    id: "6565921e6c230c6e09308805",
    question:
      "Sigorta Poliçesindeki Bekleme Süreleri ve Bu Süreleri Etkileyen Faktörler Nelerdir?",
    answer: "",
    answerHtml:
      "<p>Sigorta poliçesindeki bekleme süreleri, poliçenin başlangıcından itibaren belirli bir süre boyunca bazı teminatlardan faydalanılamamasını ifade eder. Sigorta poliçesindeki bekleme süreleri ve etkileyen faktörler, poliçe sahibinin ihtiyaçlarına ve tercihlerine bağlı olarak değişiklik gösterebilir. Bu süreleri etkileyen faktörler şunlardır:</p><ul><li>Poliçe Türü,</li><li>Sağlık Durumu,</li><li>Yaş,</li><li>Sigorta Şirketi Politikaları,</li><li>Poliçe Kapsamı.</li></ul>",
  },
  {
    id: "656592466c230c6e09308807",
    question:
      "Sigorta Poliçesi Yenileme Sürecinde Dikkat Edilmesi Gereken Önemli Noktalar Nelerdir?",
    answer: "",
    answerHtml:
      "<p>Sigorta poliçesi yenileme sürecinde dikkat edilmesi gereken önemli noktalar şunlardır:</p><ul><li>Yenileme öncesinde, poliçenin kapsamını gözden geçirin. Mevcut ihtiyaçlarınıza uygun bir kapsam olduğundan emin olun ve gerekirse değişiklik talep edebilirsiniz.</li><li>Yenileme sürecinde prim değerlendirmesi yapın. Diğer sigorta şirketlerinin tekliflerini inceleyerek mevcut poliçenizin rekabetçi bir prim sunup sunmadığını kontrol etmelisiniz.</li><li>Sağlık durumunuzda veya yaşam koşullarınızda değişiklik olmuşsa, poliçenizi yeniden değerlendirme zamanı gelmiş olabilir. Sigorta şirketiyle iletişime geçerek güncel bilgilerinizi paylaşmalısınız.</li><li>Yenileme tarihini kaçırmamaya özen gösterin. Poliçenizin süresi dolmadan önce yenileme işlemlerini tamamlamak, kesintisiz koruma sağlamak açısından önemlidir.</li><li>Teminatları ve poliçe koşullarını dikkatlice incelemelisiniz. Yenileme sürecinde ek teminatlar eklemek veya gereksiz olanları çıkarmak isteyebilirsiniz.</li><li>Sigorta şirketinden gelen yenileme bildirimini dikkatlice okumalısınız. Poliçe değişiklikleri veya yeni eklemeler hakkında bilgi içerebilir.</li><li>Yenileme sürecinde sigorta şirketinin sunduğu indirimleri ve kampanyaları değerlendirmelisiniz. </li><li>Sigorta temsilcinizle düzenli iletişimde olmalı, herhangi bir sorunuz veya talebiniz varsa, temsilcinizden yardım almalısınız.</li></ul>",
  },
  {
    id: "6565925f6c230c6e09308809",
    question: "Trafik Sigortası Nedir ve Nasıl Alabilirim?",
    answer:
      'Zorunlu trafik Sigortası, araç sahiplerinin yaşayabileceği olası kazalarda karşı tarafta oluşan zararı karşılayan bir sigorta türüdür. Sigorta Starı olarak, "Trafik Sigortası" sayfamızdan kolayca teklif alabilir ve trafik sigortası poliçenizi hızlıca düzenleyebilirsiniz.',
  },
  {
    id: "6565927c6c230c6e0930880b",
    question: "Sağlık Sigortası Primleri Nasıl Hesaplanır?",
    answer:
      "Sağlık sigortası primleri, birçok faktöre dayanarak hesaplanır. Bu faktörler arasında sigortalının yaş, cinsiyet, genel sağlık durumu, poliçe kapsamı, sigorta süresi ve ek teminatlar bulunur. Ayrıca, poliçe başlangıcında belirlenen özelliklere göre kişiselleştirilmiş bir prim ödeme planı oluşturulur.",
  },
  {
    id: "656592986c230c6e0930880d",
    question: "Seyahat Sağlık Sigortası Nedir ve Neden Gereklidir?",
    answer:
      "Seyahat sağlık sigortası, yurt dışında seyahat ederken olası sağlık sorunlarına karşı maddi güvence sağlayan bir sigorta türüdür. Bu sigorta, yurt dışında beklenmedik bir kaza, hastalık veya acil sağlık durumu durumunda tıbbi masrafları karşılamaktadır. Seyahat sağlık sigortası, seyahat sağlığına özel kapsamlı bir koruma sunar ve seyahat edenlerin bu tür durumlarda mali yük altına girmemesini sağlar.",
  },
  {
    id: "656592b16c230c6e0930880f",
    question: "Yabancı Uyruklular İçin Sağlık Sigortası Nasıl Başvurulur?",
    answer:
      "Yabancı uyruklular için sağlık sigortasına başvurmak teklif al formunu doldurabilirsiniz. Başvuru süreci, kişinin sağlık durumu, yaş ve sigorta şirketinin politikalarına bağlı olarak değişebilir.",
  },
  {
    id: "656593576c230c6e09308815",
    question: "Yabancı Sağlık Sigortası Nedir?",
    answer:
      "Yabancı Sağlık Sigortası, Türkiye'de bir yıldan uzun süreli olarak ikamet edecek olan yabancı uyruklu bireylerin zorunlu olarak yaptırmaları gereken bir sigorta türüdür. Diğer bir deyişle, Türk vatandaşı olmayan ziyaretçilerin ikamet izni veya oturma izni alabilmek için başvurdukları sağlık sigortasıdır. Bu sigorta poliçesi kapsamında, yabancı uyruklu bireyler, ayakta ve yatarak tedavi gibi çeşitli güvencelere sahip olurlar. Yabancı sağlık sigortası aynı zamanda yabancı uyruklu oturma izni sağlık sigortası olarak da adlandırılır.",
  },
  {
    id: "6565936d6c230c6e09308817",
    question: "İş Yeri Sigortasının İşverenlere Avantajları Nelerdir?",
    answer:
      "İş yeri sigortası, işverenlere iş yerinde meydana gelebilecek yangın, su baskını, hırsızlık gibi risklere karşı maddi güvence, işyeri malzemelerinin ve makinelerinin teminat altında olması, çalışanlara sağlanan ek avantajlar, iş sürekliliğini sağlama ve hukuki koruma gibi avantajlar sağlar.",
  },
  {
    id: "656594de6c230c6e09308824",
    question: "Mesleki Sorumluluk Sigortası Nedir ve Kimler İçin Uygundur?",
    answer:
      "Mesleki sorumluluk sigortası, bir meslek veya uzmanlık alanında hizmet veren kişilerin, işlerini yerine getirirken olası hatalar veya ihmaller nedeniyle ortaya çıkabilecek maddi zararları karşılamak için tasarlanmış bir sigorta türüdür. Bu sigorta, avukatlar, doktorlar, mühendisler, danışmanlar, mimarlar ve diğer birçok meslek grupları için uygundur.",
  },
  {
    id: "656594f66c230c6e09308826",
    question:
      "Hizmet Verilen Sektöre Göre Mesleki Sorumluluk Sigortası Nasıl Seçilir?",
    answer:
      "Öncelikle sektörün gereksinimleri ve risk profili dikkate alınmalıdır. Örneğin, bir avukat için hukuki hataların kapsanması önemliyken, bir mühendis için proje hataları ve tasarım hatalarının kapsanması öncelikli olabilir. Sigorta acenteleri ile yapılan görüşmelerde, sektöre özgü ihtiyaçlara uygun bir poliçe belirlenerek doğru koruma sağlanabilir.",
  },
  {
    id: "656595096c230c6e09308828",
    question:
      "Ferdi Kaza Sigortasının Günlük Yaşamda Sunduğu Avantajlar Nelerdir?",
    answer:
      "Ferdi kaza sigortasının avantajları arasında; beklenmedik kaza durumlarında maddi koruma, tedavi masraflarının karşılanması, sürekli sakatlık durumunda tazminat, yaşam fonksiyonlarını kaybetme durumunda destek ödemeleri gibi güvenceler bulunur. Ferdi kaza sigortası, sigortalıya kaza sonucu oluşabilecek maddi kayıplardan korunma imkanı tanır.",
  },
  {
    id: "656595316c230c6e0930882a",
    question:
      "Taşınan Eşyaların Değeri Nakliyat Sigortasında Nasıl Belirlenir?",
    answer:
      "Taşınan eşyaların değeri, nakliyat sigortasında genellikle taşıma öncesi bir değerlendirme ile belirlenir. Sigortalı, taşıma öncesi eşyaların bir envanterini çıkararak ve bu eşyaların değerini belirleyerek sigorta şirketine sunmaktadır. Bu değerlendirmeye dayanarak sigorta primi hesaplanır ve poliçe düzenlenir. Eşyaların değeri, olası bir zarar durumunda tazminat miktarını etkiler.",
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="accordion" className="accordion-style">
      {faqItems.map((faq) => (
        <div className="card mb-3" key={faq.id}>
          <div className="card-header" id={`headingOne${faq.id}`}>
            <h3 className="mb-0">
              <button
                className={`btn btn-link${openId !== faq.id ? " collapsed" : ""}`}
                onClick={() => toggle(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`collapse${faq.id}`}
              >
                {faq.question}
              </button>
            </h3>
          </div>
          <div
            id={`collapse${faq.id}`}
            className={`collapse${openId === faq.id ? " show" : ""}`}
            aria-labelledby={`headingOne${faq.id}`}
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              {faq.answerHtml ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: faq.answerHtml,
                  }}
                />
              ) : (
                <p>{faq.answer}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
