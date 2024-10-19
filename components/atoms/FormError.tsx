'use client'
import { FC } from "react"
import { Text } from "@mantine/core"

type FormErrorProps = {
	reasons?: string[]
}
export const FormError: FC<FormErrorProps> = ({ reasons }) => {
	if (!reasons || reasons.length === 0) {
		return null;
	}

	console.log("Rendering FormError with reasons:", reasons); // デバッグ用に追加

	return (
		<>
			{
				reasons?.map((item, index) => <Text key={index}>{item}</Text>)
			}
		</>
	)
}
