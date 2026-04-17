"use client";

import { useState, useEffect, use } from "react";
import AdminShell from "@/components/admin/AdminShell";
import PostForm from "@/components/admin/PostForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default function EditPostPage({ params }: Props) {
  const { id } = use(params);
  const [post, setPost] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/posts/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Post bulunamadı");
        return r.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <AdminShell><p>Yükleniyor...</p></AdminShell>;
  if (error) return <AdminShell><p style={{ color: "#ef4444" }}>{error}</p></AdminShell>;
  if (!post) return <AdminShell><p>Post bulunamadı</p></AdminShell>;

  const initialData = {
    id: post.id as string,
    title: post.title as string,
    slug: post.slug as string,
    meta_title: (post.meta_title as string) || "",
    short_content: post.short_content as string,
    detail_content: post.detail_content as string,
    image: (post.image as string) || "",
    category_id: post.category_id as string,
    is_popular: (post.is_popular as boolean) || false,
    published_date: post.published_date as string,
  };

  return (
    <AdminShell>
      <h1>Yazıyı Düzenle</h1>
      <div className="card">
        <PostForm initialData={initialData} isEdit />
      </div>
    </AdminShell>
  );
}
