export default function NotFound() {
  return (
    <main className="section">
      <div className="shell">
        <div className="cta-band">
          <p className="eyebrow eyebrow--soft">404</p>
          <h2>The page you requested is no longer on this route.</h2>
          <p>Return to the main site to continue exploring Tracodi Labour.</p>
          <div className="hero__actions">
            <a className="button button--light" href="/">
              Back to homepage
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
