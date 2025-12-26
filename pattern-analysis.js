// ============================================================
// PATTERN ANALYSIS ENGINE - Level Up Game
// Enhanced AI-powered insights for personal growth
// ============================================================

// Extended theme detection with nuanced categories
const THEME_PATTERNS = {
  boundaries: {
    keywords: ['boundary', 'boundaries', 'no', 'yes', 'peace', 'please', 'avoid', 'conflict', 'protect', 'safe', 'space', 'distance', 'limit', 'refuse', 'accept too much', 'say yes when', 'people please', 'doormat', 'taken advantage', 'used', 'walked over', 'stand up', 'speak up', 'voice', 'silent', 'quiet'],
    color: '#FF3CAC',
    icon: '🛡️',
    description: 'Setting and maintaining healthy limits',
    growthTip: 'Practice saying "Let me think about it" before automatic yes responses.'
  },
  control: {
    keywords: ['control', 'perfect', 'right', 'wrong', 'should', 'must', 'fix', 'order', 'plan', 'organize', 'manage', 'micromanage', 'anxious', 'worry', 'catastrophize', 'worst case', 'prepare', 'predict', 'certain', 'uncertain', 'chaos', 'mess', 'failure', 'mistake'],
    color: '#784BA0',
    icon: '🎛️',
    description: 'The need to manage outcomes and reduce uncertainty',
    growthTip: 'Notice what you\'re trying to control that isn\'t yours to control.'
  },
  worthiness: {
    keywords: ['worth', 'deserve', 'enough', 'value', 'matter', 'good enough', 'worthy', 'love yourself', 'self-love', 'self-esteem', 'confidence', 'imposter', 'fraud', 'belong', 'fit in', 'measure up', 'compare', 'inferior', 'superior', 'prove', 'validation', 'approval'],
    color: '#2F80ED',
    icon: '💎',
    description: 'Beliefs about your inherent value',
    growthTip: 'You don\'t have to earn your worth. You were born with it.'
  },
  authenticity: {
    keywords: ['authentic', 'real', 'true', 'mask', 'pretend', 'fake', 'hide', 'show', 'reveal', 'vulnerable', 'honest', 'lie', 'truth', 'self', 'identity', 'who I am', 'different person', 'act', 'perform', 'image', 'reputation'],
    color: '#00D26A',
    icon: '🎭',
    description: 'Being genuine vs. performing for others',
    growthTip: 'Who you are when no one is watching is who you really are.'
  },
  fear: {
    keywords: ['fear', 'afraid', 'scared', 'terrified', 'anxiety', 'panic', 'worry', 'dread', 'avoid', 'run', 'hide', 'escape', 'safe', 'danger', 'threat', 'risk', 'unknown', 'uncertain', 'what if', 'worst'],
    color: '#FF6B35',
    icon: '😰',
    description: 'Patterns driven by fear and avoidance',
    growthTip: 'Fear is a compass pointing to where growth lives.'
  },
  attachment: {
    keywords: ['attach', 'cling', 'need', 'depend', 'abandon', 'leave', 'stay', 'alone', 'lonely', 'connection', 'close', 'distant', 'push away', 'pull close', 'too much', 'too little', 'smother', 'neglect', 'available', 'unavailable'],
    color: '#F7C948',
    icon: '🔗',
    description: 'How you connect and disconnect from others',
    growthTip: 'Healthy attachment is interdependence, not codependence.'
  },
  anger: {
    keywords: ['anger', 'angry', 'rage', 'fury', 'irritated', 'annoyed', 'frustrated', 'resentment', 'bitter', 'grudge', 'forgive', 'revenge', 'fair', 'unfair', 'injustice', 'wronged', 'hurt', 'betrayed'],
    color: '#FF4757',
    icon: '🔥',
    description: 'Anger often signals a boundary was crossed',
    growthTip: 'Anger is information. What boundary needs protection?'
  },
  responsibility: {
    keywords: ['responsible', 'blame', 'fault', 'guilty', 'shame', 'sorry', 'apologize', 'fix it', 'my job', 'their job', 'not my problem', 'burden', 'carry', 'weight', 'shoulder', 'take on', 'let go'],
    color: '#C0C0C0',
    icon: '⚖️',
    description: 'What you own vs. what belongs to others',
    growthTip: 'You can only be responsible for your own thoughts, feelings, and actions.'
  }
};

