import { FieldMetadata, FormMetadata, getFormProps, getInputProps } from "@conform-to/react";
import { Anchor, Button, Container, Group, Input, Paper, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import classes from "./AuthenticateForm.module.css";

type AuhenticateFormProps = {
	form: FormMetadata<{
		email: string,
		password: string
	}, string[]>
	fields: Required<{
		email: FieldMetadata<string>
		password: FieldMetadata<string>
	}>
	onMove: () => void
	type: "register" | "login"
}

export const AuhenticateForm: FC<AuhenticateFormProps> = ({
	form,
	fields,
	onMove,
	type
}) => {
	const handleGeneraetMessage = (login: string, register: string) => {
		switch (type) {
			case "login":
				return login
			case "register":
				return register
			default:
				return ""
		}
	}
	const theme = useMantineTheme()
	return (
		<Container size={420} my={40}>
			<Title ta="center" className={classes.title}>
				{handleGeneraetMessage("お帰りなさい！", "初めまして！")}
			</Title>
			<Text c="dimmed" size="sm" ta="center" mt={5}>
				{handleGeneraetMessage("まだアカウントをお持ちでないですか？", "すでにアカウントをお持ちですか？")}
				<Anchor size="sm" component="button" onClick={onMove}>
					{handleGeneraetMessage("新規登録", "ログイン")}
				</Anchor>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md" >
				<form {...getFormProps(form)}>
					<Stack>
						<Input.Wrapper
							label="メールアドレス"
							error={fields.email?.errors?.join(",")}
						>
							<Input
								{...getInputProps(fields.email, {
									type: "email",
								})}
								autoComplete="email"
								radius="md"
							/>
						</Input.Wrapper>
						<Input.Wrapper
							label="パスワード"
							error={fields.password?.errors?.join(",")}
						>
							<Input
								{...getInputProps(fields.password, {
									type: "password",
								})}
								autoComplete="current-password"
								radius="md"
							/>
						</Input.Wrapper>
					</Stack>

					<Group justify="space-between" mt="xl">
						<Button type="submit" radius={"xl"}>
							{handleGeneraetMessage("ログイン", "新規登録")}
						</Button>
					</Group>
				</form>
			</Paper>
		</Container>
	)
}
