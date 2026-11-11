import { site } from "@/content/site";

import { ThemeToggle } from "./ThemeToggle";

export type NavKey = "home" | "product" | "engineering" | "cv" | "work" | "other";

const NAV: readonly { key: NavKey; href: string; label: string }[] = [
  { key: "product", href: "/product/", label: "Product" },
  { key: "engineering", href: "/engineering/", label: "Engineering" },
  { key: "cv", href: "/cv/", label: "CV" },
];

export function SiteHeader({ current }: { current: NavKey }) {
  return (
    <div className="wrap">
      <header className="site-header">
        <a className="wordmark" href="/" aria-current={current === "home" ? "page" : undefined}>
          {site.name}
        </a>
        <div className="site-nav">
          <nav aria-label="Main">
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
        </div>
      </header>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          {site.name} · <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <ul className="inline-links" aria-label="Elsewhere">
          <li>
            <a href={site.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={site.github}>GitHub</a>
          </li>
          <li>
            <a href="/cv/">CV</a>
          </li>
        </ul>
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
