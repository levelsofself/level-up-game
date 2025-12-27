// LEVEL UP - ENHANCED DEEP INSIGHT SYSTEM
// Personalized analysis based on themes, archetypes, levels, and contradictions
// Replaces basic summary generation with rich, transformational insights

// ============================================================
// EXPANDED THEME DEFINITIONS (10 themes now)
// ============================================================

const ENHANCED_THEMES = {
  boundaries: {
    keywords: ['boundary', 'boundaries', 'no', 'yes', 'peace', 'please', 'avoid', 'conflict', 'protect', 'safe', 'space', 'distance', 'limit', 'refuse', 'people please', 'doormat', 'taken advantage', 'used', 'walked over', 'stand up', 'speak up', 'voice', 'silent', 'quiet', 'say yes', 'say no', 'permission', 'allow'],
    icon: '🛡️',
    name: 'Boundaries',
    color: 'var(--pink)',
    bgColor: 'rgba(255,60,172,0.2)',
    coreWound: 'Fear of rejection or abandonment if you set limits',
    growthPath: 'Learning that boundaries protect relationships, not destroy them',
    levelConnection: {
      1: 'You struggle to set limits with yourself—rest, nutrition, self-care.',
      2: 'Family patterns taught you that love means having no limits.',
      3: 'In groups, you disappear to keep the peace.',
      4: 'You over-give to your community until you\'re depleted.',
      5: 'You feel you must be available to everyone, always.',
      6: 'You carry the weight of global suffering personally.',
      7: 'You sacrifice your wellbeing for future generations.'
    }
  },
  control: {
    keywords: ['control', 'perfect', 'right', 'wrong', 'should', 'must', 'fix', 'order', 'plan', 'organize', 'manage', 'micromanage', 'anxious', 'worry', 'catastrophize', 'worst case', 'prepare', 'predict', 'certain', 'uncertain', 'chaos', 'mess', 'failure', 'mistake', 'rigid', 'flexible'],
    icon: '🎛️',
    name: 'Control',
    color: 'var(--purple)',
    bgColor: 'rgba(120,75,160,0.2)',
    coreWound: 'Deep fear that if you relax your grip, everything falls apart',
    growthPath: 'Learning that control is an illusion and surrender is strength',
    levelConnection: {
      1: 'You try to control your emotions, body, or thoughts.',
      2: 'You try to manage family members\' feelings or decisions.',
      3: 'In groups, you need things done your way.',
      4: 'You micromanage community projects or roles.',
      5: 'You feel anxious about systems you can\'t control.',
      6: 'Global uncertainty feels personally threatening.',
      7: 'You try to control your legacy or how you\'ll be remembered.'
    }
  },
  worthiness: {
    keywords: ['worth', 'deserve', 'enough', 'value', 'matter', 'good enough', 'worthy', 'love yourself', 'self-love', 'self-esteem', 'confidence', 'imposter', 'fraud', 'belong', 'fit in', 'measure up', 'compare', 'inferior', 'superior', 'prove', 'validation', 'approval', 'earn', 'achieve'],
    icon: '💎',
    name: 'Self-Worth',
    color: 'var(--blue)',
    bgColor: 'rgba(47,128,237,0.2)',
    coreWound: 'Believing you must earn your right to exist and be loved',
    growthPath: 'Discovering that worth is inherent, not achieved',
    levelConnection: {
      1: 'You don\'t feel deserving of rest, pleasure, or care.',
      2: 'You feel like the lesser member of your family.',
      3: 'In groups, you assume others are more valuable.',
      4: 'You undervalue your contribution to community.',
      5: 'You feel insignificant in the larger society.',
      6: 'You feel your life doesn\'t matter in the grand scheme.',
      7: 'You doubt you\'ll leave anything meaningful behind.'
    }
  },
  authenticity: {
    keywords: ['authentic', 'real', 'true', 'mask', 'pretend', 'fake', 'hide', 'show', 'reveal', 'vulnerable', 'honest', 'lie', 'truth', 'self', 'identity', 'who I am', 'different person', 'act', 'perform', 'image', 'reputation', 'facade', 'genuine'],
    icon: '🎭',
    name: 'Authenticity',
    color: 'var(--green)',
    bgColor: 'rgba(0,210,106,0.2)',
    coreWound: 'Fear that the real you is unacceptable or unlovable',
    growthPath: 'Learning that your authentic self is your greatest gift',
    levelConnection: {
      1: 'You don\'t know who you really are beneath the masks.',
      2: 'You perform a role in your family that isn\'t really you.',
      3: 'You become a different person in different groups.',
      4: 'Your community role doesn\'t reflect your true self.',
      5: 'You hide parts of yourself to fit societal expectations.',
      6: 'You feel you can\'t be yourself in the wider world.',
      7: 'You worry your legacy will be the mask, not the real you.'
    }
  },
  fear: {
    keywords: ['fear', 'afraid', 'scared', 'terrified', 'anxiety', 'panic', 'worry', 'dread', 'avoid', 'run', 'hide', 'escape', 'safe', 'danger', 'threat', 'risk', 'unknown', 'uncertain', 'what if', 'worst', 'paralyzed', 'frozen', 'stuck'],
    icon: '😰',
    name: 'Fear',
    color: 'var(--orange)',
    bgColor: 'rgba(255,107,53,0.2)',
    coreWound: 'Belief that you cannot handle what life brings',
    growthPath: 'Discovering that you are more resilient than your fears',
    levelConnection: {
      1: 'Fear of your own emotions, body, or thoughts.',
      2: 'Fear of losing family or being abandoned.',
      3: 'Fear of rejection or judgment by groups.',
      4: 'Fear of failing in your community role.',
      5: 'Fear of societal instability or collapse.',
      6: 'Fear of global catastrophe or human extinction.',
      7: 'Fear of death, meaninglessness, or being forgotten.'
    }
  },
  attachment: {
    keywords: ['attach', 'cling', 'need', 'depend', 'abandon', 'leave', 'stay', 'alone', 'lonely', 'connection', 'close', 'distant', 'push away', 'pull close', 'too much', 'too little', 'smother', 'neglect', 'available', 'unavailable', 'needy', 'independent'],
    icon: '🔗',
    name: 'Attachment',
    color: 'var(--yellow)',
    bgColor: 'rgba(247,201,72,0.2)',
    coreWound: 'Early experiences taught you connection is unsafe or unreliable',
    growthPath: 'Learning to connect without clinging or pushing away',
    levelConnection: {
      1: 'You struggle to feel connected to yourself.',
      2: 'Family relationships feel anxious or avoidant.',
      3: 'Friendships feel either suffocating or distant.',
      4: 'You don\'t feel truly connected to any community.',
      5: 'You feel alienated from your society.',
      6: 'You feel disconnected from humanity.',
      7: 'You feel disconnected from the chain of generations.'
    }
  },
  // NEW THEMES
  responsibility: {
    keywords: ['responsible', 'blame', 'fault', 'guilty', 'my job', 'their job', 'not my problem', 'burden', 'carry', 'weight', 'shoulder', 'take on', 'let go', 'own', 'accountable', 'excuse', 'justify'],
    icon: '⚖️',
    name: 'Responsibility',
    color: 'var(--silver)',
    bgColor: 'rgba(192,192,192,0.2)',
    coreWound: 'Confusion about what\'s yours to carry and what isn\'t',
    growthPath: 'Learning to own your part—no more, no less',
    levelConnection: {
      1: 'You either blame yourself for everything or nothing.',
      2: 'You carry your family\'s emotional weight.',
      3: 'You take on group problems that aren\'t yours to solve.',
      4: 'You feel responsible for fixing your community.',
      5: 'You feel guilty about societal problems you didn\'t cause.',
      6: 'You carry the weight of global suffering personally.',
      7: 'You feel responsible for problems future generations will face.'
    }
  },
  anger: {
    keywords: ['anger', 'angry', 'rage', 'fury', 'irritated', 'annoyed', 'frustrated', 'resentment', 'bitter', 'grudge', 'forgive', 'revenge', 'fair', 'unfair', 'injustice', 'wronged', 'hurt', 'betrayed', 'mad', 'furious'],
    icon: '🔥',
    name: 'Anger',
    color: 'var(--red)',
    bgColor: 'rgba(255,71,87,0.2)',
    coreWound: 'Not being seen, understood, or gotten',
    growthPath: 'Learning that anger signals unmet needs and crossed boundaries',
    levelConnection: {
      1: 'You suppress or explode with your own anger.',
      2: 'Family dynamics trigger deep resentment.',
      3: 'Group situations leave you feeling unseen.',
      4: 'You\'re angry about how your community operates.',
      5: 'Societal injustice fuels rage or numbness.',
      6: 'World events feel personally infuriating.',
      7: 'You\'re angry at what\'s being left for future generations.'
    }
  },
  shame: {
    keywords: ['shame', 'ashamed', 'embarrass', 'humiliate', 'guilt', 'guilty', 'bad person', 'wrong', 'broken', 'defective', 'flawed', 'damaged', 'unlovable', 'disgust', 'hide', 'secret', 'exposed'],
    icon: '🫣',
    name: 'Shame',
    color: '#8B5CF6',
    bgColor: 'rgba(139,92,246,0.2)',
    coreWound: 'Belief that something is fundamentally wrong with you',
    growthPath: 'Learning that shame is a feeling, not a truth about who you are',
    levelConnection: {
      1: 'You feel ashamed of who you are at your core.',
      2: 'Family experiences created deep shame wounds.',
      3: 'You feel embarrassed to be yourself in groups.',
      4: 'You hide parts of yourself from your community.',
      5: 'You\'re ashamed of aspects of your society.',
      6: 'You feel shame about your country or humanity.',
      7: 'You\'re ashamed of what you\'ll leave behind.'
    }
  },
  trust: {
    keywords: ['trust', 'faith', 'believe', 'betray', 'doubt', 'suspicious', 'paranoid', 'reliable', 'depend', 'count on', 'let down', 'disappointed', 'safe', 'unsafe', 'risk', 'vulnerable', 'guard', 'walls'],
    icon: '🤝',
    name: 'Trust',
    color: 'var(--cyan)',
    bgColor: 'rgba(0,216,255,0.2)',
    coreWound: 'Past betrayals made trust feel dangerous',
    growthPath: 'Learning to trust wisely without walls or naivety',
    levelConnection: {
      1: 'You don\'t trust yourself to make good decisions.',
      2: 'Family betrayals broke your trust early.',
      3: 'You struggle to trust friends or colleagues.',
      4: 'You don\'t trust community institutions.',
      5: 'You don\'t trust government or systems.',
      6: 'You don\'t trust humanity as a whole.',
      7: 'You don\'t trust that the future will be okay.'
    }
  }
};

