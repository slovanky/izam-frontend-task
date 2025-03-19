import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "./Head";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IZAM - Frontend Task - By: Peter Magdy",
  description: "IZAM - Frontend Task - By: Peter Magdy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={`${dmSans.variable} antialiased bg-[#F5F5F5]`}>{children}</body>
    </html>
  );
}
