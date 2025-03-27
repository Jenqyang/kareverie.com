import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Kareverie",
  description: "Bringing beautiful visual and software experiences to people.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
  openGraph: {
    title: "Kareverie",
    description:
      "Bringing beautiful visual and software experiences to people.",
    type: "website",
    url: "https://kareverie.com/og.png",
    siteName: "Kareverie",
  },
  twitter: {
    title: "Kareverie",
    description:
      "Bringing beautiful visual and software experiences to people.",
    card: "summary_large_image",
    site: "@Jenqyanghou",
  },
  alternates: {
    canonical: "https://kareverie.com",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
