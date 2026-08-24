import type { Course } from './types'

export const fiftyLaw: Course = {
  id: 'fifty',
  title: { de: 'Das 50. Gesetz', en: 'The 50th Law' },
  sub: { de: 'Mit 50 Cent · Die Furchtlosigkeit', en: 'With 50 Cent · Fearlessness' },
  icon: '🦁',
  color: '#FF8A00',
  colorDark: '#CC6E00',
  lessons: [
    {
      id: 'fifty-1',
      title: { de: 'Realismus & Anpassung', en: 'Realism & Adaptation' },
      sub: { de: 'Kapitel 1–5 · Sehen, besitzen, verwandeln', en: 'Chapters 1–5 · See, own, transform' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Das 50. Gesetz lautet im Kern: …', en: 'The 50th Law says in essence: …' },
          o: [
            { de: 'Fürchte nichts — Furchtlosigkeit ist die höchste Tugend', en: 'Fear nothing — fearlessness is the highest virtue' },
            { de: 'Fürchte jeden', en: 'Fear everyone' },
            { de: 'Vertraue niemandem', en: 'Trust no one' },
            { de: 'Herrsche hart', en: 'Rule harshly' },
          ],
          a: 0,
          x: {
            de: 'Greene und 50 Cent: Angst lähmt Urteil und Handlung — wer sie überwindet, gewinnt Freiheit.',
            en: 'Greene and 50 Cent: fear paralyzes judgment and action — overcoming it brings freedom.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Kapitel 1 „Sieh die Dinge, wie sie sind" verlangt …', en: 'Chapter 1 "See things as they are" demands …' },
          o: [
            { de: 'intensiven Realismus — keine Illusionen über Menschen und Lage', en: 'intense realism — no illusions about people or situation' },
            { de: 'positives Denken', en: 'positive thinking' },
            { de: 'Schönfärberei', en: 'sugarcoating' },
            { de: 'Pessimismus', en: 'pessimism' },
          ],
          a: 0,
          x: {
            de: 'Realismus ist die Basis: Wer Fantasien pflegt, wird von der Realität bestraft.',
            en: 'Realism is the base: those who nurse fantasies get punished by reality.',
          },
        },
        {
          t: 'tf',
          q: { de: '„Mach dir alles zu eigen" (Kap. 2): Übernimm volle Verantwortung für dein Leben — auch für das, was dir widerfährt.', en: '"Make everything your own" (Ch. 2): take full responsibility for your life — even for what happens to you.' },
          a: true,
          x: {
            de: 'Opferdenken gibt die Macht ab. Eigentümerdenken verwandelt Rückschläge in Rohmaterial.',
            en: 'Victim thinking gives away power. Ownership thinking turns setbacks into raw material.',
          },
        },
        {
          t: 'tf',
          q: { de: '„Verwandle Mist in Zucker" (Kap. 3): Widrigkeiten sind Chancen, wenn man sie richtig nutzt.', en: '"Turn shit into sugar" (Ch. 3): adversity is opportunity when used right.' },
          a: true,
          x: {
            de: '50 Cent machte aus dem Schussattentat eine Legende — Schwieriges ist Treibstoff.',
            en: '50 Cent turned the shooting into legend — hardship is fuel.',
          },
        },
        {
          t: 'match',
          q: { de: 'Kapitel ↔ Kern.', en: 'Match chapter ↔ core.' },
          pairs: [
            { l: { de: 'Kapitel 1', en: 'Chapter 1' }, r: { de: 'Realismus', en: 'Realism' } },
            { l: { de: 'Kapitel 2', en: 'Chapter 2' }, r: { de: 'Volle Verantwortung', en: 'Full responsibility' } },
            { l: { de: 'Kapitel 4', en: 'Chapter 4' }, r: { de: 'In Bewegung bleiben', en: 'Keep moving' } },
            { l: { de: 'Kapitel 5', en: 'Chapter 5' }, r: { de: 'Wissen, wann Härte nötig ist', en: 'Know when to be ruthless' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Wer in Bewegung bleibt,', en: 'Whoever keeps moving,' },
          after: { de: 'lässt sich nicht festnageln.', en: 'cannot be pinned down.' },
          o: [
            { de: 'kalkuliert', en: 'deliberately' },
            { de: 'niemals', en: 'never' },
            { de: 'langsam', en: 'slowly' },
          ],
          a: 0,
          x: {
            de: 'Kapitel 4: Kalkuliertes Driften — wer sich ständig weiterentwickelt, bleibt ungreifbar.',
            en: 'Chapter 4: calculated drift — constant evolution keeps you uncatchable.',
          },
        },
      ],
    },
    {
      id: 'fifty-2',
      title: { de: 'Autorität & Meisterschaft', en: 'Authority & Mastery' },
      sub: { de: 'Kapitel 6–10 · Führen, Grenzen, Sterblichkeit', en: 'Chapters 6–10 · Lead, limits, mortality' },
      questions: [
        {
          t: 'mc',
          q: { de: '„Führe von vorn" (Kap. 6) bedeutet …', en: '"Lead from the front" (Ch. 6) means …' },
          o: [
            { de: 'Autorität durch Beispiel — nicht durch Titel', en: 'authority by example — not by title' },
            { de: 'Befehle von hinten', en: 'orders from the back' },
            { de: 'harte Strafen', en: 'harsh punishments' },
            { de: 'Delegieren an alle', en: 'delegating to everyone' },
          ],
          a: 0,
          x: {
            de: 'Menschen folgen dem, der das Risiko teilt und den Standard selbst lebt.',
            en: 'People follow the one who shares the risk and lives the standard himself.',
          },
        },
        {
          t: 'mc',
          q: { de: '„Kenne deine Umgebung von innen heraus" (Kap. 7) verlangt …', en: '"Know your environment from the inside out" (Ch. 7) requires …' },
          o: [
            { de: 'tiefes Verständnis des Feldes, in dem du spielst', en: 'deep understanding of the field you play in' },
            { de: 'Umzug ins Ausland', en: 'moving abroad' },
            { de: 'schnelle Urteile', en: 'quick judgments' },
            { de: 'oberflächliches Wissen', en: 'superficial knowledge' },
          ],
          a: 0,
          x: {
            de: '50 Cent kannte die Straße — wer das Terrain kennt, navigiert besser als jeder Theoretiker.',
            en: '50 Cent knew the street — those who know the terrain navigate better than any theorist.',
          },
        },
        {
          t: 'tf',
          q: { de: '„Respektiere den Prozess" (Kap. 8): Meisterschaft entsteht durch Zeit und Wiederholung, nicht durch Abkürzungen.', en: '"Respect the process" (Ch. 8): mastery comes through time and repetition, not shortcuts.' },
          a: true,
          x: {
            de: 'Der Respekt vor der Dauer ist der härteste Muskel der Furchtlosigkeit.',
            en: 'Respect for duration is the hardest muscle of fearlessness.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Kapitel 10 „Stelle dich deiner Sterblichkeit" bewirkt …', en: 'Chapter 10 "Confront your mortality" achieves …' },
          o: [
            { de: 'Klarheit und Mut — wer den Tod annimmt, fürchtet das Leben nicht', en: 'clarity and courage — accepting death removes fear of life' },
            { de: 'Depression', en: 'depression' },
            { de: 'Leichtsinn', en: 'recklessness' },
            { de: 'Resignation', en: 'resignation' },
          ],
          a: 0,
          x: {
            de: 'Das Bewusstsein der Endlichkeit macht drängende Angst klein — es ist die Wurzel der Furchtlosigkeit.',
            en: 'Awareness of finitude shrinks petty fear — it is the root of fearlessness.',
          },
        },
        {
          t: 'match',
          q: { de: 'Kapitel ↔ Prinzip.', en: 'Match chapter ↔ principle.' },
          pairs: [
            { l: { de: 'Kapitel 6', en: 'Chapter 6' }, r: { de: 'Von vorn führen', en: 'Lead from the front' } },
            { l: { de: 'Kapitel 8', en: 'Chapter 8' }, r: { de: 'Prozess respektieren', en: 'Respect the process' } },
            { l: { de: 'Kapitel 9', en: 'Chapter 9' }, r: { de: 'Grenzen überschreiten', en: 'Push past limits' } },
            { l: { de: 'Kapitel 10', en: 'Chapter 10' }, r: { de: 'Sterblichkeit annehmen', en: 'Accept mortality' } },
          ],
        },
        {
          t: 'tf',
          q: { de: 'Das 50. Gesetz verbindet die Straßenweisheit von 50 Cent mit Greenes Machtanalyse — Furchtlosigkeit als Lebenshaltung.', en: 'The 50th Law combines 50 Cent\'s street wisdom with Greene\'s power analysis — fearlessness as a way of life.' },
          a: true,
          x: {
            de: 'Es ist das ungewöhnlichste Buch im Werk: nicht Macht über andere, sondern Freiheit von Angst.',
            en: 'It is the most unusual book in the series: not power over others, but freedom from fear.',
          },
        },
      ],
    },
  ],
}
