# Vite + React starter

A Vite + React single-page app that deploys to [Dockhold](https://dockhold.eu)
with zero config. It builds to static files and serves them on an HTTPS URL.

[![Deploy to Dockhold](https://img.shields.io/badge/Deploy%20to-Dockhold-2563eb?style=for-the-badge)](https://app.dockhold.eu/new?repo=https://github.com/dockhold/vite-react-starter)

## Deploy it

1. Click **Use this template** (or fork this repo) to get your own copy.
2. Click the **Deploy to Dockhold** button above, or open
   [app.dockhold.eu/new](https://app.dockhold.eu/new), connect GitHub, and pick
   your repo.
3. Dockhold builds from the [`Dockerfile`](Dockerfile) — it compiles the app to
   static files, then serves them on `$PORT`. It goes live at
   `https://<your-app>.dockhold.app` with HTTPS handled.

Every later push to your main branch redeploys automatically.

## How it serves

The [`Dockerfile`](Dockerfile) does two things: `vite build` compiles the app to
static files in `dist/`, then `serve -s dist -l $PORT` serves them with
single-page-app fallback (so client-side routes work), bound to the port
Dockhold assigns:

```dockerfile
RUN npm run build
CMD serve -s dist -l $PORT
```

Listening on `$PORT` is the one rule that matters — never hardcode a port. The
same scripts live in [`package.json`](package.json) so `npm run build && npm start`
works locally too.

## Environment variables

Vite inlines `VITE_`-prefixed variables into the bundle **at build time**, so
they must be present when the Dockerfile runs `npm run build`. Put non-secret
public values in a committed `.env.production` (Vite reads it during the build) —
see [`.env.example`](.env.example). Dashboard variables are injected at *runtime*,
which a pre-built static bundle can't read, so they don't apply here. Never put a
secret behind `VITE_` — it ships to every visitor.

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
