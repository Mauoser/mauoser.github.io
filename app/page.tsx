import { CaseStudyCards, ContactRow, ProjectList } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { Page } from "@/components/SiteChrome";
import { pageMeta } from "@/content/meta";
import { neetter, proof, site } from "@/content/site";

export const metadata = pageMeta({ description: site.description, path: "/" });

export default function Home() {
  return (
    <Page current="home">
      <div className="wrap">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-text">
            <h1 id="hero-title" className="display">
              <span className="line">{site.headlineLines[0]}</span>{" "}
              <span className="line">{site.headlineLines[1]}</span>
            </h1>
            <p className="lede">
              <a href={neetter.url}>Neetter</a> is a social network for gamers, live on the web,
              the App Store and Google Play. I run its research, decide what it builds, and build
              it: the web app, the iOS and Android apps, and the API behind them.
            </p>
            <ContactRow />
            <p className="location">{site.location}</p>
          </div>
          <img
            className="hero-portrait"
            src="/images/rei.webp"
            alt="Rei Zhang, smiling, outdoors in a navy jacket."
            width={480}
            height={480}
            fetchPriority="high"
          />
        </section>

        <nav className="ways" aria-label="Read it for your role">
          <a className="way" href="/product/">
            <span className="way-title">
              Read it as a product manager
              <ArrowRight />
            </span>
            <p>How I find the problem, make the call, and check that it worked.</p>
          </a>
          <a className="way" href="/engineering/">
            <span className="way-title">
              Read it as an engineer
              <ArrowRight />
            </span>
            <p>How the systems are built, what they trade off, and how fast they run.</p>
          </a>
        </nav>

        <section aria-labelledby="proof-title">
          <h2 id="proof-title" className="visually-hidden">
            In numbers
          </h2>
          <ul className="proof">
            {proof.map((p) => (
              <li key={p.figure}>
                <span className="proof-figure">{p.figure}</span>
                <span className="proof-label">{p.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="case-studies" aria-labelledby="studies-title">
          <div className="section-head">
            <h2 id="studies-title" className="h2">
              Case studies
            </h2>
            <p>Each one has a product half and an engineering half. Read either, or both.</p>
          </div>
          <CaseStudyCards />
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section-head">
            <h2 id="projects-title" className="h2">
              Projects
            </h2>
          </div>
          <ProjectList />
        </section>
      </div>
    </Page>
  );
}
