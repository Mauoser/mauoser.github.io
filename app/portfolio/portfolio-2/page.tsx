import { Redirect } from "@/components/Redirect";

export const metadata = {
  title: "Projects · Rei Zhang",
  robots: { index: false, follow: true },
  alternates: { canonical: "/#projects" },
};

export default function Moved() {
  return <Redirect to="/#projects" label="the projects list" />;
}
