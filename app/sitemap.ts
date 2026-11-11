import type { MetadataRoute } from "next";

import { caseStudies } from "@/content/caseStudies";
import { site } from "@/content/site";

export const dynamic = "force-static";

const UPDATED = new Date("2026-11-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/product/", "/engineering/", ...caseStudies.map((s) => s.href), "/cv/", "/portfolio/"];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: UPDATED,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
