# mauoser.github.io

Source for my personal portfolio site, live at **[mauoser.github.io](https://mauoser.github.io)** — about, CV, and project portfolio (including [Neetter](https://neetter.com), the gaming social network I founded and build).

Built with [Academic Pages](https://github.com/academicpages/academicpages.github.io), a Jekyll template for GitHub Pages; deployed automatically from `master` by GitHub Pages.

## Editing content

| What | Where |
| --- | --- |
| About page (home) | `_pages/about.md` |
| CV | `_pages/cv.md` |
| Portfolio entries | `_portfolio/*.md` |
| Images | `images/` |
| Site config & navigation | `_config.yml`, `_data/navigation.yml` |

## Running locally

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

Or with Docker: `docker compose up` (see `docker-compose.yaml`).

## License

Template © [Academic Pages](https://github.com/academicpages/academicpages.github.io) contributors, MIT — see `LICENSE`. Site content is mine.
