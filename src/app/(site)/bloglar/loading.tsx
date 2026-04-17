import Link from "next/link";

export default function BloglarLoading() {
  return (
    <>
      {/* Banner - SSR skeleton */}
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

      {/* Content skeleton */}
      <section>
        <div className="container">
          <div className="section-heading text-center mb-2-9 mb-lg-6">
            <span>Bloglar</span>
            <h2 className="display-22 display-sm-18 display-md-16 display-lg-11 mb-0">
              En Güncel Sigorta Blogları
            </h2>
          </div>
          <div className="row g-xl-5 mt-n2-9">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="col-md-6 col-lg-4 mt-2-9">
                <div
                  className="card card-style9"
                  style={{ opacity: 0.5 }}
                >
                  <div className="card-body">
                    <div
                      className="rounded bg-secondary"
                      style={{ width: "100%", height: 200 }}
                    />
                    <div
                      style={{
                        height: 16,
                        background: "#eee",
                        borderRadius: 4,
                        marginTop: 16,
                        width: "60%",
                      }}
                    />
                    <div
                      style={{
                        height: 20,
                        background: "#ddd",
                        borderRadius: 4,
                        marginTop: 12,
                        width: "90%",
                      }}
                    />
                    <div
                      style={{
                        height: 14,
                        background: "#eee",
                        borderRadius: 4,
                        marginTop: 8,
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
