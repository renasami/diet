// app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/supabaseServerClient";



export async function POST() {
  // クッキーからアクセストークンを削除
  cookies().delete("sb-access-token");
  const client = createClient()
  
  if(client.)


  return NextResponse.json({ message: "ログアウト成功" });
}
