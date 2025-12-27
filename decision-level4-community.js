// LEVEL UP - DECISION MODE (Acceptance vs Judgment)
// LEVEL 4: COMMUNITY - Neighborhood, church, industry, causes, roles you play
// 50 scenarios teaching acceptance creates freedom, judgment blocks possibility
// Format: { level: 4, scenario: "situation", choices: [{text, type, insight}] }

const DECISION_LEVEL_4 = [

  // ========== YOUR ROLE & PLACE (15) ==========
  {
    level: 4,
    scenario: "You're asked to volunteer for something you don't have time for.",
    choices: [
      { text: "Say yes anyway and resent it later.", type: "judgment", insight: "Judgment says no isn't an option. But yes when you mean no breeds resentment." },
      { text: "Say 'I can't commit to that right now. Is there a smaller way I can help?'", type: "acceptance", insight: "Acceptance offers what you can. Honest limits serve everyone better than broken promises." }
    ]
  },
  {
    level: 4,
    scenario: "Someone in your community is recognized for work you contributed to.",
    choices: [
      { text: "Think 'I did the real work. They just took the credit.'", type: "judgment", insight: "Judgment focuses on unfairness. But community work often blurs individual credit." },
      { text: "Think 'The work got done and recognized. My contribution mattered even if unseen.'", type: "acceptance", insight: "Acceptance finds satisfaction in contribution, not just credit." }
    ]
  },
  {
    level: 4,
    scenario: "You feel like an outsider in a community you've joined.",
    choices: [
      { text: "Think 'They're cliquey. They don't want new people.'", type: "judgment", insight: "Judgment blames the group. But belonging often takes longer than we expect." },
      { text: "Think 'I'm new here. Belonging takes time. I'll keep showing up.'", type: "acceptance", insight: "Acceptance gives belonging time to grow. Persistence builds connection." }
    ]
  },
  {
    level: 4,
    scenario: "Your skills aren't being utilized by an organization you're part of.",
    choices: [
      { text: "Think 'They don't see my value. They're wasting my potential.'", type: "judgment", insight: "Judgment waits to be noticed. But organizations don't always know what you offer." },
      { text: "Say 'I have skills in this area. Is there a way I could contribute?'", type: "acceptance", insight: "Acceptance offers clearly. You have to tell people what you can do." }
    ]
  },
  {
    level: 4,
    scenario: "You disagree with how a community organization is being run.",
    choices: [
      { text: "Think 'They're doing it all wrong. This place is a mess.'", type: "judgment", insight: "Judgment criticizes from the sidelines. Criticism without involvement rarely changes anything." },
      { text: "Consider 'Do I care enough to get involved and help improve this?'", type: "acceptance", insight: "Acceptance either engages constructively or accepts what is." }
    ]
  },
  {
    level: 4,
    scenario: "You've been in a community role for years and feel taken for granted.",
    choices: [
      { text: "Think 'No one appreciates what I do. I should just quit.'", type: "judgment", insight: "Judgment expects recognition without asking. Long service often becomes invisible." },
      { text: "Consider 'Do I need to speak up, delegate, or step back?'", type: "acceptance", insight: "Acceptance identifies needs and addresses them. You teach people how to treat you." }
    ]
  },
  {
    level: 4,
    scenario: "A newer member gets a leadership position you wanted.",
    choices: [
      { text: "Think 'I've been here longer. This is unfair.'", type: "judgment", insight: "Judgment confuses tenure with qualification. Time served isn't the only measure." },
      { text: "Ask 'What did they offer that I didn't? What can I learn?'", type: "acceptance", insight: "Acceptance learns from disappointment. Their success might teach you something." }
    ]
  },
  {
    level: 4,
    scenario: "You're expected to behave a certain way because of your role.",
    choices: [
      { text: "Think 'I'm trapped. I can't be myself here.'", type: "judgment", insight: "Judgment makes roles prisons. But roles can be filled authentically." },
      { text: "Ask 'How can I fulfill this role while still being me?'", type: "acceptance", insight: "Acceptance finds you within the role. You can meet expectations and stay authentic." }
    ]
  },
  {
    level: 4,
    scenario: "You're burning out from community commitments.",
    choices: [
      { text: "Think 'I can't stop now. Everyone's counting on me.'", type: "judgment", insight: "Judgment makes you indispensable. Burned out helpers eventually help no one." },
      { text: "Acknowledge 'I'm overextended. I need to scale back to sustain my contribution.'", type: "acceptance", insight: "Acceptance protects long-term capacity. Sustainability beats heroic burnout." }
    ]
  },
  {
    level: 4,
    scenario: "You realize you joined a community for the wrong reasons.",
    choices: [
      { text: "Think 'I'm stuck now. I can't leave after committing.'", type: "judgment", insight: "Judgment traps you in past decisions. Wrong fits deserve to be reconsidered." },
      { text: "Reflect 'My reasons have changed. I can adjust my involvement or move on.'", type: "acceptance", insight: "Acceptance allows course correction. Staying for wrong reasons serves no one." }
    ]
  },
  {
    level: 4,
    scenario: "You feel more qualified than the current leader.",
    choices: [
      { text: "Think 'They're incompetent. I could do this so much better.'", type: "judgment", insight: "Judgment from below misses what leadership involves. Leading looks easier than it is." },
      { text: "Ask 'Can I support them? Or is this about my ego needing to lead?'", type: "acceptance", insight: "Acceptance examines motives. Maybe you're called to support, not supplant." }
    ]
  },
  {
    level: 4,
    scenario: "Your contributions aren't acknowledged publicly.",
    choices: [
      { text: "Think 'Why do I bother? No one notices what I do.'", type: "judgment", insight: "Judgment ties contribution to recognition. Some of the most important work is invisible." },
      { text: "Decide 'Am I doing this for recognition or because it matters?'", type: "acceptance", insight: "Acceptance clarifies motivation. If you need recognition, ask for it." }
    ]
  },
  {
    level: 4,
    scenario: "Someone questions your commitment to a cause you care about.",
    choices: [
      { text: "Think 'How dare they? I've given so much!'", type: "judgment", insight: "Judgment defends instead of reflects. Maybe their question holds something worth examining." },
      { text: "Consider 'Is there any truth here? Or is this their issue, not mine?'", type: "acceptance", insight: "Acceptance filters feedback without defensiveness. Some criticism is projection; some is insight." }
    ]
  },
  {
    level: 4,
    scenario: "You don't feel like you belong anywhere.",
    choices: [
      { text: "Think 'Something's wrong with me. I can't fit in anywhere.'", type: "judgment", insight: "Judgment makes belonging a personal failing. But maybe you haven't found your people yet." },
      { text: "Ask 'What kind of community would feel like home? Have I looked there?'", type: "acceptance", insight: "Acceptance keeps searching. Your people exist—you might just be looking in the wrong places." }
    ]
  },
  {
    level: 4,
    scenario: "You've outgrown a community that used to fit.",
    choices: [
      { text: "Think 'I should be loyal. Leaving would be ungrateful.'", type: "judgment", insight: "Judgment confuses loyalty with stagnation. Outgrowing isn't betrayal." },
      { text: "Accept 'I've changed. It's okay to move on with gratitude for what was.'", type: "acceptance", insight: "Acceptance honors seasons. Some communities are chapters, not the whole book." }
    ]
  },

  // ========== NEIGHBORS & LOCAL (10) ==========
  {
    level: 4,
    scenario: "Your neighbor does something that annoys you regularly.",
    choices: [
      { text: "Think 'They're inconsiderate. They don't care about anyone else.'", type: "judgment", insight: "Judgment assigns motive. But they might not even know it bothers you." },
      { text: "Decide 'I can talk to them about it or accept it. Stewing helps no one.'", type: "acceptance", insight: "Acceptance chooses action or peace. The middle ground of resentment just hurts you." }
    ]
  },
  {
    level: 4,
    scenario: "You see a neighbor struggling but don't know them well.",
    choices: [
      { text: "Think 'It's not my place. They have their own people.'", type: "judgment", insight: "Judgment assumes others have support. But many people are more alone than they appear." },
      { text: "Consider 'A small gesture might matter more than I think.'", type: "acceptance", insight: "Acceptance takes small risks. Community is built one small kindness at a time." }
    ]
  },
  {
    level: 4,
    scenario: "Your neighborhood is changing in ways you don't like.",
    choices: [
      { text: "Think 'It's being ruined. It's not like it used to be.'", type: "judgment", insight: "Judgment resists change. But neighborhoods have always evolved—including into what you first loved." },
      { text: "Accept 'Change is happening. What do I want to preserve? What can I adapt to?'", type: "acceptance", insight: "Acceptance engages with change. Resistance creates suffering; engagement creates influence." }
    ]
  },
  {
    level: 4,
    scenario: "Someone new moves in who seems very different from you.",
    choices: [
      { text: "Think 'They won't fit in here. We're too different.'", type: "judgment", insight: "Judgment predicts based on surface. But connection often surprises us." },
      { text: "Think 'I wonder what I could learn from their perspective.'", type: "acceptance", insight: "Acceptance stays curious. Different neighbors expand your world." }
    ]
  },
  {
    level: 4,
    scenario: "Local politics frustrate you but you've never gotten involved.",
    choices: [
      { text: "Think 'It's all corrupt anyway. My voice wouldn't matter.'", type: "judgment", insight: "Judgment justifies inaction. But local change is often more possible than we think." },
      { text: "Consider 'What small step could I take? A meeting? An email?'", type: "acceptance", insight: "Acceptance starts small. Local engagement is where individual voices still carry weight." }
    ]
  },
  {
    level: 4,
    scenario: "You notice a problem in your community that no one's addressing.",
    choices: [
      { text: "Think 'Someone should do something about that.'", type: "judgment", insight: "Judgment waits for 'someone.' But you are someone." },
      { text: "Ask 'Is this mine to address? If so, what's my first step?'", type: "acceptance", insight: "Acceptance owns what it can. Maybe you're the someone who was meant to notice." }
    ]
  },
  {
    level: 4,
    scenario: "You feel disconnected from where you live.",
    choices: [
      { text: "Think 'This place isn't for me. I don't belong here.'", type: "judgment", insight: "Judgment blames the place. But belonging is built, not found." },
      { text: "Ask 'What would make me feel connected? A local spot? A regular event?'", type: "acceptance", insight: "Acceptance takes initiative. Connection requires action, not just location." }
    ]
  },
  {
    level: 4,
    scenario: "A local business you loved closes down.",
    choices: [
      { text: "Think 'Nothing good lasts. This place is dying.'", type: "judgment", insight: "Judgment generalizes one loss. But communities are always in flux." },
      { text: "Accept 'This is sad. And new things will come. Both are true.'", type: "acceptance", insight: "Acceptance grieves without catastrophizing. Loss and renewal coexist." }
    ]
  },
  {
    level: 4,
    scenario: "You realize you've lived somewhere for years without knowing your neighbors.",
    choices: [
      { text: "Think 'That's just how it is now. People don't connect anymore.'", type: "judgment", insight: "Judgment blames the times. But someone has to make the first move." },
      { text: "Consider 'What small step could I take to change this?'", type: "acceptance", insight: "Acceptance initiates. A wave, a hello, an introduction—connection starts somewhere." }
    ]
  },
  {
    level: 4,
    scenario: "There's tension between groups in your community.",
    choices: [
      { text: "Pick a side: 'Those people are the problem.'", type: "judgment", insight: "Judgment divides further. Taking sides rarely heals communities." },
      { text: "Consider 'What do both sides need? Is there a bridge I could help build?'", type: "acceptance", insight: "Acceptance looks for common ground. Bridging is harder but more valuable than choosing sides." }
    ]
  },

  // ========== PROFESSIONAL/INDUSTRY (10) ==========
  {
    level: 4,
    scenario: "Your industry is changing in ways that threaten your skills.",
    choices: [
      { text: "Think 'This is unfair. I spent years building these skills.'", type: "judgment", insight: "Judgment resists reality. But industries have always evolved—adaptation is survival." },
      { text: "Accept 'Change is coming. What do I need to learn to stay relevant?'", type: "acceptance", insight: "Acceptance faces forward. Your ability to learn is more valuable than any single skill." }
    ]
  },
  {
    level: 4,
    scenario: "You see unethical practices in your industry.",
    choices: [
      { text: "Think 'That's just how it works. I can't change it.'", type: "judgment", insight: "Judgment normalizes what shouldn't be normal. But acceptance of wrong isn't wisdom." },
      { text: "Consider 'What's my responsibility here? What can I influence?'", type: "acceptance", insight: "Acceptance doesn't mean approval. You can accept reality while working to change it." }
    ]
  },
  {
    level: 4,
    scenario: "You feel like an imposter at professional events.",
    choices: [
      { text: "Think 'Everyone here knows more than me. I don't belong.'", type: "judgment", insight: "Judgment compares your inside to their outside. Most people feel this way sometimes." },
      { text: "Think 'I'm here to learn and connect, not to prove anything.'", type: "acceptance", insight: "Acceptance releases the pressure. You belong because you showed up." }
    ]
  },
  {
    level: 4,
    scenario: "Someone in your field publicly criticizes your work.",
    choices: [
      { text: "Think 'They're attacking me. They want to destroy my reputation.'", type: "judgment", insight: "Judgment makes criticism personal. But maybe it's about the work, not about you." },
      { text: "Consider 'Is there anything valid here? And how do I want to respond?'", type: "acceptance", insight: "Acceptance separates feedback from attack. You can learn even from unfair criticism." }
    ]
  },
  {
    level: 4,
    scenario: "You're asked to mentor someone and don't feel qualified.",
    choices: [
      { text: "Think 'I don't know enough. I'll just mess them up.'", type: "judgment", insight: "Judgment demands mastery before service. But you don't need all answers to offer value." },
      { text: "Accept 'I can share what I've learned so far. That's enough to help.'", type: "acceptance", insight: "Acceptance offers what you have. You're further than someone—that's enough to mentor." }
    ]
  },
  {
    level: 4,
    scenario: "Your professional reputation is tied to something you've outgrown.",
    choices: [
      { text: "Think 'I'm stuck with this identity. It's too late to change.'", type: "judgment", insight: "Judgment makes reputation a cage. But people reinvent professionally all the time." },
      { text: "Plan 'How do I bridge from what I'm known for to where I want to go?'", type: "acceptance", insight: "Acceptance builds bridges. Your past work is a foundation, not a limitation." }
    ]
  },
  {
    level: 4,
    scenario: "You see someone succeeding in your field with less experience.",
    choices: [
      { text: "Think 'They got lucky. They don't deserve that success.'", type: "judgment", insight: "Judgment diminishes others to protect ego. But their path isn't your path." },
      { text: "Ask 'What are they doing that I could learn from?'", type: "acceptance", insight: "Acceptance learns from everyone. Success leaves clues, even unexpected success." }
    ]
  },
  {
    level: 4,
    scenario: "You have to work within systems you think are broken.",
    choices: [
      { text: "Think 'It's hopeless. I can't make a difference in this mess.'", type: "judgment", insight: "Judgment gives up on influence. But change from within is still change." },
      { text: "Consider 'What can I influence from where I am? Even small shifts matter.'", type: "acceptance", insight: "Acceptance works with what is. You don't have to fix everything to improve something." }
    ]
  },
  {
    level: 4,
    scenario: "Your expertise is dismissed by someone with more status.",
    choices: [
      { text: "Think 'They don't respect me. Status matters more than substance here.'", type: "judgment", insight: "Judgment makes it about you vs. them. But maybe you need to earn trust before being heard." },
      { text: "Consider 'How do I build credibility here? What relationships do I need?'", type: "acceptance", insight: "Acceptance plays the long game. Influence is built through relationship, not just expertise." }
    ]
  },
  {
    level: 4,
    scenario: "You feel called to a different role in your industry than you currently have.",
    choices: [
      { text: "Think 'It's too risky to change now. I should stay safe.'", type: "judgment", insight: "Judgment prioritizes security over calling. But safety isn't always fulfillment." },
      { text: "Explore 'What would it take to move toward that? What's my first step?'", type: "acceptance", insight: "Acceptance honors callings. Transition can be gradual—one step at a time." }
    ]
  },

  // ========== CAUSES & VALUES (15) ==========
  {
    level: 4,
    scenario: "You care about a cause but feel like your contribution is too small to matter.",
    choices: [
      { text: "Think 'What's the point? I can't make a real difference.'", type: "judgment", insight: "Judgment demands visible impact. But movements are made of countless small contributions." },
      { text: "Accept 'My part is small AND it matters. Both are true.'", type: "acceptance", insight: "Acceptance releases the need for measurable impact. Do your part regardless." }
    ]
  },
  {
    level: 4,
    scenario: "Someone you admire disappoints you with their behavior.",
    choices: [
      { text: "Think 'I was wrong about them. They're a fraud.'", type: "judgment", insight: "Judgment makes people all good or all bad. But humans are complex and flawed." },
      { text: "Accept 'They're human. I can appreciate their work while acknowledging their flaws.'", type: "acceptance", insight: "Acceptance holds complexity. You can learn from someone without worshipping them." }
    ]
  },
  {
    level: 4,
    scenario: "A cause you support does something you disagree with.",
    choices: [
      { text: "Think 'They've lost their way. I can't support them anymore.'", type: "judgment", insight: "Judgment demands purity. But no movement or organization is perfect." },
      { text: "Consider 'Can I voice my disagreement and stay? Or is this a dealbreaker?'", type: "acceptance", insight: "Acceptance engages with imperfection. You can disagree and still belong." }
    ]
  },
  {
    level: 4,
    scenario: "People in your community hold views you find harmful.",
    choices: [
      { text: "Think 'They're bad people. I can't associate with them.'", type: "judgment", insight: "Judgment cuts connection. But people are more than their worst views." },
      { text: "Consider 'Can I maintain relationship while being clear about my values?'", type: "acceptance", insight: "Acceptance doesn't require agreement. Sometimes presence changes more than distance." }
    ]
  },
  {
    level: 4,
    scenario: "You feel hypocritical because you don't live up to your own values.",
    choices: [
      { text: "Think 'I'm a fraud. I shouldn't advocate for anything.'", type: "judgment", insight: "Judgment demands perfection before participation. But no one fully lives their values." },
      { text: "Accept 'I'm imperfect and still growing. I can advocate while being honest about my journey.'", type: "acceptance", insight: "Acceptance allows progress over perfection. Striving is enough." }
    ]
  },
  {
    level: 4,
    scenario: "Someone accuses you of not caring enough about an important issue.",
    choices: [
      { text: "Think 'They don't know what I do privately. They're being unfair.'", type: "judgment", insight: "Judgment defends without reflecting. But maybe there's a call to examine your priorities." },
      { text: "Consider 'Is there truth here? Am I living my values or just holding them?'", type: "acceptance", insight: "Acceptance uses criticism as a mirror. Even unfair accusations can prompt growth." }
    ]
  },
  {
    level: 4,
    scenario: "Activism in your community becomes performative and competitive.",
    choices: [
      { text: "Think 'They're all virtue signaling. It's not genuine.'", type: "judgment", insight: "Judgment dismisses everyone. But some genuine action often hides among the performance." },
      { text: "Focus 'I'll stay clear on why I'm involved and not get caught in comparison.'", type: "acceptance", insight: "Acceptance stays grounded. Your motives are the only ones you control." }
    ]
  },
  {
    level: 4,
    scenario: "You're told you're not the right person to speak on an issue you care about.",
    choices: [
      { text: "Think 'They're gatekeeping. Everyone has a right to speak.'", type: "judgment", insight: "Judgment ignores feedback about positioning. But maybe listening is your role here." },
      { text: "Consider 'What's the most helpful role for me? Speaking, amplifying, or supporting?'", type: "acceptance", insight: "Acceptance finds the right role. Not every cause needs your voice—some need your ears or hands." }
    ]
  },
  {
    level: 4,
    scenario: "You feel overwhelmed by all the causes that need attention.",
    choices: [
      { text: "Think 'I can't do everything, so why do anything?'", type: "judgment", insight: "Judgment paralyzes through overwhelm. But you were never meant to fix everything." },
      { text: "Accept 'I can't do everything. What's mine to do right now?'", type: "acceptance", insight: "Acceptance chooses focus. One cause done well beats ten done poorly." }
    ]
  },
  {
    level: 4,
    scenario: "People you're trying to help don't seem to want help.",
    choices: [
      { text: "Think 'They don't appreciate it. Why do I even bother?'", type: "judgment", insight: "Judgment expects gratitude. But help on your terms isn't always what's needed." },
      { text: "Ask 'Am I helping in the way they need, or the way I want to give?'", type: "acceptance", insight: "Acceptance listens to needs. Real help meets people where they are, not where you want them." }
    ]
  },
  {
    level: 4,
    scenario: "Your community resists change you think would help everyone.",
    choices: [
      { text: "Think 'They're stuck in the past. They'll never change.'", type: "judgment", insight: "Judgment dismisses resistance. But people resist change for reasons worth understanding." },
      { text: "Ask 'What are they afraid of losing? How do I address that?'", type: "acceptance", insight: "Acceptance meets resistance with curiosity. Understanding opens doors that pushing keeps closed." }
    ]
  },
  {
    level: 4,
    scenario: "You disagree with how others in your community prioritize issues.",
    choices: [
      { text: "Think 'They've got their priorities all wrong.'", type: "judgment", insight: "Judgment assumes your lens is clearest. But different experiences create different priorities." },
      { text: "Accept 'We see different things as urgent. That doesn't make them wrong.'", type: "acceptance", insight: "Acceptance allows different priorities. Your urgency isn't universal truth." }
    ]
  },
  {
    level: 4,
    scenario: "Someone with less knowledge speaks confidently on your area of expertise.",
    choices: [
      { text: "Think 'They have no idea what they're talking about.'", type: "judgment", insight: "Judgment dismisses without engaging. But confidence isn't the same as wrongness." },
      { text: "Consider 'Can I share what I know without making them feel stupid?'", type: "acceptance", insight: "Acceptance educates with grace. How you share matters as much as what you share." }
    ]
  },
  {
    level: 4,
    scenario: "You've been fighting for something for years without visible progress.",
    choices: [
      { text: "Think 'It's hopeless. Nothing ever changes.'", type: "judgment", insight: "Judgment measures by visible wins. But change often happens invisibly before it becomes visible." },
      { text: "Trust 'I may not see the impact, but that doesn't mean there isn't one.'", type: "acceptance", insight: "Acceptance plays the long game. Some seeds take years to sprout." }
    ]
  },
  {
    level: 4,
    scenario: "Your values put you at odds with people you otherwise love.",
    choices: [
      { text: "Think 'I have to choose: my values or my relationships.'", type: "judgment", insight: "Judgment creates false binaries. But relationships and values can often coexist with creativity." },
      { text: "Ask 'How do I hold both? Can I love people I disagree with?'", type: "acceptance", insight: "Acceptance finds the third way. Disagreement doesn't require disconnection." }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECISION_LEVEL_4;
}
