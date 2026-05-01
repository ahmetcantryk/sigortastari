"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import FilterBar, { FilterSelect, type FilterChip } from "@/components/admin/FilterBar";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { useToast } from "@/components/admin/Toast";

interface Post {
  id: string;
  slug: string;
  title: string;
  image: string | null;
  is_popular: boolean;
  published_date: string;
  blog_categories: { id: string; name: string } | null;
}

interface Category {
  id: string;
  name: string;
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
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function AdminBloglarPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<Post | null>(null);
  const [busyDelete, setBusyDelete] = useState(false);
  const toast = useToast();

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (catFilter) params.set("category", catFilter);
    try {
      const res = await fetch(`/api/admin/posts?${params}`);
      if (!res.ok) throw new Error();
      setPosts(await res.json());
    } catch {
      toast.error("Blog yazıları yüklenemedi");
    }
    setLoading(false);
  }, [search, catFilter, toast]);

  useEffect(() => {
    fetch("/api/admin/categories")
      .then((r) => r.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    const timer = setTimeout(fetchPosts, 300);
    return () => clearTimeout(timer);
  }, [fetchPosts]);

  const confirmDelete = async () => {
    if (!deleting) return;
    setBusyDelete(true);
    const res = await fetch(`/api/admin/posts/${deleting.id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success(`"${deleting.title}" silindi`);
      setDeleting(null);
      fetchPosts();
    } else {
      toast.error("Silme işlemi başarısız oldu");
    }
    setBusyDelete(false);
  };

  const chips: FilterChip[] = [];
  if (catFilter) {
    const cat = categories.find((c) => c.id === catFilter);
    chips.push({
      key: "cat",
      label: cat?.name ?? catFilter,
      onClear: () => setCatFilter(""),
    });
  }

  const clearAll = () => {
    setSearch("");
    setCatFilter("");
  };

  return (
    <AdminShell>
      <div className="page-head">
        <h1>Blog Yazıları</h1>
        <Link href="/admin/bloglar/yeni" className="btn btn-primary">
          <PlusIcon /> Yeni Yazı
        </Link>
      </div>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Başlık ara..."
        filters={
          <FilterSelect
            value={catFilter}
            onChange={setCatFilter}
            placeholder="Tüm kategoriler"
            width={180}
            options={categories.map((c) => ({ value: c.id, label: c.name }))}
          />
        }
        chips={chips}
        onClearAll={clearAll}
        count={posts.length}
        loading={loading}
        countLabel="yazı"
      />

      {loading ? (
        <div className="admin-empty">Yükleniyor...</div>
      ) : posts.length === 0 ? (
        <div className="admin-empty">Blog yazısı bulunamadı.</div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: 80 }}>Görsel</th>
              <th>Başlık</th>
              <th>Kategori</th>
              <th>Tarih</th>
              <th>Popüler</th>
              <th style={{ width: 1, textAlign: "right" }}></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.image} alt="" />
                  ) : (
                    <div
                      style={{
                        width: 60,
                        height: 40,
                        background: "var(--bg-muted)",
                        border: "1px solid var(--border)",
                        borderRadius: 4,
                      }}
                    />
                  )}
                </td>
                <td>
                  <Link
                    href={`/admin/bloglar/${post.id}`}
                    style={{ color: "var(--fg)", textDecoration: "none", fontWeight: 500 }}
                  >
                    {post.title}
                  </Link>
                </td>
                <td>{post.blog_categories?.name || "-"}</td>
                <td style={{ whiteSpace: "nowrap" }}>{post.published_date}</td>
                <td>
                  <span className={`badge ${post.is_popular ? "badge-green" : "badge-gray"}`}>
                    {post.is_popular ? "Evet" : "Hayır"}
                  </span>
                </td>
                <td>
                  <span className="row-actions">
                    <Link
                      href={`/admin/bloglar/${post.id}`}
                      className="row-action-btn"
                      aria-label="Düzenle"
                    >
                      <EditIcon />
                    </Link>
                    <button
                      className="row-action-btn"
                      onClick={() => setDeleting(post)}
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

      <ConfirmDialog
        open={!!deleting}
        title="Yazıyı sil"
        description={
          deleting
            ? `"${deleting.title}" yazısını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`
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
