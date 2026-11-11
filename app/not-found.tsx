import { Page } from "@/components/SiteChrome";

export const metadata = {
  title: "Page not found · Rei Zhang",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Page current="other">
      <div className="wrap">
        <div className="page-head prose">
          <h1 className="h1">There’s no page here</h1>
          <p>
            The address may be from the old version of this site. Try the{" "}
            <a href="/">home page</a>, the <a href="/#case-studies">case studies</a> or the{" "}
            <a href="/cv/">CV</a>.
          </p>
        </div>
      </div>
    </Page>
  );
}
