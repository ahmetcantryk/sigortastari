"use client";

import AdminShell from "@/components/admin/AdminShell";
import PostForm from "@/components/admin/PostForm";

export default function YeniYaziPage() {
  return (
    <AdminShell>
      <h1>Yeni Blog Yazısı</h1>
      <PostForm />
    </AdminShell>
  );
}
