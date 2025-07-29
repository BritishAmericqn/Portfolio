import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SkipLink from "@/components/SkipLink";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Benjamin Royston | Developer & AI Engineer",
  description: "I build tools with Real Utility—projects I actually use, built on time and to spec. Available for technical teams who value execution velocity.",
  keywords: ["developer", "AI engineer", "fullstack", "real utility", "technical founder"],
  authors: [{ name: "Benjamin Royston" }],
  creator: "Benjamin Royston",
  metadataBase: new URL("https://benjaminroyston.com"), // TODO: Update with actual domain
  openGraph: {
    title: "Benjamin Royston | Developer & AI Engineer",
    description: "I build tools with Real Utility—projects I actually use, built on time and to spec.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Royston | Developer & AI Engineer",
    description: "I build tools with Real Utility—projects I actually use, built on time and to spec.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <SkipLink />
        <SmoothScroll />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
