import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Geniş Kapsamlı Sigorta Seçenekleri",
    description:
      "Geniş kapsamlı ve özelleştirilebilir sigorta çözümlerimizle sizlere en uygun güvenceyi sağlıyoruz.",
  },
  {
    number: "02",
    title: "Hızlı ve Sorunsuz İşlem Süreçleri",
    description:
      "Teklif alma, poliçe düzenleme ve hasar bildirimi gibi işlemleri kolayca gerçekleştirebilir, hızlıca güvence altına alabilirsiniz.",
  },
  {
    number: "03",
    title: "Rekabetçi Poliçe Fiyatları",
    description:
      "Rekabetçi fiyatlarımız ile müşterilerimizin sigorta ihtiyaçları için ekonomik seçenekler sunuyoruz.",
  },
  {
    number: "04",
    title: "Özel Kampanya ve İndirimler",
    description:
      "Düzenlediğimiz kampanyalarla sigorta hizmetlerini daha erişilebilir kılarken, müşterilerimize özel indirimler sunuyoruz.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-secondary p-0">
      <div className="container-fluid position-relative px-0 z-index-2">
        <div className="row">
          <div className="col-lg-6 py-7 py-xxl-10">
            <div className="h-100 mx-auto w-95 w-sm-90 w-xxl-65">
              <div className="mb-2-3 fadeIn section-heading wow">
                <span className="text-white">AVANTAJLARIMIZ</span>
                <h2 className="mb-0 text-white h1">Neden Sigorta Starı?</h2>
              </div>

              {features.map((feature, i) => (
                <div
                  key={feature.number}
                  className={`d-flex${i < features.length - 1 ? " mb-2-3" : ""}`}
                >
                  <div className="flex-shrink-0 process-block">
                    <h3 className="mb-0">
                      <span>{feature.number}</span>
                    </h3>
                  </div>
                  <div className="flex-grow-1 ms-3 ms-sm-4">
                    <h4 className="text-white h5 mb-2">{feature.title}</h4>
                    <p className="mb-0 text-white opacity7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 why-us">
            <div className="row g-0">
              <div className="col-xxl-6 col-sm-5 d-none d-xl-block">
                <div
                  className="h-100 bg-img cover-background"
                  style={{
                    backgroundImage:
                      "url('/images/avantaj-anasayfa.webp')",
                  }}
                ></div>
              </div>

              <div className="col-xxl-6 col-xl-7 order-2 order-sm-1">
                <div className="px-1-9 px-sm-6 px-xl-1-6 px-xxl-4 py-2-3 bg-primary py-lg-7 py-xxl-10">
                  <h3 className="mb-0 text-white display-5 display-lg-2 fw-bolder universal-text">
                    ULUSLARARASI
                  </h3>
                  <p className="mb-0 year">Sigortacılık Deneyimi</p>
                </div>

                <div className="px-1-9 px-sm-6 px-xl-1-6 px-xxl-4 py-2-3 bg-white py-lg-10">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <Image
                        loading="lazy"
                        alt="Avantajlarımız Görseli"
                        src="/images/icon-13.png"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="mb-0">
                        15&apos;den Fazla Anlaşmalı Sigorta Şirketi!
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
