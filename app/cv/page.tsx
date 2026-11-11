import { Page } from "@/components/SiteChrome";
import { pageMeta } from "@/content/meta";

export const metadata = pageMeta({
  title: "CV",
  description:
    "Rei Zhang's CV: founder of Neetter (product and engineering), Northeastern University M.S. in Information Systems, projects and skills.",
  path: "/cv/",
});

/** The CV as it stood on the old site, in HTML. Its facts are unchanged. */
export default function CV() {
  return (
    <Page current="cv">
      <div className="wrap">
        <article className="cv">
          <header className="page-head">
            <h1 className="h1">Rei Zhang</h1>
            <p className="cv-contact">
              <a href="tel:+17815261296">(781) 526-1296</a> |{" "}
              <a href="mailto:zhang.l5@northeastern.edu">zhang.l5@northeastern.edu</a> | Boston, MA
              | <a href="https://zenrei.me">zenrei.me</a> |{" "}
              <a href="https://linkedin.com/in/zenrei">linkedin.com/in/zenrei</a>
            </p>
          </header>

          <section className="cv-section" aria-labelledby="cv-summary">
            <h2 id="cv-summary">Summary</h2>
            <p>
              Software engineer and founder with a background in full-stack web and mobile
              development. Experienced in designing, building, and deploying user-focused products
              end-to-end across frontend, backend, databases, infrastructure, authentication,
              payments, real-time systems, and third-party integrations. Strong problem solver and
              fast learner with experience taking products from idea to production.
            </p>
          </section>

          <section className="cv-section" aria-labelledby="cv-education">
            <h2 id="cv-education">Education</h2>
            <div className="cv-item">
              <div className="cv-item-head">
                <p className="role-title">Northeastern University</p>
                <p className="role-dates">Jan 2025 – Dec 2026 · GPA: 3.84</p>
              </div>
              <p className="role-org">College of Engineering · Boston, MA</p>
              <p>Master of Science in Information Systems</p>
            </div>
            <div className="cv-item">
              <div className="cv-item-head">
                <p className="role-title">Toronto Metropolitan University</p>
                <p className="role-dates">Sep 2017 – Jun 2022 · GPA: 3.4</p>
              </div>
              <p className="role-org">RTA School of Media · Toronto, Canada</p>
              <p>Bachelor of Fine Arts in New Media, Concentration in Computational Media</p>
            </div>
          </section>

          <section className="cv-section" aria-labelledby="cv-work">
            <h2 id="cv-work">Work experience</h2>
            <div className="cv-item">
              <div className="cv-item-head">
                <p className="role-title">
                  Neetter — <a href="https://neetter.com">neetter.com</a>
                </p>
                <p className="role-dates">May 2026 – Present</p>
              </div>
              <p className="role-org">Founder · Product &amp; Engineering</p>
              <p className="meta">
                Next.js, TypeScript, React Native (Expo), Node.js/Express, PostgreSQL/Prisma,
                Redis, Socket.io, Stripe
              </p>
              <ul>
                <li>
                  Founded and launched Neetter, a social network for gamers where people can follow
                  games and other people, join communities, share reviews, track what they play,
                  and discover what to play next.
                </li>
                <li>
                  Designed and built the product end-to-end as a solo founder across web, iOS,
                  Android, backend, database, infrastructure, CI/CD, and app distribution; launched
                  at neetter.com, on the App Store, and on Google Play.
                </li>
                <li>
                  Architected a shared monorepo across Next.js, React Native, and Node.js, sharing
                  TypeScript types, validation schemas, and design tokens across web, mobile, and
                  backend applications.
                </li>
                <li>
                  Built real-time direct messaging, notifications, media uploads, game logging and
                  reviews, Find players (looking-for-group) posts, and a daily game-guessing
                  experience using Socket.io, Redis, PostgreSQL, and third-party APIs.
                </li>
                <li>
                  Integrated Stripe subscriptions, Apple and Google in-app purchases, OAuth
                  authentication with Google, Discord, Twitch, and Apple, Firebase Cloud Messaging,
                  IGDB game data, Mux video processing, and Klipy GIFs/stickers.
                </li>
                <li>
                  Implemented security and moderation controls including input validation, rate
                  limiting, NSFW media scanning, and protections against common XSS and SSRF attack
                  vectors.
                </li>
              </ul>
            </div>
            <div className="cv-item">
              <div className="cv-item-head">
                <p className="role-title">
                  Northeastern University, D’Amore-McKim School of Business — Boston, MA
                </p>
                <p className="role-dates">Jan 2026 – Jul 2026</p>
              </div>
              <p className="role-org">Teaching &amp; Research Assistant</p>
              <ul>
                <li>
                  Supported faculty with lesson planning, research, presentations, lecture
                  development, grading, attendance, documentation, and course preparation.
                </li>
                <li>
                  Collaborated on academic research and instructional materials while supporting
                  day-to-day course operations.
                </li>
              </ul>
            </div>
            <div className="cv-item">
              <div className="cv-item-head">
                <p className="role-title">Gaba Corporation — Tokyo, Japan</p>
                <p className="role-dates">Jan 2025 – Aug 2025</p>
              </div>
              <p className="role-org">English Instructor</p>
              <ul>
                <li>
                  Delivered 150+ conversational and business English lessons to working
                  professionals and students.
                </li>
                <li>
                  Adapted instruction to individual goals and learning styles, strengthening
                  communication skills and learner confidence.
                </li>
              </ul>
            </div>
          </section>

          <section className="cv-section" aria-labelledby="cv-projects">
            <h2 id="cv-projects">Projects</h2>
            <div className="cv-item">
              <div className="cv-item-head">
                <p className="role-title">
                  Roomalize — <a href="https://roomalize.vercel.app">roomalize.vercel.app</a>
                </p>
                <p className="role-dates">Jan 2026 – Apr 2026</p>
              </div>
              <p className="role-org">Creator &amp; Developer</p>
              <p className="meta">React, Vite, Tailwind CSS, Puter.js, Gemini AI</p>
              <ul>
                <li>
                  Developed and deployed an AI-powered architectural visualization SaaS that
                  transforms 2D floor plans into photorealistic 3D renders.
                </li>
                <li>
                  Designed a serverless architecture using Puter.js for cloud storage and hosting,
                  integrating Gemini AI into the rendering workflow.
                </li>
              </ul>
            </div>
          </section>

          <section className="cv-section cv-skills" aria-labelledby="cv-skills">
            <h2 id="cv-skills">Skills</h2>
            <div>
              <strong>Languages:</strong> JavaScript | TypeScript | Ruby | Java | Python | SQL
            </div>
            <div>
              <strong>Frontend:</strong> React | Next.js | React Native | HTML | CSS | Tailwind CSS
            </div>
            <div>
              <strong>Backend:</strong> Node.js | Express | Ruby on Rails | PostgreSQL | MongoDB
            </div>
            <div>
              <strong>Infrastructure &amp; Tools:</strong> Redis | Socket.io | Git | GitHub |
              Firebase | Stripe | Vercel | Fly.io | Cloudflare R2 | Mux
            </div>
            <div>
              <strong>AI:</strong> ChatGPT | Claude | Gemini AI
            </div>
          </section>
        </article>
      </div>
    </Page>
  );
}
