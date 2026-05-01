import type { Metadata } from "next";
import TeklifAlClient from "./TeklifAlClient";

export const metadata: Metadata = {
  title: "Online Sigorta Fiyatları için Teklif Alın | Sigorta Starı",
  description:
    "Size özel indirimler ile en uygun sigorta fiyatları için online teklif alın. Trafik, kasko, konut, dask, ferdi kaza, tamamlayıcı sağlık sigortası fiyatları.",
  openGraph: {
    title: "Online Sigorta Fiyatları için Teklif Alın | Sigorta Starı",
    type: "website",
    url: "https://www.sigortastari.com/teklif-al",
    description:
      "Size özel indirimler ile en uygun sigorta fiyatları için online teklif alın. Trafik, kasko, konut, dask, ferdi kaza, tamamlayıcı sağlık sigortası fiyatları.",
    siteName: "Sigortastarı",
    locale: "tr_TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com/teklif-al" },
};

export default function TeklifAlPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
header{position:fixed;top:0;left:0;width:100%;}
footer{display:none !important}
.teklif-content{
  background-image:url('/images/teklif-banner-bg.svg');
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 100px 50px;
}
.teklif-form-area{
  max-width: 600px;
  margin: 30px auto 0;
}
.teklif-form-area .f-title{
  font-size: 30.204px;
  margin-bottom:30px;
}
.teklif-left{
  height:100%;
  display: flex;
  align-items: center;
  zoom: 0.9;
  flex-direction: column;
}
.teklif-left img{ width: 500px; }
h1{
  color: var(--solid-white, #FFF);
  font-family: var(--font-mulish), Mulish, sans-serif;
  font-size: 30.995px;
  font-style: normal;
  font-weight: 900;
  text-align: center !important;
  line-height: 46.493px;
  letter-spacing: 0.484px;
  margin: 20px 0;
}
.teklif-right img:not(#file-img-w,#wp-call){display:none !important;}
#wp-call{display:block !important}
.file-wrapper { width: 100%; }
.file-in {
  display: flex;
  align-items: center;
  min-height: 74px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #a9afb7;
  cursor: pointer;
  position: relative;
  padding: 12px 18px 12px 24px;
  gap: 18px;
}
.file-in div span { display: block; font-size: 14px; color: #595959; }
.btn-yukle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border-radius: 13px;
  padding: 10px;
  font-size: 13px;
  background: #e7462c;
  color: white;
  min-width: 102px;
}
.form-file-wrapper input[type=file] {
  width: 0.1px;
  height: 0.1px;
  opacity: 0 !important;
  visibility: hidden;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.form-file-wrapper { display: flex; flex-wrap: wrap; }
.form-file-wrapper>label:first-child { width: 100% !important; }
@media(max-width:992px){
  .teklif-left img{display:none !important;}
  .teklif-right img:not(#file-img-w,#wp-call){display:block !important;width: 300px; margin: 0 auto;}
  .teklif-content{grid-template-columns:1fr;}
  .teklif-left{order:2}
}
@media(max-width:500px){
  .file-in{gap:8px !important;flex-direction: column;text-align: center;}
  .btn-yukle{width:100%;}
  .teklif-right img:not(#file-img-w,#wp-call){width:200px !important}
  .teklif-left{zoom:1;}
  .teklif-content{height:auto !important;padding: 80px 18px;}
  h1{font-size:24px;text-align:center;line-height:normal !important}
}
@media(max-width:413px){
  .insurance-options{gap:12px 8px;}
}
@media(max-width:1300px){
  #file-img-w{display:none}
}
.ts-wrapper.select-beast.form-control{
  padding-left: 12px !important;
}
          `,
        }}
      />

      <TeklifAlClient />
    </>
  );
}
