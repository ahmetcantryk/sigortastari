"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Hide preloader after page load
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.transition = "opacity 0.3s";
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 300);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  const closeMobile = () => {
    setMobileMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <header id="header">
      <div>
        <div className="row">
          <div className="col" style={{ "--col": "100%", width: "100%", maxWidth: "100%" } as React.CSSProperties}>

            <div id="preloader"></div>

            <header className={`header-style1 menu_area-light${scrolled ? " scrollHeader" : ""}`}>
              <div className="navbar-default border-bottom border-color-light-white">
                <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-12">
                      <div className="menu_area alt-font">
                        <nav className="navbar navbar-expand-lg navbar-light p-0">
                          <div className="navbar-header navbar-header-custom">
                            <Link href="/" className="navbar-brand">
                              <Image
                                id="logo"
                                width={170}
                                height={42}
                                src={scrolled ? "/images/logo-renkli.webp" : "/images/beyazlogo-sigortastari.webp"}
                                alt="logo"
                                priority
                                style={{ width: "auto", height: "auto" }}
                              />
                            </Link>
                          </div>

                          <div className="d-lg-none" style={{ marginRight: "3.3rem" }}>
                            <span className="d-block tel-menu">Destek Hattı</span>
                            <a href="tel:+908502426700" className="tel-menu" style={{ color: "#fff", cursor: "pointer" }} target="_self">
                              0850 242 67 00
                            </a>
                          </div>

                          <div
                            className={`navbar-toggler${mobileMenuOpen ? " open" : ""}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          ></div>

                          <ul
                            className="navbar-nav ms-auto"
                            id="nav"
                            style={{ display: mobileMenuOpen ? "block" : undefined }}
                          >
                            <li>
                              <Link href="/hakkimizda" onClick={closeMobile}>Hakkımızda</Link>
                            </li>

                            <li className="has-sub">
                              <span
                                className={`submenu-button-2 offical${submenuOpen ? " active" : ""}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setSubmenuOpen(!submenuOpen);
                                }}
                              ></span>
                              <Link href="/urunler" onClick={closeMobile}>Ürünler</Link>

                              <ul className={`row megamenu sub-menu-s${submenuOpen ? " open" : ""}`}>
                                <li className="col-lg-3 has-sub">
                                  <ul className="sub-menu-s">
                                    <li><Link href="/urunler/trafik-sigortasi" onClick={closeMobile}>Trafik Sigortası</Link></li>
                                    <li><Link href="/urunler/arac-kasko-sigortasi" onClick={closeMobile}>Kasko Sigortası</Link></li>
                                    <li><Link href="/urunler/is-yeri-sigortasi" onClick={closeMobile}>İş Yeri Sigortası</Link></li>
                                    <li><Link href="/urunler/nakliyat-sigortasi" onClick={closeMobile}>Nakliyat Sigortası</Link></li>
                                  </ul>
                                </li>

                                <li className="col-lg-4 has-sub">
                                  <ul className="sub-menu-s">
                                    <li><Link href="/urunler/konut-sigortasi" onClick={closeMobile}>Konut Sigortası</Link></li>
                                    <li><Link href="/urunler/tamamlayici-saglik-sigortasi" onClick={closeMobile}>Tamamlayıcı Sağlık Sigortası</Link></li>
                                    <li><Link href="/urunler/seyahat-saglik-sigortasi" onClick={closeMobile}>Seyahat Sağlık Sigortası</Link></li>
                                    <li><Link href="/urunler/ozel-saglik-sigortasi" onClick={closeMobile}>Özel Sağlık Sigortası</Link></li>
                                  </ul>
                                </li>

                                <li className="col-lg-5 has-sub">
                                  <ul className="sub-menu-s">
                                    <li><Link href="/urunler/yabanci-uyruklular-icin-saglik-sigortasi" onClick={closeMobile}>Yabancı Uyruklular İçin Sağlık Sigortası</Link></li>
                                    <li><Link href="/urunler/ferdi-kaza-sigortasi" onClick={closeMobile}> Ferdi Kaza Sigortası</Link></li>
                                    <li><Link href="/urunler/mesleki-sorumluluk-sigortasi" onClick={closeMobile}>Mesleki Sorumluluk Sigortası</Link></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <Link href="/anlasmali-sirketler" onClick={closeMobile}>Anlaşmalı Şirketler</Link>
                            </li>

                            <li>
                              <Link href="/sss" onClick={closeMobile}>SSS</Link>
                            </li>

                            <li>
                              <Link href="/bloglar" onClick={closeMobile}>Blog</Link>
                            </li>

                            <li>
                              <Link href="/iletisim" onClick={closeMobile}>İletişim</Link>
                            </li>

                            <li className="web-none">
                              <Link href="/teklif-al" className="butn-style3 me-2 get-offer-btn" onClick={closeMobile}>
                                <span>TEKLİF AL</span>
                              </Link>
                            </li>
                          </ul>

                          <div className="attr-nav align-items-lg-center ms-lg-auto main-font">
                            <div>
                              <span className="d-block tel-menu">Destek Hattı</span>
                              <a href="tel:+908502426700" className="tel-menu" style={{ color: "#fff", cursor: "pointer" }} target="_self">
                                0850 242 67 00
                              </a>
                            </div>
                            <Link className="butn-style3 me-2 get-offer-btn" href="/teklif-al">
                              <span>TEKLİF AL</span>
                            </Link>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </header>
  );
}
