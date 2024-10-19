"use client";
import { Button, Input } from "@mantine/core";
import { useLoginForm } from "./useLoginForm";
import { getFormProps, getInputProps } from "@conform-to/react";
import { AuhenticateForm } from "@/components/organisms/AuthenticateForm";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
	const router = useRouter()
	const { form, fields } = useLoginForm();
	const handleMoveToRegister = () => {
		router.push("/protected")
	}

	return (
		<AuhenticateForm
			form={form}
			fields={fields}
		/>
	);
}
