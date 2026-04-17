import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer">
      <div>
        <div className="row">
          <div className="col" style={{ "--col": "100%", width: "100%", maxWidth: "100%" } as React.CSSProperties}>
            <footer className="footer-style1 pt-0 overflow-hidden position-relative" style={{ minHeight: 520 }}>
              <div className="footer-top-info">
                <div className="container z-index-2 position-relative">
                  <div className="row mt-n1-9">
                    <div className="col-md-4 col-lg-4 mt-1-9">
                      <div className="footer-logo" style={{ width: 170, height: 42 }}>
                        <Image
                          src="/images/beyazlogo-sigortastari.webp"
                          width={170}
                          height={42}
                          alt="Sigorta Starı Beyaz Logo"
                          style={{ width: 170, height: 42 }}
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 mt-1-9">
                      <div className="d-flex">
                        <div className="flex-grow-1 ">
                          <p className="h5 text-white">E-Posta</p>
                          <p className="mb-0 opacity7">
                            <a href="mailto:sigorta@sigortastari.com" className="footer-info-link">
                              sigorta@sigortastari.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-1-9">
                      <div className="d-flex">
                        <div className="flex-grow-1 ">
                          <p className="h5 text-white">Telefon</p>
                          <p className="mb-0 opacity7">
                            <a href="tel:+902128132633" className="footer-info-link">
                              0212 813 26 33
                            </a>
                          </p>
                          <p className="mb-0 opacity7">
                            <a href="tel:+908502426700" className="footer-info-link">
                              0850 242 67 00
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 mt-1-9">
                      <div className="d-flex">
                        <div className="flex-grow-1 ">
                          <p className="h5 text-white">Adres</p>
                          <p className="mb-0 opacity7">
                            <a
                              href="https://maps.app.goo.gl/cH6NmgT5vXJyx7Ep8"
                              target="_blank"
                              className="footer-info-link"
                            >
                              Fulya Mahallesi, Büyükdere Cad. Pekintaş İş Merkezi No:32 Kat:8,
                              Şişli/İstanbul
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row mt-n1-9">
                  <div className="col-sm-6 col-lg-4 pe-5 mt-1-9 wow fadeIn" data-wow-delay="200ms">
                    <div className="footer-top">
                      <h3 className="mb-1-9 h5">Hakkımızda</h3>
                      <p className="mb-1-6 text-white">
                        Sigorta Starı olarak, doğru zamanda doğru yerde sizi koruma altına alıyor ve
                        gönül rahatlığı ile hayatınıza devam etmenizi sağlıyoruz.
                      </p>

                      <ul className="social-icon-style1 mb-0 d-inline-block list-unstyled">
                        <li className="d-inline-block me-2">
                          <a
                            href="https://www.facebook.com/SigortaStari"
                            target="_blank"
                            className="fab fa-facebook-f"
                            aria-label="Facebook sayfamız"
                          ></a>
                        </li>
                        <li className="d-inline-block me-2">
                          <a
                            href="https://www.instagram.com/sigortastari"
                            target="_blank"
                            className="fab fa-instagram"
                            aria-label="Instagram sayfamız"
                          ></a>
                        </li>
                        <li className="d-inline-block">
                          <a
                            href="https://www.linkedin.com/company/sigortastari"
                            target="_blank"
                            className="fab fa-linkedin-in"
                            aria-label="LinkedIn sayfamız"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3 mt-1-9 wow fadeIn" data-wow-delay="350ms">
                    <h3 className="h5 mb-1-9">Kurumsal</h3>
                    <ul className="footer-list ps-0">
                      <li>
                        <Link href="/hakkimizda">Hakkımızda</Link>
                      </li>
                      <li>
                        <Link href="/anlasmali-sirketler">Anlaşmalı Şirketler</Link>
                      </li>
                      <li>
                        <Link href="/sss">Sıkça Sorulan Sorular</Link>
                      </li>
                      <li>
                        <Link href="/bloglar">Blog</Link>
                      </li>
                      <li>
                        <Link href="/kvkk">KVKK Aydınlatma Metni</Link>
                      </li>
                      <li>
                        <Link href="/gizlilik-ve-web-kullanim-sartlari">
                          Gizlilik ve Web Kullanım Şartları
                        </Link>
                      </li>
                      <li>
                        <Link href="/iletisim">İletişim</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6 col-lg-5 mt-1-9 wow fadeIn" data-wow-delay="650ms">
                    <h3 className="h5 mb-1-9">Ürünler</h3>
                    <div className="row">
                      <div className="col-lg-5">
                        <ul className="footer-list ps-0">
                          <li>
                            <Link href="/urunler/trafik-sigortasi">Trafik Sigortası</Link>
                          </li>
                          <li>
                            <Link href="/urunler/konut-sigortasi">Konut Sigortası</Link>
                          </li>
                          <li>
                            <Link href="/urunler/is-yeri-sigortasi">İş yeri Sigortası</Link>
                          </li>
                          <li>
                            <Link href="/urunler/ferdi-kaza-sigortasi">Ferdi Kaza Sigortası</Link>
                          </li>
                          <li>
                            <Link href="/urunler/yabanci-uyruklular-icin-saglik-sigortasi">
                              Yabancı Uyruklular İçin Sağlık Sigortası
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <ul className="footer-list ps-0">
                          <li>
                            <Link href="/urunler/arac-kasko-sigortasi">Kasko Sigortası</Link>
                          </li>
                          <li>
                            <Link href="/urunler/mesleki-sorumluluk-sigortasi">
                              Mesleki Sorumluluk Sigortası
                            </Link>
                          </li>
                          <li>
                            <Link href="/urunler/nakliyat-sigortasi">Nakliyat Sigortası</Link>
                          </li>
                          <li>
                            <Link href="/urunler/seyahat-saglik-sigortasi">
                              Seyahat Sağlık Sigortası
                            </Link>
                          </li>
                          <li>
                            <Link href="/urunler/ozel-saglik-sigortasi">Özel Sağlık Sigortası</Link>
                          </li>
                          <li>
                            <Link href="/urunler/tamamlayici-saglik-sigortasi">
                              Tamamlayıcı Sağlık Sigortası
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-bar">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <div className="copy-flex">
                        <div className="copy-text-box">
                          <div>
                            <p>© Copy Right 2023 Tüm Hakları Saklıdır.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>

            <div className="phone-fix">
              <a
                href="https://api.whatsapp.com/send?phone=905379509897&text=Merhaba,%20sigorta%20teklifi%20almak%20istiyorum.%20Yard%C4%B1mc%C4%B1%20olur%20musunuz?"
                target="_blank"
                className="sticky-phone"
                aria-label="WhatsApp ile iletişime geçin"
              >
                <svg
                  width="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_233_633)">
                    <path
                      d="M15.9999 30C13.5999 30 11.3299 29.46 9.18988 28.38L2.73988 29.85C2.53988 29.89 2.34488 29.885 2.15488 29.835C1.96488 29.785 1.79488 29.685 1.64488 29.535C1.49488 29.385 1.39488 29.215 1.34488 29.025C1.29488 28.835 1.28988 28.64 1.32988 28.44L2.70988 22.08C1.50988 19.88 0.899883 17.53 0.879883 15.03V15C0.879883 13 1.26488 11.08 2.03488 9.24C2.80488 7.4 3.89988 5.78 5.31988 4.38C6.75988 2.94 8.41988 1.84 10.2999 1.08C12.1199 0.34 14.0149 -0.0299988 15.9849 -0.0299988C17.9549 -0.0299988 19.8499 0.34 21.6699 1.08C23.5499 1.84 25.2099 2.94 26.6499 4.38C28.3499 6.04 29.5799 7.99 30.3399 10.23C31.0799 12.41 31.2999 14.65 30.9999 16.95C30.6799 19.29 29.8499 21.44 28.5099 23.4C28.3299 23.66 28.0749 23.82 27.7449 23.88C27.4149 23.94 27.1199 23.88 26.8599 23.7C26.5999 23.52 26.4399 23.265 26.3799 22.935C26.3199 22.605 26.3799 22.31 26.5599 22.05C27.6999 20.41 28.3999 18.6 28.6599 16.62C28.9199 14.7 28.7299 12.82 28.0899 10.98C27.4699 9.1 26.4399 7.46 24.9999 6.06C23.7999 4.86 22.4249 3.94 20.8749 3.3C19.3249 2.66 17.7099 2.34 16.0299 2.34C14.3499 2.34 12.7249 2.66 11.1549 3.3C9.58488 3.94 8.20988 4.85 7.02988 6.03C5.84988 7.21 4.92988 8.57 4.26988 10.11C3.60988 11.65 3.26988 13.27 3.24988 14.97V15C3.26988 17.26 3.84988 19.36 4.98988 21.3C5.14988 21.56 5.19988 21.84 5.13988 22.14L4.02988 27.15L9.09988 25.98C9.39988 25.92 9.67988 25.96 9.93988 26.1C11.8399 27.12 13.8599 27.63 15.9999 27.63C18.3399 27.63 20.5199 27.03 22.5399 25.83C22.8199 25.67 23.1199 25.63 23.4399 25.71C23.7599 25.79 23.9999 25.97 24.1599 26.25C24.3199 26.53 24.3599 26.83 24.2799 27.15C24.1999 27.47 24.0199 27.71 23.7399 27.87C22.5599 28.57 21.3149 29.1 20.0049 29.46C18.6949 29.82 17.3599 30 15.9999 30ZM12.6699 9C12.5499 8.74 12.4199 8.56 12.2799 8.46C12.1799 8.42 12.0499 8.4 11.8899 8.4H11.2299C10.8499 8.4 10.5399 8.54 10.2999 8.82C9.89988 9.2 9.59488 9.64 9.38488 10.14C9.17488 10.64 9.07988 11.16 9.09988 11.7C9.21988 13.04 9.68988 14.23 10.5099 15.27L10.5699 15.33C11.1099 16.15 11.7099 16.91 12.3699 17.61C13.6699 18.95 15.0199 19.9 16.4199 20.46C17.5999 20.92 18.5199 21.21 19.1799 21.33C19.5799 21.39 19.9899 21.4 20.4099 21.36L20.5599 21.33C21.0599 21.23 21.5099 21.04 21.9099 20.76C22.3099 20.48 22.6399 20.12 22.8999 19.68C23.1399 19.16 23.2099 18.61 23.1099 18.03C23.0699 17.97 22.9199 17.88 22.6599 17.76L22.4199 17.64C21.0599 16.96 20.2899 16.585 20.1099 16.515C19.9299 16.445 19.7799 16.415 19.6599 16.425C19.5399 16.435 19.4199 16.52 19.2999 16.68C18.9799 17.12 18.6099 17.58 18.1899 18.06C18.0899 18.18 17.9849 18.245 17.8749 18.255C17.7649 18.265 17.6199 18.22 17.4399 18.12C16.4199 17.7 15.4999 17.13 14.6799 16.41C13.9199 15.71 13.2699 14.91 12.7299 14.01C12.6299 13.85 12.6099 13.71 12.6699 13.59C12.6899 13.51 12.7599 13.41 12.8799 13.29C13.1199 13.05 13.3049 12.85 13.4349 12.69C13.5649 12.53 13.6749 12.35 13.7649 12.15C13.8549 11.95 13.8399 11.75 13.7199 11.55L13.3899 10.71C13.0299 9.83 12.7899 9.26 12.6699 9Z"
                      fill="#0F0F0F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_233_633">
                      <rect
                        width="30.24"
                        height="30"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.879883 30)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
