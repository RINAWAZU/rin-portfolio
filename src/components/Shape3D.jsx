import { useRef, useEffect } from 'react'

/* ============================================================
   3D Shape Library — procedural polyhedra
   ============================================================ */
export const SHAPE_LIBRARY = {
  // Octahedron — 6 verts
  octa: () => ({
    vertices: [
      [0,-1,0],[0,1,0],
      [1,0,0],[-1,0,0],
      [0,0,1],[0,0,-1],
    ],
    edges: [[0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[4,3],[3,5],[5,2]],
    faces: [[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,4,2],[1,3,4],[1,5,3],[1,2,5]],
  }),
  // Tetrahedron — 4 verts
  tetra: () => {
    const a = 1
    const v = [
      [ a, a, a],
      [-a,-a, a],
      [-a, a,-a],
      [ a,-a,-a],
    ]
    return {
      vertices: v,
      edges: [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],
      faces: [[0,1,2],[0,2,3],[0,3,1],[1,3,2]],
    }
  },
  // Cube — 8 verts
  cube: () => {
    const v = [
      [-1,-1,-1],[ 1,-1,-1],[ 1, 1,-1],[-1, 1,-1],
      [-1,-1, 1],[ 1,-1, 1],[ 1, 1, 1],[-1, 1, 1],
    ]
    return {
      vertices: v,
      edges: [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],
      faces: [
        [0,1,2],[0,2,3],
        [4,6,5],[4,7,6],
        [0,4,5],[0,5,1],
        [3,2,6],[3,6,7],
        [0,3,7],[0,7,4],
        [1,5,6],[1,6,2],
      ],
    }
  },
  // Icosahedron — 12 verts
  icosa: () => {
    const t = (1 + Math.sqrt(5)) / 2
    const norm = Math.sqrt(1 + t * t)
    const v = [
      [-1, t, 0],[ 1, t, 0],[-1,-t, 0],[ 1,-t, 0],
      [ 0,-1, t],[ 0, 1, t],[ 0,-1,-t],[ 0, 1,-t],
      [ t, 0,-1],[ t, 0, 1],[-t, 0,-1],[-t, 0, 1],
    ].map(p => p.map(c => c / norm))
    const f = [
      [0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],
      [1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],
      [3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],
      [4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1],
    ]
    const eSet = new Set()
    f.forEach(([a,b,c]) => {
      [[a,b],[b,c],[c,a]].forEach(([x,y]) => {
        const k = x < y ? `${x}_${y}` : `${y}_${x}`
        eSet.add(k)
      })
    })
    const edges = [...eSet].map(s => s.split('_').map(Number))
    return { vertices: v, edges, faces: f }
  },
  // Diamond — bipyramid (8 verts: 1 top, 1 bottom, 6 ring)
  diamond: () => {
    const ring = []
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2
      ring.push([Math.cos(a), 0, Math.sin(a)])
    }
    const v = [
      [0, 1.4, 0],
      [0,-0.9, 0],
      ...ring,
    ]
    const edges = []
    for (let i = 0; i < 6; i++) {
      const a = 2 + i, b = 2 + ((i + 1) % 6)
      edges.push([a, b])
      edges.push([0, a])
      edges.push([1, a])
    }
    const faces = []
    for (let i = 0; i < 6; i++) {
      const a = 2 + i, b = 2 + ((i + 1) % 6)
      faces.push([0, a, b])
      faces.push([1, b, a])
    }
    return { vertices: v, edges, faces }
  },
}

/* ============================================================
   Generic 3D Shape — canvas renderer
   ============================================================ */
