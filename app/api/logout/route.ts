// app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // クッキーからアクセストークンを削除
  cookies().delete("sb-access-token");

  return NextResponse.json({ message: "ログアウト成功" });
}
