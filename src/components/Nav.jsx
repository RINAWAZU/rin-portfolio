import { useState, useEffect } from 'react'
import { COPY } from '../data'

export function Nav({ lang, setLang, active }) {
  const [scrolled, setScrolled] = useState(false)
  const t = COPY[lang]
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">RIN<span className="dot" /></a>
      <div className="nav-links">
        <a href="#work" className={`nav-link ${active === 'work' ? 'active' : ''}`}>{t.nav.work}</a>
        <a href="#about" className={`nav-link ${active === 'about' ? 'active' : ''}`}>{t.nav.about}</a>
        <a href="#stack" className={`nav-link ${active === 'stack' ? 'active' : ''}`}>{t.nav.stack}</a>
        <a href="#career" className={`nav-link ${active === 'career' ? 'active' : ''}`}>{t.nav.career}</a>
        <a href="#contact" className={`nav-link ${active === 'contact' ? 'active' : ''}`}>{t.nav.contact}</a>
      </div>
      <div className="nav-cta">
        <span className="nav-num">2026 / TYO</span>
        <div className="lang-switch">
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'jp' ? 'on' : ''} onClick={() => setLang('jp')}>JP</button>
        </div>
      </div>
    </nav>
  )
}
