import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/",
          "/api/admin/",
          "/login",
          "/teklifler",
        ],
      },
    ],
    sitemap: "https://www.sigortastari.com/sitemap.xml",
    host: "https://www.sigortastari.com",
  };
}
