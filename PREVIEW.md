# Preview your site locally

## Preview your site

Open [http://localhost:4000](http://localhost:4000) in your browser.

The server runs with live reload. After you edit `.md` or `.html` files, the page should refresh automatically.

## Next time (in a new terminal)

```bash
cd /Users/mauoser/Code/mauoser.github.io
bundle exec jekyll serve --livereload
```

If `jekyll` isn't found, run `source ~/.zshrc` first (or open a new terminal tab).

## Note

Homebrew isn't installed on this machine, so Ruby was set up with **rbenv** instead of `brew install ruby`. If you install Homebrew later, you can keep using rbenv — it's already configured for this project via `.ruby-version`.
