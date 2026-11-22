import { site } from "@/content/site";

import { ArrowUpRight } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export type NavKey = "home" | "product" | "engineering" | "cv" | "work" | "other";

const NAV: readonly { key: NavKey; href: string; label: string }[] = [
  { key: "product", href: "/product/", label: "Product" },
  { key: "engineering", href: "/engineering/", label: "Engineering" },
  { key: "cv", href: "/cv/", label: "CV" },
];

/** Name, the three pages, the theme. On a phone the nav takes a row of its own. */
export function SiteHeader({ current }: { current: NavKey }) {
  return (
    <div className="wrap">
      <header className="site-header">
        <a className="wordmark" href="/" aria-current={current === "home" ? "page" : undefined}>
          {site.name}
        </a>
        <nav className="site-nav" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              aria-current={current === item.key ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </header>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <p className="footer-name">{site.name}</p>
        <div className="footer-main">
          <a className="footer-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <ul className="footer-links" aria-label="Elsewhere">
            <li>
              <a href={site.linkedin}>
                LinkedIn
                <ArrowUpRight />
              </a>
            </li>
            <li>
              <a href={site.github}>
                GitHub
                <ArrowUpRight />
              </a>
            </li>
            <li>
              <a href="/cv/">CV</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/** Every page: skip link, header, the page's own main, footer. */
export function Page({ current, children }: { current: NavKey; children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader current={current} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