// ============================================================
// CONTRADICTION PAIRS - When someone shows both sides
// ============================================================

const CONTRADICTION_PAIRS = [
  {
    pattern1: ['avoid conflict', 'people please', 'say yes', 'keep peace'],
    pattern2: ['anger', 'resentment', 'frustrated', 'bitter'],
    insight: 'You avoid conflict on the surface while anger builds beneath. The peace you keep costs you. What would happen if you let yourself be honest?',
    theme: 'Suppressed Anger'
  },
  {
    pattern1: ['control', 'perfect', 'plan', 'organize', 'certain'],
    pattern2: ['anxious', 'worry', 'fear', 'panic', 'overwhelm'],
    insight: 'Your control is a response to anxiety, not a cure for it. The tighter you grip, the more anxious you become. What would happen if you loosened your hold?',
    theme: 'Control-Anxiety Loop'
  },
  {
    pattern1: ['independent', 'don\'t need', 'alone', 'self-sufficient'],
    pattern2: ['lonely', 'abandoned', 'disconnected', 'want connection'],
    insight: 'Your independence protects you from rejection but creates the loneliness you fear. Needing people isn\'t weakness—it\'s human.',
    theme: 'False Independence'
  },
  {
    pattern1: ['achieve', 'success', 'prove', 'accomplish'],
    pattern2: ['not enough', 'imposter', 'fraud', 'worthless'],
    insight: 'No achievement has ever silenced the voice that says you\'re not enough. Because the voice isn\'t about achievements—it\'s about worth. Worth can\'t be earned.',
    theme: 'Achievement Trap'
  },
  {
    pattern1: ['help others', 'give', 'support', 'caretake'],
    pattern2: ['neglect self', 'exhausted', 'burned out', 'empty'],
    insight: 'You give to others what you won\'t give to yourself. Helping becomes hiding. When did taking care of yourself become less important than taking care of everyone else?',
    theme: 'Caretaker Depletion'
  },
  {
    pattern1: ['strong', 'tough', 'handle it', 'don\'t cry'],
    pattern2: ['pain', 'hurting', 'struggling', 'suffering'],
    insight: 'Your strength is real, but so is your pain. Strength isn\'t the absence of pain—it\'s carrying it. You\'re allowed to put it down sometimes.',
    theme: 'Hidden Vulnerability'
  },
  {
    pattern1: ['accept', 'let go', 'peace', 'forgive'],
    pattern2: ['can\'t forget', 'still hurts', 'angry', 'resentful'],
    insight: 'You know you should let go, but the wound hasn\'t healed. Acceptance isn\'t forced forgetting. Feel what you need to feel—acceptance comes after, not instead of, grief.',
    theme: 'Premature Forgiveness'
  },
  {
    pattern1: ['mask', 'perform', 'fake', 'pretend'],
    pattern2: ['authentic', 'real', 'true self', 'genuine'],
    insight: 'Part of you performs while another part longs to be real. You know how to be both—the question is which one you\'re choosing. What would it take to choose real?',
    theme: 'Authenticity Conflict'
  }
];

