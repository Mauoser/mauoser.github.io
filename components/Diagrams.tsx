/**
 * Diagrams drawn in HTML rather than as pictures, so they reflow on a phone,
 * follow the theme, and read in order to a screen reader.
 */

/** Where a press of Going lands, inside one serializable transaction. */
export function RsvpFlow() {
  return (
    <figure className="figure figure--wide">
      <div className="flow" role="group" aria-labelledby="rsvp-flow-title">
        <p id="rsvp-flow-title" className="flow-title">
          Where a press of Going lands
        </p>
        <div className="tx-frame">
          <p className="tx-label">one serializable transaction, re-run if it loses a conflict</p>
          <ol className="tree">
            <li>
              <div className="node">
                <strong>Read the event again</strong>
                <small>Cancelled or over: refuse. Declined before: refuse.</small>
              </div>
              <ol className="branches">
                <li>
                  <div className="node node--ask">
                    <strong>Does the host approve each one?</strong>
                  </div>
                  <ol className="branches branches--split">
                    <li>
                      <span className="branch-label">yes</span>
                      <div className="node node--end">
                        <strong>A request</strong>
                        <small>The host accepts or declines it.</small>
                      </div>
                    </li>
                    <li>
                      <span className="branch-label">no</span>
                      <div className="node node--ask">
                        <strong>Is the event at capacity?</strong>
                        <small>Anyone already waiting is let in first.</small>
                      </div>
                      <ol className="branches branches--split">
                        <li>
                          <span className="branch-label">yes</span>
                          <div className="node node--end">
                            <strong>The waitlist</strong>
                            <small>In order of asking.</small>
                          </div>
                        </li>
                        <li>
                          <span className="branch-label">no</span>
                          <div className="node node--end">
                            <strong>Going</strong>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <p className="meta">
          When someone going leaves, the first person waiting goes in, unless the host approves
          each one: then the place is theirs to fill.
        </p>
      </div>
      <figcaption>
        Pressing Going twice changes nothing, so nobody loses their place in line by tapping
        again.
      </figcaption>
    </figure>
  );
}

/** From a platform sign-in to games on a shelf. */
export function LinkPipeline() {
  const steps = [
    {
      title: "Link",
      text: "Sign in on the platform. The callback parks the proof under a one-time code, which the signed-in app redeems.",
    },
    {
      title: "Read",
      text: "The library, playtime and achievements. Again every day, and on Sync now.",
    },
    {
      title: "Match",
      text: "Each title to a catalogue game by its store ids. An Xbox title can also match a title only one game has.",
    },
    {
      title: "Import",
      text: "Onto the shelf with a status from the data. It fills gaps and never overwrites.",
    },
  ];
  return (
    <figure className="figure figure--wide">
      <div className="flow" role="group" aria-labelledby="link-flow-title">
        <p id="link-flow-title" className="flow-title">
          From a game account to a full profile
        </p>
        <ol className="flow-steps flow-steps--row">
          {steps.map((s) => (
            <li key={s.title} className="flow-step">
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
