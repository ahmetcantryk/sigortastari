import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "KVKK - Kişisel Verilerin Korunması | Sigorta Starı",
  description:
    "Kişisel verilerinizi önemsiyoruz! Kişisel verilerin korunması kanunu ile ilgili bilgiler ve Sigorta Starı'nın politikaları burada. Detaylı bilgi için tıklayın.",
  openGraph: {
    title: "KVKK - Kişisel Verilerin Korunması | Sigorta Starı",
    type: "website",
    url: "https://www.sigortastari.com/kvkk",
    description:
      "Kişisel verilerinizi önemsiyoruz! Kişisel verilerin korunması kanunu ile ilgili bilgiler ve Sigorta Starı'nın politikaları burada. Detaylı bilgi için tıklayın.",
    siteName: "Sigortastarı",
    locale: "tr-TR",
    images: [{ url: "/images/logos.png" }],
  },
  alternates: { canonical: "https://www.sigortastari.com/kvkk" },
};

export default function KVKKPage() {
  return (
    <>
      <PageBanner
        title="KVKK"
        backgroundImage="/images/kvkk-banner.webp"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "KVKK", href: "/kvkk" },
        ]}
      />

      <div className="container container my-5 content-style">
        <div className="ql-editor">
          <p>KİŞİSEL VERİLERİN İŞLENMESİ HAKKINDA AYDINLATMA METNİ </p>
          <p>
            <br />
          </p>
          <p>
            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (&ldquo;Kanun&rdquo;) kapsamında veri sorumlusu sıfatıyla Bstar
            Sigorta Aracılık Hizmetleri Limited Şirketi tarafından
            hazırlanmıştır. Kişisel verileriniz ve özel nitelikli kişisel
            verileriniz, sigorta teklifleri ve sigorta sözleşmeleri kapsamında,
            şirketimiz Bstar Sigorta Aracılık Hizmetleri Limited Şirketi
            (&ldquo;Bstar Sigorta &rdquo;) tarafından Veri Sorumlusu sıfatıyla
            hukuka ve dürüstlük kurallarına uygun olarak aşağıda açıklanan
            çerçevede işlenecektir.
          </p>
          <p>
            <br />
          </p>
          <p>1. Kişisel Verilerin İşlenme Amacı ve Hukuki Sebebi: </p>
          <p>
            <br />
          </p>
          <p>
            Kişisel Verileriniz; (kimlik, iletişim, sigorta konusu araç
            bilgileri, banka hesap bilgileri, müşteri işlem bilgileri ve gerekli
            olduğu durumda aile bilgisi, finans kayıtları, meslek bilgileri,
            görsel ve işitsel kayıtlar, hukuki işlem kayıtları) ve
          </p>
          <p>
            <br />
          </p>
          <p>
            Özel Nitelikli Kişisel Verileriniz; (engelli araçlarına yönelik
            sigortalar yönünden sağlık bilgileri ve poliçe kapsamında gerekli
            olduğu durumda tazminat aşamasındaki sağlık bilgileri ile ceza
            mahkumiyeti, grup sigortalarında sigorta ettirenin dernek, vakıf veya
            sendika olduğu durumlarda üyelik bilgileri) aşağıdaki amaç ve
            şartlar doğrultusunda işlenebilecektir.
          </p>
          <p>
            <br />
          </p>
          <p>
            a) Sigorta teklifleri ve sigorta sözleşmeleri kapsamında ve herhangi
            bir tazminat talebi olması halinde, tazminat aşamasındaki sağlık
            verilerine ilişkin işlenen özel nitelikli kişisel veriler,
            Kanun&apos;un 6&apos;ncı maddesinin 2&apos;nci ve 3&apos; üncü
            fıkraları kapsamında &ldquo;açık rıza&rdquo; şartına dayalı olarak;
          </p>
          <p>
            <br />
          </p>
          <p>
            b) Tazminat aşamasında ihtiyaç halinde ceza mahkumiyeti bilgileri ve
            grup sigortalarında sigorta ettirenin dernek, vakıf veya sendika
            olduğu durumlarda üyelik bilgileri, Kanun&apos;un 6&apos;ncı
            maddesinin 3&apos;üncü fıkrası uyarınca Kanunlarda öngörülen
            hallerle sınırlı olarak;
          </p>
          <p>
            <br />
          </p>
          <p>
            c) Sigorta poliçesi tanzim etmek üzere risk değerlendirmesi
            yapılabilmesi, poliçe prim ve teminatların belirlenebilmesi,
            poliçeden kaynaklanan hakların kullanılması ve yükümlülüklerin yerine
            getirilmesi, poliçe iptal ve yenileme işlemlerinin
            gerçekleştirilmesi, sigorta teklifi oluşturulması amacıyla,
            Kanun&apos;un 5&apos;inci maddesinin 2&apos;nci fıkrasının (c)
            bendi uyarınca sigorta sözleşmesinin kurulması ve ifasıyla doğrudan
            doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel
            verilerin işlenmesinin gerekli olması şartına dayalı olarak;
          </p>
          <p>
            <br />
          </p>
          <p>
            d) Sigortacının tazminat sorumlusuna rücu haklarının kullanılması,
            Sigorta poliçesinin primlerinin tahsil edilebilmesi, prim
            iadelerinin yapılabilmesi, tazminat değerlendirmesi yapılabilmesi,
            sigortalının giderlerinin karşılanması, hastane, eczane ve diğer
            sağlık kurumlarından sigortalının aldığı hizmetler karşılığı ödenen
            tutarlar için sigortalıya tazminatın ödenmesi amacıyla işlenen
            kişisel veriler, Kanun&apos;un 5&apos;inci maddesinin 2&apos;nci
            fıkrasının (e) bendi uyarınca; bir hakkın tesisi, kullanılması veya
            korunması için veri işlemenin zorunlu olması şartına dayalı olarak;
          </p>
          <p>
            <br />
          </p>
          <p>
            e) Kanunlar ve ilgili mevzuatlardan kaynaklanan yükümlülüklerin
            ifası amacıyla yetkili kuruluşlara raporlama yapılması, bilgi/belge
            saklama yükümlülüklerinin ifası, kimlik doğrulamasının yapılması,
            hukuki iş ve işlemlerin yürütülmesi ve takibi, sigorta sözleşmesi
            hakkında bilgilendirme ve ihbarların yapılması, iletişimin kayıt
            altına alınması amacıyla işlenen kişisel veriler, Kanun&apos;un
            5&apos;inci maddesinin 2&apos;nci fıkrasının (ç) bendi uyarınca
            veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için
            veri işlemenin zorunlu olması şartına dayalı olarak;
          </p>
          <p>
            <br />
          </p>
          <p>
            f) Sigortacının tazminat sorumlusuna rücu haklarının kullanılması,
            sigorta poliçesinin primlerinin tahsil edilebilmesi, prim
            iadelerinin yapılabilmesi, tazminat değerlendirmesi yapılabilmesi,
            sigortalının ve hak sahiplerinin giderlerinin karşılanması, hastane,
            eczane ve diğer kurumlardan sigortalının aldığı hizmetler bakımından
            provizyon sağlanması, anlaşmalı ve yetkili kurum ve kişilere ödeme
            yapılması ve tazminatın ödenmesi amacıyla işlenen kişisel veriler,
            Kanun&apos;un 5&apos;inci maddesinin 2&apos;nci fıkrasının (e)
            bendi uyarınca; bir hakkın tesisi, kullanılması veya korunması için
            veri işlemenin zorunlu olması şartına dayalı olarak;
          </p>
          <p>
            <br />
          </p>
          <p>
            g) Sigorta reasürans ve koasürans süreçlerinin yürütülmesi, denetim
            faaliyetlerinin planlanması ve icrası, veri analizi çalışmaları ile
            sigortacının Destek Hizmetleri Yönetmeliği uyarınca sigortalıya
            sunduğu hizmetler bakımından destek hizmet aldığı firmalar ve
            tedarikçiler ile yapılan bilgi paylaşımları, Kanun&apos;un
            5&apos;inci maddesinin 2&apos;nci fıkrasının (f) bendi uyarınca;
            ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla,
            veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu
            olması şartına dayalı olarak;
          </p>
          <p>
            <br />
          </p>
          <p>
            f) Denetim faaliyetlerinin planlanması ve icrası, veri analizi
            çalışmaları ile sigortacının Destek Hizmetleri Yönetmeliği uyarınca
            sigortalıya ve hak sahiplerine sunduğu hizmetler bakımından destek
            hizmet aldığı firmalar ve tedarikçiler ile yapılan bilgi
            paylaşımları, Kanun&apos;un 5&apos;inci maddesinin 2&apos;nci
            fıkrasının (f) bendi uyarınca; ilgili kişinin temel hak ve
            özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru
            menfaatleri için veri işlenmesinin zorunlu olması şartına dayalı
            olarak; işlenebilecektir.
          </p>
          <p>
            <br />
          </p>
          <p> 2. Kişisel Verilerin Toplanma Yöntemi: </p>
          <p>
            <br />
          </p>
          <p>
            Yukarıda açıklanan doğrultuda kişisel verileriniz ve özel nitelikli
            kişisel verileriniz; Sigorta Bilgi ve Gözetim Merkezinden (SBGM),
            Sosyal Güvenlik Kurumundan, Sağlık Bakanlığından, sağlık kurum ve
            kuruluşlarından, sigorta şirketlerinden, aracılardan, anlaşmalı ve
            yetkili kurum ve kişilerden, otomobil servislerinden, markalı
            kaskolarda ilgili otomotiv firmalarından, fiyat karşılaştırma
            platformları ile hizmet sağlayıcı şirketler ve/veya ilgili mevzuat
            ile belirlenen kurum ve kuruluşlardan, mevzuatın izin verdiği veri
            tabanlarından, başvuru ve bilgilendirme formlarından dijital
            kanallardan, internet sitesinden, çağrı merkezinden sözlü, yazılı
            veya elektronik ortamda, tamamen veya kısmen otomatik olan ya da
            herhangi bir veri kayıt sisteminin parçası olarak otomatik olmayan
            yollarla temin edilerek, işlenmekte ve güncellenmektedir.
          </p>
          <p>
            <br />
          </p>
          <p>3. Kişisel Verilerin Aktarılması: </p>
          <p>
            <br />
          </p>
          <p>
            Kişisel verileriniz sigorta prim ve tazminat ödemelerinin
            gerçekleştirilmesi amacıyla bankalara/ finansman şirketlerine,
            markalı kasko ürünlerinde sigortalı aracın markasına özel sunulan
            hizmetlerden yararlanmak amacıyla ilgili otomotiv firmasına;
          </p>
          <p>
            <br />
          </p>
          <p>
            Kişisel verileriniz ve özel nitelikli kişisel verileriniz; raporlama
            ve inceleme talepleri çerçevesinde denetleyici ve düzenleyici
            makamlar, ilgili kamu ve sağlık kuruluşlarına, adli takip
            işlemlerinin yerine getirilmesi amacıyla adli makamlara, vekalet
            ilişkisi içerisinde olduğumuz gerçek ve tüzel kişilere, alternatif
            uyuşmazlık çözüm mercilerine, yetkili vekillere, Sigortacılık ve
            Özel Emeklilik Düzenleme ve Denetleme Kurumu&apos;na, Sigorta Bilgi
            ve Gözetim Merkezi (SBGM), Sosyal Güvenlik Kurumu, Sağlık
            Bakanlığı, sağlık kurum ve kuruluşlarına, anlaşmalı ve yetkili kurum
            ve kuruluşlar ile mevzuat hükümlerinin izin verdiği kişi veya
            kuruluşlara; sigorta geçiş, reasürans ve koasürans işlemleri ile
            rücu işlemlerinin yürütülmesi amacıyla yurt içinde (ve rızanızın
            olması halinde yurt dışında) sigorta şirketleri, hayat emeklilik
            şirketleri ve reasürans şirketlerine; poliçe tanzimi, yenilenmesi ve
            tazminat ödeme işlemlerinin takibi amacıyla yetkili
            acenteler/brokerlere, otomobil servislerine, sovtaj şirketleri,
            eksperler, istihbarat şirketlerine, aktüeryel değerlendirme yapılmak
            üzere aktüerlere, tazminat talebi ile ilgili görüş almak amacıyla
            uzmanlara; sağlık durumunuzla ilgili görüş almak amacıyla uzmanlara;
            tazminat aşamasında raporlara ilişkin danışmanlara/bilirkişilere,
            poliçe ve sözleşme taraflarına; sigortacılık ürün ve hizmetlerinin
            sunulabilmesi amacıyla topluluk şirketleri, iştiraklere,
            acentelerine; sigorta faaliyetlerini yürütmek ve poliçede taahhüt
            edilen asistans, danışmanlık içerikli ek hizmetleri yerine getirmek
            üzere hizmet alınan destek hizmeti sağlayıcılara ve tedarikçilere
            mevzuatın izin verdiği ve gerektiği ölçüde aktarılabilecektir.
          </p>
          <p>
            <br />
          </p>
          <p>
            6698 sayılı Kanun&apos;un &ldquo;ilgili kişinin haklarını
            düzenleyen&rdquo; 11. maddesi kapsamındaki taleplerinizi, Veri
            Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e göre,
            Maslak Mahallesi Taşyoncası Sokak Maslak 1453 Sitesi T4 Blok No:1U
            İç Kapı No:B124 Sarıyer İstanbul adresinden,{" "}
            <a
              href="https://www.bstarturkey.com/contact"
              rel="noopener noreferrer"
              className="text-editor-link"
              target="_blank"
            >
              www.bstarturkey.com/contact
            </a>{" "}
            veya{" "}
            <a
              href="mailto:bstarsigorta@hs03.kep.tr"
              rel="noopener noreferrer"
              className="text-editor-link"
            >
              bstarsigorta@hs03.kep.tr
            </a>{" "}
            üzerinden yazılı olarak veya 0212 813 26 33 numaralı telefondan
            Bstar&apos;a iletebilirsiniz.
          </p>
          <p>
            <br />
          </p>
          <p>
            TANITIM ve PAZARLAMA İÇERİKLİ TİCARİ ELEKTRONİK İLETİ GÖNDERİMİ
            İÇİN KİŞİSEL VERİLERİN İŞLENMESİNE YÖNELİK AYDINLATMA METNİ
          </p>
          <p>
            <br />
          </p>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 5&apos;inci
            maddesinin 1&apos;inci fıkrası ve aynı zamanda 6563 sayılı
            Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve ilgili mevzuat
            çerçevesinde &ldquo;açık Rıza&apos;nızın olması halinde;
            sigortacılık ürün ve hizmetlerinin sunulabilmesi için, sözleşme
            taraflarından veya sigorta aracılarından, hizmet sağlayıcı şirketler
            ve/veya ilgili mevzuat ile belirlenen kurum ve kuruluşlardan,
            mevzuatın izin verdiği veri tabanlarından, formlardan, sözlü, yazılı
            veya elektronik ortamda, tamamen veya kısmen otomatik olan ya da
            herhangi bir veri kayıt sisteminin parçası olarak otomatik olmayan
            yollarla temin edilen kişisel verileriniz; veri sorumlusu Bstar
            Sigorta Aracılık Hizmetleri Limited Şirketi ile topluluk şirketleri,
            iştirakleri ve acenteleri, hizmet sağlayıcıları tarafından; SMS,
            MMS, telefon, faks, otomatik arama makineleri, elektronik posta ve
            benzeri iletişim kanallarından tanıtım ve pazarlama içerikli ticari
            elektronik ileti gönderilebilmesi amacıyla işlenebilecektir.
          </p>
          <p>
            <br />
          </p>
          <p>
            6698 sayılı Kanun&apos;un &ldquo;ilgili kişinin haklarını
            düzenleyen&rdquo; 11. maddesi kapsamındaki taleplerinizi, Veri
            Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e göre,
            Fulya Mahallesi Büyükdere Caddesi Pekintaş İş Merkezi No:32 Kat:8
            Daire:61 Şişli İstanbul adresinden,{" "}
            <a
              href="https://www.bstarturkey.com/contact"
              rel="noopener noreferrer"
              className="text-editor-link"
              target="_blank"
            >
              www.bstarturkey.com/contact{" "}
            </a>
            veya{" "}
            <a
              href="mailto:bstarsigorta@hs03.kep.tr"
              rel="noopener noreferrer"
              className="text-editor-link"
            >
              bstarsigorta@hs03.kep.tr
            </a>{" "}
            üzerinden yazılı olarak veya 0212 813 26 33 numaralı telefondan
            Bstar&apos;a iletebilirsiniz.
          </p>
        </div>
      </div>
    </>
  );
}
