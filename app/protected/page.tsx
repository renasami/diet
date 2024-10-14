import { createClient } from "@/lib/supabase/supabaseServerClient";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <p>Hello {data.user.email}</p>;
}
