import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "Gizlilik ve Web Kullanım Şartları",
  description:
    "Web sitemizdeki gizlilik ve web sitesi kullanım şartlarını buradan inceleyebilirsiniz. Sigorta Starı'nın gizlilik ve web kullanım şartları burada. Bilgi için tıklayın.",
  openGraph: {
    title: "Gizlilik ve Web Kullanım Şartları",
    type: "website",
    url: "https://www.sigortastari.com/gizlilik-ve-web-kullanim-sartlari",
    description:
      "Web sitemizdeki gizlilik ve web sitesi kullanım şartlarını buradan inceleyebilirsiniz. Sigorta Starı'nın gizlilik ve web kullanım şartları burada. Bilgi için tıklayın.",
    siteName: "Sigortastarı",
    locale: "tr_TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: {
    canonical:
      "https://www.sigortastari.com/gizlilik-ve-web-kullanim-sartlari",
  },
};

export default function GizlilikPage() {
  return (
    <>
      <PageBanner
        title="Gizlilik ve Web Kullanım Şartları"
        backgroundImage="/images/kvkk-banner.webp"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          {
            label: "Gizlilik ve Web Kullanım Şartları",
            href: "/gizlilik-ve-web-kullanim-sartlari",
          },
        ]}
      />

      <div className="container container my-5 content-style">
        <div className="ql-editor">
          <p className="ql-align-justify">GİZLİLİK VE WEB KULLANIM ŞARTLARI</p>
          <p className="ql-align-justify">
            İşbu Gizlilik Politikası&apos;nın amacı, Bstar Sigorta Aracılık
            Hizmetleri Ltd. Şti. (&ldquo;Şirket&rdquo;) tarafından
            işletilmekte olan www.sigortastari.com.tr internet sitesinin ve tüm
            alt sitelerinin (&ldquo;Site&rdquo;) işletilmesi sırasında Site
            kullanıcıları/müşterileri/ziyaretçileri (&ldquo;Veri
            Sahibi&rdquo;) tarafından Şirket ile paylaşılan veya
            Şirket&apos;in, Veri Sahibi&apos; nin Site&apos; yi kullanımı
            sırasında ürettiği kişisel verilerin kullanımına ilişkin koşul ve
            şartları tespit etmek tir.
          </p>
          <p className="ql-align-justify">
            Veri Sahibi, işbu Gizlilik Politikası ile kişisel verilerinin
            işlenmesine ilişkin olarak aydınlatılmış olduğunu ve kişisel
            verilerinin burada belirtilen şekilde kullanımına muvafakat ettiğini
            beyan eder.
          </p>
          <p className="ql-align-justify">
            İleride söz konusu şartları okumamış veya okumuş olup da bunlara
            uygun davranmamış olmanızdan kaynaklanabilecek olan her türlü maddi
            ve manevi zarara ilişkin talebinizden Şirket&apos;in ve/veya
            Site&apos;nin, bu sitelerdeki her türlü içeriğin
            hazırlayıcılarının, çalışanlarının, Şirket&apos;in
            yetkilendirdikleri kişi ve kuruluşların hiçbir hukuki ve cezai
            sorumluluğu bulunmamaktadır. Veri Sahibi Site&apos; de kendisinden
            istenilen tüm bilgileri tam ve doğru olarak vereceğini kabul, beyan
            ve taahhüt eder. Müşteri, Şirket&apos;e bildirdiği iletişim
            bilgileri dahil olmak üzere tüm bilgilerin güncelliğinden
            sorumludur. Bilgilerin güncel, tam ve/veya doğru olmamasından dolayı
            kaynaklanacak sorunlarda her türlü sorumluluk Müşteri&apos;ye ait
            olacaktır.
          </p>
          <p className="ql-align-justify">
            İşbu Web sitesi ve tüm sayfaları, eklentileri, site üzerinden erişim
            sağlanması halinde linkleri Fikir ve Sanat Eserleri Kanunu
            hükümlerine tabidir ve içeriğine ilişkin her türlü ses, görüntü,
            yazı içeren bilgi, belge, marka ve her türlü fikri ve sınai haklar
            ile tüm telif hakları ve Fikri ve Sınai Mülkiyet Hukuku&apos;ndan
            kaynaklanan diğer hakları Bstar Sigorta Aracılık Hizmetleri Ltd.
            Şti&apos; ye aittir. İşbu web sitesinin yapısı ve içeriği, sitede
            kullanılan her türlü görsel malzeme Fikir ve Sanat Eserleri Kanunu
            ve Türk Ceza Kanunu ile hüküm bulunmayan hallerde Ticaret Kanunu
            haksız rekabet hükümleri kapsamında korunmaktadır.
          </p>
          <p className="ql-align-justify">
            Sitede yer alan bilgilerin çoğaltılması, başka bir lisana çevrilmesi,
            saklanması veya işleme tutulması da dahil, sitenin kendisi ile ilgili
            yapılacak her türlü iş ve işlem Bstar Sigorta Aracılık Hizmetleri
            Ltd. Şti.&apos; nin işlem öncesi yazılı iznine tabidir. Bu sebeple
            işbu sitede yer alan bilgiler Şirket&apos;in yazılı izni olmaksızın
            hiçbir şekilde, çoğaltılamaz, yayınlanamaz, kopyalanamaz,
            kullanılamaz, sunulamaz ve aktarılamaz. Sitenin bütünü veya bir
            kısmı diğer bir Web sitesinde izinsiz olarak kullanılamaz.
          </p>
          <p className="ql-align-justify">
            Şirket&apos;in yazılı izni olmadıkça bu internet sitesine link
            verilmesi yasaktır. Site herhangi bir şekilde Şirket&apos;in yazılı
            izni olmaksızın bir başka site üzerinden bağlantılı link olarak
            sunulamaz, başka bir bağlantı kanalı ile bu site üzerinde erişim
            sağlanamaz.
          </p>
          <p className="ql-align-justify"> </p>
          <p className="ql-align-justify">
            <strong>Sorumluluk Muafiyeti</strong>
          </p>
          <p className="ql-align-justify">
            Şirket, bu sitede yer alan bilgilerin tam ve doğru olduğunu veya
            sayfaya kesintisiz surette giriş sağlanacağını garanti etmemektedir.
            İşbu sitede yer alan beyanlar hukuken taahhüt niteliğinde olmayıp
            bağlayıcılığı bulunmamaktadır. Şirket bu bilgilerle üçüncü
            şahısların haklarının ihlal edilmemesi; mülkiyet, satılabilirlik,
            belirli bir amaç için uygunluk ve/veya bilgisayar virüsü
            bulunmamasına ilişkin garantiler dahil ancak bunlarla sınırlı
            kalmamak kaydıyla, zımnen, alenen ya da yasal olarak hiçbir garanti
            vermemektedir.
          </p>
          <p className="ql-align-justify">
            Bu internet sitesinde yer alan her türlü bilginin ve belgenin,
            doğrulukları ve içerikleri Şirket tarafından garanti edilmemektedir.
            Bu nedenle işbu bilgi ve belgelere dayanılarak yapılan işlemlerden
            dolayı doğacak doğrudan ve/veya dolaylı her türlü maddi ve manevi
            zararlar ve masraflardan ve üçüncü kişilerin uğrayabilecekleri
            zararlardan dolayı Şirket sorumlu tutulamaz.
          </p>
          <p className="ql-align-justify">
            Sigorta poliçesinden doğan hak ve sorumluluklar ilgili sözleşmenin
            taraflarına ait olup, bunların ifasında Şirket&apos;in hiçbir
            sorumluluğu yoktur. Bstar Sigorta Aracılık Hizmetleri Ltd. Şti.&apos;
            den hizmet alınmış olması, Bstar Sigorta Aracılık Hizmetleri Ltd.
            Şti.&apos;nin, sigorta şirketinin veya sigorta
            ettirenin/sigortalının edimini garanti ettiği anlamına gelmez. Bu
            nedenle sigorta poliçesindeki borçlardan dolayı Bstar Sigorta
            Aracılık Hizmetleri Ltd. Şti.&apos; nin hiçbir sorumluluğu yoktur.
          </p>
          <p className="ql-align-justify">
            Müşteri, Bstar Sigorta Aracılık Hizmetleri Ltd. Şti.&apos; nin
            sağlamış olduğu bilgilerden yararlanmak suretiyle üçüncü
            şahıslardan edinmiş olduğu mal ve hizmetlerdeki ayıplardan Bstar
            Sigorta Aracılık Hizmetleri Ltd. Şti.&apos; nin hiçbir surette
            sorumlu olmadığını, 6502 sayılı Tüketicinin Korunması Hakkında Kanun
            ve ilgili mevzuat hükümleri dahilinde Bstar Sigorta Aracılık
            Hizmetleri Ltd. Şti.&apos; ne izafe edilebilecek her türlü
            sorumluluk karşısında Bstar Sigorta Aracılık Hizmetleri Ltd.
            Şti.&apos; yi şimdiden ibra ettiğini kabul ve beyan eder.
          </p>
          <p className="ql-align-justify">
            Poliçe şartları, teminatlar, sigorta primi oranı ve miktarları ile
            ilgili olarak Site&apos; de yer alan tüm bilgiler sigorta
            şirketlerinden alınmış bilgilerdir. Sigorta şirketlerinin bu
            şartları değiştirmeleri halinde, Bstar Sigorta Aracılık Hizmetleri
            Ltd. Şti.&apos; den bu hususta herhangi bir talepte
            bulunulamayacaktır. Bstar Sigorta Aracılık Hizmetleri Ltd. Şti.,
            sigorta şirketlerinin işbu Site&apos; de yer alan şartlarla poliçe
            temin edeceğini de garanti etmez. Geçerli poliçe şartları
            düzenlenecek poliçede yer alan şartlar olacaktır. Bstar Sigorta
            Aracılık Hizmetleri Ltd. Şti., Müşteri tarafından iletilen veya
            internet sitesi üzerinden yüklenen, değiştirilen veya sağlanan bilgi
            ve içeriklerinin doğruluğunu araştırma, bu bilgi ve içeriklerin
            güvenli, doğru ve hukuka uygun olduğunu taahhüt ve garanti etmekle
            yükümlü ve sorumlu olmadığı gibi, söz konusu bilgi ve içeriklerin
            yanlış veya hatalı olmasından dolayı ortaya çıkacak maddi veya
            manevi hiçbir zarardan da sorumlu tutulamaz.
          </p>
          <p className="ql-align-justify">
            Bstar Sigorta Aracılık Hizmetleri Ltd. Şti., talep edilen bir
            hizmeti vermeyi kabul edip etmemekte tamamen serbesttir. Bstar
            Sigorta Aracılık Hizmetleri Ltd. Şti. gerekli gördüğü zamanlarda
            Site kapsamındaki hizmetleri ve/veya Site&apos;yi geçici bir süre
            ile askıya alabilir veya tamamen durdurabilir. Hizmetlerin geçici
            bir süre askıya alınması veya tamamen durdurulmasından ya da
            Site&apos;nin kapatılmasından dolayı Bstar Sigorta Aracılık
            Hizmetleri Ltd. Şti.&apos; nin müşterilere karşı herhangi bir
            sorumluluğu bulunmamaktadır.
          </p>
          <p className="ql-align-justify">
            Bu internet sitesinin kullanımı sırasında herhangi bir arıza, hata,
            eksiklik, kesinti kusur, veya nakilde gecikme, bilgisayar virüsü
            veya hat veya sistem arızası sonucu ortaya çıkan doğrudan ya da
            dolaylı ortaya çıkan zarar, ziyan ve masraflar da dahil ancak
            bunlarla sınırlı olmamak üzere hiçbir zarardan, Bstar Sigorta
            Aracılık Hizmetleri Ltd. Şti. ve/veya çalışanı, bu tür bir zarar
            olasılığından haberdar edilmiş olsalar dahi, sorumlu olmazlar. Bstar
            Sigorta Aracılık Hizmetleri Ltd. Şti. sözleşmenin ihlali, haksız
            fiil, ihmal veya diğer sebepler neticesinde; işlemin kesintiye
            uğraması, hata, ihmal, kesinti, silinme, kayıp, işlemin veya
            iletişimin gecikmesi, bilgisayar virüsü, iletişim hatası, hırsızlık,
            imha veya izinsiz olarak kayıtlara girilmesi, değiştirilmesi veya
            kullanılması hususunda herhangi bir sorumluluk kabul etmez.
          </p>
          <p className="ql-align-justify">
            Bu bilgiler doğrultusunda, Bstar Sigorta Aracılık Hizmetleri Ltd.
            Şti., bu sitenin içeriğinde yer alan bilgilerden ve görsel
            malzemeden kaynaklanabilecek hatalardan, maddi veya manevi
            zararlardan hiçbir şekil ve surette sorumlu değildir.
          </p>
          <p className="ql-align-justify">
            Burada yer alan tüm bilgiler önceden haber verilmeksizin
            değiştirilebilir. Bstar Sigorta Aracılık Hizmetleri Ltd. Şti.
            dilediği zaman, sitenin herhangi bir bölümünü iptal edebilir,
            değiştirebilir, haber vermeksizin sitedeki bazı özellikleri veya
            bilgileri veya sitenin bazı bölümlerine erişimi sınırlandırabilir.
            Bstar Sigorta Aracılık Hizmetleri Ltd. Şti. sözleşme şartları da
            dahil olmak üzere, site ve site uzantılarında mevcut her tür koşulu
            ve bilgiyi önceden herhangi bir ihtara hacet olmaksızın değiştirme
            hakkını saklı tutar. Değişiklikler sitede yayım anında yürürlüğe
            girer.
          </p>
          <p className="ql-align-justify">
            Bstar Sigorta Aracılık Hizmetleri Ltd. Şti. sitesinin virüs ve
            benzeri amaçlı yazılımlardan arındırılmış olması için mevcut
            imkanlar dahilinde tedbir alınmış olmakla birlikte, nihai güvenliğin
            sağlanması için kullanıcı, kendi virüs koruma sistemini tedarik
            etmek ve gerekli korumayı sağlamakla yükümlüdür. Bu çerçevede
            kullanıcı, Bstar Sigorta Aracılık Hizmetleri Ltd. Şti. web
            sitesi&apos; ne girmesi nedeniyle, kendi yazılım ve işletim
            sistemlerinde oluşabilecek tüm hata ve bunların doğrudan ya da
            dolaylı sonuçlarından kendisinin sorumlu olduğunu kabul eder.
          </p>
          <p className="ql-align-justify">
            Şirket, işbu Gizlilik Politikası hükümlerini dilediği zaman
            değiştirebilir. Güncel Gizlilik Politikası, Veri Sahibi &apos;ne
            herhangi bir yöntemle sunulduğu tarihte yürürlük kazanır.
          </p>
        </div>
      </div>
    </>
  );
}
