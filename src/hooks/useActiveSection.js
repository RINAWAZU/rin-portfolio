import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const ids = ['top', 'about', 'work', 'stack', 'career', 'contact']
    const els = ids.map(id => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, { threshold: 0, rootMargin: '-40% 0px -50% 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}
