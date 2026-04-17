"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ToastProvider, useToast } from "./Toast";

const nav = [
  { href: "/admin/bloglar", label: "Blog Yazıları" },
  { href: "/admin/kategoriler", label: "Kategoriler" },
];

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const toast = useToast();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    toast.info("Çıkış yapıldı");
    setTimeout(() => router.push("/admin/login"), 500);
  };

  return (
    <aside className="admin-sidebar">
      <h2>Sigorta Starı</h2>
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname.startsWith(item.href) ? "active" : ""}
        >
          {item.label}
        </Link>
      ))}
      <div className="sep" />
      <Link href="/" target="_blank">Siteyi Gör</Link>
      <a onClick={handleLogout} style={{ cursor: "pointer" }}>
        Çıkış Yap
      </a>
    </aside>
  );
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <div className="admin-layout">
        <Sidebar />
        <main className="admin-main">{children}</main>
      </div>
    </ToastProvider>
  );
}
