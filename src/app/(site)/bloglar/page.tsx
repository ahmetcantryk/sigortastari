import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogFilterBar from "./BlogFilterBar";

export const metadata: Metadata = {
  title: "Blog - Sigorta Starı",
  description:
    "Sigorta sektörü hakkında en güncel bilgiler, ipuçları ve rehberler. Trafik sigortası, kasko, sağlık sigortası ve daha fazlası.",
  openGraph: {
    title: "Blog - Sigorta Starı",
    type: "website",
    url: "https://www.sigortastari.com/bloglar",
    description:
      "Sigorta sektörü hakkında en güncel bilgiler, ipuçları ve rehberler.",
    siteName: "Sigortastarı",
    locale: "tr-TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com/bloglar" },
};

export const revalidate = 3600; // ISR: her 1 saatte bir yeniden oluştur

export default async function BloglarPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <>
      {/* Banner - SSR */}
      <section
        className="page-title-section top-position1 bg-img cover-background left-overlay-dark"
        style={{ backgroundImage: "url('/images/blog-banner.webp')" }}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="page-title">
            <div className="row">
              <div className="col-md-12">
                <h1>Blog</h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li>
                    <Link href="/" className="text-white">Anasayfa</Link>
                  </li>
                  <li>
                    <Link href="/bloglar" className="text-white">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listesi - SSR heading, client filtreleme */}
      <section>
        <div className="container">
          <div className="section-heading text-center mb-2-9 mb-lg-6">
            <span>Bloglar</span>
            <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
              En Güncel Sigorta Blogları
            </h2>
          </div>

          <BlogFilterBar posts={posts} categories={categories} />
        </div>
      </section>
    </>
  );
}
