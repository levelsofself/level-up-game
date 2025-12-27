// LEVEL UP - DECISION MODE (Acceptance vs Judgment)
// LEVEL 1: INDIVIDUAL - Your relationship with yourself
// 50 scenarios teaching acceptance creates freedom, judgment blocks possibility
// Format: { level: 1, scenario: "situation", choices: [{text, type, insight}] }

const DECISION_LEVEL_1 = [

  // ========== SELF-HONESTY (10) ==========
  {
    level: 1,
    scenario: "You wake up feeling exhausted for the third day in a row.",
    choices: [
      { text: "Think 'I'm lazy and undisciplined. I need to try harder.'", type: "judgment", insight: "Judgment creates shame, which drains more energy. It's a cycle that feeds itself." },
      { text: "Ask 'What does my body need right now? Am I pushing too hard?'", type: "acceptance", insight: "Acceptance listens to your body's signals. Exhaustion is information, not failure." }
    ]
  },
  {
    level: 1,
    scenario: "You eat something unhealthy when you planned to eat well.",
    choices: [
      { text: "Think 'I have no willpower. I'll never get this right.'", type: "judgment", insight: "Judgment turns a single choice into an identity. One meal becomes 'who you are.'" },
      { text: "Notice 'That happened. What would feel nourishing next?'", type: "acceptance", insight: "Acceptance lets choices be choices, not definitions. The next meal is a new moment." }
    ]
  },
  {
    level: 1,
    scenario: "You catch yourself lying about something small.",
    choices: [
      { text: "Think 'I'm dishonest. I can't even trust myself.'", type: "judgment", insight: "Judgment globalizes the moment. One lie becomes 'I am a liar.'" },
      { text: "Ask 'What was I protecting? What felt unsafe about the truth?'", type: "acceptance", insight: "Acceptance investigates with curiosity. Lies usually protect something vulnerable." }
    ]
  },
  {
    level: 1,
    scenario: "You forget something important you promised yourself you'd remember.",
    choices: [
      { text: "Say to yourself 'You're so unreliable. You can't even keep promises to yourself.'", type: "judgment", insight: "Judgment breaks self-trust further. Each harsh word makes future promises harder to keep." },
      { text: "Note 'I forgot. What system would help me remember next time?'", type: "acceptance", insight: "Acceptance solves problems. Forgetting isn't character—it's a systems issue." }
    ]
  },
  {
    level: 1,
    scenario: "You look in the mirror and don't like what you see.",
    choices: [
      { text: "Think 'I need to fix everything about myself.'", type: "judgment", insight: "Judgment sees only problems. It starts from 'wrong' and tries to fix." },
      { text: "Think 'This is my body today. It carries me through life.'", type: "acceptance", insight: "Acceptance sees reality. It starts from 'is' and can move from there." }
    ]
  },
  {
    level: 1,
    scenario: "You realize you've been avoiding looking at your bank account.",
    choices: [
      { text: "Think 'I'm terrible with money. I'll always be broke.'", type: "judgment", insight: "Judgment creates shame around money, which leads to more avoidance." },
      { text: "Think 'I've been avoiding this. Let me look and see what's actually true.'", type: "acceptance", insight: "Acceptance faces reality. You can only change what you're willing to see." }
    ]
  },
  {
    level: 1,
    scenario: "You notice you've been telling the same excuse for years.",
    choices: [
      { text: "Think 'I'm pathetic. I haven't grown at all.'", type: "judgment", insight: "Judgment freezes you in shame. It blocks the very growth it demands." },
      { text: "Think 'This excuse has been protecting something. What am I really afraid of?'", type: "acceptance", insight: "Acceptance sees excuses as outdated protection. Understanding dissolves them." }
    ]
  },
  {
    level: 1,
    scenario: "You catch yourself pretending to be fine when you're not.",
    choices: [
      { text: "Think 'I'm fake. No one knows the real me.'", type: "judgment", insight: "Judgment adds isolation to pain. Now you're hurting AND alone with it." },
      { text: "Ask 'What made it feel unsafe to be honest right now?'", type: "acceptance", insight: "Acceptance understands that pretending is protection. Safety can be rebuilt." }
    ]
  },
  {
    level: 1,
    scenario: "You realize you've been blaming everyone else for your problems.",
    choices: [
      { text: "Think 'I'm the problem. Everything is my fault.'", type: "judgment", insight: "Judgment swings to the other extreme. All blame or no blame—both avoid truth." },
      { text: "Ask 'What's my part in this? What can I actually change?'", type: "acceptance", insight: "Acceptance owns your part without owning everything. Power lives in what you can change." }
    ]
  },
  {
    level: 1,
    scenario: "You notice you've been lying to yourself about how you really feel.",
    choices: [
      { text: "Think 'I don't even know who I am anymore.'", type: "judgment", insight: "Judgment creates an identity crisis from a moment of disconnection." },
      { text: "Think 'I've been out of touch with myself. What do I actually feel right now?'", type: "acceptance", insight: "Acceptance reconnects. You can always come back to yourself." }
    ]
  },

  // ========== SELF-CARE & BODY (10) ==========
  {
    level: 1,
    scenario: "You've been running on caffeine and little sleep for weeks.",
    choices: [
      { text: "Think 'This is what success requires. Sleep is for the weak.'", type: "judgment", insight: "Judgment glorifies self-destruction. Burnout isn't a badge—it's a breakdown waiting." },
      { text: "Acknowledge 'I've been borrowing from my future self. This isn't sustainable.'", type: "acceptance", insight: "Acceptance sees the cost clearly. Borrowed energy always comes due." }
    ]
  },
  {
    level: 1,
    scenario: "You skip meals because you're 'too busy.'",
    choices: [
      { text: "Think 'I don't have time for basic needs. I'll eat later.'", type: "judgment", insight: "Judgment makes self-neglect sound productive. Your body keeps score." },
      { text: "Notice 'I'm putting myself last again. What would it take to eat right now?'", type: "acceptance", insight: "Acceptance recognizes the pattern. Nourishment isn't optional." }
    ]
  },
  {
    level: 1,
    scenario: "You feel anxious and your chest is tight.",
    choices: [
      { text: "Think 'Why am I so weak? Other people don't get like this.'", type: "judgment", insight: "Judgment adds shame to anxiety. Now you're anxious about being anxious." },
      { text: "Notice 'I'm feeling anxious. That's okay. What do I need right now?'", type: "acceptance", insight: "Acceptance contains anxiety. Naming it reduces its power." }
    ]
  },
  {
    level: 1,
    scenario: "You push through pain to finish a workout.",
    choices: [
      { text: "Think 'No pain, no gain. I need to be tougher.'", type: "judgment", insight: "Judgment ignores the body's wisdom. Pain is information, not a test of character." },
      { text: "Ask 'Is this productive discomfort or a warning? What does my body need?'", type: "acceptance", insight: "Acceptance distinguishes between growth and harm. Your body knows the difference." }
    ]
  },
  {
    level: 1,
    scenario: "You haven't had a real day off in months.",
    choices: [
      { text: "Think 'Rest is lazy. I'll rest when I've earned it.'", type: "judgment", insight: "Judgment makes rest conditional. But you can't earn what you already deserve." },
      { text: "Recognize 'I've been treating rest as a reward instead of a need.'", type: "acceptance", insight: "Acceptance knows rest is operational, not optional. Even machines need maintenance." }
    ]
  },
  {
    level: 1,
    scenario: "You notice you've been numbing with food, alcohol, or screens.",
    choices: [
      { text: "Think 'I'm so weak. I have no self-control.'", type: "judgment", insight: "Judgment misses the point. Numbing isn't weakness—it's pain management." },
      { text: "Ask 'What am I trying not to feel? What's underneath the numbing?'", type: "acceptance", insight: "Acceptance goes deeper. The numbing is a symptom, not the problem." }
    ]
  },
  {
    level: 1,
    scenario: "You realize you've been holding your breath and clenching your jaw.",
    choices: [
      { text: "Think 'Why am I so stressed? I shouldn't feel this way.'", type: "judgment", insight: "Judgment argues with your body. Your body doesn't care about 'should.'" },
      { text: "Notice 'My body is holding tension. Let me breathe and release.'", type: "acceptance", insight: "Acceptance works with the body. Awareness itself begins to release." }
    ]
  },
  {
    level: 1,
    scenario: "You've been ignoring a health symptom for weeks.",
    choices: [
      { text: "Think 'It's probably nothing. I don't have time for doctors.'", type: "judgment", insight: "Judgment dismisses the body's signals. Ignored symptoms don't disappear—they escalate." },
      { text: "Acknowledge 'I've been avoiding this. My health deserves attention.'", type: "acceptance", insight: "Acceptance prioritizes you. Avoidance is not a treatment plan." }
    ]
  },
  {
    level: 1,
    scenario: "You feel guilty for taking time to rest.",
    choices: [
      { text: "Think 'I should be productive. Resting is wasting time.'", type: "judgment", insight: "Judgment sees rest as theft from productivity. But depleted people create depleted work." },
      { text: "Allow 'Rest is part of the process, not a break from it.'", type: "acceptance", insight: "Acceptance integrates rest. You're not a machine—you're a human being." }
    ]
  },
  {
    level: 1,
    scenario: "You notice your body feels heavy and tired even after sleeping.",
    choices: [
      { text: "Think 'Something's wrong with me. I shouldn't feel this way.'", type: "judgment", insight: "Judgment pathologizes normal responses. Your body might be processing something big." },
      { text: "Ask 'What might my body be carrying that my mind hasn't acknowledged?'", type: "acceptance", insight: "Acceptance listens deeper. The body holds what the mind won't face." }
    ]
  },

  // ========== EMOTIONS & FEELINGS (10) ==========
  {
    level: 1,
    scenario: "You feel sad for no apparent reason.",
    choices: [
      { text: "Think 'I have no reason to be sad. I need to snap out of it.'", type: "judgment", insight: "Judgment demands reasons from feelings. But feelings don't need permission to exist." },
      { text: "Allow 'I'm feeling sad. I don't need to know why to let it be here.'", type: "acceptance", insight: "Acceptance lets feelings move through. Resisted emotions persist." }
    ]
  },
  {
    level: 1,
    scenario: "You feel jealous of someone's success.",
    choices: [
      { text: "Think 'I'm such a bad person for feeling this way.'", type: "judgment", insight: "Judgment makes jealousy shameful. But jealousy is just desire wearing a costume." },
      { text: "Notice 'I'm feeling jealous. What does this tell me about what I want?'", type: "acceptance", insight: "Acceptance sees jealousy as information. It points to unacknowledged desires." }
    ]
  },
  {
    level: 1,
    scenario: "You feel angry but don't know why.",
    choices: [
      { text: "Think 'I shouldn't be angry. I need to calm down.'", type: "judgment", insight: "Judgment suppresses anger, which doesn't make it go away—just underground." },
      { text: "Ask 'Something triggered this. What boundary might have been crossed?'", type: "acceptance", insight: "Acceptance sees anger as information. Often it signals a boundary violation." }
    ]
  },
  {
    level: 1,
    scenario: "You feel afraid of something that 'shouldn't' scare you.",
    choices: [
      { text: "Think 'This is irrational. I'm being ridiculous.'", type: "judgment", insight: "Judgment dismisses fear but doesn't dissolve it. Fear has its own logic." },
      { text: "Acknowledge 'Something about this feels unsafe to a part of me. What is it?'", type: "acceptance", insight: "Acceptance investigates fear with compassion. Understanding often releases it." }
    ]
  },
  {
    level: 1,
    scenario: "You feel overwhelmed by everything on your plate.",
    choices: [
      { text: "Think 'Other people handle more. I'm just not capable.'", type: "judgment", insight: "Judgment compares your inside to others' outside. You don't see their overwhelm." },
      { text: "Pause and ask 'What's one thing I can do right now? Just one.'", type: "acceptance", insight: "Acceptance breaks overwhelm into moments. You only ever have to do the next thing." }
    ]
  },
  {
    level: 1,
    scenario: "You feel numb and disconnected from everything.",
    choices: [
      { text: "Think 'What's wrong with me? Why can't I feel anything?'", type: "judgment", insight: "Judgment pathologizes protection. Numbness is often the body's circuit breaker." },
      { text: "Notice 'I've gone numb. This might be protection. What feels like too much?'", type: "acceptance", insight: "Acceptance honors the body's wisdom. Numbness serves a purpose." }
    ]
  },
  {
    level: 1,
    scenario: "You feel shame about something you did years ago.",
    choices: [
      { text: "Think 'I'm a terrible person. I'll never forgive myself.'", type: "judgment", insight: "Judgment keeps you imprisoned in the past. It says you can never change." },
      { text: "Acknowledge 'I did that. I've grown since then. I can make amends if needed.'", type: "acceptance", insight: "Acceptance allows growth. You're not the same person who made that choice." }
    ]
  },
  {
    level: 1,
    scenario: "You feel lonely even when surrounded by people.",
    choices: [
      { text: "Think 'Something is wrong with me. I should feel connected.'", type: "judgment", insight: "Judgment adds isolation to loneliness. Now you're alone AND ashamed of it." },
      { text: "Notice 'I feel disconnected. What would real connection look like right now?'", type: "acceptance", insight: "Acceptance names the gap. Loneliness often signals a need for depth, not more people." }
    ]
  },
  {
    level: 1,
    scenario: "You feel like crying but hold it back.",
    choices: [
      { text: "Think 'I need to keep it together. Crying is weakness.'", type: "judgment", insight: "Judgment dams the river. But blocked tears don't disappear—they flood internally." },
      { text: "Allow 'These tears want to come. It's safe to let them.'", type: "acceptance", insight: "Acceptance opens the release valve. Tears are the body's way of completing emotions." }
    ]
  },
  {
    level: 1,
    scenario: "You feel guilty for feeling happy when others are suffering.",
    choices: [
      { text: "Think 'I don't deserve to be happy when so much is wrong.'", type: "judgment", insight: "Judgment makes happiness a betrayal. But your suffering doesn't help anyone else." },
      { text: "Allow 'I can hold joy and awareness of suffering. Both are true.'", type: "acceptance", insight: "Acceptance holds complexity. Your happiness doesn't cause others' pain." }
    ]
  },

  // ========== SELF-WORTH & IDENTITY (10) ==========
  {
    level: 1,
    scenario: "You compare yourself to someone who seems to have it all together.",
    choices: [
      { text: "Think 'They have it all figured out. I'm so far behind.'", type: "judgment", insight: "Judgment compares your behind-the-scenes to their highlight reel." },
      { text: "Notice 'I'm comparing my inside to their outside. I don't know their struggles.'", type: "acceptance", insight: "Acceptance recognizes that everyone has a hidden story." }
    ]
  },
  {
    level: 1,
    scenario: "You feel like a fraud who will eventually be exposed.",
    choices: [
      { text: "Think 'I don't belong here. I'm fooling everyone.'", type: "judgment", insight: "Judgment confirms imposter syndrome. The more you judge, the more you hide." },
      { text: "Notice 'I'm feeling like an imposter. This is common when growing.'", type: "acceptance", insight: "Acceptance normalizes the feeling. Imposter syndrome often shows you're expanding." }
    ]
  },
  {
    level: 1,
    scenario: "You catch yourself seeking validation from others.",
    choices: [
      { text: "Think 'I'm so needy. Why can't I just be confident?'", type: "judgment", insight: "Judgment makes the need for connection shameful. But humans are wired for belonging." },
      { text: "Ask 'What approval am I seeking? What do I need to give myself?'", type: "acceptance", insight: "Acceptance investigates the need. Often external seeking points to internal lack." }
    ]
  },
  {
    level: 1,
    scenario: "You don't feel like you deserve good things.",
    choices: [
      { text: "Think 'I haven't earned this. I don't deserve to be happy.'", type: "judgment", insight: "Judgment makes worthiness conditional. But you don't earn your worth—you're born with it." },
      { text: "Notice 'This is an old belief. Where did I learn that I don't deserve?'", type: "acceptance", insight: "Acceptance questions inherited beliefs. Someone taught you this—it's not truth." }
    ]
  },
  {
    level: 1,
    scenario: "You feel like you're not enough, no matter what you do.",
    choices: [
      { text: "Think 'I need to do more, be more, achieve more.'", type: "judgment", insight: "Judgment moves the goalpost. 'Enough' becomes a destination you never reach." },
      { text: "Ask 'Who told me I wasn't enough? Is that voice mine or inherited?'", type: "acceptance", insight: "Acceptance traces the belief to its source. 'Not enough' is a story, not a fact." }
    ]
  },
  {
    level: 1,
    scenario: "You catch yourself performing a version of you that isn't real.",
    choices: [
      { text: "Think 'I'm fake. No one would like the real me.'", type: "judgment", insight: "Judgment assumes rejection before it happens. The mask becomes a prison." },
      { text: "Ask 'What feels unsafe about being myself here?'", type: "acceptance", insight: "Acceptance investigates the performance. There's usually a good reason you learned to hide." }
    ]
  },
  {
    level: 1,
    scenario: "You feel like you don't know who you really are.",
    choices: [
      { text: "Think 'Everyone else knows who they are. I'm lost.'", type: "judgment", insight: "Judgment assumes others have certainty you lack. Most people are figuring it out too." },
      { text: "Allow 'I'm discovering who I am. This is a process, not a problem.'", type: "acceptance", insight: "Acceptance reframes confusion as exploration. Identity unfolds—it isn't fixed." }
    ]
  },
  {
    level: 1,
    scenario: "You define yourself by your achievements or failures.",
    choices: [
      { text: "Think 'I am what I've done. My worth is in my results.'", type: "judgment", insight: "Judgment ties identity to outcomes. But you are not your resume." },
      { text: "Notice 'I'm more than my achievements or failures. They don't define me.'", type: "acceptance", insight: "Acceptance separates being from doing. You have worth independent of results." }
    ]
  },
  {
    level: 1,
    scenario: "You feel worthless after making a mistake.",
    choices: [
      { text: "Think 'I always mess up. I'm fundamentally flawed.'", type: "judgment", insight: "Judgment makes mistakes permanent. One error becomes 'always' and 'fundamentally.'" },
      { text: "Acknowledge 'I made a mistake. That's human. It doesn't change my worth.'", type: "acceptance", insight: "Acceptance contains mistakes without collapsing. Worth isn't lost through error." }
    ]
  },
  {
    level: 1,
    scenario: "You notice you only feel valuable when helping others.",
    choices: [
      { text: "Think 'At least I'm useful. That's my purpose.'", type: "judgment", insight: "Judgment makes your worth transactional. But you're not a tool to be used." },
      { text: "Ask 'Would I still matter if I couldn't help anyone today?'", type: "acceptance", insight: "Acceptance separates value from utility. You matter whether or not you're producing." }
    ]
  },

  // ========== GROWTH & CHANGE (10) ==========
  {
    level: 1,
    scenario: "You procrastinate on something important.",
    choices: [
      { text: "Call yourself 'lazy' and 'undisciplined.'", type: "judgment", insight: "Judgment creates shame, which fuels more procrastination. It's the problem, not the solution." },
      { text: "Ask 'What's making this hard to start? What's one tiny step?'", type: "acceptance", insight: "Acceptance investigates resistance. Procrastination is often about fear, not laziness." }
    ]
  },
  {
    level: 1,
    scenario: "You fail at something you tried hard at.",
    choices: [
      { text: "Think 'I knew I couldn't do it. Why did I even try?'", type: "judgment", insight: "Judgment makes failure proof of inadequacy. It says trying was the mistake." },
      { text: "Ask 'What did I learn? What would I do differently next time?'", type: "acceptance", insight: "Acceptance harvests wisdom from failure. Every failure contains a lesson." }
    ]
  },
  {
    level: 1,
    scenario: "You're trying to establish a new habit and miss a day.",
    choices: [
      { text: "Think 'See? I knew I couldn't do it. Might as well quit.'", type: "judgment", insight: "Judgment sees missed days as proof of failure. One stumble becomes total collapse." },
      { text: "Think 'I missed today. I'll continue tomorrow.'", type: "acceptance", insight: "Acceptance sees missed days as part of the process. Habits are built across time, not in perfection." }
    ]
  },
  {
    level: 1,
    scenario: "You notice you've been repeating the same pattern for years.",
    choices: [
      { text: "Think 'I'll never change. This is just who I am.'", type: "judgment", insight: "Judgment makes patterns permanent. 'This is who I am' closes all doors." },
      { text: "Observe 'I notice this pattern. What is it protecting? What would change look like?'", type: "acceptance", insight: "Acceptance sees patterns as changeable. Awareness is the first step." }
    ]
  },
  {
    level: 1,
    scenario: "You feel stuck and don't know how to move forward.",
    choices: [
      { text: "Think 'I'm trapped. Nothing will ever change.'", type: "judgment", insight: "Judgment makes stuckness permanent. 'Trapped' closes off possibility." },
      { text: "Ask 'What's one small thing I could do differently today?'", type: "acceptance", insight: "Acceptance finds movement in stillness. Change starts with one tiny shift." }
    ]
  },
  {
    level: 1,
    scenario: "You catch yourself making the same mistake again.",
    choices: [
      { text: "Think 'I'm an idiot. I never learn.'", type: "judgment", insight: "Judgment attacks intelligence instead of systems. Repeated mistakes need new approaches, not more shame." },
      { text: "Ask 'What conditions led to this? What support or system do I need?'", type: "acceptance", insight: "Acceptance looks for patterns and solutions. Mistakes repeat when the root cause remains." }
    ]
  },
  {
    level: 1,
    scenario: "You feel like you should be further along in life.",
    choices: [
      { text: "Think 'I've wasted so much time. I'm behind where I should be.'", type: "judgment", insight: "Judgment creates arbitrary timelines. But whose schedule are you measuring against?" },
      { text: "Notice 'I'm comparing myself to an idea of where I 'should' be. I'm where I am.'", type: "acceptance", insight: "Acceptance starts from reality. You can only move forward from where you actually stand." }
    ]
  },
  {
    level: 1,
    scenario: "You don't feel motivated to do anything.",
    choices: [
      { text: "Think 'I'm lazy and useless. What's wrong with me?'", type: "judgment", insight: "Judgment interprets low motivation as character flaw. But motivation ebbs and flows." },
      { text: "Ask 'What might be depleting me? Do I need rest, connection, or meaning?'", type: "acceptance", insight: "Acceptance investigates rather than condemns. Low motivation is information." }
    ]
  },
  {
    level: 1,
    scenario: "You realize you've been avoiding change because it's scary.",
    choices: [
      { text: "Think 'I'm a coward. Other people face their fears.'", type: "judgment", insight: "Judgment makes fear shameful. But fear of change is universal—you're not alone in it." },
      { text: "Acknowledge 'Change is scary. It's okay to move slowly and still move.'", type: "acceptance", insight: "Acceptance allows fear and forward movement to coexist. Courage isn't fearlessness." }
    ]
  },
  {
    level: 1,
    scenario: "You catch yourself waiting for life to begin 'someday.'",
    choices: [
      { text: "Think 'I've wasted my life waiting. It's too late now.'", type: "judgment", insight: "Judgment adds regret to delay. But 'too late' is rarely true." },
      { text: "Notice 'I've been waiting. What small thing can I begin today?'", type: "acceptance", insight: "Acceptance starts from now. Today is always the right day to begin." }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECISION_LEVEL_1;
}
