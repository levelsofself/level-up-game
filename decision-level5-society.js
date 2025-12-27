// LEVEL UP - DECISION MODE (Acceptance vs Judgment)
// LEVEL 5: SOCIETY - Your nation, systems, government, economy, culture
// 50 scenarios teaching acceptance creates freedom, judgment blocks possibility
// Format: { level: 5, scenario: "situation", choices: [{text, type, insight}] }

const DECISION_LEVEL_5 = [

  // ========== SYSTEMS & INSTITUTIONS (15) ==========
  {
    level: 5,
    scenario: "The government makes a decision you strongly disagree with.",
    choices: [
      { text: "Think 'This country is ruined. The whole system is corrupt.'", type: "judgment", insight: "Judgment catastrophizes. But disagreement with decisions isn't the same as total corruption." },
      { text: "Accept 'I disagree with this decision. What constructive action can I take?'", type: "acceptance", insight: "Acceptance channels disagreement into action. Outrage without action changes nothing." }
    ]
  },
  {
    level: 5,
    scenario: "You encounter bureaucracy that wastes your time.",
    choices: [
      { text: "Think 'The whole system is broken. It's designed to frustrate people.'", type: "judgment", insight: "Judgment assumes malice. But most bureaucracy is inefficiency, not intentional harm." },
      { text: "Accept 'This is frustrating AND it's the current reality. How do I navigate it?'", type: "acceptance", insight: "Acceptance works with what is. Frustration is valid; getting stuck in it isn't helpful." }
    ]
  },
  {
    level: 5,
    scenario: "You realize you benefit from a system that disadvantages others.",
    choices: [
      { text: "Think 'That's not my fault. I didn't create the system.'", type: "judgment", insight: "Judgment deflects responsibility. But benefiting doesn't require fault—it does require awareness." },
      { text: "Accept 'This is true. What's my responsibility given this awareness?'", type: "acceptance", insight: "Acceptance holds uncomfortable truths. Awareness is the first step to responsible action." }
    ]
  },
  {
    level: 5,
    scenario: "Laws exist that you think are unjust.",
    choices: [
      { text: "Think 'I shouldn't have to follow unjust laws.'", type: "judgment", insight: "Judgment absolves without action. But civil disobedience has always had consequences its practitioners accepted." },
      { text: "Consider 'How do I work to change this while accepting current reality?'", type: "acceptance", insight: "Acceptance doesn't mean agreement. You can accept what is while working to change it." }
    ]
  },
  {
    level: 5,
    scenario: "The healthcare system fails someone you love.",
    choices: [
      { text: "Think 'The system is evil. They only care about money.'", type: "judgment", insight: "Judgment sees only villains. But systems are complex, with caring individuals inside broken structures." },
      { text: "Accept 'This system failed us. How do I advocate while navigating what exists?'", type: "acceptance", insight: "Acceptance holds both grief and strategy. You can mourn and fight at the same time." }
    ]
  },
  {
    level: 5,
    scenario: "You feel powerless against large institutions.",
    choices: [
      { text: "Think 'Nothing I do matters. They're too big to fight.'", type: "judgment", insight: "Judgment surrenders before trying. But every large change started with people who felt powerless." },
      { text: "Ask 'What small influence can I have? Who else shares my concern?'", type: "acceptance", insight: "Acceptance finds leverage. Collective action starts with individuals who refuse to be powerless." }
    ]
  },
  {
    level: 5,
    scenario: "The education system isn't serving students well.",
    choices: [
      { text: "Think 'Schools are worthless. The whole system needs to be torn down.'", type: "judgment", insight: "Judgment offers destruction without alternatives. But what would replace what's torn down?" },
      { text: "Consider 'What can be improved within the system? What alternatives can I support?'", type: "acceptance", insight: "Acceptance works for improvement. Reform and alternatives can coexist with critique." }
    ]
  },
  {
    level: 5,
    scenario: "You pay taxes for things you don't support.",
    choices: [
      { text: "Think 'It's theft. I shouldn't have to fund things I oppose.'", type: "judgment", insight: "Judgment ignores social contract complexity. But societies have always required compromise." },
      { text: "Accept 'This is how collective society works. I can advocate for different priorities.'", type: "acceptance", insight: "Acceptance lives with imperfect systems. You participate while pushing for change." }
    ]
  },
  {
    level: 5,
    scenario: "The justice system produces an outcome you think is wrong.",
    choices: [
      { text: "Think 'Justice doesn't exist. The system is rigged.'", type: "judgment", insight: "Judgment globalizes one outcome. But imperfect justice isn't the same as no justice." },
      { text: "Accept 'This outcome is wrong. How do I work toward better justice?'", type: "acceptance", insight: "Acceptance holds disappointment without despair. Fight for better without abandoning the idea of justice." }
    ]
  },
  {
    level: 5,
    scenario: "Social services don't reach people who need them.",
    choices: [
      { text: "Think 'Why do we even have these programs if they don't work?'", type: "judgment", insight: "Judgment dismisses partial solutions. But imperfect help is often better than none." },
      { text: "Consider 'How can these services be improved? What gaps can I help fill?'", type: "acceptance", insight: "Acceptance improves what exists. Perfect systems don't exist—better ones can be built." }
    ]
  },
  {
    level: 5,
    scenario: "You realize how much of your life is shaped by systems you didn't choose.",
    choices: [
      { text: "Think 'I'm not really free. Everything is predetermined by the system.'", type: "judgment", insight: "Judgment collapses into determinism. But influence isn't the same as control." },
      { text: "Accept 'I'm shaped by systems AND I have agency within them. Both are true.'", type: "acceptance", insight: "Acceptance holds tension. You're influenced but not determined—choice still exists." }
    ]
  },
  {
    level: 5,
    scenario: "Politicians don't represent your views.",
    choices: [
      { text: "Think 'They're all the same. Democracy is an illusion.'", type: "judgment", insight: "Judgment equates imperfection with fraud. But flawed representation isn't no representation." },
      { text: "Consider 'What level of government can I influence? How do I engage?'", type: "acceptance", insight: "Acceptance participates anyway. Disengagement guarantees you won't be represented." }
    ]
  },
  {
    level: 5,
    scenario: "The economic system creates inequality you think is unfair.",
    choices: [
      { text: "Think 'The whole system should be replaced.'", type: "judgment", insight: "Judgment offers revolution without roadmap. But what replaces a torn-down system matters." },
      { text: "Accept 'This system has real flaws. What changes are possible? What do I support?'", type: "acceptance", insight: "Acceptance works for change. You can critique and engage at the same time." }
    ]
  },
  {
    level: 5,
    scenario: "Media presents information in ways you don't trust.",
    choices: [
      { text: "Think 'You can't believe anything. It's all propaganda.'", type: "judgment", insight: "Judgment distrusts everything equally. But some sources are more reliable than others." },
      { text: "Accept 'Media is imperfect. How do I find reliable information?'", type: "acceptance", insight: "Acceptance develops discernment. Critical consumption beats total rejection." }
    ]
  },
  {
    level: 5,
    scenario: "Technology companies have more power than you're comfortable with.",
    choices: [
      { text: "Think 'We're all being controlled. There's no escape.'", type: "judgment", insight: "Judgment sees only helplessness. But choices exist, even if they're not perfect." },
      { text: "Consider 'What choices do I have? What's the tradeoff I'm willing to make?'", type: "acceptance", insight: "Acceptance makes informed choices. You can limit exposure while accepting you can't eliminate it." }
    ]
  },

  // ========== CULTURE & SOCIETY (15) ==========
  {
    level: 5,
    scenario: "Society seems to be changing in directions you don't like.",
    choices: [
      { text: "Think 'Everything is getting worse. Society is collapsing.'", type: "judgment", insight: "Judgment sees only decline. But every generation has feared societal collapse." },
      { text: "Accept 'Change is constant. What values do I want to preserve and promote?'", type: "acceptance", insight: "Acceptance engages with change. Influence comes from participation, not just complaint." }
    ]
  },
  {
    level: 5,
    scenario: "Cultural values differ significantly from your personal values.",
    choices: [
      { text: "Think 'Society has lost its way. People today have no morals.'", type: "judgment", insight: "Judgment moralizes without understanding. But values evolve—yours did too." },
      { text: "Accept 'Culture and I differ here. I can hold my values while coexisting.'", type: "acceptance", insight: "Acceptance maintains values without crusading. You can be different without being at war." }
    ]
  },
  {
    level: 5,
    scenario: "Social media creates pressure to present a perfect life.",
    choices: [
      { text: "Think 'Social media is toxic. It's ruining everyone.'", type: "judgment", insight: "Judgment blames the tool. But tools are used differently by different people." },
      { text: "Accept 'This pressure exists. How do I want to engage authentically?'", type: "acceptance", insight: "Acceptance chooses your relationship with it. You control your use, not everyone else's." }
    ]
  },
  {
    level: 5,
    scenario: "You see people believing things you think are obviously false.",
    choices: [
      { text: "Think 'People are stupid. How can they believe that?'", type: "judgment", insight: "Judgment dismisses without curiosity. But belief formation is complex, not just intelligence." },
      { text: "Ask 'What needs does that belief meet? How did they come to it?'", type: "acceptance", insight: "Acceptance seeks understanding. You can disagree without dehumanizing." }
    ]
  },
  {
    level: 5,
    scenario: "Society expects things from you that don't fit who you are.",
    choices: [
      { text: "Think 'I have to conform or be rejected.'", type: "judgment", insight: "Judgment sees only two options. But many people live authentically outside expectations." },
      { text: "Accept 'Expectations exist. I can choose which to meet and which to release.'", type: "acceptance", insight: "Acceptance finds your own path. You don't have to rebel against everything or conform to everything." }
    ]
  },
  {
    level: 5,
    scenario: "Consumer culture promotes values you don't share.",
    choices: [
      { text: "Think 'Everyone is shallow. Society only cares about stuff.'", type: "judgment", insight: "Judgment condemns broadly. But many people share your concerns." },
      { text: "Accept 'This is the dominant culture. How do I live my values within it?'", type: "acceptance", insight: "Acceptance finds your way. You can live differently without waiting for society to change." }
    ]
  },
  {
    level: 5,
    scenario: "You feel out of step with your generation.",
    choices: [
      { text: "Think 'There's something wrong with me. I should be like everyone else.'", type: "judgment", insight: "Judgment makes conformity the goal. But no generation is monolithic." },
      { text: "Accept 'I'm different from the stereotype. That's okay—stereotypes are never the whole truth.'", type: "acceptance", insight: "Acceptance claims your uniqueness. Your generation is more diverse than it appears." }
    ]
  },
  {
    level: 5,
    scenario: "Traditions you value are fading from society.",
    choices: [
      { text: "Think 'Everything meaningful is being lost. The future is empty.'", type: "judgment", insight: "Judgment mourns without action. But traditions survive through people who carry them." },
      { text: "Accept 'Traditions evolve. How do I preserve what matters while letting them breathe?'", type: "acceptance", insight: "Acceptance keeps traditions alive. You can honor the past without freezing it." }
    ]
  },
  {
    level: 5,
    scenario: "Society celebrates things you find shallow.",
    choices: [
      { text: "Think 'People worship the wrong things. Our priorities are broken.'", type: "judgment", insight: "Judgment positions you above. But you also celebrate things others might find shallow." },
      { text: "Accept 'I value different things. I can focus on what matters to me.'", type: "acceptance", insight: "Acceptance minds your own values. Others' celebrations don't require your participation or contempt." }
    ]
  },
  {
    level: 5,
    scenario: "Mental health stigma prevents people from getting help.",
    choices: [
      { text: "Think 'Society is cruel. People will never understand.'", type: "judgment", insight: "Judgment despairs of change. But stigma is decreasing—slowly, but measurably." },
      { text: "Consider 'Stigma exists. How do I reduce it in my sphere of influence?'", type: "acceptance", insight: "Acceptance works for change. Every conversation that normalizes help-seeking matters." }
    ]
  },
  {
    level: 5,
    scenario: "Your society has historical wrongs it hasn't fully addressed.",
    choices: [
      { text: "Think 'The past is the past. Why do we keep bringing it up?'", type: "judgment", insight: "Judgment dismisses lingering impact. But unaddressed wrongs shape the present." },
      { text: "Accept 'This history is real. What does responsible engagement look like for me?'", type: "acceptance", insight: "Acceptance faces history. You can't change the past, but you can influence how it shapes the future." }
    ]
  },
  {
    level: 5,
    scenario: "Different groups in society seem unable to understand each other.",
    choices: [
      { text: "Think 'The country is too divided. It's hopeless.'", type: "judgment", insight: "Judgment gives up on connection. But bridges get built by people who don't accept hopelessness." },
      { text: "Ask 'What can I do in my own interactions to bridge divides?'", type: "acceptance", insight: "Acceptance starts local. You can't heal society, but you can model understanding." }
    ]
  },
  {
    level: 5,
    scenario: "Success in society seems to require compromising your values.",
    choices: [
      { text: "Think 'You have to sell out to succeed. Integrity is punished.'", type: "judgment", insight: "Judgment makes corruption inevitable. But people succeed with integrity—they're just less visible." },
      { text: "Accept 'Pressure to compromise exists. I choose what I'm willing and unwilling to do.'", type: "acceptance", insight: "Acceptance holds your line. You define your success; society doesn't have to." }
    ]
  },
  {
    level: 5,
    scenario: "You benefit from aspects of society you also criticize.",
    choices: [
      { text: "Think 'I'm a hypocrite. I can't criticize what I benefit from.'", type: "judgment", insight: "Judgment demands purity. But everyone exists within imperfect systems." },
      { text: "Accept 'I participate in what I critique. I can work for change while being honest about my position.'", type: "acceptance", insight: "Acceptance allows imperfect advocacy. Critique from within is still valid critique." }
    ]
  },
  {
    level: 5,
    scenario: "Society moves slower than you want on issues you care about.",
    choices: [
      { text: "Think 'Nothing ever changes. What's the point?'", type: "judgment", insight: "Judgment measures by your timeline. But significant change often takes generations." },
      { text: "Accept 'Change is slow. I plant seeds I might not see bloom.'", type: "acceptance", insight: "Acceptance plays the long game. Impatience for justice is valid; despair isn't required." }
    ]
  },

  // ========== YOUR PLACE IN SOCIETY (20) ==========
  {
    level: 5,
    scenario: "You have privileges others don't have.",
    choices: [
      { text: "Think 'I earned everything I have. Privilege is just an excuse.'", type: "judgment", insight: "Judgment denies context. But starting points differ, even among hard workers." },
      { text: "Accept 'Some advantages came to me unearned. What do I do with that awareness?'", type: "acceptance", insight: "Acceptance holds complexity. Privilege doesn't erase effort—it adds context." }
    ]
  },
  {
    level: 5,
    scenario: "You experience discrimination or unfair treatment.",
    choices: [
      { text: "Think 'The whole system is against me. I can't succeed here.'", type: "judgment", insight: "Judgment can trap you in victimhood. Real barriers exist AND agency still matters." },
      { text: "Accept 'This discrimination is real. How do I navigate it without letting it define me?'", type: "acceptance", insight: "Acceptance holds both reality and agency. You can name injustice and still move forward." }
    ]
  },
  {
    level: 5,
    scenario: "Your success came partly from advantages you didn't earn.",
    choices: [
      { text: "Think 'I still worked hard. It's not fair to discount that.'", type: "judgment", insight: "Judgment defends against discomfort. But acknowledging advantage doesn't erase effort." },
      { text: "Accept 'Hard work and advantage both played a role. That's just the truth.'", type: "acceptance", insight: "Acceptance holds nuance. You can be proud of effort while honest about context." }
    ]
  },
  {
    level: 5,
    scenario: "You disagree with how your tax money is spent.",
    choices: [
      { text: "Think 'They're stealing from me to fund things I oppose.'", type: "judgment", insight: "Judgment ignores collective decision-making. But democracy means sometimes funding what you oppose." },
      { text: "Accept 'This is how shared society works. I can advocate for different priorities.'", type: "acceptance", insight: "Acceptance participates in imperfect systems. Civic engagement is how you influence spending." }
    ]
  },
  {
    level: 5,
    scenario: "You feel you've been treated unfairly by a system.",
    choices: [
      { text: "Think 'I'm being targeted. They're out to get me.'", type: "judgment", insight: "Judgment assumes malice. But most system failures are indifference, not persecution." },
      { text: "Accept 'This feels unfair. Is there a way to address it within the system or around it?'", type: "acceptance", insight: "Acceptance looks for paths forward. You can acknowledge unfairness while seeking solutions." }
    ]
  },
  {
    level: 5,
    scenario: "Someone suggests you don't understand their societal challenges.",
    choices: [
      { text: "Think 'I understand plenty. They're being dismissive.'", type: "judgment", insight: "Judgment defends instead of listens. But lived experience teaches what observation can't." },
      { text: "Accept 'Maybe I don't fully understand. What can I learn from them?'", type: "acceptance", insight: "Acceptance stays curious. Not knowing is an opportunity, not an accusation." }
    ]
  },
  {
    level: 5,
    scenario: "You realize your worldview was shaped by your particular position in society.",
    choices: [
      { text: "Think 'Everyone's biased then. No one can really know truth.'", type: "judgment", insight: "Judgment collapses into relativism. But acknowledging perspective doesn't eliminate truth." },
      { text: "Accept 'My perspective is partial. Other views can expand my understanding.'", type: "acceptance", insight: "Acceptance seeks broader vision. Your view is valid AND incomplete—both are true." }
    ]
  },
  {
    level: 5,
    scenario: "You feel guilty about your comfort when others suffer.",
    choices: [
      { text: "Think 'I don't deserve what I have. I should feel bad.'", type: "judgment", insight: "Judgment makes guilt the goal. But guilt without action helps no one." },
      { text: "Accept 'Inequality exists. What am I going to do—not just feel—about it?'", type: "acceptance", insight: "Acceptance moves past guilt to action. Your discomfort isn't the point—your response is." }
    ]
  },
  {
    level: 5,
    scenario: "The news constantly presents problems you can't solve.",
    choices: [
      { text: "Think 'What's the point of knowing? I can't do anything about it.'", type: "judgment", insight: "Judgment equates awareness with action. But staying informed is different from staying helpless." },
      { text: "Accept 'I can't solve everything. I can stay informed and act where I can.'", type: "acceptance", insight: "Acceptance limits without disengaging. You choose what to act on; you don't ignore everything." }
    ]
  },
  {
    level: 5,
    scenario: "People blame your demographic for society's problems.",
    choices: [
      { text: "Think 'That's not fair. I'm not responsible for what others do.'", type: "judgment", insight: "Judgment defends the self. But maybe there's something to examine beneath the defensiveness." },
      { text: "Consider 'Is there any truth here? What's my responsibility distinct from blame?'", type: "acceptance", insight: "Acceptance separates personal responsibility from collective blame. You can examine without accepting false guilt." }
    ]
  },
  {
    level: 5,
    scenario: "You feel caught between different cultural expectations.",
    choices: [
      { text: "Think 'I don't fully belong anywhere. I'm always between worlds.'", type: "judgment", insight: "Judgment makes in-betweenness a deficit. But bridging cultures is a gift, not a curse." },
      { text: "Accept 'I'm shaped by multiple cultures. That's complexity, not confusion.'", type: "acceptance", insight: "Acceptance claims multiplicity. You don't have to choose one identity—you contain many." }
    ]
  },
  {
    level: 5,
    scenario: "Your opportunities were limited by where you were born.",
    choices: [
      { text: "Think 'It's not fair. I never had a chance.'", type: "judgment", insight: "Judgment can trap you in resentment. But people transcend starting points—not easily, but really." },
      { text: "Accept 'My starting point was limited. What's possible from where I am now?'", type: "acceptance", insight: "Acceptance starts from current reality. Unfair origins don't determine final destinations." }
    ]
  },
  {
    level: 5,
    scenario: "You interact with someone whose life experience is vastly different from yours.",
    choices: [
      { text: "Think 'We have nothing in common. We can't really understand each other.'", type: "judgment", insight: "Judgment assumes difference is distance. But human connection often transcends experience." },
      { text: "Think 'Our experiences differ. What can we each learn from each other?'", type: "acceptance", insight: "Acceptance finds connection across difference. Shared humanity is deeper than shared circumstance." }
    ]
  },
  {
    level: 5,
    scenario: "Society's expectations conflict with your wellbeing.",
    choices: [
      { text: "Push through: 'I have to meet expectations, no matter the cost.'", type: "judgment", insight: "Judgment sacrifices self for external approval. But broken people can't sustain contribution." },
      { text: "Consider 'Which expectations serve me and which harm me? I get to choose.'", type: "acceptance", insight: "Acceptance prioritizes sustainable living. You can opt out of expectations that destroy you." }
    ]
  },
  {
    level: 5,
    scenario: "You realize much of what you believe came from your upbringing.",
    choices: [
      { text: "Think 'None of my beliefs are really mine. I'm just programmed.'", type: "judgment", insight: "Judgment denies agency entirely. But examining beliefs is how you make them yours." },
      { text: "Accept 'I was shaped by my upbringing. I can examine what I want to keep.'", type: "acceptance", insight: "Acceptance allows review. Inherited beliefs can become chosen beliefs through examination." }
    ]
  },
  {
    level: 5,
    scenario: "Social pressure pushes you toward a life that doesn't fit you.",
    choices: [
      { text: "Think 'I have to follow the script or I'll fail.'", type: "judgment", insight: "Judgment follows the expected path. But whose definition of success are you chasing?" },
      { text: "Accept 'Pressure exists. I can acknowledge it without obeying it.'", type: "acceptance", insight: "Acceptance chooses consciously. Pressure is real; compliance is optional." }
    ]
  },
  {
    level: 5,
    scenario: "You have more than you need while others have less than enough.",
    choices: [
      { text: "Think 'I shouldn't enjoy what I have until everyone has enough.'", type: "judgment", insight: "Judgment makes joy conditional on solving inequality. But joyless people don't heal the world." },
      { text: "Accept 'This disparity is real. I can enjoy life AND work for more equity.'", type: "acceptance", insight: "Acceptance holds both. Gratitude and generosity can coexist." }
    ]
  },
  {
    level: 5,
    scenario: "Your voice seems too small to matter in society.",
    choices: [
      { text: "Think 'Why bother speaking? No one listens to people like me.'", type: "judgment", insight: "Judgment silences before trying. But every movement was made of 'small' voices." },
      { text: "Accept 'My voice is one of many. It matters even if it's not the loudest.'", type: "acceptance", insight: "Acceptance contributes anyway. Drops fill buckets; voices build movements." }
    ]
  },
  {
    level: 5,
    scenario: "You're asked to take a stand on a controversial social issue.",
    choices: [
      { text: "Avoid it: 'I don't want to deal with the backlash.'", type: "judgment", insight: "Judgment prioritizes comfort over conviction. But silence is also a statement." },
      { text: "Consider 'What do I actually believe? Am I willing to be honest about it?'", type: "acceptance", insight: "Acceptance examines and speaks. You don't have to have perfect opinions to have honest ones." }
    ]
  },
  {
    level: 5,
    scenario: "Society seems to value things that conflict with your wellbeing.",
    choices: [
      { text: "Think 'I have to choose: success or health.'", type: "judgment", insight: "Judgment accepts false binaries. But alternative definitions of success exist." },
      { text: "Accept 'Dominant values conflict with my wellbeing. I can define success differently.'", type: "acceptance", insight: "Acceptance creates your own metrics. Society's scoreboard isn't the only one." }
    ]
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECISION_LEVEL_5;
}
