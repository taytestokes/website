import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tayte Stokes",
  description: "Personal website for Tayte Stokes.",
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
