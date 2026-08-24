import type { Course } from './types'

export const mastery: Course = {
  id: 'mastery',
  title: { de: 'Mastery', en: 'Mastery' },
  sub: { de: 'Der Weg zur Meisterschaft', en: 'The path to mastery' },
  icon: '🎓',
  color: '#3B82F6',
  colorDark: '#2563EB',
  lessons: [
    {
      id: 'mas-1',
      title: { de: 'Berufung & Lehrzeit', en: 'Calling & Apprenticeship' },
      sub: { de: 'Phasen 1–2 · Finde deine Lebensaufgabe', en: 'Phases 1–2 · Find your life\'s task' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Phase 1 der Meisterschaft ist …', en: 'Phase 1 of mastery is …' },
          o: [
            { de: 'die Entdeckung deiner Berufung — der Lebensaufgabe', en: 'discovering your calling — your life\'s task' },
            { de: 'schnelles Geld', en: 'quick money' },
            { de: 'Networking', en: 'networking' },
            { de: 'Talent anbeten', en: 'worshipping talent' },
          ],
          a: 0,
          x: {
            de: 'Deine Lebensaufgabe liegt in dem, was dich als Kind mühelos anzog — sie ist Richtung, nicht Beruf.',
            en: 'Your life\'s task lies in what drew you effortlessly as a child — it is direction, not a job.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Greene: Talent allein entscheidet über Meisterschaft.', en: 'Greene: talent alone decides mastery.' },
          a: false,
          x: {
            de: 'Meisterschaft entsteht durch Prozess und Dauer — Talent ohne Lehrzeit verkümmert.',
            en: 'Mastery comes from process and duration — talent without apprenticeship withers.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Die ideale Lehrzeit (Phase 2) erfordert vor allem …', en: 'The ideal apprenticeship (Phase 2) requires above all …' },
          o: [
            { de: 'sich der Realität zu unterwerfen — beobachten, üben, demütig lernen', en: 'submitting to reality — observe, practice, learn humbly' },
            { de: 'sofortige Selbstständigkeit', en: 'immediate independence' },
            { de: 'Kritik am Meister', en: 'criticizing the master' },
            { de: 'schnelle Beförderung', en: 'quick promotion' },
          ],
          a: 0,
          x: {
            de: 'Die Lehrzeit ist keine Zeit des Glanzes: Tiefe Beobachtung und Wiederholung bauen das Fundament.',
            en: 'Apprenticeship is no time for glory: deep observation and repetition build the foundation.',
          },
        },
        {
          t: 'blank',
          before: { de: 'Ohne Lehrzeit', en: 'Without apprenticeship' },
          after: { de: 'kein Fundament.', en: 'no foundation.' },
          o: [
            { de: 'kein', en: 'no' },
            { de: 'großes', en: 'a big' },
            { de: 'schnelles', en: 'a fast' },
          ],
          a: 0,
          x: {
            de: 'Greene nennt mehrere Strategien: Wert auf Lernen statt Geld legen, ständig experimentieren, den Prozess lieben.',
            en: 'Greene names strategies: value learning over money, keep experimenting, love the process.',
          },
        },
        {
          t: 'tf',
          q: { de: 'In der Lehrzeit sollte man Geld und Status über Lernen stellen.', en: 'During apprenticeship, money and status should come before learning.' },
          a: false,
          x: {
            de: 'Wähle Positionen nach Lernwert, nicht nach Lohn — Wissen zahlt sich später exponentiell aus.',
            en: 'Choose positions for learning value, not pay — knowledge pays exponentially later.',
          },
        },
        {
          t: 'match',
          q: { de: 'Phase ↔ Aufgabe.', en: 'Match phase ↔ task.' },
          pairs: [
            { l: { de: 'Phase 1', en: 'Phase 1' }, r: { de: 'Berufung entdecken', en: 'Discover the calling' } },
            { l: { de: 'Phase 2', en: 'Phase 2' }, r: { de: 'Ideale Lehrzeit', en: 'Ideal apprenticeship' } },
            { l: { de: 'Phase 3', en: 'Phase 3' }, r: { de: 'Macht des Meisters absorbieren', en: 'Absorb the master\'s power' } },
            { l: { de: 'Lebensaufgabe', en: 'Life\'s task' }, r: { de: 'Was dich als Kind anzog', en: 'What drew you as a child' } },
          ],
        },
      ],
    },
    {
      id: 'mas-2',
      title: { de: 'Meister & soziale Intelligenz', en: 'Mentors & Social Intelligence' },
      sub: { de: 'Phasen 3–4 · Lernen und Menschen lesen', en: 'Phases 3–4 · Learning and reading people' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Warum beschleunigt ein Mentor den Weg (Phase 3)?', en: 'Why does a mentor accelerate the path (Phase 3)?' },
          o: [
            { de: 'Er komprimiert Jahrzehnte Erfahrung in direkte Rückmeldung', en: 'He compresses decades of experience into direct feedback' },
            { de: 'Er bezahlt alles', en: 'He pays for everything' },
            { de: 'Er macht dich berühmt', en: 'He makes you famous' },
            { de: 'Er arbeitet für dich', en: 'He works for you' },
          ],
          a: 0,
          x: {
            de: 'Das Leben ist kurz: Ohne Führung verschwendest du Jahre mit Fehlern, die ein Meister dir erspart.',
            en: 'Life is short: without guidance you waste years on mistakes a master spares you.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Irgendwann muss der Schüler den Meister übertreffen und sich lösen.', en: 'Eventually the student must surpass and leave the master.' },
          a: true,
          x: {
            de: 'Absorbieren, dann emanzipieren: Wer bleibt, bleibt ewig Schüler.',
            en: 'Absorb, then emancipate: those who stay remain students forever.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Phase 4: „Sieh die Menschen, wie sie sind" warnt vor …', en: 'Phase 4: "See people as they are" warns against …' },
          o: [
            { de: 'naiven Projektionen — Menschen zeigen Masken', en: 'naive projections — people wear masks' },
            { de: 'zu viel Empathie', en: 'too much empathy' },
            { de: 'Beobachtung', en: 'observation' },
            { de: 'Geduld', en: 'patience' },
          ],
          a: 0,
          x: {
            de: 'Soziale Intelligenz ist Meisterschaft im Umgang: Lies Muster über Zeit statt Worte im Moment.',
            en: 'Social intelligence is mastery in dealing with people: read patterns over time, not words in the moment.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Die „sieben tödlichen Realitäten" sind Kräfte wie Neid, Konformismus und Eifersucht, die in jeder Gruppe wirken.', en: 'The "seven deadly realities" are forces like envy, conformism, and jealousy at work in every group.' },
          a: true,
          x: {
            de: 'Wer diese Kräfte ignoriert, wird von Gruppendynamik überrollt — sie zu kennen ist Schutz.',
            en: 'Ignoring these forces gets you run over by group dynamics — knowing them is protection.',
          },
        },
        {
          t: 'match',
          q: { de: 'Konzept ↔ Bedeutung.', en: 'Match concept ↔ meaning.' },
          pairs: [
            { l: { de: 'Mentor', en: 'Mentor' }, r: { de: 'Erfahrung komprimieren', en: 'Compress experience' } },
            { l: { de: 'Soziale Intelligenz', en: 'Social intelligence' }, r: { de: 'Menschen lesen', en: 'Read people' } },
            { l: { de: 'Tödliche Realitäten', en: 'Deadly realities' }, r: { de: 'Gruppenkräfte kennen', en: 'Know group forces' } },
            { l: { de: 'Emanzipation', en: 'Emancipation' }, r: { de: 'Meister übertreffen', en: 'Surpass the master' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Urteile über Menschen über ihre', en: 'Judge people by their' },
          after: { de: 'nicht über ihre Worte.', en: ', not their words.' },
          o: [
            { de: 'Muster', en: 'patterns' },
            { de: 'Versprechen', en: 'promises' },
            { de: 'Freunde', en: 'friends' },
          ],
          a: 0,
          x: {
            de: 'Charakter ist Wiederholung: Beurteile Menschen über Zeit, nie über Einzelszenen.',
            en: 'Character is repetition: judge people over time, never by single scenes.',
          },
        },
      ],
    },
    {
      id: 'mas-3',
      title: { de: 'Kreativität & Meisterschaft', en: 'Creativity & Mastery' },
      sub: { de: 'Phasen 5–6 · Dimensionaler Geist', en: 'Phases 5–6 · The dimensional mind' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Phase 5: Der „dimensionale Geist" entsteht, wenn …', en: 'Phase 5: The "dimensional mind" emerges when …' },
          o: [
            { de: 'tiefes Wissen mit kreativem Spiel verbunden wird', en: 'deep knowledge merges with creative play' },
            { de: 'man viel schläft', en: 'you sleep a lot' },
            { de: 'man Regeln befolgt', en: 'you follow rules' },
            { de: 'man Konventionen nie bricht', en: 'you never break conventions' },
          ],
          a: 0,
          x: {
            de: 'Nach Jahren des Absorbierens beginnt die eigene Schöpfung — Kindheitsoffenheit plus Können.',
            en: 'After years of absorbing, original creation begins — childlike openness plus skill.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Zu den emotionalen Fallgruben der kreativen Phase gehören Selbstzweifel, Konformismus und Frustration.', en: 'Emotional pitfalls of the creative phase include self-doubt, conformism, and frustration.' },
          a: true,
          x: {
            de: 'Kreativität stirbt an Emotionen: Vergleich, Ungeduld und Angst vor dem Neuen sind die Fallen.',
            en: 'Creativity dies of emotions: comparison, impatience, and fear of the new are the traps.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Phase 6: „Verschmelze das Intuitive mit dem Rationalen" beschreibt …', en: 'Phase 6: "Fuse the intuitive with the rational" describes …' },
          o: [
            { de: 'Meisterschaft selbst — das Feld wird zur zweiten Natur', en: 'mastery itself — the field becomes second nature' },
            { de: 'Glücksspiel', en: 'gambling' },
            { de: 'reine Intuition ohne Wissen', en: 'pure intuition without knowledge' },
            { de: 'reine Logik ohne Gefühl', en: 'pure logic without feeling' },
          ],
          a: 0,
          x: {
            de: 'Nach ~10.000 Stunden sieht der Meister Muster sofort — Intuition ist verdichtete Erfahrung.',
            en: 'After ~10,000 hours the master sees patterns instantly — intuition is compressed experience.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Der häufigste Fehler auf dem Meisterweg: Die kreative Phase erzwingen wollen und die Lehrzeit ignorieren.', en: 'The most common mistake on the mastery path: forcing the creative phase and skipping the apprenticeship.' },
          a: true,
          x: {
            de: 'Ohne Fundament kein Gebäude — wer Phasen überspringt, bricht zusammen.',
            en: 'No foundation, no building — skipping phases leads to collapse.',
          },
        },
        {
          t: 'match',
          q: { de: 'Phase ↔ Ziel.', en: 'Match phase ↔ goal.' },
          pairs: [
            { l: { de: 'Phase 4', en: 'Phase 4' }, r: { de: 'Soziale Intelligenz', en: 'Social intelligence' } },
            { l: { de: 'Phase 5', en: 'Phase 5' }, r: { de: 'Kreativität erwecken', en: 'Awaken creativity' } },
            { l: { de: 'Phase 6', en: 'Phase 6' }, r: { de: 'Intuition + Rationalität', en: 'Intuition + rationality' } },
            { l: { de: '10.000 Stunden', en: '10,000 hours' }, r: { de: 'Verdichtete Erfahrung', en: 'Compressed experience' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Intuition ist nichts Mystisches — sie ist', en: 'Intuition is nothing mystical — it is' },
          after: { de: 'Erfahrung.', en: 'experience.' },
          o: [
            { de: 'verdichtete', en: 'compressed' },
            { de: 'fehlende', en: 'missing' },
            { de: 'zufällige', en: 'random' },
          ],
          a: 0,
          x: {
            de: 'Der Pfad ist offen für alle — aber er verlangt, was unsere Kultur hasst: Zeit.',
            en: 'The path is open to all — but it demands what our culture hates: time.',
          },
        },
      ],
    },
  ],
}
