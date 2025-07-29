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
  title: "Christian | CS Student & AI Developer",
  description: "Computer Science student at Rice University focused on AI. Building production-grade tools with real utility that solve meaningful problems.",
  keywords: [
    "Christian",
    "Computer Science",
    "Rice University", 
    "AI Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AI Tools",
    "Production Grade",
    "Portfolio"
  ],
  authors: [{ name: "Christian" }],
  creator: "Christian",
  openGraph: {
    title: "Christian | CS Student & AI Developer",
    description: "Computer Science student at Rice University focused on AI. Building production-grade tools with real utility.",
    url: "https://christian-portfolio.vercel.app", // TODO: Update with actual domain
    siteName: "Christian's Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian | CS Student & AI Developer",
    description: "Computer Science student at Rice University focused on AI. Building production-grade tools with real utility.",
    creator: "@christian", // TODO: Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
