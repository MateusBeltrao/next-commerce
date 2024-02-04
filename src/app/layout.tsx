import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next E-Commerce 14",
  description: "Next E-commerce utilizando a versão 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <main className="bg-slate-700 h-screen p-16">
        {children}
        </main>
       
      </body>
    </html>
  );
}
