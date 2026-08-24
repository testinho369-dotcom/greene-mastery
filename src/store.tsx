import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from './content'
import { setSoundEnabled } from './audio'

const KEY = 'greene-mastery-v1'
const MAX_HEARTS = 5

export interface LessonResult {
  acc: number
  crowns: number
}

interface State {
  lang: Lang
  xp: number
  streak: number
  lastDay: string
  hearts: number
  heartsDay: string
  sound: boolean
  completed: Record<string, LessonResult>
}

interface Store extends State {
  setLang: (l: Lang) => void
  toggleSound: () => void
  loseHeart: () => void
  restoreHearts: () => void
  completeLesson: (lessonId: string, correct: number, total: number) => { xpGain: number }
  resetAll: () => void
}

const today = () => new Date().toISOString().slice(0, 10)
const yesterday = () => new Date(Date.now() - 86400000).toISOString().slice(0, 10)

const initial: State = {
  lang: 'de',
  xp: 0,
  streak: 0,
  lastDay: '',
  hearts: MAX_HEARTS,
  heartsDay: today(),
  sound: true,
  completed: {},
}

function load(): State {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initial
    const s = { ...initial, ...JSON.parse(raw) }
    if (s.heartsDay !== today()) {
      s.hearts = MAX_HEARTS
      s.heartsDay = today()
    }
    return s
  } catch {
    return initial
  }
}

const Ctx = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(load)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state))
    setSoundEnabled(state.sound)
  }, [state])

  const store = useMemo<Store>(
    () => ({
      ...state,
      setLang: (lang) => setState((s) => ({ ...s, lang })),
      toggleSound: () => setState((s) => ({ ...s, sound: !s.sound })),
      loseHeart: () => setState((s) => ({ ...s, hearts: Math.max(0, s.hearts - 1) })),
      restoreHearts: () => setState((s) => ({ ...s, hearts: MAX_HEARTS })),
      completeLesson: (lessonId, correct, total) => {
        const acc = total > 0 ? correct / total : 0
        const prev = state.completed[lessonId]
        const crowns = acc >= 1 ? 2 : acc >= 0.8 ? 1 : 0
        const xpGain = 10 + Math.round(acc * 5) + (prev ? 0 : 2)
        setState((s) => {
          const isNewDay = s.lastDay !== today()
          const streak = isNewDay ? (s.lastDay === yesterday() ? s.streak + 1 : 1) : s.streak
          const old = s.completed[lessonId]
          return {
            ...s,
            xp: s.xp + xpGain,
            streak,
            lastDay: today(),
            completed: {
              ...s.completed,
              [lessonId]: {
                acc: Math.max(old?.acc ?? 0, acc),
                crowns: Math.max(old?.crowns ?? 0, crowns),
              },
            },
          }
        })
        return { xpGain }
      },
      resetAll: () => setState({ ...initial, heartsDay: today() }),
    }),
    [state],
  )

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>
}

export function useStore(): Store {
  const s = useContext(Ctx)
  if (!s) throw new Error('store missing')
  return s
}

export function levelOf(xp: number): number {
  return Math.floor(Math.sqrt(xp / 20)) + 1
}