// Archetype definitions with rich descriptions
const ENHANCED_ARCHETYPES = [
  {
    id: 'honest-avoider',
    name: 'The Honest Avoider',
    icon: '🪞',
    condition: (p) => p.mirrorRecognition >= 0.7 && p.acceptanceRate < 0.5,
    edge: 'You see yourself clearly but struggle to act on what you see. Your growth edge is courage.',
    deepDescription: 'You have remarkable self-awareness—you see your patterns with unusual clarity. But seeing isn\'t the same as doing. You might journal about changes, plan transformations, understand exactly what needs to shift... and then find yourself in the same loops. This isn\'t weakness. It\'s protection. Somewhere you learned that action leads to pain. Your work is to act before you feel ready.',
    challenges: [
      'Notice one moment today when you see a pattern but choose not to act. What stops you?',
      'When you recognize something about yourself today, take one tiny action on it.',
      'Ask yourself: "What am I protecting by not acting on what I know?"',
      'Do one thing today that you\'ve been "meaning to do" for weeks.',
      'Tell someone one truth you\'ve been holding back.'
    ],
    pairsWith: ['boundaries', 'fear', 'authenticity']
  },
  {
    id: 'compassionate-boundary-breaker',
    name: 'The Compassionate Boundary-Breaker',
    icon: '💔',
    condition: (p) => p.boundaryTheme >= 0.3 && p.acceptanceRate >= 0.6,
    edge: 'You accept others easily but let yourself get crossed. Your growth edge is self-protection.',
    deepDescription: 'You have a beautiful capacity for acceptance and understanding. You see the best in people, give the benefit of the doubt, and create space for others to be human. But this gift has a shadow: you extend to others what you don\'t extend to yourself. You accept behavior that crosses your limits. You understand everyone except when understanding means tolerating mistreatment. Boundaries aren\'t walls—they\'re the difference between a house and a doormat.',
    challenges: [
      'Notice one moment today when you say yes but mean no.',
      'Practice: "I hear you, and I need to think about it."',
      'Ask yourself: "Whose feelings am I protecting at the cost of my own?"',
      'Let someone be disappointed in you today without fixing it.',
      'Say "no" to something small, just to practice.'
    ],
    pairsWith: ['boundaries', 'worthiness', 'responsibility']
  },
  {
    id: 'aware-procrastinator',
    name: 'The Aware Procrastinator',
    icon: '⏳',
    condition: (p) => p.mirrorRecognition >= 0.6 && p.controlTheme >= 0.25,
    edge: 'You understand your patterns but delay changing them. Your growth edge is starting before you\'re ready.',
    deepDescription: 'You have insight. You\'ve read the books, done the therapy, understand the patterns. You could explain your psychology to anyone. But there\'s a gap between knowing and doing. You wait for the right moment, the right feeling, the right circumstances. You prepare to prepare to change. This isn\'t laziness—it\'s perfectionism in disguise. You\'re waiting to feel ready for something that requires action BEFORE readiness arrives.',
    challenges: [
      'Pick one pattern you recognized recently. Take one 2-minute action on it today.',
      'Notice when "I\'ll do it later" appears. What feeling is underneath?',
      'Ask yourself: "What\'s the smallest possible step I could take right now?"',
      'Set a timer for 5 minutes and start something you\'ve been avoiding.',
      'Do the thing badly. Imperfect action beats perfect inaction.'
    ],
    pairsWith: ['control', 'fear', 'worthiness']
  },
  {
    id: 'self-critical-achiever',
    name: 'The Self-Critical Achiever',
    icon: '⚡',
    condition: (p) => p.mirrorRecognition >= 0.5 && p.worthinessTheme >= 0.25 && p.acceptanceRate < 0.6,
    edge: 'You push yourself hard but struggle with self-compassion. Your growth edge is treating yourself like someone you love.',
    deepDescription: 'You hold yourself to standards you\'d never impose on others. When friends fail, you offer compassion; when you fail, you offer criticism. You\'ve achieved a lot, but it never feels like enough because the goal post keeps moving. The voice in your head sounds like someone who was never satisfied—because it probably is. You don\'t need more discipline. You need more kindness toward the one person who can\'t escape you: yourself.',
    challenges: [
      'When you catch yourself being self-critical, ask: "Would I say this to a friend?"',
      'Notice one thing you did well today. Let yourself feel it for 10 seconds.',
      'Practice: "I did my best with what I had."',
      'Write down 3 things you\'re proud of from this week.',
      'Speak to yourself the way you\'d speak to a child who tried their best.'
    ],
    pairsWith: ['worthiness', 'control', 'authenticity']
  },
  {
    id: 'peaceful-avoider',
    name: 'The Peaceful Avoider',
    icon: '🕊️',
    condition: (p) => p.mirrorRecognition < 0.5 && p.acceptanceRate >= 0.7,
    edge: 'You accept others easily but may be avoiding your own mirror. Your growth edge is honest self-examination.',
    deepDescription: 'You\'re good at acceptance—maybe too good. You accept others\' behavior, accept situations, accept "how things are." But this acceptance might be a subtle avoidance of looking at yourself. It\'s easier to accept everything out there than to examine what\'s in here. You may confuse peace with avoidance, acceptance with resignation. True peace comes after confrontation with truth, not instead of it.',
    challenges: [
      'Ask yourself: "What am I afraid to see about myself?"',
      'Notice if you deflect when someone gives you feedback today.',
      'Try: "That might be true about me. Let me sit with it."',
      'Instead of accepting a situation, ask: "What\'s my part in this?"',
      'Journal about a pattern you\'ve never admitted to anyone.'
    ],
    pairsWith: ['authenticity', 'fear', 'boundaries']
  },
  {
    id: 'growth-seeker',
    name: 'The Growth Seeker',
    icon: '🌱',
    condition: (p) => p.mirrorRecognition >= 0.6 && p.acceptanceRate >= 0.6,
    edge: 'You see yourself and accept what you see. Your growth edge is depth over breadth.',
    deepDescription: 'You\'re doing the work. You see your patterns and you accept them without harsh judgment. This is rare and valuable. But there\'s a risk at this stage: collecting insights like trophies without letting them transform you. You might move on to the next pattern before fully integrating the last one. Your edge isn\'t more awareness—it\'s deeper integration of what you already know.',
    challenges: [
      'Pick your most recognized pattern. What\'s underneath it?',
      'Instead of adding new insights, spend time with one you already have.',
      'Ask: "What would change if I fully lived what I already know?"',
      'Share a pattern with someone and ask for their perspective.',
      'Practice one insight for a full week before moving to the next.'
    ],
    pairsWith: ['all themes - integration work']
  },
  {
    id: 'emerging-observer',
    name: 'The Emerging Observer',
    icon: '👁️',
    condition: (p) => p.games >= 10 && p.games < 25,
    edge: 'You\'re building the habit of self-reflection. Your growth edge is consistency.',
    deepDescription: 'You\'ve started looking at yourself with more honesty than most people ever will. This takes courage. You\'re building a muscle that will serve you for life. Right now, the most important thing isn\'t what you discover—it\'s that you keep showing up to discover. Streaks matter. Consistency matters. You\'re laying a foundation.',
    challenges: [
      'Play one game today. Streaks build the muscle.',
      'Notice one pattern from yesterday showing up today.',
      'Ask: "What did I learn about myself this week?"',
      'Tell someone about an insight you had.',
      'Before bed, name one pattern you noticed today.'
    ],
    pairsWith: ['all themes - foundation building']
  },
  {
    id: 'default',
    name: 'The Aware One',
    icon: '🔮',
    condition: () => true,
    edge: 'You\'re on the path. Keep looking.',
    deepDescription: 'You\'re here. You\'re playing. You\'re looking at yourself. That already puts you ahead of most people who go through life on autopilot. Every game is data. Every pattern recognized is progress. Trust the process.',
    challenges: [
      'Notice one moment today when you react instead of respond.',
      'Ask yourself: "What pattern am I in right now?"',
      'Practice pausing before responding to anything that triggers you.',
      'Name the emotion you\'re feeling right now without judging it.',
      'Ask: "What would someone who loves me say about this situation?"'
    ],
    pairsWith: ['awareness building']
  }
];

