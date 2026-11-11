import { CaseStudyEntries, ContactRow, RoleList, SchoolList } from "@/components/Blocks";
import { Page } from "@/components/SiteChrome";
import { pageMeta } from "@/content/meta";

export const metadata = pageMeta({
  title: "Product",
  description:
    "Rei Zhang's product work at Neetter: user research, decisions written down with their reasons, gated launches, and the results. Three case studies, product side first.",
  path: "/product/",
});

const practice: readonly { term: string; detail: string }[] = [
  {
    term: "Research",
    detail:
      "Moderated task sessions, interviews and guided tests. Each finding is checked against the product before it becomes work.",
  },
  {
    term: "Decisions in writing",
    detail:
      "Every feature starts as a written plan that names its open decisions, with options and a recommendation for each. The reasons stay in the plan after the call is made.",
  },
  {
    term: "Launching",
    detail:
      "New features ship switched off behind a flag and go on when they’re ready, sometimes behind a measured gate: the game import waited for a 95% match rate.",
  },
  {
    term: "Measuring",
    detail:
      "PostHog analytics and retention by cohort, with the founders’ and official accounts left out of every real-user number.",
  },
  {
    term: "Pricing and packaging",
    detail:
      "Where the line between free and Pro sits, and why: Pro adds extras for the people who want them, and never sells reach or safety.",
  },
  {
    term: "Access and language",
    detail:
      "24 interface languages, color contrast that meets WCAG AA, and accessible names on icon-only buttons.",
  },
  {
    term: "Tools",
    detail: "Figma, Jira, Trello, Dovetail, PostHog, Google Workspace, Microsoft Office.",
  },
];

const bullets: Readonly<Record<string, readonly string[]>> = {
  Neetter: [
    "Founded and launched Neetter, a social network for gamers, live on the web, the App Store and Google Play.",
    "Ran a moderated usability study (five task sessions, two interviews) and had all four sets of its fixes on the web within two days of the report.",
    "Answered the cold start with the player’s own library: account linking that fills a new profile, held back until 95% of played titles matched the catalogue.",
    "Drew the line between free and Pro, including Pro’s extras for clubs, so paying never buys an event more reach.",
    "Shipped clubs and club events, Find players, reviews, game shelves and a daily game-guessing puzzle, in 24 languages.",
  ],
  "Northeastern University, D’Amore-McKim School of Business": [
    "Supported faculty with lesson planning, research, presentations, lecture development, grading, attendance, documentation and course preparation.",
    "Collaborated on academic research and instructional materials while supporting day-to-day course operations.",
  ],
  "Gaba Corporation": [
    "Delivered 150+ conversational and business English lessons to working professionals and students.",
    "Adapted instruction to individual goals and learning styles, strengthening communication skills and learner confidence.",
  ],
};

export default function ProductPage() {
  return (
    <Page current="product">
      <div className="wrap">
        <header className="page-head">
          <h1 className="h1">Product work</h1>
          <p className="lede">
            I find the problem with the people who have it, write the decision down with its
            options, and hold a launch until a number says it’s ready. Each case study below opens
            on its product half.
          </p>
          <ContactRow />
        </header>

        <section className="section" aria-labelledby="studies-title">
          <div className="section-head">
            <h2 id="studies-title" className="h2">
              Case studies
            </h2>
            <p>
              Each has the problem, what users showed, the decision and why, what shipped, and the
              result.
            </p>
          </div>
          <CaseStudyEntries half="product" />
        </section>

        <section className="section" aria-labelledby="practice-title">
          <div className="section-head">
            <h2 id="practice-title" className="h2">
              How I work
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
