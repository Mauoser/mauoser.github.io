import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rei Zhang",
    short_name: "Rei Zhang",
    description: "Founder of Neetter. Product and engineering.",
    start_url: "/",
    display: "browser",
    background_color: "#f7f7f5",
    theme_color: "#0e0e0d",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