// ============================================================
// LEVEL-SPECIFIC INSIGHT GENERATORS
// ============================================================

const LEVEL_INSIGHTS = {
  1: {
    name: 'Individual',
    high: 'Your relationship with yourself is your strongest foundation. You\'ve built solid self-awareness.',
    low: 'Your patterns keep circling back to Level 1—your relationship with yourself. This is where your real work is. Everything else builds on this.',
    question: 'What daily practice for yourself have you been neglecting?'
  },
  2: {
    name: 'Family',
    high: 'You\'ve done significant work on your closest relationships. Family patterns are becoming clear.',
    low: 'Your family patterns are asking for attention. What you learned about love, conflict, and closeness came from here. Healing here heals everything above.',
    question: 'Who in your immediate family needs a real conversation with you?'
  },
  3: {
    name: 'Groups',
    high: 'You navigate group dynamics with increasing awareness. You see how you show up in teams.',
    low: 'Group situations reveal your patterns—do you hide, perform, dominate, or disappear? The groups in your life are mirrors.',
    question: 'In your closest group, are you being yourself or playing a role?'
  },
  4: {
    name: 'Community',
    high: 'You understand your role in community and contribute meaningfully.',
    low: 'Where do you belong beyond your personal relationships? Your community role—or lack of one—is speaking to you.',
    question: 'What community are you part of? What role do you play there?'
  },
  5: {
    name: 'Society',
    high: 'You see society clearly—not as you wish it were, but as it is. This clarity is power.',
    low: 'Your relationship with society—government, systems, culture—creates friction. Acceptance doesn\'t mean agreement. What reality are you fighting instead of seeing?',
    question: 'What about your society are you refusing to accept as reality?'
  },
  6: {
    name: 'World',
    high: 'You feel connected to humanity beyond your borders. Your circle of concern has expanded.',
    low: 'The world beyond your immediate life is calling for your attention. How connected do you feel to what happens outside your bubble?',
    question: 'How does what happens across the world affect how you live?'
  },
  7: {
    name: 'Generations',
    high: 'You\'re thinking about legacy—what you\'ll leave behind. This awareness transforms daily choices.',
    low: 'Questions about legacy, mortality, and what outlasts you are emerging. This isn\'t morbid—it\'s mature. What are you building that will survive you?',
    question: 'What do you want to be true about your life when you\'re gone?'
  }
};

