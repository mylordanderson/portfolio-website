import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anderson Ghany - Programmer & AI Enthusiast",
  description: "Personal portfolio of Anderson Ghany, a passionate programmer learning to build with AI and Next.js, creating innovative solutions that bridge technology and creativity.",
  keywords: ["portfolio", "programmer", "AI", "nextjs", "typescript", "web development", "artificial intelligence"],
  authors: [{ name: "Anderson Ghany" }],
  creator: "Anderson Ghany",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andersonghany.dev",
    title: "Anderson Ghany - Programmer & AI Enthusiast",
    description: "Personal portfolio of Anderson Ghany, a passionate programmer learning to build with AI and Next.js, creating innovative solutions that bridge technology and creativity.",
    siteName: "Anderson Ghany Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Ghany - Programmer & AI Enthusiast",
    description: "Personal portfolio of Anderson Ghany, a passionate programmer learning to build with AI and Next.js, creating innovative solutions that bridge technology and creativity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
