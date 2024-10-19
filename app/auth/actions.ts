"use server";

import { createClient } from "@/lib/supabase/supabaseServerClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { loginSchema } from "./schema";
import { parseWithZod } from "@conform-to/zod";
const supabase = createClient();

export async function login(formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply(); // バリデーションエラー時の応答
  }

  const { email, password } = submission.value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply(); // バリデーションエラー時の応答
  }

  const { email, password } = submission.value;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
