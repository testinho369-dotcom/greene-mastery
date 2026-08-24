import { courses, totalLessons, totalQuestions, type Course } from '../content'
import { ui } from '../i18n'
import { levelOf, useStore } from '../store'
import { sfx } from '../audio'

function CourseCard({ course, onOpen }: { course: Course; onOpen: () => void }) {
  const s = useStore()
  const t = ui[s.lang]
  const done = course.lessons.filter((l) => s.completed[l.id]).length
  const pct = Math.round((done / course.lessons.length) * 100)
  const crowns = course.lessons.reduce((n, l) => n + (s.completed[l.id]?.crowns ?? 0), 0)
  const qCount = course.lessons.reduce((n, l) => n + l.questions.length, 0)

  return (
    <button
      onClick={() => {
        sfx.click()
        onOpen()
      }}
      className="card-chunky group w-full p-4 text-left transition-transform duration-150 hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-4">
        <div
          className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-3xl shadow-lg transition-transform duration-150 group-hover:scale-105"
          style={{ background: `linear-gradient(135deg, ${course.color}, ${course.colorDark})` }}
        >
          {course.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-display truncate text-lg font-bold">{course.title[s.lang]}</h3>
            {course.id === 'synthesis' && (
              <span className="rounded-full bg-[var(--gold)] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#0B1020]">
                {t.bonus}
              </span>
            )}
          </div>
          <p className="truncate text-sm text-[var(--muted)]">{course.sub[s.lang]}</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-[var(--surface2)]">
              <div
                className="anim-fill h-full rounded-full"
                style={{ ['--fill' as string]: `${pct}%`, width: `${pct}%`, background: course.color }}
              />
            </div>
            <span className="text-xs font-extrabold text-[var(--muted)]">
              {done}/{course.lessons.length}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1 text-xs font-bold text-[var(--muted)]">
          {crowns > 0 && <span className="text-[var(--gold-bright)]">👑 {crowns}</span>}
          <span>
            {course.lessons.length} {t.lessons} · {qCount} {t.questions}
          </span>
        </div>
      </div>
    </button>
  )
}

export default function Home({ onOpenCourse }: { onOpenCourse: (id: string) => void }) {
  const s = useStore()
  const t = ui[s.lang]
  const doneTotal = courses.reduce((n, c) => n + c.lessons.filter((l) => s.completed[l.id]).length, 0)
  const totalPct = Math.round((doneTotal / totalLessons) * 100)

  const reset = () => {
    if (window.confirm(t.resetConfirm)) s.resetAll()
  }

  return (
    <main className="mx-auto max-w-2xl px-4 pb-16">
      {/* Hero */}
      <section className="anim-pop pt-8 text-center">
        <div className="anim-float mx-auto mb-3 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-[#E8C547] to-[#C9A227] text-4xl shadow-2xl">
          👑
        </div>
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--gold)]">Robert Greene</p>
        <h1 className="font-display mt-1 text-4xl font-black leading-tight sm:text-5xl">{t.appName}</h1>
        <p className="mx-auto mt-2 max-w-md text-[var(--muted)]">{t.tagline}</p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="card-chunky p-3">
            <div className="text-2xl font-black text-[var(--gold-bright)]">{levelOf(s.xp)}</div>
            <div className="text-xs font-bold uppercase tracking-wide text-[var(--muted)]">{t.level}</div>
          </div>
          <div className="card-chunky p-3">
            <div className="text-2xl font-black text-[#58CC02]">{doneTotal}</div>
            <div className="text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
              {t.lessons} / {totalLessons}
            </div>
          </div>
          <div className="card-chunky p-3">
            <div className="text-2xl font-black text-[#FF8A00]">{s.streak}</div>
            <div className="text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
              {t.streak} ({t.days})
            </div>
          </div>
        </div>

        <div className="card-chunky mt-3 p-3">
          <div className="mb-1 flex justify-between text-xs font-extrabold text-[var(--muted)]">
            <span>{t.totalProgress}</span>
            <span>
              {totalPct}% · {totalQuestions} {t.questions}
            </span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-[var(--surface2)]">
            <div
              className="anim-fill h-full rounded-full bg-gradient-to-r from-[#C9A227] to-[#E8C547]"
              style={{ ['--fill' as string]: `${totalPct}%`, width: `${totalPct}%` }}
            />
          </div>
        </div>
      </section>

      {/* Courses */}
      <h2 className="font-display mt-8 mb-3 text-xl font-bold">{t.pickCourse}</h2>
      <div className="flex flex-col gap-3">
        {courses.map((c, i) => (
          <div key={c.id} className="anim-pop" style={{ animationDelay: `${i * 60}ms` }}>
            <CourseCard course={c} onOpen={() => onOpenCourse(c.id)} />
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center">
        <p className="text-sm text-[var(--muted)]">{t.keepGoing}</p>
        <p className="mt-1 text-xs text-[var(--muted)]">📲 {t.installHint}</p>
        <button onClick={reset} className="mt-4 text-xs font-bold text-[var(--muted)] underline opacity-60 hover:opacity-100">
          {t.reset}
        </button>
      </footer>
    </main>
  )
}
