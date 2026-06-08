import { COPY, CLIENTS } from '../data'

export function Works({ lang }) {
  const t = COPY[lang]

  return (
    <section id="work" style={{ background: 'var(--c-base-2)' }}>
      <div className="container">
        <div className="section-label reveal">{t.worksLabel} / 03</div>
        <h2 className="section-title reveal">
          {t.worksTitle.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{i === 1 ? <em>{line}</em> : line}</span>
          ))}
        </h2>

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
      </div>
    </section>
  )
}
