import { Page } from "@/components/SiteChrome";
import { Block, NextUp, Part, StudyHead } from "@/components/Study";
import { pageMeta } from "@/content/meta";

export const metadata = pageMeta({
  title: "From a usability study to fixes",
  description:
    "Case study: a moderated usability study of Neetter (five task sessions, two interviews), what it found, what shipped within two days, and the query change that took a busy game's feed from 410–700 ms to a 167 ms median.",
  path: "/work/usability-study/",
});

const fixes: readonly { saw: string; changed: string }[] = [
  {
    saw: "Followed games were hard to find again.",
    changed:
      "People and Games are two visible tabs on the Following page, each with its own address, and a profile’s Games tab has a Following view.",
  },
  {
    saw: "Follow, Add to my games and Add to list got mixed up, and a review came out as a post.",
    changed:
      "Following a game says what following does and offers Add to my games; adding a game offers Follow. Write a review is offered in the composer and at the top of a game’s Reviews tab.",
  },
  {
    saw: "A game’s follower count was plain text.",
    changed: "It opens the list of who follows the game, newest first.",
  },
  {
    saw: "Saving with no status added nothing, silently.",
    changed: "The window asks for a status instead of closing as if it had worked.",
  },
  {
    saw: "A cover turned white on Windows in dark mode.",
    changed:
      "The most likely cause, a filter list drawn transparent over the first cover, got a solid background, and a cover that fails to load shows its title.",
  },
  {
    saw: "Icon-only tabs hid Reviews, and a tester couldn’t tell what clubs were.",
    changed:
      "Tabs are named under their icons wherever the row has room, and Clubs open with a short explainer the first time.",
  },
];

