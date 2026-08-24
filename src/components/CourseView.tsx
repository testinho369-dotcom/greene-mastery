import type { Course } from '../content'
import { ui } from '../i18n'
import { useStore } from '../store'
import { sfx } from '../audio'

// Zigzag offsets for the Duolingo-style lesson path
const OFFSETS = [0, 44, 60, 44, 0, -44, -60, -44]

export default function CourseView({
  course,
  onBack,
  onStartLesson,
}: {
  course: Course
  onBack: () => void
  onStartLesson: (index: number) => void
}) {
  const s = useStore()
  const t = ui[s.lang]
  const firstOpen = course.lessons.findIndex((l) => !s.completed[l.id])
  const currentIdx = firstOpen === -1 ? course.lessons.length - 1 : firstOpen
  const done = course.lessons.filter((l) => s.completed[l.id]).length

  return (
    <main className="mx-auto max-w-2xl px-4 pb-20">
      {/* Course header */}
      <div
        className="anim-pop sticky top-[57px] z-30 -mx-4 mt-0 border-b-2 px-4 py-4 backdrop-blur-md"
        style={{
          background: `linear-gradient(135deg, ${course.color}22, ${course.colorDark}33)`,
          borderColor: `${course.color}55`,
        }}
      >
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <button
            onClick={() => {
              sfx.click()
              onBack()
            }}
            className="btn-chunky border-[#33406B] bg-[var(--surface2)] px-3 py-1.5 text-sm text-[var(--text)]"
          >
            ←
          </button>
          <div
            className="grid h-12 w-12 place-items-center rounded-2xl text-2xl shadow-lg"
            style={{ background: `linear-gradient(135deg, ${course.color}, ${course.colorDark})` }}
          >
            {course.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="font-display truncate text-lg font-bold">{course.title[s.lang]}</h1>
            <p className="text-xs font-bold text-[var(--muted)]">
              {done}/{course.lessons.length} {t.lessons} · {t.completed}: {done > 0 ? '💪' : '—'}
            </p>
          </div>
        </div>
      </div>

      {/* Lesson path */}
      <div className="mt-8 flex flex-col items-center">
        {course.lessons.map((lesson, i) => {
          const res = s.completed[lesson.id]
          const unlocked = i === 0 || !!s.completed[course.lessons[i - 1].id]
          const isCurrent = i === currentIdx && unlocked
          const offset = OFFSETS[i % OFFSETS.length]

          return (
            <div key={lesson.id} className="anim-pop relative flex flex-col items-center" style={{ animationDelay: `${i * 40}ms` }}>
              {isCurrent && (
                <div className="anim-float absolute -top-9 z-10 rounded-xl border-2 border-[var(--gold)] bg-[var(--surface)] px-3 py-1 text-xs font-black uppercase tracking-wider text-[var(--gold-bright)] shadow-xl">
                  {t.start} ▼
                </div>
              )}
              <button
                disabled={!unlocked}
                onClick={() => {
                  sfx.click()
                  onStartLesson(i)
                }}
                className="btn-chunky relative grid h-[72px] w-[72px] place-items-center rounded-full text-3xl disabled:cursor-not-allowed"
                style={{
                  transform: `translateX(${offset}px)`,
                  background: unlocked
                    ? `linear-gradient(135deg, ${course.color}, ${course.colorDark})`
                    : 'var(--surface2)',
                  borderColor: unlocked ? course.colorDark : 'var(--line)',
                  boxShadow: isCurrent ? `0 0 0 6px ${course.color}33, 0 0 24px ${course.color}66` : undefined,
                }}
              >
                {!unlocked ? '🔒' : res ? (res.crowns >= 1 ? '👑' : '✓') : '▶'}
              </button>
              <div
                className="mt-1.5 mb-4 w-40 text-center text-xs font-bold leading-tight text-[var(--muted)]"
                style={{ transform: `translateX(${offset}px)` }}
              >
                <span className={unlocked ? 'text-[var(--text)]' : ''}>{lesson.title[s.lang]}</span>
                <br />
                <span className="font-semibold opacity-70">{lesson.sub[s.lang]}</span>
              </div>
            </div>
          )
        })}

        {/* Trophy at path end */}
        <div className="anim-pop mt-2 text-center" style={{ animationDelay: `${course.lessons.length * 40}ms` }}>
          <div
            className={`grid h-20 w-20 place-items-center rounded-full text-4xl ${
              done === course.lessons.length ? 'anim-crown' : 'opacity-30 grayscale'
            }`}
            style={{ background: 'linear-gradient(135deg, #E8C547, #C9A227)' }}
          >
            🏆
          </div>
          <p className="mt-2 text-xs font-bold text-[var(--muted)]">
            {done === course.lessons.length ? t.completed : t.locked}
          </p>
        </div>
      </div>
    </main>
  )
}
