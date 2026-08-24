import { useEffect, useRef } from 'react'

const COLORS = ['#E8C547', '#C9A227', '#58CC02', '#F4F1E8', '#FF8A00', '#8B5CF6']

export default function Confetti({ fire }: { fire: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!fire) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const parts = Array.from({ length: 140 }, () => ({
      x: canvas.width / 2 + (Math.random() - 0.5) * 80,
      y: canvas.height * 0.75,
      vx: (Math.random() - 0.5) * 14,
      vy: -8 - Math.random() * 10,
      s: 4 + Math.random() * 6,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      life: 1,
    }))

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      for (const p of parts) {
        p.vy += 0.35
        p.x += p.vx
        p.y += p.vy
        p.r += p.vr
        p.life -= 0.008
        if (p.life > 0 && p.y < canvas.height + 40) {
          alive = true
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.r)
          ctx.globalAlpha = Math.max(0, p.life)
          ctx.fillStyle = p.c
          ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6)
          ctx.restore()
        }
      }
      if (alive) raf = requestAnimationFrame(tick)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [fire])

  if (!fire) return null
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-50" />
}
