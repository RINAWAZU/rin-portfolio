import { useState, useEffect } from 'react'
import { useReveal } from './hooks/useReveal'
import { useActiveSection } from './hooks/useActiveSection'
import { CustomCursor } from './components/CustomCursor'
import { Ambient3DBackground } from './components/Shape3D'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Works } from './components/Works'
import { TechStack } from './components/TechStack'
import { Career } from './components/Career'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('jp')
  useReveal()
  const active = useActiveSection()

  useEffect(() => {
    document.documentElement.lang = lang === 'jp' ? 'ja' : 'en'
    document.documentElement.classList.toggle('lang-jp', lang === 'jp')
  }, [lang])

  return (
    <>
      <Loader />
      <CustomCursor />
      <Ambient3DBackground />
      <div className="grain" />
      <div className="vignette" />
      <Nav lang={lang} setLang={setLang} active={active} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Works lang={lang} />
      <TechStack lang={lang} />
      <Career lang={lang} />
      <Pricing />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
