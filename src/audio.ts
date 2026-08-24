// Tiny WebAudio synth — no audio files needed (Duolingo-style blips)
let ctx: AudioContext | null = null
let enabled = true

export function setSoundEnabled(v: boolean) {
  enabled = v
}

function ac(): AudioContext | null {
  if (!enabled) return null
  try {
    if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    if (ctx.state === 'suspended') void ctx.resume()
    return ctx
  } catch {
    return null
  }
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'triangle', gain = 0.16) {
  const c = ac()
  if (!c) return
  const t = c.currentTime + start
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = type
  o.frequency.setValueAtTime(freq, t)
  g.gain.setValueAtTime(0, t)
  g.gain.linearRampToValueAtTime(gain, t + 0.015)
  g.gain.exponentialRampToValueAtTime(0.001, t + dur)
  o.connect(g).connect(c.destination)
  o.start(t)
  o.stop(t + dur + 0.05)
}

export const sfx = {
  click() {
    tone(620, 0, 0.08, 'triangle', 0.1)
  },
  correct() {
    tone(523.25, 0, 0.14)
    tone(784, 0.09, 0.22)
  },
  wrong() {
    tone(196, 0, 0.22, 'sawtooth', 0.1)
    tone(147, 0.1, 0.3, 'sawtooth', 0.09)
  },
  heartLost() {
    tone(330, 0, 0.15, 'square', 0.08)
    tone(247, 0.12, 0.25, 'square', 0.08)
  },
  complete() {
    tone(523.25, 0, 0.16)
    tone(659.25, 0.12, 0.16)
    tone(784, 0.24, 0.16)
    tone(1046.5, 0.36, 0.4)
  },
  crown() {
    tone(880, 0, 0.12)
    tone(1174.7, 0.1, 0.3)
  },
}
