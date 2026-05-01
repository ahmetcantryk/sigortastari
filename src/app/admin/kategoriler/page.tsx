"use client";

import { useState, useEffect } from "react";
import AdminShell from "@/components/admin/AdminShell";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { useToast } from "@/components/admin/Toast";
import { generateSlug } from "@/lib/slug";

interface Category {
  id: string;
  slug: string;
  name: string;
  created_at: string;
}

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export default function KategorilerPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [creating, setCreating] = useState(false);

  const [editing, setEditing] = useState<Category | null>(null);
  const [editName, setEditName] = useState("");
  const [editSlug, setEditSlug] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);

  const [deleting, setDeleting] = useState<Category | null>(null);
  const [busyDelete, setBusyDelete] = useState(false);

  const toast = useToast();

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      if (!res.ok) throw new Error();
      setCategories(await res.json());
    } catch {
      toast.error("Kategoriler yüklenemedi");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) {
      toast.error("Kategori adı boş olamaz");
      return;
    }
    setCreating(true);
    const slug = newSlug.trim() || generateSlug(newName);
    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim(), slug }),
    });
    if (res.ok) {
      toast.success(`"${newName.trim()}" eklendi`);
      setNewName("");
      setNewSlug("");
      fetchCategories();
    } else {
      const data = await res.json();
      toast.error(data.error || "Kategori eklenemedi");
    }
    setCreating(false);
  };

  const startEdit = (cat: Category) => {
    setEditing(cat);
    setEditName(cat.name);
    setEditSlug(cat.slug);
  };

  const saveEdit = async () => {
    if (!editing) return;
    if (!editName.trim()) {
      toast.error("Kategori adı boş olamaz");
      return;
    }
    setSavingEdit(true);
    const res = await fetch(`/api/admin/categories/${editing.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: editName.trim(),
        slug: editSlug.trim() || generateSlug(editName),
      }),
    });
    if (res.ok) {
      toast.success("Kategori güncellendi");
      setEditing(null);
      fetchCategories();
    } else {
      const data = await res.json();
      toast.error(data.error || "Güncelleme başarısız");
    }
    setSavingEdit(false);
  };

  const confirmDelete = async () => {
    if (!deleting) return;
    setBusyDelete(true);
    const res = await fetch(`/api/admin/categories/${deleting.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      toast.success(`"${deleting.name}" silindi`);
      setDeleting(null);
      fetchCategories();
    } else {
      const data = await res.json();
      toast.error(data.error || "Silme başarısız");
    }
    setBusyDelete(false);
  };

  return (
    <AdminShell>
      <h1>Kategoriler</h1>

      <form onSubmit={handleCreate} className="card section">
        <div className="section-head">
          <span>Yeni Kategori</span>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Kategori Adı</label>
            <input
              type="text"
              className="form-control"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
                setNewSlug(generateSlug(e.target.value));
              }}
              placeholder="Örn. Sağlık"
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              value={newSlug}
              onChange={(e) => setNewSlug(e.target.value)}
              placeholder="otomatik"
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-primary" disabled={creating}>
            {creating ? "Ekleniyor..." : "Ekle"}
          </button>
        </div>
      </form>

      {loading ? (
        <div className="admin-empty">Yükleniyor...</div>
      ) : categories.length === 0 ? (
        <div className="admin-empty">Henüz kategori yok.</div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Slug</th>
              <th style={{ width: 1, textAlign: "right" }}></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.name}</td>
                <td style={{ color: "var(--fg-muted)", fontSize: 12 }}>{cat.slug}</td>
                <td>
                  <span className="row-actions">
                    <button
                      className="row-action-btn"
                      onClick={() => startEdit(cat)}
                      aria-label="Düzenle"
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="row-action-btn"
                      onClick={() => setDeleting(cat)}
                      aria-label="Sil"
                    >
                      <TrashIcon />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editing && (
        <div className="quote-modal-bg" onClick={() => setEditing(null)}>
          <div className="quote-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 480 }}>
            <button className="quote-modal-close" onClick={() => setEditing(null)}>×</button>
            <h2>Kategori Düzenle</h2>
            <div className="edit-form">
              <div className="full">
                <label>Ad</label>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="full">
                <label>Slug</label>
                <input
                  value={editSlug}
                  onChange={(e) => setEditSlug(e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 }}>
              <button className="btn btn-secondary" onClick={() => setEditing(null)}>
                İptal
              </button>
              <button className="btn btn-primary" onClick={saveEdit} disabled={savingEdit}>
                {savingEdit ? "Kaydediliyor..." : "Kaydet"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={!!deleting}
        title="Kategoriyi sil"
        description={
          deleting
            ? `"${deleting.name}" kategorisini silmek istediğinize emin misiniz? Bu kategoriye bağlı yazılar etkilenebilir.`
            : ""
        }
        confirmLabel="Sil"
        destructive
        onConfirm={confirmDelete}
        onCancel={() => setDeleting(null)}
        busy={busyDelete}
      />
    </AdminShell>
  );
}
