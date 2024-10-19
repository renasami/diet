"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { login } from "../actions";
import { loginSchema } from "../schema";

export const useRegisterForm = () => {
  const [form, fields] = useForm({
    onValidate({ formData }) {
      const result = parseWithZod(formData, { schema: loginSchema });
      return result;
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
