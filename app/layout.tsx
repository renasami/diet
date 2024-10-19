"use client"
import { AppShell, Burger, Container, Group, MantineProvider } from "@mantine/core";
import { SupabaseProvider } from "./auth-context";
import { theme } from "@/theme";
import { useDisclosure } from '@mantine/hooks';
import "@mantine/core/styles.css";
import { useState } from "react";

const links = [
	{ link: '/about', label: 'Features' },
	{ link: '/pricing', label: 'Pricing' },
	{ link: '/learn', label: 'Learn' },
	{ link: '/community', label: 'Community' },
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {


	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
			}}
		>
			{link.label}
		</a>
	));



	return (
		<html lang="ja">
			<body>
				<MantineProvider theme={theme}>
					<AppShell
						header={{ height: 60 }}
						navbar={{
							width: 300,
							breakpoint: 'sm',
							collapsed: { mobile: !opened },
						}}
						padding="md"
					>
						<AppShell.Header>
							<Burger
								opened={opened}
								onClick={toggle}
								hiddenFrom="sm"
								size="sm"
							/>
							<div>Logo</div>
						</AppShell.Header>
						<AppShell.Main>
							<SupabaseProvider>
								{children}
							</SupabaseProvider>
						</AppShell.Main>
					</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
