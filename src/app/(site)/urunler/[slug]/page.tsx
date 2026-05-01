import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import {
  productContents,
  getProductContent,
} from "@/lib/product-content";
import ProductDetailClient from "./ProductDetailClient";
import ProductFaq from "./ProductFaq";
import { getPostsByCategory, formatDate } from "@/lib/blog";

const PRODUCT_TO_CATEGORY: Record<string, string> = {
  "trafik-sigortasi": "trafik",
  "arac-kasko-sigortasi": "kasko",
  "konut-sigortasi": "konut",
  "is-yeri-sigortasi": "is-yeri",
  "ferdi-kaza-sigortasi": "ferdi-kaza",
  "mesleki-sorumluluk-sigortasi": "mesleki-sorumluluk",
  "nakliyat-sigortasi": "nakliyat",
  "tamamlayici-saglik-sigortasi": "tamamlayici-saglik",
  "yabanci-uyruklular-icin-saglik-sigortasi": "yabanci-saglik",
  "ozel-saglik-sigortasi": "ozel-saglik",
  "seyahat-saglik-sigortasi": "seyahat-saglik",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getProductContent(slug);
  if (!content) {
    return { title: "Ürün Bulunamadı" };
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      type: "website",
      url: `https://www.sigortastari.com/urunler/${content.slug}`,
      description: content.metaDescription,
      siteName: "Sigortastarı",
      locale: "tr_TR",
      images: [{ url: "/images/logos.png" }],
    },
    alternates: {
      canonical: `https://www.sigortastari.com/urunler/${content.slug}`,
    },
  };
}

const sidebarProducts = [
  { slug: "trafik-sigortasi", name: "Trafik Sigortası" },
  { slug: "arac-kasko-sigortasi", name: "Kasko Sigortası" },
  { slug: "konut-sigortasi", name: "Konut Sigortası" },
  { slug: "is-yeri-sigortasi", name: "İş yeri Sigortası" },
  { slug: "ferdi-kaza-sigortasi", name: "Ferdi Kaza Sigortası" },
  {
    slug: "mesleki-sorumluluk-sigortasi",
    name: "Mesleki Sorumluluk Sigortası",
  },
  { slug: "nakliyat-sigortasi", name: "Nakliyat Sigortası" },
  {
    slug: "tamamlayici-saglik-sigortasi",
    name: "Tamamlayıcı Sağlık Sigortası",
  },
  {
    slug: "yabanci-uyruklular-icin-saglik-sigortasi",
    name: "Yabancı Uyruklular İçin Sağlık Sigortası",
  },
  { slug: "seyahat-saglik-sigortasi", name: "Seyahat Sağlık Sigortası" },
  { slug: "ozel-saglik-sigortasi", name: "Özel Sağlık Sigortası" },
];

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getProductContent(slug);

  if (!content) {
    notFound();
  }

  // Check if this slug exists in productContents
  const productNames: Record<string, string> = {};
  for (const key of Object.keys(productContents)) {
    productNames[key] = productContents[key].name;
  }

  // İlgili kategorinin en yeni 3 blog yazısı
  const categorySlug = PRODUCT_TO_CATEGORY[slug];
  const blogPosts = categorySlug
    ? (await getPostsByCategory(categorySlug)).slice(0, 3)
    : [];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
