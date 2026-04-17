"use client";

import { useState, useEffect } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { useToast } from "@/components/admin/Toast";
import { generateSlug } from "@/lib/slug";

interface Category {
  id: string;
  slug: string;
  name: string;
  created_at: string;
}

export default function KategorilerPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editSlug, setEditSlug] = useState("");
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

  useEffect(() => { fetchCategories(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) {
      toast.error("Kategori adı boş olamaz");
      return;
    }

    const slug = newSlug.trim() || generateSlug(newName);
    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim(), slug }),
    });

    if (res.ok) {
      toast.success(`"${newName.trim()}" kategorisi eklendi`);
      setNewName("");
      setNewSlug("");
      fetchCategories();
    } else {
      const data = await res.json();
      toast.error(data.error || "Kategori eklenemedi");
    }
  };

  const handleUpdate = async (id: string) => {
    if (!editName.trim()) {
      toast.error("Kategori adı boş olamaz");
      return;
    }

    const res = await fetch(`/api/admin/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName.trim(), slug: editSlug.trim() || generateSlug(editName) }),
    });

    if (res.ok) {
      toast.success("Kategori güncellendi");
      setEditId(null);
      fetchCategories();
    } else {
      const data = await res.json();
      toast.error(data.error || "Güncelleme başarısız");
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`"${name}" kategorisini silmek istediğinize emin misiniz?`)) return;

    const res = await fetch(`/api/admin/categories/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success(`"${name}" silindi`);
      fetchCategories();
    } else {
      const data = await res.json();
      toast.error(data.error || "Silme işlemi başarısız");
    }
  };

  const startEdit = (cat: Category) => {
    setEditId(cat.id);
    setEditName(cat.name);
    setEditSlug(cat.slug);
  };

  return (
    <AdminShell>
      <h1>Kategoriler</h1>

      {/* Yeni kategori formu */}
      <form onSubmit={handleCreate} className="card" style={{ marginBottom: 20 }}>
        <div className="inline-form">
          <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
            <label>Kategori Adı</label>
            <input
              type="text"
              className="form-control"
              value={newName}
              onChange={(e) => { setNewName(e.target.value); setNewSlug(generateSlug(e.target.value)); }}
              placeholder="Yeni kategori adı"
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              value={newSlug}
              onChange={(e) => setNewSlug(e.target.value)}
              placeholder="otomatik"
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-end" }}>
            Ekle
          </button>
        </div>
      </form>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Slug</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                {editId === cat.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        style={{ padding: "4px 8px" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editSlug}
                        onChange={(e) => setEditSlug(e.target.value)}
                        style={{ padding: "4px 8px" }}
                      />
                    </td>
                    <td>
                      <button className="btn btn-success btn-sm" onClick={() => handleUpdate(cat.id)} style={{ marginRight: 4 }}>
                        Kaydet
                      </button>
                      <button className="btn btn-secondary btn-sm" onClick={() => setEditId(null)}>
                        İptal
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{cat.name}</td>
                    <td style={{ color: "#64748b", fontSize: 13 }}>{cat.slug}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => startEdit(cat)} style={{ marginRight: 4 }}>
                        Düzenle
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat.id, cat.name)}>
                        Sil
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminShell>
  );
}
