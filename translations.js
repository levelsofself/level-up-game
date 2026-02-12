// ========== LANGUAGE SYSTEM ==========
var currentLang = localStorage.getItem('levelup_lang') || 'en';

// ── Dutch (Nederlands) UI Translation Dictionary ──
var TRANSLATIONS = {
  nl: {
    // ─── Hook / Intro Screens ───
    'See the patterns': 'Zie de patronen',
    'that quietly run<br>your life.': 'die stilletjes je<br>leven bepalen.',
    'Discover why you keep repeating<br>the same mistakes.': 'Ontdek waarom je steeds dezelfde<br>fouten blijft maken.',
    'Prove it': 'Bewijs het',
    'As Seen On': 'o.a. gezien op',
    'Have you ever<br>felt like...': 'Heb je ooit<br>het gevoel gehad dat\u2026',
    'Select all that feel true': 'Selecteer alles wat voor jou als waarheid aanvoelt',
    "You're successful on paper, but something essential is missing?": 'Op papier ben je succesvol, maar er ontbreekt iets essentieels?',
    "You've tried everything, but the same patterns keep repeating?": 'Je hebt alles geprobeerd, maar dezelfde patronen herhalen zich steeds?',
    "You're great at helping others, but can't seem to help yourself?": 'Je bent geweldig in het helpen van anderen, maar kunt jezelf maar niet helpen?',
    'There has to be more to life than this?': 'Er moet toch meer in het leven zijn dan dit?',
    "Everyone thinks you're doing great... but you're dying inside?": 'Iedereen denkt dat het geweldig met je gaat\u2026 maar vanbinnen ga je kapot?',
    'Continue': 'Doorgaan',
    'Please select at least one': 'Selecteer er minstens een',
    'Do you ever<br>ask yourself...': 'Vraag je jezelf<br>wel eens af\u2026',
    'Select all that resonate with you': 'Selecteer alles wat jou aanspreekt',
    '"Why am I not enough, no matter how much I achieve?"': '"Waarom ben ik niet goed genoeg, hoeveel ik ook bereik?"',
    '"Why do I feel so alone, even when surrounded by people?"': '"Waarom voel ik me zo alleen, zelfs als ik omringd ben door mensen?"',
    '"What\'s the point of all this success if I\'m still unhappy?"': '"Wat heeft al dit succes voor zin als ik nog steeds ongelukkig ben?"',
    '"When will I finally feel like I\'ve made it?"': '"Wanneer zal ik eindelijk het gevoel hebben dat ik het gemaakt heb?"',
    '"Is this really all there is?"': '"Is dit werkelijk alles wat er is?"',
    'Back': 'Terug',
    "This isn't a flaw.": 'Dit is geen tekortkoming.',
    "It's a signal you're solving the problem at the wrong level.": 'Het is een teken dat je het probleem op het verkeerde niveau aanpakt.',
    'Tap each level to learn more:': 'Tik op elk niveau om meer te weten te komen:',
    'The game shows you which level your pattern lives on, so you can finally change it.': 'Het spel laat je zien op welk niveau je patroon zich bevindt, zodat je het eindelijk kunt veranderen.',
    'See My Pattern': 'Zie mijn patroon',

    // ─── 7 Level Names & Descriptions ───
    'Individual': 'Individueel',
    'Self for yourself': 'Zelf tot jezelf',
    'Family': 'Familie',
    'Your created or immediate family': 'Je zelfgekozen of directe familie',
    'Groups': 'Groepen',
    'Extended family, friends, coworkers': 'Uitgebreide familie, vrienden, collega\'s',
    'Community': 'Gemeenschap',
    'Activities and events': 'Activiteiten en evenementen',
    'Society': 'Samenleving',
    'Nation & systems': 'Land & systemen',
    'World': 'Wereld',
    'Global stage': 'Wereldpodium',
    'Global stage, politics, humanity': 'Wereldpodium, politiek, mensheid',
    'Generations': 'Generaties',
    'Those before you and after': 'Degenen die voor je kwamen en na je komen',

    // ─── Level Detail Descriptions ───
    'Self for yourself: your feelings, your life, your beliefs, your needs, your wants. Before you can show up for anyone else, you have to show up for yourself. This means having non-negotiables, things you do for yourself every day, no matter what. It\'s not selfish. It\'s required. If this level isn\'t solid, everything above it is unstable.': 'Zelf tot jezelf \u2013 je gevoelens, je leven, je overtuigingen, je behoeften, je verlangens. Voordat je er voor iemand anders kunt zijn, moet je er voor jezelf zijn. Dit betekent dat je niet-onderhandelbare dingen hebt \u2014 dingen die je elke dag voor jezelf doet, wat er ook gebeurt. Het is niet ego\u00efstisch. Het is noodzakelijk. Als dit niveau niet stabiel is, is alles daarboven instabiel.',
    'Self for family: either the family you were born into OR the family you have created (spouse, kids). If you\'ve created your own family, they become Level 2, and your family of origin moves to Level 3. These are the people who see you at your best and worst. You can\'t skip to community impact if things are incomplete here.': 'Zelf tot familie \u2013 ofwel het gezin waarin je geboren bent, OF het gezin dat je zelf hebt gecre\u00eberd (partner, kinderen). Als je je eigen gezin hebt gecre\u00eberd, zijn zij Niveau 2 en wordt je oorspronkelijke gezin Niveau 3. Dit zijn de mensen die je op je best en op je slechtst zien. Je kunt niet doorgaan naar impact in de gemeenschap als dit niveau incompleet voelt.',
    'Self for group: extended family members, friends, relatives, coworkers, and groups you belong to. If you\'ve created your own family, your parents and siblings now live here. The question: Are you being yourself, or performing a version of yourself to fit in, or hiding entirely? The first 3 levels represent 90% of everyday life.': 'Zelf tot groepen \u2013 uitgebreide familieleden, vrienden, kennissen, collega\u2019s en groepen waar je bij hoort. Als je je eigen familie hebt gecre\u00eberd, is dit het niveau waar je ouders en broers en zussen zijn. De vraag is: ben je jezelf, of speel je een versie van jezelf om erbij te horen \u2014 of verberg je jezelf volledig? De eerste drie niveaus vertegenwoordigen 90% van het dagelijkse leven.',
    'Self for community: mostly seen as activities, events, and classes of people you identify with: musicians, business people, athletes, artists, your industry. Where you belong beyond personal relationships. Do you have a role, and do you respect the roles of others?': 'Zelf tot de gemeenschap \u2013 meestal zichtbaar in de vorm van activiteiten, evenementen en groepen mensen waarmee je je identificeert: muzikanten, zakenmensen, sporters, kunstenaars, jouw branche. Waar hoor je thuis, los van je persoonlijke relaties? Heb je een rol, en respecteer je de rollen van anderen?',
    'Self for society: the people of your nation and its systems: government, economy, culture, laws. This level is about seeing reality clearly. Not what you wish was true. Not what you\'re fighting against. What actually is. You can\'t change what you won\'t first accept.': 'Zelf tot de samenleving \u2013 de mensen van je land en hun systemen: overheid, economie, cultuur, wetten. Op dit niveau gaat het om de realiteit helder zien. Niet wat je zou willen dat waar was. Niet waar je tegen vecht. Maar wat werkelijk is. Je kunt niet veranderen wat je niet eerst accepteert.',
    'Self for world: the global stage: international politics, global events, other nations, other cultures, humanity as a whole. How connected do you feel to what happens outside your borders? This isn\'t about being an activist. It\'s about recognizing you\'re part of something larger than your own life.': 'Zelf tot de wereld \u2013 het wereldpodium: internationale politiek, wereldwijde gebeurtenissen, andere landen, andere culturen, de mensheid als geheel. Hoe verbonden voel je je met wat er buiten je eigen landgrenzen gebeurt? Dit gaat niet over activisme. Het gaat erom te erkennen dat je deel uitmaakt van iets dat groter is dan je eigen leven.',
    'Self for generations: the people who came before you (ancestors) and those who will come after. This is legacy. What cycles did you inherit? What cycles will you break? What will you build that outlasts you? Legacy isn\'t always a building. Sometimes it\'s a pattern you refused to repeat.': 'Zelf tot generaties \u2013 de mensen die v\u00f3\u00f3r jou kwamen (voorouders) en degenen die na jou komen. Dit is je nalatenschap. Welke patronen heb je ge\u00ebrfd? Welke patronen zul je doorbreken? Wat zul je bouwen dat jou overleeft? Een nalatenschap is niet altijd iets bouwen. Soms is het een patroon dat je weigerde te herhalen.',

    // ─── Home Screen ───
    'See Your Patterns': 'Zie Je Patronen',
    'The game that reveals<br>what\'s really running your life.': 'Het spel dat onthult<br>wat je leven werkelijk bepaalt.',
    'TRENDING GLOBALLY': 'Wereldwijd Trending',
    'Worldwide Challenge': 'Wereldwijde Uitdaging',
    'Same 3 scenarios for everyone on Earth. One chance daily.': 'Dezelfde 3 scenario\'s voor iedereen op aarde. Een kans per dag.',
    'playing now': 'spelen nu',
    'Tap to join the global movement': 'Tik om mee te doen aan de wereldwijde beweging',
    'Resets in': 'Reset over',
    'Mirror Game': 'Spiegel Spel',
    'See yourself honestly': 'Zie jezelf eerlijk',
    'Agreement Game': 'Akkoord Spel',
    'Acceptance vs Judgment': 'Acceptatie vs Oordeel',
    'Level': 'Niveau',
    'coins': 'munten',
    'Played': 'Gespeeld',
    'Streak': 'Reeks',
    'Acceptance': 'Acceptatie',
    'Insights': 'Inzichten',
    'Your Pattern': 'Jouw Patroon',
    "Today's Practice": 'Oefening van Vandaag',
    'Tap for full profile': 'Tik voor volledig profiel',
    'Your Journey': 'Jouw Reis',
    'Breakthrough Work': 'Doorbraakwerk',
    'Join Our Team': 'Word Lid van Ons Team',
    'Learn the Full Framework': 'Leer het Volledige Raamwerk',
    'Get Coaching': 'Krijg Coaching',
    '1-on-1 Integration': '1-op-1 Integratie',
    'Built by': 'Gemaakt door',
    'on the framework he uses with founders, leaders, and clients worldwide.': 'op het raamwerk dat hij gebruikt met oprichters, leiders en clienten wereldwijd.',

    // ─── Game Screen ───
    'Mirror': 'Spiegel',
    'Agreement': 'Akkoord',
    'Loading...': 'Laden...',
    "That's Me": 'Dat Ben Ik',
    'Not Me': 'Niet Ik',

    // ─── Results Screen ───
    'Game Complete': 'Spel Voltooid',
    'Mirror Complete': 'Spiegel Voltooid',
    'Agreement Complete': 'Akkoord Voltooid',
    'Mixed Complete': 'Gemengd Voltooid',
    'Challenge Complete': 'Uitdaging Voltooid',
    'This session': 'Deze sessie',
    'Keep going!': 'Ga zo door!',
    'Reflections': 'Reflecties',
    'correct!': 'juist!',
    'Great job!': 'Goed gedaan!',
    'Questions': 'Vragen',
    'Back to Home': 'Terug naar Start',
    'Keep Playing': 'Blijf Spelen',
    'Endless Mode': 'Eindeloze Modus',
    'Continue Endless': 'Ga Door Eindeloos',
    'WhatsApp': 'WhatsApp',
    'Twitter': 'Twitter',
    'Copy': 'Kopieren',
    'More': 'Meer',
    'Ready to break these patterns for good?': 'Klaar om deze patronen voorgoed te doorbreken?',

    // ─── Result Messages ───
    'High self-recognition. You see yourself clearly. That\'s rare and powerful.': 'Hoge zelfherkenning. Je ziet jezelf helder. Dat is zeldzaam en krachtig.',
    'Strong awareness. You\'re willing to look at what others avoid.': 'Sterk bewustzijn. Je bent bereid te kijken naar wat anderen vermijden.',
    'Selective recognition. Some patterns are easier to see than others.': 'Selectieve herkenning. Sommige patronen zijn makkelijker te zien dan andere.',
    'Low recognition. Either you\'re different, or there\'s a blind spot worth exploring.': 'Lage herkenning. Of je bent anders, of er is een blinde vlek die het verkennen waard is.',
    'Exceptional. You chose acceptance almost every time.': 'Uitzonderlijk. Je koos bijna elke keer voor acceptatie.',
    'Strong acceptance. You\'re rewiring your default response.': 'Sterke acceptatie. Je herprogrammeert je standaardreactie.',
    'Growing awareness. Notice when judgment feels safer.': 'Groeiend bewustzijn. Merk op wanneer oordelen veiliger voelt.',
    'Judgment is your current default. That\'s not wrong. It\'s information.': 'Oordelen is je huidige standaard. Dat is niet fout. Het is informatie.',

    // ─── Modals & Popups ───
    'Help & FAQ': 'Hulp & FAQ',
    'Achievement Unlocked!': 'Prestatie Ontgrendeld!',
    'Pattern Detected': 'Patroon Gedetecteerd',
    'This keeps showing up.': 'Dit blijft terugkomen.',
    'pattern appeared': 'patroon verscheen',
    'times recently': 'keer recentelijk',
    "You're seeing it clearly now.": 'Je ziet het nu duidelijk.',
    "That's the first step. But seeing a pattern and breaking it are two different things.": 'Dat is de eerste stap. Maar een patroon zien en het doorbreken zijn twee verschillende dingen.',
    "Most people can't break lifelong patterns alone. That's not weakness. It's how patterns work.": 'De meeste mensen kunnen levenslange patronen niet alleen doorbreken. Dat is geen zwakte. Zo werken patronen.',
    'Talk to Arthur': 'Praat met Arthur',
    'Keep Playing': 'Blijf Spelen',
    'Remind me later': 'Herinner me later',

    // ─── Stats & XP ───
    'Games Played': 'Gespeelde Spellen',
    'Daily Streak': 'Dagelijkse Reeks',
    'Acceptance Rate': 'Acceptatiegraad',
    'insights collected': 'inzichten verzameld',
    'scenarios explored': 'scenario\'s verkend',
    'Start your journey': 'Begin je reis',
    'Completed!': 'Voltooid!',
    'breakthroughs': 'doorbraken',
    'ON TRACK': 'OP SCHEMA',
    'CATCHING UP': 'INHALEN',
    'BEHIND': 'ACHTER',
    'Start': 'Beginnen',
    'Done!': 'Klaar!',

    // ─── Archetype Names ───
    'The Honest Avoider': 'De eerlijke Vermijder',
    'The Aware Procrastinator': 'De Bewuste Uitsteller',
    'The Peaceful Avoider': 'De Vredelievende Vermijder',
    'The Growth Seeker': 'De Groeizoeker',
    'The Aware One': 'De Bewuste',

    // ─── Pattern Card Reveal ───
    'Your Pattern': 'Jouw Patroon',
    '"You see yourself with unusual clarity — but seeing isn\'t doing."': '"Je ziet jezelf met een ongewone helderheid, maar zien is niet hetzelfde als doen."',
    "What's yours?": 'Wat is die van jou?',
    'Play the full game to go deeper.': 'Speel het volledige spel om dieper te gaan.',
    'Play the Game': 'Speel het Spel',
    'Share My Pattern': 'Deel mijn patroon',
    'Share Your Pattern': 'Deel je patroon',
    'Copy Link': 'Link kopi\u00ebren',
    'Start Playing': 'Begin met spelen',

    // ─── Welcome Messages ───
    'Keep it going!': 'Ga zo door!',
    'Welcome back!': 'Welkom terug!',
    'Good to see you!': 'Leuk je te zien!',

    // ─── Game Mode Labels (in-game) ───
    'Level 1: Individual': 'Niveau 1: Individueel',
    'Level 2: Family': 'Niveau 2: Familie',
    'Level 3: Groups': 'Niveau 3: Groepen',
    'Level 4: Community': 'Niveau 4: Gemeenschap',
    'Level 5: Society': 'Niveau 5: Samenleving',
    'Level 6: World': 'Niveau 6: Wereld',
    'Level 7: Generations': 'Niveau 7: Generaties',

    // ─── Misc UI ───
    'NEW': 'NIEUW',
    'Start Here': 'Begin Hier',
    'Play': 'Spelen',
    'Save': 'Opslaan',
    'Share': 'Delen',
    'Close': 'Sluiten',
    'Day': 'Dag',
    'XP': 'XP',
    'games': 'spellen',
    'new insights': 'nieuwe inzichten',
    'correct': 'juist',
    'Accepted': 'Geaccepteerd',
    'Judgment': 'Oordeel',
    'Correct': 'Juist',
    'Missed': 'Gemist',
    'Your Responses': 'Jouw Antwoorden',
    'Perfect!': 'Perfect!',
    'Loading scenarios... Please wait': 'Scenario\'s laden... Even geduld',
    "You're now Level": 'Je bent nu Niveau',
    'Completed Today': 'Vandaag Voltooid'
  },

  // ═══════════════════════════════════════════════
  // SPANISH (Español) — Translated by Roger Walter
  // ═══════════════════════════════════════════════
  es: {
    // ─── Hook / Intro Screens ───
    'See the patterns': 'Descubre los patrones',
    'that quietly run<br>your life.': 'que silenciosamente<br>dirigen tu vida.',
    'Discover why you keep repeating<br>the same mistakes.': 'Descubre por qu\u00e9 sigues repitiendo<br>los mismos errores.',
    'Prove it': 'Demuéstralo',
    'As Seen On': 'Visto en',
    'Have you ever<br>felt like...': '\u00bfAlguna vez has<br>sentido que\u2026',
    'Select all that feel true': 'Selecciona todo lo que sientas verdadero',
    "You're successful on paper, but something essential is missing?": '\u00bfEres exitoso/a en el papel, pero algo esencial falta?',
    "You've tried everything, but the same patterns keep repeating?": '\u00bfHas intentado todo, pero los mismos patrones se siguen repitiendo?',
    "You're great at helping others, but can't seem to help yourself?": '\u00bfEres genial ayudando a otros, pero no puedes ayudarte a ti mismo/a?',
    'There has to be more to life than this?': '\u00bfTiene que haber algo m\u00e1s en la vida que esto?',
    "Everyone thinks you're doing great... but you're dying inside?": '\u00bfTodos piensan que te va genial\u2026 pero por dentro te est\u00e1s muriendo?',
    'Continue': 'Continuar',
    'Please select at least one': 'Selecciona al menos una opci\u00f3n',
    'Do you ever<br>ask yourself...': '\u00bfAlguna vez te<br>preguntas\u2026',
    'Select all that resonate with you': 'Selecciona todo lo que resuene contigo',
    '"Why am I not enough, no matter how much I achieve?"': '"\u00bfPor qu\u00e9 no soy suficiente, sin importar cu\u00e1nto logre?"',
    '"Why do I feel so alone, even when surrounded by people?"': '"\u00bfPor qu\u00e9 me siento tan solo/a, incluso rodeado/a de gente?"',
    '"What\'s the point of all this success if I\'m still unhappy?"': '"\u00bfDe qu\u00e9 sirve todo este \u00e9xito si sigo siendo infeliz?"',
    '"When will I finally feel like I\'ve made it?"': '"\u00bfCu\u00e1ndo sentir\u00e9 por fin que lo logr\u00e9?"',
    '"Is this really all there is?"': '"\u00bfEsto es realmente todo lo que hay?"',
    'Back': 'Atr\u00e1s',
    "This isn't a flaw.": 'Esto no es un defecto.',
    "It's a signal you're solving the problem at the wrong level.": 'Es una se\u00f1al de que est\u00e1s resolviendo el problema en el nivel equivocado.',
    'Tap each level to learn more:': 'Toca cada nivel para saber m\u00e1s:',
    'The game shows you which level your pattern lives on, so you can finally change it.': 'El juego te muestra en qu\u00e9 nivel vive tu patr\u00f3n, para que finalmente puedas cambiarlo.',
    'See My Pattern': 'Ver mi patr\u00f3n',

    // ─── 7 Level Names & Descriptions (from Roger) ───
    'Individual': 'Individuo',
    'Self for yourself': 'El yo para ti mismo',
    'Family': 'Familia',
    'Your created or immediate family': 'Creada o de origen',
    'Groups': 'Grupos',
    'Extended family, friends, coworkers': 'Familiares, amigos, compa\u00f1eros de trabajo',
    'Community': 'Comunidad',
    'Activities and events': 'Actividades y eventos',
    'Society': 'Sociedad',
    'Nation & systems': 'Naci\u00f3n y sistemas',
    'World': 'Mundo',
    'Global stage': 'Escenario global',
    'Global stage, politics, humanity': 'Escenario global, pol\u00edtica, humanidad',
    'Generations': 'Generaciones',
    'Those before you and after': 'Antes y despu\u00e9s de ti',

    // ─── Level Detail Descriptions (from Roger FAQ) ───
    'Self for yourself: your feelings, your life, your beliefs, your needs, your wants. Before you can show up for anyone else, you have to show up for yourself. This means having non-negotiables, things you do for yourself every day, no matter what. It\'s not selfish. It\'s required. If this level isn\'t solid, everything above it is unstable.': 'El yo para uno mismo: tus sentimientos, tu vida, tus creencias, tus necesidades, tus deseos. Antes de poder estar presente para los dem\u00e1s, tienes que estar presente para ti mismo. Cosas innegociables: cosas que haces por ti mismo todos los d\u00edas. No es ego\u00edsmo. Es necesario. Si este nivel no es s\u00f3lido, todo lo que est\u00e1 por encima es inestable.',
    'Self for family: either the family you were born into OR the family you have created (spouse, kids). If you\'ve created your own family, they become Level 2, and your family of origin moves to Level 3. These are the people who see you at your best and worst. You can\'t skip to community impact if things are incomplete here.': 'La familia en la que naciste O la familia que has creado (c\u00f3nyuge, hijos). Si has creado tu propia familia, ellos se convierten en el Nivel 2, y tu familia de origen pasa al Nivel 3. Estas son las personas que te ven en tus mejores y peores momentos.',
    'Self for group: extended family members, friends, relatives, coworkers, and groups you belong to. If you\'ve created your own family, your parents and siblings now live here. The question: Are you being yourself, or performing a version of yourself to fit in, or hiding entirely? The first 3 levels represent 90% of everyday life.': 'Familiares, amigos, parientes, compa\u00f1eros de trabajo y grupos a los que perteneces. Si has creado tu propia familia, tus padres y hermanos ahora se encuentran en este nivel. \u00bfEst\u00e1s siendo t\u00fa mismo o interpretando una versi\u00f3n de ti mismo para encajar? Los primeros 3 niveles representan el 90% de la vida cotidiana.',
    'Self for community: mostly seen as activities, events, and classes of people you identify with: musicians, business people, athletes, artists, your industry. Where you belong beyond personal relationships. Do you have a role, and do you respect the roles of others?': 'Actividades, eventos y grupos de personas con los que te identificas: m\u00fasicos, empresarios, deportistas, artistas, tu sector. Tu lugar de pertenencia m\u00e1s all\u00e1 de las relaciones personales. \u00bfTienes un rol y respetas los roles de los dem\u00e1s?',
    'Self for society: the people of your nation and its systems: government, economy, culture, laws. This level is about seeing reality clearly. Not what you wish was true. Not what you\'re fighting against. What actually is. You can\'t change what you won\'t first accept.': 'La gente de tu naci\u00f3n y sus sistemas: gobierno, econom\u00eda, cultura, leyes. Este nivel trata de ver la realidad con claridad. No lo que deseas que fuera verdad. No contra lo que luchas. Lo que realmente es. No puedes cambiar lo que primero no aceptas.',
    'Self for world: the global stage: international politics, global events, other nations, other cultures, humanity as a whole. How connected do you feel to what happens outside your borders? This isn\'t about being an activist. It\'s about recognizing you\'re part of something larger than your own life.': 'El escenario global: pol\u00edtica internacional, eventos globales, otras naciones, otras culturas, la humanidad en su conjunto. \u00bfQu\u00e9 tan conectado te sientes con lo que sucede fuera de tus fronteras? Se trata de reconocer que eres parte de algo m\u00e1s grande que tu propia vida.',
    'Self for generations: the people who came before you (ancestors) and those who will come after. This is legacy. What cycles did you inherit? What cycles will you break? What will you build that outlasts you? Legacy isn\'t always a building. Sometimes it\'s a pattern you refused to repeat.': 'Las personas que vinieron antes que t\u00fa (antepasados) y las que vendr\u00e1n despu\u00e9s. Este es el legado. \u00bfQu\u00e9 ciclos heredaste? \u00bfQu\u00e9 ciclos romper\u00e1s? \u00bfQu\u00e9 construir\u00e1s que perdure m\u00e1s all\u00e1 de ti? El legado no siempre es un edificio. A veces es un patr\u00f3n que te negaste a repetir.',

    // ─── Home Screen (from Roger) ───
    'See Your Patterns': 'Descubre tus patrones',
    'The game that reveals<br>what\'s really running your life.': 'El juego que revela<br>lo que realmente dirige tu vida.',
    'TRENDING GLOBALLY': 'Tendencia Global',
    'Worldwide Challenge': 'Desaf\u00edo mundial',
    'Same 3 scenarios for everyone on Earth. One chance daily.': 'Los mismos 3 escenarios para todos en la Tierra. Una oportunidad diaria.',
    'playing now': 'jugando ahora',
    'Tap to join the global movement': 'Haz clic para unirte al movimiento global',
    'Resets in': 'Se reinicia en',
    'Mirror Game': 'Juego del espejo',
    'See yourself honestly': 'M\u00edrate con honestidad',
    'Agreement Game': 'Juego del acuerdo',
    'Acceptance vs Judgment': 'Aceptaci\u00f3n vs. Juicio',
    'Level': 'Nivel',
    'coins': 'monedas',
    'Played': 'Jugado',
    'Streak': 'Racha',
    'Acceptance': 'Aceptaci\u00f3n',
    'Insights': 'Perspectivas',
    'Your Pattern': 'Tu patr\u00f3n',
    "Today's Practice": 'Pr\u00e1ctica de hoy',
    'Tap for full profile': 'Toca para ver perfil completo',
    'Your Journey': 'Tu viaje',
    'Breakthrough Work': 'Trabajo innovador',
    'Join Our Team': '\u00danete a nuestro equipo',
    'Learn the Full Framework': 'Aprende el marco completo',
    'Get Coaching': 'Obt\u00e9n asesoramiento',
    '1-on-1 Integration': 'Integraci\u00f3n individual',
    'Built by': 'Creado por',
    'on the framework he uses with founders, leaders, and clients worldwide.': 'bas\u00e1ndose en el marco que utiliza con fundadores, l\u00edderes y clientes en todo el mundo.',

    // ─── Game Screen ───
    'Mirror': 'Espejo',
    'Agreement': 'Acuerdo',
    'Loading...': 'Cargando...',
    "That's Me": 'Ese soy yo',
    'Not Me': 'Ese no soy yo',

    // ─── Results Screen ───
    'Game Complete': 'Juego completado',
    'Mirror Complete': 'Espejo completado',
    'Agreement Complete': 'Acuerdo completado',
    'Mixed Complete': 'Mixto completado',
    'Challenge Complete': 'Desaf\u00edo completado',
    'This session': 'Esta sesi\u00f3n',
    'Keep going!': '\u00a1Sigue adelante!',
    'Reflections': 'Reflexiones',
    'correct!': '\u00a1correcto!',
    'Great job!': '\u00a1Buen trabajo!',
    'Questions': 'Preguntas',
    'Back to Home': 'Volver al inicio',
    'Keep Playing': 'Seguir jugando',
    'Endless Mode': 'Modo infinito',
    'Continue Endless': 'Continuar infinito',
    'WhatsApp': 'WhatsApp',
    'Twitter': 'Twitter',
    'Copy': 'Copiar',
    'More': 'M\u00e1s',
    'Ready to break these patterns for good?': '\u00bfListo/a para romper estos patrones de una vez?',

    // ─── Result Messages ───
    'High self-recognition. You see yourself clearly. That\'s rare and powerful.': 'Alto autorreconocimiento. Te ves con claridad. Eso es raro y poderoso.',
    'Strong awareness. You\'re willing to look at what others avoid.': 'Gran conciencia. Est\u00e1s dispuesto/a a mirar lo que otros evitan.',
    'Selective recognition. Some patterns are easier to see than others.': 'Reconocimiento selectivo. Algunos patrones son m\u00e1s f\u00e1ciles de ver que otros.',
    'Low recognition. Either you\'re different, or there\'s a blind spot worth exploring.': 'Bajo reconocimiento. O eres diferente, o hay un punto ciego que vale la pena explorar.',
    'Exceptional. You chose acceptance almost every time.': 'Excepcional. Elegiste la aceptaci\u00f3n casi siempre.',
    'Strong acceptance. You\'re rewiring your default response.': 'Fuerte aceptaci\u00f3n. Est\u00e1s reprogramando tu respuesta predeterminada.',
    'Growing awareness. Notice when judgment feels safer.': 'Conciencia en crecimiento. Observa cu\u00e1ndo juzgar se siente m\u00e1s seguro.',
    'Judgment is your current default. That\'s not wrong. It\'s information.': 'Juzgar es tu modo predeterminado. No est\u00e1 mal. Es informaci\u00f3n.',

    // ─── Modals & Popups ───
    'Help & FAQ': 'Ayuda y preguntas frecuentes',
    'Achievement Unlocked!': '\u00a1Logro desbloqueado!',
    'Pattern Detected': 'Patr\u00f3n detectado',
    'This keeps showing up.': 'Esto sigue apareciendo.',
    'pattern appeared': 'el patr\u00f3n apareci\u00f3',
    'times recently': 'veces recientemente',
    "You're seeing it clearly now.": 'Ahora lo ves con claridad.',
    "That's the first step. But seeing a pattern and breaking it are two different things.": 'Ese es el primer paso. Pero ver un patr\u00f3n y romperlo son dos cosas diferentes.',
    "Most people can't break lifelong patterns alone. That's not weakness. It's how patterns work.": 'La mayor\u00eda de las personas no pueden romper patrones de toda la vida solas. Eso no es debilidad. As\u00ed funcionan los patrones.',
    'Talk to Arthur': 'Habla con Arthur',
    'Remind me later': 'Recu\u00e9rdame despu\u00e9s',

    // ─── Stats & XP ───
    'Games Played': 'Partidas jugadas',
    'Daily Streak': 'Racha diaria',
    'Acceptance Rate': 'Tasa de aceptaci\u00f3n',
    'insights collected': 'perspectivas recopiladas',
    'scenarios explored': 'escenarios explorados',
    'Start your journey': 'Comienza tu viaje',
    'Completed!': '\u00a1Completado!',
    'breakthroughs': 'avances',
    'ON TRACK': 'EN CAMINO',
    'CATCHING UP': 'RECUPERANDO',
    'BEHIND': 'REZAGADO',
    'Start': 'Comenzar',
    'Done!': '\u00a1Hecho!',

    // ─── Archetype Names (from Roger FAQ) ───
    'The Honest Avoider': 'Evitador de la honestidad',
    'The Aware Procrastinator': 'Procrastinador Consciente',
    'The Peaceful Avoider': 'Evasor Pac\u00edfico',
    'The Growth Seeker': 'Buscador de Crecimiento',
    'The Aware One': 'El Consciente',
    'The Silent Scorekeeper': 'Guardi\u00e1n Silencioso de las Cuentas',
    'The Grief Holder': 'Portador del Duelo',
    'The Crowded Loner': 'Solitario Rodeado de Gente',
    'The Identity Chameleon': 'Camale\u00f3n de la Identidad',
    'The Burned Out Achiever': 'Triunfador Agotado',
    'The Once Bitten': 'Una Vez Mordido',
    'The Strategic Avoider': 'Evitador Estrat\u00e9gico',
    'The Numbing Navigator': 'Navegante Insensible',
    'The Compassionate Boundary-Breaker': 'Rompedor de L\u00edmites',
    'The Self-Critical Achiever': 'Triunfador Autocr\u00edtico',
    'The Control Seeker': 'Buscador de Control',
    'The Shame Carrier': 'Portador de la verg\u00fcenza',
    'The Trust Rebuilder': 'Reconstructor de la confianza',
    'The Emerging Observer': 'Observador Emergente',

    // ─── Pattern Card Reveal ───
    "What's yours?": '\u00bfCu\u00e1l es el tuyo?',
    'Play the full game to go deeper.': 'Juega el juego completo para profundizar.',
    'Play the Game': 'Juega el juego',
    'Share My Pattern': 'Compartir mi patr\u00f3n',
    'Share Your Pattern': 'Comparte tu patr\u00f3n',
    'Copy Link': 'Copiar enlace',
    'Start Playing': 'Empieza a jugar',

    // ─── Welcome Messages ───
    'Keep it going!': '\u00a1Sigue as\u00ed!',
    'Welcome back!': '\u00a1Bienvenido de nuevo!',
    'Good to see you!': '\u00a1Qu\u00e9 bueno verte!',

    // ─── Game Mode Labels (in-game) ───
    'Level 1: Individual': 'Nivel 1: Individuo',
    'Level 2: Family': 'Nivel 2: Familia',
    'Level 3: Groups': 'Nivel 3: Grupos',
    'Level 4: Community': 'Nivel 4: Comunidad',
    'Level 5: Society': 'Nivel 5: Sociedad',
    'Level 6: World': 'Nivel 6: Mundo',
    'Level 7: Generations': 'Nivel 7: Generaciones',

    // ─── Misc UI ───
    'NEW': 'NUEVO',
    'Start Here': 'Empieza aqu\u00ed',
    'Play': 'Jugar',
    'Save': 'Guardar',
    'Share': 'Compartir',
    'Close': 'Cerrar',
    'Day': 'D\u00eda',
    'XP': 'XP',
    'games': 'partidas',
    'new insights': 'nuevas perspectivas',
    'correct': 'correcto',
    'Accepted': 'Aceptado',
    'Judgment': 'Juicio',
    'Correct': 'Correcto',
    'Missed': 'Fallado',
    'Your Responses': 'Tus respuestas',
    'Perfect!': '\u00a1Perfecto!',
    'Loading scenarios... Please wait': 'Cargando escenarios... Por favor espera',
    "You're now Level": 'Ahora eres Nivel',
    'Completed Today': 'Completado hoy',

    // ─── Deep Insight / AI Analysis ───
    'Deep Insight': 'An\u00e1lisis profundo',
    'Print / Save': 'Imprimir / Guardar',
    'Scroll': 'Desplazarse',

    // ─── Reach Level Unlocks (from Roger) ───
    'Reach Player Level': 'Alcanza el nivel',
    'explored': 'explorado'
  },

  // ═══════════════════════════════════════════════
  // KOREAN (한국어) — Translated by Aurora
  // ═══════════════════════════════════════════════
  ko: {
    // ─── Hook / Intro Screens ───
    'See the patterns': '패턴을 보세요.',
    'that quietly run<br>your life.': '당신의 삶을 조용히 이끄는 흐름을.',
    'Discover why you keep repeating<br>the same mistakes.': '명확하게 보세요. 시간을 절약하세요. 반복을 멈추세요.',
    'Prove it': '증명하세요.',
    'As Seen On': '다음 매체에 소개됌',
    'Have you ever<br>felt like...': '이런 느낌,<br>한 번이라도 받아본 적 있나요?',
    'Select all that feel true': '당신에게 해당되는 항목을 모두 선택하세요.',
    "You're successful on paper, but something essential is missing?": '서류상으로는 성공했지만, 뭔가 본질적인 게 빠져 있다고 느끼나요?',
    "You've tried everything, but the same patterns keep repeating?": '모든 걸 시도했는데도, 같은 패턴이 계속 반복되나요?',
    "You're great at helping others, but can't seem to help yourself?": '다른 사람을 돕는 데는 능숙하지만, 정작 자신은 도울 수 없나요?',
    'There has to be more to life than this?': '인생에는 이보다 더 많은 것이 있어야 한다고 느끼나요?',
    "Everyone thinks you're doing fine, but inside you're falling apart?": '모두가 당신이 잘 지낸다고 생각하지만, 속으로는 무너지고 있나요?',
    'Continue': '계속하기',

    // ─── Hook Screen 2 ───
    'Do you ever<br>ask yourself...': '이런 질문,<br>가끔 스스로에게 던져본 적 있나요?',
    'Select all that resonate with you': '당신 마음에 와닿는 것들을 모두 선택하세요.',
    '"Why do I feel like a fraud, even when I\'ve earned everything I have?"': '"왜 나는 이렇게 이뤘는데도, 여전히 부족한 사람처럼 느껴질까?"',
    '"Why do I feel so alone, even when I\'m surrounded by people?"': '"사람들 속에 있어도, 왜 이렇게 외로운 걸까?"',
    '"If I\'m this successful, and I\'m still not happy, what\'s the point?"': '"이렇게 성공했는데, 내가 여전히 행복하지 않다면 이게 다 무슨 의미지?"',
    '"When will I actually feel like I\'ve made it?"': '"나는 언제쯤이면 진짜 해냈다고 느낄 수 있을까?"',
    '"Is this really all there is?"': '"정말 이게 전부인 걸까?"',

    // ─── Interstitial / Level Explanation ───
    "It's not a flaw.": '이건 결함이 아니에요.',
    "It's a sign you're solving the problem at the wrong level.": '문제를 잘못된 수준에서 해결하고 있다는 신호일 뿐이에요.',
    'Tap each level to learn more:': '각 레벨을 탭해 더 알아보세요:',
    'Individual': '개인',
    'Family': '가정',
    'Group': '그룹',
    'Community': '커뮤니티',
    'Society': '사회',
    'World': '세계',
    'Generation': '세대',
    'The game shows you which level your pattern lives on, so you can finally change it.': '이 게임은 당신의 패턴이 어느 수준에 있는지 보여주며, 앞으로 발전할 수 있도록 도와줍니다.',
    'Back': '뒤로',
    'See Your Patterns': '패턴 보기',
    'The game that reveals<br>what\'s really running your life.': '당신의 삶을 진정으로 이끄는 것이 무엇인지<br>밝혀주는 게임.',
    'English': '영어'
  }
};

