import { Redirect } from "@/components/Redirect";

export const metadata = {
  title: "About · Rei Zhang",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function Moved() {
  return <Redirect to="/" label="the home page" />;
}