// Contradiction patterns - when someone says "That's Me" to conflicting statements
const CONTRADICTION_PAIRS = [
  {
    patterns: ['say yes when I mean no', 'I have strong boundaries'],
    insight: 'You believe you have boundaries, but your actions tell a different story. The gap between intention and action is where your work lives.'
  },
  {
    patterns: ['perfectionist', 'good enough'],
    insight: 'You hold both perfectionism and acceptance in tension. This isn\'t hypocrisy—it\'s complexity. Watch when each shows up.'
  },
  {
    patterns: ['people pleaser', 'don\'t care what others think'],
    insight: 'Part of you genuinely doesn\'t care; part of you deeply does. Which part drives your behavior in high-stakes moments?'
  },
  {
    patterns: ['control', 'go with the flow'],
    insight: 'You flow when it\'s safe and control when it\'s not. Notice what triggers the switch.'
  },
  {
    patterns: ['confident', 'imposter'],
    insight: 'Confidence and imposter feelings often coexist. The question isn\'t which is "real"—it\'s which you let drive your actions.'
  }
];

// Generate personalized growth summary
function generateGrowthSummary(profile, archetype, insights) {
  const recPct = Math.round(profile.mirrorRecognition * 100);
  const accPct = Math.round(profile.acceptanceRate * 100);
  
  let summary = '';
  
  // Opening based on overall profile
  if (recPct >= 70 && accPct >= 70) {
    summary = 'You\'re in a powerful position: you see yourself clearly AND you accept what you see. This combination is rare. Most people either avoid the mirror or judge harshly what they find. You do neither. ';
  } else if (recPct >= 70 && accPct < 50) {
    summary = 'You have unusual self-awareness—you see patterns most people hide from. But seeing isn\'t accepting. You might be hard on yourself for what you discover. The next step isn\'t more insight; it\'s more compassion. ';
  } else if (recPct < 50 && accPct >= 70) {
    summary = 'You\'re accepting, perhaps too accepting. Your capacity for understanding is a gift, but it might be helping you avoid looking at yourself. What if that acceptance turned inward—to honestly see AND accept what\'s there? ';
  } else if (recPct >= 40 && accPct >= 40) {
    summary = 'You\'re in the middle of the journey—developing both sight and acceptance. This is exactly where growth happens: in the tension between seeing and accepting, between knowing and doing. ';
  } else {
    summary = 'You\'re at the beginning. This is the hardest part—showing up when patterns aren\'t clear yet. Every game builds data. Every recognition builds muscle. Trust the process. ';
  }
  
  // Add archetype insight
  summary += `As ${archetype.name}, ${archetype.edge.toLowerCase()} `;
  
  // Add theme-specific insight
  const dominantTheme = getDominantTheme(profile);
  if (dominantTheme) {
    summary += `Your patterns cluster around ${dominantTheme.name.toLowerCase()}—this is your current classroom.`;
  }
  
  return summary;
}

