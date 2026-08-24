import type { Course } from './types'

export const humanNature: Course = {
  id: 'human',
  title: { de: 'Die Gesetze der menschlichen Natur', en: 'The Laws of Human Nature' },
  sub: { de: '18 Gesetze · Menschen verstehen', en: '18 laws · Understanding people' },
  icon: '🧠',
  color: '#8B5CF6',
  colorDark: '#6D44D8',
  lessons: [
    {
      id: 'hn-1',
      title: { de: 'Emotion & Narzissmus', en: 'Emotion & Narcissism' },
      sub: { de: 'Gesetze 1–5 · Das innere Spiel', en: 'Laws 1–5 · The inner game' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 1 (Irrationalität): Der erste Schritt zur Meisterschaft des emotionalen Selbst ist …', en: 'Law 1 (Irrationality): The first step to mastering the emotional self is …' },
          o: [
            { de: 'einzugestehen, dass wir alle irrational sind — und Auslöser zu erkennen', en: 'admitting we are all irrational — and recognizing triggers' },
            { de: 'Emotionen zu unterdrücken', en: 'suppressing emotions' },
            { de: 'immer rational zu handeln', en: 'always acting rationally' },
            { de: 'Gefühle zu ignorieren', en: 'ignoring feelings' },
          ],
          a: 0,
          x: {
            de: 'Wer glaubt, rational zu sein, wird am stärksten von Emotionen gesteuert. Selbstprüfung ist der Anfang.',
            en: 'Those who believe they are rational are steered most by emotions. Self-examination is the start.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 2: Narzissmus ist per se böse und muss abgeschafft werden.', en: 'Law 2: Narcissism is inherently evil and must be abolished.' },
          a: false,
          x: {
            de: 'Wir sind alle Narzissten. Das Ziel: Selbstliebe in Empathie verwandeln — gesunder Narzissmus statt toxischem.',
            en: 'We are all narcissists. The goal: transform self-love into empathy — healthy instead of toxic narcissism.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 3: Um die Masken der Menschen zu durchschauen, beobachte vor allem …', en: 'Law 3: To see through people\'s masks, watch above all …' },
          o: [
            { de: 'Körpersprache, Tonfall und Mikro-Signale — nicht die Worte', en: 'body language, tone, and micro-signals — not the words' },
            { de: 'ihre Kleidung', en: 'their clothes' },
            { de: 'ihre Titel', en: 'their titles' },
            { de: 'ihre Freunde', en: 'their friends' },
          ],
          a: 0,
          x: {
            de: 'Worte sind leicht kontrollierbar; der Körper verrät, was die Maske verbirgt.',
            en: 'Words are easily controlled; the body betrays what the mask hides.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 4 (zwanghaftes Verhalten): Charakter erkennt man an …', en: 'Law 4 (compulsive behavior): Character is revealed by …' },
          o: [
            { de: 'sich wiederholenden Mustern über die Zeit', en: 'repeating patterns over time' },
            { de: 'einzelnen Taten', en: 'single deeds' },
            { de: 'großen Reden', en: 'grand speeches' },
            { de: 'dem Aussehen', en: 'appearance' },
          ],
          a: 0,
          x: {
            de: 'Menschen sind Gefangene ihres Charakters — Muster wiederholen sich. Glaube dem Muster, nicht dem Versprechen.',
            en: 'People are prisoners of their character — patterns repeat. Trust the pattern, not the promise.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 5: Werde ein schwer fassbares Objekt der Begierde — Begehren entsteht durch Distanz und Geheimnis.', en: 'Law 5: Become an elusive object of desire — desire arises through distance and mystery.' },
          a: true,
          x: {
            de: 'Begehren folgt der Spannung: Was vollkommen greifbar ist, verliert seinen Reiz.',
            en: 'Desire follows tension: what is fully graspable loses its allure.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Thema.', en: 'Match law ↔ theme.' },
          pairs: [
            { l: { de: 'Gesetz 1', en: 'Law 1' }, r: { de: 'Irrationalität meistern', en: 'Master irrationality' } },
            { l: { de: 'Gesetz 2', en: 'Law 2' }, r: { de: 'Narzissmus verwandeln', en: 'Transform narcissism' } },
            { l: { de: 'Gesetz 3', en: 'Law 3' }, r: { de: 'Masken durchschauen', en: 'See through masks' } },
            { l: { de: 'Gesetz 4', en: 'Law 4' }, r: { de: 'Charakter über Muster lesen', en: 'Read character via patterns' } },
          ],
        },
      ],
    },
    {
      id: 'hn-2',
      title: { de: 'Perspektive & Widerstand', en: 'Perspective & Resistance' },
      sub: { de: 'Gesetze 6–9 · Denken heben, Seite sehen', en: 'Laws 6–9 · Elevate thinking, see the shadow' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 6: „Erhöhe deine Perspektive" (Kurzsichtigkeit) bedeutet …', en: 'Law 6: "Elevate your perspective" (shortsightedness) means …' },
          o: [
            { de: 'den Moment überwinden und in langen Zeitrahmen denken', en: 'overcoming the moment and thinking in long timeframes' },
            { de: 'schneller reagieren', en: 'reacting faster' },
            { de: 'näher herangehen', en: 'zooming in closer' },
            { de: 'mehr erleben', en: 'experiencing more' },
          ],
          a: 0,
          x: {
            de: 'Die meisten Menschen reagieren auf das Unmittelbare. Wer weit blickt, gewinnt das große Spiel.',
            en: 'Most people react to the immediate. Those who look far win the big game.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 7: Widerstand anderer weicht man am besten durch direkte Überredung.', en: 'Law 7: You best soften others\' resistance through direct persuasion.' },
          a: false,
          x: {
            de: 'Direktes Drängen verhärtet Widerstand. Arbeite indirekt: Rahmen setzen, selbst entdecken lassen.',
            en: 'Direct pressure hardens resistance. Work indirectly: set frames, let them discover it themselves.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 8: „Verändere deine Umstände, indem du deine … veränderst"', en: 'Law 8: "Change your circumstances by changing your …"' },
          o: [
            { de: 'Einstellung', en: 'attitude' },
            { de: 'Freunde', en: 'friends' },
            { de: 'Stadt', en: 'city' },
            { de: 'Jobs', en: 'jobs' },
          ],
          a: 0,
          x: {
            de: 'Selbst sabotierende Skripte erzeugen die immer gleichen Umstände — ändere das Drehbuch, nicht die Bühne.',
            en: 'Self-sabotaging scripts produce the same circumstances — change the script, not the stage.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 9: Die „dunkle Seite" (Verdrängung) sollte man …', en: 'Law 9: The "dark side" (repression) should be …' },
          o: [
            { de: 'konfrontiert und integriert — sie ist Energiequelle', en: 'confronted and integrated — it is an energy source' },
            { de: 'für immer verdrängt', en: 'repressed forever' },
            { de: 'ignoriert', en: 'ignored' },
            { de: 'bekämpft', en: 'fought' },
          ],
          a: 0,
          x: {
            de: 'Was wir verdrängen, bricht unkontrolliert hervor. Wer den Schatten integriert, wird authentisch und stark.',
            en: 'What we repress erupts uncontrollably. Integrating the shadow makes you authentic and strong.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Kern.', en: 'Match law ↔ core.' },
          pairs: [
            { l: { de: 'Gesetz 6', en: 'Law 6' }, r: { de: 'Kurzsichtigkeit überwinden', en: 'Overcome shortsightedness' } },
            { l: { de: 'Gesetz 7', en: 'Law 7' }, r: { de: 'Widerstand indirekt weichen', en: 'Soften resistance indirectly' } },
            { l: { de: 'Gesetz 8', en: 'Law 8' }, r: { de: 'Einstellung ändern', en: 'Change your attitude' } },
            { l: { de: 'Gesetz 9', en: 'Law 9' }, r: { de: 'Schatten integrieren', en: 'Integrate the shadow' } },
          ],
        },
        {
          t: 'tf',
          q: { de: 'Die Gesetze der menschlichen Natur gelten laut Greene für alle Menschen — auch für dich selbst.', en: 'According to Greene, the laws of human nature apply to all people — including yourself.' },
          a: true,
          x: {
            de: 'Das Buch beginnt beim Selbst: Wer sich selbst nicht durchschaut, durchschaut niemanden.',
            en: 'The book starts with the self: those who cannot see through themselves see through no one.',
          },
        },
      ],
    },
    {
      id: 'hn-3',
      title: { de: 'Ego, Grenzen & Sinn', en: 'Ego, Limits & Purpose' },
      sub: { de: 'Gesetze 10–14 · Neid, Grandiosität, Zweck', en: 'Laws 10–14 · Envy, grandiosity, purpose' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 10: Das „fragile Ego" (Neid) erkennt man daran, dass …', en: 'Law 10: The "fragile ego" (envy) is recognized by …' },
          o: [
            { de: 'vergiftetes Lob und subtile Abwertung — Neid tarnt sich', en: 'poisoned praise and subtle devaluation — envy disguises itself' },
            { de: 'offene Aggression', en: 'open aggression' },
            { de: 'stille Freude', en: 'quiet joy' },
            { de: 'echte Bewunderung', en: 'true admiration' },
          ],
          a: 0,
          x: {
            de: 'Neid wird selten zugegeben. Achte auf übertriebene Bewunderung und passive Sabotage.',
            en: 'Envy is rarely admitted. Watch for exaggerated admiration and passive sabotage.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 11: „Kenne deine Grenzen" — Grandiosität (Größenwahn) wächst mit dem Erfolg und verzerrt die Selbsteinschätzung.', en: 'Law 11: "Know your limits" — grandiosity grows with success and distorts self-assessment.' },
          a: true,
          x: {
            de: 'Erfolg nährt die Illusion der Allmacht. Realistische Grenzen sind Stärke, keine Schwäche.',
            en: 'Success feeds the illusion of omnipotence. Realistic limits are strength, not weakness.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 13: „Schreite mit einem Gefühl von Sinn voran" — der Zweck wirkt wie …', en: 'Law 13: "Advance with a sense of purpose" — purpose acts like …' },
          o: [
            { de: 'ein innerer Kompass, der Kräfte bündelt', en: 'an inner compass that bundles forces' },
            { de: 'eine Bürde', en: 'a burden' },
            { de: 'ein Zufall', en: 'a coincidence' },
            { de: 'ein Luxus', en: 'a luxury' },
          ],
          a: 0,
          x: {
            de: 'Menschen mit Zweck ertragen mehr und strahlen Richtung aus — Zwecklosigkeit zerstreut.',
            en: 'People with purpose endure more and radiate direction — purposelessness disperses.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 14: Der „Sog der Gruppe" beschreibt …', en: 'Law 14: The "pull of the group" describes …' },
          o: [
            { de: 'Konformitätsdruck — in Gruppen denken wir anders', en: 'conformity pressure — in groups we think differently' },
            { de: 'Teamgeist', en: 'team spirit' },
            { de: 'Freundschaft', en: 'friendship' },
            { de: 'Networking', en: 'networking' },
          ],
          a: 0,
          x: {
            de: 'Gruppen erzeugen eigene Realitäten. Wer das weiß, behält seinen Standpunkt — und kann Gruppen lenken.',
            en: 'Groups create their own realities. Knowing this keeps your standpoint — and lets you steer groups.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Gefahr.', en: 'Match law ↔ danger.' },
          pairs: [
            { l: { de: 'Gesetz 10', en: 'Law 10' }, r: { de: 'Neid und fragiles Ego', en: 'Envy and fragile ego' } },
            { l: { de: 'Gesetz 11', en: 'Law 11' }, r: { de: 'Grandiosität', en: 'Grandiosity' } },
            { l: { de: 'Gesetz 13', en: 'Law 13' }, r: { de: 'Zwecklosigkeit', en: 'Purposelessness' } },
            { l: { de: 'Gesetz 14', en: 'Law 14' }, r: { de: 'Konformitätsdruck', en: 'Conformity pressure' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Neid tarnt sich oft als', en: 'Envy often disguises itself as' },
          after: { de: 'oder Kritik.', en: 'or criticism.' },
          o: [
            { de: 'Lob', en: 'praise' },
            { de: 'Schweigen', en: 'silence' },
            { de: 'Geschenk', en: 'a gift' },
          ],
          a: 0,
          x: {
            de: 'Übertriebenes Lob gefolgt von Sticheleien ist das klassische Neid-Muster.',
            en: 'Exaggerated praise followed by jabs is the classic envy pattern.',
          },
        },
      ],
    },
    {
      id: 'hn-4',
      title: { de: 'Führung & Vergänglichkeit', en: 'Leadership & Mortality' },
      sub: { de: 'Gesetze 15–18 · Folgen, Feindseligkeit, Tod', en: 'Laws 15–18 · Follow, hostility, death' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 15: Menschen bringst du zum Folgen, indem du …', en: 'Law 15: You make people follow by …' },
          o: [
            { de: 'ihre Sehnsucht nach Zugehörigkeit und Sinn ansprichst', en: 'appealing to their longing for belonging and meaning' },
            { de: 'sie zwingst', en: 'forcing them' },
            { de: 'sie bestichst', en: 'bribing them' },
            { de: 'sie ignorierst', en: 'ignoring them' },
          ],
          a: 0,
          x: {
            de: 'Führung ist verführerisch, nicht zwingend: Menschen folgen, wer ihre tiefen Bedürfnisse berührt.',
            en: 'Leadership is seductive, not coercive: people follow whoever touches their deep needs.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 16: „Sieh die Feindseligkeit hinter der freundlichen Fassade" — Passiv-aggressive Signale sind verbreiteter als offene Feindschaft.', en: 'Law 16: "See the hostility behind the friendly facade" — passive-aggressive signals are more common than open hostility.' },
          a: true,
          x: {
            de: 'Offene Feinde sind ehrlich. Gefährlicher ist der Lächelnde, der subtil torpediert.',
            en: 'Open enemies are honest. More dangerous is the smiler who subtly torpedoes.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 17: „Ergreife den historischen Moment" bedeutet …', en: 'Law 17: "Seize the historical moment" means …' },
          o: [
            { de: 'den Zeitgeist lesen und mit der Welle reiten statt dagegen', en: 'reading the zeitgeist and riding the wave instead of against it' },
            { de: 'Geschichte studieren', en: 'studying history' },
            { de: 'Momente fotografieren', en: 'photographing moments' },
            { de: 'nostalgisch sein', en: 'being nostalgic' },
          ],
          a: 0,
          x: {
            de: 'Jede Epoche hat ihre Strömung. Wer sie erkennt, positioniert sich auf der richtigen Seite der Geschichte.',
            en: 'Every era has its current. Recognizing it positions you on the right side of history.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 18: Die Meditation über die gemeinsame Sterblichkeit bewirkt …', en: 'Law 18: Meditating on our common mortality achieves …' },
          o: [
            { de: 'Demut, Dringlichkeit und Mitgefühl', en: 'humility, urgency, and compassion' },
            { de: 'Angst und Lähmung', en: 'fear and paralysis' },
            { de: 'Gleichgültigkeit', en: 'indifference' },
            { de: 'Eitelkeit', en: 'vanity' },
          ],
          a: 0,
          x: {
            de: 'Der Tod verbindet alle Menschen — wer ihn annimmt, lebt intensiver und freundlicher.',
            en: 'Death connects all people — accepting it makes you live more intensely and kindly.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Essenz.', en: 'Match law ↔ essence.' },
          pairs: [
            { l: { de: 'Gesetz 15', en: 'Law 15' }, r: { de: 'Zum Folgen verführen', en: 'Seduce into following' } },
            { l: { de: 'Gesetz 16', en: 'Law 16' }, r: { de: 'Versteckte Feindseligkeit lesen', en: 'Read hidden hostility' } },
            { l: { de: 'Gesetz 17', en: 'Law 17' }, r: { de: 'Zeitgeist reiten', en: 'Ride the zeitgeist' } },
            { l: { de: 'Gesetz 18', en: 'Law 18' }, r: { de: 'Sterblichkeit annehmen', en: 'Accept mortality' } },
          ],
        },
        {
          t: 'tf',
          q: { de: 'Alle 18 Gesetze verlangen zuerst radikale Selbstehrlichkeit — Menschenkenntnis beginnt bei sich selbst.', en: 'All 18 laws first demand radical self-honesty — understanding people begins with yourself.' },
          a: true,
          x: {
            de: 'Das letzte Buch ist das reifste: Macht beginnt nicht bei anderen, sondern im eigenen Inneren.',
            en: 'The final book is the most mature: power begins not with others but within yourself.',
          },
        },
      ],
    },
  ],
}
