import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { themeScript } from "@/components/ThemeToggle";
import { site } from "@/content/site";

import "./globals.css";

// Fonts are files in the repository's dependencies (Fontsource, OFL), served
// from the site itself: no request to a font service, at build time or in the
// browser, so a build can't fail on a flaky download.
const newsreader = localFont({
  src: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-newsreader",
});

const plexSans = localFont({
  src: [
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2", weight: "500" },
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2", weight: "600" },
  ],
  style: "normal",
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = localFont({
  src: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-plex-mono",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.title}`,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
