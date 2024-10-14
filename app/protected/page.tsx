"use client";
import { redirect } from "next/navigation";
import { SupabaseProvider, useSupabase } from "../auth-context";

const ProtectedPage = () => {
  // const supabase = useSupabase();

  // if (!supabase.user) {
  //   redirect("/login");
  // }

  return (
    <div>
      <h1>ホームページ</h1>
    </div>
  );
};

export default ProtectedPage;