export function Shape3D({
  shape = 'octa',
  speed = 1,
  fillAlpha = 0.18,
  edgeAlpha = 0.7,
  showRing = false,
  showVertices = true,
  scaleMul = 0.34,
  hue = 'gold',
  mouseTrack = false,
  initialRot = [0, 0, 0],
}) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, dpr, raf

    const geom = SHAPE_LIBRARY[shape] ? SHAPE_LIBRARY[shape]() : SHAPE_LIBRARY.octa()
    const { vertices, edges, faces } = geom

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let move = null
    if (mouseTrack) {
      move = (e) => {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current.x = (e.clientX - rect.left - rect.width / 2) / rect.width
        mouseRef.current.y = (e.clientY - rect.top - rect.height / 2) / rect.height
      }
      window.addEventListener('mousemove', move)
    }

    let t = 0
    let mx = 0, my = 0

    const project = (v, ax, ay, az, scale, cx, cy) => {
      let [x,y,z] = v
      let y1 = y * Math.cos(ax) - z * Math.sin(ax)
      let z1 = y * Math.sin(ax) + z * Math.cos(ax)
      let x2 = x * Math.cos(ay) + z1 * Math.sin(ay)
      let z2 = -x * Math.sin(ay) + z1 * Math.cos(ay)
      let x3 = x2 * Math.cos(az) - y1 * Math.sin(az)
      let y3 = x2 * Math.sin(az) + y1 * Math.cos(az)
      const persp = 3 / (3 + z2)
      return { x: cx + x3 * scale * persp, y: cy + y3 * scale * persp, z: z2 }
    }

    const colors = hue === 'silver'
      ? { fillA: 'rgba(220, 226, 232,', fillB: 'rgba(160, 170, 180,', edge: 'rgba(220, 226, 232,', glint: 'rgba(220, 226, 232,' }
      : { fillA: 'rgba(232, 199, 102,', fillB: 'rgba(201, 168, 76,', edge: 'rgba(232, 199, 102,', glint: 'rgba(232, 199, 102,' }

    const render = () => {
      t += 0.005 * speed
      mx += (mouseRef.current.x - mx) * 0.06
      my += (mouseRef.current.y - my) * 0.06

      ctx.clearRect(0, 0, w, h)

      const cx = w/2, cy = h/2
      const scale = Math.min(w, h) * scaleMul

      const ax = initialRot[0] + t * 0.6 + my * 0.5
      const ay = initialRot[1] + t * 0.8 + mx * 0.7
      const az = initialRot[2] + t * 0.3

      const proj = vertices.map(v => project(v, ax, ay, az, scale, cx, cy))

      if (showRing) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(cx, cy, scale * 1.4, 0, Math.PI * 2)
        ctx.strokeStyle = `${colors.edge} 0.08)`
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(cx, cy, scale * 1.6, 0, Math.PI * 2)
        ctx.strokeStyle = `${colors.edge} 0.04)`
        ctx.stroke()
        ctx.restore()
      }

      const faceData = faces.map(f => {
        const avgZ = (proj[f[0]].z + proj[f[1]].z + proj[f[2]].z) / 3
        return { f, avgZ }
      }).sort((a,b) => a.avgZ - b.avgZ)

      faceData.forEach(({ f, avgZ }) => {
        const a = proj[f[0]], b = proj[f[1]], c = proj[f[2]]
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.lineTo(c.x, c.y)
        ctx.closePath()
        const intensity = (avgZ + 1) * 0.5
        const alpha = 0.04 + intensity * fillAlpha
        const grad = ctx.createLinearGradient(a.x, a.y, c.x, c.y)
        grad.addColorStop(0, `${colors.fillA} ${alpha})`)
        grad.addColorStop(1, `${colors.fillB} ${alpha * 0.4})`)
        ctx.fillStyle = grad
        ctx.fill()
      })

      ctx.lineWidth = 1.2
      edges.forEach(([i,j]) => {
        const a = proj[i], b = proj[j]
        const avgZ = (a.z + b.z) / 2
        const alpha = (0.4 + (avgZ + 1) * 0.3) * edgeAlpha
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `${colors.edge} ${alpha})`
        ctx.stroke()
      })

      if (showVertices) {
        proj.forEach(p => {
          const r = 2.5 + (p.z + 1) * 1.5
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6)
          glow.addColorStop(0, `${colors.glint} 0.8)`)
          glow.addColorStop(1, `${colors.glint} 0)`)
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = '#fff'
          ctx.beginPath()
          ctx.arc(p.x, p.y, r * 0.6, 0, Math.PI * 2)
          ctx.fill()
        })
      }

      raf = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resize)
      if (move) window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [shape, speed, fillAlpha, edgeAlpha, showRing, showVertices, scaleMul, hue, mouseTrack])

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
}

