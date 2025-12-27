// LEVEL UP - DECISION MODE (Acceptance vs Judgment)
// LEVEL 2: FAMILY - Your immediate family, spouse, kids, closest relationships
// 50 scenarios teaching acceptance creates freedom, judgment blocks possibility
// Format: { level: 2, scenario: "situation", choices: [{text, type, insight}] }

const DECISION_LEVEL_2 = [

  // ========== PARTNER/SPOUSE (15) ==========
  {
    level: 2,
    scenario: "Your partner forgets your anniversary.",
    choices: [
      { text: "Say 'You never remember what's important to me. You don't really care.'", type: "judgment", insight: "Judgment assumes intent. Forgetting becomes proof of not caring." },
      { text: "Say 'Our anniversary was important to me. Can we talk about what happened?'", type: "acceptance", insight: "Acceptance shares impact while leaving room for explanation. Connection over blame." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner criticizes how you loaded the dishwasher.",
    choices: [
      { text: "Say 'You're so controlling! It doesn't matter how it's loaded!'", type: "judgment", insight: "Judgment escalates. A method preference becomes 'controlling personality.'" },
      { text: "Say 'You have a different way. Does it really matter, or is this about something else?'", type: "acceptance", insight: "Acceptance looks beneath the surface. Small criticisms often carry bigger feelings." }
    ]
  },
  {
    level: 2,
    scenario: "Your spouse works late again when you had plans.",
    choices: [
      { text: "Think 'Work is always more important than me. I'm not a priority.'", type: "judgment", insight: "Judgment personalizes. Work conflict becomes 'you don't matter.'" },
      { text: "Say 'I was looking forward to our time. Can we talk about how we balance this?'", type: "acceptance", insight: "Acceptance expresses disappointment without blame. Opens dialogue instead of walls." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner handles stress by withdrawing.",
    choices: [
      { text: "Think 'They're shutting me out. They don't want me around.'", type: "judgment", insight: "Judgment interprets coping as rejection. Different stress responses aren't personal attacks." },
      { text: "Say 'I notice you need space when stressed. I'm here when you're ready.'", type: "acceptance", insight: "Acceptance honors different needs. Giving space can be an act of love." }
    ]
  },
  {
    level: 2,
    scenario: "You and your partner disagree on a major decision.",
    choices: [
      { text: "Think 'They never see things my way. We're incompatible.'", type: "judgment", insight: "Judgment makes disagreement about compatibility. But differences can strengthen partnerships." },
      { text: "Say 'We see this differently. Let's understand each other's concerns first.'", type: "acceptance", insight: "Acceptance prioritizes understanding over winning. Collaboration requires curiosity." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner repeats a behavior you've asked them to change.",
    choices: [
      { text: "Say 'You don't listen to me. You don't respect me.'", type: "judgment", insight: "Judgment assigns motive. Repeated behavior becomes 'disrespect' instead of difficulty changing." },
      { text: "Say 'This keeps happening. Let's figure out why this is hard to change.'", type: "acceptance", insight: "Acceptance assumes good intent with real obstacles. Change is hard for everyone." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner doesn't notice something you did for them.",
    choices: [
      { text: "Think 'They take me for granted. Nothing I do matters.'", type: "judgment", insight: "Judgment generalizes. One missed moment becomes 'nothing matters.'" },
      { text: "Say 'I did something nice and hoped you'd notice. I need appreciation sometimes.'", type: "acceptance", insight: "Acceptance asks for what it needs directly. Expecting mind-reading leads to disappointment." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner says something hurtful in an argument.",
    choices: [
      { text: "Think 'They meant to hurt me. This is who they really are.'", type: "judgment", insight: "Judgment takes words in conflict as permanent truth. But hurt people say hurtful things." },
      { text: "Say 'That really hurt. Let's talk about this when we're both calm.'", type: "acceptance", insight: "Acceptance pauses for regulation. Conflict clarity comes after the storm, not during." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner has different needs for intimacy than you do.",
    choices: [
      { text: "Think 'Something's wrong with one of us. We're not compatible.'", type: "judgment", insight: "Judgment pathologizes difference. Different needs aren't defects." },
      { text: "Say 'We have different needs here. How do we both feel honored?'", type: "acceptance", insight: "Acceptance seeks solutions, not blame. Different is just different—not wrong." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner expresses insecurity you think is unfounded.",
    choices: [
      { text: "Say 'That's ridiculous. You have nothing to worry about.'", type: "judgment", insight: "Judgment dismisses feelings. 'Unfounded' fears are still real fears." },
      { text: "Say 'I hear that you're worried. What would help you feel more secure?'", type: "acceptance", insight: "Acceptance validates feelings without validating fears. Security is built through response." }
    ]
  },
  {
    level: 2,
    scenario: "You feel attracted to someone other than your partner.",
    choices: [
      { text: "Think 'I'm terrible. A good partner wouldn't feel this way.'", type: "judgment", insight: "Judgment makes feelings crimes. But attraction is involuntary—action is what matters." },
      { text: "Notice 'Attraction happened. It doesn't mean anything about my relationship unless I act on it.'", type: "acceptance", insight: "Acceptance separates feeling from action. You choose what you do with feelings." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner's family is difficult for you to be around.",
    choices: [
      { text: "Think 'They're terrible people. I can't believe my partner turned out okay.'", type: "judgment", insight: "Judgment extends to their whole system. But your partner chose you despite their background." },
      { text: "Say 'Your family is hard for me. Can we find a balance that works for both of us?'", type: "acceptance", insight: "Acceptance acknowledges difficulty without demanding elimination. Boundaries, not ultimatums." }
    ]
  },
  {
    level: 2,
    scenario: "You realize you've been keeping score in your relationship.",
    choices: [
      { text: "Think 'I do more. They're not pulling their weight.'", type: "judgment", insight: "Judgment keeps tallies. But scorekeeping kills intimacy—love isn't transactional." },
      { text: "Ask 'Why am I keeping score? What do I actually need?'", type: "acceptance", insight: "Acceptance looks underneath. Scorekeeping usually signals an unmet need, not a lazy partner." }
    ]
  },
  {
    level: 2,
    scenario: "Your partner handles money differently than you do.",
    choices: [
      { text: "Think 'They're irresponsible/controlling. We'll never agree.'", type: "judgment", insight: "Judgment makes different approaches character flaws. Money carries different meanings for everyone." },
      { text: "Say 'We have different money styles. Let's find a system that respects both.'", type: "acceptance", insight: "Acceptance builds bridges. Different approaches can combine into stronger systems." }
    ]
  },
  {
    level: 2,
    scenario: "You catch yourself wishing your partner was different.",
    choices: [
      { text: "Think 'I should have chosen someone else. I made a mistake.'", type: "judgment", insight: "Judgment rewrites history. But you chose this person for reasons—what were they?" },
      { text: "Ask 'What am I really wanting? Is this about them or about me?'", type: "acceptance", insight: "Acceptance looks inward. Wishing they were different often points to something in you." }
    ]
  },

  // ========== CHILDREN (15) ==========
  {
    level: 2,
    scenario: "Your child spills juice on the new carpet.",
    choices: [
      { text: "Yell 'You're so clumsy! How many times have I told you to be careful?'", type: "judgment", insight: "Judgment attacks character. An accident becomes who they are." },
      { text: "Say 'Oops, that's a mess. Let's clean it up together.'", type: "acceptance", insight: "Acceptance addresses the situation without attacking identity. Accidents happen." }
    ]
  },
  {
    level: 2,
    scenario: "Your teenager stays in their room all weekend.",
    choices: [
      { text: "Think 'They're being antisocial and wasting their youth.'", type: "judgment", insight: "Judgment pathologizes development. Teenagers need privacy and space." },
      { text: "Ask 'You've been in your room a lot. Is everything okay? I'm here if you want to talk.'", type: "acceptance", insight: "Acceptance checks in without accusation. Sometimes alone time is healthy." }
    ]
  },
  {
    level: 2,
    scenario: "Your child gets a bad grade despite studying.",
    choices: [
      { text: "Say 'You didn't try hard enough. You need to study more.'", type: "judgment", insight: "Judgment dismisses effort. Sometimes trying hard isn't the same as trying right." },
      { text: "Say 'I know you studied. Let's figure out what approach might work better.'", type: "acceptance", insight: "Acceptance honors effort and seeks solutions. Failure with effort deserves support, not shame." }
    ]
  },
  {
    level: 2,
    scenario: "Your child says they hate you.",
    choices: [
      { text: "Think 'I've failed as a parent. They'll never love me.'", type: "judgment", insight: "Judgment makes a moment permanent. Children express frustration in extreme terms." },
      { text: "Say 'I hear you're really upset. I love you even when you're mad at me.'", type: "acceptance", insight: "Acceptance holds steady. Your calm teaches them that feelings don't destroy love." }
    ]
  },
  {
    level: 2,
    scenario: "Your child is struggling socially at school.",
    choices: [
      { text: "Think 'They're not trying hard enough. They need to put themselves out there.'", type: "judgment", insight: "Judgment assumes willpower is the issue. Social skills don't come naturally to everyone." },
      { text: "Ask 'That sounds hard. What feels difficult about making friends?'", type: "acceptance", insight: "Acceptance explores with curiosity. Understanding must come before solutions." }
    ]
  },
  {
    level: 2,
    scenario: "Your child chooses a different path than you hoped for them.",
    choices: [
      { text: "Think 'They're making a mistake. They're wasting their potential.'", type: "judgment", insight: "Judgment imposes your definition of success. But it's their life to live." },
      { text: "Say 'This isn't what I expected. Help me understand what draws you to this.'", type: "acceptance", insight: "Acceptance stays curious. Their path might lead somewhere you can't yet see." }
    ]
  },
  {
    level: 2,
    scenario: "Your child lies to you about something.",
    choices: [
      { text: "Say 'I can't believe you'd lie to me. I can never trust you again.'", type: "judgment", insight: "Judgment makes lying a permanent character trait. But kids lie when truth feels unsafe." },
      { text: "Say 'I know that wasn't true. What made it hard to tell me the truth?'", type: "acceptance", insight: "Acceptance addresses the lie while investigating the cause. Safety builds honesty." }
    ]
  },
  {
    level: 2,
    scenario: "Your child has an emotional meltdown in public.",
    choices: [
      { text: "Think 'Everyone's judging me. My child is out of control.'", type: "judgment", insight: "Judgment prioritizes appearances. But your child needs you, not your embarrassment." },
      { text: "Focus on them: 'I see you're overwhelmed. Let's find a quiet spot.'", type: "acceptance", insight: "Acceptance centers the child's needs. Regulation comes before anything else." }
    ]
  },
  {
    level: 2,
    scenario: "Your child doesn't want to hug you goodbye.",
    choices: [
      { text: "Think 'They're rejecting me. Don't they love me anymore?'", type: "judgment", insight: "Judgment personalizes boundaries. But bodily autonomy isn't rejection." },
      { text: "Say 'That's okay. A wave goodbye works too. I love you.'", type: "acceptance", insight: "Acceptance honors their autonomy. You're teaching them their body is their own." }
    ]
  },
  {
    level: 2,
    scenario: "Your child is nothing like you.",
    choices: [
      { text: "Think 'I don't understand them. We have nothing in common.'", type: "judgment", insight: "Judgment sees difference as distance. But connection doesn't require sameness." },
      { text: "Think 'They're their own person. What can I learn about who they are?'", type: "acceptance", insight: "Acceptance celebrates uniqueness. Your job is to know them, not clone yourself." }
    ]
  },
  {
    level: 2,
    scenario: "Your child is going through something you don't understand.",
    choices: [
      { text: "Think 'That's not a real problem. They're being dramatic.'", type: "judgment", insight: "Judgment dismisses their reality. What feels small to you is their whole world." },
      { text: "Say 'I might not fully understand, but I want to. Tell me more.'", type: "acceptance", insight: "Acceptance doesn't require understanding to validate. Presence matters more than expertise." }
    ]
  },
  {
    level: 2,
    scenario: "Your child makes the same mistake you made at their age.",
    choices: [
      { text: "Think 'I can't believe they're repeating my mistakes. They should know better.'", type: "judgment", insight: "Judgment expects them to learn from your experience. But wisdom isn't inherited." },
      { text: "Share 'I did something similar once. Here's what I learned, if you want to hear it.'", type: "acceptance", insight: "Acceptance offers wisdom without forcing it. They get to make their own journey." }
    ]
  },
  {
    level: 2,
    scenario: "Your adult child makes choices you disagree with.",
    choices: [
      { text: "Say 'You're ruining your life. You need to listen to me.'", type: "judgment", insight: "Judgment tries to control what it can't. Their life is theirs to navigate." },
      { text: "Say 'I see things differently, but I respect your right to choose.'", type: "acceptance", insight: "Acceptance releases control. Your relationship matters more than being right." }
    ]
  },
  {
    level: 2,
    scenario: "You realize you've been comparing your children to each other.",
    choices: [
      { text: "Think 'Why can't they all be like the successful one?'", type: "judgment", insight: "Judgment ranks siblings. But comparison is the thief of both their joy and yours." },
      { text: "Catch yourself: 'Each child is on their own path. Comparison doesn't help anyone.'", type: "acceptance", insight: "Acceptance sees individuals. They each need to be seen for who they are, not ranked." }
    ]
  },
  {
    level: 2,
    scenario: "You feel like you've damaged your child somehow.",
    choices: [
      { text: "Think 'I've ruined them. They'll need therapy because of me.'", type: "judgment", insight: "Judgment takes all responsibility. But children are resilient, and you're still here." },
      { text: "Think 'I've made mistakes. I can acknowledge them and keep showing up.'", type: "acceptance", insight: "Acceptance allows repair. It's not about being perfect—it's about staying connected." }
    ]
  },

  // ========== PARENTS (10) ==========
  {
    level: 2,
    scenario: "Your parent gives you unsolicited advice about your life.",
    choices: [
      { text: "Think 'They're trying to control me. They don't respect my autonomy.'", type: "judgment", insight: "Judgment assumes negative intent. But advice-giving is often love in clumsy packaging." },
      { text: "Think 'They're sharing from love, in their way. I can listen without following.'", type: "acceptance", insight: "Acceptance separates intention from content. You can receive love without taking advice." }
    ]
  },
  {
    level: 2,
    scenario: "Your parent keeps bringing up your past mistakes.",
    choices: [
      { text: "Say 'You never let anything go! You love holding things over me!'", type: "judgment", insight: "Judgment attributes malice. But some parents don't know how to let go either." },
      { text: "Say 'That was in the past. I'm different now, and I need you to see that.'", type: "acceptance", insight: "Acceptance states your truth calmly. You define who you are now." }
    ]
  },
  {
    level: 2,
    scenario: "Your parent compares you unfavorably to others.",
    choices: [
      { text: "Think 'I'll never be good enough for them. Why do I even try?'", type: "judgment", insight: "Judgment internalizes their comparison. But their measuring stick isn't your truth." },
      { text: "Say 'When you compare me, it hurts. I need you to see me for who I am.'", type: "acceptance", insight: "Acceptance sets a boundary with honesty. You can teach them how to love you better." }
    ]
  },
  {
    level: 2,
    scenario: "Your parent doesn't approve of your life choices.",
    choices: [
      { text: "Think 'They'll never accept me. I'm a disappointment.'", type: "judgment", insight: "Judgment makes their approval the measure of your worth. But you're not living their life." },
      { text: "Think 'Their approval would be nice, but I don't need it to live my life.'", type: "acceptance", insight: "Acceptance releases the need for permission. You can love them without needing their validation." }
    ]
  },
  {
    level: 2,
    scenario: "Your parent plays favorites among siblings.",
    choices: [
      { text: "Think 'I was never enough for them. The other one was always better.'", type: "judgment", insight: "Judgment accepts their hierarchy as truth. But their favoritism is their limitation, not your worth." },
      { text: "Recognize 'Their favoritism is about them, not about my value.'", type: "acceptance", insight: "Acceptance separates their behavior from your worth. You were always enough." }
    ]
  },
  {
    level: 2,
    scenario: "Your parent is aging and needs more help.",
    choices: [
      { text: "Think 'This is too much. They're taking over my life.'", type: "judgment", insight: "Judgment sees burden without complexity. Caregiving is hard, and so is watching them age." },
      { text: "Acknowledge 'This is hard. I can set boundaries while still caring for them.'", type: "acceptance", insight: "Acceptance holds both your needs and theirs. Boundaries protect the caregiver too." }
    ]
  },
  {
    level: 2,
    scenario: "Your parent doesn't remember things the same way you do.",
    choices: [
      { text: "Say 'You're rewriting history! That's not how it happened!'", type: "judgment", insight: "Judgment demands agreement on the past. But memory is subjective for everyone." },
      { text: "Think 'We experienced it differently. My memory is still valid.'", type: "acceptance", insight: "Acceptance doesn't need their validation. Your experience happened, regardless of their memory." }
    ]
  },
  {
    level: 2,
    scenario: "You realize your parent wasn't perfect and made mistakes with you.",
    choices: [
      { text: "Think 'They damaged me. Everything wrong with me is their fault.'", type: "judgment", insight: "Judgment gives all power to the past. But understanding doesn't have to mean permanent blame." },
      { text: "Think 'They did the best they could with what they had. And I can heal now.'", type: "acceptance", insight: "Acceptance doesn't excuse—it frees you. Their past doesn't have to be your prison." }
    ]
  },
  {
    level: 2,
    scenario: "Your parent says something hurtful, the same thing they've always said.",
    choices: [
      { text: "React as you always have: defensive, hurt, triggered.", type: "judgment", insight: "Judgment keeps the cycle spinning. The old response keeps you in the old pattern." },
      { text: "Notice: 'There's that old pattern. I can choose a different response now.'", type: "acceptance", insight: "Acceptance creates space between stimulus and response. You can break the cycle." }
    ]
  },
  {
    level: 2,
    scenario: "You need to set a boundary with a parent who doesn't respect them.",
    choices: [
      { text: "Avoid it: 'It's not worth the drama. I'll just endure it.'", type: "judgment", insight: "Judgment chooses peace over authenticity. But swallowed boundaries become resentment." },
      { text: "Say 'I love you, and this is what I need. I hope you can respect that.'", type: "acceptance", insight: "Acceptance holds both love and limits. Boundaries are how you stay in relationship without losing yourself." }
    ]
  },

  // ========== SIBLINGS & EXTENDED (10) ==========
  {
    level: 2,
    scenario: "Your sibling borrows money and doesn't pay it back on time.",
    choices: [
      { text: "Think 'They're irresponsible and taking advantage of me.'", type: "judgment", insight: "Judgment assigns character flaws. But money issues often signal deeper struggles." },
      { text: "Ask 'Is everything okay? I noticed the repayment is late.'", type: "acceptance", insight: "Acceptance assumes good intent first. A question opens conversation that judgment closes." }
    ]
  },
  {
    level: 2,
    scenario: "Your sibling makes different life choices than you.",
    choices: [
      { text: "Think 'They're wasting their life. They should have done what I did.'", type: "judgment", insight: "Judgment makes your path the right one. But there are many ways to live a good life." },
      { text: "Think 'Their life is theirs. I can support without agreeing.'", type: "acceptance", insight: "Acceptance respects autonomy. Your approval isn't required for them to find their way." }
    ]
  },
  {
    level: 2,
    scenario: "You and your sibling have unresolved tension from childhood.",
    choices: [
      { text: "Think 'They'll never change. There's no point in trying.'", type: "judgment", insight: "Judgment closes the door. But people do change—including you." },
      { text: "Consider 'Maybe we're both ready to see things differently now.'", type: "acceptance", insight: "Acceptance opens possibility. The past doesn't have to be the future of this relationship." }
    ]
  },
  {
    level: 2,
    scenario: "A family member constantly complains but won't take action.",
    choices: [
      { text: "Think 'They just want to be a victim. They don't really want help.'", type: "judgment", insight: "Judgment dismisses their pain. Sometimes people need to be heard before they can move." },
      { text: "Ask 'That sounds hard. Do you want advice, or do you need someone to listen?'", type: "acceptance", insight: "Acceptance clarifies what they need. Not everyone wants solutions—some need witness." }
    ]
  },
  {
    level: 2,
    scenario: "You disagree with how a family member is raising their kids.",
    choices: [
      { text: "Think 'They're doing it wrong. Those kids will have problems.'", type: "judgment", insight: "Judgment assumes you know better. But parenting looks different from the outside." },
      { text: "Think 'They're doing their best. I can offer support, not correction.'", type: "acceptance", insight: "Acceptance supports without supervising. Unless there's real danger, it's not your call." }
    ]
  },
  {
    level: 2,
    scenario: "A family gathering triggers old patterns in you.",
    choices: [
      { text: "Think 'They always bring out the worst in me. I hate who I become.'", type: "judgment", insight: "Judgment blames them for your reactions. But your triggers are yours to manage." },
      { text: "Notice 'I feel myself falling into old patterns. I can choose differently this time.'", type: "acceptance", insight: "Acceptance owns your response. You're not the same person who developed those patterns." }
    ]
  },
  {
    level: 2,
    scenario: "You feel obligated to attend family events you dread.",
    choices: [
      { text: "Think 'I have to go. I have no choice.'", type: "judgment", insight: "Judgment removes your agency. But 'have to' is rarely true—it's often 'easier than the alternative.'" },
      { text: "Consider 'I'm choosing to go, or I'm choosing not to. Either is valid.'", type: "acceptance", insight: "Acceptance owns the choice. When you choose, obligation becomes decision." }
    ]
  },
  {
    level: 2,
    scenario: "A family member shares political views you strongly disagree with.",
    choices: [
      { text: "Think 'They're ignorant and wrong. How can they believe this?'", type: "judgment", insight: "Judgment makes them wrong, which makes you right. But understanding their view might matter more." },
      { text: "Think 'We see the world differently. I can love them without agreeing.'", type: "acceptance", insight: "Acceptance holds difference. Family bonds can be stronger than political divides." }
    ]
  },
  {
    level: 2,
    scenario: "You feel like the 'black sheep' of your family.",
    choices: [
      { text: "Think 'I don't belong. There's something wrong with me.'", type: "judgment", insight: "Judgment internalizes their view. But black sheep often just see what others can't." },
      { text: "Think 'I'm different, and that's okay. My value isn't determined by fitting in.'", type: "acceptance", insight: "Acceptance claims your place. Belonging to yourself is more important than belonging to them." }
    ]
  },
  {
    level: 2,
    scenario: "A family member crosses a boundary you've set multiple times.",
    choices: [
      { text: "Think 'They don't respect me. They never will.'", type: "judgment", insight: "Judgment makes it permanent. But some people need firmer boundaries, not more explanations." },
      { text: "Decide 'I've stated my boundary. Now I need to enforce it with action, not words.'", type: "acceptance", insight: "Acceptance moves from explaining to acting. Boundaries without consequences are just suggestions." }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECISION_LEVEL_2;
}
