import { Page } from "./SiteChrome";

/**
 * A page that used to exist on the old site and now lives elsewhere. GitHub
 * Pages can't send a redirect, so this is a meta refresh, with a link for
 * anyone it doesn't move along. React places the <meta> in the document head.
 */
export function Redirect({ to, label }: { to: string; label: string }) {
  return (
    <Page current="other">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <div className="wrap">
        <div className="page-head prose">
          <h1 className="h1">This page has moved</h1>
          <p>
            It’s now <a href={to}>{label}</a>.
          </p>
        </div>
      </div>
    </Page>
  );
}
