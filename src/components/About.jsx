import { COPY } from '../data'

export function About({ lang }) {
  const t = COPY[lang]
  return (
    <section id="about">
      <div className="container">
        <div className="section-label reveal">{t.aboutLabel} / 02</div>
        <h2 className="section-title reveal">
          {t.aboutTitle.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {i === 1 ? <em>{line}</em> : line}
            </span>
          ))}
        </h2>

        <div className="about-grid">
          <div className="reveal">
            <div className="avatar">
              <img className="avatar-img" src="/assets/portrait.png" alt="RIN portrait" />
              <div className="avatar-frame-corner tl" />
              <div className="avatar-frame-corner tr" />
              <div className="avatar-frame-corner bl" />
              <div className="avatar-frame-corner br" />
              <div className="avatar-id">{t.avatarTag}</div>
            </div>
          </div>

          <div className="about-body reveal-stagger">
            {t.aboutBody.map((p, i) => (
              <p key={i}>
                {p.lead && <span className="lead">{p.lead}</span>}
                {p.rest}
              </p>
            ))}
            <div className="tag-row">
              {t.aboutTags.map(([cls, txt], i) => (
                <span key={i} className={`tag ${cls}`}>{cls === 'gold' && '● '}{txt}</span>
              ))}
            </div>
            <div className="about-meta-row">
              {t.aboutMeta.map((m, i) => (
                <div key={i}>
                  <div className="meta-num">{m.n}<span>{m.a}</span></div>
                  <div className="meta-lbl">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
