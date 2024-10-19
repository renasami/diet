"use client";
import { useLoginForm } from "./useLoginForm";
import { AuhenticateForm } from "@/components/organisms/AuthenticateForm";
import { useRouter } from "next/navigation";


export default function LoginPage() {
	const router = useRouter()
	const { form, fields } = useLoginForm();
	const handleMoveToRegister = () => {
		router.push("/auth/register")
	}

	return (
		<AuhenticateForm
			form={form}
			fields={fields}
			onMove={handleMoveToRegister}
			type="login"
		/>
	);
}
