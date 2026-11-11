import { ProjectList } from "@/components/Blocks";
import { Page } from "@/components/SiteChrome";
import { pageMeta } from "@/content/meta";

export const metadata = pageMeta({
  title: "Projects",
  description: "Rei Zhang's projects: Neetter, a social network for gamers, and Roomalize.",
  path: "/portfolio/",
});

/** The old site's Portfolio page, kept at its address. */
export default function Portfolio() {
  return (
    <Page current="other">
      <div className="wrap">
        <header className="page-head">
          <h1 className="h1">Projects</h1>
          <p className="lede">
            Two products I built and shipped. For how they were made, start with the{" "}
            <a href="/#case-studies">case studies</a>.
          </p>
        </header>
        <section className="section" aria-label="Projects">
          <ProjectList headingLevel={2} />
        </section>
      </div>
    </Page>
  );
}
