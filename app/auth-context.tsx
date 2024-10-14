// app/auth-context.tsx
"use client";

import { createContext, useContext } from "react";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/supabaseServerClient";

interface SupabaseContext {
  data:
    | {
        user: User;
      }
    | {
        user: null;
      };
}

const Context = createContext<SupabaseContext | undefined>(undefined);

export const SupabaseProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
};

export const useSupabase = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};