// Get dominant theme from profile
function getDominantTheme(profile) {
  const themes = [
    { name: 'Boundaries', value: profile.boundaryTheme || 0 },
    { name: 'Control', value: profile.controlTheme || 0 },
    { name: 'Self-Worth', value: profile.worthinessTheme || 0 },
    { name: 'Authenticity', value: profile.authenticityTheme || 0 },
    { name: 'Fear', value: profile.fearTheme || 0 },
    { name: 'Attachment', value: profile.attachmentTheme || 0 }
  ];
  
  themes.sort((a, b) => b.value - a.value);
  return themes[0].value > 0.1 ? themes[0] : null;
}

// Detect contradictions in recognized patterns
function detectContradictions(insights) {
  const contradictions = [];
  const texts = insights.map(i => (i.text || '').toLowerCase());
  
  CONTRADICTION_PAIRS.forEach(pair => {
    const hasFirst = texts.some(t => pair.patterns[0].split(' ').some(word => t.includes(word)));
    const hasSecond = texts.some(t => pair.patterns[1].split(' ').some(word => t.includes(word)));
    
    if (hasFirst && hasSecond) {
      contradictions.push(pair);
    }
  });
  
  return contradictions;
}

// Calculate growth trajectory (are they improving?)
function calculateGrowthTrajectory(gameHistory) {
  if (!gameHistory || gameHistory.length < 5) return null;
  
  const recent = gameHistory.slice(-5);
  const older = gameHistory.slice(-10, -5);
  
  if (older.length < 3) return null;
  
  const recentAvg = recent.reduce((sum, g) => sum + (g.recognition || 0), 0) / recent.length;
  const olderAvg = older.reduce((sum, g) => sum + (g.recognition || 0), 0) / older.length;
  
  const diff = recentAvg - olderAvg;
  
  if (diff > 0.1) return { direction: 'up', message: 'Your self-awareness is increasing. Keep going.' };
  if (diff < -0.1) return { direction: 'down', message: 'You may be hitting resistance. This often precedes breakthrough.' };
  return { direction: 'stable', message: 'You\'re in a consolidation phase. Integration is happening.' };
}

