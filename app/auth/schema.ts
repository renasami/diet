import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "入力してください",
      invalid_type_error: "正しい形式で入力してください",
    })
    .email("メールアドレスの形式で入力してください"),
  password: z.string({ required_error: "入力してください" }),
});
