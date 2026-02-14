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
    'As Seen On': 'Anunciado en...',
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
    'Back': 'Atrás',
    "This isn't a flaw.": 'Esto no es un defecto.',
    "It's a signal you're solving the problem at the wrong level.": 'Es una se\u00f1al de que est\u00e1s resolviendo el problema en el nivel equivocado.',
    'Tap each level to learn more:': 'Toca cada nivel para saber m\u00e1s:',
    'The game shows you which level your pattern lives on, so you can finally change it.': 'El juego te muestra en qu\u00e9 nivel vive tu patr\u00f3n, para que finalmente puedas cambiarlo.',
    'See My Pattern': 'Ver mi patr\u00f3n',

    // ─── 7 Level Names & Descriptions (from Roger) ───
    'Individual': 'Individuo',
    'Self for yourself': 'El yo para ti mismo',
    'Family': 'Familia',
    'Your created or immediate family': 'Tu familia creada o inmediata',
    'Groups': 'Grupos',
    'Extended family, friends, coworkers': 'Familia extendida, amigos, compañeros de trabajo',
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
    'Self for yourself: your feelings, your life, your beliefs, your needs, your wants. Before you can show up for anyone else, you have to show up for yourself. This means having non-negotiables, things you do for yourself every day, no matter what. It\'s not selfish. It\'s required. If this level isn\'t solid, everything above it is unstable.': 'El yo para ti: tus sentimientos, tu vida, tus creencias, tus necesidades, tus deseos. Antes de poder estar presente para los demás, tienes que estar presente para ti mismo. Esto significa tener cosas innegociables, cosas que haces por ti todos los días, pase lo que pase. No es egoísta. Es necesario. Si este nivel no es sólido, todo lo que está por encima es inestable.',
    'Self for family: either the family you were born into OR the family you have created (spouse, kids). If you\'ve created your own family, they become Level 2, and your family of origin moves to Level 3. These are the people who see you at your best and worst. You can\'t skip to community impact if things are incomplete here.': 'El yo para la familia: ya sea la familia en la que naciste o la familia que has creado (cónyuge, hijos). Si has creado tu propia familia, esta pasa al Nivel 2, y tu familia de origen pasa al Nivel 3. Estas son las personas que te ven en tus mejores y peores momentos. No puedes saltar al impacto comunitario si las cosas están incompletas aquí.',
    'Self for group: extended family members, friends, relatives, coworkers, and groups you belong to. If you\'ve created your own family, your parents and siblings now live here. The question: Are you being yourself, or performing a version of yourself to fit in, or hiding entirely? The first 3 levels represent 90% of everyday life.': 'El yo para el grupo: familiares, amigos, parientes, compañeros de trabajo y grupos a los que perteneces. Si has creado tu propia familia, tus padres y hermanos ahora viven aquí. La pregunta: ¿Estás siendo tú mismo, representando una versión de ti mismo para encajar, o escondiéndote por completo? Los primeros 3 niveles representan el 90% de la vida cotidiana.',
    'Self for community: mostly seen as activities, events, and classes of people you identify with: musicians, business people, athletes, artists, your industry. Where you belong beyond personal relationships. Do you have a role, and do you respect the roles of others?': 'El yo como comunidad: se ve principalmente como actividades, eventos y grupos de personas con los que te identificas: músicos, empresarios, deportistas, artistas, tu sector. Dónde te sientes parte más allá de las relaciones personales. ¿Tienes un rol y respetas el de los demás?',
    'Self for society: the people of your nation and its systems: government, economy, culture, laws. This level is about seeing reality clearly. Not what you wish was true. Not what you\'re fighting against. What actually is. You can\'t change what you won\'t first accept.': 'El yo para la sociedad: la gente de tu nación y sus sistemas: gobierno, economía, cultura, leyes. Este nivel se trata de ver la realidad con claridad. No lo que desearías que fuera verdad. No aquello contra lo que luchas. Lo que realmente es. No puedes cambiar lo que no aceptas primero.',
    'Self for world: the global stage: international politics, global events, other nations, other cultures, humanity as a whole. How connected do you feel to what happens outside your borders? This isn\'t about being an activist. It\'s about recognizing you\'re part of something larger than your own life.': 'El yo para el mundo: el escenario global: política internacional, eventos globales, otras naciones, otras culturas, la humanidad en su conjunto. ¿Qué tan conectado te sientes con lo que sucede fuera de tus fronteras? No se trata de ser un activista. Se trata de reconocer que formas parte de algo más grande que tu propia vida.',
    'Self for generations: the people who came before you (ancestors) and those who will come after. This is legacy. What cycles did you inherit? What cycles will you break? What will you build that outlasts you? Legacy isn\'t always a building. Sometimes it\'s a pattern you refused to repeat.': 'El yo para las generaciones: las personas que te precedieron (ancestros) y las que vendrán después. Este es el legado. ¿Qué ciclos heredaste? ¿Qué ciclos romperás? ¿Qué construirás que perdure? El legado no siempre es un edificio. A veces es un patrón que te negaste a repetir.',

    // ─── Home Screen (from Roger) ───
    'See Your Patterns': 'Mira tus patrones',
    'The game that reveals<br>what\'s really running your life.': 'El juego que revela<br>lo que realmente dirige tu vida.',
    'TRENDING GLOBALLY': 'TENDENCIAS GLOBALES',
    'Worldwide Challenge': 'Desafío mundial',
    'Same 3 scenarios for everyone on Earth. One chance daily.': 'Los mismos 3 escenarios para todos en la Tierra. Una oportunidad al día.',
    'playing now': 'jugando ahora',
    'Tap to join the global movement': 'Haz clic para unirte al movimiento global',
    'Resets in': 'Se reinicia en',
    'Mirror Game': 'Juego del Espejo',
    'See yourself honestly': 'Mírate a ti mismo con honestidad',
    'Agreement Game': 'Juego del Acuerdo',
    'Acceptance vs Judgment': 'Aceptaci\u00f3n vs. Juicio',
    'Level': 'Nivel',
    'coins': 'monedas',
    'Played': 'Jugado',
    'Streak': 'Racha',
    'Acceptance': 'Aceptación',
    'Insights': 'Perspectivas',
    'Your Pattern': 'Tu patr\u00f3n',
    "Today's Practice": 'Pr\u00e1ctica de hoy',
    'Tap for full profile': 'Toca para ver el perfil completo',
    'Your Journey': 'Tu viaje',
    'Breakthrough Work': 'Trabajo innovador',
    'Join Our Team': 'Únete a nuestro equipo',
    'Learn the Full Framework': 'Aprende el marco completo',
    'Get Coaching': 'Obtén coaching',
    '1-on-1 Integration': 'Integración personalizada',
    'Built by': 'Creado por',
    'on the framework he uses with founders, leaders, and clients worldwide.': 'con el marco que usa con fundadores, líderes y clientes de todo el mundo.',

    // ─── Game Screen ───
    'Mirror': 'Espejo',
    'Agreement': 'Acuerdo',
    'Loading...': 'Cargando...',
    "That's Me": 'Ese soy yo',
    'Not Me': 'Yo no',

    // ─── Results Screen ───
    'Game Complete': 'Juego completado',
    'Mirror Complete': 'Espejo completado',
    'Agreement Complete': 'Acuerdo completado',
    'Mixed Complete': 'Mixto completado',
    'Challenge Complete': 'Desaf\u00edo completado',
    'This session': 'Esta sesión',
    'Keep going!': '¡Sigue!',
    'Reflections': 'Reflexiones',
    'correct!': '\u00a1correcto!',
    'Great job!': '\u00a1Buen trabajo!',
    'Questions': 'Preguntas',
    'Back to Home': 'Volver al inicio',
    'Keep Playing': 'Seguir jugando',
    'Endless Mode': 'Modo infinito',
    'Continue Endless': 'Continuar sin fin',
    'WhatsApp': 'WhatsApp',
    'Twitter': 'Twitter',
    'Copy': 'Copiar',
    'More': 'M\u00e1s',
    'Ready to break these patterns for good?': '¿Listo para romper estos patrones para siempre?',

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
    'Achievement Unlocked!': '¡Logro desbloqueado!',
    'Pattern Detected': 'Patrón detectado',
    'This keeps showing up.': 'Esto sigue apareciendo.',
    'pattern appeared': 'el patr\u00f3n apareci\u00f3',
    'times recently': 'veces recientemente',
    "You're seeing it clearly now.": 'Ahora lo ves con claridad.',
    "That's the first step. But seeing a pattern and breaking it are two different things.": 'Ese es el primer paso. Pero ver un patr\u00f3n y romperlo son dos cosas diferentes.',
    "Most people can't break lifelong patterns alone. That's not weakness. It's how patterns work.": 'La mayor\u00eda de las personas no pueden romper patrones de toda la vida solas. Eso no es debilidad. As\u00ed funcionan los patrones.',
    'Talk to Arthur': 'Habla con Arthur.',
    'Remind me later': 'Recuérdamelo más tarde.',

    // ─── Stats & XP ───
    'Games Played': 'Partidas jugadas',
    'Daily Streak': 'Racha diaria',
    'Acceptance Rate': 'Índice de aceptación',
    'insights collected': 'Perspectivas recopiladas',
    'scenarios explored': 'Escenarios explorados',
    'Start your journey': 'Comienza tu aventura.',
    'Completed!': '\u00a1Completado!',
    'breakthroughs': 'avances',
    'ON TRACK': 'EN CAMINO',
    'CATCHING UP': 'PONIÉNDOSE AL DÍA',
    'BEHIND': 'ATRASADO',
    'Start': 'Inicio',
    'Done!': '\u00a1Hecho!',

    // ─── Archetype Names (from Roger FAQ) ───
    'The Honest Avoider': 'El Evitador Honesto',
    'The Aware Procrastinator': 'El procrastinador consciente',
    'The Peaceful Avoider': 'El Evitador Pacífico',
    'The Growth Seeker': 'El Buscador de Crecimiento',
    'The Aware One': 'El Consciente',
    'The Silent Scorekeeper': 'Guardi\u00e1n Silencioso de las Cuentas',
    'The Grief Holder': 'Portador del Duelo',
    'The Crowded Loner': 'Solitario Rodeado de Gente',
    'The Identity Chameleon': 'Camale\u00f3n de la Identidad',
    'The Burned Out Achiever': 'Triunfador Agotado',
    'The Once Bitten': 'Una Vez Mordido',
    'The Strategic Avoider': 'Evitador Estrat\u00e9gico',
    'The Numbing Navigator': 'Navegante Insensible',
    'The Compassionate Boundary-Breaker': 'El compasivo rompedor de límites',
    'The Self-Critical Achiever': 'El triunfador autocrítico',
    'The Control Seeker': 'El Buscador de Control',
    'The Shame Carrier': 'El portador de la vergüenza',
    'The Trust Rebuilder': 'El Reconstructor de la Confianza',
    'The Emerging Observer': 'El Observador Emergente',

    // ─── Pattern Card Reveal ───
    "What's yours?": '\u00bfCu\u00e1l es el tuyo?',
    'Play the full game to go deeper.': 'Juega el juego completo para profundizar.',
    'Play the Game': 'Juega el juego',
    'Share My Pattern': 'Compartir mi patr\u00f3n',
    'Share Your Pattern': 'Comparte tu patr\u00f3n',
    'Copy Link': 'Copiar Enlace',
    'Start Playing': 'Empieza a jugar',

    // ─── Welcome Messages ───
    'Keep it going!': '\u00a1Sigue as\u00ed!',
    'Welcome back!': '¡Bienvenido de nuevo!',
    'Good to see you!': '¡Qué bueno verte!',

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
    'Day': 'Día',
    'XP': 'XP',
    'games': 'juegos',
    'new insights': 'Nuevas perspectivas',
    'correct': 'Correcto',
    'Accepted': 'Aceptado',
    'Judgment': 'Juicio',
    'Correct': 'Correcto',
    'Missed': 'Perdido',
    'Your Responses': 'Tus respuestas',
    'Perfect!': '\u00a1Perfecto!',
    'Loading scenarios... Please wait': 'Cargando escenarios... Espera.',
    "You're now Level": 'Ahora eres Nivel',
    'Completed Today': 'Completado hoy',

    // ─── Deep Insight / AI Analysis ───
    'Deep Insight': 'Perspectiva profunda',
    'Print / Save': 'Imprimir/Guardar',
    'Scroll': 'Desplazarse',

    // ─── Reach Level Unlocks (from Roger) ───
    'Reach Player Level': 'Alcanzar nivel de jugador',
    'explored': 'Explorado',

    // --- Archetypes (Roger Walter) ---
    // Archetype Edge
    'Your empathy is a gift, but you give it away too freely. Learning to protect your energy isn\'t selfish, it\'s sustainable.': 'Tu empatía es un don, pero la das con demasiada libertad. Aprender a proteger tu energía no es egoísta, es sostenible.',
    'You\'ve accomplished more than most by being hard on yourself, but the cost is invisible. The next level of growth isn\'t more effort, it\'s more self-compassion.': 'Has logrado más que la mayoría siendo exigente contigo mismo, pero el costo es invisible. El siguiente nivel de crecimiento no es más esfuerzo, sino más autocompasión.',
    // Archetype Name
    'The Emotionally Armored Protector': 'El protector emocionalmente blindado',
    // Archetype Edge
    'You\'ve survived by not needing anyone. But intimacy requires letting people in. The armor that protected you is now the wall that isolates you.': 'Has sobrevivido al no necesitar a nadie. Pero la intimidad requiere dejar entrar a la gente. La armadura que te protegía ahora es el muro que te aísla.',
    // Archetype Name
    'The Approval-Seeking Chameleon': 'El camaleón que busca la aprobación',
    // Archetype Edge
    'You\'ve learned to read every room perfectly. But who are you when no one is watching? That person deserves to exist too.': 'Has aprendido a interpretar cada espacio a la perfección. ¿Pero quién eres cuando nadie te ve? Esa persona también merece existir.',
    // Archetype Name
    'The Anxious Overthinker': 'El pensador ansioso',
    // Archetype Edge
    'Your mind sees every possibility, including the worst ones. The peace you seek isn\'t found in more thinking. It\'s found in trusting yourself to handle what comes.': 'Tu mente ve todas las posibilidades, incluso las peores. La paz que buscas no se encuentra en pensar más. Se encuentra en confiar en ti mismo para afrontar lo que venga.',
    // Archetype Name
    'The Conflict-Avoidant Peacekeeper': 'El pacificador que evita los conflictos',
    // Archetype Edge
    'You keep the peace for everyone except yourself. Your needs matter too. Speaking them isn\'t conflict. It\'s truth.': 'Mantienes la paz para todos menos para ti. Tus necesidades también importan. Decirlas no es conflicto. Es verdad.',
    // Archetype Name
    'The Perfectionist Controller': 'El controlador perfeccionista',
    // Archetype Edge
    'Perfection was how you stayed safe. But control is an illusion, and the anxiety of maintaining it is exhausting. What if good enough was actually enough?': 'La perfección era tu forma de mantenerte a salvo. Pero el control es una ilusión, y la ansiedad de mantenerlo es agotadora. ¿Y si lo suficientemente bueno fuera suficiente?',
    // Archetype Challenge
    'Notice one moment today when you say yes but your body says no. What did you override?': 'Observa un momento hoy en el que digas que sí, pero tu cuerpo te diga que no. ¿Qué ignoraste?',
    'Practice this exact phrase: "I care about you, and I need to take care of myself first."': 'Practica esta frase exacta: "Me preocupo por ti y necesito cuidar de mí mismo primero".',
    'Track every "yes" today. How many were genuine? How many were guilt?': 'Registra cada "sí" de hoy. ¿Cuántos fueron sinceros? ¿Cuántos fueron culpa?',
    'When someone asks for your time today, wait 24 hours before responding.': 'Cuando alguien te pida tu tiempo hoy, espera 24 horas antes de responder.',
    'Ask yourself: "Whose peace am I preserving at the cost of my own?"': 'Pregúntate: "¿De quién es la paz que estoy preservando a costa de la mía?"',
    // Archetype Trait
    'Deep empathy': 'Empatía profunda',
    'Porous boundaries': 'Límites porosos',
    'Self-abandonment': 'Autoabandono',
    // Archetype Coaching Note
    'Client likely has childhood pattern of earning love through caretaking. Watch for burnout and resentment beneath the giving.': 'Es probable que el cliente tenga un patrón infantil de ganarse el amor cuidando a los demás. Estate atento al agotamiento y al resentimiento que subyacen a la generosidad.',
    // Archetype Challenge
    'When your inner critic speaks today, ask: "Would I say this to someone I love?"': 'Cuando tu crítico interno le hable hoy, pregúntate: "¿Le diría esto a alguien a quien quiero?".',
    'Notice one thing you did well today. Let yourself feel proud for 30 full seconds. Time it.': 'Observa algo que hayas hecho bien hoy. Permítete sentirte orgulloso durante 30 segundos. Cronométralo.',
    'Replace "I should have done better" with "I did what I could with what I had."': 'Reemplaza "Debería haberlo hecho mejor" por "Hice lo que pude con lo que tenía".',
    'Track your self-critical thoughts today. Just count them. Awareness is the first step.': 'Registra tus pensamientos autocríticos de hoy. Simplemente cuéntalos. La consciencia es el primer paso.',
    'Ask yourself: "What would I attempt if I knew I couldn\'t fail?"': 'Pregúntate: "¿Qué intentaría si supiera que no puedo fracasar?"',
    // Archetype Trait
    'High achievement': 'Altos logros',
    'Harsh inner critic': 'Crítica interna severa',
    'Conditional self-worth': 'Autoestima condicional',
    // Archetype Coaching Note
    'Client uses achievement as armor against core unworthiness. Praise may trigger suspicion. Focus on unconditional presence.': 'El cliente usa el logro como una armadura contra su indignidad central. Los elogios pueden despertar sospechas. Céntrate en la presencia incondicional.',
    // Archetype Edge
    'Your need for control is a sophisticated protection against chaos, but the tighter you grip, the less you actually control. Real power comes from trusting yourself to handle uncertainty.': 'Tu necesidad de control es una sofisticada protección contra el caos, pero cuanto más te aferras, menos controlas realmente. El verdadero poder proviene de confiar en ti mismo para manejar la incertidumbre.',
    // Archetype Challenge
    'Notice one thing today you\'re trying to control that isn\'t yours to control.': 'Observa algo que hoy intentas controlar y que no te corresponde.',
    'Practice saying: "I don\'t know what will happen, and I can handle it."': 'Practica decir: "No sé qué pasará, y puedo manejarlo".',
    'Let one small thing be imperfect today. Notice what happens.': 'Deja que una pequeña cosa sea imperfecta hoy. Observa lo que sucede.',
    'Ask yourself: "What am I really afraid of beneath the need for control?"': 'Pregúntate: "¿A qué le temo realmente bajo esta necesidad de control?".',
    'When you feel the urge to fix something, pause and ask: "Is this mine to fix?"': 'Cuando sientas la necesidad de arreglar algo, haz una pausa y pregúntate: "¿Es mi responsabilidad arreglar esto?"',
    // Archetype Trait
    'Preparation': 'Preparación',
    'Anticipation': 'Anticipación',
    'Difficulty with uncertainty': 'Dificultad con la incertidumbre',
    // Archetype Coaching Note
    'Anxiety likely drives the control. Don\'t challenge the control directly. Help client see what fear it\'s protecting against.': 'La ansiedad probablemente impulsa el control. No lo cuestiones directamente. Ayuda al cliente a ver contra qué miedo te protege.',
    // Archetype Edge
    'You carry a weight that was never yours to hold. The shame you feel often belongs to someone else\'s actions or your younger self\'s circumstances. You can put it down.': 'Llevas un peso que nunca te correspondió. La vergüenza que sientes a menudo se debe a las acciones de otra persona o a las circunstancias de tu yo más joven. Puedes dejarla atrás.',
    // Archetype Challenge
    'Notice when shame arises today. Ask: "Is this actually mine?"': 'Observa cuándo surge la vergüenza hoy. Pregúntate: "¿Esto es realmente mío?"',
    'Write down something you\'re ashamed of. Now write what you\'d say to a friend in the same situation.': 'Escribe algo de lo que te avergüences. Ahora escribe lo que le dirías a un amigo en la misma situación.',
    'Practice saying: "I did the best I could with what I knew then."': 'Practica decir: "Hice lo mejor que pude con lo que sabía entonces".',
    'Notice if you hide parts of yourself. What would happen if they were seen?': 'Observa si ocultas partes de ti mismo. ¿Qué pasaría si las vieran?',
    'Ask: "Whose voice is this shame really in?"': 'Pregúntate: "¿En qué voz se esconde realmente esta vergüenza?".',
    // Archetype Trait
    'Self-concealment': 'Autoocultación',
    'Perfectionism as protection': 'Perfeccionismo como protección',
    'Fear of exposure': 'Miedo a la exposición',
    // Archetype Coaching Note
    'Shame is pre-verbal and often doesn\'t respond to logic. Create safety first. Watch for deflection through humor or intellectualization.': 'La vergüenza es preverbal y a menudo no responde a la lógica. Crea seguridad primero. Presta atención a la desviación mediante el humor o la intelectualización.',
    // Archetype Edge
    'Past betrayals taught you that trust is dangerous. But the walls that protected you then now keep out what you need. Learning to trust is learning to risk. Selectively, wisely, but genuinely.': 'Las traiciones del pasado te enseñaron que la confianza es peligrosa. Pero los muros que te protegieron entonces ahora te impiden acceder a lo que necesitas. Aprender a confiar es aprender a arriesgar. De forma selectiva, sabia, pero genuina.',
    // Archetype Challenge
    'Notice one person today who has been consistent with you. Acknowledge it.': 'Observa hoy a una persona que haya sido constante contigo. Reconócelo.',
    'Practice distinguishing between "this person hurt me" and "all people will hurt me."': 'Practica distinguir entre "esta persona me lastimó" y "todos me lastiman".',
    'Take one small trust risk today. Share something slightly vulnerable.': 'Toma un pequeño riesgo de confianza hoy. Comparte algo ligeramente vulnerable.',
    'Ask yourself: "What would I need to see to trust this person more?"': 'Pregúntate: "¿Qué necesitaría ver para confiar más en esta persona?"',
    'Notice if you\'re waiting for betrayal. What would it mean if it didn\'t come?': 'Observa si estás esperando la traición. ¿Qué significaría si no llegara?',
    // Archetype Trait
    'Vigilance': 'Vigilancia',
    'Self-protection': 'Autoprotección',
    'Difficulty with vulnerability': 'Dificultad con la vulnerabilidad',
    // Archetype Coaching Note
    'Trust rebuilding is slow. Don\'t push vulnerability. Model consistent, boundaried reliability. Breaks in consistency will be magnified.': 'Reconstruir la confianza es lento. No presiones la vulnerabilidad. Modela una confiabilidad consistente y con límites. Las rupturas en la consistencia se magnificarán.',
    // Archetype Edge
    'You see yourself with unusual clarity, but seeing isn\'t doing. Your next step is bridging the gap between recognition and action.': 'Te ves con una claridad inusual, pero ver no es actuar. Tu siguiente paso es cerrar la brecha entre el reconocimiento y la acción.',
    // Archetype Challenge
    'Notice one moment today when you see a pattern but choose not to act. What story do you tell yourself about why?': 'Observa un momento hoy en el que veas un patrón, pero decidas no actuar. ¿Qué te cuentas sobre el porqué?',
    'When you recognize something uncomfortable about yourself today, take one small action within 5 minutes.': 'Cuando hoy reconozcas algo incómodo en ti, realiza una pequeña acción en 5 minutos.',
    'Ask yourself: "What am I protecting by staying aware but inactive?"': 'Pregúntate: "¿Qué estoy protegiendo al permanecer consciente pero inactivo?"',
    'Write down one pattern you\'ve known about for months but haven\'t changed. What would it cost you to change it?': 'Escribe un patrón que conozcas desde hace meses y que no hayas cambiado. ¿Cuánto te costaría cambiarlo?',
    'Today, when you catch yourself analyzing instead of acting, say out loud: "I see this. Now I choose."': 'Hoy, cuando te sorprendas analizando en lugar de actuar, di en voz alta: "Veo esto. Ahora elijo".',
    // Archetype Trait
    'High self-awareness': 'Alta autoconciencia',
    'Analysis paralysis': 'Parálisis por análisis',
    'Knowledge-action gap': 'Brecha entre conocimiento y acción',
    // Archetype Coaching Note
    'Client sees clearly but uses insight as substitute for action. Challenge the intellectualization gently. Ask: "What would you do if you already knew enough?"': 'El cliente ve con claridad, pero usa la introspección como sustituto de la acción. Cuestiona la intelectualización con delicadeza. Pregúntate: "¿Qué harías si ya supieras lo suficiente?".',
    // Archetype Edge
    'You\'ve done the inner work to understand your patterns. Now it\'s time to stop preparing and start doing. Insight without action is just sophisticated avoidance.': 'Has realizado el trabajo interno para comprender tus patrones. Ahora es el momento de dejar de prepararte y empezar a actuar. La introspección sin acción es simplemente una evasión sofisticada.',
    // Archetype Challenge
    'Pick your oldest recognized pattern. What\'s the 2-minute version of addressing it? Do that today.': 'Elige tu patrón reconocido más antiguo. ¿Cuál es la versión de 2 minutos para abordarlo? Hazlo hoy.',
    'Notice when "I need to think about it more" appears. That\'s fear dressed as wisdom.': 'Observa cuándo aparezca "Necesito pensarlo más". Eso es miedo disfrazado de sabiduría.',
    'Ask yourself: "What am I waiting for that will never come?"': 'Pregúntate: "¿Qué estoy esperando que nunca llegará?".',
    'Set a timer for 10 minutes. Work on that thing you\'ve been "about to start" for weeks.': 'Programa un cronómetro de 10 minutos. Trabaja en eso que llevas semanas "a punto de empezar".',
    'Today, replace "I should" with "I will" or "I won\'t." No middle ground.': 'Hoy, reemplaza "Debería" por "Lo haré" o "No lo haré". No hay término medio.',
    // Archetype Trait
    'Deep understanding': 'Comprensión profunda',
    'Endless preparation': 'Preparación infinita',
    'Action resistance': 'Resistencia a la acción',
    // Archetype Coaching Note
    'Knowledge has become a comfort zone. Push toward small, immediate actions. The insight muscle is strong; the action muscle needs building.': 'El conocimiento se ha convertido en una zona de confort. Esfuérzate por realizar acciones pequeñas e inmediatas. El músculo de la comprensión es fuerte; el músculo de la acción necesita fortalecerse.',
    // Archetype Edge
    'You\'ve mastered accepting others, but you might be using that acceptance to avoid looking in your own mirror. Peace that comes from avoidance isn\'t peace.': 'Has dominado la aceptación de los demás, pero podrías estar usando esa aceptación para evitar mirarte en el espejo. La paz que surge de la evasión no es paz.',
    // Archetype Challenge
    'Ask yourself honestly: "What truth about myself am I most afraid to face?"': 'Pregúntate honestamente: "¿Qué verdad sobre mí me da más miedo afrontar?".',
    'Notice today if you redirect conversations away from yourself. What are you protecting?': 'Observa hoy si desvías las conversaciones de ti mismo. ¿Qué estás protegiendo?',
    'When someone gives you feedback, resist explaining. Just say: "Tell me more."': 'Cuando alguien te dé retroalimentación, evita dar explicaciones. Simplemente di: "Cuéntame más".',
    'Write down three things about yourself that you\'ve never told anyone. Why not?': 'Escribe tres cosas sobre ti que nunca le hayas contado a nadie. ¿Por qué no?',
    'Ask someone who loves you: "What do you see in me that I might not see in myself?"': 'Pregúntale a alguien que te quiera: "¿Qué ves en mí que yo no veo?".',
    // Archetype Trait
    'External acceptance': 'Aceptación externa',
    'Self-avoidance': 'Autoevasión',
    'Surface peace': 'Paz superficial',
    // Archetype Coaching Note
    'Client may use acceptance as spiritual bypass. Gently redirect from accepting others to examining self. Watch for discomfort when mirror turns inward.': 'El cliente puede usar la aceptación como una vía de escape espiritual. Con suavidad, redirige la atención de la aceptación de los demás al autoexamen. Observa la incomodidad cuando el espejo se vuelva hacia el interior.',
    // Archetype Edge
    'You\'re doing the rare work of seeing yourself clearly and accepting what you see. Your next edge isn\'t more insight. It\'s deeper integration of what you already know.': 'Estás realizando el excepcional trabajo de verte con claridad y aceptar lo que ves. Tu próxima ventaja no es una mayor comprensión. Es una integración más profunda de lo que ya sabes.',
    // Archetype Challenge
    'Instead of seeking new insights today, spend 15 minutes with one you\'ve already had. What haven\'t you fully lived?': 'En lugar de buscar nuevas perspectivas hoy, dedica 15 minutos a una que ya hayas tenido. ¿Qué no has vivido plenamente?',
    'Ask yourself: "What would my life look like if I fully embodied what I already know?"': 'Pregúntate: "¿Cómo sería mi vida si encarnara plenamente lo que ya sé?"',
    'Pick your most repeated insight. What\'s underneath it? Go one layer deeper.': 'Elige tu perspectiva más recurrente. ¿Qué hay debajo? Profundiza un poco más.',
    'Today, teach someone else one thing you\'ve learned about yourself. Teaching deepens understanding.': 'Hoy, enséñale a alguien algo que hayas aprendido sobre ti mismo. Enseñar profundiza la comprensión.',
    'Notice if you\'re collecting insights like trophies. Growth isn\'t accumulation. It\'s transformation.': 'Observa si estás acumulando perspectivas como si fueran trofeos. El crecimiento no es acumulación. Es transformación.',
    // Archetype Trait
    'Self-awareness': 'Autoconciencia',
    'Self-acceptance': 'Autoaceptación',
    'Integration focus': 'Enfoque en la integración',
    // Archetype Coaching Note
    'Client is doing the work. Help deepen rather than broaden. Watch for insight addiction. Growth for its own sake rather than transformation.': 'El cliente está haciendo el trabajo. Ayuda a profundizar en lugar de ampliar. Estate atento a la adicción a la introspección. Crecimiento por sí mismo en lugar de transformación.',
    // Archetype Edge
    'You\'re building a powerful new habit: paying attention to yourself. Consistency now matters more than depth. Keep showing up.': 'Estás desarrollando un nuevo y poderoso hábito: prestarte atención a ti mismo. La constancia ahora importa más que la profundidad. Sigue presente.',
    // Archetype Challenge
    'Play one game today. You\'re building the muscle of self-reflection.': 'Juega un juego hoy. Estás desarrollando la capacidad de la autorreflexión.',
    'Notice one pattern from this week showing up in real life. Connection is growth.': 'Observa un patrón de esta semana que se refleje en la vida real. La conexión es crecimiento.',
    'Ask yourself: "What surprised me most about myself this week?"': 'Pregúntate: "¿Qué me sorprendió más de mí mismo esta semana?".',
    'Share one insight with someone you trust. Vulnerability accelerates growth.': 'Comparte una introspección con alguien de confianza. La vulnerabilidad acelera el crecimiento.',
    'Before bed, name one thing you learned about yourself today. Make it a ritual.': 'Antes de dormir, nombra algo que hayas aprendido sobre ti hoy. Conviértelo en un ritual.',
    // Archetype Trait
    'Building awareness': 'Desarrollar la conciencia',
    'Consistency focus': 'Enfoque en la constancia',
    'Early insights': 'Introspecciones tempranas',
    // Archetype Coaching Note
    'Client is early in journey. Encourage consistency over depth. Celebrate showing up. Don\'t rush toward wounds they haven\'t discovered yet.': 'El cliente está al principio del camino. Fomenta la constancia sobre la profundidad. Celebra la presencia. No te apresures a abordar heridas que aún no ha descubierto.',
    // Archetype Edge
    'You\'ve started the journey of self-knowledge. Every question you ask yourself creates space for growth. Keep going.': 'Has comenzado el camino del autoconocimiento. Cada pregunta que te haces crea espacio para el crecimiento. Sigue adelante.',
    // Archetype Challenge
    'Notice one moment today when you react instead of respond. What triggered it?': 'Observa un momento hoy en el que reaccionas en lugar de responder. ¿Qué lo desencadenó?',
    'Ask yourself: "What pattern am I in right now?" Do this three times today.': 'Pregúntate: "¿En qué patrón estoy ahora mismo?" Haz esto tres veces hoy.',
    'Practice pausing for 3 breaths before responding to anything that triggers you.': 'Practica hacer una pausa de tres respiraciones antes de responder a cualquier cosa que te desencadene.',
    'Write down one question about yourself that you don\'t know the answer to yet.': 'Escribe una pregunta sobre ti cuya respuesta aún no sepas.',
    'At the end of today, ask: "Who was I today? Who do I want to be tomorrow?"': 'Al final del día, pregúntate: "¿Quién fui hoy? ¿Quién quiero ser mañana?".',
    // Archetype Trait
    'Beginning journey': 'El camino comienza',
    'Open curiosity': 'Curiosidad abierta',
    'Growth potential': 'Potencial de crecimiento',
    // Archetype Coaching Note
    'Profile doesn\'t show clear patterns yet. Stay curious. Ask open questions. Let their dominant themes emerge organically.': 'El perfil aún no muestra patrones claros. Mantén la curiosidad. Haz preguntas abiertas. Deja que sus temas dominantes emerjan orgánicamente.',

    // --- FAQs (Roger Walter) ---
    // FAQ Question
    '? What will this help me with?': '? ¿En qué me ayudará esto?',
    // FAQ Answer
    '3 things people get from playing: ?? Results in life Better relationships, career decisions, and understanding of why things keep happening': '3 cosas que la gente obtiene al jugar: ?? Resultados en la vida: Mejores relaciones, mejores decisiones profesionales y comprensión de por qué las cosas siguen sucediendo.',
    // FAQ Question
    '?? How do I play?': '?? ¿Cómo juego?',
    // FAQ Answer
    '3 game modes, one goal: see your patterns. ?? Mirror Game Self-reflection. "That\'s Me" or "That\'s Not Me", no right or wrong, just honest recognition.': '3 modos de juego, un objetivo: ver tus patrones. ?? Juego del Espejo: Autorreflexión. "Ese soy yo" o "Ese no soy yo", sin correcto ni incorrecto, solo reconocimiento honesto.',
    // FAQ Question
    '?? What wounds does this address?': '?? ¿Qué heridas aborda?',
    // FAQ Answer
    'This game was built to help heal real human pain. Core Wounds Addiction  Abuse  Self-harm  Not being enough  Not belonging  Loneliness': 'Este juego fue creado para ayudar a sanar el dolor humano real. Heridas Centrales: Adicción  Abuso  Autolesión  Insuficiencia  Sentimiento de no pertenecer  Soledad',
    // FAQ Question
    '?? What are the 19 Archetypes?': '¿Qué son los 19 Arquetipos?',
    // FAQ Answer
    'Based on your gameplay patterns, you\'re matched with a growth personality. ? This is a snapshot, not a permanent label. As you grow and transform, your archetype evolves with you.': 'Según tus patrones de juego, se te asigna una personalidad de crecimiento. ? Esto es solo una instantánea, no una etiqueta permanente. A medida que creces y te transformas, tu arquetipo evoluciona contigo.',
    // FAQ Question
    '?? What is the 7 Levels framework?': '¿Qué es el marco de los 7 Niveles?',
    // FAQ Answer
    'The 7 Levels of Self maps human growth across 7 dimensions. You can\'t skip levels. Each must be mastered before climbing higher. 1. Individual: Self for yourself': 'Los 7 Niveles del Ser mapean el crecimiento humano en 7 dimensiones. No puedes saltarte niveles. Cada uno debe dominarse para ascender. 1. Individual: Ser para ti mismo.',
    // FAQ Question
    '? How do XP, coins & streaks work?': '? ¿Cómo funcionan la XP, las monedas y las rachas?',
    // FAQ Answer
    'XP & Leveling: Every answer earns XP. 750 XP = 1 level. Level Unlocks: Lvl 2 ? Agreement Game + Family theme Lvl 3 ? Groups theme Lvl 5 ? Community theme Lvl 7 ? Society theme Lvl 10 ? World theme Lvl 15 ? Generations theme ?? Coins: Earn 25% of XP as coins. Redeem in the Reward Shop for discounts or save up for a FREE coaching session! ?? Streaks: Complete Worldwide Challenge daily. Miss a day = reset. ? Combos: Consecutive correct answers = extra XP (5x = +10, 10x = +20).': 'XP y Nivelación: Cada respuesta otorga XP. 750 XP = 1 nivel. Desbloqueos de niveles: Nvl 2 ? Juego de Acuerdo + Tema Familiar Nvl 3 ? Tema Grupos Nvl 5 ? Tema Comunidad Nvl 7 ? Tema Sociedad Nvl 10 ? Tema Mundo Nvl 15 ? Tema Generaciones ?? Monedas: Gana el 25% de XP en monedas. ¡Canjéalas en la Tienda de Recompensas por descuentos o ahorra para una sesión de entrenamiento GRATIS! ?? Rachas: Completa el Desafío Mundial a diario. Si fallas un día, se reinicia. ? Combos: Respuestas correctas consecutivas = XP extra (5x = +10, 10x = +20).',
    // FAQ Question
    '?? What does "Acceptance ? Agreement" mean?': '?? ¿Qué significa "Aceptación ? Acuerdo"?',
    // FAQ Answer
    'This is the core philosophy. Acceptance = acknowledging reality as it is. Agreement = endorsing it. You can accept that something IS without agreeing it SHOULD BE . Acceptance is the first step to change. You can\'t transform what you won\'t acknowledge.': 'Esta es la filosofía central. Aceptación = reconocer la realidad tal como es. Acuerdo = respaldarla. Puedes aceptar que algo ES sin estar de acuerdo con que DEBERÍA SER. La aceptación es el primer paso para cambiar. No puedes transformar lo que no reconoces.',
    // FAQ Question
    '?? What are Insights & Deep Insights?': '?? ¿Qué son Insights y Deep Insights?',
    // FAQ Answer
    '?? Insights: Every pattern you recognize gets saved. Tap the Insights stat to review them anytime. ?? Deep Insights: After 10 games, unlock a personalized summary showing:  Your growth pattern & self-awareness scores  Recurring themes in your responses  Your current archetype & daily challenges  Coaching notes based on your patterns': '?? Insights: Cada patrón que reconoces se guarda. Toca la estadística de Insights para revisarlos cuando quieras. ?? Deep Insights: Después de 10 partidas, desbloquea un resumen personalizado que muestra:  Tu patrón de crecimiento y puntuaciones de autoconciencia  Temas recurrentes en tus respuestas  Tu arquetipo actual y desafíos diarios  Notas de coaching basadas en tus patrones',
    // FAQ Question
    '?? Can I work with a coach?': '?? ¿Puedo trabajar con un coach?',
    // FAQ Answer
    'Yes! Go deeper with 1-on-1 coaching. Arthur Palyan $900': '¡Sí! Profundiza con coaching individual. Arthur Palyan $900',
    // FAQ Question
    'Who is Lily?': '¿Quién es Lily?',
    // FAQ Answer
    'Lily is your self-awareness coach. She lives inside the game and reads your actual gameplay patterns: what you recognize, what you avoid, which themes keep showing up. Then she helps you understand what those patterns mean. What Lily can do:  Analyze your patterns across all 7 levels  Explain why the same themes keep appearing  Suggest specific exercises for your patterns  Help you prepare for a session with a human coach  Answer questions about the 7 Levels framework': 'Lily es tu coach de autoconciencia. Vive dentro del juego y analiza tus patrones de juego: qué reconoces, qué evitas, qué temas recurrentes. Luego te ayuda a comprender el significado de esos patrones. Lo que Lily puede hacer:  Analizar tus patrones en los 7 niveles  Explicar por qué los mismos temas persisten  Sugerir ejercicios específicos para tus patrones  Ayudarte a prepararte para una sesión con un coach  Responder preguntas sobre el marco de los 7 niveles',
    // FAQ Question
    '?? What is Breakthrough Work?': '¿Qué es el Trabajo de Avance?',
    // FAQ Answer
    '9 exercises to shift perspective and move stuck energy. Three Levels:  STARTER Build the habit: Breathwork, Center Tap, Daily Check-In, Power of Context  INTERMEDIATE Shift perspective: "Have To ? Get To ? Blessed To", Blessings Letter  DEEP WORK Move stuck energy: Forgiveness Letter, Most Painful Memory, Ultimate Acknowledgment': '9 ejercicios para cambiar de perspectiva y liberar energía estancada. Tres niveles:  INICIAL: Desarrolla el hábito: Respiración, Toque Central, Registro Diario, Poder del Contexto  INTERMEDIO: Cambiar de perspectiva: "Tengo que ? Logro ? Bendecido", Carta de Bendiciones  TRABAJO PROFUNDO: Liberar energía estancada: Carta de Perdón, Recuerdo Más Doloroso, Reconocimiento Máximo',
    // FAQ Question
    '?? How can I partner with you?': '?? ¿Cómo puedo colaborar contigo?',
    // FAQ Answer
    'Work with an Award-Winning Life Coach. I\'m looking for coaches, translators, affiliates, and connectors. Google "Arthur Palyan" or "Level Up Levels of Self" to see results.  COACHES Teach the 7 Levels of Self framework. Help people break patterns. Work remotely.  TRANSLATORS Bring the game to Spanish, French, Portuguese, Tagalog, Hindi, Arabic, or other languages. I handle tech, marketing, and advertising.  AFFILIATES Refer clients or coaches. No coaching required.  CONNECTORS Know someone in education, corporate, rehab, government, or investment? One introduction can change everything.': 'Trabaja con un Coach de Vida Galardonado. Busco coaches, traductores, afiliados y conectores. Busca en Google "Arthur Palyan" o "Sube de Nivel" para ver resultados.  COACHES: Enseña el marco de los 7 Niveles del Ser. Ayuda a las personas a romper patrones. Trabaja a distancia.  TRADUCTORES: Traduce el juego al español, francés, portugués, tagalo, hindi, árabe y otros idiomas. Me encargo de la tecnología, el marketing y la publicidad.  AFILIADOS: Recomienda clientes o coaches. No se requiere coaching.  CONECTORES ¿Conoces a alguien en el ámbito educativo, empresarial, de rehabilitación, gubernamental o de inversiones? Una sola presentación puede cambiarlo todo.',
    // FAQ Question
    '?? What is the Reward Shop?': '¿Qué es la Tienda de Recompensas?',
    // FAQ Answer
    'Turn your coins into real rewards. Discounts & Sessions:  500 20% Off Workshop  1,000 20% Off Coaching  5,000 50% Off Coaching  10,000 FREE Coaching Session': 'Convierte tus monedas en recompensas reales. Descuentos y sesiones:  500 con 20% de descuento en taller  1000 con 20% de descuento en coaching  5000 con 50% de descuento en coaching  10 000 sesiones de coaching GRATIS',
    // FAQ Question
    '?? Workshops & Retreats': 'Talleres y retiros',
    '?? Free Monthly Mastermind': 'Mastermind mensual gratuito',
    // FAQ Answer
    'First Sunday of every month , join live for free! What happens:  Focus on Individual Self (Level 1)  Real conversations, no fluff  Connect with others on the same path  English and Armenian sessions available': '¡El primer domingo de cada mes, únete en vivo gratis! Qué incluye:  Enfoque en el yo individual (Nivel 1)  Conversaciones reales, sin rodeos  Conecta con otras personas que comparten tu camino  Sesiones disponibles en inglés y armenio',
    // FAQ Question
    '?? Why should I share this?': '¿Por qué debería compartir esto?',
    // FAQ Answer
    'Because someone you know needs this. Who in your life is stuck in the same patterns? Struggling with boundaries? Carrying grief or shame they won\'t talk about? This game helps people see themselves without judgment. It\'s free , private , and takes 2 minutes to play. Instagram Facebook X WhatsApp': 'Porque alguien que conoces lo necesita. ¿Quién en tu vida sigue los mismos patrones? ¿Tiene dificultades para establecer límites? ¿Lleva un dolor o una vergüenza de los que no quiere hablar? Este juego ayuda a las personas a verse a sí mismas sin juzgarse. Es gratis, privado y se juega en 2 minutos. Instagram Facebook X WhatsApp',
    // FAQ Question
    '?? Is my data private?': '¿Son privados mis datos?',
    // FAQ Answer
    'Yes. All data is stored locally on your device only. Nothing is sent to any server. Clearing browser data will reset your progress.': 'Sí. Todos los datos se almacenan localmente en tu dispositivo. No se envía nada a ningún servidor. Borrar los datos del navegador restablecerá tu progreso.',
    // FAQ Question
    '?? Is this a substitute for therapy?': '¿Es esto un sustituto de la terapia?',
    // FAQ Answer
    'No. This game is for self-reflection and personal growth, not therapy, diagnosis, or treatment. ?? Crisis Resources  988 Suicide & Crisis Lifeline (US)  Text HOME to 741741 Crisis Text Line  findahelpline.com International': 'No. Este juego es para la autorreflexión y el crecimiento personal, no para terapia, diagnóstico ni tratamiento. ?? Recursos de Crisis  988 Suicide & Crisis Lifeline (EE. UU.)  Envía HOME al 741741 Crisis Text Line  findahelpline.com Internacional',
    // FAQ Question
    '?? Settings & Options': '?? Ajustes y opciones',
    // FAQ Answer
    '?? Hard Mode 5s timer on ALL games OFF': '?? Modo difícil, temporizador de 5 segundos en todos los juegos desactivado',
    // FAQ Question
    '?? Music': '?? Música',
    // FAQ Answer
    'Listen to our songs or play your own. Game music by The Palyans , the family behind Level Up': 'Escucha nuestras canciones o toca las tuyas. Música de The Palyans, la familia detrás de Level Up',
    // FAQ Question
    '?? Keyboard shortcuts': '?? Atajos de teclado',
    // FAQ Answer
    'Home M Mirror A Agreement D Daily ? Help T Theme': 'Inicio M Espejo A Acuerdo D Diario ? Ayuda T Tema',
    // FAQ Question
    '? New Features': '? Nuevas funciones',
    // FAQ Answer
    '?? Light & Dark Theme Switch between dark and light mode! Tap "See Your Patterns" on the home screen, press T on keyboard, or use the toggle below.': '?? Tema claro y oscuro: ¡Cambia entre el modo oscuro y claro! Toca "Ver tus patrones" en la pantalla de inicio, presiona T en el teclado o usa el interruptor de abajo.',
    // FAQ Question
    '?? Settings': '?? Ajustes',
    // FAQ Answer
    '?? Light Theme Switch to a warm, paper-like look': '?? Tema claro: Cambia a un aspecto cálido, similar al papel.',

    // --- Modals & Popups (Roger Walter) ---
    // Modal: iOS Install
    'Add Level Up to Home Screen': 'Añadir Level Up (Subir de Nivel) a la Pantalla de Inicio',
    'Tap the Share button below': 'Pulsa el botón Compartir a continuación',
    'Scroll and tap "Add to Home Screen"': 'Desplázate y toca "Añadir a la Pantalla de Inicio"',
    'in the top right': 'en la esquina superior derecha',
    // Modal: Feedback
    'Reflection': 'Reflexión',
    'Your Insights': 'Tus Perspectivas',
    // Modal: Insights
    'Practice acceptance': 'Practica la Aceptación',
    'Both games shuffled': 'Ambos juegos barajados',
    'collected': 'recopilados',
    // Modal: Pattern
    'Your Growth Profile': 'Tu Perfil de Crecimiento',
    // Modal: Deep Insight
    'Play more games to generate personalized analysis!': '¡Juega más juegos para generar análisis personalizados!',
    // Modal: Founder
    'Meet Arthur Palyan': 'Conoce a Arthur Palyan',
    'Creator of the 7 Levels of Self': 'Creador de los 7 Niveles del Ser',
    '"I built this because I watched brilliant people destroy their lives solving the wrong level. The pattern you can\'t see is the one running your life."': 'Creé esto porque vi a personas brillantes destruir sus vidas resolviendo el nivel equivocado. El patrón que no puedes ver es el que gobierna tu vida.',
    'After 10 years of deep transformational work (Landmark, MITT, Insight Seminars, Ancestral Medicine), Arthur discovered that most growth frameworks miss the same thing: they don\'t show you WHERE your pattern lives.': 'Tras 10 años de profundo trabajo de transformación (Landmark, MITT, Insight Seminars, Ancestral Medicine), Arthur descubrió que la mayoría de los marcos de crecimiento pasan por alto lo mismo: no te muestran DÓNDE reside tu patrón.',
    'Training & Experience': 'Formación y Experiencia',
    // Modal: XP Details
    'XP Breakdown': 'Desglose de XP',
    'Ways to earn XP:': 'Formas de obtener XP:',
    'Mirror Game: 15 XP per reflection': 'Juego de Espejos: 15 XP por reflejo',
    'Agreement Game: 10 XP (correct) / 2 XP (wrong)': 'Juego de Acuerdos: 10 XP (correcto) / 2 XP (incorrecto)',
    'Worldwide Challenge: 12 XP (correct) / 2 XP (wrong)': 'Desafío Mundial: 12 XP (correcto) / 2 XP (incorrecto)',
    'Perfect Game: +25 bonus XP': 'Juego Perfecto: +25 XP extra',
    'Combo Bonuses: 5x=+10, 10x=+20, 15x=+30, 20x=+50 XP': 'Bonificaciones de Combo: 5x=+10, 10x=+20, 15x=+30, 20x=+50 XP',
    // Modal: Challenge
    'Stat Details': 'Detalles de Estadísticas',
    'Ready to Transform?': '¿Listo para Transformarte?',
    'Commit to 15-20 minutes daily.': 'Comprométete a jugar de 15 a 20 minutos diarios.',
    '5 games per day. 30 days.': '5 partidas al día. 30 días.',
    'Start My Challenge': 'Comienza mi Desafío',
    // Modal: Coin Shop
    'Reward Shop': 'Tienda de recompensas',
    'coins earned': 'Monedas ganadas',
    'Earn coins every game you play. Redeem for real rewards!': 'Gana monedas con cada juego. ¡Canjéalas por recompensas reales!',
    'Coin Rewards': 'Recompensas de monedas',
    'FREE Coaching Session': 'Sesión de coaching GRATIS',
    'Complete 1,000 breakthroughs to unlock': 'Completa 1000 avances para desbloquear',
    '20% Off Workshop': '20% de descuento en el taller',
    'Your first reward!': '¡Tu primera recompensa!',
    '20% Off Coaching': '20% de descuento en coaching',
    '1-on-1 session ($180 off)': 'Sesión individual ($180 de descuento)',
    '50% Off Coaching': '50% de descuento en coaching',
    '1-on-1 session ($450 off)': 'Sesión individual ($450 de descuento)',
    'Any Level Up workshop': 'Taller de Level Up',
    '1-on-1 with Arthur ($900 value)': 'Sesión individual con Arthur (valor de $900)',
    '10 days full access': 'Acceso completo por 10 días',
    'Level Access Passes': 'Pases de acceso de nivel',
    'Redeem': 'Canjear',
    // Modal: Reset
    'Reset All Progress?': '¿Restablecer todo el progreso?',
    'This will permanently delete:': 'Esto eliminará permanentemente:',
    'All XP and levels': 'Toda la experiencia y los niveles',
    'Your streak': 'Tu racha',
    'All collected insights': 'Toda la información recopilada',
    'Your pattern profile': 'Tu perfil de patrón',
    'Cached files (forces fresh download)': 'Archivos en caché (obliga a una nueva descarga)',
    'This cannot be undone.': 'Esto no se puede deshacer.',
    // Modal: Milestone
    '10 Games Played!': '¡10 juegos jugados!',
    'Share your progress and challenge your friends to discover their patterns!': '¡Comparte tu progreso y reta a tus amigos a descubrir sus patrones!',
    'Maybe Later': 'Quizás más tarde',
    'Share Now': 'Comparte ahora',
    // Modal: Break
    'You\'ve been reflecting deeply': 'Has estado reflexionando profundamente.',
    'Take a moment to breathe.': 'Tómate un momento para respirar.',
    'This work isn\'t meant to be rushed.': 'Este trabajo no debe hacerse con prisa.',
    'What you\'ve uncovered today will still be here tomorrow.': 'Lo que has descubierto hoy seguirá ahí mañana.',
    'Take a Break': 'Tómate un descanso',
    'Keep Going': 'Sigue adelante',
    // Modal: Weekly
    'Your Week in Patterns': 'Tu semana en patrones',
    'Scenarios explored': 'Escenarios explorados',
    'New insights collected': 'Nuevas perspectivas recopiladas',
    'Acceptance rate': 'Tasa de aceptación',
    'Your growth theme this week': 'Tu tema de crecimiento esta semana',
    // Modal: Share Card
    'My Pattern': 'Mi patrón',
    'What\'s your pattern?': '¿Cuál es tu patrón?',
    'Download Level Up': 'Descargar Level Up',
    // Modal: Store
    'Choose your platform': 'Elige tu plataforma',
    'App Store': 'App Store',
    'iPhone & iPad': 'iPhone y iPad',
    'Google Play': 'Google Play',
    'Also available at': 'También disponible en',
    // Modal: Coaching
    'Meet Our Coaches': 'Conoce a nuestros coaches',
    'Transform insights into lasting change': 'Transforma tus conocimientos en cambios duraderos',
    '/session': '/sesión',
    'Book Now': 'Reserva ahora',
    'Here\'s what I know after watching thousands of people play this game: The patterns you keep seeing aren\'t random. They\'re connected. And seeing them is the first step, but it\'s not the last.': 'Esto es lo que sé después de ver a miles de personas jugar a este juego: Los patrones que sigues viendo no son aleatorios. Están conectados. Y verlos es el primer paso, pero no el último.',
    'You\'ve done the work of seeing. The next level is having someone see you. Someone who can reflect back what you can\'t see yourself.': 'Ya has hecho el trabajo de ver. El siguiente nivel es que alguien te vea. Alguien que pueda reflejar lo que tú mismo no puedes ver.',
    'This isn\'t the end of your journey. It\'s the beginning.': 'Este no es el final de tu viaje. Es el principio.',
    // Modal: Team
    'Partner With Me': 'Asóciate conmigo',
    'Work with an Award-Winning Life Coach': 'Trabaja con un coach de vida galardonado',
    'I\'m looking for coaches, translators, affiliates, and connectors.': 'Busco coaches, traductores, afiliados y conectores.',
    'to see results.': 'para ver resultados.',
    'Teach the 7 Levels of Self framework. Help people break patterns. Work remotely.': 'Enseña el marco de los 7 niveles del yo. Ayuda a las personas a romper patrones. Trabaja a distancia.',
    'TRANSLATORS': 'TRADUCTORES',
    'Bring the game to Spanish, French, Portuguese, Tagalog, Hindi, Arabic, or other languages. I handle tech, marketing, and deployment.': 'Traduce el juego al español, francés, portugués, tagalo, hindi, árabe y otros idiomas. Me encargo de la tecnología, el marketing y la implementación.',
    // Modal: Breakthrough
    'Deep Work': 'Trabajo profundo',
    '9 exercises to shift perspective and move stuck energy': '9 ejercicios para cambiar de perspectiva y liberar energía estancada',
    'STARTER LEVEL': 'NIVEL INICIAL',
    'INTERMEDIATE LEVEL': 'NIVEL INTERMEDIO',
    'DEEP WORK LEVEL': 'NIVEL TRABAJO PROFUNDO',
    // Modal: Agreement Intro
    'New Game Unlocked!': '¡Nuevo juego desbloqueado!',
    'You\'ve been seeing yourself in Mirror Mode.': 'Te has estado viendo en Modo Espejo.',
    'Now it\'s time to practice responding differently.': 'Ahora es momento de practicar cómo responder de forma diferente.',
    'Same Situation, Two Choices': 'Misma situación, dos opciones',
    'Each scenario shows a moment from life.': 'Cada escenario muestra un momento de la vida.',
    'You choose:': 'Tú eliges:',
    'Accept (see reality as it is)': 'Aceptar (ver la realidad tal como es)',
    'Judge (resist what is)': 'Juzgar (resistir a lo que es)',
    'Key insight: Acceptance does not equal Agreement.': 'Consideración clave: La aceptación no es sinónimo de acuerdo.',
    'You can accept that something IS without agreeing that it SHOULD be.': 'Puedes aceptar que algo ES sin estar de acuerdo con que DEBERÍA ser.',
    'Why This Matters': 'Por qué esto importa',
    'Judgment is your brain\'s default. It feels protective.': 'El juicio es la predisposición de tu cerebro. Se siente protector.',
    'But judgment blocks possibility.': 'Pero el juicio bloquea las posibilidades.',
    'When you practice acceptance, you create space for change.': 'Cuando practicas la aceptación, creas espacio para el cambio.',
    'Let\'s Play!': '¡A jugar!',
    // Modal: Music
    'Choose Your Music': 'Elige tu música',
    'Game Music': 'Música del juego',
    'The Palyans - original soundtrack': 'The Palyans - banda sonora original',
    'Listen on Spotify': 'Escúchala en Spotify',
    'Listen on Apple Music': 'Escúchala en Apple Music',
    // Popup: Level Up
    'LEVEL UP!': '¡SUBE DE NIVEL!',
    'You\'re now Level': 'Ya estás de nivel',
    // Popup: Login
    'Daily Login Bonus!': '¡Bonificación diaria por inicio de sesión!',
    'Tap to claim': 'Toca para reclamar',

    // --- Exercises (Roger Walter) ---
    // Exercise
    'Grounding - 2-5 min': 'Conexión a tierra - 2-5 min',
    'Anytime you need help focusing or getting grounded, listen to your breath. Slow down the breathing. Listen as you pull air in and push air out. That is your tool. Use it for 2 min minimum.': 'Siempre que necesites ayuda para concentrarte o conectar a tierra, escucha tu respiración. Disminuye la velocidad. Escucha cómo inhalas y exhalas. Esa es tu herramienta. Úsala durante al menos 2 min.',
    'Physical/Qigong - 1-3 min': 'Ejercicios físicos/Qigong - 1-3 min',
    'Tap your core/stomach with a closed fist, thumbs inside. Best with music. Gets you connected and grounded. A quick reset.': 'Toca tu abdomen/estómago con el puño cerrado, con los pulgares hacia adentro. Mejor con música. Te conecta y te conecta a tierra. Un reinicio rápido.',
    'Reflection/Acceptance - 5 min': 'Reflexión/Aceptación - 5 min',
    'Close your eyes at the start or end of each day. Ask yourself: "Was there anything I needed to say that I didn\'t get to say today?"': 'Cierra los ojos al principio o al final de cada día. Pregúntate: "¿Hubo algo que necesitara decir que no pude decir hoy?".',
    'This is a practice of acceptance. Even when you don\'t agree with yourself, you can count on you to hear you, get you, feel you, and never leave you.': 'Esta es una práctica de aceptación. Incluso cuando no estés de acuerdo contigo mismo, puedes contar con que te escucharás, te comprenderás, te sentirás y nunca te abandonarás.',
    'Mindset - 5-10 min': 'Mentalidad - 5-10 min',
    'Take your to-do list. Rewrite every item from "I have to..." to "I get to..." Then from "I get to..." to "I\'m blessed to..." Watch how your energy shifts.': 'Toma tu lista de tareas. Reescribe cada elemento, desde "Tengo que..." hasta "Puedo...". Luego, desde "Puedo..." hasta "Tengo la suerte de...". Observa cómo cambia tu energía.',
    'Writing + Mirror - 30-45 min': 'Escritura + Espejo - 30-45 min',
    'Write a letter to yourself. Start with "I forgive me for..." and keep writing until there is nothing left. Then "I forgive [name] for..." for anyone else.': 'Escríbete una carta. Empieza con "Me perdono por..." y sigue escribiendo hasta que no quede nada. Luego, "Perdono a [nombre] por..." para cualquier otra persona.',
    'When done, read it to yourself in the mirror 4 times. It will loosen its grip on you and move any stuck energy out of your body.': 'Al terminar, léela en el espejo cuatro veces. Te liberará y liberará cualquier energía estancada de tu cuerpo.',
    'Important: Language matters. If something happened to you as a child, even if you write it in English, read it in your childhood language. It hits differently.': 'Importante: El lenguaje importa. Si algo te sucedió de niño, incluso si lo escribes en inglés, léelo en tu idioma de infancia. Te impacta de forma diferente.',
    'This is deep work. Please be patient with yourself and go all out like you do for everyone else.': 'Esto requiere un trabajo profundo. Ten paciencia contigo mismo y esfuérzate al máximo, como lo haces con los demás.',
    'Writing + Gratitude - 15-20 min': 'Escritura + Gratitud - 15-20 min',
    'Write to yourself first (always). Start with "The blessings I see in you are..." Go all out until there is nothing left.': 'Escríbete primero a ti mismo (siempre). Empieza con "Las bendiciones que veo en ti son...". Esfuérzate al máximo hasta que no quede nada.',
    'Note: No mirror reading. This is about self-trust and gratitude.': 'Nota: No se permite leerse en el espejo. Se trata de confianza en uno mismo y gratitud.',
    'Writing + Mirror - 30-60 min': 'Escritura + Espejo - 30-60 min',
    'Start with "My most painful memory is..." Write until there is nothing left. Read to yourself in mirror 4 times. Use your childhood language if applicable.': 'Empieza con "Mi recuerdo más doloroso es...". Escribe hasta que no quede nada. Lee en el espejo cuatro veces. Usa el lenguaje de tu infancia, si es posible.',
    'Same deep work guidance. Be patient, go all out for yourself.': 'Misma guía de trabajo profundo. Sé paciente, esfuérzate al máximo.',
    'Movement/Presence - 10-30 min': 'Movimiento/Presencia - 10-30 min',
    'Stand. Begin to raise your arms from the sides, palms toward you. Halfway up, switch your palms up. Imagine pulling energy from the earth.': 'De pie. Empieza a levantar los brazos a los lados, con las palmas hacia ti. A mitad de camino, cambia las palmas hacia arriba. Imagina que extraes energía de la tierra.',
    'The Secret: Move at half the speed you think you need. Then keep reducing, slower and slower. One bow can take 30 minutes.': 'El secreto: Muévete a la mitad de la velocidad que crees que necesitas. Luego, ve reduciendo la velocidad, cada vez más despacio. Una reverencia puede durar 30 minutos.',
    'You\'ll sweat doing just one. It opens up a whole new world you never knew existed.': 'Te costará mucho hacer solo uno. Te abrirá las puertas a un mundo completamente nuevo que ni siquiera sabías que existía.',
    // Exercise Button
    'Mark Complete (+25 XP)': 'Marcar como completado (+25 XP)',
    'Mark Complete (+50 XP)': 'Marcar como completado (+50 XP)',
    'Mark Complete (+100 XP)': 'Marcar como completado (+100 XP)',
    'Start Breakthrough Work': 'Comenzar a trabajar para un avance significativo',

    // --- Game Data (Roger Walter) ---
    // Modal: Deep Insight
    'Play more games to generate personalized analysis!': '¡Juega más juegos para generar análisis personalizados!',
    // Deep Insight Text
    'This one hits deep.': 'Este da en el clavo.',
    'It\'s exhausting to carry. What if you already are?': 'Es agotador de llevar. ¿Y si ya lo estás?',
    'Feeling alone even in a crowd? That\'s about the walls you\'ve built, not the people around you.': '¿Te sientes solo incluso entre la multitud? Eso tiene que ver con los muros que has construido, no con la gente que te rodea.',
    'Fear is just excitement without breath. What you\'re afraid of is also what you\'re drawn to.': 'El miedo es solo emoción sin aliento. Lo que te da miedo es también lo que te atrae.',
    'Love and pain got tangled up somewhere. They don\'t have to be.': 'El amor y el dolor se enredaron en algún lugar. No tienen por qué estarlo.',
    'The mask worked for a while. But the person underneath is tired of not being seen. They deserve to exist.': 'La máscara funcionó por un tiempo. Pero la persona que está debajo está cansada de no ser vista. Merece existir.',
    'Control is a trauma response. What felt like safety became a cage. Letting go isn\'t losing control - it\'s finding freedom.': 'El control es una respuesta al trauma. Lo que parecía seguridad se convirtió en una jaula. Soltar no es perder el control, es encontrar la libertad.',
    'Perfectionism isn\'t excellence. It\'s fear wearing a suit.': 'El perfeccionismo no es excelencia. Es miedo disfrazado.',
    'Trust was broken, so you stopped giving it. But walls that keep pain out also keep connection out.': 'Se rompió la confianza, así que dejaste de darla. Pero los muros que mantienen alejado el dolor también impiden la conexión.',
    'Boundaries aren\'t walls. They\'re doors. You get to choose who has a key.': 'Los límites no son muros. Son puertas. Puedes elegir quién tiene la llave.',
    'The fear of being left often makes us leave first. But you can stay.': 'El miedo a que nos abandonen a menudo nos hace irnos primero. Pero tú puedes quedarte. Aprendiste que ser querido significaba estar a salvo. Pero el precio fue perderte a ti mismo. Hora de volver a casa.',
    'You learned that being liked meant being safe. But the cost was losing yourself. Time to come home.': 'Aprendiste que ser querido significaba estar a salvo. Pero el precio fue perderte a ti mismo. Es hora de volver a casa.',
    'Numbing the pain also numbs the joy. You can feel both.': 'Adormecer el dolor también ahoga la alegría. Puedes sentir ambos.',
    'This pattern keeps showing up for a reason. It\'s trying to teach you something.': 'Este patrón sigue apareciendo por una razón. Intenta enseñarte algo.',
    'The things we recognize fastest are often the things we\'ve lived the longest.': 'Las cosas que reconocemos más rápido suelen ser las que hemos vivido durante más tiempo.',
    'Awareness is the first step. You just took it.': 'La consciencia es el primer paso. Lo acabas de dar.',
    'What you notice in others often lives in you too. That\'s not a flaw, it\'s a mirror.': 'Lo que notas en los demás a menudo también vive en ti. No es un defecto, es un espejo.',
    'This insight found you. Now what will you do with it?': 'Esta percepción te encontró. ¿Y ahora qué harás con ella?',
    // Level Insight
    'Your relationship with yourself is your strongest foundation. You\'ve built solid self-awareness.': 'Tu relación contigo mismo es tu base más sólida. Has desarrollado una sólida autoconciencia.',
    'Your patterns keep circling back to Level 1your relationship with yourself. This is where your real work is. Everything else builds on this.': 'Tus patrones siguen regresando al Nivel 1: tu relación contigo mismo. Aquí es donde está tu verdadero trabajo. Todo lo demás se basa en esto.',
    'What daily practice for yourself have you been neglecting?': '¿Qué práctica diaria para ti has estado descuidando?',
    'You\'ve done significant work on your closest relationships. Family patterns are becoming clear.': 'Has trabajado mucho en tus relaciones más cercanas. Los patrones familiares se están volviendo más claros.',
    'Your family patterns are asking for attention. What you learned about love, conflict, and closeness came from here. Healing here heals everything above.': 'Tus patrones familiares te piden atención. Lo que aprendiste sobre el amor, el conflicto y la cercanía provino de aquí. Sanar aquí sana todo lo anterior.',
    'Who in your immediate family needs a real conversation with you?': '¿Quién en tu familia inmediata necesita una conversación seria contigo?',
    'You navigate group dynamics with increasing awareness. You see how you show up in teams.': 'Te desenvuelves en dinámicas de grupo con mayor consciencia. Ves cómo te presentas en equipo.',
    'Group situations reveal your patternsdo you hide, perform, dominate, or disappear? The groups in your life are mirrors.': 'Las situaciones grupales revelan tus patrones: ¿te escondes, actúas, dominas o desapareces? Los grupos en tu vida son espejos.',
    'In your closest group, are you being yourself or playing a role?': 'En tu grupo más cercano, ¿eres tú mismo o desempeñas un papel?',
    'You understand your role in community and contribute meaningfully.': 'Comprendes tu rol en la comunidad y contribuyes significativamente.',
    'Where do you belong beyond your personal relationships? Your community roleor lack of oneis speaking to you.': '¿En dónde perteneces más allá de tus relaciones personales? Tu rol en la comunidad, o la falta de él, te habla.',
    'What community are you part of? What role do you play there?': '¿De qué comunidad formas parte? ¿Qué rol desempeñas allí?',
    'You see society clearlynot as you wish it were, but as it is. This clarity is power.': 'Ves la sociedad con claridad, no como desearías que fuera, sino como es. Esta claridad es poder.',
    'Your relationship with societygovernment, systems, culturecreates friction. Acceptance doesn\'t mean agreement. What reality are you fighting instead of seeing?': 'Tu relación con la sociedad (gobierno, sistemas, cultura) genera fricción. Aceptar no significa estar de acuerdo. ¿Contra qué realidad luchas en lugar de ver?',
    'What about your society are you refusing to accept as reality?': '¿Qué aspectos de tu sociedad te niegas a aceptar como realidad?',
    'You feel connected to humanity beyond your borders. Your circle of concern has expanded.': 'Te sientes conectado con la humanidad más allá de tus fronteras. Tu círculo de preocupaciones se ha expandido.',
    'The world beyond your immediate life is calling for your attention. How connected do you feel to what happens outside your bubble?': 'El mundo más allá de tu vida inmediata reclama tu atención. ¿Cuán conectado te sientes con lo que sucede fuera de tu burbuja?',
    'How does what happens across the world affect how you live?': '¿Cómo afecta lo que sucede en el mundo a tu forma de vivir?',
    'You\'re thinking about legacywhat you\'ll leave behind. This awareness transforms daily choices.': 'Piensas en el legado: lo que dejarás atrás. Esta conciencia transforma tus decisiones diarias.',
    'Questions about legacy, mortality, and what outlasts you are emerging. This isn\'t morbidit\'s mature. What are you building that will survive you?': 'Surgen preguntas sobre el legado, la mortalidad y lo que perdura. Esto no es morboso, es maduro. ¿Qué estás construyendo que te sobrevivirá?',
    'What do you want to be true about your life when you\'re gone?': '¿Qué quieres que sea verdad sobre tu vida cuando ya no estés?',
    // Contradiction Insight
    'You avoid conflict on the surface while anger builds beneath. The peace you keep costs you. What would happen if you let yourself be honest?': 'Evitas el conflicto superficialmente mientras la ira crece en el fondo. La paz que conservas te cuesta. ¿Qué pasaría si te permitieras ser honesto?',
    // Contradiction Theme
    'Suppressed Anger': 'Ira reprimida',
    // Contradiction Insight
    'Your control is a response to anxiety, not a cure for it. The tighter you grip, the more anxious you become. What would happen if you loosened your hold?': 'Tu control es una respuesta a la ansiedad, no una cura. Cuanto más te aferras, más ansioso te pones. ¿Qué pasaría si soltaras ese control?',
    // Contradiction Theme
    'Control-Anxiety Loop': 'Bucle de control-ansiedad',
    // Contradiction Insight
    'Your independence protects you from rejection but creates the loneliness you fear. Needing people isn\'t weaknessit\'s human.': 'Tu independencia te protege del rechazo, pero crea la soledad que temes. Necesitar a los demás no es debilidad, es humano.',
    // Contradiction Theme
    'False Independence': 'Falsa independencia',
    // Contradiction Insight
    'No achievement has ever silenced the voice that says you\'re not enough. Because the voice isn\'t about achievementsit\'s about worth. Worth can\'t be earned.': 'Ningún logro ha silenciado la voz que te dice que no eres suficiente. Porque la voz no se trata de logros, sino de valía. La valía no se gana.',
    // Contradiction Theme
    'Achievement Trap': 'Trampa del logro',
    // Contradiction Insight
    'You give to others what you won\'t give to yourself. Helping becomes hiding. When did taking care of yourself become less important than taking care of everyone else?': 'Das a los demás lo que no te das a ti mismo. Ayudar se convierte en esconderse. ¿Cuándo se volvió menos importante cuidarte a ti mismo que cuidar a los demás?',
    // Contradiction Theme
    'Caretaker Depletion': 'Agotamiento del cuidador',
    // Contradiction Insight
    'Your strength is real, but so is your pain. Strength isn\'t the absence of painit\'s carrying it. You\'re allowed to put it down sometimes.': 'Tu fuerza es real, pero también lo es tu dolor. La fuerza no es la ausencia de dolor, es soportarlo. A veces puedes dejarlo ir.',
    // Contradiction Theme
    'Hidden Vulnerability': 'Vulnerabilidad oculta',
    // Contradiction Insight
    'You know you should let go, but the wound hasn\'t healed. Acceptance isn\'t forced forgetting. Feel what you need to feelacceptance comes after, not instead of, grief.': 'Sabes que deberías soltar, pero la herida no ha sanado. La aceptación no es un olvido forzado. Siente lo que necesitas sentir: la aceptación viene después del duelo, no en lugar de él.',
    // Contradiction Theme
    'Premature Forgiveness': 'Perdón prematuro',
    // Contradiction Insight
    'Part of you performs while another part longs to be real. You know how to be boththe question is which one you\'re choosing. What would it take to choose real?': 'Una parte de ti actúa mientras otra anhela ser auténtica. Sabes cómo ser ambas cosas; la pregunta es cuál eliges. ¿Qué se necesitaría para elegir la autenticidad?',
    // Contradiction Theme
    'Authenticity Conflict': 'Conflicto de autenticidad',
    // Theme Name
    'Boundaries': 'Límites',
    'Control': 'Control',
    'Self-Worth': 'Autoestima',
    'Authenticity': 'Autenticidad',
    'Fear': 'Miedo',
    'Attachment': 'Apego',
    'Responsibility': 'Responsabilidad',
    'Anger': 'Ira',
    'Shame': 'Vergüenza',
    'Trust': 'Confianza',
    'Abandonment': 'Abandono',
    'Betrayal': 'Traición',
    'Grief': 'Duelo',
    'Codependency': 'Codependencia',
    'Loneliness': 'Soledad',
    'Perfectionism': 'Perfeccionismo',
    // Level Description
    'Self for yourself: your feelings, your life, your beliefs, your needs, your wants. Before you can show up for anyone else, you have to show up for yourself. This means having non-negotiables, things you do for yourself every day, no matter what. It\'s not selfish. It\'s required. If this level isn\'t solid, everything above it is unstable.': 'El yo para ti: tus sentimientos, tu vida, tus creencias, tus necesidades, tus deseos. Antes de poder estar presente para los demás, tienes que estar presente para ti mismo. Esto significa tener cosas innegociables, cosas que haces por ti todos los días, pase lo que pase. No es egoísta. Es necesario. Si este nivel no es sólido, todo lo que está por encima es inestable.',
    'Self for family: either the family you were born into OR the family you have created (spouse, kids). If you\'ve created your own family, they become Level 2, and your family of origin moves to Level 3. These are the people who see you at your best and worst. You can\'t skip to community impact if things are incomplete here.': 'El yo para la familia: ya sea la familia en la que naciste o la familia que has creado (cónyuge, hijos). Si has creado tu propia familia, esta pasa al Nivel 2, y tu familia de origen pasa al Nivel 3. Estas son las personas que te ven en tus mejores y peores momentos. No puedes saltar al impacto comunitario si las cosas están incompletas aquí.',
    'Self for group: extended family members, friends, relatives, coworkers, and groups you belong to. If you\'ve created your own family, your parents and siblings now live here. The question: Are you being yourself, or performing a version of yourself to fit in, or hiding entirely? The first 3 levels represent 90% of everyday life.': 'El yo para el grupo: familiares, amigos, parientes, compañeros de trabajo y grupos a los que perteneces. Si has creado tu propia familia, tus padres y hermanos ahora viven aquí. La pregunta: ¿Estás siendo tú mismo, representando una versión de ti mismo para encajar, o escondiéndote por completo? Los primeros 3 niveles representan el 90% de la vida cotidiana.',
    'Self for society: the people of your nation and its systems: government, economy, culture, laws. This level is about seeing reality clearly. Not what you wish was true. Not what you\'re fighting against. What actually is. You can\'t change what you won\'t first accept.': 'El yo para la sociedad: la gente de tu nación y sus sistemas: gobierno, economía, cultura, leyes. Este nivel se trata de ver la realidad con claridad. No lo que desearías que fuera verdad. No aquello contra lo que luchas. Lo que realmente es. No puedes cambiar lo que no aceptas primero.',
    'Self for world: the global stage: international politics, global events, other nations, other cultures, humanity as a whole. How connected do you feel to what happens outside your borders? This isn\'t about being an activist. It\'s about recognizing you\'re part of something larger than your own life.': 'El yo para el mundo: el escenario global: política internacional, eventos globales, otras naciones, otras culturas, la humanidad en su conjunto. ¿Qué tan conectado te sientes con lo que sucede fuera de tus fronteras? No se trata de ser un activista. Se trata de reconocer que formas parte de algo más grande que tu propia vida.',
    'Self for generations: the people who came before you (ancestors) and those who will come after. This is legacy. What cycles did you inherit? What cycles will you break? What will you build that outlasts you? Legacy isn\'t always a building. Sometimes it\'s a pattern you refused to repeat.': 'El yo para las generaciones: las personas que te precedieron (ancestros) y las que vendrán después. Este es el legado. ¿Qué ciclos heredaste? ¿Qué ciclos romperás? ¿Qué construirás que perdure? El legado no siempre es un edificio. A veces es un patrón que te negaste a repetir.',
    // Level Short Description
    'Your relationship with yourself': 'Tu relación contigo mismo',
    'Your nation and its systems': 'Tu nación y sus sistemas',
    'The global stage': 'El escenario global',
    'Ancestors and future generations': 'Antepasados ??y generaciones futuras',
    // Pattern Analysis
    'High self-recognition. You see yourself clearly.': 'Alto autorreconocimiento. Te ves con claridad.',
    'Judgment is your current default.': 'El juicio es tu estándar actual.',
    'Strong acceptance. You see and accept reality.': 'Fuerte aceptación. Ves y aceptas la realidad.',
    'Strong awareness. You recognize and accept your patterns.': 'Fuerte consciencia. Reconoces y aceptas tus patrones.',
    'Low recognition.': 'Bajo reconocimiento.',
    'Today\'s Practice': 'Práctica de hoy',
    'You see yourself clearly. Now the question is: what will you do with what you see?': 'Te ves con claridad. Ahora la pregunta es: ¿qué harás con lo que ves?',
    'Notice one moment today when a pattern you recognized shows up. You don\'t have to change it. Just notice.': 'Observa un momento hoy en que aparezca un patrón que reconociste. No tienes que cambiarlo. Simplemente obsérvalo.',

    // --- UI & Buttons (Roger Walter) ---
    // Exercise Button
    'Mark Complete (+25 XP)': 'Marcar como completado (+25 XP)',
    'Mark Complete (+50 XP)': 'Marcar como completado (+50 XP)',
    'Mark Complete (+100 XP)': 'Marcar como completado (+100 XP)',
    'Start Breakthrough Work': 'Comenzar trabajo revolucionario',
    // Toast/Notification
    'Already completed today! Come back tomorrow.': '¡Ya lo completaste hoy! Vuelve mañana.',
    'Already completed!': '¡Ya lo completaste!',
    'Already redeemed!': '¡Ya lo canjeaste!',
    'Already saved!': '¡Ya lo guardaste!',
    'Challenge reset. Ready to start fresh!': 'Desafío reiniciado. ¡Listo para empezar de cero!',
    'Choose acceptance over judgment - accept reality as it is': 'Elige la aceptación en lugar del juicio: acepta la realidad tal como es.',
    'Link copied!': '¡Enlace copiado!',
    'Music off': 'Música desactivada',
    'Music on': 'Música activada',
    'No scenarios available!': '¡No hay escenarios disponibles!',
    'No scenarios for this level': 'No hay escenarios para este nivel',
    'Nothing to share yet': 'Todavía no hay nada que compartir',
    'Opening Apple Music...': 'Abriendo Apple Music...',
    'Opening Spotify...': 'Abriendo Spotify...',
    'Play more games to share your pattern': 'Juega más juegos para compartir tu patrón',
    'Play more games to unlock your shareable card!': '¡Juega más juegos para desbloquear tu tarjeta para compartir!',
    'Press back again to exit': 'Presiona atrás para salir.',
    'Preview coming soon for this level!': '¡Próximamente habrá una vista previa de este nivel!',
    'Shared!': '¡Compartido!',
    'Tap the answer that feels most true for you': 'Toca la respuesta que te parezca más acertada.',
    'Unable to share - pattern not found': 'No se puede compartir: patrón no encontrado.',
    'Light theme': 'Tema claro.',
    'Dark theme': 'Tema oscuro.',
    'Endless Mode activated!': '¡Modo infinito activado!',
    'Loading scenarios...': 'Cargando escenarios...',
    'Play at least 10 games to print Deep Insight': 'Juega al menos 10 juegos para imprimir Perspectiva profunda.',
    'Unable to analyze patterns': 'No se pueden analizar patrones.',
    'Progress restored! Reloading...': '¡Progreso restaurado! Recargando...',
    'Fresh start! Reloading...': '¡Nuevo comienzo! Recargando...',
    'Streak frozen!': '¡Racha congelada!',
    'Saved to favorites!': '¡Guardado en favoritos!',
    'Added to favorites!': '¡Añadido a favoritos!',
    'Added to Home Screen!': '¡Añadido a la pantalla de inicio!',
    'Perfect! +25 XP': '¡Perfecto! +25 XP',
    'Perfect! +30 XP': '¡Perfecto! +30 XP',
    '30-Day Challenge started!': '¡Desafío de 30 días comenzado!',
    'Game music on': 'Música del juego activada',
    'CHALLENGE COMPLETE! 1000 BREAKTHROUGHS!': '¡DESAFÍO COMPLETADO! ¡1000 AVANCES!',
    'Opening Lily...': 'Abriendo Lily...',
    'Copied to clipboard!': '¡Copiado al portapapeles!',
    'Copied!': '¡Copiado!',
    'Copied! Paste to share manually.': '¡Copiado! Pega para compartir manualmente.',
    'Link copied! Paste to share manually.': '¡Enlace copiado! Pega para compartir manualmente.',
    'Backup saved! Keep this file safe.': '¡Copia de seguridad guardada! Guarda este archivo.',
    'Image saved & caption copied!': '¡Imagen y descripción guardadas!',
    'Reach Level 2!': '¡Alcanza el nivel 2!',
    'LEVEL UP! You are now Level': '¡SUBE DE NIVEL! Ahora estás en el nivel',
    '3x COMBO!': '¡COMBO 3x!',
    '5x COMBO!': '¡COMBO 5x!',
    '10x COMBO!': '¡COMBO 10x!',
    'Sneak peek at what lies ahead!': '¡Un adelanto de lo que te espera!',
    'Your pattern is evolving!': '¡Tu patrón está evolucionando!',
    // Button/UI
    'Back to top': 'Volver arriba',
    'Insight': 'Información',
    'Favorites': 'Favoritos',
    'Mixed Mode': 'Modo mixto',
    'Boundary': 'Límite',
    'Escape': 'Escape',
    'Register Free': 'Regístrate gratis',
    'Print': 'Imprimir',
    'Next': 'Siguiente',
    'Accept': 'Aceptar',
    'Judge': 'Juzgar',
    'That\'s Me': 'Soy yo',
    'Pattern that stood out': 'Patrón destacado',
    'Perfect Game': 'Juego perfecto',
    'Perfect Daily': 'Diario perfecto',
    'Not Quite': 'No del todo',
    'Partial Credit': 'Crédito parcial',
    'Learning opportunity': 'Oportunidad de aprendizaje',
    'The accepting response': 'Respuesta de aceptación',
    'The right response': 'Respuesta correcta',
    'Reach Level 2': 'Alcanza el nivel 2',
    'Self-Recognition': 'Autorreconocimiento',
    'Open Reward Shop': 'Abrir tienda de recompensas',
    // Daily/Streak
    'Play today or lose your': '¡Juega hoy o pierde tu',
    '-day streak!': 'racha de - días!',
    'Self-worth pattern appeared 3 times recently': 'El patrón de autoestima apareció 3 veces recientemente.',
    'You\'re seeing it clearly now.': 'Ahora lo ves claramente.',
    'That\'s the first step. But seeing a pattern and breaking it are two different things.': 'Ese es el primer paso. Pero ver un patrón y romperlo son dos cosas diferentes.',
    'Most people can\'t break lifelong patterns alone. That\'s not weakness. It\'s how patterns work.': 'La mayoría de las personas no pueden romper patrones de toda la vida solas. Eso no es debilidad. Así es como funcionan los patrones.',
    'Freeze recharges in': 'Congelar recargas en',
    'day streak protected!': '¡Racha de - días protegida!',
    // Lily Chat
    'Self-Awareness Coach': 'Coach de autoconciencia.',
    'New Chat': 'Nuevo chat.',
    'Lily analyzes your game patterns to give personalized guidance': 'Lily analiza tus patrones de juego para ofrecerte orientación personalizada.',

    // --- Marketing & Share (Roger Walter) ---
    // Modal: Share Card
    'My Pattern': 'Mi Patrón',
    'What\'s your pattern?': '¿Cuál es tu patrón?',
    'Download Level Up': 'Descargar Level Up',
    // Share Text
    'See the patterns running your life. Everyone sees your pattern except you. Free game, 2 min/day.': 'Observa los patrones que rigen tu vida. Todos ven tu patrón menos tú. Juego gratuito, 2 minutos al día.',
    'Free self-awareness game with 6,854 scenarios': 'Juego gratuito de autoconciencia con 6854 escenarios',
    'Everyone sees your pattern. Except you.': 'Todos ven tu patrón. Menos tú.',
    'My Week in Patterns': 'Mi Semana en Patrones',
    'Growth theme': 'Tema de crecimiento',
    // Privacy/Safety
    'All data is stored locally on your device only. Nothing is sent to any server.': 'Todos los datos se almacenan localmente en tu dispositivo. No se envía nada a ningún servidor.',
    'Clearing browser data will reset your progress.': 'Borrar los datos del navegador restablecerá tu progreso.',
    'This game is for self-reflection and personal growth, not therapy, diagnosis, or treatment.': 'Este juego es para la autorreflexión y el crecimiento personal, no para terapia, diagnóstico ni tratamiento.',
    'Crisis Resources': 'Recursos de Crisis',
    '988 Suicide & Crisis Lifeline': '988 Línea de ayuda para el suicidio y la crisis',
    'Call or text 988': 'Llama o envía un mensaje de texto al 988',
    // Events
    'Live Events Coming Soon': 'Próximamente: Eventos en vivo',
    'Multi-day workshops and retreats for deeper breakthrough work. Message Arthur to get on the list.': 'Talleres y retiros de varios días para un trabajo de avance más profundo. Envía un mensaje a Arthur para unirte a la lista.',
    'Use your coins to unlock workshop discounts! 500 coins = 20% off.': '¡Usa tus monedas para desbloquear descuentos en talleres! 500 monedas = 20% de descuento.',
    'Get on the List': '¡Únete a la lista!',
    'First Sunday of every month, join live for free!': '¡El primer domingo de cada mes, únete en vivo gratis!',
    'Focus on Individual Self (Level 1)': 'Enfoque en el Ser Individual (Nivel 1)',
    'Real conversations, no fluff': 'Conversaciones reales, sin tonterías',
    'Connect with others on the same path': 'Conecta con otros que comparten tu camino',
    'English and Armenian sessions available': 'Sesiones disponibles en inglés y armenio',
    'No cost. No spam. Just real growth.': 'Sin costo. Sin spam. Solo crecimiento real.',
    // Marketing
    'Get clarity. Save time. Stop the cycle.': 'Obtén claridad. Ahorra tiempo. Detén el ciclo.',
    'Because someone you know needs this.': 'Porque alguien que conoces lo necesita.',
    'Who in your life is stuck in the same patterns? Struggling with boundaries? Carrying grief or shame they won\'t talk about?': '¿Quién en tu vida está atrapado en los mismos patrones? ¿Luchando con límites? ¿Llevando dolor o vergüenza de la que no habla?',
    'This game helps people see themselves without judgment.': 'Este juego ayuda a las personas a verse a sí mismas sin juzgar.',
    'free, private, and takes 2 minutes to play.': 'Gratis, privado y toma 2 minutos jugar.',
    'Built by Arthur Palyan': 'Creado por Arthur Palyan',
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

