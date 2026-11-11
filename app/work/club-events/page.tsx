import { RsvpFlow } from "@/components/Diagrams";
import { Page } from "@/components/SiteChrome";
import { Block, NextUp, Part, StudyHead } from "@/components/Study";
import { pageMeta } from "@/content/meta";

export const metadata = pageMeta({
  title: "Club events",
  description:
    "Case study: events for Neetter's clubs, with RSVPs, capacity and a waitlist, host approval, repeating schedules, calendar files and reminders. The product decisions and the engineering behind them.",
  path: "/work/club-events/",
});

export default function ClubEvents() {
  return (
    <Page current="work">
      <article className="wrap">
        <StudyHead
          title="Club events"
          lede="People who host play for others needed somewhere to post an event, take RSVPs and fill a room without overfilling it. I designed and built events for Neetter’s clubs, from the plan to the API, the web app and both mobile apps."
          facts={[
            { term: "Role", detail: "Founder: product and engineering" },
            {
              term: "When",
              detail: "Planned 9 Oct 2026, on for everyone 25 Oct, repeating events from 3 Nov",
            },
            { term: "Built for", detail: "Web, iOS and Android, on one API" },
            {
              term: "Stack",
              detail: "Next.js, React Native (Expo), Node.js and Express, PostgreSQL with Prisma",
            },
          ]}
        />

        <div className="study">
          <Part
            id="product"
            title="Product"
            intro="Who events are for, what they needed, and the calls that shaped them."
          >
            <Block title="The problem">
              <p>
                Neetter’s clubs are owned, moderated spaces where a studio, a creator or a
                community gathers its players. A club could post, but it couldn’t hold an event.
                There was nowhere to say when and where, to count who was coming, or to stop at
                the size of the room.
              </p>
              <p>
                The people who need that most are organizers: anyone who hosts play for others,
                from a LAN party or a local tournament series to a university esports club or a
                weekly online game night.
              </p>
            </Block>

            <Block title="What users showed">
              <ul>
                <li>
                  Clubs started with indie developers. They said their players wouldn’t join yet
                  another Discord server, that Reddit is anonymous, and that X and Instagram are
                  noisy and not about games.
                </li>
                <li>
                  Before launch, in the October usability study, two leaders of a student
                  game-development club asked how Neetter differs from Twitter for games, and
                  pointed to the cold start: a new network has nobody on it yet. They also said a
                  club’s adoption runs through its officers and the university.
                </li>
              </ul>
              <p>
                My read: a club brings its own people, and an event gives them a reason to show
                up. So events had to be easy for a host to run and safe for the people coming.
              </p>
            </Block>

            <Block title="The decision, and why">
              <ul>
                <li>
                  <strong>Every kind of club can hold events,</strong> not only organizers. A
                  studio’s playtest night and a creator’s game night work the same way as a LAN
                  party.
                </li>
                <li>
                  <strong>Tournaments stay on start.gg.</strong> It already runs registration and
                  brackets well, so Neetter doesn’t rebuild them: it helps people find and
                  talk about a tournament, and the event links out to start.gg for sign-up.
                </li>
                <li>
                  <strong>The address defaults to people going.</strong> Someone hosting a LAN
                  party at home must not publish their address by default. The host can show it
                  to everyone, or only to people they approved. The online link follows the same
                  rule: a Discord invite is as private as a front door.
                </li>
                <li>
                  <strong>No payments.</strong> A free-text price note, and a link to the
                  host’s own ticketing.
                </li>
                <li>
                  <strong>Pro can’t buy reach.</strong> I considered making clubs and events a
                  Pro feature and decided against it: it would take away something free, sell
                  reach, and stop events being made just when a club needs people organizing.
                  Everything a club needs to exist, be found and stay safe is free. Pro adds
                  extras for whoever runs it, and discovery shows only a series’ next date, so a
                  weekly night takes one place, exactly like a one-off.
                </li>
                <li>
                  <strong>Notify only the people it’s about.</strong> Reminders reach the people
                  going and nobody else. A change of time, place or format, or a cancellation,
                  reaches everyone who answered, the waitlist included.
                </li>
              </ul>
            </Block>

            <Block title="What shipped">
              <ul>
                <li>
                  An Organizer club kind, whose application asks where they host, and a Host
                  badge for its owner and admins.
                </li>
                <li>
                  Events shown where they happen: an in-person event in its own time zone with
                  the reader’s time beside it, an online event in the reader’s own time.
                </li>
                <li>
                  Going or Interested, an optional capacity with a waitlist that moves in the
                  order people asked, and optional host approval.
                </li>
                <li>
                  Public counts, but only people going and the club’s staff see who else is
                  going: an in-person list says where people will be.
                </li>
                <li>
                  Reminders a day and an hour before, and a notice when the time, place or format
                  changes, or the event is cancelled.
                </li>
                <li>
                  Add to calendar: an <code>.ics</code> file that works in any calendar app, with
                  no native module.
                </li>
                <li>
                  Safety: going to an in-person event asks first, with a safety note; reports
                  have an “Unsafe meetup” reason; Neetter’s moderators can cancel any event.
                </li>
                <li>
                  Discovery: an events directory with Near me (within 50 km of your city) and
                  Online, and a game’s next three events on its Find players tab.
                </li>
                <li>
                  For clubs whose owner has Pro: repeating events (weekly, every two weeks, or
                  monthly on the same weekday, up to 12 dates) and insights that show counts,
                  never names, with anything under 5 shown as “under 5”. Duplicating an event
                  stays free.
                </li>
              </ul>
            </Block>

            <Block title="The result">
              <p>
                Planned on 9 October 2026, built across the API, the web and both apps by 12
                October, with discovery on 15 October. It went live for everyone on 25
                October, and repeating events followed on 3 November.
              </p>
              <p>
                Building the waitlist exposed a race in an older feature. Find players counted a
                party and then added the new player with nothing around the two steps, so two
                people joining for the last place could both get in. It now runs in the same
                kind of transaction as an event’s RSVPs.
              </p>
              <p className="callout">
                <strong>No usage numbers here.</strong> Events are weeks old, too new for numbers
                I’d stand behind. What I watch: sign-ups that arrive through a club’s link, how
                many of the people who joined through a club are still active after 7 and 30
                days compared with everyone else, and how many clubs are active each week. Every
                number leaves out the founders’ and official accounts.
              </p>
            </Block>
          </Part>

          <Part
            id="engineering"
            title="Engineering"
            intro="How RSVPs stay correct when people answer at the same moment, and how reminders go out exactly once."
          >
            <Block title="Architecture">
              <p>
                An Express API in TypeScript, with Prisma on PostgreSQL. An event stores its
                start and end in UTC alongside its IANA time zone, so a weekly 7 PM stays 7 PM on
                the event’s own clock across a change of the clocks.
              </p>
              <p>
                An answer is one row per event and person: Going, Interested, a request, the
                waitlist or declined, unique on the pair. The time and repeat rules live in a
                shared TypeScript package that the API, the web app and the mobile app all
                import, so every screen works out dates the way the server does.
              </p>
            </Block>
            <RsvpFlow />

            <Block title="Trade-offs">
              <p>
                <strong>Correctness over throughput.</strong> Reading how many people are going
                and writing an answer that depends on it is a read-modify-write two people can
                run at the same moment. At any weaker isolation level, both would take the last
                place. So every write that takes or frees a place is one serializable
                transaction that reads the event again inside it. Postgres aborts one of two
                conflicting writers, and the loser is re-run against what committed, where it
                lands on the waitlist. After three lost conflicts in a row the request fails
                rather than overfill the room.
              </p>
              <p>
                The tests hold it: ten people pressing Going at once for three places leave
                exactly three going and seven waiting, and the race tests fail if an answer is
                ever written outside a serializable transaction. A host can still accept someone
                past the capacity on purpose: they know who they want in better than the number
                does.
              </p>
              <p>
                <strong>Exactly once, or a lost push.</strong> A reminder is a notice keyed by
                the event, the kind and the start, under a unique index, so a re-run, a deploy or
                a second server never sends it twice. Each batch of 500 moves the notice’s cursor
                in the same transaction that writes its notifications. The push goes after the
                commit, so a crash between the two can lose a push, never a notification. A
                moved start is reminded again; a cancelled event, never.
              </p>
              <p>
                <strong>Old apps first.</strong> App builds released before events threw on a
                notification type they didn’t know, so the four new types go only to clients
                that ask for them.
              </p>
              <p>
                <strong>A public calendar file.</strong> A calendar app fetches the{" "}
                <code>.ics</code> with no session, and the link gets passed around, so it carries
                the venue’s name but never the address or the online link. One known gap: it
                doesn’t number its revisions yet, so a re-imported edit may not update every
                calendar app.
              </p>
            </Block>

            <Block title="Performance">
              <ul>
                <li>
                  Indexes on (club, start), (city, start) and (series, start) serve a club’s
                  Events tab, Near me, and “this date and the rest of the series”.
                </li>
                <li>
                  Discovery reads a page of events, then only the first matching date of each
                  series on it. After eight reads it returns what it has with a cursor, so a page
                  never stalls behind one long series.
                </li>
                <li>
                  On the web, the host’s form and every staff tool load only when pressed, so a
                  reader downloads neither.
                </li>
                <li>
                  The events’ strings have a file of their own. Inside the clubs’ strings they
                  pushed modules every club page shares past webpack’s 20 kB split threshold,
                  which added 4.4 to 5.2 kB to two club pages.
                </li>
                <li>
                  An event’s page stands on its own rather than as a tab inside the club’s
                  layout. Inside it, two club tabs would have been 2.9 kB lighter but the event
                  page 7.6 kB heavier on a cold load, and that is the page a shared link or a push
                  opens.
                </li>
              </ul>
            </Block>
          </Part>

          <NextUp slug="club-events" />
        </div>
      </article>
    </Page>
  );
}
