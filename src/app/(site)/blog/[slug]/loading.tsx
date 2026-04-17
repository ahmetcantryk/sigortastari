export default function BlogDetailLoading() {
  return (
    <>
      {/* Banner skeleton */}
      <section
        className="page-title-section top-position1 bg-img cover-background left-overlay-dark"
        style={{ backgroundImage: "url('/images/blog-banner.webp')" }}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="page-title">
            <div className="row">
              <div className="col-md-12">
                <div style={{ height: 36, background: "rgba(255,255,255,0.2)", borderRadius: 4, width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div style={{ background: "#eee", borderRadius: 8, height: 400, width: "100%" }} />
              <div style={{ height: 24, background: "#ddd", borderRadius: 4, marginTop: 24, width: "80%" }} />
              <div style={{ height: 16, background: "#eee", borderRadius: 4, marginTop: 12, width: "100%" }} />
              <div style={{ height: 16, background: "#eee", borderRadius: 4, marginTop: 8, width: "95%" }} />
              <div style={{ height: 16, background: "#eee", borderRadius: 4, marginTop: 8, width: "90%" }} />
            </div>
            <div className="col-lg-4">
              <div style={{ background: "#f5f5f5", borderRadius: 8, height: 300, width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
