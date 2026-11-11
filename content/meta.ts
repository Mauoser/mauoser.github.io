import type { Metadata } from "next";

import { site } from "./site";

const OG_IMAGE = {
  url: "/images/og.jpg",
  width: 1200,
  height: 630,
  alt: "Rei Zhang: Founder of Neetter. I take a product from user research to shipped code.",
};

/**
 * A page's metadata, whole. Next replaces a parent's openGraph object rather
 * than merging it, so every page states its image, URL and type again here.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.title}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
