// LEVEL UP - DECISION MODE (Acceptance vs Judgment)
// LEVEL 7: GENERATIONS - Legacy, what outlasts you, impact across time
// 50 scenarios teaching acceptance creates freedom, judgment blocks possibility
// Format: { level: 7, scenario: "situation", choices: [{text, type, insight}] }

const DECISION_LEVEL_7 = [

  // ========== MORTALITY & MEANING (15) ==========
  {
    level: 7,
    scenario: "You think about the fact that you will die someday.",
    choices: [
      { text: "Avoid it: 'That's too morbid to think about.'", type: "judgment", insight: "Judgment pushes death away. But avoiding death often means avoiding full life." },
      { text: "Accept 'This is true. How does knowing this shape how I want to live?'", type: "acceptance", insight: "Acceptance uses death as a teacher. Mortality clarifies what matters." }
    ]
  },
  {
    level: 7,
    scenario: "You realize you have limited time left to accomplish your dreams.",
    choices: [
      { text: "Think 'It's too late. I should have started years ago.'", type: "judgment", insight: "Judgment mourns lost time. But regret doesn't add time; action does." },
      { text: "Think 'I have the time I have. What's the best use of it?'", type: "acceptance", insight: "Acceptance starts from now. The best time to start was years ago; the second best is today." }
    ]
  },
  {
    level: 7,
    scenario: "You consider what you want to leave behind when you're gone.",
    choices: [
      { text: "Think 'I haven't accomplished enough. My life won't matter.'", type: "judgment", insight: "Judgment measures against impossible standards. But legacy isn't only in grand achievements." },
      { text: "Think 'How I live each day is my legacy. What values do I embody?'", type: "acceptance", insight: "Acceptance sees legacy as daily living. Every interaction leaves something behind." }
    ]
  },
  {
    level: 7,
    scenario: "You see young people making choices you disagree with.",
    choices: [
      { text: "Think 'This generation is ruined. They have no values.'", type: "judgment", insight: "Judgment condemns entire generations. Every generation has been criticized by the one before." },
      { text: "Think 'Each generation faces unique challenges. What wisdom can I share without imposing?'", type: "acceptance", insight: "Acceptance bridges generations. Wisdom is offered, not imposed." }
    ]
  },
  {
    level: 7,
    scenario: "You worry about the world your children or grandchildren will inherit.",
    choices: [
      { text: "Think 'Everything is getting worse. There's no hope for them.'", type: "judgment", insight: "Judgment sees only decline. But despair doesn't protect future generations." },
      { text: "Think 'There are real challenges. How do I help prepare them and create better?'", type: "acceptance", insight: "Acceptance balances concern with action. Worry without action helps no one." }
    ]
  },
  {
    level: 7,
    scenario: "You notice patterns from your family repeating in yourself.",
    choices: [
      { text: "Think 'I'm just like them. I'll never break free.'", type: "judgment", insight: "Judgment sees patterns as destiny. But awareness is the first step to change." },
      { text: "Think 'I notice these patterns. Now I can choose whether to continue them.'", type: "acceptance", insight: "Acceptance sees patterns as changeable. Noticing is power." }
    ]
  },
  {
    level: 7,
    scenario: "Someone you love dies without your having said important things.",
    choices: [
      { text: "Think 'I'll never forgive myself. I wasted our time.'", type: "judgment", insight: "Judgment compounds loss with guilt. But self-punishment doesn't honor them." },
      { text: "Accept 'I wish I had said more. I'll carry that lesson into other relationships.'", type: "acceptance", insight: "Acceptance grieves without endless guilt. Let the loss teach you for the living." }
    ]
  },
  {
    level: 7,
    scenario: "You reflect on mistakes you made raising your children.",
    choices: [
      { text: "Think 'I ruined them. They'd be better if I'd been different.'", type: "judgment", insight: "Judgment takes all blame. But parenting is imperfect for everyone." },
      { text: "Think 'I did my best with what I knew. I can acknowledge mistakes and love them now.'", type: "acceptance", insight: "Acceptance holds imperfection with compassion. Love continues regardless of past mistakes." }
    ]
  },
  {
    level: 7,
    scenario: "You wonder if your life has made any difference.",
    choices: [
      { text: "Think 'I haven't changed the world. My life didn't matter.'", type: "judgment", insight: "Judgment requires grand impact. But most meaningful lives are quiet ones." },
      { text: "Think 'Every interaction ripples outward. I may never see my full impact.'", type: "acceptance", insight: "Acceptance trusts invisible influence. Kindness compounds across time." }
    ]
  },
  {
    level: 7,
    scenario: "You haven't written down your wishes for end of life.",
    choices: [
      { text: "Avoid it: 'That's planning for death. I don't want to think about it.'", type: "judgment", insight: "Judgment avoids discomfort. But unprepared endings burden those you love." },
      { text: "Accept 'This is responsible and loving. My family deserves clarity.'", type: "acceptance", insight: "Acceptance prepares as an act of love. Preparation is care, not morbidity." }
    ]
  },
  {
    level: 7,
    scenario: "You watch a parent or grandparent decline.",
    choices: [
      { text: "Think 'This is too hard to face. I can't watch this.'", type: "judgment", insight: "Judgment avoids the witness. But your presence matters, even when words fail." },
      { text: "Accept 'This is painful. I can be present with them through it.'", type: "acceptance", insight: "Acceptance accompanies. Being there is the gift, not fixing or avoiding." }
    ]
  },
  {
    level: 7,
    scenario: "You realize how much of who you are came from people now gone.",
    choices: [
      { text: "Feel sad: 'They're gone and took part of me with them.'", type: "judgment", insight: "Judgment sees only loss. But what they gave you lives on." },
      { text: "Honor 'They live on through what they gave me. I carry them forward.'", type: "acceptance", insight: "Acceptance carries legacy forward. You are their continuation." }
    ]
  },
  {
    level: 7,
    scenario: "You have regrets you've never tried to resolve.",
    choices: [
      { text: "Think 'It's too late now. The moment passed.'", type: "judgment", insight: "Judgment closes doors. But some repairs are possible even years later." },
      { text: "Ask 'Is there anything I can still do? An amend, a conversation, a change?'", type: "acceptance", insight: "Acceptance looks for what's still possible. It's often more than you think." }
    ]
  },
  {
    level: 7,
    scenario: "You face the reality that you can't protect those you love from suffering.",
    choices: [
      { text: "Think 'I should be able to protect them. I'm failing.'", type: "judgment", insight: "Judgment demands the impossible. But suffering is part of life for everyone." },
      { text: "Accept 'I can't prevent all suffering. I can be present through it.'", type: "acceptance", insight: "Acceptance releases impossible burdens. Presence is what you can offer." }
    ]
  },
  {
    level: 7,
    scenario: "You think about what you want said at your funeral.",
    choices: [
      { text: "Think 'That's morbid. I don't want to think about that.'", type: "judgment", insight: "Judgment avoids reflection. But this question reveals how you want to live." },
      { text: "Reflect 'What would I want said? Am I living that way now?'", type: "acceptance", insight: "Acceptance uses the future to clarify the present. Let your desired eulogy guide today." }
    ]
  },

  // ========== NEXT GENERATIONS (20) ==========
  {
    level: 7,
    scenario: "You see a child struggling with something you struggled with.",
    choices: [
      { text: "Think 'Just toughen up. I had to figure it out alone.'", type: "judgment", insight: "Judgment repeats patterns. But you can give what you didn't receive." },
      { text: "Think 'I know this pain. What support do I wish I'd had?'", type: "acceptance", insight: "Acceptance breaks cycles. Your wound becomes wisdom for others." }
    ]
  },
  {
    level: 7,
    scenario: "Young people don't seem to respect traditions you value.",
    choices: [
      { text: "Think 'They don't care about anything meaningful.'", type: "judgment", insight: "Judgment blames youth. But traditions survive by being made relevant, not by obligation." },
      { text: "Ask 'How do I share what matters in a way that connects with them?'", type: "acceptance", insight: "Acceptance adapts transmission. The essence can survive new forms." }
    ]
  },
  {
    level: 7,
    scenario: "You have wisdom you want to pass on but no one asks.",
    choices: [
      { text: "Think 'No one wants to learn from me. I'm irrelevant.'", type: "judgment", insight: "Judgment waits to be asked. But wisdom can be offered, not just requested." },
      { text: "Find ways to share: 'Write it down. Tell stories. Be available.'", type: "acceptance", insight: "Acceptance creates opportunities. Those who need it will find it." }
    ]
  },
  {
    level: 7,
    scenario: "Technology is changing faster than you can keep up.",
    choices: [
      { text: "Think 'The world is leaving me behind. I don't belong anymore.'", type: "judgment", insight: "Judgment excludes yourself. But wisdom isn't obsolete just because tools change." },
      { text: "Think 'I can learn what I need to. And my experience still has value.'", type: "acceptance", insight: "Acceptance finds your place in change. Every age has something to offer." }
    ]
  },
  {
    level: 7,
    scenario: "You consider whether to have children given the state of the world.",
    choices: [
      { text: "Think 'It's irresponsible to bring children into this mess.'", type: "judgment", insight: "Judgment applies moral weight to personal choice. But this decision has no universal right answer." },
      { text: "Think 'This is a personal decision. What feels right for me and my values?'", type: "acceptance", insight: "Acceptance honors personal choice. Neither having nor not having children is the 'right' answer." }
    ]
  },
  {
    level: 7,
    scenario: "Your children make choices very different from yours.",
    choices: [
      { text: "Think 'Where did I go wrong? They should have turned out differently.'", type: "judgment", insight: "Judgment takes their choices as your failure. But they're their own people." },
      { text: "Accept 'They're living their own life. I can love them without agreeing.'", type: "acceptance", insight: "Acceptance releases control. Your job was to raise them; their job is to live." }
    ]
  },
  {
    level: 7,
    scenario: "You want to help a young person but they won't listen.",
    choices: [
      { text: "Think 'They'll have to learn the hard way. I give up.'", type: "judgment", insight: "Judgment withdraws support. But presence matters even when advice is rejected." },
      { text: "Think 'I can stay available without forcing my help. They'll come when ready.'", type: "acceptance", insight: "Acceptance keeps doors open. Your patience might be what they remember most." }
    ]
  },
  {
    level: 7,
    scenario: "You see cycles of pain repeating in your family.",
    choices: [
      { text: "Think 'This is just how we are. It can't be changed.'", type: "judgment", insight: "Judgment accepts dysfunction as destiny. But cycles break when one person changes." },
      { text: "Think 'I see this pattern. What ends with me? What do I pass forward differently?'", type: "acceptance", insight: "Acceptance empowers change. You can be the one who breaks the cycle." }
    ]
  },
  {
    level: 7,
    scenario: "A young person teaches you something new.",
    choices: [
      { text: "Feel embarrassed: 'I should know this. They're so much younger.'", type: "judgment", insight: "Judgment protects ego. But learning has no age requirement." },
      { text: "Feel grateful: 'Everyone can be my teacher. Age isn't the only source of wisdom.'", type: "acceptance", insight: "Acceptance receives humbly. Wisdom flows in all directions." }
    ]
  },
  {
    level: 7,
    scenario: "You inherit something meaningful from someone who passed.",
    choices: [
      { text: "Think 'This just reminds me they're gone.'", type: "judgment", insight: "Judgment sees only absence. But inherited objects carry presence forward." },
      { text: "Think 'This connects me to them. I carry part of their story now.'", type: "acceptance", insight: "Acceptance receives the gift. Objects can hold love across time." }
    ]
  },
  {
    level: 7,
    scenario: "You realize you're becoming like your parents in ways you resisted.",
    choices: [
      { text: "Think 'No! I swore I'd be different. I'm failing.'", type: "judgment", insight: "Judgment fights inevitable influence. But influence isn't the same as being trapped." },
      { text: "Accept 'Some parts of them live in me. I can choose which ones to embrace.'", type: "acceptance", insight: "Acceptance sorts inheritance. You keep what serves; you release what doesn't." }
    ]
  },
  {
    level: 7,
    scenario: "A young person asks about your life story.",
    choices: [
      { text: "Dismiss it: 'My life isn't that interesting. Nothing special.'", type: "judgment", insight: "Judgment minimizes your story. But every life has lessons for others." },
      { text: "Share: 'Let me tell you what I've learned. Mistakes and all.'", type: "acceptance", insight: "Acceptance shares openly. Your story might be exactly what they need to hear." }
    ]
  },
  {
    level: 7,
    scenario: "You see the next generation facing challenges you never imagined.",
    choices: [
      { text: "Think 'I don't understand their world. I can't help.'", type: "judgment", insight: "Judgment creates disconnection. But human challenges often share common roots." },
      { text: "Think 'The details differ, but human struggles have patterns. What's transferable?'", type: "acceptance", insight: "Acceptance finds bridges. Your experience maps onto theirs in unexpected ways." }
    ]
  },
  {
    level: 7,
    scenario: "You want to apologize to someone from your past but can't reach them.",
    choices: [
      { text: "Think 'It's too late. I'll carry this guilt forever.'", type: "judgment", insight: "Judgment makes guilt permanent. But amends can take many forms." },
      { text: "Consider 'Living amends: how do I treat others differently because of what I learned?'", type: "acceptance", insight: "Acceptance finds forward motion. You can't change the past, but you can change the future." }
    ]
  },
  {
    level: 7,
    scenario: "You have gifts you haven't fully shared with the world.",
    choices: [
      { text: "Think 'It's too late. My time has passed.'", type: "judgment", insight: "Judgment closes before trying. But gifts don't expire." },
      { text: "Think 'What haven't I offered yet? There's still time.'", type: "acceptance", insight: "Acceptance looks for remaining opportunity. Your gifts are still needed." }
    ]
  },
  {
    level: 7,
    scenario: "You feel disconnected from younger generations.",
    choices: [
      { text: "Think 'We have nothing in common. They live in a different world.'", type: "judgment", insight: "Judgment creates distance. But connection requires effort, not effortless similarity." },
      { text: "Ask 'What do we share? What can I learn about their world?'", type: "acceptance", insight: "Acceptance bridges with curiosity. Interest creates connection." }
    ]
  },
  {
    level: 7,
    scenario: "You watch a grandchild or young relative discover something for the first time.",
    choices: [
      { text: "Think 'I remember when I felt that wonder. It fades.'", type: "judgment", insight: "Judgment projects loss onto their joy. But their wonder is their own." },
      { text: "Think 'Their wonder reminds me wonder is always available. I can learn from them.'", type: "acceptance", insight: "Acceptance receives the gift. Fresh eyes teach tired ones." }
    ]
  },
  {
    level: 7,
    scenario: "Family members ask about ancestors you never knew.",
    choices: [
      { text: "Think 'I don't know enough. I failed to preserve the stories.'", type: "judgment", insight: "Judgment blames yourself for gaps. But you carry more than you realize." },
      { text: "Share 'Here's what I know. Let's discover more together.'", type: "acceptance", insight: "Acceptance offers what exists. Incomplete stories are still valuable." }
    ]
  },
  {
    level: 7,
    scenario: "You consider what values you hope will survive you.",
    choices: [
      { text: "Think 'Values can't really be passed on. Everyone chooses their own.'", type: "judgment", insight: "Judgment underestimates influence. But lived values teach more than spoken ones." },
      { text: "Think 'How I live shows what I value. Am I living the message?'", type: "acceptance", insight: "Acceptance aligns life with values. What you live is what you leave." }
    ]
  },
  {
    level: 7,
    scenario: "A young person struggles with something you've overcome.",
    choices: [
      { text: "Think 'I got through it; they should too. Stop coddling them.'", type: "judgment", insight: "Judgment dismisses their struggle. But support doesn't weaken people." },
      { text: "Think 'My experience might help them. Let me offer without forcing.'", type: "acceptance", insight: "Acceptance offers companionship. Having been there is a gift you can give." }
    ]
  },

  // ========== YOUR LEGACY (15) ==========
  {
    level: 7,
    scenario: "You think about climate change and future generations.",
    choices: [
      { text: "Think 'We've already ruined everything. Future generations are doomed.'", type: "judgment", insight: "Judgment gives up on possibility. But despair doesn't serve those who come after." },
      { text: "Think 'The situation is serious. What can I do that helps?'", type: "acceptance", insight: "Acceptance acknowledges gravity while seeking meaningful action. Acting beats despairing." }
    ]
  },
  {
    level: 7,
    scenario: "You realize you're building something that won't be finished in your lifetime.",
    choices: [
      { text: "Think 'What's the point if I won't see it completed?'", type: "judgment", insight: "Judgment needs to see the end. But many worthy things outlive their builders." },
      { text: "Think 'I plant seeds I might not see bloom. That's still valuable.'", type: "acceptance", insight: "Acceptance contributes to futures it won't witness. Legacy is giving without receiving." }
    ]
  },
  {
    level: 7,
    scenario: "You consider creating something—art, writing, a project—that might outlast you.",
    choices: [
      { text: "Think 'It won't be good enough. Why bother?'", type: "judgment", insight: "Judgment demands masterpieces. But imperfect creations still carry meaning forward." },
      { text: "Think 'It doesn't need to be perfect to matter. What wants to be created through me?'", type: "acceptance", insight: "Acceptance creates anyway. Your creation might mean everything to someone you'll never meet." }
    ]
  },
  {
    level: 7,
    scenario: "You look at how the world has changed during your lifetime.",
    choices: [
      { text: "Think 'Things were better before. Progress has been an illusion.'", type: "judgment", insight: "Judgment romanticizes the past. But the past had its own suffering, often hidden." },
      { text: "Think 'Some things are better, some worse. Change is complex.'", type: "acceptance", insight: "Acceptance holds nuance. Every era has light and shadow." }
    ]
  },
  {
    level: 7,
    scenario: "You wonder if anyone will remember you after you die.",
    choices: [
      { text: "Think 'In a few generations, no one will know I existed. Nothing lasts.'", type: "judgment", insight: "Judgment requires being remembered. But impact doesn't require fame." },
      { text: "Think 'My influence ripples through people I've touched, even if my name is forgotten.'", type: "acceptance", insight: "Acceptance sees invisible legacy. You affect the future even unnamed." }
    ]
  },
  {
    level: 7,
    scenario: "You consider what you're contributing to the long arc of humanity.",
    choices: [
      { text: "Think 'I'm nobody. I contribute nothing to history.'", type: "judgment", insight: "Judgment demands historical significance. But history is made of ordinary people." },
      { text: "Think 'I'm part of the chain. My small part matters to the whole.'", type: "acceptance", insight: "Acceptance claims your link. Every ancestor who survived contributed to now." }
    ]
  },
  {
    level: 7,
    scenario: "You have the chance to right a wrong from long ago.",
    choices: [
      { text: "Think 'Too much time has passed. It would be awkward now.'", type: "judgment", insight: "Judgment lets discomfort prevent repair. But late repair is better than none." },
      { text: "Think 'It's never too late to make things right. I'll reach out.'", type: "acceptance", insight: "Acceptance chooses repair over comfort. Some reconciliations need decades to ripen." }
    ]
  },
  {
    level: 7,
    scenario: "You think about all you've learned that you might not get to teach.",
    choices: [
      { text: "Think 'What a waste. All this knowledge dies with me.'", type: "judgment", insight: "Judgment sees only loss. But there are ways to preserve what you've learned." },
      { text: "Think 'How can I capture this? Writing, recording, sharing?'", type: "acceptance", insight: "Acceptance looks for transmission. Knowledge can be preserved if you choose to preserve it." }
    ]
  },
  {
    level: 7,
    scenario: "You have more to give than your current situation allows.",
    choices: [
      { text: "Think 'My circumstances prevent me from contributing.'", type: "judgment", insight: "Judgment lets circumstance define capacity. But contribution takes many forms." },
      { text: "Ask 'What can I give from right where I am, with what I have?'", type: "acceptance", insight: "Acceptance finds possibility within constraint. Impact doesn't require optimal conditions." }
    ]
  },
  {
    level: 7,
    scenario: "You feel called to work on something bigger than your own success.",
    choices: [
      { text: "Think 'I should focus on my own life. Grand missions are naive.'", type: "judgment", insight: "Judgment dismisses calling. But meaning often comes from serving something larger." },
      { text: "Think 'This pull is real. How do I honor it while taking care of my life?'", type: "acceptance", insight: "Acceptance integrates purpose with practicality. You can serve beyond yourself and meet your needs." }
    ]
  },
  {
    level: 7,
    scenario: "You've made it through something difficult and want to help others going through it.",
    choices: [
      { text: "Think 'My experience isn't special. They don't need my help.'", type: "judgment", insight: "Judgment dismisses hard-won wisdom. But survival creates teachers." },
      { text: "Think 'I know this path. My experience might light someone's way.'", type: "acceptance", insight: "Acceptance offers what you've learned. Your wounds become medicine for others." }
    ]
  },
  {
    level: 7,
    scenario: "You consider the environmental impact of your lifestyle on future generations.",
    choices: [
      { text: "Think 'One person's choices don't matter. It's hopeless.'", type: "judgment", insight: "Judgment absolves through insignificance. But collective change requires individual action." },
      { text: "Think 'My choices matter. I want to leave things better, not worse.'", type: "acceptance", insight: "Acceptance acts on principle. You can't control the outcome, only your contribution." }
    ]
  },
  {
    level: 7,
    scenario: "You have relationships that need repair before you're gone.",
    choices: [
      { text: "Think 'If they wanted to reconcile, they'd reach out.'", type: "judgment", insight: "Judgment waits for the other. But pride costs more than it protects." },
      { text: "Think 'I don't want to leave things unresolved. I'll make the first move.'", type: "acceptance", insight: "Acceptance takes initiative. Being the one who reaches out is a form of strength." }
    ]
  },
  {
    level: 7,
    scenario: "You want your life to mean something beyond personal achievement.",
    choices: [
      { text: "Think 'Meaning is a luxury. I need to focus on survival.'", type: "judgment", insight: "Judgment postpones meaning. But meaning and survival can coexist." },
      { text: "Think 'How do I weave meaning into daily life, not just as a someday dream?'", type: "acceptance", insight: "Acceptance integrates meaning into ordinary days. Purpose doesn't require grand gestures." }
    ]
  },
  {
    level: 7,
    scenario: "You realize you've lived through history that future generations will study.",
    choices: [
      { text: "Think 'My perspective doesn't matter. The books will decide what happened.'", type: "judgment", insight: "Judgment defers to official narratives. But lived experience is irreplaceable." },
      { text: "Think 'I witnessed this. Recording my experience adds to the full picture.'", type: "acceptance", insight: "Acceptance values personal history. Future generations need eyewitness accounts." }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECISION_LEVEL_7;
}
