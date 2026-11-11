/** The three case studies, in the order every list shows them. Club events
 *  leads: it is the closest to event software. */
export interface CaseStudy {
  slug: string;
  href: string;
  title: string;
  /** One line for the home page's card. */
  summary: string;
  /** What a product reader gets from it, for /product/. */
  product: string;
  /** What an engineering reader gets from it, for /engineering/. */
  engineering: string;
  /** Short labels for what the case covers. */
  covers: readonly string[];
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "club-events",
    href: "/work/club-events/",
    title: "Club events",
    summary:
      "Events for people who host play: RSVPs, capacity and a waitlist, host approval, repeating schedules, calendar files and reminders.",
    product:
      "Who sees a host’s address, who gets the last place, and why paying for Pro can’t buy an event more reach.",
    engineering:
      "Serializable transactions, so ten people racing for three places leave three going and seven waiting, and reminders that go out once across retries and deploys.",
    covers: ["RSVPs", "Waitlists", "Approval", "Repeating events", ".ics", "Reminders"],
  },
  {
    slug: "bring-your-games",
    href: "/work/bring-your-games/",
    title: "Bring your games",
    summary:
      "Linking Steam, Xbox and RetroAchievements, so a new profile starts full instead of empty.",
    product:
      "Beating the cold start with the player’s own library, an import that never overwrites a choice, and a match-rate gate before launch.",
    engineering:
      "Account links a forwarded sign-in link can’t hijack, a daily sync on a shared API budget, and matching titles to the IGDB catalogue by store ids.",
    covers: ["Account linking", "Library sync", "Catalogue matching"],
  },
  {
    slug: "usability-study",
    href: "/work/usability-study/",
    title: "From a usability study to fixes",
    summary:
      "Five moderated task sessions and two interviews, what they found, and the fixes that shipped. Plus the query change behind a faster game feed.",
    product:
      "Five sessions and two interviews, findings checked against the product, and four fixes on the web within two days.",
    engineering:
      "Postgres was building every post’s card before filtering. Reading ids first took a busy game’s feed from 410–700 ms to a 167 ms median.",
    covers: ["Research", "Prioritization", "Query performance"],
  },
];
