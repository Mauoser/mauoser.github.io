import { CaseStudyEntries, ContactRow, RoleList, SchoolList } from "@/components/Blocks";
import { ArrowUpRight } from "@/components/Icons";
import { Page } from "@/components/SiteChrome";
import { pageMeta } from "@/content/meta";
import { site } from "@/content/site";

export const metadata = pageMeta({
  title: "Engineering",
  description:
    "Rei Zhang's engineering work at Neetter: a Next.js web app, React Native apps and a Node.js and PostgreSQL API in one TypeScript monorepo. Three case studies, engineering side first.",
  path: "/engineering/",
});

const stack: readonly { term: string; detail: string }[] = [
  { term: "Web", detail: "Next.js (App Router), React, TypeScript and Tailwind CSS, on Vercel." },
  { term: "Mobile", detail: "React Native with Expo, for iOS and Android." },
  {
    term: "API",
    detail: "Node.js and Express in TypeScript, with Socket.io for real-time messaging, on Fly.io.",
  },
  { term: "Data", detail: "PostgreSQL with Prisma, and Redis." },
  {
    term: "Media and payments",
    detail: "Cloudflare R2 for storage, Mux for video, Stripe, and Apple and Google in-app purchases.",
  },
];

const practice: readonly { term: string; detail: string }[] = [
  {
    term: "One codebase, three apps",
    detail:
      "A monorepo shares TypeScript types, validation schemas and design tokens across the web app, the mobile apps and the API.",
  },
  {
    term: "Correct under concurrency",
    detail:
      "Anything two requests can race on runs in a serializable transaction that retries on conflict, with race tests that fail if it ever stops doing so.",
  },
  {
    term: "A performance budget in the build",
    detail:
      "Every web route’s initial JavaScript is measured on each build, and a route that grows past a small allowance fails the check until the growth is reviewed and recorded.",
  },
  {
    term: "Tests that can fail",
    detail:
      "Guards are mutation-checked: I break the code they protect on purpose, to see them fail.",
  },
  {
    term: "Security",
    detail:
      "Input validation, rate limiting, NSFW scanning of uploaded media, and protections against XSS and SSRF.",
  },
  {
    term: "Shipping safely",
    detail:
      "Features ship switched off behind flags, and older app builds are only sent what they know how to draw.",
  },
  {
    term: "Every language, server too",
    detail:
      "24 interface languages, and the API’s own error messages and push notifications go out in the reader’s language.",
  },
];

const bullets: Readonly<Record<string, readonly string[]>> = {
  Neetter: [
    "Designed and built Neetter across web, iOS, Android, the API, the database, infrastructure, CI/CD and app distribution; live at neetter.com, on the App Store and on Google Play.",
    "Architected a shared monorepo across Next.js, React Native and Node.js, sharing TypeScript types, validation schemas and design tokens.",
    "Built real-time direct messaging, notifications, media uploads, game logging and reviews, Find players posts, club events and a daily game-guessing puzzle, using Socket.io, Redis, PostgreSQL and third-party APIs.",
    "Integrated Stripe subscriptions, Apple and Google in-app purchases, OAuth sign-in with Google, Discord, Twitch and Apple, Firebase Cloud Messaging, IGDB game data, Mux video and Klipy GIFs and stickers.",
    "Linked Steam, Xbox and RetroAchievements accounts with a daily library sync and catalogue matching, and took a busy game’s feed from 410–700 ms to a 167 ms median on the server.",
  ],
  "Northeastern University, D’Amore-McKim School of Business": [
    "Supported faculty with lesson planning, research, presentations, lecture development, grading, attendance, documentation and course preparation.",
  ],
  "Gaba Corporation": [
    "Delivered 150+ conversational and business English lessons to working professionals and students.",
  ],
};

export default function EngineeringPage() {
  return (
    <Page current="engineering">
      <div className="wrap">
        <header className="page-head">
          <h1 className="h1">Engineering work</h1>
          <p className="lede">
            I build across the stack: a Next.js web app, React Native apps for iOS and Android,
            and the Node.js API and PostgreSQL database behind them, in one TypeScript monorepo.
            Each case study below opens on its engineering half.
          </p>
          <ContactRow />
        </header>

        <section className="section" aria-labelledby="studies-title">
          <div className="section-head">
            <h2 id="studies-title" className="h2">
              Case studies
            </h2>
            <p>Each has the architecture, the trade-offs, and how it performs.</p>
          </div>
          <CaseStudyEntries half="engineering" />
        </section>

        <section className="section" aria-labelledby="stack-title">
          <div className="section-head">
            <h2 id="stack-title" className="h2">
              Stack
            </h2>
          </div>
          <dl className="defs">
            {stack.map((p) => (
              <div key={p.term}>
                <dt>{p.term}</dt>
                <dd>{p.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section" aria-labelledby="practice-title">
          <div className="section-head">
            <h2 id="practice-title" className="h2">
              How I build
            </h2>
          </div>
          <dl className="defs">
            {practice.map((p) => (
              <div key={p.term}>
                <dt>{p.term}</dt>
                <dd>{p.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section" aria-labelledby="code-title">
          <div className="section-head">
            <h2 id="code-title" className="h2">
              Code
            </h2>
          </div>
          <div className="prose">
            <p>
              Neetter’s code is private. Roomalize, and this site, are public on GitHub.
            </p>
            <p>
              <a className="text-link" href={site.github}>
                github.com/Mauoser
                <ArrowUpRight className="arrow" />
              </a>
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="experience-title">
          <div className="section-head">
            <h2 id="experience-title" className="h2">
              Experience
            </h2>
            <p>
              The full history is on the <a href="/cv/">CV</a>.
            </p>
          </div>
          <RoleList bullets={bullets} />
        </section>

        <section className="section" aria-labelledby="education-title">
          <div className="section-head">
            <h2 id="education-title" className="h2">
              Education
            </h2>
          </div>
          <SchoolList />
        </section>
      </div>
    </Page>
  );
}
