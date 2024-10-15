import type { Metadata } from "next";
// Theme
import ThemeProviderClient from "./theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProviderClient>
        <body>{children}</body>
      </ThemeProviderClient>
    </html>
  );
}
