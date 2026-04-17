"use client";

import { useState, useRef } from "react";
import { useToast } from "./Toast";

interface Props {
  label: string;
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
}

export default function ImageUpload({ label, value, onChange, placeholder }: Props) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const upload = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        onChange(data.url);
        toast.success("Görsel yüklendi");
      } else {
        toast.error(data.error || "Yükleme başarısız");
      }
    } catch {
      toast.error("Yükleme sırasında hata oluştu");
    }
    setUploading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) upload(file);
  };

  return (
    <div className="form-group">
      <label>{label}</label>

      {/* Önizleme + Sürükle/Bırak alanı */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        style={{
          border: `2px dashed ${dragOver ? "#3b82f6" : "#cbd5e1"}`,
          borderRadius: 8,
          padding: 16,
          textAlign: "center",
          background: dragOver ? "#eff6ff" : "#f8fafc",
          transition: "all 0.2s",
          marginBottom: 8,
          cursor: "pointer",
        }}
        onClick={() => fileRef.current?.click()}
      >
        {value ? (
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={value}
              alt="Önizleme"
              style={{ maxWidth: 280, maxHeight: 160, objectFit: "cover", borderRadius: 6 }}
            />
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onChange(""); }}
              style={{
                position: "absolute", top: -8, right: -8,
                width: 24, height: 24, borderRadius: "50%",
                background: "#ef4444", color: "#fff", border: "none",
                cursor: "pointer", fontSize: 14, lineHeight: "24px",
              }}
            >
              &times;
            </button>
          </div>
        ) : (
          <div style={{ color: "#64748b", fontSize: 13, padding: "20px 0" }}>
            {uploading ? (
              <span>Yükleniyor...</span>
            ) : (
              <>
                <div style={{ fontSize: 28, marginBottom: 4 }}>+</div>
                <div>Görsel sürükleyin veya tıklayın</div>
                <div style={{ fontSize: 11, marginTop: 4 }}>JPG, PNG, WebP - max 5MB</div>
              </>
            )}
          </div>
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* URL elle girme */}
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "veya URL yapıştırın"}
        style={{ fontSize: 12, color: "#64748b" }}
      />
    </div>
  );
}
