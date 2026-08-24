import type { Course } from './types'

// Die 48 Gesetze der Macht — je Lektion ca. 5 Gesetze
export const power48: Course = {
  id: 'power48',
  title: { de: 'Die 48 Gesetze der Macht', en: 'The 48 Laws of Power' },
  sub: { de: 'Das Hauptwerk · 48 Gesetze', en: 'The core work · 48 laws' },
  icon: '👑',
  color: '#F5B301',
  colorDark: '#C98E00',
  lessons: [
    {
      id: 'p48-1',
      title: { de: 'Gesetze 1–5', en: 'Laws 1–5' },
      sub: { de: 'Meister, Freunde, Absichten, Schweigen, Ruf', en: 'Masters, friends, intentions, silence, reputation' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 1 besagt: „Überstrahle niemals …"', en: 'Law 1 says: "Never outshine …"' },
          o: [
            { de: 'den Meister', en: 'the master' },
            { de: 'den Feind', en: 'the enemy' },
            { de: 'den Narren', en: 'the fool' },
            { de: 'den Höfling', en: 'the courtier' },
          ],
          a: 0,
          x: {
            de: 'Lass Vorgesetzte stets überlegen wirken. Wer den Meister überstrahlt, erntet Neid statt Belohnung.',
            en: 'Always make superiors look superior. Outshining the master earns envy, not reward.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Warum rät Gesetz 2, ehemalige Feinde einzusetzen?', en: 'Why does Law 2 advise using former enemies?' },
          o: [
            { de: 'Sie sind loyaler, weil sie sich beweisen müssen', en: 'They are more loyal because they must prove themselves' },
            { de: 'Sie arbeiten gratis', en: 'They work for free' },
            { de: 'Sie kennen keine Skrupel', en: 'They know no scruples' },
            { de: 'Sie sind leicht zu kontrollieren', en: 'They are easy to control' },
          ],
          a: 0,
          x: {
            de: 'Freunde nehmen dich als selbstverständlich; ein besiegter Feind dient oft ergebener.',
            en: 'Friends take you for granted; a defeated enemy often serves more devotedly.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 3: Wer deine Absichten nicht kennt, kann keine Abwehr vorbereiten.', en: 'Law 3: If people don\'t know your intentions, they cannot prepare a defense.' },
          a: true,
          x: {
            de: 'Bismarck täuschte 1860 die Weltöffentlichkeit mit einer Friedensrede, während er Krieg plante.',
            en: 'Bismarck fooled the public in 1860 with a peace speech while planning war.',
          },
        },
        {
          t: 'blank',
          before: { de: 'Je mehr du redest, desto', en: 'The more you talk, the' },
          after: { de: 'wirkst du.', en: 'you appear.' },
          o: [
            { de: 'gewöhnlicher', en: 'more ordinary' },
            { de: 'mächtiger', en: 'more powerful' },
            { de: 'sympathischer', en: 'more likeable' },
          ],
          a: 0,
          x: {
            de: 'Ludwig XIV. antwortete oft nur: „Ich werde sehen" — Schweigen vergrößert deine Aura.',
            en: 'Louis XIV often replied only "I shall see" — silence grows your aura.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 5 dreht sich um den Schutz von …', en: 'Law 5 is about protecting your …' },
          o: [
            { de: 'Ruf', en: 'reputation' },
            { de: 'Reichtum', en: 'wealth' },
            { de: 'Freunde', en: 'friends' },
            { de: 'Geheimnisse', en: 'secrets' },
          ],
          a: 0,
          x: {
            de: 'Der Ruf entscheidet, wie die Welt dich behandelt — greife den Ruf deiner Feinde an, aber schütze deinen eigenen.',
            en: 'Reputation decides how the world treats you — attack your enemies\' reputation, but guard your own.',
          },
        },
        {
          t: 'match',
          q: { de: 'Ordne Gesetz und Kernaussage zu.', en: 'Match law and core idea.' },
          pairs: [
            { l: { de: 'Gesetz 1', en: 'Law 1' }, r: { de: 'Meister überstrahlt man nicht', en: 'Never outshine the master' } },
            { l: { de: 'Gesetz 3', en: 'Law 3' }, r: { de: 'Absichten verbergen', en: 'Conceal intentions' } },
            { l: { de: 'Gesetz 4', en: 'Law 4' }, r: { de: 'Weniger sagen als nötig', en: 'Say less than necessary' } },
            { l: { de: 'Gesetz 5', en: 'Law 5' }, r: { de: 'Den Ruf schützen', en: 'Guard your reputation' } },
          ],
        },
      ],
    },
    {
      id: 'p48-2',
      title: { de: 'Gesetze 6–10', en: 'Laws 6–10' },
      sub: { de: 'Aufmerksamkeit, Köder, Taten, Infektion', en: 'Attention, bait, action, infection' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 6: Was ist schlimmer, als schlecht aufzufallen?', en: 'Law 6: What is worse than being noticed for bad reasons?' },
          o: [
            { de: 'Überhaupt nicht aufzufallen', en: 'Not being noticed at all' },
            { de: 'Zu laut zu sein', en: 'Being too loud' },
            { de: 'Zu reich zu wirken', en: 'Seeming too rich' },
            { de: 'Zu oft zu fehlen', en: 'Being absent too often' },
          ],
          a: 0,
          x: {
            de: 'Aufmerksamkeit ist eine Währung: Sichtbarkeit erzeugt Wert — unsichtbar zu sein ist der größte Fehler.',
            en: 'Attention is currency: visibility creates value — invisibility is the biggest mistake.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 7 erlaubt dir, die Arbeit anderer zu nutzen — solange du ihnen die Ehre überlässt.', en: 'Law 7 lets you use others\' work — as long as you leave them the credit.' },
          a: false,
          x: {
            de: 'Umgekehrt: Lass andere die Arbeit tun, aber behalte die Anerkennung für dich.',
            en: 'It\'s the opposite: let others do the work, but keep the credit yourself.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 8: Die beste Taktik beim Umgang mit Gegnern ist, …', en: 'Law 8: The best tactic with opponents is to …' },
          o: [
            { de: 'sie zu dir kommen zu lassen', en: 'make them come to you' },
            { de: 'sie sofort anzugreifen', en: 'attack them immediately' },
            { de: 'sie zu ignorieren', en: 'ignore them' },
            { de: 'ihnen Geschenke zu machen', en: 'give them gifts' },
          ],
          a: 0,
          x: {
            de: 'Wer kommen muss, agiert auf deinem Terrain und in deiner Falle — Köder statt Verfolgung.',
            en: 'Whoever must come to you acts on your terrain and in your trap — bait, don\'t chase.',
          },
        },
        {
          t: 'mc',
          q: { de: '„Gewinne durch Taten — niemals durch Argumente." Warum?', en: '"Win through actions — never through arguments." Why?' },
          o: [
            { de: 'Argumente erzeugen Groll und verändern nichts', en: 'Arguments breed resentment and change nothing' },
            { de: 'Argumente sind illegal', en: 'Arguments are illegal' },
            { de: 'Taten sind schneller', en: 'Actions are faster' },
            { de: 'Argumente kosten Geld', en: 'Arguments cost money' },
          ],
          a: 0,
          x: {
            de: 'Demonstration schlägt Erklärung: Taten überzeugen ohne offenen Widerstand.',
            en: 'Demonstration beats explanation: actions convince without open resistance.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 10 warnt: Unglück und Elend anderer sind ansteckend — meide die Unglücklichen.', en: 'Law 10 warns: others\' misery is contagious — avoid the unhappy.' },
          a: true,
          x: {
            de: 'Emotionen übertragen sich wie Krankheiten. Umgebe dich mit den Glücklichen und Effizienten.',
            en: 'Emotions spread like diseases. Surround yourself with the happy and efficient.',
          },
        },
        {
          t: 'match',
          q: { de: 'Ordne zu: Gesetz ↔ Strategie.', en: 'Match law ↔ strategy.' },
          pairs: [
            { l: { de: 'Gesetz 6', en: 'Law 6' }, r: { de: 'Um jeden Preis auffallen', en: 'Court attention at all costs' } },
            { l: { de: 'Gesetz 7', en: 'Law 7' }, r: { de: 'Andere arbeiten lassen', en: 'Let others do the work' } },
            { l: { de: 'Gesetz 8', en: 'Law 8' }, r: { de: 'Köder auslegen', en: 'Lay bait' } },
            { l: { de: 'Gesetz 10', en: 'Law 10' }, r: { de: 'Unglückliche meiden', en: 'Avoid the unhappy' } },
          ],
        },
      ],
    },
    {
      id: 'p48-3',
      title: { de: 'Gesetze 11–15', en: 'Laws 11–15' },
      sub: { de: 'Abhängigkeit, Ehrlichkeit, Spionage, Vernichtung', en: 'Dependence, honesty, espionage, annihilation' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 11: Mach dich unverzichtbar, indem du …', en: 'Law 11: Become indispensable by …' },
          o: [
            { de: 'andere von dir abhängig machst', en: 'making others dependent on you' },
            { de: 'jeden Gefallen erfüllst', en: 'granting every favor' },
            { de: 'immer verfügbar bist', en: 'always being available' },
            { de: 'Geheimnisse teilst', en: 'sharing secrets' },
          ],
          a: 0,
          x: {
            de: 'Wer gebraucht wird, kann nicht ersetzt werden — Abhängigkeit ist eine Form von Macht.',
            en: 'Those who are needed cannot be replaced — dependence is a form of power.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 12: Wozu dient „selektive Ehrlichkeit"?', en: 'Law 12: What is "selective honesty" for?' },
          o: [
            { de: 'Misstrauen zu entwaffnen und Türen zu öffnen', en: 'Disarming suspicion and opening doors' },
            { de: 'Immer die Wahrheit zu sagen', en: 'Always telling the truth' },
            { de: 'Freunde zu testen', en: 'Testing friends' },
            { de: 'Gerüchte zu streuen', en: 'Spreading rumors' },
          ],
          a: 0,
          x: {
            de: 'Eine gezielte ehrliche Geste baut Vertrauen auf — ein Mantel für größere Manöver.',
            en: 'A targeted honest gesture builds trust — a cloak for larger maneuvers.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 13: Bitte andere um Hilfe, indem du an ihr Mitleid appellierst.', en: 'Law 13: Ask for help by appealing to people\'s pity.' },
          a: false,
          x: {
            de: 'Appelliere an ihr Eigeninteresse — zeige, was SIE gewinnen, nicht was du brauchst.',
            en: 'Appeal to their self-interest — show what THEY gain, not what you need.',
          },
        },
        {
          t: 'mc',
          q: { de: '„Gib dich als Freund, arbeite als Spion" (Gesetz 14) bedeutet:', en: '"Pose as a friend, work as a spy" (Law 14) means:' },
          o: [
            { de: 'Informationen sammeln, ohne Verdacht zu erregen', en: 'Gathering information without raising suspicion' },
            { de: 'Alle Freunde bespitzeln lassen', en: 'Having all friends spied on' },
            { de: 'Niemandem mehr vertrauen', en: 'Never trusting anyone again' },
            { de: 'Feinde offen ausfragen', en: 'Openly interrogating enemies' },
          ],
          a: 0,
          x: {
            de: 'Freundliche Offenheit lockert Zungen — Wissen über andere ist Macht.',
            en: 'Friendly openness loosens tongues — knowledge about others is power.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 15 rät, einen besiegten Feind zu schonen, damit er dankbar wird.', en: 'Law 15 advises sparing a defeated enemy so he becomes grateful.' },
          a: false,
          x: {
            de: '„Zerschmettere deinen Feind vollständig" — ein halb besiegter Feind rächt sich später.',
            en: '"Crush your enemy totally" — a half-defeated enemy takes revenge later.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Zweck zuordnen.', en: 'Match law ↔ purpose.' },
          pairs: [
            { l: { de: 'Gesetz 11', en: 'Law 11' }, r: { de: 'Abhängigkeit erzeugen', en: 'Create dependence' } },
            { l: { de: 'Gesetz 12', en: 'Law 12' }, r: { de: 'Selektive Ehrlichkeit', en: 'Selective honesty' } },
            { l: { de: 'Gesetz 13', en: 'Law 13' }, r: { de: 'Eigeninteresse ansprechen', en: 'Appeal to self-interest' } },
            { l: { de: 'Gesetz 15', en: 'Law 15' }, r: { de: 'Feind vollständig zerschmettern', en: 'Crush the enemy totally' } },
          ],
        },
      ],
    },
    {
      id: 'p48-4',
      title: { de: 'Gesetze 16–20', en: 'Laws 16–20' },
      sub: { de: 'Abwesenheit, Unruhe, Isolation, Distanz', en: 'Absence, suspense, isolation, distance' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 16: Warum erzeugt Abwesenheit Respekt?', en: 'Law 16: Why does absence create respect?' },
          o: [
            { de: 'Knappheit steigert den Wert — Überverfügbarkeit zerstört ihn', en: 'Scarcity raises value — over-availability destroys it' },
            { de: 'Man wird schnell vergessen', en: 'You are quickly forgotten' },
            { de: 'Niemand vermisst dich', en: 'Nobody misses you' },
            { de: 'Abwesenheit ist höflich', en: 'Absence is polite' },
          ],
          a: 0,
          x: {
            de: 'Wer ständig sichtbar ist, wird gewöhnlich. Ziehe dich zeitweise zurück — und man wird über dich reden.',
            en: 'Constant visibility makes you ordinary. Withdraw at times — and people will talk about you.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 17: Berechenbarkeit macht dich mächtig.', en: 'Law 17: Predictability makes you powerful.' },
          a: false,
          x: {
            de: 'Halte andere in schwebender Unruhe: Unberechenbarkeit erschöpft und kontrolliert.',
            en: 'Keep others in suspense: unpredictability exhausts and controls them.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Warum warnt Gesetz 18 vor Festungen und Isolation?', en: 'Why does Law 18 warn against fortresses and isolation?' },
          o: [
            { de: 'Isolation schneidet dich von Information und Einfluss ab', en: 'Isolation cuts you off from information and influence' },
            { de: 'Festungen sind teuer', en: 'Fortresses are expensive' },
            { de: 'Isolation macht sympathisch', en: 'Isolation makes you likeable' },
            { de: 'Festungen sind altmodisch', en: 'Fortresses are old-fashioned' },
          ],
          a: 0,
          x: {
            de: 'Die Welt bewegt sich in der Menge — wer sich abschottet, verliert Überblick und Macht.',
            en: 'The world moves in the crowd — those who wall themselves off lose overview and power.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 19 warnt vor allem davor, …', en: 'Law 19 warns above all to …' },
          o: [
            { de: 'den falschen Menschen zu provozieren', en: 'provoke the wrong person' },
            { de: 'zu viel zu reden', en: 'talk too much' },
            { de: 'zu spät zu kommen', en: 'arrive too late' },
            { de: 'zu früh zu feiern', en: 'celebrate too early' },
          ],
          a: 0,
          x: {
            de: '„Wisse, mit wem du es zu tun hast" — manche Menschen rächen sich maßlos. Wähle Opfer und Gegner mit Bedacht.',
            en: '"Know who you\'re dealing with" — some people take boundless revenge. Choose victims and opponents carefully.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 20: Wer sich zu niemandem committet, bewahrt seine Unabhängigkeit — und beide Seiten buhlen um ihn.', en: 'Law 20: Committing to no one preserves independence — and both sides court you.' },
          a: true,
          x: {
            de: 'Commitment macht berechenbar und schwach; Distanz erzeugt Wettbewerb um deine Gunst.',
            en: 'Commitment makes you predictable and weak; distance creates competition for your favor.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Prinzip zuordnen.', en: 'Match law ↔ principle.' },
          pairs: [
            { l: { de: 'Gesetz 16', en: 'Law 16' }, r: { de: 'Knappheit durch Abwesenheit', en: 'Scarcity through absence' } },
            { l: { de: 'Gesetz 17', en: 'Law 17' }, r: { de: 'Unberechenbar bleiben', en: 'Stay unpredictable' } },
            { l: { de: 'Gesetz 18', en: 'Law 18' }, r: { de: 'Keine Festungen bauen', en: 'Build no fortresses' } },
            { l: { de: 'Gesetz 20', en: 'Law 20' }, r: { de: 'Unabhängig bleiben', en: 'Stay independent' } },
          ],
        },
      ],
    },
    {
      id: 'p48-5',
      title: { de: 'Gesetze 21–25', en: 'Laws 21–25' },
      sub: { de: 'Narr, Kapitulation, Konzentration, Neuschöpfung', en: 'Fool, surrender, concentration, re-creation' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 21: „Spiele den Narren, um einen Narren zu fangen" heißt …', en: 'Law 21: "Play a sucker to catch a sucker" means …' },
          o: [
            { de: 'harmloser wirken, als du bist', en: 'seeming more harmless than you are' },
            { de: 'dich wirklich dumm stellen', en: 'actually becoming stupid' },
            { de: 'Narren verspotten', en: 'mocking fools' },
            { de: 'immer ehrlich spielen', en: 'always playing honestly' },
          ],
          a: 0,
          x: {
            de: 'Wer dein Gegenüber sich klug fühlen lässt, senkt dessen Wachsamkeit.',
            en: 'Making others feel smart lowers their guard.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 22: Die Kapitulationstaktik bedeutet …', en: 'Law 22: The surrender tactic means …' },
          o: [
            { de: 'Schwäche in Macht verwandeln — nachgeben, um Zeit zu gewinnen', en: 'turning weakness into power — yielding to gain time' },
            { de: 'sich wirklich zu ergeben', en: 'actually surrendering' },
            { de: 'um Gnade zu betteln', en: 'begging for mercy' },
            { de: 'die Seiten zu wechseln', en: 'switching sides' },
          ],
          a: 0,
          x: {
            de: 'Scheinbare Kapitulation entwaffnet den Sieger und gibt dir Raum für den nächsten Zug.',
            en: 'Feigned surrender disarms the victor and buys you room for the next move.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 23: Verteile deine Kräfte gleichmäßig auf viele Ziele.', en: 'Law 23: Spread your forces evenly across many goals.' },
          a: false,
          x: {
            de: 'Konzentriere deine Kräfte! Fokus an einem Punkt schlägt Zerstreuung.',
            en: 'Concentrate your forces! Focus at one point beats dispersion.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 24: Der perfekte Höfling …', en: 'Law 24: The perfect courtier …' },
          o: [
            { de: 'beherrscht Indirektion, Schmeichelei und Anpassung', en: 'masters indirection, flattery, and adaptation' },
            { de: 'sagt immer die Wahrheit', en: 'always tells the truth' },
            { de: 'meidet den Hof', en: 'avoids the court' },
            { de: 'arbeitet am härtesten', en: 'works the hardest' },
          ],
          a: 0,
          x: {
            de: 'Macht liegt beim Souverän — der kluge Höfling navigiert die höfische Politik mit Geschick.',
            en: 'Power lies with the sovereign — the smart courtier navigates court politics with skill.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 25: „Erschaffe dich neu" — du darfst die Rolle wählen, die du spielst, statt die zu akzeptieren, die andere dir geben.', en: 'Law 25: "Re-create yourself" — you may choose the role you play instead of accepting the one others give you.' },
          a: true,
          x: {
            de: 'Dein Bild ist deine Schöpfung: Wer sich neu erfindet, kontrolliert, wie die Welt ihn sieht.',
            en: 'Your image is your creation: reinventing yourself controls how the world sees you.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Kernaussage.', en: 'Match law ↔ core idea.' },
          pairs: [
            { l: { de: 'Gesetz 21', en: 'Law 21' }, r: { de: 'Harmlos wirken', en: 'Seem harmless' } },
            { l: { de: 'Gesetz 22', en: 'Law 22' }, r: { de: 'Kapitulation als Waffe', en: 'Surrender as weapon' } },
            { l: { de: 'Gesetz 23', en: 'Law 23' }, r: { de: 'Kräfte konzentrieren', en: 'Concentrate forces' } },
            { l: { de: 'Gesetz 25', en: 'Law 25' }, r: { de: 'Sich neu erschaffen', en: 'Re-create yourself' } },
          ],
        },
      ],
    },
    {
      id: 'p48-6',
      title: { de: 'Gesetze 26–30', en: 'Laws 26–30' },
      sub: { de: 'Saubere Hände, Fantasien, Mühelosigkeit', en: 'Clean hands, fantasies, effortlessness' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 26: „Halte deine Hände sauber" bedeutet …', en: 'Law 26: "Keep your hands clean" means …' },
          o: [
            { de: 'Unangenehmes durch andere erledigen lassen und unschuldig wirken', en: 'Have others do the dirty work and appear innocent' },
            { de: 'nie etwas Unmoralisches tun', en: 'never doing anything immoral' },
            { de: 'sich oft die Hände waschen', en: 'washing your hands often' },
            { de: 'Verantwortung immer übernehmen', en: 'always taking responsibility' },
          ],
          a: 0,
          x: {
            de: 'Nutze Sündenböcke und Stellvertreter — dein Image bleibt makellos.',
            en: 'Use scapegoats and proxies — your image stays spotless.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 27 nutzt aus, dass Menschen …', en: 'Law 27 exploits that people …' },
          o: [
            { de: 'verzweifelt an etwas glauben wollen', en: 'desperately want to believe in something' },
            { de: 'nichts glauben', en: 'believe nothing' },
            { de: 'nur Fakten folgen', en: 'only follow facts' },
            { de: 'Anführer hassen', en: 'hate leaders' },
          ],
          a: 0,
          x: {
            de: 'Biete den Menschen eine Sache, einen Kult, eine neue Verheißung — und sie folgen dir.',
            en: 'Offer people a cause, a cult, a new promise — and they will follow you.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 28: Zögerliches Halbherzigkeitshandeln erzeugt Respekt.', en: 'Law 28: Hesitant half-hearted action earns respect.' },
          a: false,
          x: {
            de: 'Tritt mit Kühnheit ins Handeln — Kühnheit verwirrt Zweifler und reißt Menschen mit.',
            en: 'Enter action with boldness — boldness confuses doubters and sweeps people along.',
          },
        },
        {
          t: 'mc',
          q: { de: '„Plane bis zum Ende" (Gesetz 29) bedeutet …', en: '"Plan all the way to the end" (Law 29) means …' },
          o: [
            { de: 'Konsequenzen und Reaktionen vorhersehen, bevor du handelst', en: 'Foreseeing consequences and reactions before acting' },
            { de: 'nie improvisieren', en: 'never improvising' },
            { de: 'immer langsam handeln', en: 'always acting slowly' },
            { de: 'Pläne geheim halten ist genug', en: 'keeping plans secret is enough' },
          ],
          a: 0,
          x: {
            de: 'Wer das Ende plant, wird von Überraschungen nicht aus der Bahn geworfen.',
            en: 'Those who plan the ending are not derailed by surprises.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 30: Zeige offen, wie hart du gearbeitet hast — das beeindruckt mehr.', en: 'Law 30: Openly show how hard you worked — that impresses more.' },
          a: false,
          x: {
            de: 'Lass Leistungen mühelos erscheinen. Sichtbare Anstrengung macht dich gewöhnlich.',
            en: 'Make achievements look effortless. Visible effort makes you ordinary.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Prinzip.', en: 'Match law ↔ principle.' },
          pairs: [
            { l: { de: 'Gesetz 26', en: 'Law 26' }, r: { de: 'Hände sauber halten', en: 'Keep hands clean' } },
            { l: { de: 'Gesetz 27', en: 'Law 27' }, r: { de: 'Glaubensbedürfnis nutzen', en: 'Exploit the need to believe' } },
            { l: { de: 'Gesetz 28', en: 'Law 28' }, r: { de: 'Kühn handeln', en: 'Act boldly' } },
            { l: { de: 'Gesetz 29', en: 'Law 29' }, r: { de: 'Bis zum Ende planen', en: 'Plan to the end' } },
          ],
        },
      ],
    },
    {
      id: 'p48-7',
      title: { de: 'Gesetze 31–35', en: 'Laws 31–35' },
      sub: { de: 'Optionen, Fantasien, Daumenschrauben, Timing', en: 'Options, fantasies, thumbscrews, timing' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 31: Kontrolliere die Optionen, indem du …', en: 'Law 31: Control the options by …' },
          o: [
            { de: 'anderen nur Wahlen gibst, die dir beide nützen', en: 'giving others only choices that both benefit you' },
            { de: 'keine Wahl zulässt', en: 'allowing no choice at all' },
            { de: 'alles dem Zufall überlässt', en: 'leaving everything to chance' },
            { de: 'offen verhandelst', en: 'negotiating openly' },
          ],
          a: 0,
          x: {
            de: 'Lass andere wählen zwischen zwei Alternativen, die beide in dein Konzept passen — das Gefühl freier Wahl täuscht.',
            en: 'Let others choose between alternatives that both fit your plan — the feeling of free choice deceives.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 32: Spiele mit den Fantasien der Menschen, weil …', en: 'Law 32: Play on people\'s fantasies because …' },
          o: [
            { de: 'die Wahrheit oft unbequem ist und Menschen lieber träumen', en: 'truth is often uncomfortable and people prefer dreaming' },
            { de: 'Fantasie real ist', en: 'fantasy is real' },
            { de: 'Fakten unwichtig sind', en: 'facts are unimportant' },
            { de: 'Träume teuer sind', en: 'dreams are expensive' },
          ],
          a: 0,
          x: {
            de: 'Wer die schöne Verheißung liefert, gewinnt — die harte Realität verkauft sich schlecht.',
            en: 'Whoever delivers the beautiful promise wins — hard reality sells poorly.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 33: Die „Daumenschraube" eines Menschen ist seine größte Stärke.', en: 'Law 33: A person\'s "thumbscrew" is their greatest strength.' },
          a: false,
          x: {
            de: 'Es ist die Schwäche: die Unsicherheit, das unstillbare Bedürfnis, die Angst — finde und nutze sie.',
            en: 'It\'s the weakness: the insecurity, the insatiable need, the fear — find it and use it.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 34: „Sei königlich auf deine eigene Art" verlangt …', en: 'Law 34: "Be royal in your own fashion" requires …' },
          o: [
            { de: 'sich selbst als souverän zu behandeln, damit andere es auch tun', en: 'treating yourself as sovereign so others do too' },
            { de: 'Geld wie ein König auszugeben', en: 'spending money like a king' },
            { de: 'andere wie Diener zu behandeln', en: 'treating others like servants' },
            { de: 'nach Titeln zu streben', en: 'chasing titles' },
          ],
          a: 0,
          x: {
            de: 'Deine Selbstachtung strahlt aus: Würdest du dich selbst klein behandeln, täte es die Welt auch.',
            en: 'Your self-respect radiates: treat yourself small, and the world will too.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 35: Timing lernen heißt, zu erkennen, wann die Zeit reif ist — und warten zu können.', en: 'Law 35: Mastering timing means recognizing when time is ripe — and being able to wait.' },
          a: true,
          x: {
            de: 'Zu früh ist so fatal wie zu spät. Wer die Zeichen der Zeit liest, handelt im richtigen Moment.',
            en: 'Too early is as fatal as too late. Reading the signs of the times lets you act at the right moment.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Mechanik.', en: 'Match law ↔ mechanism.' },
          pairs: [
            { l: { de: 'Gesetz 31', en: 'Law 31' }, r: { de: 'Optionen kontrollieren', en: 'Control the options' } },
            { l: { de: 'Gesetz 32', en: 'Law 32' }, r: { de: 'Fantasien bedienen', en: 'Serve fantasies' } },
            { l: { de: 'Gesetz 33', en: 'Law 33' }, r: { de: 'Schwachpunkt finden', en: 'Find the weak spot' } },
            { l: { de: 'Gesetz 35', en: 'Law 35' }, r: { de: 'Timing meistern', en: 'Master timing' } },
          ],
        },
      ],
    },
    {
      id: 'p48-8',
      title: { de: 'Gesetze 36–40', en: 'Laws 36–40' },
      sub: { de: 'Verachtung, Spektakel, Wasser aufwühlen', en: 'Contempt, spectacle, stirring waters' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 36: Der beste Umgang mit Dingen, die du nicht haben kannst, ist …', en: 'Law 36: The best way to treat things you cannot have is …' },
          o: [
            { de: 'sie zu verachten — Aufmerksamkeit gibt Problemen Macht', en: 'despising them — attention gives problems power' },
            { de: 'sie zu bekämpfen', en: 'fighting them' },
            { de: 'darüber zu klagen', en: 'complaining about them' },
            { de: 'sie teuer zu kaufen', en: 'buying them dearly' },
          ],
          a: 0,
          x: {
            de: 'Was du ignorierst, kann dich nicht treffen. Kleinliche Aufmerksamkeit vergrößert kleine Probleme.',
            en: 'What you ignore cannot touch you. Petty attention enlarges small problems.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 37: Fesselnde Spektakel und Symbole wirken stärker als Worte.', en: 'Law 37: Compelling spectacles and symbols work stronger than words.' },
          a: true,
          x: {
            de: 'Bilder und Inszenierungen erreichen Menschen tiefer als Argumente.',
            en: 'Images and staging reach people deeper than arguments.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 38: „Denke, wie du willst — aber …"', en: 'Law 38: "Think as you like — but …"' },
          o: [
            { de: 'verhalte dich wie die anderen', en: 'behave like the others' },
            { de: 'kämpfe für deine Meinung', en: 'fight for your opinion' },
            { de: 'sage sie laut', en: 'say it loudly' },
            { de: 'schreibe ein Manifest', en: 'write a manifesto' },
          ],
          a: 0,
          x: {
            de: 'Offene Abweichung erzeugt Feinde. Bewahre deine Originalität für dich — passe dich äußerlich an.',
            en: 'Open deviation creates enemies. Keep your originality to yourself — blend in outwardly.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 39: „Rühre das Wasser auf, um Fische zu fangen" heißt …', en: 'Law 39: "Stir up waters to catch fish" means …' },
          o: [
            { de: 'Gegner emotional machen, damit sie Fehler begehen', en: 'making opponents emotional so they make mistakes' },
            { de: 'selbst wütend werden', en: 'becoming angry yourself' },
            { de: 'konfrontativ auftreten', en: 'acting confrontational' },
            { de: 'Fische verschenken', en: 'giving away fish' },
          ],
          a: 0,
          x: {
            de: 'Wer die Ruhe verliert, verliert die Kontrolle. Bleib ruhig — und treibe andere aus dem Konzept.',
            en: 'Whoever loses calm loses control. Stay calm — and drive others off balance.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 40: Das Gratis-Mittagessen ist immer eine gute Idee.', en: 'Law 40: The free lunch is always a good idea.' },
          a: false,
          x: {
            de: 'Gratis gibt es nichts: Geschenke erzeugen Verpflichtungen. Zahle deinen eigenen Preis — das ist Freiheit.',
            en: 'Nothing is free: gifts create obligations. Pay your own price — that is freedom.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Essenz.', en: 'Match law ↔ essence.' },
          pairs: [
            { l: { de: 'Gesetz 36', en: 'Law 36' }, r: { de: 'Verachten, was du nicht hast', en: 'Despise what you can\'t have' } },
            { l: { de: 'Gesetz 37', en: 'Law 37' }, r: { de: 'Spektakel erschaffen', en: 'Create spectacles' } },
            { l: { de: 'Gesetz 39', en: 'Law 39' }, r: { de: 'Gegner aus der Ruhe bringen', en: 'Unbalance opponents' } },
            { l: { de: 'Gesetz 40', en: 'Law 40' }, r: { de: 'Nichts ist gratis', en: 'Nothing is free' } },
          ],
        },
      ],
    },
    {
      id: 'p48-9',
      title: { de: 'Gesetze 41–45', en: 'Laws 41–45' },
      sub: { de: 'Fußstapfen, Herden, Spiegel, Wandel', en: 'Footsteps, herds, mirrors, change' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 41 warnt davor, …', en: 'Law 41 warns against …' },
          o: [
            { de: 'in die Fußstapfen eines großen Vorgängers zu treten', en: 'stepping into a great predecessor\'s footsteps' },
            { de: 'eigene Wege zu gehen', en: 'going your own way' },
            { de: 'Vorbilder zu haben', en: 'having role models' },
            { de: 'Früh aufzustehen', en: 'getting up early' },
          ],
          a: 0,
          x: {
            de: 'Der Nachfolger eines Giganten wird immer verglichen — schaffe deinen eigenen Raum.',
            en: 'A giant\'s successor is always compared — create your own space.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 42: „Schlage den Hirten, und die Schafe …"', en: 'Law 42: "Strike the shepherd, and the sheep …"' },
          o: [
            { de: 'zerstreuen sich', en: 'scatter' },
            { de: 'greifen an', en: 'attack' },
            { de: 'wählen neu', en: 'elect anew' },
            { de: 'weinen', en: 'weep' },
          ],
          a: 0,
          x: {
            de: 'Unruhestifter ziehen ihre Macht aus der Gruppe — isoliere den Anführer, und die Herde löst sich auf.',
            en: 'Troublemakers draw power from the group — isolate the leader, and the herd dissolves.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 43: Gewinne Menschen durch Zwang für dich.', en: 'Law 43: Win people over through coercion.' },
          a: false,
          x: {
            de: 'Arbeite an Herzen und Köpfen: Zwang erzeugt Widerstand, Verführung erzeugt Anhänger.',
            en: 'Work on hearts and minds: coercion breeds resistance, seduction breeds followers.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 44: Der Spiegel-Effekt bedeutet …', en: 'Law 44: The mirror effect means …' },
          o: [
            { de: 'anderen ihr eigenes Verhalten zurückspiegeln, um sie zu entwaffnen oder zu erzürnen', en: 'mirroring others\' behavior back at them to disarm or enrage' },
            { de: 'sich oft im Spiegel zu betrachten', en: 'looking in the mirror often' },
            { de: 'andere kopieren aus Eitelkeit', en: 'copying others out of vanity' },
            { de: 'völlige Transparenz', en: 'total transparency' },
          ],
          a: 0,
          x: {
            de: 'Der Spiegel entwaffnet: Wer sein eigenes Spiel erlebt, verliert die Kontrolle.',
            en: 'The mirror disarms: experiencing their own game makes people lose control.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 45: Wenn du Wandel predigst, solltest du abrupt alles auf einmal ändern.', en: 'Law 45: When preaching change, you should change everything abruptly at once.' },
          a: false,
          x: {
            de: 'Zu viel Neues erzeugt Rebellion. Predige Wandel — aber führe ihn in kleinen Dosen ein.',
            en: 'Too much novelty breeds rebellion. Preach change — but introduce it in small doses.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Regel.', en: 'Match law ↔ rule.' },
          pairs: [
            { l: { de: 'Gesetz 41', en: 'Law 41' }, r: { de: 'Eigene Wege gehen', en: 'Go your own way' } },
            { l: { de: 'Gesetz 42', en: 'Law 42' }, r: { de: 'Den Hirten schlagen', en: 'Strike the shepherd' } },
            { l: { de: 'Gesetz 43', en: 'Law 43' }, r: { de: 'Herzen und Köpfe gewinnen', en: 'Win hearts and minds' } },
            { l: { de: 'Gesetz 45', en: 'Law 45' }, r: { de: 'Wandel dosieren', en: 'Dose the change' } },
          ],
        },
      ],
    },
    {
      id: 'p48-10',
      title: { de: 'Gesetze 46–48', en: 'Laws 46–48' },
      sub: { de: 'Perfektion, Ziel, Formlosigkeit', en: 'Perfection, goals, formlessness' },
      questions: [
        {
          t: 'mc',
          q: { de: 'Gesetz 46: Warum sollte man nie zu perfekt erscheinen?', en: 'Law 46: Why never appear too perfect?' },
          o: [
            { de: 'Perfektion erzeugt Neid und Feinde — zeige kleine Schwächen', en: 'Perfection breeds envy and enemies — show small flaws' },
            { de: 'Perfektion ist unmöglich', en: 'Perfection is impossible' },
            { de: 'Perfektion kostet Geld', en: 'Perfection costs money' },
            { de: 'Fehler machen sympathisch, also mache absichtlich große', en: 'Flaws are likeable, so make big ones on purpose' },
          ],
          a: 0,
          x: {
            de: 'Makel wirken menschlich und entwaffnen Neider. Nur Götter dürfen perfekt sein.',
            en: 'Flaws seem human and disarm the envious. Only gods may be perfect.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Gesetz 47: Nach einem Sieg solltest du sofort weiter vorrücken, solange du Schwung hast.', en: 'Law 47: After a victory, press on immediately while you have momentum.' },
          a: false,
          x: {
            de: 'Gehe nicht über das Ziel hinaus: Im Sieg Halt zu machen ist schwerer als zu siegen. Arroganz ruiniert Gewonnenes.',
            en: 'Don\'t go past the goal: stopping in victory is harder than winning. Arrogance ruins what was gained.',
          },
        },
        {
          t: 'mc',
          q: { de: 'Gesetz 48: „Nimm Formlosigkeit an" bedeutet …', en: 'Law 48: "Assume formlessness" means …' },
          o: [
            { de: 'anpassungsfähig bleiben wie Wasser — keine starre Form, die angreifbar ist', en: 'staying adaptable like water — no rigid form that can be attacked' },
            { de: 'keinen Stil haben', en: 'having no style' },
            { de: 'chaotisch leben', en: 'living chaotically' },
            { de: 'keine Ziele setzen', en: 'setting no goals' },
          ],
          a: 0,
          x: {
            de: 'Alles Feste wird berechenbar und verwundbar. Formlosigkeit ist die höchste Macht-Strategie.',
            en: 'Anything fixed becomes predictable and vulnerable. Formlessness is the highest power strategy.',
          },
        },
        {
          t: 'blank',
          before: { de: 'Wer sich eine feste Form gibt,', en: 'Whoever adopts a fixed form,' },
          after: { de: 'wird angreifbar.', en: 'becomes vulnerable.' },
          o: [
            { de: 'berechenbar und', en: 'predictable and' },
            { de: 'stark und', en: 'strong and' },
            { de: 'schnell und', en: 'fast and' },
          ],
          a: 0,
          x: {
            de: 'Das letzte Gesetz fasst alle zusammen: Bleibe flüssig, passe dich an — wie Wasser.',
            en: 'The final law sums up all others: stay fluid, adapt — like water.',
          },
        },
        {
          t: 'tf',
          q: { de: 'Die 48 Gesetze sind laut Greene Werkzeuge — man muss sie kennen, auch wenn man sie nicht selbst anwendet, um sich zu schützen.', en: 'According to Greene, the 48 laws are tools — you must know them even if you don\'t apply them yourself, to protect yourself.' },
          a: true,
          x: {
            de: 'Wissen um die Gesetze ist Verteidigung: Wer das Spiel nicht kennt, wird zum Spielfigur anderer.',
            en: 'Knowing the laws is defense: those who don\'t know the game become other people\'s pawns.',
          },
        },
        {
          t: 'match',
          q: { de: 'Gesetz ↔ Essenz.', en: 'Match law ↔ essence.' },
          pairs: [
            { l: { de: 'Gesetz 46', en: 'Law 46' }, r: { de: 'Nie zu perfekt wirken', en: 'Never seem too perfect' } },
            { l: { de: 'Gesetz 47', en: 'Law 47' }, r: { de: 'Am Ziel Halt machen', en: 'Stop at the goal' } },
            { l: { de: 'Gesetz 48', en: 'Law 48' }, r: { de: 'Formlosigkeit annehmen', en: 'Assume formlessness' } },
            { l: { de: 'Meta', en: 'Meta' }, r: { de: 'Gesetze als Werkzeuge', en: 'Laws as tools' } },
          ],
        },
      ],
    },
  ],
}