/* ============================================================
   Hero crystal — octahedron with mouse tracking and rings
   ============================================================ */
export function CrystalCanvas() {
  return (
    <Shape3D
      shape="octa"
      speed={1}
      fillAlpha={0.18}
      edgeAlpha={1}
      showRing={true}
      showVertices={true}
      scaleMul={0.34}
      hue="gold"
      mouseTrack={true}
    />
  )
}

/* ============================================================
   Ambient 3D background — multiple polyhedra drifting slowly
   behind the entire site at very low opacity.
   ============================================================ */
export function Ambient3DBackground() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, dpr, raf

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let scrollY = window.scrollY
    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    const SHAPES = ['octa', 'tetra', 'cube', 'icosa', 'diamond']
    const drifters = SHAPES.map((s, i) => {
      const geom = SHAPE_LIBRARY[s]()
      return {
        geom,
        x: (i * 0.23 + 0.1) % 1,
        y: (i * 0.31 + 0.15) % 1,
        size: 90 + (i * 31) % 80,
        speed: 0.15 + (i * 0.07) % 0.25,
        phase: i * 1.7,
        driftX: 80 + (i * 19) % 120,
        driftY: 60 + (i * 23) % 80,
      }
    })

    const project = (v, ax, ay, az, scale, cx, cy) => {
      let [x,y,z] = v
      let y1 = y * Math.cos(ax) - z * Math.sin(ax)
      let z1 = y * Math.sin(ax) + z * Math.cos(ax)
      let x2 = x * Math.cos(ay) + z1 * Math.sin(ay)
      let z2 = -x * Math.sin(ay) + z1 * Math.cos(ay)
      let x3 = x2 * Math.cos(az) - y1 * Math.sin(az)
      let y3 = x2 * Math.sin(az) + y1 * Math.cos(az)
      const persp = 3 / (3 + z2)
      return { x: cx + x3 * scale * persp, y: cy + y3 * scale * persp, z: z2 }
    }

    let t = 0
    const render = () => {
      t += 0.005
      ctx.clearRect(0, 0, w, h)

      const scrollNorm = scrollY * 0.0008

      drifters.forEach((d) => {
        const { geom, size, speed, phase, driftX, driftY } = d
        const bx = d.x * w
        const by = d.y * h
        const cx = bx + Math.cos(t * speed + phase) * driftX
        const cy = by + Math.sin(t * speed * 0.8 + phase * 1.3) * driftY - scrollY * 0.15

        if (cy < -size * 2 || cy > h + size * 2) return

        const ax = t * 0.4 + phase
        const ay = t * 0.3 + phase * 0.7 + scrollNorm
        const az = t * 0.15
        const proj = geom.vertices.map(v => project(v, ax, ay, az, size, cx, cy))

        ctx.lineWidth = 1
        geom.edges.forEach(([i, j]) => {
          const a = proj[i], b = proj[j]
          const avgZ = (a.z + b.z) / 2
          const alpha = 0.08 + (avgZ + 1) * 0.06
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(232, 199, 102, ${alpha})`
          ctx.stroke()
        })
      })

      raf = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-3d-bg" />
}

/* ============================================================
   Mini 3D glyph — for tech category headers, no mouse tracking
   ============================================================ */
export function MiniShape3D({ shape, hue = 'gold', speed = 0.5, scaleMul = 0.42, fillAlpha = 0.18, edgeAlpha = 0.85 }) {
  return (
    <Shape3D
      shape={shape}
      hue={hue}
      speed={speed}
      scaleMul={scaleMul}
      fillAlpha={fillAlpha}
      edgeAlpha={edgeAlpha}
      showRing={false}
      showVertices={false}
      mouseTrack={false}
    />
  )
}
