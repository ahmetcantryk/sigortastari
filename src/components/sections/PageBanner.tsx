import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageBannerProps {
  title: string;
  backgroundImage: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageBanner({
  title,
  backgroundImage,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section
      className="page-title-section top-position1 bg-img cover-background left-overlay-dark"
      data-overlay-dark="6"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container">
        <div className="page-title">
          <div className="row">
            <div className="col-md-12">
              <h1>{title}</h1>
            </div>
            <div className="col-md-12">
              <ul className="ps-0">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index}>
                    <Link href={crumb.href} className="text-white">
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
