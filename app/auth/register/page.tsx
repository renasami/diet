"use client";
import { AuhenticateForm } from "@/components/organisms/AuthenticateForm";
import { useRouter } from "next/navigation";
import { useRegisterForm } from "./useRegisterForm";

export default function RegisterPage() {
	const router = useRouter()
	const { form, fields } = useRegisterForm();
	const handleMoveToLogin = () => {
		router.push("/auth/login")
	}

	return (
		<AuhenticateForm
			form={form}
			fields={fields}
			onMove={handleMoveToLogin}
			type="register"
		/>
	);
}
