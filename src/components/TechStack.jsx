import { COPY, TECH } from '../data'
import { MiniShape3D } from './Shape3D'

export function TechStack({ lang }) {
  const t = COPY[lang]
  const glyphs = ['cube', 'tetra', 'octa', 'icosa']
  const hues = ['gold', 'silver', 'gold', 'silver']

  return (
    <section id="stack">
      <div className="container">
        <div className="section-label reveal">{t.techLabel} / 04</div>
        <h2 className="section-title reveal">
          {t.techTitle.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{i === 1 ? <em>{line}</em> : line}</span>
          ))}
        </h2>
        <p className="section-sub reveal">{t.techSub}</p>

        <div className="tech-categories reveal">
          {TECH.map((c, idx) => (
            <div key={c.cat} className="tech-cat">
              <div className="tech-cat-name">
                <div className="tech-glyph">
                  <MiniShape3D
                    shape={glyphs[idx % glyphs.length]}
                    hue={hues[idx % hues.length]}
                    speed={0.5 + idx * 0.1}
                    fillAlpha={0.18}
                    edgeAlpha={0.85}
                    scaleMul={0.42}
                  />
                </div>
                <span>{c.cat}</span>
                <span className="tech-cat-num" style={{ marginLeft: 'auto' }}>— {c.num}</span>
              </div>
              <div className="tech-list">
                {c.items.map(it => (
                  <div className="tech-item" key={it.name}>
                    <div className="tech-name">{it.name}</div>
                    <div className="tech-level">
                      <span className="tech-bar">
                        {[1,2,3,4,5].map(i => <i key={i} className={i <= it.level ? 'on' : ''} />)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
