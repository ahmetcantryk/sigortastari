import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/admin-auth";

function extractIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return "";
}

function isLocalIp(ip: string): boolean {
  return (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip === "::ffff:127.0.0.1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("172.17.") ||
    ip.startsWith("172.18.") ||
    ip.startsWith("172.19.") ||
    ip.startsWith("172.2") ||
    ip.startsWith("172.30.") ||
    ip.startsWith("172.31.")
  );
}

function isIpAllowed(request: NextRequest): boolean {
  // ADMIN_ALLOWED_IPS boşsa veya yoksa erişim KAPALI
  const raw = process.env.ADMIN_ALLOWED_IPS || "";
  const allowed = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  // localhost dev için açık
  const allowLocal = process.env.ADMIN_ALLOW_LOCALHOST !== "false";

  const ip = extractIp(request);
  if (allowLocal && (ip === "" || isLocalIp(ip))) return true;
  if (allowed.length === 0) return false;
  return allowed.includes(ip);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminPath = pathname.startsWith("/admin");
  const isAdminApi =
    pathname.startsWith("/api/admin") && !pathname.startsWith("/api/admin/auth");

  // IP allowlist — login dahil tüm /admin yolları
  if ((isAdminPath || isAdminApi) && !isIpAllowed(request)) {
    if (isAdminApi) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Auth kontrolü (login hariç)
  if (isAdminPath && pathname !== "/admin/login") {
    const token = request.cookies.get("admin_session")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (isAdminApi) {
    const token = request.cookies.get("admin_session")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
