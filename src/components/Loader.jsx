import { useState, useEffect } from 'react'

export function Loader() {
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1900)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className={`loader ${gone ? 'gone' : ''}`}>
      <div className="loader-mark">R</div>
      <div className="loader-text">RIN — Portfolio v2.0</div>
    </div>
  )
}
