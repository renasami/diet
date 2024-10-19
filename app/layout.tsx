import { MantineProvider } from "@mantine/core";
import { SupabaseProvider } from "./auth-context";
import "@mantine/core/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <MantineProvider>
          <SupabaseProvider>{children}</SupabaseProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
