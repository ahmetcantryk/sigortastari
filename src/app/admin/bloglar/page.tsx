"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
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

export default function AdminBloglarPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
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
    fetch("/api/admin/categories").then((r) => r.json()).then(setCategories);
  }, []);

  useEffect(() => {
    const timer = setTimeout(fetchPosts, 300);
    return () => clearTimeout(timer);
  }, [fetchPosts]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" yazısını silmek istediğinize emin misiniz?`)) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success(`"${title}" silindi`);
      fetchPosts();
    } else {
      toast.error("Silme işlemi başarısız oldu");
    }
    setDeleting(null);
  };

  return (
    <AdminShell>
      <h1>Blog Yazıları</h1>

      <div className="toolbar">
        <input
          type="text"
          className="form-control"
          placeholder="Başlık ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-control"
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          style={{ minWidth: 160 }}
        >
          <option value="">Tüm Kategoriler</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <span style={{ color: "#64748b", fontSize: 13 }}>
          {!loading && `${posts.length} yazı`}
        </span>
        <Link href="/admin/bloglar/yeni" className="btn btn-primary" style={{ marginLeft: "auto" }}>
          + Yeni Yazı
        </Link>
      </div>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Görsel</th>
              <th>Başlık</th>
              <th>Kategori</th>
              <th>Tarih</th>
              <th>Popüler</th>
              <th>İşlem</th>
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
                    <div style={{ width: 60, height: 40, background: "#e2e8f0", borderRadius: 4 }} />
                  )}
                </td>
                <td>
                  <Link href={`/admin/bloglar/${post.id}`} style={{ color: "#1e40af", textDecoration: "none" }}>
                    {post.title}
                  </Link>
                </td>
                <td>{post.blog_categories?.name || "-"}</td>
                <td>{post.published_date}</td>
                <td>
                  <span className={`badge ${post.is_popular ? "badge-green" : "badge-gray"}`}>
                    {post.is_popular ? "Evet" : "Hayır"}
                  </span>
                </td>
                <td>
                  <Link href={`/admin/bloglar/${post.id}`} className="btn btn-secondary btn-sm" style={{ marginRight: 4 }}>
                    Düzenle
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(post.id, post.title)}
                    disabled={deleting === post.id}
                  >
                    {deleting === post.id ? "..." : "Sil"}
                  </button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: 40 }}>
                  Blog yazısı bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </AdminShell>
  );
}
