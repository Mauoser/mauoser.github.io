import { caseStudies } from "@/content/caseStudies";
import { roles, schools } from "@/content/experience";
import { neetter, roomalize, site } from "@/content/site";

import { ArrowRight, ArrowUpRight, DocumentIcon, MailIcon } from "./Icons";

/** Resume, LinkedIn, Email, GitHub: the same four everywhere. */
export function ContactRow() {
  return (
    <ul className="contact-row" aria-label="Contact and links">
      <li>
        <a className="pill pill--primary" href="/cv/">
          <DocumentIcon />
          Resume
        </a>
      </li>
      <li>
        <a className="pill" href={site.linkedin}>
          LinkedIn
          <ArrowUpRight />
        </a>
      </li>
      <li>
        <a className="pill" href={`mailto:${site.email}`}>
          <MailIcon />
          Email
        </a>
      </li>
      <li>
        <a className="pill" href={site.github}>
          GitHub
          <ArrowUpRight />
        </a>
      </li>
    </ul>
  );
}

/** The three case studies as cards. The first, club events, spans the row
 *  and says what each half covers. */
export function CaseStudyCards({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="cards">
      {caseStudies.map((study, i) => (
        <li key={study.slug}>
          <article className={i === 0 ? "card card--featured" : "card"}>
            <div className="card-main">
              <Heading className="card-title">
                <a href={study.href}>
                  {study.title}
                  <ArrowRight />
                </a>
              </Heading>
              <p>{study.summary}</p>
              <ul className="tags" aria-label="Covers">
                {study.covers.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            {i === 0 && (
              <dl className="card-halves">
                <div>
                  <dt>Product</dt>
                  <dd>{study.product}</dd>
                </div>
                <div>
                  <dt>Engineering</dt>
                  <dd>{study.engineering}</dd>
                </div>
              </dl>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}

/** The case studies as a list for an entry page, each linking to one half. */
export function CaseStudyEntries({ half }: { half: "product" | "engineering" }) {
  return (
    <ul className="entries">
      {caseStudies.map((study) => (
        <li key={study.slug} className="entry">
          <h3 className="entry-title">{study.title}</h3>
          <div className="entry-body">
            <p>{half === "product" ? study.product : study.engineering}</p>
            <a className="text-link" href={`${study.href}#${half}`}>
              {half === "product" ? "Read the product side" : "Read the engineering side"}
              <ArrowRight />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Neetter and Roomalize: the only two projects. */
export function ProjectList({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="projects">
      <li className="project">
        <div className="project-shot">
          <img
            src="/images/neetter-web.webp"
            alt="Neetter on the web: the side menu, a feed of posts tagged with games, and trending games."
            width={1000}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>
        <Heading>{neetter.name}</Heading>
        <p>
          {neetter.oneLine} {neetter.live}
        </p>
        <p className="meta">
          Founder · Product &amp; Engineering · {neetter.dates}
        </p>
        <p className="meta">{neetter.stack}</p>
        <a className="text-link" href={neetter.url}>
          neetter.com
          <ArrowUpRight className="arrow" />
        </a>
      </li>
      <li className="project">
        <div className="project-shot">
          <img
            src="/images/roomalize.webp"
            alt="Roomalize's landing page: “Turn 2D floor plans into furnished 3D spaces”, with a Start building button."
            width={1000}
            height={625}
            loading="lazy"
            decoding="async"
          />
        </div>
        <Heading>{roomalize.name}</Heading>
        <p>{roomalize.oneLine}</p>
        <p className="meta">Creator &amp; Developer · {roomalize.dates}</p>
        <p className="meta">{roomalize.stack}</p>
        <p className="inline-links">
          <a className="text-link" href={roomalize.url}>
            roomalize.vercel.app
            <ArrowUpRight className="arrow" />
          </a>
          <a className="text-link" href={roomalize.repo}>
            Source on GitHub
            <ArrowUpRight className="arrow" />
          </a>
        </p>
      </li>
    </ul>
  );
}

/** Roles, newest first, each with bullets written for the page's reader. */
export function RoleList({ bullets }: { bullets: Readonly<Record<string, readonly string[]>> }) {
  return (
    <ul className="roles">
      {roles.map((role) => (
        <li key={role.title} className="role">
          <p className="role-dates">{role.dates}</p>
          <div>
            <p className="role-title">{role.title}</p>
            <p className="role-org">
              {role.orgUrl ? <a href={role.orgUrl}>{role.org}</a> : role.org} · {role.place}
            </p>
            {bullets[role.org] && (
              <ul>
                {bullets[role.org]!.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function SchoolList() {
  return (
    <ul className="roles">
      {schools.map((s) => (
        <li key={s.school} className="role">
          <p className="role-dates">{s.dates}</p>
          <div>
            <p className="role-title">{s.degree}</p>
            <p className="role-org">
              {s.school}, {s.unit} · {s.place} · GPA {s.gpa}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
