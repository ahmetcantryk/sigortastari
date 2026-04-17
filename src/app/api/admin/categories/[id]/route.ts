export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function PUT(request: Request, { params }: Ctx) {
  const { id } = await params;
  const body = await request.json();

  const { data, error } = await supabaseAdmin
    .from("blog_categories")
    .update({ slug: body.slug, name: body.name })
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const { error } = await supabaseAdmin
    .from("blog_posts")
    .select("id")
    .eq("category_id", id)
    .limit(1);

  // Kategoriye ait blog varsa silmeyi engelle
  const { data: posts } = await supabaseAdmin
    .from("blog_posts")
    .select("id")
    .eq("category_id", id)
    .limit(1);

  if (posts && posts.length > 0) {
    return NextResponse.json(
      { error: "Bu kategoriye ait blog yazıları var. Önce onları silin veya taşıyın." },
      { status: 400 }
    );
  }

  const { error: delError } = await supabaseAdmin
    .from("blog_categories")
    .delete()
    .eq("id", id);

  if (delError) return NextResponse.json({ error: delError.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
