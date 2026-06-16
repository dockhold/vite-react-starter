export default function App() {
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
        Need to call an API? Read its URL at runtime from a dashboard variable —
        see the full-stack recipe. Don't bake config into the build.
      </p>
      <a className="cta" href="https://dockhold.eu/docs/recipes/deploy-a-vite-react-app">
        How this works &rarr;
      </a>
    </main>
  )
}
