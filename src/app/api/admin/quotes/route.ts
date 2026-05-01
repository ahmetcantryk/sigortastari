export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const insuranceType = searchParams.get("insurance_type") || "";

  let query = supabaseAdmin
    .from("quote_submissions")
    .select(
      "id, name_surname, tc_kimlik_no, date_of_birth, phone, email, insurance_type, plaka, seri_no, source_path, kvkk_accepted, ip_address, user_agent, mail_sent, mail_error, mail_sent_at, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(500);

  if (search) {
    query = query.or(
      `name_surname.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,plaka.ilike.%${search}%`
    );
  }
  if (insuranceType) {
    query = query.eq("insurance_type", insuranceType);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
