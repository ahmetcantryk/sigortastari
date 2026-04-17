import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog - Sigorta Starı",
  description:
    "Sigorta sektörü hakkında en güncel bilgiler, ipuçları ve rehberler.",
  alternates: { canonical: "https://www.sigortastari.com/bloglar" },
};

export default function BlogPage() {
  redirect("/bloglar");
}
