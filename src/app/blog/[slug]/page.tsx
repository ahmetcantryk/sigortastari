import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getPopularPosts,
  getRelatedPosts,
  formatDate,
} from "@/lib/blog";

export const revalidate = 3600; // ISR: her 1 saatte bir yeniden oluştur

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Blog Yazısı Bulunamadı" };

  const title = post.meta_title || post.title;
  return {
    title: `${title} | Sigorta Starı`,
    description: post.short_content,
    openGraph: {
      title,
      description: post.short_content,
      type: "article",
      url: `https://www.sigortastari.com/blog/${post.slug}`,
      siteName: "Sigortastarı",
      locale: "tr-TR",
      images: post.image ? [{ url: post.image }] : [{ url: "/images/logos.png" }],
    },
    alternates: {
      canonical: `https://www.sigortastari.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [popularPosts, relatedPosts] = await Promise.all([
    getPopularPosts(5),
    getRelatedPosts(post.category.id, post.slug, 3),
  ]);

  const shareUrl = encodeURIComponent(
    `https://www.sigortastari.com/blog/${post.slug}`
  );
  const detailImage = post.detail_image || post.image;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.short_content,
    image: detailImage || "/images/logos.png",
    datePublished: post.published_date,
    dateModified: post.updated_at || post.published_date,
    author: {
      "@type": "Organization",
      name: "Sigorta Starı",
      url: "https://www.sigortastari.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Sigorta Starı",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sigortastari.com/images/logos.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.sigortastari.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <style>{`
        section { overflow: unset; }
        .card-style3 img { height: 480px; object-fit: cover; }
        .card-style3 h3 { font-size: 1.5rem; }
        .card-style3 h4 { font-size: 1.2rem !important; }
        @media (max-width:500px) {
          .card-style3 img { height: 250px; }
        }
        .page-title-section ul li:last-child a { opacity: 1; }
        @media (max-width:992px) {
          .sticky-sidebar {
            display: flex;
            flex-direction: column-reverse;
            gap: 30px;
          }
          .d-mb-n { display: none; }
        }
        .card-body a { color: red !important; }
      `}</style>

      {/* Banner */}
      <section
        className="page-title-section top-position1 bg-img cover-background left-overlay-dark"
        style={{ backgroundImage: "url('/images/blog-banner.webp')" }}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="page-title">
            <div className="row">
              <div className="col-md-12">
                <h1>{post.title}</h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li><Link href="/" className="text-white">Anasayfa</Link></li>
                  <li><Link href="/bloglar" className="text-white">Blog</Link></li>
                  <li><span className="text-white">{post.title}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="row">
            {/* Sol: Makale */}
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-lg-12">
                  <article className="card card-style3 border-0 h-100">
                    {detailImage && (
                      <Image
                        src={detailImage}
                        alt={`${post.title} Görseli`}
                        width={800}
                        height={480}
                        className="card-img-top"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        priority
                        sizes="(max-width: 992px) 100vw, 66vw"
                      />
                    )}
                    <div className="card-body p-1-9 position-relative">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <span className="card-insurance">{post.category.name}</span>
                        </div>
                        <div>
                          <span className="blog-card-text">{formatDate(post.published_date)}</span>
                        </div>
                      </div>

                      <div dangerouslySetInnerHTML={{ __html: post.detail_content }} />
                    </div>

                    {/* Paylaş */}
                    <div className="border-top border-color-light-black p-1-9 g-0 d-md-flex align-items-center entry-footer float-start w-100">
                      <div className="blog-share-icon">
                        <label className="h6 me-1 mb-0">Paylaş:</label>
                        <ul className="share-post m-0 p-0 d-inline-block">
                          <li>
                            <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}>
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/share?url=${shareUrl}`}>
                              <i className="fa-brands fa-x-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}>
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            {/* Sağ: Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-sidebar">
                <div className="blog sidebar ps-xl-4">
                  <div className="widget mb-1-9">
                    <div className="widget-title">
                      <h3 className="mb-0 h6">Popüler Blog</h3>
                    </div>
                    <div className="p-1-9">
                      {popularPosts.map((p) => (
                        <div key={p.id} className="d-flex mb-4">
                          <div className="flex-shrink-0 image-hover">
                            {p.image && (
                              <Image
                                src={p.image}
                                alt={`${p.title} Görsel`}
                                width={100}
                                height={70}
                                className="rounded"
                                style={{ width: 100, height: "auto", objectFit: "cover" }}
                                sizes="100px"
                              />
                            )}
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h4 className="h6">
                              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                            </h4>
                            <p className="mb-0 small">{formatDate(p.published_date)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ps-xl-4">
                  <div className="detail-offer-box ps-xl-4">
                    <span>Sigorta Teklifi Al</span>
                    <p>En uygun sigorta fiyatları için hemen teklif alın!</p>
                    <Link href="/teklif-al">
                      Teklif Al <i className="fas fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İlgili Bloglar */}
      {relatedPosts.length > 0 && (
        <section className="bg-light">
          <div className="container position-relative z-index-2">
            <div className="section-heading text-center mb-2-9 mb-lg-6">
              <span>Bloglar</span>
              <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
                İlginizi Çekecek Bloglar
              </h2>
            </div>
            <div className="row g-xl-5 mt-n1-9">
              {relatedPosts.map((p) => (
                <div key={p.id} className="col-md-6 col-lg-4 mt-2-9">
                  <article className="card card-style9">
                    <div className="card-body">
                      <div className="image-box">
                        <Link href={`/blog/${p.slug}`}>
                          {p.image && (
                            <Image
                              src={p.image}
                              alt={`${p.title} Görseli`}
                              width={400}
                              height={250}
                              className="rounded"
                              style={{ width: "100%", height: "auto", objectFit: "cover" }}
                              sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                            />
                          )}
                        </Link>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="blog-card-text text-muted">{p.category.name}</span>
                        <span className="blog-card-text">{formatDate(p.published_date)}</span>
                      </div>
                      <h3 className="h4 mb-4">
                        <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                      </h3>
                      <p className="blog-card-text">{p.short_content}</p>
                      <Link href={`/blog/${p.slug}`} className="about-link">Devamını Oku</Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
