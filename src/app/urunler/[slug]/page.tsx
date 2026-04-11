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
      locale: "tr-TR",
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
            width={600}
            height={400}
            priority
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
                    <div id="accordion" className="accordion-style">
                      {content.faq.map((faqItem, index) => {
                        const collapseId = `collapse-${slug}-${index}`;
                        const headingId = `heading-${slug}-${index}`;
                        return (
                          <div className="card mb-3" key={index}>
                            <div className="card-header" id={headingId}>
                              <h3 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${collapseId}`}
                                  aria-expanded="true"
                                  aria-controls={collapseId}
                                >
                                  {faqItem.question}
                                </button>
                              </h3>
                            </div>
                            <div
                              id={collapseId}
                              className="collapse"
                              aria-labelledby={headingId}
                              data-bs-parent="#accordion"
                            >
                              <div className="card-body">
                                <p>{faqItem.answer}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
    </>
  );
}
