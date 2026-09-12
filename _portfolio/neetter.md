---
title: "Neetter — The Social Home for Gamers"
seo_title: "Neetter - Video Game Communities, Reviews & Tracking"
description: "Neetter is a social network for gamers where you can follow games and people, join communities, share reviews, track what you play, and discover what to play next."
excerpt: "Founder & Software Engineer. The Social Home for Gamers — follow games and people, join communities, share reviews, and track what you play. Live at neetter.com with iOS and Android apps in beta testing.<br/><img src='/images/neetter-card.jpg' alt='The Neetter web app: navigation, discover feed, and trending games'>"
collection: portfolio
date: 2026-06-04
---

**[neetter.com](https://neetter.com)** · Founder & Software Engineer · May 2026 – Present

**The Social Home for Gamers.**

Neetter is a social network for gamers where you can follow games and people,
join communities, share reviews, track what you play, and discover what to play
next. Every game has its own page with a feed, news, community reviews, and an
about tab, and posts are tagged with the games they're about.

<img src="/images/neetter-card.jpg" alt="The Neetter web app: navigation, discover feed, and trending games" style="max-width:100%;border-radius:8px;">

What's in the product
------
* **Dual follow system** — people (Twitter-style) and games (subreddit-style), with chronological and algorithmic feeds plus per-game Trending/New sorting.
* **Game logging & reviews** — Letterboxd-style shelves (Want to play / Playing / Played), five-star ratings, and written reviews, backed by a nightly-synced IGDB catalog.
* **Real-time messaging** — Socket.io DMs and group chats with image/video/file attachments, GIFs and stickers via the Klipy API, voice notes, and emoji reactions.
* **LFG (looking-for-group)** posts, a daily game-guessing puzzle (Gamedle), game news ingestion from RSS + the Steam API, and a Pro subscription via Stripe.

How it's built
------
Solo across the whole stack: a **Next.js/TypeScript** web app on Vercel,
**React Native (Expo)** iOS and Android apps in beta testing, and a
**Node.js/Express** API with **PostgreSQL (Prisma)** and **Redis** on Fly.io —
media on Cloudflare R2, video transcoding via Mux, OAuth sign-in (Google,
Discord, Twitch, Apple), Firebase push notifications, and NSFW media scanning
in the upload pipeline. Deploys are CI-driven with database migrations run on
release.
