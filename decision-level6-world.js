// LEVEL UP - DECISION MODE (Acceptance vs Judgment)
// LEVEL 6: WORLD - Beyond your borders, other nations, humanity as a whole
// 50 scenarios teaching acceptance creates freedom, judgment blocks possibility
// Format: { level: 6, scenario: "situation", choices: [{text, type, insight}] }

const DECISION_LEVEL_6 = [

  // ========== GLOBAL AWARENESS (15) ==========
  {
    level: 6,
    scenario: "You hear about a crisis in a country you know little about.",
    choices: [
      { text: "Think 'That's sad, but it's far away. Not my problem.'", type: "judgment", insight: "Judgment creates distance. But suffering doesn't require proximity to matter." },
      { text: "Think 'I don't know much about this. Let me learn before forming opinions.'", type: "acceptance", insight: "Acceptance admits ignorance. Understanding requires learning, not assuming." }
    ]
  },
  {
    level: 6,
    scenario: "Refugees are seeking asylum in your country.",
    choices: [
      { text: "Think 'They should fix their own country instead of coming here.'", type: "judgment", insight: "Judgment dismisses desperation. People don't leave everything for no reason." },
      { text: "Think 'They're fleeing something terrible. How do we help while managing real concerns?'", type: "acceptance", insight: "Acceptance holds complexity. Compassion and practicality can coexist." }
    ]
  },
  {
    level: 6,
    scenario: "A global health crisis affects daily life everywhere.",
    choices: [
      { text: "Look for someone to blame: 'This country/leader/group caused this!'", type: "judgment", insight: "Judgment seeks villains. But blame doesn't cure illness or solve problems." },
      { text: "Think 'This is affecting everyone. How do I protect myself and help others?'", type: "acceptance", insight: "Acceptance focuses on response. Energy spent blaming is energy not spent solving." }
    ]
  },
  {
    level: 6,
    scenario: "You hear about environmental destruction in a distant rainforest.",
    choices: [
      { text: "Think 'That's their problem. They should protect their own forests.'", type: "judgment", insight: "Judgment ignores interconnection. Global ecosystems don't respect borders." },
      { text: "Think 'We all share this planet. What choices can I make that help?'", type: "acceptance", insight: "Acceptance sees connection. Your choices ripple outward in ways you can't always see." }
    ]
  },
  {
    level: 6,
    scenario: "A war breaks out between countries you know little about.",
    choices: [
      { text: "Think 'They're always fighting over there. That's just how those people are.'", type: "judgment", insight: "Judgment stereotypes entire regions. Conflict has complex causes, not cultural destiny." },
      { text: "Think 'I don't understand this conflict. Let me learn before forming opinions.'", type: "acceptance", insight: "Acceptance seeks understanding. Headlines rarely capture the full story." }
    ]
  },
  {
    level: 6,
    scenario: "You see extreme poverty in images from another part of the world.",
    choices: [
      { text: "Think 'Their governments are corrupt. It's not my responsibility.'", type: "judgment", insight: "Judgment assigns blame and creates distance. But global systems connect us all." },
      { text: "Think 'The circumstances of birth are random. What can I do to help?'", type: "acceptance", insight: "Acceptance sees shared humanity. Fortune is not earned; response is chosen." }
    ]
  },
  {
    level: 6,
    scenario: "Different countries have values very different from yours.",
    choices: [
      { text: "Think 'Our way is the right way. They need to modernize.'", type: "judgment", insight: "Judgment assumes cultural superiority. But 'modern' isn't a single destination." },
      { text: "Think 'There are many ways to live. What can I learn from difference?'", type: "acceptance", insight: "Acceptance respects diversity. Humility opens learning." }
    ]
  },
  {
    level: 6,
    scenario: "Global cooperation fails on an important issue.",
    choices: [
      { text: "Think 'Other countries are selfish. They don't care about the world.'", type: "judgment", insight: "Judgment blames outward. But your country is also part of the failure." },
      { text: "Think 'Cooperation is hard. What would make it easier? What's our part?'", type: "acceptance", insight: "Acceptance examines all sides, including your own country's role." }
    ]
  },
  {
    level: 6,
    scenario: "You realize your lifestyle may impact people far away.",
    choices: [
      { text: "Think 'I can't be responsible for everything. It's too overwhelming.'", type: "judgment", insight: "Judgment avoids through overwhelm. But awareness doesn't require fixing everything." },
      { text: "Think 'I'm connected to more than I realized. What's one thing I can change?'", type: "acceptance", insight: "Acceptance starts small. One change is better than paralysis." }
    ]
  },
  {
    level: 6,
    scenario: "A natural disaster devastates a country across the world.",
    choices: [
      { text: "Think 'That's terrible' and move on with your day.", type: "judgment", insight: "Judgment acknowledges without engaging. But brief attention isn't the same as caring." },
      { text: "Consider 'How can I help, even in a small way? Who's doing good work there?'", type: "acceptance", insight: "Acceptance looks for action. Small contributions join larger efforts." }
    ]
  },
  {
    level: 6,
    scenario: "You benefit from products made in countries with poor labor conditions.",
    choices: [
      { text: "Think 'I can't research everything I buy. That's unrealistic.'", type: "judgment", insight: "Judgment justifies inaction. But some awareness is better than none." },
      { text: "Accept 'I can't be perfect here. I can make better choices where I can.'", type: "acceptance", insight: "Acceptance does what's possible. Progress, not perfection." }
    ]
  },
  {
    level: 6,
    scenario: "People from another culture do things that seem wrong to you.",
    choices: [
      { text: "Think 'That's barbaric. How can they do that?'", type: "judgment", insight: "Judgment condemns from your cultural lens. But your norms aren't universal truth." },
      { text: "Ask 'Do I understand the context? What do people within that culture say?'", type: "acceptance", insight: "Acceptance seeks understanding before judgment. Context matters." }
    ]
  },
  {
    level: 6,
    scenario: "Your country is criticized by people from other nations.",
    choices: [
      { text: "Think 'They don't understand us. They should worry about their own problems.'", type: "judgment", insight: "Judgment deflects criticism. But outside perspectives sometimes see what insiders can't." },
      { text: "Consider 'Is there any truth here? What might they see that we don't?'", type: "acceptance", insight: "Acceptance considers criticism. Valid points can come from unexpected sources." }
    ]
  },
  {
    level: 6,
    scenario: "Global inequality seems too big to address.",
    choices: [
      { text: "Think 'There's nothing I can do. The problem is too massive.'", type: "judgment", insight: "Judgment paralyzes with scale. But every solution started with someone who acted anyway." },
      { text: "Think 'The problem is huge. My part is small AND it matters.'", type: "acceptance", insight: "Acceptance acts without needing to solve everything. Your drop joins the ocean." }
    ]
  },
  {
    level: 6,
    scenario: "You realize how little you know about most of the world.",
    choices: [
      { text: "Think 'I can't know everything. It doesn't matter anyway.'", type: "judgment", insight: "Judgment dismisses ignorance. But not knowing makes us vulnerable to manipulation." },
      { text: "Think 'I have so much to learn. Where should I start?'", type: "acceptance", insight: "Acceptance embraces learning. Curiosity about the world enriches your life." }
    ]
  },

  // ========== HUMANITY & CONNECTION (20) ==========
  {
    level: 6,
    scenario: "You meet someone from a culture you've had negative impressions of.",
    choices: [
      { text: "Let your preconceptions shape the interaction.", type: "judgment", insight: "Judgment sees the category, not the person. But individuals aren't their stereotypes." },
      { text: "Meet them as an individual, not a representative of their culture.", type: "acceptance", insight: "Acceptance sees the person first. One human meeting another human." }
    ]
  },
  {
    level: 6,
    scenario: "Someone's cultural practices make you uncomfortable.",
    choices: [
      { text: "Think 'That's wrong. They shouldn't do that.'", type: "judgment", insight: "Judgment applies your standards universally. But discomfort isn't the same as wrong." },
      { text: "Notice 'I'm uncomfortable. Let me explore why before deciding what I think.'", type: "acceptance", insight: "Acceptance examines discomfort. Sometimes it teaches you about them; sometimes about yourself." }
    ]
  },
  {
    level: 6,
    scenario: "You realize people everywhere want similar things: safety, love, meaning.",
    choices: [
      { text: "Think 'Then why do they act so differently from us?'", type: "judgment", insight: "Judgment expects sameness. But shared desires get expressed through different cultures." },
      { text: "Think 'Our common humanity is deeper than our differences.'", type: "acceptance", insight: "Acceptance finds connection. Beneath cultural surfaces, we're more alike than different." }
    ]
  },
  {
    level: 6,
    scenario: "Language barriers make communication difficult with someone.",
    choices: [
      { text: "Get frustrated: 'Why don't they learn the language?'", type: "judgment", insight: "Judgment blames them for the gap. But you also don't speak their language." },
      { text: "Find other ways to connect: gestures, patience, translation apps.", type: "acceptance", insight: "Acceptance finds bridges. Communication is possible with creativity and patience." }
    ]
  },
  {
    level: 6,
    scenario: "A global event makes you feel connected to all of humanity.",
    choices: [
      { text: "Dismiss it: 'That feeling won't last. Things will go back to normal.'", type: "judgment", insight: "Judgment dismisses moments of connection. But these moments reveal what's always true." },
      { text: "Honor it: 'This is real. We are connected, even when I forget.'", type: "acceptance", insight: "Acceptance holds the insight. Connection doesn't require constant awareness to be real." }
    ]
  },
  {
    level: 6,
    scenario: "Someone from another country has a very different view of history.",
    choices: [
      { text: "Think 'They've been taught propaganda. Our version is correct.'", type: "judgment", insight: "Judgment assumes your history is objective. But all histories are partial." },
      { text: "Think 'History looks different from different positions. What can I learn from their view?'", type: "acceptance", insight: "Acceptance holds multiple perspectives. Truth is often larger than any single narrative." }
    ]
  },
  {
    level: 6,
    scenario: "People in another country seem happy despite having less materially.",
    choices: [
      { text: "Think 'They just don't know what they're missing.'", type: "judgment", insight: "Judgment assumes your lifestyle is the goal. But happiness has many sources." },
      { text: "Think 'Maybe they know something about happiness that I don't.'", type: "acceptance", insight: "Acceptance learns from different lives. Wealth and wellbeing aren't the same thing." }
    ]
  },
  {
    level: 6,
    scenario: "Immigration is changing the composition of your country.",
    choices: [
      { text: "Think 'Our culture is being diluted. We're losing who we are.'", type: "judgment", insight: "Judgment sees change as loss. But cultures have always evolved through mixing." },
      { text: "Think 'Cultures have always blended. What's valuable to preserve? What can we learn?'", type: "acceptance", insight: "Acceptance engages with change. Preservation and evolution can coexist." }
    ]
  },
  {
    level: 6,
    scenario: "You have an opportunity to help someone in another country.",
    choices: [
      { text: "Think 'I should help people in my own country first.'", type: "judgment", insight: "Judgment ranks suffering by geography. But need doesn't require proximity." },
      { text: "Think 'Helping is helping. Borders don't determine who deserves compassion.'", type: "acceptance", insight: "Acceptance extends beyond borders. Your circle of care can be as wide as you choose." }
    ]
  },
  {
    level: 6,
    scenario: "A global movement asks for your support.",
    choices: [
      { text: "Think 'Those global things never change anything.'", type: "judgment", insight: "Judgment dismisses collective action. But every global change started with individuals joining." },
      { text: "Consider 'Does this align with my values? How can I meaningfully participate?'", type: "acceptance", insight: "Acceptance evaluates and engages. Your participation adds to the whole." }
    ]
  },
  {
    level: 6,
    scenario: "You feel overwhelmed by suffering in the world.",
    choices: [
      { text: "Shut down: 'I can't look at this. It's too much.'", type: "judgment", insight: "Judgment protects through avoidance. But looking away doesn't make suffering disappear." },
      { text: "Accept 'I can't hold all of it. I can hold some of it and still function.'", type: "acceptance", insight: "Acceptance finds sustainable compassion. You don't have to absorb everything to care." }
    ]
  },
  {
    level: 6,
    scenario: "Different religions around the world claim different truths.",
    choices: [
      { text: "Think 'Only one can be right. The others are wrong.'", type: "judgment", insight: "Judgment needs exclusivity. But truth might be larger than any single tradition." },
      { text: "Think 'Different paths seek similar things. What can I learn from each?'", type: "acceptance", insight: "Acceptance finds wisdom across traditions. Humility opens doors that certainty closes." }
    ]
  },
  {
    level: 6,
    scenario: "You learn about injustices your country committed in the past.",
    choices: [
      { text: "Think 'That was a long time ago. We shouldn't keep apologizing.'", type: "judgment", insight: "Judgment wants to close the book. But unaddressed history shapes the present." },
      { text: "Accept 'This is our history. Acknowledging it doesn't mean endless guilt—it means honesty.'", type: "acceptance", insight: "Acceptance faces history. You can love your country while being honest about its past." }
    ]
  },
  {
    level: 6,
    scenario: "Someone suggests humans are fundamentally the same everywhere.",
    choices: [
      { text: "Think 'No, some cultures are clearly more advanced than others.'", type: "judgment", insight: "Judgment ranks humanity. But 'advanced' depends on what you're measuring." },
      { text: "Think 'We're the same in many ways, different in others. Both are true.'", type: "acceptance", insight: "Acceptance holds nuance. Unity and diversity aren't opposites." }
    ]
  },
  {
    level: 6,
    scenario: "The world feels increasingly connected and also increasingly divided.",
    choices: [
      { text: "Think 'Connection is an illusion. We're more divided than ever.'", type: "judgment", insight: "Judgment sees only the division. But connection and conflict have always coexisted." },
      { text: "Accept 'Both are true. Connection and division are happening simultaneously.'", type: "acceptance", insight: "Acceptance holds paradox. The world is more connected AND more visibly divided." }
    ]
  },
  {
    level: 6,
    scenario: "You're asked to care about issues you feel disconnected from.",
    choices: [
      { text: "Think 'I can't care about everything. I have my own problems.'", type: "judgment", insight: "Judgment creates hierarchy of concern. But caring isn't zero-sum." },
      { text: "Think 'I can expand my awareness without abandoning my own life.'", type: "acceptance", insight: "Acceptance broadens without drowning. You can hold your life and the world together." }
    ]
  },
  {
    level: 6,
    scenario: "Global problems seem to require cooperation that feels impossible.",
    choices: [
      { text: "Think 'We'll never get everyone to agree. It's hopeless.'", type: "judgment", insight: "Judgment demands perfection before acting. But imperfect cooperation beats none." },
      { text: "Think 'Perfect cooperation is impossible. Imperfect cooperation is still progress.'", type: "acceptance", insight: "Acceptance works with what's possible. Some movement beats no movement." }
    ]
  },
  {
    level: 6,
    scenario: "You realize you have more in common with someone across the world than your neighbor.",
    choices: [
      { text: "Think 'That's strange. Geography should matter more.'", type: "judgment", insight: "Judgment expects physical proximity to create connection. But values connect beyond borders." },
      { text: "Think 'Connection isn't about geography. It's about shared humanity and values.'", type: "acceptance", insight: "Acceptance finds tribe across borders. Your people might be anywhere." }
    ]
  },
  {
    level: 6,
    scenario: "The internet exposes you to suffering you'd never have known about before.",
    choices: [
      { text: "Think 'I wish I didn't know. Ignorance was more comfortable.'", type: "judgment", insight: "Judgment prefers comfort to awareness. But knowledge creates responsibility." },
      { text: "Think 'Knowing is uncomfortable AND important. What will I do with this awareness?'", type: "acceptance", insight: "Acceptance honors uncomfortable knowledge. Awareness is the beginning of response." }
    ]
  },
  {
    level: 6,
    scenario: "Different parts of the world face different problems than yours.",
    choices: [
      { text: "Think 'Our problems are real. Theirs seem exaggerated.'", type: "judgment", insight: "Judgment minimizes what it doesn't experience. But all struggles are real to those living them." },
      { text: "Think 'Different contexts create different challenges. All are real.'", type: "acceptance", insight: "Acceptance validates without ranking. Struggle isn't a competition." }
    ]
  },

  // ========== YOUR GLOBAL IMPACT (15) ==========
  {
    level: 6,
    scenario: "You want to help globally but don't know where to start.",
    choices: [
      { text: "Think 'What can one person do? It's pointless.'", type: "judgment", insight: "Judgment demands visible impact before acting. But every movement is made of individuals." },
      { text: "Ask 'What's one organization or cause I can support consistently?'", type: "acceptance", insight: "Acceptance starts somewhere. Consistent small action outweighs occasional grand gestures." }
    ]
  },
  {
    level: 6,
    scenario: "Your consumer choices affect people in other countries.",
    choices: [
      { text: "Think 'I can't think about that every time I shop.'", type: "judgment", insight: "Judgment dismisses connection. But ignoring impact doesn't eliminate it." },
      { text: "Think 'I can be more conscious in some purchases, even if not all.'", type: "acceptance", insight: "Acceptance does what's sustainable. Some awareness beats none." }
    ]
  },
  {
    level: 6,
    scenario: "Climate change requires global action you feel powerless to influence.",
    choices: [
      { text: "Think 'My actions don't matter. It's up to governments and corporations.'", type: "judgment", insight: "Judgment absolves through scale. But governments and corporations respond to people." },
      { text: "Think 'My actions are small AND they matter. So does my voice.'", type: "acceptance", insight: "Acceptance acts anyway. Your choices and advocacy both contribute." }
    ]
  },
  {
    level: 6,
    scenario: "You have skills that could help people far away.",
    choices: [
      { text: "Think 'They probably don't want outside help. It's not my place.'", type: "judgment", insight: "Judgment assumes rejection. But many organizations connect skills with needs." },
      { text: "Explore 'How could my skills be useful? Who's already doing this work?'", type: "acceptance", insight: "Acceptance offers what it has. Your skills might be exactly what someone needs." }
    ]
  },
  {
    level: 6,
    scenario: "Learning about global issues feels depressing and hopeless.",
    choices: [
      { text: "Stop learning: 'Ignorance is bliss. I'll focus on my own life.'", type: "judgment", insight: "Judgment chooses comfort over engagement. But withdrawal doesn't change anything." },
      { text: "Balance: 'I can stay informed without being consumed. Awareness with action.'", type: "acceptance", insight: "Acceptance finds sustainable engagement. Informed action beats overwhelmed paralysis." }
    ]
  },
  {
    level: 6,
    scenario: "Someone suggests you're privileged compared to most of the world.",
    choices: [
      { text: "Get defensive: 'I've worked hard for what I have.'", type: "judgment", insight: "Judgment hears accusation. But acknowledging privilege doesn't erase effort." },
      { text: "Accept 'Compared to global standards, I am privileged. What do I do with that?'", type: "acceptance", insight: "Acceptance holds both effort and context. Privilege is a starting point, not an indictment." }
    ]
  },
  {
    level: 6,
    scenario: "You wonder if charity creates dependency rather than change.",
    choices: [
      { text: "Think 'Charity doesn't work. It just makes people dependent.'", type: "judgment", insight: "Judgment dismisses all help. But effective aid exists alongside ineffective aid." },
      { text: "Research 'What approaches actually create sustainable change? How do I support those?'", type: "acceptance", insight: "Acceptance seeks effectiveness. Criticism can lead to better giving, not just less giving." }
    ]
  },
  {
    level: 6,
    scenario: "Global problems seem to get worse despite efforts to address them.",
    choices: [
      { text: "Think 'Nothing works. Human nature will always create suffering.'", type: "judgment", insight: "Judgment gives up on progress. But many global metrics have improved dramatically." },
      { text: "Think 'Progress is uneven and slow. It's still real.'", type: "acceptance", insight: "Acceptance sees long trends. Setbacks don't erase progress." }
    ]
  },
  {
    level: 6,
    scenario: "You're inspired by someone making a global difference.",
    choices: [
      { text: "Think 'I could never do that. They're special.'", type: "judgment", insight: "Judgment makes heroes unreachable. But most changemakers started as ordinary people." },
      { text: "Think 'What can I learn from their path? What's my version of contribution?'", type: "acceptance", insight: "Acceptance finds your own path. You don't need to be them to make a difference." }
    ]
  },
  {
    level: 6,
    scenario: "International travel exposes you to lives very different from yours.",
    choices: [
      { text: "Feel guilty: 'I have so much and they have so little.'", type: "judgment", insight: "Judgment stops at guilt. But guilt without action is just self-focused suffering." },
      { text: "Reflect 'This perspective is valuable. What will I do with what I've seen?'", type: "acceptance", insight: "Acceptance transforms experience into action. Let what you've witnessed change you." }
    ]
  },
  {
    level: 6,
    scenario: "You feel torn between local needs and global causes.",
    choices: [
      { text: "Think 'I have to choose. I can't care about everything.'", type: "judgment", insight: "Judgment creates false either/or. But local and global aren't always competing." },
      { text: "Think 'I can engage locally AND globally. Balance, not either/or.'", type: "acceptance", insight: "Acceptance finds integration. You can think globally and act locally and globally." }
    ]
  },
  {
    level: 6,
    scenario: "Economic systems connect you to people you'll never meet.",
    choices: [
      { text: "Think 'It's too abstract. I can't think about people I can't see.'", type: "judgment", insight: "Judgment needs visibility to care. But invisible connections are still real." },
      { text: "Think 'My choices affect real people. That matters even if I don't see them.'", type: "acceptance", insight: "Acceptance honors invisible connection. Ethics extend beyond your line of sight." }
    ]
  },
  {
    level: 6,
    scenario: "You realize your worldview is shaped by your particular location.",
    choices: [
      { text: "Think 'My perspective is just as valid as anyone's.'", type: "judgment", insight: "Judgment defends without examining. Valid doesn't mean complete." },
      { text: "Think 'My perspective is valid AND partial. Other views can expand it.'", type: "acceptance", insight: "Acceptance values multiple perspectives. Your view is true without being total." }
    ]
  },
  {
    level: 6,
    scenario: "Technology lets you help people anywhere in the world.",
    choices: [
      { text: "Think 'It's probably a scam. You can't trust online giving.'", type: "judgment", insight: "Judgment dismisses possibility. But vetted organizations exist." },
      { text: "Research 'Which organizations are effective and trustworthy? How can I verify?'", type: "acceptance", insight: "Acceptance does due diligence. Technology enables help when used wisely." }
    ]
  },
  {
    level: 6,
    scenario: "You feel small in the face of 8 billion people on the planet.",
    choices: [
      { text: "Think 'I'm insignificant. One person among billions.'", type: "judgment", insight: "Judgment sees only scale. But every person you affect affects others." },
      { text: "Think 'My ripples extend further than I can see. Connection multiplies impact.'", type: "acceptance", insight: "Acceptance trusts indirect influence. You touch more lives than you'll ever know." }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECISION_LEVEL_6;
}
