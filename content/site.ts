/**
 * Facts the whole site repeats. Change them here, never on a page: the CV,
 * the home page and the two entry pages must always say the same thing.
 */
export const site = {
  name: "Rei Zhang",
  url: "https://zenrei.me",
  title: "Founder · Product & Engineering",
  headline: "Founder of Neetter. I take a product from user research to shipped code.",
  headlineLines: ["Founder of Neetter.", "I take a product from user research to shipped code."],
  description:
    "Rei Zhang founded Neetter, a social network for gamers, and takes products from user research to shipped code, across product management and software engineering.",
  location:
    "Based in Boston. Canadian citizen, open to relocating to or working remotely in Canada.",
  email: "zhang.l5@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/zenrei/",
  github: "https://github.com/Mauoser",
} as const;

export const neetter = {
  name: "Neetter",
  url: "https://neetter.com",
  dates: "May 2026 – Present",
  oneLine:
    "A social network for gamers: follow games and people, join clubs, review and track what you play, find players, and discover what to play next.",
  live: "Live on the web, the App Store and Google Play.",
  stack:
    "Next.js, TypeScript, React Native (Expo), Node.js and Express, PostgreSQL with Prisma, Redis, Socket.io, Stripe, Cloudflare R2, Mux",
} as const;

export const roomalize = {
  name: "Roomalize",
  url: "https://roomalize.vercel.app",
  repo: "https://github.com/Mauoser/roomalize",
  dates: "Jan 2026 – Apr 2026",
  oneLine:
    "An AI-powered architectural visualization app that turns a 2D floor plan into a photorealistic 3D render.",
  stack: "React, Vite, Tailwind CSS, Puter.js, Gemini AI",
} as const;

/**
 * The proof strip. Each figure is checked against its source, written beside
 * it, before it goes on the page. Nothing here is a user, revenue or growth
 * number.
 */
export const proof = [
  {
    figure: "24",
    label: "interface languages, on the web and in the iOS and Android apps",
    // packages/shared/src/i18n: 24 language catalogues.
  },
  {
    figure: "10,000+",
    label: "games in the catalogue, synced from IGDB every night",
    // services/igdb/sync.ts: the 10,000 most-rated games, plus newer releases.
  },
  {
    figure: "167 ms",
    label: "server time for a busy game’s feed after one query change, down from 410–\u2060700\u00a0ms",
    // Production request logs, 8 Nov 2026: warm median after the ids-first read.
  },
  {
    figure: "2 days",
    label: "from a usability study’s report to all four of its fixes on the web",
    // Report shared 20 Oct 2026; the four fix sets merged 20–21 Oct.
  },
] as const;
