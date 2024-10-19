"use client";
import { login } from "./actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "./schema";

export const useLoginForm = () => {
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
    onSubmit: async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      await login(formData);
    },
    shouldValidate: "onBlur",
  });

  return {
    form,
    fields,
  };
};
