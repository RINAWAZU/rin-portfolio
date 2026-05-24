import { useState } from 'react'
import { COPY, WORKS, CLIENTS } from '../data'

export function Works({ lang }) {
  const t = COPY[lang]
  const [filter, setFilter] = useState('All')
  const cats = ['All', 'Web', 'iOS App', 'Landing', 'SaaS', 'AI']
  const filtered = filter === 'All' ? WORKS : WORKS.filter(w => w.cat === filter)

  return (
    <section id="work" style={{ background: 'var(--c-base-2)' }}>
      <div className="container">
        <div className="works-head">
          <div>
            <div className="section-label reveal">{t.worksLabel} / 03</div>
            <h2 className="section-title reveal">
              {t.worksTitle.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{i === 1 ? <em>{line}</em> : line}</span>
              ))}
            </h2>
            <p className="section-sub reveal" style={{ marginBottom: 0 }}>{t.worksSub}</p>
          </div>
          <div className="works-filters reveal">
            {cats.map(c => (
              <button key={c} className={`filter-chip ${filter === c ? 'on' : ''}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Clients / Adopted projects panel */}
        <div className="clients-panel reveal">
          <div className="clients-stat">
            <div className="clients-label">
              {lang === 'jp' ? '採用案件数' : 'Adopted Projects'}
            </div>
            <div className="clients-num">{String(CLIENTS.count).padStart(2, '0')}</div>
            <div className="clients-sub">
              {lang === 'jp'
                ? '実際にご依頼いただきリリースされた案件'
                : 'Commissions actually delivered to client'}
            </div>
          </div>
          <div className="clients-list">
            <div className="clients-list-head">
              <span>{lang === 'jp' ? 'クライアント' : 'Clients'}</span>
              <span>{lang === 'jp' ? '年' : 'Year'}</span>
            </div>
            {CLIENTS.items.map((c, i) => (
              <div className="clients-row" key={i}>
                <span className="clients-name">
                  {c.status === 'ndisclosed'
                    ? (lang === 'jp' ? '— 非公開クライアント —' : '— Confidential —')
                    : c.name}
                  <span className="clients-kind">{c.kind[lang]}</span>
                </span>
                <span className="clients-year">{c.year}</span>
              </div>
            ))}
            <div className="clients-note">
              {lang === 'jp'
                ? '※ 実名公開は順次対応予定。NDA案件は記載しません。'
                : 'Names disclosed progressively. NDA-bound work omitted.'}
            </div>
          </div>
        </div>

        <div className="works-grid reveal-stagger">
          {filtered.map(w => (
            <article key={w.id} className={`work-card size-${w.size}`}>
              <div className="work-thumb">
                <div className="work-thumb-inner">
                  <div className="work-thumb-mark">{w.mark}</div>
                </div>
                <div className="work-num">№ {w.num}</div>
                <div className={`work-status ${w.status}`}>
                  <span className="dot" />
                  {w.status === 'done' && (lang === 'en' ? 'Shipped' : '完成')}
                  {w.status === 'dev' && (lang === 'en' ? 'In Dev' : '開発中')}
                  {w.status === 'plan' && (lang === 'en' ? 'Planned' : '予定')}
                </div>
                <div className="work-cat">{w.cat}</div>
              </div>
              <div className="work-info">
                <h3 className="work-title">{w.title[lang]}</h3>
                <p className="work-desc">{w.desc[lang]}</p>
                <div className="work-stack">
                  {w.stack.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
