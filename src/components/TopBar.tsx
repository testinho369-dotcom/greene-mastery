import { ui } from '../i18n'
import { useStore } from '../store'
import { sfx } from '../audio'

export default function TopBar() {
  const s = useStore()
  const t = ui[s.lang]

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[var(--line)] bg-[rgba(11,16,32,0.85)] backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center gap-2 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="anim-crown grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#E8C547] to-[#C9A227] text-lg shadow-lg">
            👑
          </span>
          <span className="font-display hidden text-lg font-bold tracking-tight text-[var(--gold-bright)] sm:block">
            {t.appName}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-1.5">
          <div className="flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-extrabold" title={t.streak}>
            <span className={s.streak > 0 ? 'anim-flame' : ''}>🔥</span>
            <span className={s.streak > 0 ? 'text-[#FF8A00]' : 'text-[var(--muted)]'}>{s.streak}</span>
          </div>
          <div className="flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-extrabold text-[var(--gold-bright)]" title={t.xp}>
            ⚡{s.xp}
          </div>
          <div className="flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-extrabold text-[#FF4B4B]" title={t.hearts}>
            ❤️{s.hearts}
          </div>
          <button
            onClick={() => {
              sfx.click()
              s.toggleSound()
            }}
            className="rounded-full px-2 py-1 text-sm transition-colors hover:bg-[var(--surface2)]"
            title={s.sound ? t.soundOn : t.soundOff}
          >
            {s.sound ? '🔊' : '🔇'}
          </button>
          <button
            onClick={() => {
              sfx.click()
              s.setLang(s.lang === 'de' ? 'en' : 'de')
            }}
            className="btn-chunky ml-1 border-[#33406B] bg-[var(--surface2)] px-3 py-1 text-xs text-[var(--gold-bright)]"
          >
            {s.lang === 'de' ? 'EN' : 'DE'}
          </button>
        </div>
      </div>
    </header>
  )
}
