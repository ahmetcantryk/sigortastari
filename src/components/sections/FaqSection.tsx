"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    id: "656591746c230c6e093087fa",
    question: "Hasar Durumunda Nasıl Bir Yol İzlemeliyim?",
    answer:
      "Hasar durumunda ilk olarak poliçenizde belirtilen iletişim kanallarımızı kullanarak bize ulaşabilirsiniz. Hasar sürecinizin sorunsuz ilerlemesi için gerekli bilgileri ve belgeleri sağlamak önemlidir.",
  },
  {
    id: "6566ea9c2c645ea92c284551",
    question: "Nasıl Sigorta Poliçesi Satın Alabilirim?",
    answer:
      "Sigorta Starı web sitemizi ziyaret ederek ilgili ürünün teklif formunu doldurarak sigorta poliçesi satın alabilirsiniz. Ayrıca, müşteri temsilcilerimizle iletişime geçerek de poliçe satın alma işlemlerinizi gerçekleştirebilirsiniz.",
  },
  {
    id: "6565918d6c230c6e093087fc",
    question: "Sigorta Kapsamlarını Detaylı Olarak Nasıl İncelerim?",
    answerJsx: (
      <p>
        Sigorta kapsamlarını anlamak için{" "}
        <Link
          href="/urunler"
          rel="noopener noreferrer"
          className="text-editor-link"
        >
          <u>&quot;Ürünler&quot;</u>
        </Link>{" "}
        sayfamızı ziyaret edebilir ve her sigorta türü için detaylı açıklamalara
        ulaşabilirsiniz. Ayrıca, müşteri temsilcilerimizle iletişime geçerek
        size en uygun sigorta çözümleri hakkında bilgi alabilirsiniz.
      </p>
    ),
  },
  {
    id: "656591626c230c6e093087f9",
    question: "Sigorta Poliçemi Nasıl Güncelleyebilirim?",
    answerJsx: (
      <>
        <p>
          Poliçenizi güncellemek için{" "}
          <Link
            href="/iletisim"
            rel="noopener noreferrer"
            className="text-editor-link"
          >
            <u>&quot;İletişim&quot;</u>
          </Link>{" "}
          sayfamızdan bize ulaşabilir ve güncelleme taleplerinizi kolayca
          iletebilirsiniz.
        </p>
        <p>
          <br />
        </p>
      </>
    ),
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="bg-white why-us-02 bg-img"
      style={{ backgroundImage: "url('/images/why-us-02.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 wow fadeIn">
            <div className="pe-xl-2-9">
              <span className="text-uppercase small letter-spacing-4 mb-3 font-weight-600 shape-text sss-text mb-center">
                En çok merak edilenler
              </span>

              <h2 className="display-22 display-sm-18 display-md-16 display-lg-14 display-xl-10 mb-1-9 mb-center">
                Sıkça Sorulan Sorular
              </h2>

              <div id="accordion" className="accordion-style style1">
                {faqs.map((faq) => (
                  <div className="card mb-3" key={faq.id}>
                    <div
                      className="card-header"
                      id={`headingOne${faq.id}`}
                    >
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
                        {faq.answerJsx ? faq.answerJsx : <p>{faq.answer}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/sss"
                className="border-bottom about-link mb-center d-md-inline-block mt-4"
              >
                Tümünü Gör
              </Link>
            </div>
          </div>

          <div className="col-xl-6 wow fadeIn d-none d-xl-block">
            <div className="ps-xxl-1-9 text-center">
              <Image
                loading="lazy"
                src="/images/sss.webp"
                className="border-radius-5"
                alt="Anasayfa SSS Görseli"
                width={570}
                height={570}
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