// ============================================================
// ENHANCED SUMMARY GENERATOR
// ============================================================

function generateEnhancedSummary(profile, archetype) {
  const recPct = Math.round(profile.mirrorRecognition * 100);
  const accPct = Math.round(profile.acceptanceRate * 100);
  
  // Get dominant theme
  const themes = [
    { key: 'boundaries', value: profile.boundaryTheme || 0 },
    { key: 'control', value: profile.controlTheme || 0 },
    { key: 'worthiness', value: profile.worthTheme || 0 },
    { key: 'authenticity', value: profile.authenticityTheme || 0 },
    { key: 'fear', value: profile.fearTheme || 0 },
    { key: 'attachment', value: profile.attachmentTheme || 0 },
    { key: 'responsibility', value: profile.responsibilityTheme || 0 },
    { key: 'anger', value: profile.angerTheme || 0 },
    { key: 'shame', value: profile.shameTheme || 0 },
    { key: 'trust', value: profile.trustTheme || 0 }
  ];
  themes.sort((a, b) => b.value - a.value);
  const dominantTheme = themes[0].value > 0.1 ? ENHANCED_THEMES[themes[0].key] : null;
  
  // Get dominant level
  const topLevel = Object.entries(profile.topLevels || {}).sort((a, b) => b[1] - a[1])[0];
  const dominantLevelId = topLevel ? parseInt(topLevel[0]) : 1;
  const dominantLevel = LEVEL_INSIGHTS[dominantLevelId];
  
  // Build personalized summary
  let summary = '';
  
  // Core pattern based on recognition + acceptance
  if (recPct >= 75 && accPct >= 75) {
    summary = 'You see yourself clearly AND accept what you see. This combination is rare and powerful. ';
  } else if (recPct >= 75 && accPct < 45) {
    summary = 'You see yourself with unusual clarity—but that sight comes with harsh judgment. Your awareness is a gift; your self-criticism is the shadow. ';
  } else if (recPct < 45 && accPct >= 75) {
    summary = 'You\'re gentle with yourself and others—perhaps too gentle to look closely. Your acceptance may be avoiding the mirror. ';
  } else if (recPct >= 60 && accPct >= 60) {
    summary = 'You\'re building both awareness and acceptance—this balance is the foundation of lasting change. ';
  } else if (recPct < 45 && accPct < 45) {
    summary = 'You\'re at the beginning of the journey. Most people never start. The fact that you\'re here matters. ';
  } else {
    summary = 'Your patterns are emerging. Every time you recognize something, you gain power over it. ';
  }
  
  // Add archetype context
  if (archetype) {
    summary += `As ${archetype.name}, ${archetype.edge.split('.')[0].toLowerCase()}. `;
  }
  
  // Add theme context
  if (dominantTheme) {
    summary += `Your patterns cluster around ${dominantTheme.name.toLowerCase()}—${dominantTheme.coreWound.toLowerCase()}. `;
  }
  
  // Add level context
  if (dominantLevel) {
    const levelInsight = (profile.topLevels[dominantLevelId] || 0) > 3 ? dominantLevel.high : dominantLevel.low;
    summary += levelInsight;
  }
  
  return summary;
}