header{position:fixed; top:0; left:0; width:100%;}
.teklif-right img { display: none !important; }
.wp-call img { display: block !important; }
section { overflow: unset !important; }
.page-title-section { padding: 130px 0 70px; }
          `,
        }}
      />

      {/* Teklif Form Section */}
      <div className="teklif-content">
        <div className="teklif-left">
          <Image
            src={content.bannerImage}
            alt={`${content.name} Banner`}
            id="new_banner_image"
            width={974}
            height={740}
            priority
            quality={95}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="teklif-right">
          <Image
            src="/images/teklif-logo.svg"
            alt="Teklif logo"
            width={200}
            height={60}
            style={{ width: "auto", height: "auto" }}
            sizes="200px"
          />
          <ProductDetailClient preselectedProduct={content.name} slug={slug} />
        </div>
      </div>

      {/* Product Content Section */}
      <section className="pb-0">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4 order-2 order-lg-1">
              <div className="sidebar pe-xl-4">
                <div className="widget mb-1-9 rounded">
                  <div className="widget-title">
                    <span className="mb-0 h6">Tüm Ürünlerimiz</span>
                  </div>
                  <div className="list-style3 p-1-9">
                    <ul className="list-unstyled mb-0">
                      {sidebarProducts.map((product) => (
                        <li
                          key={product.slug}
                          className={
                            product.slug === slug ? "active" : undefined
                          }
                        >
                          <Link href={`/urunler/${product.slug}`}>
                            {product.name}
                            <span className="ti-arrow-right"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-8 order-1 order-lg-2 mb-2-9 mb-lg-0">
              <div className="row">
                <div className="col-12 mb-3">
                  <h2 className="mb-3">{content.title}</h2>
                  {content.intro.map((paragraph, index) => (
                    <p
                      key={index}
                      className={index === 0 ? "mb-1-9" : undefined}
                    >
                      {paragraph}
                    </p>
                  ))}

                  <div className="mb-2-9 image-hover">
                    <Image
                      src={content.contentImage}
                      alt={content.contentImageAlt}
                      title={content.contentImageAlt}
                      className="rounded"
                      width={800}
                      height={450}
                      style={{ width: "100%", height: "auto" }}
                      sizes="(max-width: 992px) 100vw, 66vw"
                    />
                  </div>

                  {content.sections.map((section, index) => (
                    <div key={index}>
                      <h2 className="mb-3">{section.title}</h2>
                      {section.content && (
                        <p className="mb-1-9">
                          {section.content
                            .split("\n\n")
                            .map((part, i) => (
                              <span key={i}>
                                {i > 0 && (
                                  <>
                                    <br />
                                    <br />
                                  </>
                                )}
                                {part}
                              </span>
                            ))}
                        </p>
                      )}
                      {section.list && (
                        <div className="col-12 mb-3">
                          <ul className="list-style2 mb-0">
                            {section.list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                {content.faq.length > 0 && (
                  <div className="col-12">
                    <h2 className="mb-3">
                      {content.name} Hakkında Merak Edilenler
                    </h2>
                    <ProductFaq items={content.faq} slug={slug} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Card Section */}
      <section>
        <div className="container">
          <div className="offer-card">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <h2>{content.offerTitle}</h2>
              </div>
              <div className="col-lg-6">
                <p>{content.offerDescription}</p>
                <Link
                  href={`/urunler/${content.slug}`}
                  className="butn-style3 hover-white"
                >
                  <span>Teklif Al</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* En Çok Okunanlar - kategoriyle ilgili bloglar */}
      {blogPosts.length > 0 && (
        <section className="bg-light blog-padding">
          <div className="container position-relative z-index-2">
            <div className="section-heading text-center mb-2-9 mb-lg-6">
              <span>Bloglar</span>
              <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
                En Çok Okunanlar
              </h2>
            </div>
            <div className="row g-xl-5 mt-n1-9">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-md-6 col-lg-4 mt-2-9">
                  <article className="card card-style9">
                    <div className="card-body">
                      <div className="image-box">
                        <Link href={`/blog/${post.slug}`}>
                          {post.image && (
                            <Image
                              src={post.image}
                              alt={`${post.title} Görseli`}
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
                        <span className="blog-card-text text-muted">{post.category.name}</span>
                        <span className="blog-card-text">{formatDate(post.published_date)}</span>
                      </div>
                      <h3 className="h4 mb-4">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="blog-card-text">{post.short_content}</p>
                      <Link href={`/blog/${post.slug}`} className="about-link">Devamını Oku</Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <div className="text-center mt-4 mt-lg-5">
              <Link href="/bloglar" className="border-bottom about-link">
                Tümünü Gör
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
