import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import MEE6 from "../public/MEE6 Slander web.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEE6 Slander",
  description: "The website for MEE6 Slander",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
