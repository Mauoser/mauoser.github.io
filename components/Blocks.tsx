import { caseStudies } from "@/content/caseStudies";
import { roles, schools } from "@/content/experience";
import { neetter, roomalize, site } from "@/content/site";

import { ArrowRight, ArrowUpRight, WithArrow } from "./Icons";

/** Resume, LinkedIn, Email, GitHub: the same four everywhere. A row of joined
 *  cells, or, with `stack`, a column of them. */
export function ContactRow({ stack = false }: { stack?: boolean }) {
  return (
    <ul className={stack ? "cells cells--stack" : "cells"} aria-label="Contact and links">
      <li>
        <a className="cell cell--solid" href="/cv/">
          Resume
          <ArrowRight />
        </a>
      </li>
      <li>
        <a className="cell" href={site.linkedin}>
          LinkedIn
          <ArrowUpRight />
        </a>
      </li>
      <li>
        <a className="cell" href={`mailto:${site.email}`}>
          Email
        </a>
      </li>
      <li>
        <a className="cell" href={site.github}>
          GitHub
          <ArrowUpRight />
        </a>
      </li>
    </ul>
  );
}

const two = (i: number) => String(i + 1).padStart(2, "0");

/** The three case studies as a numbered index. The first, club events, leads
 *  and says what each half covers. Each row is one link. */
export function CaseStudyIndex({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ol className="index">
      {caseStudies.map((study, i) => (
        <li key={study.slug} className={i === 0 ? "index-row index-row--lead" : "index-row"}>
          <span className="index-num" aria-hidden="true">
            {two(i)}
          </span>
          <div className="index-main">
            <Heading className="index-title">
              <a className="row-link" href={study.href}>
                <WithArrow text={study.title} />
              </a>
            </Heading>
            <p className="index-summary">{study.summary}</p>
            {i === 0 && (
              <dl className="index-halves">
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
            <ul className="tags" aria-label="Covers">
              {study.covers.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** The case studies as an index for an entry page, each row linking to one half. */
export function CaseStudyEntries({ half }: { half: "product" | "engineering" }) {
  return (
    <ol className="index">
      {caseStudies.map((study, i) => (
        <li key={study.slug} className="index-row">
          <span className="index-num" aria-hidden="true">
            {two(i)}
          </span>
          <div className="index-main">
            <h3 className="index-title">{study.title}</h3>
            <p className="index-summary">
              {half === "product" ? study.product : study.engineering}
            </p>
            <a className="text-link row-link" href={`${study.href}#${half}`}>
              <WithArrow
                text={half === "product" ? "Read the product side" : "Read the engineering side"}
              />
            </a>
          </div>
        </li>
      ))}
    </ol>
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
        <p className="meta">Founder · Product &amp; Engineering · {neetter.dates}</p>
        <p className="meta">{neetter.stack}</p>
        <a className="text-link" href={neetter.url}>
          neetter.com
          <ArrowUpRight />
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
            <ArrowUpRight />
          </a>
          <a className="text-link" href={roomalize.repo}>
            Source on GitHub
            <ArrowUpRight />
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
