import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import {
  description,
  domain,
  handle,
  name,
  title,
  websiteUrl,
} from "@/lib/identity";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${name}`,
  },
  description,
  keywords: [
    name,
    handle,
    "mhm13dev",
    "Software Engineer",
    "Product Engineer",
    "AI Agents",
    "Agentic Development",
    "Full Stack Developer",
    "TypeScript",
    "JavaScript",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "Postgres",
    "PHP",
    "Laravel",
    "Pakistan",
    "Mansehra",
    "Lahore",
    "CredibleX",
    "Kwanso",
    "Tech Lead",
  ],
  authors: [{ name }],
  creator: name,
  metadataBase: new URL(websiteUrl),
  openGraph: {
    type: "article",
    title,
    description,
    url: websiteUrl,
    siteName: domain,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: `@${handle}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
