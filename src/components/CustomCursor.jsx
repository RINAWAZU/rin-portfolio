import { useState, useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const [mode, setMode] = useState('')

  useEffect(() => {
    let raf
    const move = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18
      ring.current.y += (target.current.y - ring.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    const over = (e) => {
      const t = e.target
      if (t.closest('a, button, .filter-chip, .tag, .work-card, input, textarea, .copy-pill, .lang-switch button')) {
        setMode('hover')
      } else if (t.closest('p, h1, h2, h3, .work-desc, .about-body')) {
        setMode('text')
      } else {
        setMode('')
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${mode}`} />
    </>
  )
}
