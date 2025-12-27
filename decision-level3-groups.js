// LEVEL UP - DECISION MODE (Acceptance vs Judgment)
// LEVEL 3: GROUPS - Friends, coworkers, teams, extended relationships
// 50 scenarios teaching acceptance creates freedom, judgment blocks possibility
// Format: { level: 3, scenario: "situation", choices: [{text, type, insight}] }

const DECISION_LEVEL_3 = [

  // ========== FRIENDSHIPS (15) ==========
  {
    level: 3,
    scenario: "A friend cancels plans at the last minute.",
    choices: [
      { text: "Think 'They don't value our friendship. I'm not a priority.'", type: "judgment", insight: "Judgment assumes intent. But their cancellation might have nothing to do with you." },
      { text: "Think 'Something came up for them. I can be disappointed without making it mean something.'", type: "acceptance", insight: "Acceptance holds disappointment without adding story. People cancel for many reasons." }
    ]
  },
  {
    level: 3,
    scenario: "A friend doesn't respond to your message for days.",
    choices: [
      { text: "Think 'They're ignoring me. They must be mad or don't care.'", type: "judgment", insight: "Judgment fills silence with story. But their silence is usually about their life, not yours." },
      { text: "Think 'They're probably busy. I'll follow up if I don't hear back.'", type: "acceptance", insight: "Acceptance doesn't catastrophize. Most slow responses aren't personal." }
    ]
  },
  {
    level: 3,
    scenario: "You discover a friend group hung out without you.",
    choices: [
      { text: "Think 'They don't want me around. I'm not really part of the group.'", type: "judgment", insight: "Judgment makes exclusion personal. But not every gathering requires every person." },
      { text: "Notice 'That stings. I can ask about it or let it go—not everything is about me.'", type: "acceptance", insight: "Acceptance allows the sting without the spiral. One event isn't a verdict on your belonging." }
    ]
  },
  {
    level: 3,
    scenario: "A friend succeeds at something you've been trying to achieve.",
    choices: [
      { text: "Think 'They got lucky. It's not fair—I've worked harder.'", type: "judgment", insight: "Judgment diminishes their success to protect your ego. But their win isn't your loss." },
      { text: "Think 'I'm happy for them AND disappointed for myself. Both can be true.'", type: "acceptance", insight: "Acceptance holds complexity. You can celebrate them while honoring your own feelings." }
    ]
  },
  {
    level: 3,
    scenario: "A friend shares something you told them in confidence.",
    choices: [
      { text: "Think 'I can never trust them again. They betrayed me.'", type: "judgment", insight: "Judgment makes trust binary. But people make mistakes—the question is what they do next." },
      { text: "Say 'That was private and it hurt that you shared it. I need to know I can trust you.'", type: "acceptance", insight: "Acceptance addresses the breach directly. Trust can be rebuilt if both people are willing." }
    ]
  },
  {
    level: 3,
    scenario: "You realize you've been doing all the work to maintain a friendship.",
    choices: [
      { text: "Think 'They don't care about me. I'm always the one reaching out.'", type: "judgment", insight: "Judgment assumes equal energy means equal care. But people have different capacities." },
      { text: "Ask 'Is this sustainable for me? Do I want to talk to them about it or adjust my expectations?'", type: "acceptance", insight: "Acceptance empowers you to choose. You can address it, accept it, or let go—all are valid." }
    ]
  },
  {
    level: 3,
    scenario: "A friend gives you feedback you didn't ask for.",
    choices: [
      { text: "Think 'They're criticizing me. Who asked them?'", type: "judgment", insight: "Judgment deflects instead of receiving. But unsolicited feedback sometimes holds truth." },
      { text: "Consider 'That's uncomfortable. Is there anything useful in what they said?'", type: "acceptance", insight: "Acceptance filters for value. You can consider feedback without accepting all of it." }
    ]
  },
  {
    level: 3,
    scenario: "You've grown apart from an old friend.",
    choices: [
      { text: "Think 'Something must be wrong. We shouldn't have grown apart.'", type: "judgment", insight: "Judgment makes natural change a failure. But people grow in different directions." },
      { text: "Accept 'We've both changed. That's okay. This friendship had its season.'", type: "acceptance", insight: "Acceptance honors what was without forcing what isn't. Not all friendships are forever." }
    ]
  },
  {
    level: 3,
    scenario: "A friend is going through something you can't relate to.",
    choices: [
      { text: "Think 'I don't understand. I can't help them.'", type: "judgment", insight: "Judgment makes understanding a prerequisite. But presence doesn't require comprehension." },
      { text: "Say 'I don't fully understand, but I'm here. What do you need from me?'", type: "acceptance", insight: "Acceptance offers presence over expertise. Sometimes being there is enough." }
    ]
  },
  {
    level: 3,
    scenario: "You feel jealous of a friend's relationship.",
    choices: [
      { text: "Think 'Why do they have that and I don't? Something must be wrong with me.'", type: "judgment", insight: "Judgment makes their relationship a commentary on your worth. It isn't." },
      { text: "Notice 'I'm feeling jealous. This is information about what I want for myself.'", type: "acceptance", insight: "Acceptance uses jealousy as data. It's pointing to your desires, not their luck." }
    ]
  },
  {
    level: 3,
    scenario: "A friend keeps complaining about the same problem without changing.",
    choices: [
      { text: "Think 'They just want attention. They don't actually want to change.'", type: "judgment", insight: "Judgment dismisses their struggle. But change is hard, and they might not be ready." },
      { text: "Ask yourself 'Can I listen without needing them to change? Or do I need to set a boundary?'", type: "acceptance", insight: "Acceptance clarifies your capacity. You can only control what you offer, not their progress." }
    ]
  },
  {
    level: 3,
    scenario: "You catch yourself gossiping about someone you know.",
    choices: [
      { text: "Think 'Everyone gossips. It's not a big deal.'", type: "judgment", insight: "Judgment normalizes the behavior. But you know how it feels to be talked about." },
      { text: "Notice 'I'm gossiping. What would I say if they were standing here?'", type: "acceptance", insight: "Acceptance holds you accountable with compassion. Awareness is the first step to different choices." }
    ]
  },
  {
    level: 3,
    scenario: "A friend asks for money and you're uncomfortable.",
    choices: [
      { text: "Think 'They're taking advantage of me. Real friends don't ask for money.'", type: "judgment", insight: "Judgment makes asking a betrayal. But asking is just asking—you can say no." },
      { text: "Respond honestly 'I'm not comfortable with that, but I care about you. Is there another way I can help?'", type: "acceptance", insight: "Acceptance maintains the relationship while honoring your limits. No doesn't have to mean goodbye." }
    ]
  },
  {
    level: 3,
    scenario: "You feel like you have to perform a certain version of yourself with friends.",
    choices: [
      { text: "Think 'I have to be this way or they won't like me.'", type: "judgment", insight: "Judgment makes authenticity dangerous. But friendships built on performance are exhausting." },
      { text: "Ask 'What would happen if I showed more of who I really am?'", type: "acceptance", insight: "Acceptance experiments with authenticity. The friends who stay are the ones worth having." }
    ]
  },
  {
    level: 3,
    scenario: "You realize you've outgrown your friend group.",
    choices: [
      { text: "Think 'I'm becoming snobby. I should be grateful for these friends.'", type: "judgment", insight: "Judgment makes growth a character flaw. But outgrowing isn't arrogance—it's evolution." },
      { text: "Accept 'I'm changing. I can honor these friendships while seeking ones that fit who I'm becoming.'", type: "acceptance", insight: "Acceptance allows transition. You don't have to leave to also seek something new." }
    ]
  },

  // ========== WORKPLACE (20) ==========
  {
    level: 3,
    scenario: "A coworker takes credit for your idea.",
    choices: [
      { text: "Think 'They're a snake. They're trying to make me look bad.'", type: "judgment", insight: "Judgment assigns malice. But sometimes people genuinely forget where ideas came from." },
      { text: "Decide 'I'll address this directly with them or document my contributions going forward.'", type: "acceptance", insight: "Acceptance takes action without drama. You can advocate for yourself calmly." }
    ]
  },
  {
    level: 3,
    scenario: "You make a mistake at work that affects the team.",
    choices: [
      { text: "Think 'I'm incompetent. They'll never trust me again.'", type: "judgment", insight: "Judgment makes a mistake your identity. But everyone makes mistakes—recovery matters most." },
      { text: "Own it: 'I made an error. Here's what happened and how I'll prevent it.'", type: "acceptance", insight: "Acceptance owns and addresses. Taking responsibility builds more trust than perfection." }
    ]
  },
  {
    level: 3,
    scenario: "Your boss gives you critical feedback.",
    choices: [
      { text: "Think 'They don't appreciate me. Nothing I do is good enough.'", type: "judgment", insight: "Judgment hears criticism as rejection. But feedback is usually about the work, not your worth." },
      { text: "Listen and ask 'Can you give me a specific example so I understand better?'", type: "acceptance", insight: "Acceptance stays curious. Specific feedback is more useful than general impressions." }
    ]
  },
  {
    level: 3,
    scenario: "A coworker is promoted over you.",
    choices: [
      { text: "Think 'It's not fair. I'm better than them. They must be playing politics.'", type: "judgment", insight: "Judgment explains away their success. But maybe they have skills you can't see." },
      { text: "Ask yourself 'What can I learn from this? What do I need to develop?'", type: "acceptance", insight: "Acceptance looks for growth opportunities. Their promotion can be your teacher." }
    ]
  },
  {
    level: 3,
    scenario: "You disagree with a team decision.",
    choices: [
      { text: "Think 'They're making a mistake. I'll prove them wrong.'", type: "judgment", insight: "Judgment sets up opposition. But being right is less important than being part of the team." },
      { text: "Say 'I see it differently. I'll share my concerns, then support whatever we decide together.'", type: "acceptance", insight: "Acceptance disagrees and commits. You can voice concerns without sabotaging outcomes." }
    ]
  },
  {
    level: 3,
    scenario: "A colleague is consistently late to meetings you organize.",
    choices: [
      { text: "Think 'They don't respect my time. They think their time is more valuable.'", type: "judgment", insight: "Judgment assumes disrespect. But chronic lateness is usually about their systems, not your worth." },
      { text: "Address it: 'I notice you're often late. Is there something we could adjust?'", type: "acceptance", insight: "Acceptance addresses the behavior without attacking character. Solutions beat resentment." }
    ]
  },
  {
    level: 3,
    scenario: "You're asked to do work outside your job description.",
    choices: [
      { text: "Think 'They're taking advantage of me. This isn't fair.'", type: "judgment", insight: "Judgment assumes exploitation. But sometimes extra work is opportunity in disguise." },
      { text: "Ask 'I can help with this. Can we also discuss how this fits with my current priorities?'", type: "acceptance", insight: "Acceptance helps while setting boundaries. You can be a team player with clear limits." }
    ]
  },
  {
    level: 3,
    scenario: "A team member doesn't pull their weight.",
    choices: [
      { text: "Think 'They're lazy and we're all carrying them.'", type: "judgment", insight: "Judgment labels instead of investigates. But underperformance often has invisible causes." },
      { text: "Consider 'Something might be going on with them. Is this worth addressing directly?'", type: "acceptance", insight: "Acceptance explores before condemning. A conversation might reveal something unexpected." }
    ]
  },
  {
    level: 3,
    scenario: "You feel like an outsider at work.",
    choices: [
      { text: "Think 'I don't fit in here. They don't like me.'", type: "judgment", insight: "Judgment makes feeling like an outsider about being unwanted. But fitting in takes time." },
      { text: "Ask 'What small connection can I make today? Belonging is built, not given.'", type: "acceptance", insight: "Acceptance takes initiative. Belonging often comes from extending first, not waiting to be included." }
    ]
  },
  {
    level: 3,
    scenario: "Someone in a meeting dismisses your contribution.",
    choices: [
      { text: "Think 'They don't respect me. My ideas don't matter here.'", type: "judgment", insight: "Judgment makes one moment a pattern. But dismissal is sometimes about them, not you." },
      { text: "Respond calmly 'I'd like to finish my thought' or let it go and address later if needed.", type: "acceptance", insight: "Acceptance chooses a proportional response. Not every slight requires a battle." }
    ]
  },
  {
    level: 3,
    scenario: "You're struggling with something everyone else seems to find easy.",
    choices: [
      { text: "Think 'I'm the only one who doesn't get it. I'm not smart enough.'", type: "judgment", insight: "Judgment compares your struggle to their appearance of ease. But you don't see their learning curve." },
      { text: "Ask 'Who can I learn from here? Struggling doesn't mean I can't succeed.'", type: "acceptance", insight: "Acceptance normalizes the learning process. Asking for help is strength, not weakness." }
    ]
  },
  {
    level: 3,
    scenario: "There's office drama that doesn't directly involve you.",
    choices: [
      { text: "Get involved: 'I need to know what's happening and pick a side.'", type: "judgment", insight: "Judgment draws you into others' conflicts. But their drama doesn't need your energy." },
      { text: "Step back: 'This isn't my situation. I can stay neutral and focused on my work.'", type: "acceptance", insight: "Acceptance conserves energy. Not every conflict requires your participation." }
    ]
  },
  {
    level: 3,
    scenario: "Your work is criticized publicly in a meeting.",
    choices: [
      { text: "Think 'They're trying to humiliate me. I'll never live this down.'", type: "judgment", insight: "Judgment makes a moment permanent. But how you respond matters more than what happened." },
      { text: "Respond professionally and process the embarrassment later in private.", type: "acceptance", insight: "Acceptance handles the moment with grace. You can feel the sting without letting it show." }
    ]
  },
  {
    level: 3,
    scenario: "You have to work with someone you don't like.",
    choices: [
      { text: "Think 'This is going to be terrible. I can't stand them.'", type: "judgment", insight: "Judgment predicts misery. But professional relationships don't require personal affection." },
      { text: "Decide 'I don't have to like them to work effectively with them.'", type: "acceptance", insight: "Acceptance separates liking from collaborating. Respect is enough for good work." }
    ]
  },
  {
    level: 3,
    scenario: "You feel undervalued at work despite your contributions.",
    choices: [
      { text: "Think 'They don't see my worth. I'll never get recognized here.'", type: "judgment", insight: "Judgment waits for recognition instead of asking for it. But value isn't always visible." },
      { text: "Ask 'How do I make my contributions more visible? What conversations do I need to have?'", type: "acceptance", insight: "Acceptance takes ownership of being seen. Recognition often follows visibility." }
    ]
  },
  {
    level: 3,
    scenario: "Your company makes a decision you disagree with ethically.",
    choices: [
      { text: "Think 'They're all corrupt. This place is terrible.'", type: "judgment", insight: "Judgment condemns the whole from a part. But organizations are complex, and people within may share your concerns." },
      { text: "Consider 'This concerns me. What's the appropriate way to voice this or decide if I can stay?'", type: "acceptance", insight: "Acceptance faces the situation directly. You have choices: speak up, accept, or leave." }
    ]
  },
  {
    level: 3,
    scenario: "You're burned out but feel like you can't say anything.",
    choices: [
      { text: "Think 'I just have to push through. Saying I'm struggling would be career suicide.'", type: "judgment", insight: "Judgment makes vulnerability dangerous. But burnout only gets worse when hidden." },
      { text: "Consider 'How can I communicate my limits in a professional way?'", type: "acceptance", insight: "Acceptance finds ways to advocate for yourself. Boundaries are professional, not personal weakness." }
    ]
  },
  {
    level: 3,
    scenario: "A new person on the team is getting attention you used to get.",
    choices: [
      { text: "Think 'They're replacing me. I need to compete or I'll be forgotten.'", type: "judgment", insight: "Judgment makes attention zero-sum. But organizations have room for multiple contributors." },
      { text: "Think 'New people get attention. My track record speaks for itself.'", type: "acceptance", insight: "Acceptance doesn't compete for spotlight. Your value doesn't decrease when others shine." }
    ]
  },
  {
    level: 3,
    scenario: "You made a commitment at work you're now regretting.",
    choices: [
      { text: "Think 'I can't back out now. I'll just have to suffer through it.'", type: "judgment", insight: "Judgment traps you in past decisions. But circumstances change, and renegotiation is possible." },
      { text: "Ask 'Can I have a conversation about adjusting this commitment?'", type: "acceptance", insight: "Acceptance allows renegotiation. A proactive conversation beats silent resentment." }
    ]
  },
  {
    level: 3,
    scenario: "You're being micromanaged and it's frustrating.",
    choices: [
      { text: "Think 'They don't trust me. They think I'm incompetent.'", type: "judgment", insight: "Judgment makes micromanaging personal. But often it's about their anxiety, not your competence." },
      { text: "Ask 'What would help you feel confident in my work so we can adjust our process?'", type: "acceptance", insight: "Acceptance addresses the dynamic directly. Understanding their needs can create freedom for you." }
    ]
  },

  // ========== SOCIAL SITUATIONS (15) ==========
  {
    level: 3,
    scenario: "You're at a party where you don't know many people.",
    choices: [
      { text: "Think 'Everyone already has their groups. No one wants to talk to me.'", type: "judgment", insight: "Judgment assumes rejection before trying. But most people welcome genuine conversation." },
      { text: "Think 'I can introduce myself to one person. That's all I need to do.'", type: "acceptance", insight: "Acceptance takes small steps. One connection is enough to start." }
    ]
  },
  {
    level: 3,
    scenario: "You say something awkward in a group conversation.",
    choices: [
      { text: "Think 'Everyone noticed. They all think I'm weird now.'", type: "judgment", insight: "Judgment amplifies the moment. But most people are thinking about themselves, not your words." },
      { text: "Let it go: 'That was awkward. It happens. Moving on.'", type: "acceptance", insight: "Acceptance releases small moments. Awkwardness is universal and usually quickly forgotten." }
    ]
  },
  {
    level: 3,
    scenario: "Someone in a group setting makes a joke at your expense.",
    choices: [
      { text: "Think 'They're targeting me. I need to defend myself or look weak.'", type: "judgment", insight: "Judgment escalates teasing into attack. But the response often matters more than the joke." },
      { text: "Gauge: 'Is this playful or mean? I can laugh it off, redirect, or address it—my choice.'", type: "acceptance", insight: "Acceptance chooses response. You have options beyond defensiveness." }
    ]
  },
  {
    level: 3,
    scenario: "You feel like you're performing instead of being yourself in social settings.",
    choices: [
      { text: "Think 'This is just how social situations work. The real me isn't interesting.'", type: "judgment", insight: "Judgment makes performance mandatory. But authentic people are more interesting than performers." },
      { text: "Experiment: 'What if I shared something real? What would happen?'", type: "acceptance", insight: "Acceptance tests authenticity. You might be surprised who responds to the real you." }
    ]
  },
  {
    level: 3,
    scenario: "Someone shares an opinion you strongly disagree with.",
    choices: [
      { text: "Think 'They're ignorant. I need to correct them.'", type: "judgment", insight: "Judgment makes disagreement a battle to win. But changing minds rarely happens through arguing." },
      { text: "Consider 'Do I need to engage, or can I let this pass? What's my goal here?'", type: "acceptance", insight: "Acceptance chooses battles wisely. Not every disagreement requires a debate." }
    ]
  },
  {
    level: 3,
    scenario: "You feel left out of an inside joke.",
    choices: [
      { text: "Think 'They're excluding me on purpose. I don't belong here.'", type: "judgment", insight: "Judgment makes inside jokes personal attacks. But every group has history you're not part of." },
      { text: "Ask 'What's the story behind that?' or let it go—inside jokes happen.", type: "acceptance", insight: "Acceptance doesn't take everything personally. You have inside jokes with other people too." }
    ]
  },
  {
    level: 3,
    scenario: "You're invited somewhere you don't want to go.",
    choices: [
      { text: "Think 'I have to go or they'll think I'm rude.'", type: "judgment", insight: "Judgment removes your choice. But a polite no is always an option." },
      { text: "Decide 'I can decline kindly. My time is mine to manage.'", type: "acceptance", insight: "Acceptance owns your yes and no. You don't need to justify protecting your energy." }
    ]
  },
  {
    level: 3,
    scenario: "Someone monopolizes every conversation.",
    choices: [
      { text: "Think 'They're so self-centered. They don't care about anyone else.'", type: "judgment", insight: "Judgment assigns character flaws. But some people don't realize how much space they take." },
      { text: "Redirect: 'I'd love to hear what [other person] thinks' or accept this is how they are.", type: "acceptance", insight: "Acceptance either redirects or adjusts expectations. You can't change them, only your response." }
    ]
  },
  {
    level: 3,
    scenario: "You're in a group where everyone seems more successful than you.",
    choices: [
      { text: "Think 'I don't belong here. What do I have to offer?'", type: "judgment", insight: "Judgment compares external markers. But success comes in many forms you can't always see." },
      { text: "Think 'I'm here. I have my own path and my own value to offer.'", type: "acceptance", insight: "Acceptance claims your place. You don't have to match others to belong." }
    ]
  },
  {
    level: 3,
    scenario: "Someone asks you a personal question you don't want to answer.",
    choices: [
      { text: "Feel obligated to answer because they asked.", type: "judgment", insight: "Judgment makes questions demands. But you own your story—not every question deserves an answer." },
      { text: "Redirect: 'I'd rather not get into that. How about you—what's new with you?'", type: "acceptance", insight: "Acceptance maintains boundaries smoothly. Privacy is your right, not rudeness." }
    ]
  },
  {
    level: 3,
    scenario: "You're the only one who doesn't drink at a social gathering.",
    choices: [
      { text: "Think 'They're all judging me. I'm making everyone uncomfortable.'", type: "judgment", insight: "Judgment assumes everyone is watching you. But most people care less than you think." },
      { text: "Be comfortable: 'This is my choice. I don't need to explain or apologize.'", type: "acceptance", insight: "Acceptance owns your choices. Confidence makes differences invisible." }
    ]
  },
  {
    level: 3,
    scenario: "You show up to an event and realize you're overdressed or underdressed.",
    choices: [
      { text: "Think 'Everyone's noticing. I look ridiculous.'", type: "judgment", insight: "Judgment amplifies the mismatch. But people forget what others wore almost immediately." },
      { text: "Think 'This is what I wore. It doesn't change who I am or why I'm here.'", type: "acceptance", insight: "Acceptance releases small embarrassments. Your presence matters more than your outfit." }
    ]
  },
  {
    level: 3,
    scenario: "Someone you just met seems to dislike you immediately.",
    choices: [
      { text: "Think 'What did I do wrong? I need to fix this.'", type: "judgment", insight: "Judgment makes their reaction your responsibility. But not everyone will like you—that's normal." },
      { text: "Think 'They might be having a bad day, or we just don't click. Not everyone will.'", type: "acceptance", insight: "Acceptance doesn't need universal approval. One person's dislike isn't your crisis." }
    ]
  },
  {
    level: 3,
    scenario: "You witness someone being treated poorly in a group.",
    choices: [
      { text: "Stay silent: 'It's not my place to get involved.'", type: "judgment", insight: "Judgment avoids discomfort. But silence can feel like agreement to the person being hurt." },
      { text: "Find a way to support them, whether publicly or privately.", type: "acceptance", insight: "Acceptance takes appropriate action. Standing up doesn't require a scene—sometimes a quiet word matters most." }
    ]
  },
  {
    level: 3,
    scenario: "You leave a social situation feeling drained and like you gave too much.",
    choices: [
      { text: "Think 'I always do this. What's wrong with me?'", type: "judgment", insight: "Judgment blames you for not having infinite energy. But social exhaustion is real, especially for introverts." },
      { text: "Notice 'I overdid it. Next time, I can leave earlier or pace myself.'", type: "acceptance", insight: "Acceptance learns without shame. Knowing your limits is wisdom, not weakness." }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECISION_LEVEL_3;
}
