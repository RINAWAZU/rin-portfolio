export function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row" style={{ marginBottom: 40 }}>
          <div className="footer-links">
            <a href="https://github.com/RINAWAZU" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub ↗</a>
            <a href="#" className="footer-link">X / Twitter ↗</a>
            <a href="#" className="footer-link">Note ↗</a>
            <a href="#" className="footer-link">LinkedIn ↗</a>
          </div>
          <div className="footer-meta">
            <div>Designed & built by RIN</div>
            <div>v2.0 — {lang === 'en' ? 'Updated May 2026' : '2026年5月更新'}</div>
            <div>© RIN 2026 · Tokyo</div>
          </div>
        </div>
        <div className="footer-mark">RIN.</div>
      </div>
    </footer>
  )
}
