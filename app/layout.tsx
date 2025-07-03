import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lyx UI",
  description: "Build your UI your way with Lyx UI",
  authors: [
    {
      name: "Ethan Rodrigues",
      url: "https://github.com/EthanRodrigues001",
    },
  ],
  keywords:
    "ui, design, components, library, tailwind, react, nextjs, shadcn-ui,acternity-ui, fumadocs",
  creator: "Ethan Rodrigues",
  openGraph: {
    title: "Lyx UI",
    description: "Build your UI your way with Lyx UI",
    url: "https://lyxui.wisplabs.xyz",
    siteName: "Lyx UI",
    images: [
      {
        url: "https://lyxui.wisplabs.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lyx UI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyx UI",
    description: "Build your UI your way with Lyx UI",
    images: [
      {
        url: "https://lyxui.wisplabs.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lyx UI Open Graph Image",
      },
    ],
    site: "@LyxUI",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
