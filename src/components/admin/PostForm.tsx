"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { generateSlug } from "@/lib/slug";
import { useToast } from "./Toast";
import ImageUpload from "./ImageUpload";

const QuillEditor = dynamic(() => import("./QuillEditor"), { ssr: false });

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface PostData {
  id?: string;
  title: string;
  slug: string;
  meta_title: string;
  short_content: string;
  detail_content: string;
  image: string;
  category_id: string;
  is_popular: boolean;
  published_date: string;
}

interface Props {
  initialData?: PostData;
  isEdit?: boolean;
}

const emptyPost: PostData = {
  title: "",
  slug: "",
  meta_title: "",
  short_content: "",
  detail_content: "",
  image: "",
  category_id: "",
  is_popular: false,
  published_date: new Date().toISOString().split("T")[0],
};

export default function PostForm({ initialData, isEdit }: Props) {
  const [form, setForm] = useState<PostData>(initialData || emptyPost);
  const [categories, setCategories] = useState<Category[]>([]);
  const [saving, setSaving] = useState(false);
  const [autoSlug, setAutoSlug] = useState(!isEdit);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    fetch("/api/admin/categories").then((r) => r.json()).then(setCategories);
  }, []);

  const update = (field: keyof PostData, value: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title" && autoSlug) {
        next.slug = generateSlug(value as string);
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (!form.title || !form.slug || !form.category_id || !form.short_content) {
      toast.error("Başlık, slug, kategori ve kısa içerik zorunludur.");
      setSaving(false);
      return;
    }

    const url = isEdit ? `/api/admin/posts/${initialData?.id}` : "/api/admin/posts";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success(isEdit ? "Yazı güncellendi!" : "Yazı yayınlandı!");
      setTimeout(() => router.push("/admin/bloglar"), 800);
    } else {
      const data = await res.json();
      toast.error(data.error || "Bir hata oluştu");
    }
    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Başlık *</label>
          <input
            type="text"
            className="form-control"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Slug *
            {!isEdit && (
              <span
                style={{ fontWeight: 400, cursor: "pointer", marginLeft: 8, color: "#3b82f6", fontSize: 12 }}
                onClick={() => setAutoSlug(!autoSlug)}
              >
                [{autoSlug ? "manuel yaz" : "otomatik"}]
              </span>
            )}
          </label>
          <input
            type="text"
            className="form-control"
            value={form.slug}
            onChange={(e) => { setAutoSlug(false); update("slug", e.target.value); }}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Meta Başlık (SEO)</label>
        <input
          type="text"
          className="form-control"
          value={form.meta_title}
          onChange={(e) => update("meta_title", e.target.value)}
          placeholder="Boş bırakılırsa başlık kullanılır"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Kategori *</label>
          <select
            className="form-control"
            value={form.category_id}
            onChange={(e) => update("category_id", e.target.value)}
            required
          >
            <option value="">Kategori seçin</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Yayın Tarihi</label>
          <input
            type="date"
            className="form-control"
            value={form.published_date}
            onChange={(e) => update("published_date", e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Kısa İçerik *</label>
        <textarea
          className="form-control"
          value={form.short_content}
          onChange={(e) => update("short_content", e.target.value)}
          rows={3}
          required
        />
      </div>

      <ImageUpload
        label="Blog Görseli"
        value={form.image}
        onChange={(url) => update("image", url)}
        placeholder="https://... veya dosya yükleyin"
      />

      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={form.is_popular}
            onChange={(e) => update("is_popular", e.target.checked)}
          />
          Popüler yazı olarak işaretle
        </label>
      </div>

      <div className="form-group">
        <label>Detaylı İçerik</label>
        <QuillEditor
          value={form.detail_content}
          onChange={(html) => update("detail_content", html)}
        />
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <button type="submit" className="btn btn-primary" disabled={saving}>
          {saving ? "Kaydediliyor..." : isEdit ? "Güncelle" : "Yayınla"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => router.push("/admin/bloglar")}>
          İptal
        </button>
      </div>
    </form>
  );
}
