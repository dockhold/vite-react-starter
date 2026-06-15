export default function App() {
  // VITE_ vars are inlined at build time and shipped to the browser — never
  // put a secret behind this prefix. Set VITE_API_URL in the dashboard before
  // deploying so it's present when `vite build` runs.
  const apiUrl = import.meta.env.VITE_API_URL ?? '(not set)'

  return (
    <main>
      <h1>It's live.</h1>
      <p>
        This Vite + React single-page app was built to static files and is being
        served on the port Dockhold assigned, over HTTPS.
      </p>
      <p>
        Edit <code>src/App.jsx</code>, push to your main branch, and the change
        redeploys on its own.
      </p>
      <p className="muted">
        <code>VITE_API_URL</code>: <code>{apiUrl}</code>
      </p>
      <a className="cta" href="https://dockhold.eu/docs/recipes/deploy-a-vite-react-app">
        How this works &rarr;
      </a>
    </main>
  )
}
