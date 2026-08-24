import type { Course } from './types'

// Bonus: Die 12 Meta-Prinzipien des Gesamtwerks (aus dem Handbuch, Teil VIII)
export const synthesis: Course = {
  id: 'synthesis',
  title: { de: 'Die große Synthese', en: 'The Grand Synthesis' },
  sub: { de: 'Bonus · 12 Meta-Prinzipien', en: 'Bonus · 12 meta-principles' },
  icon: '⚡',
  color: '#10B981',
  colorDark: '#0B8F66',
  lessons: [
    {
      id: 'syn-1',
      title: { de: 'Die 12 Meta-Prinzipien', en: 'The 12 Meta-Principles' },
      sub: { de: 'Was alle sechs Bücher verbindet', en: 'What unites all six books' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Meta-Prinzip „Emotion kontrollieren heißt Macht kontrollieren" bedeutet …', en: 'The meta-principle "Controlling emotion means controlling power" means …' },
          o: [
            { de: 'wer dich emotional macht, führt dich — Geistesgegenwart ist die letzte Verteidigung', en: 'whoever makes you emotional controls you — presence of mind is the last defense' },
            { de: 'Emotionen sind Macht', en: 'emotions are power' },
            { de: 'Macht macht emotional', en: 'power makes you emotional' },
            { de: 'Gefühle sind Schwäche', en: 'feelings are weakness' },
          ],
          a: 0,
          x: {
            de: 'Durchzieht War 3 & 33, Gesetz 39, Human Nature 1: Ruhe ist Machtbasis.',
            en: 'Runs through War 3 & 33, Law 39, Human Nature 1: calm is the base of power.',
          },
        },
        {
          t: 'mc',
          q: { de: '„Indirektion schlägt Konfrontation" heißt …', en: '"Indirection beats confrontation" means …' },
          o: [
            { de: 'Flanke statt Front, Insinuation statt Forderung, Rahmen statt Argument', en: 'flank instead of front, insinuation instead of demand, frame instead of argument' },
            { de: 'immer nachgeben', en: 'always yielding' },
            { de: 'nie handeln', en: 'never acting' },
            { de: 'laut schreien', en: 'shouting loudly' },
          ],
          a: 0,
          x: {
            de: 'Der direkte Weg erzeugt Widerstand; der indirekte öffnet Türen ohne Kampf.',
            en: 'The direct route creates resistance; the indirect opens doors without a fight.',
          },
        },
        {
          t: 'tf',
          q: { de: '„Aufmerksamkeit ist eine Währung": Sichtbarkeit erzeugt Wert, Überverfügbarkeit zerstört ihn.', en: '"Attention is a currency": visibility creates value, over-availability destroys it.' },
          a: true,
          x: {
            de: 'Gesetz 6 & 16, Seduction, Human Nature 5: Knappheit steuert Begehren.',
            en: 'Laws 6 & 16, Seduction, Human Nature 5: scarcity steers desire.',
          },
        },
        {
          t: 'tf',
          q: { de: '„Reputation und Bild sind Realität zweiter Ordnung" heißt: Die Welt reagiert auf dein Bild — steuere es, oder andere tun es.', en: '"Reputation and image are second-order reality": the world reacts to your image — control it, or others will.' },
          a: true,
          x: {
            de: 'Gesetz 5, 25, 30, 37: Dein Bild ist deine Schöpfung — oder die deiner Feinde.',
            en: 'Laws 5, 25, 30, 37: your image is your creation — or your enemies\'.',
          },
        },
        {
          t: 'mc',
          q: { de: '„Muster schlagen Momente" besagt …', en: '"Patterns beat moments" says …' },
          o: [
            { de: 'Charakter ist Wiederholung — beurteile Menschen über Zeit', en: 'character is repetition — judge people over time' },
            { de: 'Momente zählen', en: 'moments count' },
            { de: 'Muster sind Zufall', en: 'patterns are random' },
            { de: 'erste Eindrücke stimmen', en: 'first impressions are right' },
          ],
          a: 0,
          x: {
            de: 'Human Nature 4, 10, 16: Einzelszenen täuschen, Muster lügen nicht.',
            en: 'Human Nature 4, 10, 16: single scenes deceive, patterns don\'t lie.',
          },
        },
        {
          t: 'mc',
          q: { de: '„Meisterschaft ist der höchste Machthebel" — weil …', en: '"Mastery is the highest power lever" — because …' },
          o: [
            { de: 'wahres Können unabhängig macht und niemand dir nehmen kann', en: 'true skill makes you independent and no one can take it from you' },
            { de: 'Titel wichtig sind', en: 'titles matter' },
            { de: 'Beziehungen alles sind', en: 'connections are everything' },
            { de: 'Geld Macht ist', en: 'money is power' },
          ],
          a: 0,
          x: {
            de: 'Mastery verbindet alle Bücher: Können ist die Macht, die nicht erobert werden kann.',
            en: 'Mastery connects all books: skill is the power that cannot be conquered.',
          },
        },
        {
          t: 'match',
          q: { de: 'Meta-Prinzip ↔ Essenz.', en: 'Match meta-principle ↔ essence.' },
          pairs: [
            { l: { de: 'Aufmerksamkeit', en: 'Attention' }, r: { de: 'Knappheit steuert Begehren', en: 'Scarcity steers desire' } },
            { l: { de: 'Indirektion', en: 'Indirection' }, r: { de: 'Flanke statt Front', en: 'Flank instead of front' } },
            { l: { de: 'Emotion', en: 'Emotion' }, r: { de: 'Ruhe ist Machtbasis', en: 'Calm is power base' } },
            { l: { de: 'Muster', en: 'Patterns' }, r: { de: 'Charakter über Zeit lesen', en: 'Read character over time' } },
          ],
        },
        {
          t: 'tf',
          q: { de: 'Die zwölf Meta-Prinzipien zeigen: Alle sechs Bücher sind ein System — Macht, Verführung, Strategie und Menschenkenntnis greifen ineinander.', en: 'The twelve meta-principles show: all six books are one system — power, seduction, strategy, and human nature interlock.' },
          a: true,
          x: {
            de: 'Das Handbuch nennt es die Architektur: Ein Werk, sechs Perspektiven, zwölf Grundströmungen.',
            en: 'The handbook calls it the architecture: one work, six perspectives, twelve undercurrents.',
          },
        },
      ],
    },
  ],
}
