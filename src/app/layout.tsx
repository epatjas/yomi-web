import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yomi - Read, grow and evolve",
  description: "Smart reading companion that grows with your child",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
