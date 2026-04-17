export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  let query = supabaseAdmin
    .from("blog_posts")
    .select("id, slug, title, short_content, image, is_popular, published_date, created_at, updated_at, category_id, blog_categories(id, slug, name)")
    .order("published_date", { ascending: false });

  if (search) {
    query = query.ilike("title", `%${search}%`);
  }
  if (category) {
    query = query.eq("category_id", category);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .insert({
      slug: body.slug,
      title: body.title,
      meta_title: body.meta_title || null,
      short_content: body.short_content,
      detail_content: body.detail_content,
      image: body.image || null,
      category_id: body.category_id,
      is_popular: body.is_popular || false,
      published_date: body.published_date || new Date().toISOString().split("T")[0],
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
