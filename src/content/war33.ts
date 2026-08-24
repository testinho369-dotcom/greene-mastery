import type { Course } from './types'

export const war33: Course = {
  id: 'war33',
  title: { de: 'Die 33 Strategien des Krieges', en: 'The 33 Strategies of War' },
  sub: { de: 'Strategisches Denken für Konflikte', en: 'Strategic thinking for conflict' },
  icon: '⚔️',
  color: '#E5484D',
  colorDark: '#B33639',
  lessons: [
    {
      id: 'war-1',
      title: { de: 'Selbstgerichtete Kriegsführung', en: 'Self-Directed Warfare' },
      sub: { de: 'Strategien 1–4 · Der innere Krieger', en: 'Strategies 1–4 · The inner warrior' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Strategie 1: „Erkläre deinen Feinden den Krieg" heißt …', en: 'Strategy 1: "Declare war on your enemies" means …' },
          o: [
            { de: 'Klarheit über deine Gegner gewinnen — keine falschen Freunde', en: 'gaining clarity about opponents — no false friends' },
            { de: 'sofort angreifen', en: 'attacking immediately' },
            { de: 'jeden bekriegen', en: 'fighting everyone' },
            { de: 'Krieg erklären ist höflich', en: 'declaring war is polite' },
          ],
          a: 0,
          x: {
            de: 'Polarität schafft Fokus: Wer weiß, wer der Gegner ist, verschwendet keine Energie an Illusionen.',
            en: 'Polarity creates focus: knowing your enemy wastes no energy on illusions.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Strategie 2: „Kämpfe nicht den letzten Krieg" — vergangene Erfolge können zur Falle werden.', en: 'Strategy 2: "Do not fight the last war" — past successes can become traps.' },
          a: true,
          x: {
            de: 'Was gestern funktionierte, ist heute veraltet. Strategen kämpfen die Gegenwart, nicht die Vergangenheit.',
            en: 'What worked yesterday is outdated today. Strategists fight the present, not the past.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 3: „Bewahre im Tumult der Ereignisse deine …"', en: 'Strategy 3: "Amidst the turmoil of events, keep your …"' },
          o: [
            { de: 'Geistesgegenwart', en: 'presence of mind' },
            { de: 'Waffen', en: 'weapons' },
            { de: 'Freunde', en: 'friends' },
            { de: 'Geheimnisse', en: 'secrets' },
          ],
          a: 0,
          x: {
            de: 'Wer dich emotional macht, führt dich. Geistesgegenwart ist die letzte Verteidigung.',
            en: 'Whoever makes you emotional controls you. Presence of mind is the last defense.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Strategie 4 empfiehlt ein Gefühl von Dringlichkeit und Verzweiflung zu kultivieren — „Sterblichkeitsstrategie".', en: 'Strategy 4 recommends cultivating urgency and desperation — the "death-ground strategy".' },
          a: true,
          x: {
            de: 'Auf „totem Grund" ohne Rückzug kämpfen Menschen am härtesten — Dringlichkeit mobilisiert Kräfte.',
            en: 'On "death ground" with no retreat, people fight hardest — urgency mobilizes forces.',
          },
        },
        {
          t: 'match',
          q: { de: 'Strategie ↔ Kern.', en: 'Match strategy ↔ core.' },
          pairs: [
            { l: { de: 'Strategie 1', en: 'Strategy 1' }, r: { de: 'Kenne deine Feinde', en: 'Know your enemies' } },
            { l: { de: 'Strategie 2', en: 'Strategy 2' }, r: { de: 'Nicht den letzten Krieg kämpfen', en: 'Don\'t fight the last war' } },
            { l: { de: 'Strategie 3', en: 'Strategy 3' }, r: { de: 'Ruhe im Tumult bewahren', en: 'Keep calm in turmoil' } },
            { l: { de: 'Strategie 4', en: 'Strategy 4' }, r: { de: 'Dringlichkeit erzeugen', en: 'Create urgency' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Wer sich in Sicherheit wiegt,', en: 'Whoever feels safe,' },
          after: { de: 'wird weich.', en: 'goes soft.' },
          o: [
            { de: 'verliert die Schärfe und', en: 'loses the edge and' },
            { de: 'wird stärker und', en: 'gets stronger and' },
            { de: 'wird reicher und', en: 'gets richer and' },
          ],
          a: 0,
          x: {
            de: 'Die Sterblichkeitsstrategie: Stelle dich bewusst auf totem Grund auf — Rücken an die Wand schafft Fokus.',
            en: 'The death-ground strategy: deliberately place yourself with your back to the wall — it creates focus.',
          },
        },
      ],
    },
    {
      id: 'war-2',
      title: { de: 'Organisation und Führung', en: 'Organization and Leadership' },
      sub: { de: 'Strategien 5–7 · Team und Struktur', en: 'Strategies 5–7 · Team and structure' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Strategie 5 warnt vor Groupthink. Das Gegenmittel:', en: 'Strategy 5 warns of groupthink. The antidote:' },
          o: [
            { de: 'Befehlskette mit klarer Entscheidungsverantwortung', en: 'chain of command with clear decision ownership' },
            { de: 'mehr Demokratie in allen Fragen', en: 'more democracy on all questions' },
            { de: 'längere Meetings', en: 'longer meetings' },
            { de: 'Konsens um jeden Preis', en: 'consensus at all costs' },
          ],
          a: 0,
          x: {
            de: 'Gruppen neigen zu Konformität. Kluge Führer hören viele Stimmen — aber die Entscheidung trifft einer.',
            en: 'Groups drift toward conformity. Smart leaders hear many voices — but one person decides.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Strategie 6: „Segmentiere deine Kräfte" — kleine, autonome Einheiten sind flexibler als ein starres Großheer.', en: 'Strategy 6: "Segment your forces" — small autonomous units are more flexible than one rigid mass army.' },
          a: true,
          x: {
            de: 'Kontrollierter Chaos-Ansatz: kleine Zellen entscheiden schnell vor Ort, das Zentrum hält den Rahmen.',
            en: 'Controlled chaos: small cells decide fast on the ground, the center holds the frame.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 7: „Verwandle deinen Krieg in einen Kreuzzug" bedeutet …', en: 'Strategy 7: "Transform your war into a crusade" means …' },
          o: [
            { de: 'den Kampf moralisch aufladen — eine Sache schafft Fanatismus', en: 'charging the fight morally — a cause creates fanaticism' },
            { de: 'Religion instrumentalisieren', en: 'instrumentalizing religion' },
            { de: 'immer angreifen', en: 'always attacking' },
            { de: 'Kriege vermeiden', en: 'avoiding wars' },
          ],
          a: 0,
          x: {
            de: 'Menschen kämpfen härter für eine Idee als für einen Sold.',
            en: 'People fight harder for an idea than for a paycheck.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Laut Greene sollte Führung Entscheidungen möglichst lange offen lassen.', en: 'According to Greene, leadership should keep decisions open as long as possible.' },
          a: false,
          x: {
            de: 'Ungewisse Führung lähmt. Entscheide, kommuniziere klar, und die Truppe folgt.',
            en: 'Uncertain leadership paralyzes. Decide, communicate clearly, and the troops follow.',
          },
        },
        {
          t: 'match',
          q: { de: 'Strategie ↔ Prinzip.', en: 'Match strategy ↔ principle.' },
          pairs: [
            { l: { de: 'Strategie 5', en: 'Strategy 5' }, r: { de: 'Groupthink vermeiden', en: 'Avoid groupthink' } },
            { l: { de: 'Strategie 6', en: 'Strategy 6' }, r: { de: 'Kräfte segmentieren', en: 'Segment your forces' } },
            { l: { de: 'Strategie 7', en: 'Strategy 7' }, r: { de: 'Kreuzzug erzeugen', en: 'Create a crusade' } },
            { l: { de: 'Führung', en: 'Leadership' }, r: { de: 'Klar entscheiden', en: 'Decide clearly' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Kleine autonome Einheiten sind', en: 'Small autonomous units are' },
          after: { de: 'als ein starres Großheer.', en: 'than one rigid mass army.' },
          o: [
            { de: 'flexibler', en: 'more flexible' },
            { de: 'schwächer', en: 'weaker' },
            { de: 'teurer', en: 'costlier' },
          ],
          a: 0,
          x: {
            de: 'Segmentierung schafft Geschwindigkeit: Dezentrale Einheiten reagieren, während Zentralen noch beraten.',
            en: 'Segmentation creates speed: decentralized units react while headquarters still deliberates.',
          },
        },
      ],
    },
    {
      id: 'war-3',
      title: { de: 'Defensive Kriegsführung', en: 'Defensive Warfare' },
      sub: { de: 'Strategien 8–11 · Ökonomie und Raum', en: 'Strategies 8–11 · Economy and space' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Strategie 8: „Wähle deine Schlachten sorgfältig" heißt …', en: 'Strategy 8: "Pick your battles carefully" means …' },
          o: [
            { de: 'nur kämpfen, wenn der Nutzen die Kosten übersteigt', en: 'fight only when benefit exceeds cost' },
            { de: 'nie kämpfen', en: 'never fight' },
            { de: 'immer kämpfen', en: 'always fight' },
            { de: 'nur große Schlachten wählen', en: 'choose only big battles' },
          ],
          a: 0,
          x: {
            de: 'Die perfekte Ökonomie: Jeder Kampf kostet Kraft — der Weise lässt kleine Scharmützel aus.',
            en: 'Perfect economy: every fight costs strength — the wise skip petty skirmishes.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Strategie 9: „Drehe den Spieß um" — aus Verteidigung kann ein Gegenangriff werden, der die Initiative ergreift.', en: 'Strategy 9: "Turn the tables" — defense can become a counterattack that seizes the initiative.' },
          a: true,
          x: {
            de: 'Wer nur reagiert, verliert. Aus scheinbarer Schwäche heraus umschalten ist klassische Strategie.',
            en: 'Those who only react lose. Switching from apparent weakness is classic strategy.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 10: Eine „bedrohliche Präsenz" erspart …', en: 'Strategy 10: A "threatening presence" spares you …' },
          o: [
            { de: 'tatsächliche Kämpfe — Abschreckung statt Krieg', en: 'actual fights — deterrence instead of war' },
            { de: 'Freunde', en: 'friends' },
            { de: 'Geld', en: 'money' },
            { de: 'Zeit', en: 'time' },
          ],
          a: 0,
          x: {
            de: 'Der beste Kampf ist der, der gar nicht stattfindet, weil der Gegner nicht wagt.',
            en: 'The best battle is the one that never happens because the opponent dares not.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 11: „Tausche Raum gegen Zeit" bedeutet …', en: 'Strategy 11: "Trade space for time" means …' },
          o: [
            { de: 'beim Rückzug Territorium opfern, um Kräfte zu sammeln', en: 'sacrificing territory in retreat to gather strength' },
            { de: 'sofort kapitulieren', en: 'surrendering immediately' },
            { de: 'schneller rennen', en: 'running faster' },
            { de: 'den Feind einholen', en: 'catching the enemy' },
          ],
          a: 0,
          x: {
            de: 'Raum ist billiger als Niederlage: Wer weicht, lebt, um später zurückzuschlagen.',
            en: 'Space is cheaper than defeat: those who yield live to strike back later.',
          },
        },
        {
          t: 'match',
          q: { de: 'Strategie ↔ Essenz.', en: 'Match strategy ↔ essence.' },
          pairs: [
            { l: { de: 'Strategie 8', en: 'Strategy 8' }, r: { de: 'Schlachten wählen', en: 'Pick your battles' } },
            { l: { de: 'Strategie 9', en: 'Strategy 9' }, r: { de: 'Spieß umdrehen', en: 'Turn the tables' } },
            { l: { de: 'Strategie 10', en: 'Strategy 10' }, r: { de: 'Abschreckung', en: 'Deterrence' } },
            { l: { de: 'Strategie 11', en: 'Strategy 11' }, r: { de: 'Raum gegen Zeit', en: 'Space for time' } },
          ],
        },
        {
          t: 'tf',
          q: { de: 'Defensive Strategie ist laut Greene feige und sollte vermieden werden.', en: 'According to Greene, defensive strategy is cowardly and should be avoided.' },
          a: false,
          x: {
            de: 'Im Gegenteil: Die Ökonomie der Kraft ist höchste Weisheit — die meisten Kriege gewinnt die sparsamere Seite.',
            en: 'On the contrary: economy of force is highest wisdom — most wars are won by the more economical side.',
          },
        },
      ],
    },
    {
      id: 'war-4',
      title: { de: 'Offensive Kriegsführung I', en: 'Offensive Warfare I' },
      sub: { de: 'Strategien 12–17 · Initiative und Intelligenz', en: 'Strategies 12–17 · Initiative and intelligence' },
      questions: [
        {
          t: 'tf',
          q: { de: 'Strategie 12: „Verliere Schlachten, aber gewinne den Krieg" — taktische Niederlagen können strategisch klug sein.', en: 'Strategy 12: "Lose battles but win the war" — tactical defeats can be strategically wise.' },
          a: true,
          x: {
            de: 'Kleine Verluste ködern Übermut. Der Grand Strategy dient das große Bild, nicht das Ego.',
            en: 'Small losses bait overconfidence. Grand strategy serves the big picture, not the ego.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 13: „Kenne deinen Feind" betont vor allem …', en: 'Strategy 13: "Know your enemy" emphasizes above all …' },
          o: [
            { de: 'Intelligenz: Information ist die halbe Schlacht', en: 'intelligence: information is half the battle' },
            { de: 'Stärke', en: 'strength' },
            { de: 'Geschwindigkeit', en: 'speed' },
            { de: 'Waffen', en: 'weapons' },
          ],
          a: 0,
          x: {
            de: 'Wer die Denkweise des Gegners versteht, kann seine Züge vorhersehen.',
            en: 'Understanding the opponent\'s mindset lets you foresee their moves.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 14: „Überwältige Widerstand mit Geschwindigkeit und Plötzlichkeit" nennt man …', en: 'Strategy 14: "Overwhelm resistance with speed and suddenness" is called …' },
          o: [
            { de: 'Blitzkrieg-Strategie', en: 'blitzkrieg strategy' },
            { de: 'Erschöpfungskrieg', en: 'war of attrition' },
            { de: 'Belagerung', en: 'siege' },
            { de: 'Guerilla', en: 'guerrilla' },
          ],
          a: 0,
          x: {
            de: 'Überraschende Schnelligkeit lähmt: Der Gegner kann nicht reagieren, bevor es vorbei ist.',
            en: 'Sudden speed paralyzes: the opponent cannot react before it\'s over.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Strategie 15 (Forcing-Strategie): Kontrolliere die Dynamik, indem du den Gegner zu Zügen zwingst.', en: 'Strategy 15 (forcing strategy): Control the dynamic by forcing the opponent into moves.' },
          a: true,
          x: {
            de: 'Wer handeln muss, macht Fehler. Erzwinge Reaktionen statt zu reagieren.',
            en: 'Those who must act make mistakes. Force reactions instead of reacting.',
          },
        },
        {
          t: 'match',
          q: { de: 'Strategie ↔ Kern.', en: 'Match strategy ↔ core.' },
          pairs: [
            { l: { de: 'Strategie 12', en: 'Strategy 12' }, r: { de: 'Krieg statt Schlacht gewinnen', en: 'Win war, not battles' } },
            { l: { de: 'Strategie 13', en: 'Strategy 13' }, r: { de: 'Feind verstehen', en: 'Understand the enemy' } },
            { l: { de: 'Strategie 14', en: 'Strategy 14' }, r: { de: 'Plötzlichkeit', en: 'Suddenness' } },
            { l: { de: 'Strategie 15', en: 'Strategy 15' }, r: { de: 'Dynamik kontrollieren', en: 'Control the dynamic' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Information über den Feind ist', en: 'Intelligence about the enemy is' },
          after: { de: 'die halbe Schlacht.', en: 'half the battle.' },
          o: [
            { de: 'mehr als', en: 'more than' },
            { de: 'nie', en: 'never' },
            { de: 'selten', en: 'rarely' },
          ],
          a: 0,
          x: {
            de: 'Intelligenz-Strategie: Erkenne Denkmuster, Schwächen und Absichten des Gegners, bevor du handelst.',
            en: 'Intelligence strategy: learn the opponent\'s patterns, weaknesses and intentions before acting.',
          },
        },
      ],
    },
    {
      id: 'war-5',
      title: { de: 'Offensive Kriegsführung II', en: 'Offensive Warfare II' },
      sub: { de: 'Strategien 18–22 · Flanke und Ende', en: 'Strategies 18–22 · Flank and ending' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Strategie 18: „Enthülle und attackiere die weiche Flanke" bedeutet …', en: 'Strategy 18: "Expose and attack the soft flank" means …' },
          o: [
            { de: 'die Verwundbarkeit des Gegners finden statt frontal anzugreifen', en: 'finding the opponent\'s vulnerability instead of frontal attack' },
            { de: 'den Stärksten zuerst treffen', en: 'hitting the strongest first' },
            { de: 'von vorn angreifen', en: 'attacking head-on' },
            { de: 'Flanken ignorieren', en: 'ignoring flanks' },
          ],
          a: 0,
          x: {
            de: 'Indirektion schlägt Konfrontation: Die Front ist befestigt, die Flanke nicht.',
            en: 'Indirection beats confrontation: the front is fortified, the flank is not.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Strategie 17: „Teile und herrsche" — zerteile gegnerische Bündnisse in kleine, schwache Teile.', en: 'Strategy 17: "Divide and rule" — split enemy alliances into small weak parts.' },
          a: true,
          x: {
            de: 'Ein geeinter Feind ist stark. Säge Misstrauen zwischen den Verbündeten, und sie zerfällt von selbst.',
            en: 'A united enemy is strong. Sow distrust among allies and it dissolves by itself.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 20: „Manövriere sie in die Schwäche" — das Ziel ist …', en: 'Strategy 20: "Maneuver them into weakness" — the goal is …' },
          o: [
            { de: 'den Gegner in Positionen zu treiben, in denen er schwach ist', en: 'driving the opponent into positions where he is weak' },
            { de: 'schnelle Angriffe', en: 'fast attacks' },
            { de: 'mehr Truppen', en: 'more troops' },
            { de: 'gute Verhandlung', en: 'good negotiation' },
          ],
          a: 0,
          x: {
            de: 'Reifungs-Strategie: Manöver erschöpfen und verwirren — der Sieg folgt der Erschöpfung.',
            en: 'Ripening strategy: maneuvers exhaust and confuse — victory follows exhaustion.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 22: „Wisse, wie man Dinge beendet" — was ist die Kunst des guten Endes?', en: 'Strategy 22: "Know how to end things" — what is the art of the good ending?' },
          o: [
            { de: 'Zu wissen, wann Schluss ist — Sieger, die zu weit gehen, zerstören ihren Sieg', en: 'Knowing when it\'s over — victors who go too far destroy their victory' },
            { de: 'Nie aufhören', en: 'Never stopping' },
            { de: 'Gnadig sein', en: 'Being merciful' },
            { de: 'Schnell rennen', en: 'Running fast' },
          ],
          a: 0,
          x: {
            de: 'Exit-Strategie: Wer das Ende nicht plant, wird vom Erfolg überrollt.',
            en: 'Exit strategy: those who don\'t plan the ending get run over by success.',
          },
        },
        {
          t: 'match',
          q: { de: 'Strategie ↔ Essenz.', en: 'Match strategy ↔ essence.' },
          pairs: [
            { l: { de: 'Strategie 17', en: 'Strategy 17' }, r: { de: 'Teile und herrsche', en: 'Divide and rule' } },
            { l: { de: 'Strategie 18', en: 'Strategy 18' }, r: { de: 'Weiche Flanke treffen', en: 'Hit the soft flank' } },
            { l: { de: 'Strategie 20', en: 'Strategy 20' }, r: { de: 'In Schwäche manövrieren', en: 'Maneuver into weakness' } },
            { l: { de: 'Strategie 22', en: 'Strategy 22' }, r: { de: 'Gut beenden', en: 'End well' } },
          ],
        },
        {
          t: 'tf',
          q: { de: 'Strategie 21: „Verhandle, während du vorrückst" — Diplomatie kann parallel zum Druck laufen.', en: 'Strategy 21: "Negotiate while advancing" — diplomacy can run parallel to pressure.' },
          a: true,
          x: {
            de: 'Verhandlung ohne Druck ist Bettelei; Druck mit Verhandlung ist Strategie.',
            en: 'Negotiation without pressure is begging; pressure with negotiation is strategy.',
          },
        },
      ],
    },
    {
      id: 'war-6',
      title: { de: 'Unkonventionelle Kriegsführung', en: 'Unconventional Warfare' },
      sub: { de: 'Strategien 23–33 · Täuschung und Innen', en: 'Strategies 23–33 · Deception and the inside' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Strategie 23: „Webe ein nahtloses Gewebe aus Fakt und Fiktion" beschreibt …', en: 'Strategy 23: "Weave a seamless blend of fact and fiction" describes …' },
          o: [
            { de: 'Täuschung, die real aussieht — Desinformation', en: 'deception that looks real — disinformation' },
            { de: 'absolute Wahrheit', en: 'absolute truth' },
            { de: 'gute Webkunst', en: 'good weaving' },
            { de: 'offene Kommunikation', en: 'open communication' },
          ],
          a: 0,
          x: {
            de: 'Die glaubwürdigste Lüge enthält viel Wahres. Wahrnehmung ist das Schlachtfeld.',
            en: 'The most believable lie contains much truth. Perception is the battlefield.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 24: „Nimm die Linie der geringsten Erwartung" heißt …', en: 'Strategy 24: "Take the line of least expectation" means …' },
          o: [
            { de: 'das Unerwartete tun — dort liegt der Vorteil', en: 'doing the unexpected — that\'s where advantage lies' },
            { de: 'wenig erwarten', en: 'expecting little' },
            { de: 'vorhersehbar sein', en: 'being predictable' },
            { de: 'aufgeben', en: 'giving up' },
          ],
          a: 0,
          x: {
            de: 'Außergewöhnlichkeit ist Strategie: Was niemand erwartet, kann niemand abwehren.',
            en: 'Unconventionality is strategy: what nobody expects, nobody can defend against.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Strategie 26: „Verweigere ihnen Ziele" — passive Räume und Nichterscheinen können den Gegner aus der Fassung bringen.', en: 'Strategy 26: "Deny them targets" — absence and non-engagement can unhinge the opponent.' },
          a: true,
          x: {
            de: 'Wer kein Ziel bietet, kann nicht getroffen werden — der Gegner schlägt ins Leere und erschöpft sich.',
            en: 'Offering no target means you cannot be hit — the opponent strikes at air and exhausts himself.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Strategie 31: „Zerstöre von innen" meint …', en: 'Strategy 31: "Destroy from within" means …' },
          o: [
            { de: 'die innere Strategie — unterwandern statt stürmen', en: 'the inner strategy — infiltrate instead of storming' },
            { de: 'sich selbst zerstören', en: 'destroying yourself' },
            { de: 'Innenräume einreißen', en: 'demolishing interiors' },
            { de: 'offene Rebellion', en: 'open rebellion' },
          ],
          a: 0,
          x: {
            de: 'Festungen fallen leichter durch Tore, die von innen geöffnet werden.',
            en: 'Fortresses fall more easily through gates opened from inside.',
          },
        },
        {
          t: 'match',
          q: { de: 'Strategie ↔ Essenz.', en: 'Match strategy ↔ essence.' },
          pairs: [
            { l: { de: 'Strategie 23', en: 'Strategy 23' }, r: { de: 'Fakt und Fiktion weben', en: 'Blend fact and fiction' } },
            { l: { de: 'Strategie 26', en: 'Strategy 26' }, r: { de: 'Keine Ziele bieten', en: 'Deny targets' } },
            { l: { de: 'Strategie 31', en: 'Strategy 31' }, r: { de: 'Von innen zerstören', en: 'Destroy from within' } },
            { l: { de: 'Strategie 33', en: 'Strategy 33' }, r: { de: 'Ungewissheit säen', en: 'Sow uncertainty' } },
          ],
        },
        {
          t: 'blank',
          before: { de: 'Dominiere, während du zu', en: 'Dominate while seeming to' },
          after: { de: 'scheinst.', en: '.' },
          o: [
            { de: 'gehorchen', en: 'obey' },
            { de: 'fliehen', en: 'flee' },
            { de: 'schlafen', en: 'sleep' },
          ],
          a: 0,
          x: {
            de: 'Strategie 32: Passive Aggression — Ungehorsam im Gewand des Gehorsams ist schwer angreifbar.',
            en: 'Strategy 32: Passive aggression — disobedience in the cloak of obedience is hard to attack.',
          },
        },
      ],
    },
  ],
}
