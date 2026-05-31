# TSCopier Docs

User-facing documentation for TSCopier, hosted at `https://docs.tscopier.ai`.

Built with [VitePress](https://vitepress.dev) — a fast, self-hosted documentation site with no vendor lock-in.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Static output is written to `.vitepress/dist/`.

## Deploy (Netlify)

This repo includes a `netlify.toml` that runs `npm run build` and publishes `.vitepress/dist`.

1. Connect the repo in Netlify
2. Set custom domain `docs.tscopier.ai`
3. Confirm HTTPS is enabled

## Content structure

| Path | Purpose |
| --- | --- |
| `index.md` | Introduction (homepage) |
| `quickstart/` | Getting started guides |
| `telegram/` | Telegram connection and channels |
| `brokers/` | MT4/MT5 setup |
| `configuration/` | Copier settings |
| `plans/` | Subscription and billing |
| `troubleshooting/` | FAQ and debugging |
| `support/` | Contact support |
| `public/` | Static assets (images, logos, favicon) |
| `.vitepress/config.ts` | Site navigation and theme |

## Adding a page

1. Create a `.md` file under the appropriate folder
2. Add frontmatter with `title` and `description`
3. Register the page in `.vitepress/config.ts` sidebar

## App integration

Set in app hosting env vars:

```
VITE_HELP_DOCS_URL=https://docs.tscopier.ai
```
