import { COPY } from '../data'
import { CrystalCanvas } from './Shape3D'
import { ParticleField } from './ParticleField'

export function Hero({ lang }) {
  const t = COPY[lang]
  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <ParticleField />
      <div className="crystal-stage">
        <CrystalCanvas />
      </div>
      <div className="crystal-tag">[ Spline · GLB / 3D Object ]</div>

      <div className="hero-content">
        <div className="hero-meta reveal in">
          <span className="pip" />
          <span>{t.heroMeta}</span>
          <span style={{ marginLeft: 'auto', opacity: 0.5 }}>v2.0 — IN DEVELOPMENT</span>
        </div>

        <h1 className="hero-h1">
          <span className="line">
            <span className="word gold-shimmer">{t.heroTagline[0]}</span>
          </span>
          <span className="line">
            <span className="hero-x">×</span>
            <span className="word" style={{ color: 'var(--c-text)' }}>{t.heroTagline[1]}</span>
          </span>
        </h1>

        <div className="hero-foot">
          <div className="hero-bio">
            <span>{t.heroBio}</span>
            <span className="jp">{t.heroBioJp}</span>
          </div>
          <div className="hero-stats">
            {t.stats.map((s, i) => (
              <div key={i}>
                <div className="hero-stat-num">{s.n}</div>
                <div className="hero-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  )
}
