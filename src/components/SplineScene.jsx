import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className, style }) {
  return (
    <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
      <Spline scene={scene} className={className} style={style} />
    </Suspense>
  )
}
