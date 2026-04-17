"use client";

import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useCallback, useState } from "react";
import IMask from "imask";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import KvkkCheckbox from "./KvkkCheckbox";

const quoteSchema = z.object({
  nameSurname: z.string().min(3, "Ad Soyad en az 3 karakter olmalıdır"),
  tcKimlikNo: z.string().regex(/^\d{11}$/, "TC Kimlik No 11 haneli olmalıdır"),
  dateOfBirth: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Geçerli bir tarih giriniz (GG/AA/YYYY)"),
  phone: z.string().min(1, "Telefon zorunludur"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  plaka: z.string().optional(),
  serino: z.string().optional(),
  insuranceType: z.string().optional(),
  kvkk: z.literal(true, { error: "KVKK onayı zorunludur" }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  preselectedProduct?: string;
  formTitle?: string;
  showPlaka?: boolean;
  showSerino?: boolean;
  showInsuranceSelect?: boolean;
}

const insuranceOptions = [
  "Trafik Sigortası",
  "Kasko Sigortası",
  "Tamamlayıcı Sağlık Sigortası",
  "Özel Sağlık Sigortası",
  "Nakliyat Sigortası",
  "İşyeri Sigortası",
  "Seyahat Sağlık Sigortası",
  "Konut Sigortası",
  "Ferdi Kaza Sigortası",
  "Mesleki Sorumluluk Sigortası",
  "Yabancı Uyruklular İçin Sağlık Sigortası",
];

export default function QuoteForm({
  preselectedProduct,
  formTitle = "Bilgilerinizi Girin",
  showPlaka = false,
  showSerino = false,
  showInsuranceSelect = false,
}: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formLoadTime = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);
  const tcRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      nameSurname: "",
      tcKimlikNo: "",
      phone: "",
      email: "",
      dateOfBirth: "",
      plaka: "",
      serino: "",
      insuranceType: preselectedProduct ?? "",
      kvkk: false as unknown as true,
    },
  });

  const tcRegister = register("tcKimlikNo");
  const phoneRegister = register("phone");
  const dateRegister = register("dateOfBirth");

  const tcRefCb = useCallback(
    (node: HTMLInputElement | null) => {
      tcRef.current = node;
      tcRegister.ref(node);
    },
    [tcRegister]
  );

  const phoneRefCb = useCallback(
    (node: HTMLInputElement | null) => {
      phoneRef.current = node;
      phoneRegister.ref(node);
    },
    [phoneRegister]
  );

  const dateRefCb = useCallback(
    (node: HTMLInputElement | null) => {
      dateRef.current = node;
      dateRegister.ref(node);
    },
    [dateRegister]
  );

  useEffect(() => {
    if (tcRef.current) {
      const m = IMask(tcRef.current, { mask: "00000000000" });
      m.on("accept", () => setValue("tcKimlikNo", m.value, { shouldValidate: false }));
      return () => m.destroy();
    }
  }, [setValue]);

  useEffect(() => {
    if (phoneRef.current) {
      const m = IMask(phoneRef.current, { mask: "(500) 000-0000" });
      m.on("accept", () => setValue("phone", m.value, { shouldValidate: false }));
      return () => m.destroy();
    }
  }, [setValue]);

  useEffect(() => {
    if (dateRef.current) {
      const m = IMask(dateRef.current, {
        mask: "d{/}m{/}Y",
        blocks: {
          d: { mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2 },
          m: { mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2 },
          Y: { mask: IMask.MaskedRange, from: 1900, to: 2099, maxLength: 4 },
        },
      });
      m.on("accept", () => setValue("dateOfBirth", m.value, { shouldValidate: false }));
      return () => m.destroy();
    }
  }, [setValue]);

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          _hp: honeypotRef.current?.value ?? "",
          _ts: formLoadTime.current,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        await Swal.fire({
          title: "Hata!",
          text: result.error ?? "Bir hata oluştu. Lütfen tekrar deneyiniz.",
          icon: "error",
          confirmButtonText: "Tamam",
          confirmButtonColor: "#E7462C",
        });
        return;
      }

      await Swal.fire({
        title: "Başarılı!",
        text: "Teklif talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.",
        icon: "success",
        confirmButtonText: "Tamam",
        confirmButtonColor: "#E7462C",
      });
      reset();
      formLoadTime.current = Date.now();
    } catch {
      await Swal.fire({
        title: "Hata!",
        text: "Bağlantı hatası. Lütfen tekrar deneyiniz.",
        icon: "error",
        confirmButtonText: "Tamam",
        confirmButtonColor: "#E7462C",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const colStyle = { "--col": "100%" } as React.CSSProperties;

  return (
    <div className="teklif-form-area">
      <span className="f-title">{formTitle}</span>

      <form className="dynamic-form first-form" onSubmit={handleSubmit(onSubmit)} noValidate onKeyPress={(e) => { if (e.key === "Enter") e.preventDefault(); }}>
        <div >

          {/* Ad Soyad */}
          <div className="form-input col form-group input-group" style={colStyle}>
            <label htmlFor="input-name" className="d-none">Ad soyad</label>
            <span className="input-group-text"><i className="icon-user "></i></span>
            <input required type="text" placeholder="Ad Soyad" id="input-name" className="form-control imask" {...register("nameSurname")} />
            {errors.nameSurname && <span className="just-validate-error-label">{errors.nameSurname.message}</span>}
          </div>

          {/* TC Kimlik No */}
          <div className="form-input col form-group input-group" style={colStyle}>
            <label htmlFor="input-tc" className="d-none"></label>
            <span className="input-group-text"><i className="icon-id-card "></i></span>
            <input required type="text" placeholder="TC Kimlik No" id="input-tc" className="form-control imask"
              name={tcRegister.name} onBlur={tcRegister.onBlur} onChange={tcRegister.onChange} ref={tcRefCb} />
            {errors.tcKimlikNo && <span className="just-validate-error-label">{errors.tcKimlikNo.message}</span>}
          </div>

          {/* Doğum Tarihi */}
          <div className="form-input col form-group input-group" style={colStyle}>
            <label htmlFor="input-dob" className="d-none"></label>
            <span className="input-group-text"><i className="icon-calendar "></i></span>
            <input type="text" placeholder="GG/AA/YYYY" id="input-dob" className="form-control imask"
              name={dateRegister.name} onBlur={dateRegister.onBlur} onChange={dateRegister.onChange} ref={dateRefCb} />
            {errors.dateOfBirth && <span className="just-validate-error-label">{errors.dateOfBirth.message}</span>}
          </div>

          {/* Telefon */}
          <div className="form-input col form-group input-group" style={colStyle}>
            <label htmlFor="input-phone" className="d-none"></label>
            <span className="input-group-text"><i className="icon-phone-call "></i></span>
            <input required type="text" placeholder="(5XX) XXX-XXXX" id="input-phone" className="form-control phone-no"
              name={phoneRegister.name} onBlur={phoneRegister.onBlur} onChange={phoneRegister.onChange} ref={phoneRefCb} />
            {errors.phone && <span className="just-validate-error-label">{errors.phone.message}</span>}
          </div>

          {/* E-posta */}
          <div className="form-input col form-group input-group" style={colStyle}>
            <label htmlFor="input-email" className="d-none"></label>
            <span className="input-group-text"><i className="icon-mail "></i></span>
            <input required type="text" placeholder="E-posta" id="input-email" className="form-control " {...register("email")} />
            {errors.email && <span className="just-validate-error-label">{errors.email.message}</span>}
          </div>

          {/* Sigorta Türü (sadece teklif-al sayfasında) */}
          {showInsuranceSelect && (
            <div className="form-input col form-group input-group" style={colStyle}>
              <label htmlFor="input-type" className="d-none"></label>
              <span className="input-group-text"><i className="icon-insurance-type "></i></span>
              <select id="input-type" className="form-control" {...register("insuranceType")}>
                <option value="">Sigorta Türü Seçiniz</option>
                {insuranceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.insuranceType && <span className="just-validate-error-label">{errors.insuranceType.message}</span>}
            </div>
          )}

          {/* Plaka (trafik/kasko) */}
          {showPlaka && (
            <div className="form-input col form-group input-group" style={colStyle}>
              <label htmlFor="input-plaka" className="d-none"></label>
              <span className="input-group-text"><i className="icon-plaka "></i></span>
              <input required type="text" placeholder="Araç Plakası" id="input-plaka" className="form-control " {...register("plaka")} />
            </div>
          )}

          {/* Şasi No (trafik/kasko) */}
          {showSerino && (
            <div className="form-input col form-group input-group" style={colStyle}>
              <label htmlFor="input-serino" className="d-none"></label>
              <span className="input-group-text"><i className="icon-serino "></i></span>
              <input required type="text" placeholder="Şasi Numarası" id="input-serino" className="form-control imask" {...register("serino")} />
            </div>
          )}

          {/* KVKK */}
          <div className="form-input col" style={colStyle}>
            <KvkkCheckbox
              id="input-kvkk"
              error={errors.kvkk?.message}
              {...register("kvkk")}
            />
          </div>

          {/* Honeypot - botlar için gizli tuzak alan */}
          <div
            style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}
            aria-hidden="true"
            tabIndex={-1}
          >
            <label htmlFor="quote-company">Firma</label>
            <input
              type="text"
              id="quote-company"
              name="company"
              ref={honeypotRef}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          {/* Submit */}
          <div className="form-input col" style={colStyle}>
            <div>
              <button type="submit" className="btn btn_teklif" disabled={isSubmitting}>
                {isSubmitting ? "Gönderiliyor..." : "Fiyat Teklifi Al"}
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}
