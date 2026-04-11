"use client";

import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import KvkkCheckbox from "./KvkkCheckbox";

const contactSchema = z.object({
  nameSurname: z
    .string()
    .min(3, "Ad Soyad en az 3 karakter olmalıdır")
    .nonempty("Ad Soyad zorunludur"),
  email: z
    .string()
    .nonempty("E-posta zorunludur")
    .email("Geçerli bir e-posta adresi giriniz"),
  phone: z
    .string()
    .nonempty("Telefon zorunludur")
    .min(10, "Geçerli bir telefon numarası giriniz"),
  subject: z
    .string()
    .nonempty("Konu zorunludur"),
  message: z
    .string()
    .nonempty("Mesaj zorunludur")
    .min(10, "Mesaj en az 10 karakter olmalıdır"),
  kvkk: z.literal(true, {
    error: "KVKK onayı zorunludur",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formLoadTime = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nameSurname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      kvkk: false as unknown as true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
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
        text: "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
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

  return (
    <form
      className="quform-elements"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="row">
        {/* Ad Soyad */}
        <div
          className="form-input col quform-input"
          style={{ "--col": "50%" } as React.CSSProperties}
        >
          <label htmlFor="contact-name" className="d-none">
            Ad Soyad
          </label>
          <input
            type="text"
            id="contact-name"
            placeholder="Ad Soyad"
            className="form-control"
            {...register("nameSurname")}
          />
          {errors.nameSurname && (
            <span className="text-danger" style={{ fontSize: "12px" }}>
              {errors.nameSurname.message}
            </span>
          )}
        </div>

        {/* E-posta */}
        <div
          className="form-input col quform-input"
          style={{ "--col": "50%" } as React.CSSProperties}
        >
          <label htmlFor="contact-email" className="d-none">
            E-posta
          </label>
          <input
            type="text"
            id="contact-email"
            placeholder="E-posta"
            className="form-control"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-danger" style={{ fontSize: "12px" }}>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Telefon */}
        <div
          className="form-input col quform-input"
          style={{ "--col": "50%" } as React.CSSProperties}
        >
          <label htmlFor="contact-phone" className="d-none">
            Telefon
          </label>
          <input
            type="text"
            id="contact-phone"
            placeholder="Telefon Numarası"
            className="form-control"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-danger" style={{ fontSize: "12px" }}>
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Konu */}
        <div
          className="form-input col quform-input"
          style={{ "--col": "50%" } as React.CSSProperties}
        >
          <label htmlFor="contact-subject" className="d-none">
            Konu
          </label>
          <input
            type="text"
            id="contact-subject"
            placeholder="Konu"
            className="form-control"
            {...register("subject")}
          />
          {errors.subject && (
            <span className="text-danger" style={{ fontSize: "12px" }}>
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Mesaj */}
        <div
          className="form-input col quform-input quform-element"
          style={{ "--col": "100%" } as React.CSSProperties}
        >
          <label htmlFor="contact-message" className="d-none">
            Mesaj
          </label>
          <textarea
            id="contact-message"
            placeholder="Mesajınız"
            className="form-control"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <span className="text-danger" style={{ fontSize: "12px" }}>
              {errors.message.message}
            </span>
          )}
        </div>

        {/* KVKK */}
        <div
          className="form-input col"
          style={{ "--col": "100%" } as React.CSSProperties}
        >
          <KvkkCheckbox
            id="contact-kvkk"
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
          <label htmlFor="contact-website">Website</label>
          <input
            type="text"
            id="contact-website"
            name="website"
            ref={honeypotRef}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        {/* Submit */}
        <div
          className="form-input col"
          style={{ "--col": "100%" } as React.CSSProperties}
        >
          <div>
            <button
              type="submit"
              className="butn-style3 secondary"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Gönderiliyor..." : "Gönder"}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
