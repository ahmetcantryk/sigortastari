"use client";

import QuoteForm from "@/components/forms/QuoteForm";

interface ProductDetailClientProps {
  preselectedProduct: string;
  slug: string;
}

export default function ProductDetailClient({
  preselectedProduct,
  slug,
}: ProductDetailClientProps) {
  const needsPlaka = slug === "trafik-sigortasi" || slug === "arac-kasko-sigortasi";

  return (
    <QuoteForm
      preselectedProduct={preselectedProduct}
      showPlaka={needsPlaka}
      showSerino={needsPlaka}
    />
  );
}
