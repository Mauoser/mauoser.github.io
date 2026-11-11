import { Redirect } from "@/components/Redirect";

export const metadata = {
  title: "CV · Rei Zhang",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cv/" },
};

export default function Moved() {
  return <Redirect to="/cv/" label="the CV" />;
}