// ============================================================
// CONTRADICTION DETECTOR
// ============================================================

function detectContradictions(insights) {
  const detected = [];
  const allText = insights.map(i => (i.text || '').toLowerCase()).join(' ');
  
  CONTRADICTION_PAIRS.forEach(pair => {
    const hasPattern1 = pair.pattern1.some(p => allText.includes(p));
    const hasPattern2 = pair.pattern2.some(p => allText.includes(p));
    
    if (hasPattern1 && hasPattern2) {
      detected.push(pair);
    }
  });
  
  return detected;
}

// ============================================================
// LEVEL-SPECIFIC BREAKDOWN GENERATOR
// ============================================================

function generateLevelBreakdown(profile) {
  const levels = profile.topLevels || {};
  const breakdown = [];
  
  // Find levels with meaningful data
  Object.entries(levels).forEach(([levelId, count]) => {
    if (count >= 2) {
      const id = parseInt(levelId);
      const levelInfo = LEVEL_INSIGHTS[id];
      if (levelInfo) {
        breakdown.push({
          level: id,
          name: levelInfo.name,
          count: count,
          insight: count >= 5 ? levelInfo.high : levelInfo.low,
          question: levelInfo.question
        });
      }
    }
  });
  
  // Sort by count
  breakdown.sort((a, b) => b.count - a.count);
  
  return breakdown;
}

