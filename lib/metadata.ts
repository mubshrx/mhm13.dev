import type { Metadata, Viewport } from "next";

const domain = "mubshr.sh";
const websiteUrl = `https://${domain}`;
const imageSrc = `${websiteUrl}/images/profile.jpg`;
const defaultTitle = "Mubashir Hassan - Full Stack Developer";
const defaultDescription =
  "I work primarily in the JavaScript/TypeScript ecosystem using React.js, Next.js, Node.js, and other modern technologies to create digital experiences — one commit at a time 💥";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Mubashir Hassan",
  },
  description: defaultDescription,
  keywords: [
    "Mubashir Hassan",
    "mubshrx",
    "mhm13dev",
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
    "Lahore",
    "Software Developer",
    "Web Developer",
    "Tech Lead",
    "Kwanso",
  ],
  authors: [{ name: "Mubashir Hassan" }],
  creator: "Mubashir Hassan",
  metadataBase: new URL(websiteUrl),
  openGraph: {
    type: "article",
    title: defaultTitle,
    description: defaultDescription,
    url: websiteUrl,
    siteName: domain,
    locale: "en_US",
    images: [
      {
        url: imageSrc,
        width: 630,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@mubshrx",
    images: [
      {
        url: imageSrc,
        width: 630,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/favicons/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-57x57.png",
      sizes: "57x57",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-60x60.png",
      sizes: "60x60",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-72x72.png",
      sizes: "72x72",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-76x76.png",
      sizes: "76x76",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-120x120.png",
      sizes: "120x120",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-144x144.png",
      sizes: "144x144",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicons/android-icon-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicons/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const links = {
  github: "https://github.com/mubshrx",
  linkedin: "https://linkedin.com/in/mubshrx",
  x: "https://x.com/mubshrx",
  email: "hi.mubshr@gmail.com",
};
