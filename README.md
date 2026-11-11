# zenrei.me

Source for Rei Zhang's personal site, live at **[zenrei.me](https://zenrei.me)**: a static
[Next.js](https://nextjs.org) export (App Router, TypeScript), deployed to GitHub Pages by
GitHub Actions from `master`.

## Pages

| Path | What |
| --- | --- |
| `/` | Home: headline, contact, proof strip, case studies, projects |
| `/product/` | For product readers: case studies (product halves), how I work, experience |
| `/engineering/` | For engineering readers: case studies (engineering halves), stack, experience |
| `/work/club-events/` | Case study, with `#product` and `#engineering` |
| `/work/bring-your-games/` | Case study, with `#product` and `#engineering` |
| `/work/usability-study/` | Case study, with `#product` and `#engineering` |
| `/cv/` | The CV |
| `/portfolio/` | The projects, kept at the old site's address |

`/resume/`, `/about/`, `/portfolio/neetter/` and `/portfolio/portfolio-2/` are old addresses
that move on to their new pages.

## Editing

- Facts the whole site repeats (title, dates, links, the proof strip): `content/site.ts`.
- Roles and schooling: `content/experience.ts`.
- The case study list: `content/caseStudies.ts`; each study's page is in `app/work/`.
- Styles: `app/globals.css` (light and dark tokens at the top).

## Running locally

```bash
npm ci
npm run dev            # http://localhost:3000
npm run build          # writes out/
npm run check:links    # every internal link, image and #anchor in out/ resolves
npm run serve          # serves out/ on http://localhost:4321
```

## Deploying

`.github/workflows/pages.yml` builds and checks every pull request, and on a push to `master`
deploys `out/` to Pages. Pages has to be set to deploy from GitHub Actions for that to work.

## License

The code is MIT (see `LICENSE`, which comes from the Academic Pages template this site
started from). The writing and images are Rei Zhang's.
