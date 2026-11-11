import { LinkPipeline } from "@/components/Diagrams";
import { Page } from "@/components/SiteChrome";
import { Block, NextUp, Part, StudyHead } from "@/components/Study";
import { pageMeta } from "@/content/meta";

export const metadata = pageMeta({
  title: "Bring your games",
  description:
    "Case study: linking Steam, Xbox, PlayStation, Nintendo and RetroAchievements accounts to Neetter, syncing libraries, and matching titles to the IGDB catalogue. The product decisions and the engineering behind them.",
  path: "/work/bring-your-games/",
});

export default function BringYourGames() {
  return (
    <Page current="work">
      <article className="wrap">
        <StudyHead
          title="Bring your games"
          lede="A new profile on a social network starts empty. Linking a game account fills it in one step: the library, the playtime and the achievements, matched to Neetter’s catalogue and placed on the shelf with a status."
          facts={[
            { term: "Role", detail: "Founder: product and engineering" },
            {
              term: "When",
              detail: "Steam from 1 Oct 2026, the import on for everyone 25 Oct",
            },
            {
              term: "Platforms",
              detail: "Steam, Xbox, PlayStation, Nintendo, RetroAchievements",
            },
            { term: "Built for", detail: "Web, iOS and Android, on one API" },
          ]}
        />

        <div className="study">
          <Part
            id="product"
            title="Product"
            intro="Why the player’s own library became the front door, and the rules that keep an import from getting in the way."
          >
            <Block title="The problem">
              <p>
                A social network with few people on it has little to show a newcomer. Neetter
                also has a single-player side: a profile, a shelf of the games you play, reviews
                and discovery. That side can be useful to someone who follows nobody, but only if
                the shelf isn’t empty, and nobody should have to type in a library one game at a
                time.
              </p>
            </Block>

            <Block title="What users showed">
              <ul>
                <li>
                  In the October usability study, two club leaders asked how Neetter differs
                  from Twitter for games, and pointed straight at the cold start.
                </li>
                <li>
                  The first match check, on 23 October, found 74% of linked Steam titles and 87%
                  of Xbox titles matched a game in the catalogue. Every matched game had a cover,
                  so the gap was the catalogue, not the art. The sample was tiny, one linked
                  account per platform and mostly my own, but it showed where to work.
                </li>
                <li>
                  A guided test of the profile and shelves in November: the ideas landed, and the
                  friction was in adding, saving and naming. The tester asked whether “Completed”
                  means 100%, and couldn’t add a PlayStation 4 disc they play on a PlayStation 5.
                </li>
              </ul>
            </Block>

            <Block title="The decision, and why">
              <ul>
                <li>
                  <strong>The player’s own games come first.</strong> Sign-up goes from the
                  username to Bring your games, with Steam, Xbox, PlayStation and Nintendo side by
                  side, then to following games, then the profile. Every step after the username
                  can be skipped, and until you’ve posted, Home opens on your own games.
                </li>
                <li>
                  <strong>An import fills gaps and never overrules.</strong> A game already on
                  the shelf keeps the status its owner chose. A new one gets its status from the
                  data: never launched is Want to play, played is Played, every achievement is
                  Completed.
                </li>
                <li>
                  <strong>“Completed” is the player’s call.</strong> Finishing the main story and
                  unlocking every achievement both count, and the status now says so.
                </li>
                <li>
                  <strong>A library doesn’t flood anyone’s feed.</strong> Imported games stay
                  out of the activity followers see, so linking 300 games isn’t 300 updates.
                </li>
                <li>
                  <strong>The platform’s privacy wins.</strong> A library Steam marks private is
                  hidden from everyone, and each linked account has its own switch to hide it.
                </li>
                <li>
                  <strong>A gate before launch.</strong> The import stayed off until at least 95%
                  of played titles matched on both Steam and Xbox. An unmatched game has no page,
                  so it can’t appear on a profile, a shelf or in a review.
                </li>
              </ul>
            </Block>

            <Block title="What shipped">
              <ul>
                <li>
                  Linking for Steam on 1 October, Xbox, PlayStation and Nintendo by 15 October,
                  and RetroAchievements on 10 November.
                </li>
                <li>
                  One import for every linked account: Import all in one step, or Choose games,
                  grouped by the status each will get.
                </li>
                <li>
                  A card on the profile for each linked account, the whole library on a page of
                  its own, a daily re-read and a Sync now button.
                </li>
                <li>
                  Bring your games in sign-up, and a Your games section on Home: first for anyone
                  who hasn’t posted yet.
                </li>
                <li>
                  Since 10 November, new playtime can turn into a suggested play session for the
                  player to confirm.
                </li>
              </ul>
              <figure className="figure figure--split">
                <img
                  className="phone-shot"
                  src="/images/home-your-games.webp"
                  alt="Neetter's Home on iPhone. Under “Your games”, a Playing now row (Hollow Knight: Silksong, Ghost of Yotei, Hades II with “6.8h in 2 weeks”) and a backlog row, then today's Gamedle."
                  width={600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  Home on iPhone, shown with stand-in data. Your games: what you’re playing, with
                  recent playtime from a linked account, then your backlog.
                </figcaption>
              </figure>
            </Block>

            <Block title="The result">
              <p>
                Three changes closed the gap. The catalogue sync takes a game’s Steam id from
                IGDB’s store records as well as its store link, and keeps every Steam app id a game
                has, because IGDB sometimes files a game under a sibling store page. And a daily
                job brings in the games players linked that the catalogue didn’t have yet:
                its first run added 78.
              </p>
              <p>
                Played Steam titles went from 83% matched to 95%, and Xbox reached 95%. The gate
                was met and the import went live for everyone on 25 October 2026.
              </p>
              <p>
                From the November test, the statuses explain themselves, and games are added by
                platform family, so a PlayStation 4 disc played on a PlayStation 5 can go on the
                shelf.
              </p>
            </Block>
          </Part>

          <Part
            id="engineering"
            title="Engineering"
            intro="Linking that a forwarded link can’t hijack, a sync that fits a shared API budget, and matching titles to the catalogue. This half covers Steam, Xbox and RetroAchievements."
          >
            <Block title="Architecture">
              <p>
                Every platform links in the same three steps. The signed-in player asks for the
                platform’s sign-in, with a signed state naming them. The platform sends the
                browser back to the API, which proves the account and parks it under a one-time
                code. The app or site then redeems that code with its own session, and only then
                is anything linked.
              </p>
              <ul>
                <li>
                  <strong>Steam</strong> offers third parties OpenID 2.0 rather than OAuth. It
                  proves a SteamID, and the Steam Web API reads the library, playtime and
                  achievements.
                </li>
                <li>
                  <strong>Xbox</strong> signs in through Microsoft’s identity platform with PKCE,
                  then exchanges for Xbox Live’s user and XSTS tokens to read the title history
                  and achievement progress.
                </li>
                <li>
                  <strong>RetroAchievements</strong> uses its official Web API. The player proves
                  the account is theirs by pasting a short code into their profile’s motto.
                </li>
              </ul>
              <p>
                Titles match the catalogue by the store ids IGDB records for each game. A Steam
                title matches by its app id, against every app id a game has. An Xbox title
                matches by its Microsoft Store and Xbox 360 ids, then by a title exactly one game
                has. A job that runs after the nightly catalogue sync asks IGDB
                about the titles still unmatched, imports what it finds, and logs the match rate
                for each platform.
              </p>
            </Block>
            <LinkPipeline />

            <Block title="Trade-offs">
              <p>
                <strong>The callback never links.</strong> A redirect back from Steam or Microsoft
                carries no session, only the user id in the state. Anyone can have a state minted
                for their own account and then talk somebody else into finishing the sign-in, so
                linking there would put the victim’s Steam account on the attacker’s profile.
                Only the session that started a link can redeem it.
              </p>
              <p>
                <strong>Trust only what’s signed.</strong> Steam’s check vouches for signed
                fields alone, so a link is refused unless the signature covers the claimed id and
                the return address, and the return address must be exactly Neetter’s.
              </p>
              <p>
                <strong>A shared budget.</strong> Steam allows one API key 100,000 requests a
                day, and the game-news ingest spends from the same key. A library is two reads
                however big it is. Achievements cost one read per game, so they’re re-read only
                for games played since their last read, capped per sync and per run, and the run
                stops at the first rate-limit answer. A big library’s first sync spreads over a
                few days, most recently played first.
              </p>
              <p>
                <strong>Precision over recall.</strong> A title two games share is never guessed.
                It stays on the linked library’s page under the store’s own name until something
                identifies it.
              </p>
              <p>
                <strong>A kept sign-in.</strong> Microsoft’s refresh token is encrypted at rest
                and bound to the account. Microsoft issues a new one with every use, so the daily
                read keeps it alive. If Microsoft refuses it, it’s forgotten and Settings asks
                the player to sign in again. One read per account runs at a time, because two at
                once would each trade the same token.
              </p>
              <p>
                <strong>The client never names a status.</strong> It says which games to import,
                and the server works out each status from the player’s own titles at that moment,
                so a stale or made-up status can’t land on the shelf.
              </p>
            </Block>

            <Block title="Performance">
              <ul>
                <li>
                  Titles are written in bulk and only changed rows are updated, so the daily sync
                  of a 2,000-game library writes the handful played since yesterday.
                </li>
                <li>
                  Steam and Xbox run side by side in the daily job, since they spend different
                  budgets, and one failing doesn’t stop the other.
                </li>
                <li>
                  A page costs its round trips, not its rows. Reading a 781-game library 50 at a
                  time took 16 sequential requests and 13.4 seconds. Pages of 500, with three
                  round trips a page, take 2 requests and 2.9 seconds.
                </li>
                <li>
                  The catalogue job asks IGDB in batches, so a failure costs only the batch it
                  hit, and a title IGDB didn’t know is asked about again after 30 days.
                </li>
              </ul>
            </Block>
          </Part>

          <NextUp slug="bring-your-games" />
        </div>
      </article>
    </Page>
  );
}
