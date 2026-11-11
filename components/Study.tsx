import { caseStudies } from "@/content/caseStudies";

import { ArrowLeft, ArrowRight } from "./Icons";

/** The top of a case study: title, the one-paragraph version, a few facts,
 *  and the two halves to jump to. */
export function StudyHead({
  title,
  lede,
  facts,
}: {
  title: string;
  lede: React.ReactNode;
  facts: readonly { term: string; detail: React.ReactNode }[];
}) {
  return (
    <header className="page-head">
      <a className="back-link" href="/#case-studies">
        <ArrowLeft />
        All case studies
      </a>
      <h1 className="h1">{title}</h1>
      <p className="lede">{lede}</p>
      <ul className="jump" aria-label="Jump to">
        <li>
          <a className="pill" href="#product">
            Product
          </a>
        </li>
        <li>
          <a className="pill" href="#engineering">
            Engineering
          </a>
        </li>
      </ul>
      <dl className="facts">
        {facts.map((f) => (
          <div key={f.term}>
            <dt>{f.term}</dt>
            <dd>{f.detail}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

/** One half of a case study, with its own anchor. */
export function Part({
  id,
  title,
  intro,
  children,
}: {
  id: "product" | "engineering";
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="study-part" id={id} aria-labelledby={`${id}-title`}>
      <div className="part-head">
        <h2 id={`${id}-title`} className="h2">
          {title}
        </h2>
        <p>{intro}</p>
      </div>
      {children}
    </section>
  );
}

/** A titled block inside a half: the title in the left column on wide screens. */
export function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="block">
      <h3 className="h3">{title}</h3>
      <div className="block-body">{children}</div>
    </div>
  );
}

/** The end of a case study: the next one, and the entry page for each half. */
export function NextUp({ slug }: { slug: string }) {
  const i = caseStudies.findIndex((s) => s.slug === slug);
  const next = caseStudies[(i + 1) % caseStudies.length]!;
  return (
    <nav className="next-up" aria-label="More">
      <div>
        <p className="meta">Next case study</p>
        <a className="text-link" href={next.href}>
          {next.title}
          <ArrowRight />
        </a>
      </div>
      <div>
        <p className="meta">All three, by half</p>
        <p className="inline-links">
          <a className="text-link" href="/product/">
            Product
            <ArrowRight />
          </a>
          <a className="text-link" href="/engineering/">
            Engineering
            <ArrowRight />
          </a>
        </p>
      </div>
    </nav>
  );
}
