import { COPY, CAREER } from '../data'

export function Career({ lang }) {
  const t = COPY[lang]
  return (
    <section id="career" style={{ background: 'var(--c-base-2)' }}>
      <div className="container">
        <div className="section-label reveal">{t.careerLabel} / 05</div>
        <h2 className="section-title reveal" style={{ marginBottom: 80 }}>
          {t.careerTitle.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{i === 1 ? <em>{line}</em> : line}</span>
          ))}
        </h2>

        <div className="timeline reveal-stagger">
          {CAREER.map((it, idx) => {
            const segs = lang === 'jp' ? it.jp : it.en
            const emIdx = lang === 'jp' ? it.emJp : it.emEn
            const small = lang === 'jp' ? it.smallJp : it.smallEn
            return (
              <div key={idx} className={`tl-item ${it.type}`}>
                <div className="tl-when">
                  {it.when}
                  <small>{small}</small>
                </div>
                <div className="tl-what">
                  {segs.map((seg, i) => i === emIdx ? <em key={i}>{seg}</em> : <span key={i}>{seg}</span>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
