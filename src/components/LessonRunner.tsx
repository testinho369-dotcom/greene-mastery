import { useEffect, useMemo, useRef, useState } from 'react'
import type { Course, Question } from '../content'
import { learnCards } from '../content/learn'
import { ui } from '../i18n'
import { useStore } from '../store'
import { sfx } from '../audio'
import Confetti from './Confetti'

type Phase = 'answer' | 'feedback'

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function LessonRunner({
  course,
  lessonIndex,
  onExit,
  onDone,
}: {
  course: Course
  lessonIndex: number
  onExit: () => void
  onDone: () => void
}) {
  const s = useStore()
  const t = ui[s.lang]
  const lesson = course.lessons[lessonIndex]
  const total = lesson.questions.length

  const cards = learnCards[lesson.id] ?? []
  const [stage, setStage] = useState<'learn' | 'quiz'>(cards.length > 0 ? 'learn' : 'quiz')
  const [cardIdx, setCardIdx] = useState(0)
  const [reviewing, setReviewing] = useState(false)
  const [reviewIdx, setReviewIdx] = useState(0)
  const [qi, setQi] = useState(0)
  const [phase, setPhase] = useState<Phase>('answer')
  const [sel, setSel] = useState<number | boolean | null>(null)
  const [fb, setFb] = useState<'correct' | 'wrong' | null>(null)
  const [mistakes, setMistakes] = useState<Set<number>>(new Set())
  const [failed, setFailed] = useState(false)
  const [finished, setFinished] = useState(false)
  const [xpGain, setXpGain] = useState(0)
  const [heartsHit, setHeartsHit] = useState(0)
  const savedRef = useRef(false)

  // match-question state
  const [matchSolved, setMatchSolved] = useState<Record<number, number>>({})
  const [selL, setSelL] = useState<number | null>(null)
  const [selR, setSelR] = useState<number | null>(null)
  const [wrongPair, setWrongPair] = useState<[number, number] | null>(null)

  const q: Question = lesson.questions[Math.min(qi, total - 1)]
  const rightOrder = useMemo(
    () => (q.t === 'match' ? shuffle(q.pairs.map((_, i) => i)) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [qi, lesson.id],
  )
  // map each wrong question to its thematically matching learn card (both follow content order)
  const reviewCards = useMemo(
    () =>
      [...new Set([...mistakes].map((m) => Math.min(cards.length - 1, Math.floor((m * cards.length) / total))))]
        .sort((a, b) => a - b)
        .map((i) => cards[i]),
    [mistakes, cards, total],
  )

  useEffect(() => {
    if (s.hearts === 0 && !finished) setFailed(true)
  }, [s.hearts, finished])

  const resetQuestionState = () => {
    setSel(null)
    setFb(null)
    setPhase('answer')
    setMatchSolved({})
    setSelL(null)
    setSelR(null)
    setWrongPair(null)
  }

  const registerMistake = () => {
    setMistakes((m) => new Set(m).add(qi))
    s.loseHeart()
    setHeartsHit((h) => h + 1)
    sfx.heartLost()
  }

  const check = () => {
    if (q.t === 'mc' || q.t === 'blank') {
      const ok = sel === (q as { a: number }).a
      setFb(ok ? 'correct' : 'wrong')
      setPhase('feedback')
      if (ok) sfx.correct()
      else {
        sfx.wrong()
        registerMistake()
      }
    } else if (q.t === 'tf') {
      const ok = sel === q.a
      setFb(ok ? 'correct' : 'wrong')
      setPhase('feedback')
      if (ok) sfx.correct()
      else {
        sfx.wrong()
        registerMistake()
      }
    }
  }

  const next = () => {
    if (s.hearts === 0) {
      setFailed(true)
      return
    }
    if (qi + 1 >= total) {
      if (!savedRef.current) {
        savedRef.current = true
        const correctCount = total - mistakes.size
        const { xpGain } = s.completeLesson(lesson.id, correctCount, total)
        setXpGain(xpGain)
      }
      setFinished(true)
      sfx.complete()
    } else {
      setQi((i) => i + 1)
      resetQuestionState()
      sfx.click()
    }
  }

  // --- match interaction ---
  const pickMatch = (side: 'l' | 'r', idx: number) => {
    if (phase !== 'answer' || q.t !== 'match') return
    if (side === 'l') {
      if (matchSolved[idx] !== undefined) return
      setSelL(idx)
      sfx.click()
    } else {
      if (Object.values(matchSolved).includes(idx)) return
      setSelR(idx)
      sfx.click()
    }
    const l = side === 'l' ? idx : selL
    const r = side === 'r' ? idx : selR
    if (l !== null && r !== null) {
      if (l === r) {
        const solved = { ...matchSolved, [l]: r }
        setMatchSolved(solved)
        setSelL(null)
        setSelR(null)
        sfx.correct()
        if (Object.keys(solved).length === q.pairs.length) {
          setFb('correct')
          setPhase('feedback')
        }
      } else {
        setWrongPair([l, r])
        registerMistake()
        setTimeout(() => {
          setWrongPair(null)
          setSelL(null)
          setSelR(null)
        }, 500)
      }
    }
  }

  /* ---------- Learn phase: cards before the quiz ---------- */
  if (stage === 'learn' && cards.length > 0) {
    const card = cards[Math.min(cardIdx, cards.length - 1)]
    const last = cardIdx >= cards.length - 1
    return (
      <div className="mx-auto flex min-h-[calc(100dvh-57px)] max-w-2xl flex-col px-4 pb-44 pt-4">
        <div className="flex items-center gap-3">
          <button onClick={onExit} className="rounded-full px-2 py-1 text-xl text-[var(--muted)] hover:bg-[var(--surface2)]">
            ✕
          </button>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-[var(--surface2)]">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.round(((cardIdx + 1) / cards.length) * 100)}%`, background: course.color }}
            />
          </div>
          <div className="font-extrabold" style={{ color: course.color }}>
            📖 {cardIdx + 1}/{cards.length}
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between">
          <div className="text-xs font-black uppercase tracking-widest" style={{ color: course.color }}>
            {t.learn} · {lesson.title[s.lang]}
          </div>
        </div>

        <div key={`${lesson.id}-card-${cardIdx}`} className="anim-slide-x mt-3 flex-1">
          <div className="card-chunky p-6" style={{ borderColor: course.color }}>
            <h2 className="font-display text-2xl font-bold leading-snug" style={{ color: course.color }}>
              {card.t[s.lang]}
            </h2>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-[var(--text)] opacity-90">{card.b[s.lang]}</p>
          </div>
          <p className="mt-4 text-center text-sm font-semibold text-[var(--muted)]">{t.learnSub}</p>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[var(--line)] bg-[rgba(11,16,32,0.92)] backdrop-blur-md">
          <div className="mx-auto max-w-2xl p-4">
            <button
              className="btn-chunky w-full py-3.5 text-lg text-white"
              style={{ background: course.color, borderColor: course.colorDark }}
              onClick={() => {
                if (last) setStage('quiz')
                else setCardIdx((i) => i + 1)
                sfx.click()
              }}
            >
              {last ? `🎯 ${t.startQuiz}` : t.continueBtn}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ---------- Review phase: only the cards behind your mistakes ---------- */
  if (finished && reviewing && reviewCards.length > 0) {
    const card = reviewCards[Math.min(reviewIdx, reviewCards.length - 1)]
    const last = reviewIdx >= reviewCards.length - 1
    return (
      <div className="mx-auto flex min-h-[calc(100dvh-57px)] max-w-2xl flex-col px-4 pb-44 pt-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setReviewing(false)}
            className="rounded-full px-2 py-1 text-xl text-[var(--muted)] hover:bg-[var(--surface2)]"
          >
            ✕
          </button>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-[var(--surface2)]">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.round(((reviewIdx + 1) / reviewCards.length) * 100)}%`, background: course.color }}
            />
          </div>
          <div className="font-extrabold" style={{ color: course.color }}>
            📖 {reviewIdx + 1}/{reviewCards.length}
          </div>
        </div>

        <div className="mt-4 text-xs font-black uppercase tracking-widest" style={{ color: course.color }}>
          {t.reviewMistakes} · {lesson.title[s.lang]}
        </div>

        <div key={`${lesson.id}-review-${reviewIdx}`} className="anim-slide-x mt-3 flex-1">
          <div className="card-chunky p-6" style={{ borderColor: course.color }}>
            <h2 className="font-display text-2xl font-bold leading-snug" style={{ color: course.color }}>
              {card.t[s.lang]}
            </h2>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-[var(--text)] opacity-90">{card.b[s.lang]}</p>
          </div>
          <p className="mt-4 text-center text-sm font-semibold text-[var(--muted)]">{t.reviewSub}</p>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[var(--line)] bg-[rgba(11,16,32,0.92)] backdrop-blur-md">
          <div className="mx-auto max-w-2xl p-4">
            <button
              className="btn-chunky w-full py-3.5 text-lg text-white"
              style={{ background: course.color, borderColor: course.colorDark }}
              onClick={() => {
                if (last) setReviewing(false)
                else setReviewIdx((i) => i + 1)
                sfx.click()
              }}
            >
              {last ? t.backToResult : t.continueBtn}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ---------- Fail screen ---------- */
  if (failed && !finished) {
    return (
      <div className="anim-pop mx-auto flex min-h-[70dvh] max-w-md flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl">💔</div>
        <h2 className="font-display mt-4 text-3xl font-black">{t.outOfHearts}</h2>
        <p className="mt-2 text-[var(--muted)]">{t.outOfHeartsSub}</p>
        <div className="mt-6 flex w-full flex-col gap-3">
          <button
            className="btn-chunky w-full border-[#46A302] bg-[#58CC02] py-3 text-white"
            onClick={() => {
              s.restoreHearts()
              setFailed(false)
              setQi(0)
              setMistakes(new Set())
              savedRef.current = false
              resetQuestionState()
              sfx.click()
            }}
          >
            ❤️ {t.retry}
          </button>
          <button className="btn-chunky w-full border-[#33406B] bg-[var(--surface2)] py-3" onClick={onExit}>
            {t.quit}
          </button>
        </div>
      </div>
    )
  }

  /* ---------- Result screen ---------- */
  if (finished) {
    const correctCount = total - mistakes.size
    const acc = Math.round((correctCount / total) * 100)
    return (
      <div className="anim-pop mx-auto flex min-h-[75dvh] max-w-md flex-col items-center justify-center px-6 text-center">
        <Confetti fire={true} />
        <div className="anim-crown text-7xl">{acc >= 100 ? '🏆' : acc >= 80 ? '👑' : '💪'}</div>
        <h2 className="font-display mt-4 text-4xl font-black text-[var(--gold-bright)]">{t.lessonDone}</h2>
        <div className="mt-6 grid w-full grid-cols-2 gap-3">
          <div className="card-chunky p-4">
            <div className="anim-xp text-3xl font-black text-[var(--gold-bright)]">+{xpGain}</div>
            <div className="text-xs font-bold uppercase tracking-wide text-[var(--muted)]">{t.xpEarned}</div>
          </div>
          <div className="card-chunky p-4">
            <div className="text-3xl font-black" style={{ color: acc >= 80 ? '#58CC02' : '#FF8A00' }}>
              {acc}%
            </div>
            <div className="text-xs font-bold uppercase tracking-wide text-[var(--muted)]">{t.accuracy}</div>
          </div>
        </div>
        {s.streak > 0 && (
          <p className="mt-4 font-extrabold text-[#FF8A00]">
            🔥 {t.newStreak} {s.streak}
          </p>
        )}
        {mistakes.size > 0 && reviewCards.length > 0 && (
          <button
            className="btn-chunky mt-6 w-full border-[#33406B] bg-[var(--surface2)] py-3"
            onClick={() => {
              setReviewIdx(0)
              setReviewing(true)
              sfx.click()
            }}
          >
            📖 {t.reviewMistakes} ({reviewCards.length})
          </button>
        )}
        <button
          className={`btn-chunky w-full border-[#46A302] bg-[#58CC02] py-3.5 text-lg text-white ${mistakes.size > 0 && reviewCards.length > 0 ? 'mt-3' : 'mt-6'}`}
          onClick={onDone}
        >
          {t.continueBtn}
        </button>
      </div>
    )
  }

  const pct = Math.round((qi / total) * 100)
  const canCheck = q.t === 'match' ? false : sel !== null

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-57px)] max-w-2xl flex-col px-4 pb-44 pt-4">
      {/* Lesson top bar */}
      <div className="flex items-center gap-3">
        <button onClick={onExit} className="rounded-full px-2 py-1 text-xl text-[var(--muted)] hover:bg-[var(--surface2)]">
          ✕
        </button>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-[var(--surface2)]">
          <div
            className="h-full rounded-full bg-[#58CC02] transition-all duration-500"
            style={{ width: `${phase === 'feedback' ? Math.round(((qi + 1) / total) * 100) : pct}%` }}
          />
        </div>
        <div key={heartsHit} className={`flex items-center gap-1 font-extrabold text-[#FF4B4B] ${heartsHit > 0 ? 'anim-shake' : ''}`}>
          ❤️ {s.hearts}
        </div>
      </div>

      {/* Question */}
      <div key={`${lesson.id}-${qi}`} className="anim-slide-x mt-6 flex-1">
        <h2 className="font-display text-2xl font-bold leading-snug">
          {q.t === 'blank' ? t.blankHint : q.t === 'tf' ? t.tfPrompt : q.q[s.lang]}
        </h2>

        {/* Multiple choice */}
        {q.t === 'mc' && (
          <div className="mt-6 flex flex-col gap-3">
            {q.o.map((opt, i) => (
              <button
                key={i}
                disabled={phase === 'feedback'}
                onClick={() => {
                  setSel(i)
                  sfx.click()
                }}
                className={`card-chunky flex items-center gap-3 p-4 text-left font-bold transition-all ${
                  fb === 'wrong' && sel === i
                    ? 'anim-shake border-[#FF4B4B] bg-[rgba(255,75,75,0.12)] text-[#FF8080]'
                    : sel === i
                      ? 'border-[#58CC02] bg-[rgba(88,204,2,0.12)] text-[#7BE53A]'
                      : 'hover:border-[#3A4A7A]'
                }`}
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 text-sm font-black ${
                    fb === 'wrong' && sel === i
                      ? 'border-[#FF4B4B] text-[#FF8080]'
                      : sel === i
                        ? 'border-[#58CC02] text-[#7BE53A]'
                        : 'border-[var(--line)] text-[var(--muted)]'
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {opt[s.lang]}
              </button>
            ))}
          </div>
        )}

        {/* True / False */}
        {q.t === 'tf' && (
          <div className="mt-6">
            <div className={`card-chunky p-5 text-lg font-bold leading-relaxed ${fb === 'wrong' ? 'anim-shake' : ''}`}>
              {q.q[s.lang]}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { v: true, label: t.trueLabel, icon: '✓', c: '#58CC02', cd: '#46A302' },
                { v: false, label: t.falseLabel, icon: '✗', c: '#FF4B4B', cd: '#D33131' },
              ].map((b) => (
                <button
                  key={String(b.v)}
                  disabled={phase === 'feedback'}
                  onClick={() => {
                    setSel(b.v)
                    sfx.click()
                  }}
                  className="btn-chunky py-4 text-lg text-white"
                  style={{
                    background: sel === b.v ? b.c : 'var(--surface2)',
                    borderColor: sel === b.v ? b.cd : '#33406B',
                    color: sel === b.v ? '#fff' : 'var(--text)',
                  }}
                >
                  {b.icon} {b.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Fill the blank */}
        {q.t === 'blank' && (
          <div className="mt-6">
            <div className={`card-chunky p-5 text-lg font-bold leading-relaxed ${fb === 'wrong' && sel !== null ? 'anim-shake' : ''}`}>
              {q.before[s.lang]}{' '}
              <span
                className={`inline-block min-w-16 rounded-lg border-b-4 px-2 text-center font-black ${
                  sel !== null ? 'border-[#58CC02] bg-[rgba(88,204,2,0.15)] text-[#7BE53A]' : 'border-[var(--line)] text-[var(--muted)]'
                }`}
              >
                {sel !== null ? q.o[sel as number][s.lang] : '＿＿'}
              </span>{' '}
              {q.after[s.lang]}
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {q.o.map((opt, i) => (
                <button
                  key={i}
                  disabled={phase === 'feedback'}
                  onClick={() => {
                    setSel(i)
                    sfx.click()
                  }}
                  className={`btn-chunky px-5 py-2.5 ${
                    sel === i
                      ? 'border-[#46A302] bg-[#58CC02] text-white'
                      : 'border-[#33406B] bg-[var(--surface2)] text-[var(--text)]'
                  }`}
                >
                  {opt[s.lang]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Match pairs */}
        {q.t === 'match' && (
          <div className="mt-4">
            <p className="text-sm font-bold text-[var(--muted)]">{t.matchHint}</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                {q.pairs.map((p, i) => {
                  const solved = matchSolved[i] !== undefined
                  const active = selL === i
                  const wrong = wrongPair?.[0] === i
                  return (
                    <button
                      key={`l${i}`}
                      disabled={solved}
                      onClick={() => pickMatch('l', i)}
                      className={`btn-chunky min-h-16 px-3 py-3 text-sm normal-case ${
                        solved
                          ? 'border-[#46A302] bg-[#58CC02] text-white opacity-70'
                          : active
                            ? 'border-[#1D5FCC] bg-[#2B7FFF] text-white'
                            : wrong
                              ? 'anim-shake border-[#D33131] bg-[#FF4B4B] text-white'
                              : 'border-[#33406B] bg-[var(--surface2)]'
                      }`}
                    >
                      {p.l[s.lang]}
                    </button>
                  )
                })}
              </div>
              <div className="flex flex-col gap-3">
                {rightOrder.map((ri) => {
                  const solved = Object.values(matchSolved).includes(ri)
                  const active = selR === ri
                  const wrong = wrongPair?.[1] === ri
                  return (
                    <button
                      key={`r${ri}`}
                      disabled={solved}
                      onClick={() => pickMatch('r', ri)}
                      className={`btn-chunky min-h-16 px-3 py-3 text-sm normal-case ${
                        solved
                          ? 'border-[#46A302] bg-[#58CC02] text-white opacity-70'
                          : active
                            ? 'border-[#1D5FCC] bg-[#2B7FFF] text-white'
                            : wrong
                              ? 'anim-shake border-[#D33131] bg-[#FF4B4B] text-white'
                              : 'border-[#33406B] bg-[var(--surface2)]'
                      }`}
                    >
                      {q.pairs[ri].r[s.lang]}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom area: check button or feedback sheet */}
      {phase === 'answer' && q.t !== 'match' && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[var(--line)] bg-[rgba(11,16,32,0.92)] backdrop-blur-md">
          <div className="mx-auto max-w-2xl p-4">
            <button
              disabled={!canCheck}
              onClick={check}
              className="btn-chunky w-full border-[#46A302] bg-[#58CC02] py-3.5 text-lg text-white"
            >
              {t.check}
            </button>
          </div>
        </div>
      )}

      {phase === 'feedback' && fb && (
        <div
          className="anim-sheet fixed inset-x-0 bottom-0 z-40 border-t-2"
          style={{
            background: fb === 'correct' ? 'rgba(88,204,2,0.16)' : 'rgba(255,75,75,0.16)',
            borderColor: fb === 'correct' ? '#58CC02' : '#FF4B4B',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="mx-auto max-w-2xl p-4">
            <div className="flex items-start gap-3">
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl font-black text-white"
                style={{ background: fb === 'correct' ? '#58CC02' : '#FF4B4B' }}
              >
                {fb === 'correct' ? '✓' : '✗'}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xl font-black" style={{ color: fb === 'correct' ? '#7BE53A' : '#FF8080' }}>
                  {fb === 'correct' ? t.correctVariants[Math.floor(Math.random() * t.correctVariants.length)] : t.wrong}
                </p>
                {'x' in q && q.x && (
                  <p className="mt-1 text-sm font-semibold leading-snug text-[var(--text)] opacity-90">{q.x[s.lang]}</p>
                )}
                {fb === 'wrong' && (q.t === 'mc' || q.t === 'blank') && (
                  <p className="mt-1 text-sm font-bold text-[#FF8080]">
                    {t.correctAnswer}: {(q as { o: { de: string; en: string }[]; a: number }).o[(q as { a: number }).a][s.lang]}
                  </p>
                )}
                {fb === 'wrong' && q.t === 'tf' && (
                  <p className="mt-1 text-sm font-bold text-[#FF8080]">
                    {t.correctAnswer}: {q.a ? t.trueLabel : t.falseLabel}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={next}
              className="btn-chunky mt-3 w-full py-3.5 text-lg text-white"
              style={{
                background: fb === 'correct' ? '#58CC02' : '#FF4B4B',
                borderColor: fb === 'correct' ? '#46A302' : '#D33131',
              }}
            >
              {qi + 1 >= total ? t.finish : t.next}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
