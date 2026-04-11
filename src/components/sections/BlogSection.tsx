import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "6666e87d6d777e0345e20fa2",
    date: "28.10.2024",
    category: "Genel",
    slug: "kis-lastigi-ne-zaman-takilmalidir-zorunlu-mudur",
    title: "Kış Lastiği Ne Zaman Takılmalıdır, Zorunlu mudur?",
    image:
      "/images/kis-lastigi-ne-zaman-takilmalidir-zorunlu-mudur-sigorta-stari.jpg",
    alt: "Kış Lastiği Ne Zaman Takılmalıdır, Zorunlu mudur? Görseli",
    excerpt:
      "Kış aylarında güvenli sürüş için kış lastiklerinin önemi büyük. Kasko ve trafik sigortası ile araç güvenliğinizi artırın. Detaylı bilgi için Sigorta Starı'na ulaşın!",
  },
  {
    id: "654de901992a7cd70ae6f034",
    date: "24.10.2024",
    category: "Özel Sağlık",
    slug: "ozel-saglik-sigortasi-fiyatlari-hangi-faktorlere-gore-belirlenir",
    title: "Özel Sağlık Sigortası Fiyatları Hangi Faktörlere Göre Belirlenir?",
    image:
      "/images/ozel-saglik-sigortasi-fiyatlari-hangi-faktorlere-gore-belirlenir-sigorta-stari.jpg",
    alt: "Özel Sağlık Sigortası Fiyatları Hangi Faktörlere Göre Belirlenir? Görseli",
    excerpt:
      "Özel sağlık sigortası nedir, özel sağlık sigortası fiyatı neye göre belirlenir ve özel sağlık sigortası seçiminde nelere dikkat edilmelidir? Detaylar Sigorta Starı'nda!",
  },
  {
    id: "654de901992a7cd70ae6f033",
    date: "22.10.2024",
    category: "Tamamlayıcı Sağlık",
    slug: "tamamlayici-saglik-sigortasi-hangi-tedavileri-kapsamaktadir",
    title: "Tamamlayıcı Sağlık Sigortası Hangi Tedavileri Kapsamaktadır?",
    image:
      "/images/tamamlayici-saglik-sigortasi-hangi-tedavileri-kapsamaktadir-sigorta-stari.jpg",
    alt: "Tamamlayıcı Sağlık Sigortası Hangi Tedavileri Kapsamaktadır? Görseli",
    excerpt:
      "Tamamlayıcı sağlık sigortası hangi tedavileri kapsar, ameliyatları kapsar mı, diş tedavisi tamamlayıcı sağlık sigortasına dahil mi? Tüm detaylar bu blogda!",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-light blog-padding">
      <div className="container position-relative z-index-2">
        <div className="section-heading text-center mb-2-9 mb-lg-6 wow fadeIn">
          <span>Bloglar</span>
          <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
            En Çok Okunanlar
          </h2>
        </div>

        <div className="row g-xl-5 mt-n1-9">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-md-6 col-lg-4 mt-2-9"
              data-id={post.id}
              data-date={post.date}
            >
              <article className="card card-style9">
                <div className="card-body">
                  <div className="image-box">
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.image}
                        className="rounded"
                        alt={post.alt}
                        width={384}
                        height={256}
                      />
                    </Link>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div>
                      <span className="blog-card-text text-muted">
                        {post.category}
                      </span>
                    </div>
                    <div>
                      <span className="blog-card-text">{post.date}</span>
                    </div>
                  </div>

                  <h3 className="h4 mb-4">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="blog-card-text">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className=" about-link"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className=" mt-5">
            <Link href="/blog" className="border-bottom about-link">
              Tümünü Gör
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
