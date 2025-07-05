import { getDocuments } from "@/lib/doc";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocuCraft - A Documentation Platform by Protocol Labs",
  description:
    "DocuCraft is a documentation platform built by Protocol Labs, designed to help you create, manage, and share your documentation with ease.",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