// Get level-specific recommendation
function getLevelRecommendation(profile, unlockedLevels) {
  const topLevels = profile.topLevels || {};
  const entries = Object.entries(topLevels).sort((a, b) => b[1] - a[1]);
  
  // Find level with most insights
  const dominantLevel = entries.length > 0 ? parseInt(entries[0][0]) : 1;
  
  // Recommend based on patterns
  if (profile.boundaryTheme > 0.2) {
    return {
      level: 2,
      name: 'Family',
      reason: 'Boundary patterns often originate in family dynamics. Level 2 scenarios will help you explore where these patterns began.'
    };
  }
  
  if (profile.controlTheme > 0.2) {
    return {
      level: 3,
      name: 'Groups',
      reason: 'Control patterns show up strongly in group dynamics. Level 3 will reveal how you manage (or over-manage) team situations.'
    };
  }
  
  if (profile.worthinessTheme > 0.2) {
    return {
      level: 1,
      name: 'Individual',
      reason: 'Self-worth work is foundational. Deepening Level 1 will strengthen everything built on top of it.'
    };
  }
  
  // Default: suggest next level up
  const nextLevel = Math.min(dominantLevel + 1, 7);
  if (unlockedLevels && unlockedLevels.includes(nextLevel)) {
    const levelNames = ['', 'Individual', 'Family', 'Groups', 'Community', 'Society', 'World', 'Generations'];
    return {
      level: nextLevel,
      name: levelNames[nextLevel],
      reason: `You've explored Level ${dominantLevel} deeply. Time to expand your awareness to ${levelNames[nextLevel]} patterns.`
    };
  }
  
  return {
    level: dominantLevel,
    name: ['', 'Individual', 'Family', 'Groups', 'Community', 'Society', 'World', 'Generations'][dominantLevel],
    reason: 'Continue deepening your work at this level before expanding.'
  };
}

// Enhanced theme analysis with more keywords
function analyzeThemesEnhanced(insights) {
  const themes = {};
  
  Object.keys(THEME_PATTERNS).forEach(themeKey => {
    themes[themeKey] = 0;
  });
  
  insights.forEach(insight => {
    const text = (insight.text || '').toLowerCase();
    
    Object.entries(THEME_PATTERNS).forEach(([themeKey, theme]) => {
      theme.keywords.forEach(keyword => {
        if (text.includes(keyword)) {
          themes[themeKey] += 0.03; // Smaller increment for more nuanced detection
        }
      });
    });
  });
  
  // Normalize to max 1
  Object.keys(themes).forEach(key => {
    themes[key] = Math.min(themes[key], 1);
  });
  
  return themes;
}

// Export functions for use in main app
if (typeof window !== 'undefined') {
  window.PatternAnalysis = {
    THEME_PATTERNS,
    ENHANCED_ARCHETYPES,
    CONTRADICTION_PAIRS,
    generateGrowthSummary,
    getDominantTheme,
    detectContradictions,
    calculateGrowthTrajectory,
    getLevelRecommendation,
    analyzeThemesEnhanced
  };
}
