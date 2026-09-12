# mauoser.github.io

Source for my personal portfolio site, live at **[mauoser.github.io](https://mauoser.github.io)**. I’m a software engineer and the founder of [Neetter](https://neetter.com), **The Social Home for Gamers** — a social network for gamers where you can follow games and people, join communities, share reviews, track what you play, and discover what to play next.

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
