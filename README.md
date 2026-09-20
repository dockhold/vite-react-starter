# Vite + React starter

A Vite + React single-page app that deploys to [Dockhold](https://dockhold.eu)
with zero config. It builds to static files and serves them on an HTTPS URL.

[![Deploy on Dockhold](https://dockhold.eu/button.svg)](https://app.dockhold.eu/new?repo=https://github.com/dockhold/vite-react-starter&name=vite-react-starter&ref=button)

## Deploy it

1. Click **Use this template** (or fork this repo) to get your own copy.
2. Click the **Deploy on Dockhold** button above, or open
   [app.dockhold.eu/new](https://app.dockhold.eu/new), connect GitHub, and pick
   your repo.
3. Dockhold builds from the [`Dockerfile`](Dockerfile) — it compiles the app to
   static files, then serves them on `$PORT`. It goes live at
   `https://<your-app>.dockhold.app` with HTTPS handled.

Every later push to your main branch redeploys automatically.

## Deploy with your AI tool

Install the Dockhold plugin or MCP server in your AI coding tool
([setup guide](https://dockhold.eu/docs/recipes/deploy-from-your-ai-tool)), then
say "put this online" in a folder with this template. The tool signs you in
through the browser once and reports the URL when the app is live.

Or from a terminal: `npx dockhold login`, then `npx dockhold deploy`.

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

## Configuration

A basic SPA needs none. To configure it from the dashboard — an API URL, for
example — use **runtime config**: a static build has no server, so it can't read
dashboard variables directly. Instead, have the container write your dashboard
values into the page when it starts and read them from `window.__APP_CONFIG__`.
The [fullstack-web template](https://github.com/dockhold/fullstack-web) shows the
exact setup, and the
[full-stack recipe](https://dockhold.eu/docs/recipes/deploy-a-full-stack-app)
walks through it. Set and change values in the dashboard with no rebuild — don't
bake config into the build with a committed `.env.production`, and never put a
secret in browser code, since anything shipped to the browser is public.

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
