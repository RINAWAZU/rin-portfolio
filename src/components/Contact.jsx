import { useState } from 'react'
import { COPY } from '../data'
import { submitContactForm } from '../lib/submitContact'

const INITIAL_FORM = {
  name: '',
  email: '',
  projectType: '',
  brief: '',
}

function validateForm(form, messages) {
  const errors = {}
  if (!form.name.trim()) errors.name = messages.required
  if (!form.email.trim()) {
    errors.email = messages.required
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = messages.invalidEmail
  }
  if (!form.brief.trim()) errors.brief = messages.required
  return errors
}

export function Contact({ lang }) {
  const t = COPY[lang]
  const f = t.contactForm
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const copyEmail = () => {
    navigator.clipboard?.writeText('awazurin551@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validateForm(form, f)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      await submitContactForm(form)
      setForm(INITIAL_FORM)
      setStatus('success')
    } catch (err) {
      setStatus(err.message === 'FORM_NOT_CONFIGURED' ? 'notConfigured' : 'error')
    }
  }

  const isSubmitting = status === 'submitting'

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

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <input
              type="checkbox"
              name="botcheck"
              className="contact-honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className={`field${errors.name ? ' field--error' : ''}`}>
              <label htmlFor="contact-name">{lang === 'en' ? 'Name' : 'お名前'}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={lang === 'en' ? 'Your name' : '山田 太郎'}
                autoComplete="name"
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && (
                <span id="contact-name-error" className="field-error" role="alert">{errors.name}</span>
              )}
            </div>

            <div className={`field${errors.email ? ' field--error' : ''}`}>
              <label htmlFor="contact-email">{lang === 'en' ? 'Email' : 'メールアドレス'}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && (
                <span id="contact-email-error" className="field-error" role="alert">{errors.email}</span>
              )}
            </div>

            <div className="field">
              <label htmlFor="contact-project-type">{lang === 'en' ? 'Project Type' : '案件タイプ'}</label>
              <input
                id="contact-project-type"
                name="projectType"
                type="text"
                value={form.projectType}
                onChange={handleChange}
                placeholder={lang === 'en' ? 'Brand site / iOS app / AI tool …' : 'ブランドサイト / iOSアプリ / AIツール …'}
                disabled={isSubmitting}
              />
            </div>

            <div className={`field${errors.brief ? ' field--error' : ''}`}>
              <label htmlFor="contact-brief">{lang === 'en' ? 'Brief' : '概要'}</label>
              <textarea
                id="contact-brief"
                name="brief"
                rows="4"
                value={form.brief}
                onChange={handleChange}
                placeholder={lang === 'en' ? 'Tell me about the project, scope, and timeline.' : '案件の内容・スコープ・スケジュールをお聞かせください。'}
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.brief)}
                aria-describedby={errors.brief ? 'contact-brief-error' : undefined}
              />
              {errors.brief && (
                <span id="contact-brief-error" className="field-error" role="alert">{errors.brief}</span>
              )}
            </div>

            {status === 'success' && (
              <p className="form-status form-status--success" role="status">{f.success}</p>
            )}
            {status === 'error' && (
              <p className="form-status form-status--error" role="alert">{f.error}</p>
            )}
            {status === 'notConfigured' && (
              <p className="form-status form-status--error" role="alert">{f.notConfigured}</p>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: 12 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? f.sending : (lang === 'en' ? 'Send Brief' : '送信する')}
              {!isSubmitting && <span className="btn-arrow">→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
