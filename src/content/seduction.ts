import type { Course } from './types'

export const seduction: Course = {
  id: 'seduction',
  title: { de: 'Die Kunst der Verführung', en: 'The Art of Seduction' },
  sub: { de: 'Psychologie der Anziehung', en: 'The psychology of attraction' },
  icon: '🌹',
  color: '#E93D82',
  colorDark: '#B92D66',
  lessons: [
    {
      id: 'sed-1',
      title: { de: 'Die neun Verführungstypen', en: 'The Nine Seducer Types' },
      sub: { de: 'Sirene, Rake, Charmer, Star …', en: 'Siren, Rake, Charmer, Star …' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Die Sirene verführt vor allem durch …', en: 'The Siren seduces above all through …' },
          o: [
            { de: 'überwältigende physische und sinnliche Präsenz', en: 'overwhelming physical and sensual presence' },
            { de: 'Intellekt', en: 'intellect' },
            { de: 'Reichtum', en: 'wealth' },
            { de: 'Humor', en: 'humor' },
          ],
          a: 0,
          x: {
            de: 'Die Sirene ist die älteste Verführerfigur: Sie überwältigt die Sinne wie Kleopatra.',
            en: 'The Siren is the oldest seducer figure: she overwhelms the senses like Cleopatra.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Der Rake („Wüstling") übt Anziehung aus, indem er …', en: 'The Rake attracts by …' },
          o: [
            { de: 'bedingungslose, fast verwegene Hingabe zeigt', en: 'showing unconditional, almost reckless devotion' },
            { de: 'kalt bleibt', en: 'staying cold' },
            { de: 'ignoriert', en: 'ignoring' },
            { de: 'belehrt', en: 'lecturing' },
          ],
          a: 0,
          x: {
            de: 'Der Rake begehrt so total, dass sein Gegenüber sich einzigartig fühlt — Gefahr macht es aufregend.',
            en: 'The Rake desires so totally that the other feels unique — danger makes it thrilling.',
          },
        },
        {
          t: 'match',
          q: { de: 'Typ ↔ Charakteristik.', en: 'Match type ↔ trait.' },
          pairs: [
            { l: { de: 'Der Dandy', en: 'The Dandy' }, r: { de: 'Androgynie und Stilfreiheit', en: 'Androgyny and style freedom' } },
            { l: { de: 'Der Natural', en: 'The Natural' }, r: { de: 'Kindliche Unschuld und Spontaneität', en: 'Childlike innocence and spontaneity' } },
            { l: { de: 'Die Kokette', en: 'The Coquette' }, r: { de: 'Wechsel zwischen Nähe und Kälte', en: 'Alternating warmth and coldness' } },
            { l: { de: 'Der Charmer', en: 'The Charmer' }, r: { de: 'Macht aus dem Gefühl, verstanden zu werden', en: 'Power through making others feel understood' } },
          ],
        },
        {
          t: 'tf',
          q: { de: 'Der Star verführt, indem er sich distanziert und geheimnisvoll gibt — andere projizieren ihre Fantasien auf ihn.', en: 'The Star seduces by being distant and mysterious — others project their fantasies onto him.' },
          a: true,
          x: {
            de: 'Der Star wird zur Leinwand: Je weniger er zeigt, desto mehr füllen die anderen mit Fantasie.',
            en: 'The Star becomes a screen: the less he shows, the more others fill in with fantasy.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Was haben alle neun Typen gemeinsam?', en: 'What do all nine types share?' },
          o: [
            { de: 'Sie erzeugen emotionales Vergnügen und lösen Widerstand auf', en: 'They create emotional pleasure and dissolve resistance' },
            { de: 'Sie sind alle reich', en: 'They are all rich' },
            { de: 'Sie sind alle schön', en: 'They are all beautiful' },
            { de: 'Sie lügen ständig', en: 'They constantly lie' },
          ],
          a: 0,
          x: {
            de: 'Verführung ist indirekte Macht: Sie wirkt über Emotion, nicht über Argumente.',
            en: 'Seduction is indirect power: it works through emotion, not arguments.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Jeder Mensch kann nur genau einen Verführungstyp verkörpern.', en: 'Every person can embody exactly one seducer type only.' },
          a: false,
          x: {
            de: 'Die Typen sind Rollen und Fähigkeiten — man kann sie erlernen, mischen und je nach Ziel wählen.',
            en: 'The types are roles and skills — you can learn, mix, and choose them per target.',
          },
        },
      ],
    },
    {
      id: 'sed-2',
      title: { de: 'Der Anti-Verführer', en: 'The Anti-Seducer' },
      sub: { de: 'Die zehn Wege, Anziehung zu zerstören', en: 'Ten ways to destroy attraction' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Das Kernmerkmal des Anti-Verführers ist …', en: 'The Anti-Seducer\'s core trait is …' },
          o: [
            { de: 'Selbstbezogenheit und Unsicherheit — er raubt statt gibt', en: 'self-absorption and insecurity — he takes instead of gives' },
            { de: 'zu viel Geld', en: 'too much money' },
            { de: 'zu viel Erfolg', en: 'too much success' },
            { de: 'zu viel Humor', en: 'too much humor' },
          ],
          a: 0,
          x: {
            de: 'Anti-Verführer denken nur an sich, klammern, klagen oder brüsten sich — sie töten jede Spannung.',
            en: 'Anti-seducers think only of themselves, cling, whine or boast — they kill all tension.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Zuviel Verfügbarkeit und Klammern sind klassische Anti-Verführer-Signale.', en: 'Too much availability and clinging are classic anti-seducer signals.' },
          a: true,
          x: {
            de: 'Anziehung braucht Raum. Wer sich aufdrängt, zerstört Knappheit und Geheimnis.',
            en: 'Attraction needs space. Pushing yourself forward destroys scarcity and mystery.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Welches Verhalten gehört NICHT zum Anti-Verführer?', en: 'Which behavior does NOT belong to the Anti-Seducer?' },
          o: [
            { de: 'Großzügigkeit und Aufmerksamkeit für den anderen', en: 'Generosity and attention toward the other' },
            { de: 'Prahlen', en: 'Boasting' },
            { de: 'Moralisieren', en: 'Moralizing' },
            { de: 'Klagen', en: 'Whining' },
          ],
          a: 0,
          x: {
            de: 'Der Anti-Verführer nimmt: Aufmerksamkeit, Energie, Zeit. Geben ist das Gegenteil — und verführerisch.',
            en: 'The anti-seducer takes: attention, energy, time. Giving is the opposite — and seductive.',
          },
        },
        {
          t: 'blank',
          before: { de: 'Anti-Verführer erzeugen', en: 'Anti-seducers create' },
          after: { de: 'statt Vergnügen.', en: 'instead of pleasure.' },
          o: [
            { de: 'Unbehagen', en: 'discomfort' },
            { de: 'Freude', en: 'joy' },
            { de: 'Spannung', en: 'tension' },
          ],
          a: 0,
          x: {
            de: 'Verführung gibt emotionales Vergnügen; der Anti-Verführer macht Begegnungen zur Last.',
            en: 'Seduction gives emotional pleasure; the anti-seducer turns encounters into a burden.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Greene rät: Wenn du Anti-Verführer-Züge an dir entdeckst, ignoriere sie einfach.', en: 'Greene advises: if you notice anti-seducer traits in yourself, simply ignore them.' },
          a: false,
          x: {
            de: 'Das Gegenteil: Erkenne und eliminiere sie aktiv — sie sabotieren jede Anziehung.',
            en: 'The opposite: recognize and actively eliminate them — they sabotage all attraction.',
          },
        },
        {
          t: 'match',
          q: { de: 'Anti-Verführer ↔ Wirkung.', en: 'Match anti-seducer ↔ effect.' },
          pairs: [
            { l: { de: 'Der Prahler', en: 'The Braggart' }, r: { de: 'Raubt dem anderen die Bühne', en: 'Steals the other\'s stage' } },
            { l: { de: 'Der Klammerer', en: 'The Clinger' }, r: { de: 'Erstickt jeden Raum', en: 'Suffocates all space' } },
            { l: { de: 'Der Moralist', en: 'The Moralist' }, r: { de: 'Belehrt statt verführt', en: 'Lectures instead of seduces' } },
            { l: { de: 'Der Geizige', en: 'The Miser' }, r: { de: 'Zeigt kleine Seele', en: 'Reveals a small soul' } },
          ],
        },
      ],
    },
    {
      id: 'sed-3',
      title: { de: 'Der Prozess: Annäherung & Verführung', en: 'The Process: Approach & Seduction' },
      sub: { de: 'Phasen 1–2 · Neugier, Vergnügen, Verwirrung', en: 'Phases 1–2 · Curiosity, pleasure, confusion' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Phase 1 des Verführungsprozesses zielt auf …', en: 'Phase 1 of the seduction process aims at …' },
          o: [
            { de: 'Neugier wecken und Sicherheit geben', en: 'sparking curiosity and giving safety' },
            { de: 'sofortige Nähe erzwingen', en: 'forcing immediate closeness' },
            { de: 'ehrliche Selbstoffenbarung', en: 'honest self-disclosure' },
            { de: 'schnelle Küsse', en: 'quick kisses' },
          ],
          a: 0,
          x: {
            de: 'Zuerst Interesse säen, ohne Bedürftigkeit zu zeigen — der andere soll kommen wollen.',
            en: 'First sow interest without showing neediness — the other should want to come closer.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Inszenierte Zufälle und scheinbare Schicksalhaftigkeit sind legitime Werkzeuge der Phase 1.', en: 'Staged coincidences and apparent fatefulness are legitimate tools of Phase 1.' },
          a: true,
          x: {
            de: 'Der Eindruck „das Schicksal führt uns zusammen" öffnet Herzen stärker als jedes Argument.',
            en: 'The impression "fate brings us together" opens hearts stronger than any argument.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Phase 2 arbeitet mit Vergnügen und Verwirrung. Warum Verwirrung?', en: 'Phase 2 works with pleasure and confusion. Why confusion?' },
          o: [
            { de: 'Wer leicht desorientiert ist, wird empfänglicher und gibt Kontrolle ab', en: 'Slight disorientation makes people receptive and give up control' },
            { de: 'Verwirrung macht Spaß', en: 'Confusion is fun' },
            { de: 'Verwirrung ist Zufall', en: 'Confusion is accidental' },
            { de: 'Sie dient der Ehrlichkeit', en: 'It serves honesty' },
          ],
          a: 0,
          x: {
            de: 'Wechsel aus Nähe und Distanz, Überraschung und Geheimnis löst den anderen aus der Routine.',
            en: 'Alternating closeness and distance, surprise and mystery lifts the other out of routine.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Geschenke und Aufmerksamkeiten sollten in Phase 2 vollständig vermieden werden.', en: 'Gifts and attentions should be completely avoided in Phase 2.' },
          a: false,
          x: {
            de: 'Gezielte, überraschende Gesten sind wirksam — aber dosiert und unerwartet, nie aufdringlich.',
            en: 'Targeted, surprising gestures are effective — but dosed and unexpected, never pushy.',
          },
        },
        {
          t: 'match',
          q: { de: 'Phase ↔ Ziel.', en: 'Match phase ↔ goal.' },
          pairs: [
            { l: { de: 'Phase 1', en: 'Phase 1' }, r: { de: 'Neugier und Sicherheit', en: 'Curiosity and safety' } },
            { l: { de: 'Phase 2', en: 'Phase 2' }, r: { de: 'Vergnügen und Verwirrung', en: 'Pleasure and confusion' } },
            { l: { de: 'Phase 3', en: 'Phase 3' }, r: { de: 'Schwäche, Illusion, Hingabe', en: 'Weakness, illusion, devotion' } },
            { l: { de: 'Phase 4', en: 'Phase 4' }, r: { de: 'Vollendung und Nachspiel', en: 'Consummation and aftermath' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Der Verführungsprozess hat 24 Schritte in', en: 'The seduction process has 24 steps in' },
          after: { de: 'Phasen.', en: 'phases.' },
          o: [
            { de: 'vier', en: 'four' },
            { de: 'zwei', en: 'two' },
            { de: 'sieben', en: 'seven' },
          ],
          a: 0,
          x: {
            de: 'Vier Phasen: Annäherung, Verführung, Vertiefung, Vollendung — Verführung ist ein Prozess, kein Moment.',
            en: 'Four phases: approach, seduction, deepening, consummation — seduction is a process, not a moment.',
          },
        },
      ],
    },
    {
      id: 'sed-4',
      title: { de: 'Vertiefung & Vollendung', en: 'Deepening & Consummation' },
      sub: { de: 'Phasen 3–4 · Hingabe und danach', en: 'Phases 3–4 · Devotion and beyond' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Phase 3 nutzt „Schwäche, Illusion und Hingabe". Was heißt das?', en: 'Phase 3 uses "weakness, illusion and devotion." What does that mean?' },
          o: [
            { de: 'Gezielt Schwäche zeigen erweckt Beschützerinstinkt; Illusion hält die Fantasie lebendig', en: 'Showing deliberate weakness awakens protector instinct; illusion keeps fantasy alive' },
            { de: 'Komplette Ehrlichkeit offenbart alles', en: 'Total honesty reveals everything' },
            { de: 'Schwäche ist immer echt', en: 'Weakness is always real' },
            { de: 'Illusion ist Lüge', en: 'Illusion is lying' },
          ],
          a: 0,
          x: {
            de: 'Der andere soll das Gefühl haben, gebraucht zu werden — und in einer schöneren Welt zu leben.',
            en: 'The other should feel needed — and live in a more beautiful world.',
          },
        },
        {
          t: 'tf',
          q: { de: 'In Phase 3 darf die Illusion nicht zerfallen — Alltäglichkeit ist der Feind der Verführung.', en: 'In Phase 3, the illusion must not crumble — ordinariness is the enemy of seduction.' },
          a: true,
          x: {
            de: 'Hingabe entsteht, wenn die Realität blasser wirkt als das Erlebte mit dir.',
            en: 'Devotion arises when reality seems pale compared to the experience with you.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Phase 4 „Vollendung und Nachspiel" warnt vor …', en: 'Phase 4 "Consummation and aftermath" warns of …' },
          o: [
            { de: 'Nachlassen nach dem Erreichen — das Nachspiel entscheidet über das Bild', en: 'slackening after success — the aftermath decides the image' },
            { de: 'zu viel Ehrlichkeit am Anfang', en: 'too much honesty at the start' },
            { de: 'zu langsamer Annäherung', en: 'too slow an approach' },
            { de: 'zu vielen Geschenken', en: 'too many gifts' },
          ],
          a: 0,
          x: {
            de: 'Nach dem Sieg entscheidet sich, ob Sehnsucht bleibt oder Ernüchterung eintritt.',
            en: 'After victory, either longing remains or disillusion sets in.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Verführung endet für Greene mit dem „Gewinn" des anderen.', en: 'For Greene, seduction ends with "winning" the other person.' },
          a: false,
          x: {
            de: 'Das Nachspiel gehört dazu: Wer abrupt kalt wird, erzeugt Verbitterung — und einen Feind.',
            en: 'The aftermath is part of it: turning cold abruptly creates bitterness — and an enemy.',
          },
        },
        {
          t: 'match',
          q: { de: 'Konzept ↔ Funktion.', en: 'Match concept ↔ function.' },
          pairs: [
            { l: { de: 'Schwäche zeigen', en: 'Showing weakness' }, r: { de: 'Beschützerinstinkt wecken', en: 'Awaken protector instinct' } },
            { l: { de: 'Illusion', en: 'Illusion' }, r: { de: 'Fantasie am Leben halten', en: 'Keep fantasy alive' } },
            { l: { de: 'Hingabe', en: 'Devotion' }, r: { de: 'Emotionale Bindung vertiefen', en: 'Deepen emotional bond' } },
            { l: { de: 'Nachspiel', en: 'Aftermath' }, r: { de: 'Bild bewahren', en: 'Preserve the image' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Verführung ist Macht durch', en: 'Seduction is power through' },
          after: { de: 'nicht durch Zwang.', en: ', not through force.' },
          o: [
            { de: 'Emotion', en: 'emotion' },
            { de: 'Geld', en: 'money' },
            { de: 'Status', en: 'status' },
          ],
          a: 0,
          x: {
            de: 'Wer verführt, gewinnt freiwillige Hingabe — die stärkste Form des Einflusses.',
            en: 'Seduction wins voluntary devotion — the strongest form of influence.',
          },
        },
      ],
    },
  ],
}
