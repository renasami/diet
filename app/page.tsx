"use client";

import { useRouter } from "next/navigation";
import { SupabaseProvider, useSupabase } from "./auth-context";

export default function HomePage() {
  const router = useRouter();
  const supabase = useSupabase();
  console.dir(supabase);

  // ログアウト関数
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  const handleMoveProtected = () => {
    router.push("/protected");
  };

  return (
    <SupabaseProvider>
      <div>
        <h1>ホームページ</h1>
        <p>{supabase.data.user?.email}</p>
        <button onClick={handleLogout}>ログアウト</button>
        <button onClick={handleMoveProtected}>プロテクテッド</button>
      </div>
    </SupabaseProvider>
  );
}
