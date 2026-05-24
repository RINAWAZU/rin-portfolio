import { useState } from 'react'
import { COPY } from '../data'

export function Contact({ lang }) {
  const t = COPY[lang]
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard?.writeText('awazurin551@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(lang === 'en'
      ? 'Demo only — connect EmailJS / Resend in production.'
      : 'デモ用フォームです。本番ではEmailJS等を接続予定。')
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label reveal">{t.contactLabel} / 06</div>

        <div className="contact-block">
          <div>
            <h2 className={`contact-h ${lang === 'jp' ? 'jp' : ''} reveal`}>
              <span style={{ display: 'block' }}>{t.contactH[0]}</span>
              <span style={{ display: 'block' }}><em>{t.contactH[1]}</em></span>
            </h2>
            <p className="contact-sub reveal">{t.contactSub}</p>

            <div className="contact-meta reveal">
              <div className="contact-row">
                <span className="k">Email</span>
                <span className="v">
                  awazurin551@gmail.com
                  <span className="copy-pill" onClick={copyEmail}>{copied ? 'Copied' : 'Copy'}</span>
                </span>
              </div>
              <a className="contact-row" href="https://github.com/RINAWAZU" target="_blank" rel="noopener noreferrer">
                <span className="k">GitHub</span>
                <span className="v">@RINAWAZU ↗</span>
              </a>
              <div className="contact-row">
                <span className="k">X / Twitter</span>
                <span className="v">@rin_engineer ↗</span>
              </div>
              <div className="contact-row">
                <span className="k">Note</span>
                <span className="v">note.com/rin ↗</span>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label>{lang === 'en' ? 'Name' : 'お名前'}</label>
              <input type="text" placeholder={lang === 'en' ? 'Your name' : '山田 太郎'} />
            </div>
            <div className="field">
              <label>{lang === 'en' ? 'Email' : 'メールアドレス'}</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="field">
              <label>{lang === 'en' ? 'Project Type' : '案件タイプ'}</label>
              <input type="text" placeholder={lang === 'en' ? 'Brand site / iOS app / AI tool …' : 'ブランドサイト / iOSアプリ / AIツール …'} />
            </div>
            <div className="field">
              <label>{lang === 'en' ? 'Brief' : '概要'}</label>
              <textarea rows="4" placeholder={lang === 'en' ? 'Tell me about the project, scope, and timeline.' : '案件の内容・スコープ・スケジュールをお聞かせください。'} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 12 }}>
              {lang === 'en' ? 'Send Brief' : '送信する'} <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
