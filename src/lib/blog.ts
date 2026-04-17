import { supabase } from "./supabase";

export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  short_content: string;
  detail_content: string;
  image: string | null;
  is_popular: boolean;
  published_date: string;
  created_at: string;
  updated_at: string;
  category: BlogCategory;
}

interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  short_content: string;
  detail_content: string;
  image: string | null;
  is_popular: boolean;
  published_date: string;
  created_at: string;
  updated_at: string;
  blog_categories: { id: string; slug: string; name: string };
}

function mapRow(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    meta_title: row.meta_title,
    short_content: row.short_content,
    detail_content: row.detail_content,
    image: row.image,
    is_popular: row.is_popular,
    published_date: row.published_date,
    created_at: row.created_at,
    updated_at: row.updated_at,
    category: row.blog_categories,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(id, slug, name)")
    .order("published_date", { ascending: false });

  if (error) throw error;
  return (data as BlogPostRow[]).map(mapRow);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(id, slug, name)")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return mapRow(data as BlogPostRow);
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const { data: cat } = await supabase
    .from("blog_categories")
    .select("id")
    .eq("slug", categorySlug)
    .single();

  if (!cat) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(id, slug, name)")
    .eq("category_id", cat.id)
    .order("published_date", { ascending: false });

  if (error) return [];
  return (data as BlogPostRow[]).map(mapRow);
}

export async function getPopularPosts(limit = 5): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(id, slug, name)")
    .eq("is_popular", true)
    .order("published_date", { ascending: false })
    .limit(limit);

  if (error) return [];
  return (data as BlogPostRow[]).map(mapRow);
}

export async function getRelatedPosts(categoryId: string, excludeSlug: string, limit = 3): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(id, slug, name)")
    .eq("category_id", categoryId)
    .neq("slug", excludeSlug)
    .order("published_date", { ascending: false })
    .limit(limit);

  if (error) return [];
  return (data as BlogPostRow[]).map(mapRow);
}

export async function getAllCategories(): Promise<BlogCategory[]> {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name");

  if (error) return [];
  return data;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });
}