// Translate a string - returns translation if available, otherwise original English
function t(str) {
  if (!TRANSLATIONS || currentLang === 'en' || !TRANSLATIONS[currentLang]) return str;
  return TRANSLATIONS[currentLang][str] || str;
}

// Apply translations to all static HTML elements with data-i18n attribute
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    let key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = TRANSLATIONS[currentLang][key];
      } else {
        el.innerHTML = TRANSLATIONS[currentLang][key];
      }
    }
  });
}

// Apply translations to all known text elements by ID or selector
function applyTranslations() {
  if (currentLang === 'en') return; // English is the hardcoded default, no changes needed
  let tr = TRANSLATIONS[currentLang];
  if (!tr) return;

  // ─── Hook Screen 1 ───
  let line1 = document.getElementById('line1');
  if (line1) line1.innerHTML = tr['See the patterns'] || line1.innerHTML;
  let line2 = document.getElementById('line2');
  if (line2) line2.innerHTML = tr['that quietly run<br>your life.'] || line2.innerHTML;
  let hookSub = document.getElementById('hookSub');
  if (hookSub) hookSub.innerHTML = tr['Discover why you keep repeating<br>the same mistakes.'] || hookSub.innerHTML;
  let hookBtn = document.getElementById('hookBtn');
  if (hookBtn) hookBtn.textContent = tr['Prove it'] || hookBtn.textContent;

  // ─── Hook Screen 2: Recognition ───
  let recGrid = document.getElementById('recognitionGrid');
  if (recGrid) {
    recGrid.querySelectorAll('.recognition-item').forEach(item => {
      let orig = item.textContent.trim();
      if (tr[orig]) item.textContent = tr[orig];
    });
  }
  let recHint = document.getElementById('recognitionHint');
  if (recHint) recHint.textContent = tr['Please select at least one'] || recHint.textContent;

  // ─── Hook Screen 3: Inner Voice ───
  let voiceOpts = document.getElementById('voiceOptions');
  if (voiceOpts) {
    voiceOpts.querySelectorAll('.voice-option').forEach(item => {
      let orig = item.textContent.trim();
      if (tr[orig]) item.textContent = tr[orig];
    });
  }
  let voiceHint = document.getElementById('voiceHint');
  if (voiceHint) voiceHint.textContent = tr['Please select at least one'] || voiceHint.textContent;

  // ─── Hook Screen 4: Levels Explanation ───
  document.querySelectorAll('.level-compact-name').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });
  document.querySelectorAll('.level-compact-desc').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });
  // Level detail paragraphs
  for (let i = 1; i <= 7; i++) {
    let detail = document.getElementById('levelDetail' + i);
    if (detail) {
      let orig = detail.textContent.trim();
      if (tr[orig]) detail.textContent = tr[orig];
    }
  }

  // ─── Home Screen ───
  // Worldwide Challenge
  let dailyCard = document.getElementById('dailyCard');
  if (dailyCard) {
    let badge = dailyCard.querySelector('.player-count');
    if (badge) { let dot = badge.querySelector('.player-dot'); badge.textContent = ''; if(dot) badge.appendChild(dot); badge.appendChild(document.createTextNode(tr['TRENDING GLOBALLY'] || 'Trending Globally')); }
    let h2 = dailyCard.querySelector('h2');
    if (h2) h2.textContent = tr['Worldwide Challenge'] || h2.textContent;
    let p = dailyCard.querySelector('p');
    if (p) p.textContent = tr['Same 3 scenarios for everyone on Earth. One chance daily.'] || p.textContent;
    let cta = document.getElementById('dailyCta');
    if (cta) cta.textContent = tr['Tap to join the global movement'] || cta.textContent;
  }

  // Game modes
  document.querySelectorAll('.mode-name').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });
  document.querySelectorAll('.mode-desc').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });

  // Stats labels
  document.querySelectorAll('.stat-label').forEach(el => {
    let orig = el.textContent.replace(/[^\w\s]/g, '').trim();
    if (tr[orig]) el.innerHTML = tr[orig] + (el.innerHTML.includes('🔥') ? ' 🔥' : '');
  });

  // Pattern card
  let patternLabel = document.querySelector('.pattern-label');
  if (patternLabel) patternLabel.textContent = tr['Your Pattern'] || patternLabel.textContent;
  let patternChallengeLabel = document.querySelector('.pattern-challenge-label');
  if (patternChallengeLabel) patternChallengeLabel.textContent = tr["Today's Practice"] || patternChallengeLabel.textContent;
  let patternTap = document.querySelector('.pattern-tap');
  if (patternTap) patternTap.textContent = (tr['Tap for full profile'] || 'Tap for full profile') + ' \u2192';

  // Section title
  document.querySelectorAll('.section-title').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });

  // Action buttons
  document.querySelectorAll('.action-btn-text').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });

  // Footer
  let transformText = document.querySelector('.transform-btn-text');
  if (transformText) transformText.textContent = tr['Get Coaching'] || transformText.textContent;
  let transformSub = document.querySelector('.transform-btn-sub');
  if (transformSub) transformSub.textContent = tr['1-on-1 Integration'] || transformSub.textContent;

  // Language dropdown button
  let langBtn = document.getElementById('langDropBtn');
  if (langBtn) {
    if (currentLang === 'nl') langBtn.innerHTML = '\u{1F1F3}\u{1F1F1} Nederlands <span style="font-size:10px;opacity:0.8;">\u25BC</span>';
    else if (currentLang === 'es') langBtn.innerHTML = '\u{1F1EA}\u{1F1F8} Espa\u00f1ol <span style="font-size:10px;opacity:0.8;">\u25BC</span>';
    else if (currentLang === 'ko') langBtn.innerHTML = '\u{1F1F0}\u{1F1F7} \ud55c\uad6d\uc5b4 <span style="font-size:10px;opacity:0.8;">\u25BC</span>';
  }

  // Hook screen question titles & subs
  document.querySelectorAll('.hook-question-title').forEach(el => {
    let orig = el.innerHTML.trim();
    if (tr[orig]) el.innerHTML = tr[orig];
  });
  document.querySelectorAll('.hook-question-sub').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });

  // Continue / Back buttons in hooks
  document.querySelectorAll('.hook-btn').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });

  // Results buttons
  let homeBtn = document.getElementById('homeBtn');
  if (homeBtn) homeBtn.innerHTML = '\u{1F3E0} ' + (tr['Back to Home'] || 'Back to Home');

  // Share platform labels
  document.querySelectorAll('.share-platform-btn .label').forEach(el => {
    let orig = el.textContent.trim();
    if (tr[orig]) el.textContent = tr[orig];
  });

  // Coaching bridge
  let bridgeTitle = document.querySelector('.bridge-title');
  if (bridgeTitle) bridgeTitle.textContent = tr['This keeps showing up.'] || bridgeTitle.textContent;
  let bridgeInsight = document.querySelector('.bridge-insight');
  if (bridgeInsight) {
    let strong = bridgeInsight.querySelector('strong');
    if (strong) strong.textContent = tr["You're seeing it clearly now."] || strong.textContent;
  }
  let bridgeCta = document.querySelector('.bridge-cta');
  if (bridgeCta) bridgeCta.textContent = tr["Most people can't break lifelong patterns alone. That's not weakness. It's how patterns work."] || bridgeCta.textContent;

  // Hero section
  let heroH1 = document.querySelector('.hero h1');
  if (heroH1) heroH1.textContent = tr['See Your Patterns'] || heroH1.textContent;
  let heroP = document.querySelector('.hero p');
  if (heroP) heroP.innerHTML = tr['The game that reveals<br>what\'s really running your life.'] || heroP.innerHTML;

  // Footer learn link
  let learnLink = document.querySelector('.footer-btn.primary');
  if (learnLink) learnLink.textContent = tr['Learn the Full Framework'] || learnLink.textContent;

  // Reveal label top
  let revealLabel = document.querySelector('.reveal-label-top');
  if (revealLabel) revealLabel.textContent = tr['Your Pattern'] || revealLabel.textContent;

  // Reveal CTA
  let revealCta = document.querySelector('.reveal-cta');
  if (revealCta) revealCta.textContent = tr['The game shows you which level your pattern lives on, so you can finally change it.'] || revealCta.textContent;

  // Levels intro
  let levelsIntro = document.querySelector('.levels-intro');
  if (levelsIntro) levelsIntro.textContent = tr['Tap each level to learn more:'] || levelsIntro.textContent;

  // Hook screen 5: pattern card elements
  let footerQ = document.querySelector('.footer-question');
  if (footerQ) footerQ.textContent = tr["What's yours?"] || footerQ.textContent;
  let startBtn = document.getElementById('startGameBtn');
  if (startBtn) startBtn.textContent = (tr['Start Playing'] || 'Start Playing') + ' \u2192';
  let shareMyBtn = document.querySelector('.share-btn');
  if (shareMyBtn && shareMyBtn.querySelector('.share-btn-icon')) {
    shareMyBtn.innerHTML = '<span class="share-btn-icon">\ud83d\udce4</span> ' + (tr['Share My Pattern'] || 'Share My Pattern');
  }
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'nl' && lang !== 'es' && lang !== 'ko') {
    showToast('\u{1F30D} ' + {hy:'\u0540\u0561\u0575\u0565\u0580\u0565\u0576',ru:'\u0420\u0443\u0441\u0441\u043a\u0438\u0439'}[lang] + ' coming soon! Stay tuned.', 3000);
    return;
  }
  currentLang = lang;
  localStorage.setItem('levelup_lang', lang);

  // Update the dropdown button label
  let langBtn = document.getElementById('langDropBtn');
  if (langBtn) {
    if (lang === 'nl') langBtn.innerHTML = '\u{1F1F3}\u{1F1F1} Nederlands <span style="font-size:10px;opacity:0.8;">\u25BC</span>';
    else if (lang === 'es') langBtn.innerHTML = '\u{1F1EA}\u{1F1F8} Espa\u00f1ol <span style="font-size:10px;opacity:0.8;">\u25BC</span>';
    else if (lang === 'ko') langBtn.innerHTML = '\u{1F1F0}\u{1F1F7} \ud55c\uad6d\uc5b4 <span style="font-size:10px;opacity:0.8;">\u25BC</span>';
    else langBtn.innerHTML = '\u{1F1FA}\u{1F1F8} English <span style="font-size:10px;opacity:0.8;">\u25BC</span>';
  }

  // Apply or revert translations
  if (lang === 'nl' || lang === 'es' || lang === 'ko') {
    applyTranslations();
    if (lang === 'nl') showToast('\u{1F1F3}\u{1F1F1} Nederlands geactiveerd!', 2000);
    else if (lang === 'es') showToast('\u{1F1EA}\u{1F1F8} \u00a1Espa\u00f1ol activado!', 2000);
    else if (lang === 'ko') showToast('\u{1F1F0}\u{1F1F7} \ud55c\uad6d\uc5b4 \ud65c\uc131\ud654!', 2000);
  } else {
    // Reload to revert to English defaults
    location.reload();
  }
}

// Auto-apply translations on page load if a non-English language was previously selected
if (currentLang === 'nl' || currentLang === 'es' || currentLang === 'ko') {
  document.addEventListener('DOMContentLoaded', function() {
    // Small delay to let other init code run first
    setTimeout(applyTranslations, 100);
  });
  // Also apply after updateHome which rebuilds some elements
  let _origUpdateHome = typeof updateHome === 'function' ? updateHome : null;
  if (_origUpdateHome) {
    let _wrappedUpdateHome = function() {
      _origUpdateHome.apply(this, arguments);
      if (currentLang === 'nl' || currentLang === 'es' || currentLang === 'ko') setTimeout(applyTranslations, 50);
    };
    // Will be patched after updateHome is defined
  }
}

// Close language dropdown when clicking outside
document.addEventListener('click', function(e) {
  let dd = document.getElementById('langDropdown');
  let btn = document.getElementById('langDropBtn');
  if (dd && btn && !dd.contains(e.target) && !btn.contains(e.target)) {
    dd.classList.remove('open');
  }
});

