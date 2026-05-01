import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [576, 768, 992, 1200, 1400],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün cache
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ofnsvhoereogtscazese.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "storage.acerapps.io",
        pathname: "/**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