// ============================================================
// THEME ANALYSIS WITH NEW KEYWORDS
// ============================================================

function analyzeThemesEnhanced(insights) {
  const themes = {};
  
  Object.keys(ENHANCED_THEMES).forEach(key => {
    themes[key] = 0;
  });
  
  insights.forEach(insight => {
    const text = (insight.text || '').toLowerCase() + ' ' + (insight.insight || '').toLowerCase();
    
    Object.entries(ENHANCED_THEMES).forEach(([key, theme]) => {
      theme.keywords.forEach(keyword => {
        if (text.includes(keyword)) {
          themes[key] += 0.025;
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

// ============================================================
// CORE WOUND IDENTIFIER
// ============================================================

function identifyCoreWound(profile) {
  const wounds = [];
  
  // Check themes
  if ((profile.boundaryTheme || 0) > 0.15) {
    wounds.push({ wound: 'Fear of rejection if you set limits', theme: 'Boundaries' });
  }
  if ((profile.worthTheme || 0) > 0.15) {
    wounds.push({ wound: 'Belief that you must earn your worth', theme: 'Self-Worth' });
  }
  if ((profile.shameTheme || 0) > 0.15) {
    wounds.push({ wound: 'Belief that something is fundamentally wrong with you', theme: 'Shame' });
  }
  if ((profile.trustTheme || 0) > 0.15) {
    wounds.push({ wound: 'Past betrayals made trust feel dangerous', theme: 'Trust' });
  }
  if ((profile.attachmentTheme || 0) > 0.15) {
    wounds.push({ wound: 'Early experiences taught you connection is unsafe', theme: 'Attachment' });
  }
  if ((profile.angerTheme || 0) > 0.15) {
    wounds.push({ wound: 'Not being seen, understood, or gotten', theme: 'Anger' });
  }
  
  // If high judgment, add that
  if ((profile.acceptanceRate || 0.5) < 0.4) {
    wounds.push({ wound: 'Harsh inner critic that blocks self-acceptance', theme: 'Judgment' });
  }
  
  return wounds;
}

// ============================================================
// EXPORT FOR USE IN MAIN APP
// ============================================================

if (typeof window !== 'undefined') {
  window.EnhancedDeepInsight = {
    ENHANCED_THEMES,
    CONTRADICTION_PAIRS,
    LEVEL_INSIGHTS,
    generateEnhancedSummary,
    detectContradictions,
    generateLevelBreakdown,
    analyzeThemesEnhanced,
    identifyCoreWound
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ENHANCED_THEMES,
    CONTRADICTION_PAIRS,
    LEVEL_INSIGHTS,
    generateEnhancedSummary,
    detectContradictions,
    generateLevelBreakdown,
    analyzeThemesEnhanced,
    identifyCoreWound
  };
}
