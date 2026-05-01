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

      <div
        className={`dropzone ${dragOver ? "drag-over" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
      >
        {value ? (
          <div className="dropzone-preview">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt="Önizleme" />
            <button
              type="button"
              className="dropzone-remove"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
              }}
              aria-label="Görseli kaldır"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="dropzone-empty">
            {uploading ? (
              <span>Yükleniyor...</span>
            ) : (
              <>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="dropzone-icon">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <div className="dropzone-title">Görsel sürükleyin veya tıklayın</div>
                <div className="dropzone-hint">JPG, PNG, WebP — max 5MB</div>
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

      <input
        type="text"
        className="form-control dropzone-url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "veya URL yapıştırın"}
      />
    </div>
  );
}
