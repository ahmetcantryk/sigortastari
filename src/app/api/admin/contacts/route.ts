export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";

  let query = supabaseAdmin
    .from("contact_submissions")
    .select(
      "id, name_surname, email, phone, subject, message, source_path, kvkk_accepted, ip_address, user_agent, mail_sent, mail_error, mail_sent_at, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(500);

  if (search) {
    query = query.or(
      `name_surname.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,subject.ilike.%${search}%`
    );
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
