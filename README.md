# Vite + React starter

A Vite + React single-page app that deploys to [Dockhold](https://dockhold.eu)
with zero config. It builds to static files and serves them on an HTTPS URL.

[![Deploy to Dockhold](https://img.shields.io/badge/Deploy%20to-Dockhold-2563eb?style=for-the-badge)](https://app.dockhold.eu/new?repo=https://github.com/dockhold/vite-react-starter)

## Deploy it

1. Click **Use this template** (or fork this repo) to get your own copy.
2. Click the **Deploy to Dockhold** button above, or open
   [app.dockhold.eu/new](https://app.dockhold.eu/new), connect GitHub, and pick
   your repo.
3. Dockhold installs dependencies, runs `npm run build`, and starts the app for
   you. It goes live at `https://<your-app>.dockhold.app` with HTTPS handled.

Every later push to your main branch redeploys automatically.

## How it serves

Two scripts in [`package.json`](package.json) do the work:

```json
"build": "vite build",
"start": "serve -s dist -l $PORT"
```

`vite build` compiles the app to static files in `dist/`. `serve -s dist`
serves them with single-page-app fallback (so client-side routes work), bound to
the port Dockhold assigns (`$PORT`). Listening on `$PORT` is the one rule that
matters — never hardcode a port.

## Environment variables

Vite only exposes variables prefixed with `VITE_` to the browser, and inlines
them **at build time**. Set them in the dashboard *before* you deploy. Never put
a secret behind `VITE_` — it ships to every visitor. See
[`.env.example`](.env.example).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173 with hot reload
# or test the production path:
npm run build && PORT=3000 npm start
```

## Full walkthrough

[Deploy a Vite + React app](https://dockhold.eu/docs/recipes/deploy-a-vite-react-app)
— the step-by-step recipe, including SPA-routing and env-var fixes.
