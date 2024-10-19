"use client";

import { Button, Input } from "@mantine/core";
import { useLoginForm } from "./useLoginForm";
import { useState } from "react";
import { getFormProps, getInputProps } from "@conform-to/react";

export default function LoginPage() {
	const { form, fields } = useLoginForm();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // デフォルトのリロードを防ぐ
		try {
			onSubmit(event); // フォームの送信処理を呼び出す
		} catch (error) {
			setErrorMessage("An unexpected error occurred.");
			console.log(error)
		}
	};

	return (
		<form {...getFormProps(form)} noValidate>
			<label htmlFor="email">Email:</label>
			<Input
				// id="email"
				// name="email"
				// type="email"
				// required
				{...getInputProps(fields.email, {
					type: "email"
				})}
				error={fields.email?.errors}
			/>
			<label htmlFor="password">Password:</label>
			<Input
				{...getInputProps(fields.password, {
					type: "password"
				})}
				error={fields.password?.errors}
			/>
			{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
			<Button type="submit">Log in</Button>
		</form>
	);
}