export default function UsabilityStudy() {
  return (
    <Page current="work">
      <article className="wrap">
        <StudyHead
          title="From a usability study to fixes"
          lede="Five moderated task sessions and two interviews, run on the live product in October 2026. Making things worked; getting back to them didn’t. All four sets of fixes were on the web within two days of the report."
          facts={[
            { term: "Role", detail: "Founder: the study’s findings, the calls and the fixes" },
            {
              term: "Method",
              detail:
                "5 moderated task sessions (2 on iPhone, one in Japanese; 3 on desktop web) and 2 interviews",
            },
            { term: "When", detail: "Sessions around 18 Oct 2026, fixes live 20–21 Oct" },
            { term: "Built for", detail: "Web, iOS and Android" },
          ]}
        />

        <div className="study">
          <Part
            id="product"
            title="Product"
            intro="What the sessions showed, what I decided to change, and what the next round does differently."
          >
            <Block title="The problem">
              <p>
                By mid-October, Neetter had game pages, reviews, shelves, lists and, that week,
                clubs. The tests said each feature worked on its own. I needed to know whether
                people could use them together, and find their way back to what they had made.
              </p>
            </Block>

            <Block title="What users showed">
              <ol>
                <li>
                  <strong>Making things worked; getting back to them didn’t.</strong> Followed
                  games sat behind a dropdown on the Following page. Two desktop testers needed a
                  hint to find them, and the third looked on the profile’s Games tab and never
                  did. Reviews sat behind an icon-only star tab.
                </li>
                <li>
                  <strong>Look-alike actions got mixed up:</strong> Follow, Add to my games and
                  Add to list. Asked to review a game, one tester wrote an ordinary post.
                </li>
                <li>
                  A game’s follower count was plain text. A tester wanted to see who follows a
                  game, to find people who play it.
                </li>
                <li>
                  Saving “Add to my games” without a status added nothing, but the window closed
                  as if it had worked.
                </li>
                <li>One tester, on Windows in dark mode, saw a game’s cover turn white.</li>
                <li>The day after clubs launched, a tester couldn’t tell what a club was.</li>
                <li>
                  The two club leaders asked how Neetter isn’t just Twitter for games, pointed to
                  the cold start, and couldn’t tell what Pro was for.
                </li>
              </ol>
              <p>
                I checked each finding against the product before acting on it. One was already
                fixed by then: search had opened empty.
              </p>
            </Block>

            <Block title="The decision, and why">
              <ul>
                <li>
                  <strong>Fix all of it, by having the interface explain itself</strong> rather
                  than by adding more of it.
                </li>
                <li>
                  <strong>Name tabs where there’s room, keep icons on phones.</strong> Under their
                  icons, the names fit a desktop row in all 24 languages. Beside the icons they
                  don’t: the profile’s seven tabs needed 628 px in English and 860 px in Greek,
                  against a 600 px row.
                </li>
                <li>
                  <strong>Say what an action does at the moment it’s taken,</strong> instead of
                  renaming the actions.
                </li>
                <li>
                  <strong>Explain clubs once:</strong> a short card the first time someone opens
                  them, put away for good with Got it.
                </li>
                <li>
                  <strong>The cold start isn’t an interface bug.</strong> The same week, I made
                  the single-player side the front door, which is the{" "}
                  <a href="/work/bring-your-games/">Bring your games</a> case study.
                </li>
              </ul>
            </Block>

            <Block title="What shipped">
              <div className="table-wrap">
                <table className="table--stack">
                  <caption>What the sessions showed, and what changed</caption>
                  <thead>
                    <tr>
                      <th scope="col">What we saw</th>
                      <th scope="col">What changed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fixes.map((f) => (
                      <tr key={f.saw}>
                        <th scope="row">{f.saw}</th>
                        <td data-label="What changed">{f.changed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>

            <Block title="The result">
              <p>
                The report came in on 20 October. All four sets of fixes were live on the web on
                20 and 21 October, and reached the apps with their next release. A later design
                pass went further and named every tab on phones too.
              </p>
              <p>
                A guided test of the profile and shelves in November found the next layer. Each
                status now says what it means, the log window asks before discarding a change,
                and games are added by platform family.
              </p>
              <figure className="figure figure--split">
                <img
                  className="phone-shot"
                  src="/images/log-window.webp"
                  alt="Neetter's Add to my games window on iPhone for Ghost of Yotei. Completed is selected, and under the statuses it reads: You finished it, your way: the main story or every achievement."
                  width={600}
                  height={836}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  The log window on iPhone, shown with stand-in data. Each status explains itself:
                  Completed is “the main story or every achievement”, the player’s call.
                </figcaption>
              </figure>
              <p className="callout">
                <strong>What the next round does differently.</strong> The step that asked people
                to find something again was dropped from all five sessions, most of the planned
                ratings weren’t collected, and the participants knew each other and used real
                accounts. Next time: test accounts, and people from beyond one friend group.
              </p>
            </Block>
          </Part>

          <Part
            id="engineering"
            title="Engineering"
            intro="The study asked whether people could find things. This half is about how fast one of them arrives: a game’s feed of posts."
          >
            <Block title="Architecture">
              <p>
                A game’s feed is a cursor-paged list of posts, sorted Trending or New, served by
                the Express API through Prisma on PostgreSQL. Each post comes with what its card
                draws: the author, the tagged games, a quoted post and the counts. With Prisma’s
                relation joins, all of that is one SQL statement of lateral joins.
              </p>
              <p>
                That statement was the problem. Postgres estimated a game’s filter would leave
                about 7 rows, so it built every card’s joins for every published post on
                Neetter, and only then applied the game’s filter and the page limit. The cost grew
                with every post on the site, not with the game’s own: a game with no posts at all
                paid the same as a busy one.
              </p>
            </Block>

            <Block title="Trade-offs">
              <p>
                <strong>Two reads instead of one.</strong> The feed now reads the page’s ids
                first, with no joins, then fetches those posts by primary key with everything a
                card draws, and puts them back in order in the app, because <code>IN</code> keeps
                no order. The joins run for one page instead of the whole site, in exchange for
                one more round trip per page.
              </p>
              <p>
                <strong>The filter stays on the second read.</strong> A post deleted or held for
                review between the two reads is still left out, so the speed-up can’t show
                something it shouldn’t.
              </p>
              <p>
                <strong>Measured, not guessed.</strong> I measured on production with a read-only
                probe: <code>EXPLAIN (ANALYZE, BUFFERS)</code> on the real queries, then the API’s
                own request logs once the change was live.
              </p>
            </Block>

            <Block title="Performance">
              <div className="table-wrap">
                <table className="table--stack">
                  <caption>A game’s feed on production, 8 November 2026, before and after</caption>
                  <thead>
                    <tr>
                      <th scope="col">Measure</th>
                      <th scope="col" className="num">
                        Before
                      </th>
                      <th scope="col" className="num">
                        After
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Query execution time</th>
                      <td className="num" data-label="Before">248 ms</td>
                      <td className="num better" data-label="After">0.24 + 7.7 ms</td>
                    </tr>
                    <tr>
                      <th scope="row">Buffers read</th>
                      <td className="num" data-label="Before">28,720</td>
                      <td className="num better" data-label="After">745</td>
                    </tr>
                    <tr>
                      <th scope="row">The feed’s query, wall time</th>
                      <td className="num" data-label="Before">270–310 ms</td>
                      <td className="num better" data-label="After">70–90 ms</td>
                    </tr>
                    <tr>
                      <th scope="row">Server time for a busy game’s feed</th>
                      <td className="num" data-label="Before">410–700 ms</td>
                      <td className="num better" data-label="After">167 ms, warm median</td>
                    </tr>
                    <tr>
                      <th scope="row">Server time for a game with no posts</th>
                      <td className="num" data-label="Before">as a busy one</td>
                      <td className="num better" data-label="After">54–82 ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The same probe found two more slow reads. Gamedle’s first visit after a quiet
                spell took 8.4 seconds because it picked the day’s answer during the request, so a
                scheduled job now prepares today’s and tomorrow’s puzzles ahead of time. Today’s
                News rebuilt itself on every cache miss, so it now serves the last copy, about 21
                ms, while one rebuild runs in the background.
              </p>
            </Block>
          </Part>

          <NextUp slug="usability-study" />
        </div>
      </article>
    </Page>
  );
}
