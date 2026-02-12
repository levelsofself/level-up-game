/* Level Up - Light Theme v1.1
   Add: <script src="levelup-theme.js"></script>
   Toggle via "See Your Patterns" h1 in index.html
   THEME ONLY - no bugfixes, no music picker */
(function(){
'use strict';
var link=document.createElement('link');
link.rel='stylesheet';
link.href='https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,800;0,9..144,900;1,9..144,300;1,9..144,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600;800&family=Instrument+Serif:ital@0;1&display=swap';
document.head.appendChild(link);
var css=document.createElement('style');
css.id='bone-ash-theme';
css.textContent=`
/* ═══════════════════════════════════════
   LIGHT THEME — Full Game Override
   Activate: document.body.classList.add('bone-ash')
   Deactivate: document.body.classList.remove('bone-ash')
   ═══════════════════════════════════════ */

/* --- ROOT VARIABLES --- */
body.bone-ash {
  --bg: #ede8df;
  --bg-solid: #ede8df;
  --card: rgba(255,252,245,0.8);
  --card-solid: #fffcf5;
  --border: rgba(32,28,22,0.06);
  --text: #201c16;
  --muted: #7a7068;
  --pink: #9b4a2c;
  --orange: #c44b2e;
  --purple: #6b5a4e;
  --blue: #2e6b5a;
  --green: #2e6b5a;
  --cyan: #2e6b5a;
  --cyan-bright: #3a8a70;
  --gold: #9b4a2c;
  --red: #c44b2e;
  --grad-primary: linear-gradient(135deg, #9b4a2c, #c44b2e);
  --grad-secondary: linear-gradient(135deg, #6b5a4e, #7a7068);
  --shadow-glow-pink: 0 0 20px rgba(155,74,44,0.15);
  --shadow-glow-cyan: 0 0 20px rgba(46,107,90,0.15);
  --shadow-card: 0 2px 12px rgba(32,28,22,0.06);
  --shadow-card-hover: 0 4px 20px rgba(32,28,22,0.1);
  --transition-fast: all 0.2s ease;
  --transition-normal: all 0.3s ease;

  background: #ede8df !important;
  color: #201c16 !important;
  font-family: 'Libre Baskerville', serif !important;
  background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.45' numOctaves='6'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23g)' opacity='.02'/%3E%3C/svg%3E") !important;
}

/* --- REMOVE DARK BACKGROUNDS --- */
body.bone-ash .vignette,
body.bone-ash body::before,
body.bone-ash body::after {
  background: none !important;
  opacity: 0 !important;
}

/* --- HOOK / INTRO SCREEN --- */
body.bone-ash .hook {
  background: #ede8df !important;
}
body.bone-ash .hook::after {
  background: linear-gradient(180deg, #f2ede6 0%, #ede8df 100%) !important;
}
body.bone-ash .hook::before {
  background: radial-gradient(circle at 30% 30%, rgba(155,74,44,0.04), transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(107,90,78,0.04), transparent 50%) !important;
}
body.bone-ash .hook-line {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-family: 'Fraunces', serif !important;
}
body.bone-ash .hook-sub {
  color: #7a7068 !important;
  font-family: 'Libre Baskerville', serif !important;
}
body.bone-ash .hook-btn {
  background: #9b4a2c !important;
  color: #fffcf5 !important;
  border: none !important;
  font-family: 'Manrope', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  font-size: 13px !important;
}
body.bone-ash .hook-btn-secondary {
  background: transparent !important;
  border: 2px solid #201c16 !important;
  color: #201c16 !important;
  font-family: 'Manrope', sans-serif !important;
}
body.bone-ash .hook-question-title {
  font-family: 'Fraunces', serif !important;
  color: #201c16 !important;
}
body.bone-ash .hook-question-sub {
  color: #7a7068 !important;
}
body.bone-ash .recognition-item {
  background: rgba(255,252,245,0.6) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  color: #201c16 !important;
  font-family: 'Libre Baskerville', serif !important;
}
body.bone-ash .recognition-item.selected {
  border-color: #9b4a2c !important;
  background: rgba(155,74,44,0.06) !important;
  box-shadow: 0 0 0 2px rgba(155,74,44,0.15) !important;
}
body.bone-ash .recognition-item.selected::after {
  color: #9b4a2c !important;
}

/* --- PRESS TICKER --- */
body.bone-ash .press-ticker-label {
  color: rgba(32,28,22,0.35) !important;
}
body.bone-ash .press-ticker-item img {
  filter: brightness(0) opacity(0.35) !important;
}
body.bone-ash .press-ticker-item img:hover {
  filter: brightness(0) opacity(0.6) !important;
}

/* --- HOOK MUSIC CONTROLS --- keep original dark-theme styling */

/* --- DAILY LOGIN BONUS --- */
body.bone-ash .login-bonus {
  background-color: rgba(255,252,245,0.95) !important;
  background-image: linear-gradient(135deg, rgba(155,74,44,0.08), rgba(196,75,46,0.08)) !important;
  border: 2px solid #9b4a2c !important;
}
body.bone-ash .login-title {
  color: #9b4a2c !important;
  text-shadow: none !important;
}
body.bone-ash .login-sub {
  color: #7a7068 !important;
}
body.bone-ash .login-bonus:hover .login-sub {
  color: #201c16 !important;
}

/* --- STREAK WARNING --- */
body.bone-ash .streak-warning {
  background-color: rgba(255,252,245,0.95) !important;
  background-image: linear-gradient(135deg, rgba(196,75,46,0.08), rgba(155,74,44,0.08)) !important;
  border: 2px solid #c44b2e !important;
}
body.bone-ash .streak-warning-text {
  color: #c44b2e !important;
}

/* --- CONTROL BUTTONS - larger hit targets --- */
body.bone-ash .ctrl-btn {
  min-width: 44px !important;
  min-height: 44px !important;
}

/* --- COIN REWARD --- */
body.bone-ash .coin-reward {
  background: rgba(255,252,245,0.8) !important;
  border: 2px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .coin-reward:hover {
  border-color: #9b4a2c !important;
  box-shadow: 0 4px 20px rgba(155,74,44,0.15) !important;
}
body.bone-ash .coin-reward.affordable {
  border-color: #2e6b5a !important;
  background: rgba(46,107,90,0.04) !important;
}
body.bone-ash .coin-reward.legendary {
  border-color: #9b4a2c !important;
  background: linear-gradient(135deg, rgba(155,74,44,0.06), rgba(196,75,46,0.04)) !important;
}

/* --- HOME SCREEN --- */
body.bone-ash .app {
  background: transparent !important;
}
body.bone-ash .header {
  background: transparent !important;
}
body.bone-ash .logo {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-family: 'Fraunces', serif !important;
  font-weight: 900 !important;
}
body.bone-ash .ctrl-btn {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  color: #7a7068 !important;
}
body.bone-ash .ctrl-btn.on,
body.bone-ash .ctrl-btn:hover {
  border-color: rgba(32,28,22,0.12) !important;
}
body.bone-ash .main-title {
  font-family: 'Fraunces', serif !important;
  font-weight: 800 !important;
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}
body.bone-ash .main-sub {
  color: #7a7068 !important;
  font-family: 'Libre Baskerville', serif !important;
}

/* --- HERO H1 (See Your Patterns) --- */
body.bone-ash .hero h1 {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-family: 'Fraunces', serif !important;
  font-weight: 800 !important;
}
body.bone-ash .hero p {
  color: #7a7068 !important;
  font-family: 'Libre Baskerville', serif !important;
}

/* --- CHALLENGE CARD --- */
body.bone-ash .challenge {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .challenge h2 {
  color: #201c16 !important;
  font-family: 'Fraunces', serif !important;
}
body.bone-ash .challenge p {
  color: #7a7068 !important;
}
body.bone-ash .player-count {
  color: #2e6b5a !important;
}
body.bone-ash .challenge-footer {
  color: #7a7068 !important;
}
body.bone-ash #dailyTimer {
  color: #9b4a2c !important;
}

/* --- GAME MODE CARDS --- */
body.bone-ash .mode {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .mode:hover {
  border-color: #9b4a2c !important;
  box-shadow: 0 4px 20px rgba(155,74,44,0.1) !important;
}
body.bone-ash .mode-name {
  color: #201c16 !important;
  font-family: 'Fraunces', serif !important;
  font-weight: 700 !important;
}
body.bone-ash .mode-desc {
  color: #7a7068 !important;
}

/* --- STATS / XP BAR --- */
body.bone-ash .xp-container {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .xp-fill {
  background: linear-gradient(90deg, #9b4a2c, #c44b2e) !important;
}
body.bone-ash .xp-level {
  color: #201c16 !important;
  font-family: 'Fraunces', serif !important;
}
body.bone-ash .xp-coins {
  background: rgba(155,74,44,0.08) !important;
  border: 1px solid rgba(155,74,44,0.15) !important;
  color: #9b4a2c !important;
}
body.bone-ash .xp-bar {
  background: rgba(32,28,22,0.06) !important;
}
body.bone-ash .xp-text {
  color: #7a7068 !important;
}
body.bone-ash .stat {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .stat-val {
  color: #9b4a2c !important;
  font-family: 'Fraunces', serif !important;
  font-weight: 800 !important;
}
body.bone-ash .stat-label {
  color: #7a7068 !important;
  font-family: 'Manrope', sans-serif !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  font-size: 10px !important;
}

/* --- PATTERN CARD --- */
body.bone-ash .pattern-card {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .pattern-card::before,
body.bone-ash .pattern-card::after {
  display: none !important;
}

/* --- LEVEL MAP --- */
body.bone-ash .section-title {
  color: #201c16 !important;
  font-family: 'Manrope', sans-serif !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 2px !important;
}
body.bone-ash .level-item {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .level-item.unlocked {
  border-color: rgba(155,74,44,0.15) !important;
}
body.bone-ash .level-name {
  color: #201c16 !important;
}
body.bone-ash .level-desc {
  color: #7a7068 !important;
}

/* --- GAME PLAY SCREEN --- */
body.bone-ash .game {
  background: #ede8df !important;
}
body.bone-ash .game-header {
  background: rgba(237,232,223,0.95) !important;
  backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .game-mode {
  color: #9b4a2c !important;
  font-family: 'Manrope', sans-serif !important;
}
body.bone-ash #gameProgress {
  color: #7a7068 !important;
}
body.bone-ash .quit {
  color: #7a7068 !important;
  border-color: rgba(32,28,22,0.08) !important;
}
body.bone-ash .timer {
  background: rgba(32,28,22,0.04) !important;
}
body.bone-ash .timer-fill {
  background: linear-gradient(90deg, #2e6b5a, #9b4a2c) !important;
}
body.bone-ash .scenario {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .scenario-cat {
  color: #9b4a2c !important;
  font-family: 'Manrope', sans-serif !important;
  font-weight: 600 !important;
}
body.bone-ash .scenario-text {
  color: #201c16 !important;
  font-family: 'Fraunces', serif !important;
  font-weight: 500 !important;
}
body.bone-ash .choice {
  background: rgba(255,252,245,0.8) !important;
  border: 2px solid rgba(32,28,22,0.06) !important;
  color: #201c16 !important;
  font-family: 'Libre Baskerville', serif !important;
}
body.bone-ash .choice:hover {
  border-color: rgba(155,74,44,0.2) !important;
  background: rgba(155,74,44,0.03) !important;
}
body.bone-ash .choice.selected {
  border-color: #9b4a2c !important;
  background: rgba(155,74,44,0.06) !important;
}

/* --- MODALS --- */
body.bone-ash .modal {
  background: rgba(237,232,223,0.92) !important;
  backdrop-filter: blur(12px) !important;
}
body.bone-ash .modal-content {
  background: linear-gradient(180deg, #fffcf5, #f5f0e8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  box-shadow: 0 20px 60px rgba(32,28,22,0.15) !important;
}
body.bone-ash .modal-content::before {
  background: linear-gradient(90deg, transparent, rgba(155,74,44,0.1), transparent) !important;
}
body.bone-ash .modal-title {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-family: 'Fraunces', serif !important;
}
body.bone-ash .modal-btn {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  color: #fff !important;
  font-family: 'Manrope', sans-serif !important;
}
body.bone-ash .modal-close-x {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
}

/* --- FEEDBACK MODAL --- */
body.bone-ash .feedback-box {
  background: rgba(155,74,44,0.04) !important;
  border: 1px solid rgba(155,74,44,0.1) !important;
}
body.bone-ash .feedback-label {
  color: #9b4a2c !important;
}
body.bone-ash .feedback-text {
  color: #201c16 !important;
  font-family: 'Libre Baskerville', serif !important;
}

/* --- RESULTS SCREEN --- */
body.bone-ash .results h2 {
  font-family: 'Fraunces', serif !important;
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}
body.bone-ash .score {
  color: #201c16 !important;
  font-family: 'Fraunces', serif !important;
}
body.bone-ash .result-msg {
  color: #7a7068 !important;
  font-family: 'Libre Baskerville', serif !important;
  font-style: italic !important;
}
body.bone-ash .insight-item {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  color: #201c16 !important;
  font-family: 'Libre Baskerville', serif !important;
}
body.bone-ash .results-btn {
  font-family: 'Manrope', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  font-size: 13px !important;
}
body.bone-ash #homeBtn {
  background: #9b4a2c !important;
}
body.bone-ash .share-platform-btn {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  color: #201c16 !important;
}

/* --- ACTION / FOOTER BUTTONS --- */
body.bone-ash .action-btn {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  color: #201c16 !important;
  font-family: 'Manrope', sans-serif !important;
}
body.bone-ash .transform-btn {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
}
body.bone-ash .footer-btn {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  color: #201c16 !important;
}
body.bone-ash .footer-btn.primary {
  border-color: #9b4a2c !important;
  color: #9b4a2c !important;
}

/* --- COACHING BRIDGE --- */
body.bone-ash .coaching-bridge {
  background: rgba(255,252,245,0.9) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  box-shadow: 0 4px 20px rgba(32,28,22,0.08) !important;
}
body.bone-ash .coaching-bridge::before {
  background: linear-gradient(90deg, #9b4a2c, #c44b2e, #6b5a4e) !important;
}
body.bone-ash .coaching-bridge::after {
  background: radial-gradient(circle, rgba(155,74,44,0.04), transparent 70%) !important;
}
body.bone-ash .bridge-btn.primary {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  color: #fff !important;
  box-shadow: 0 4px 20px rgba(155,74,44,0.25) !important;
}
body.bone-ash .bridge-btn.secondary {
  background: rgba(32,28,22,0.03) !important;
  color: #201c16 !important;
  border: 1px solid rgba(32,28,22,0.1) !important;
}

/* --- TRANSFORM BTN (Get Coaching / 1-on-1) --- */
body.bone-ash .transform-btn {
  background: rgba(255,252,245,0.9) !important;
  border: 2px solid #9b4a2c !important;
}
body.bone-ash .transform-btn::before {
  background: linear-gradient(90deg, #9b4a2c, #c44b2e, #6b5a4e) !important;
}
body.bone-ash .transform-btn:hover {
  background: rgba(155,74,44,0.08) !important;
  box-shadow: 0 8px 30px rgba(155,74,44,0.15) !important;
}
body.bone-ash .transform-btn-text {
  color: #9b4a2c !important;
  font-family: 'Manrope', sans-serif !important;
  font-weight: 700 !important;
}
body.bone-ash .transform-btn-sub {
  color: #7a7068 !important;
}
body.bone-ash .transform-btn-icon {
  color: #201c16 !important;
}

/* --- RESULTS SCREEN BUTTONS --- */
body.bone-ash .results-btn {
  font-family: 'Manrope', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  font-size: 13px !important;
  color: #fff !important;
}
body.bone-ash #homeBtn {
  background: #9b4a2c !important;
  color: #fff !important;
}
body.bone-ash #keepPlayingBtn {
  background: #2e6b5a !important;
  color: #fff !important;
}
body.bone-ash #endlessModeBtn {
  background: #6b5a4e !important;
  color: #fff !important;
}
body.bone-ash .results-actions button {
  box-shadow: 0 2px 12px rgba(32,28,22,0.1) !important;
}
body.bone-ash #resultsCoachingCta button {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  color: #fff !important;
  box-shadow: 0 2px 12px rgba(155,74,44,0.25) !important;
}
body.bone-ash #resultsCoachingCta p {
  color: #7a7068 !important;
}
body.bone-ash .share-platform-btn {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
  color: #201c16 !important;
}
body.bone-ash .share-platform-btn:hover {
  border-color: rgba(32,28,22,0.15) !important;
}

/* --- BUILT BY FOOTER TEXT --- */
body.bone-ash .hero + div p,
body.bone-ash p[style*="Built by"] {
  color: #7a7068 !important;
}

/* --- ALL INLINE GRADIENT BUTTONS --- */
body.bone-ash [style*="linear-gradient(135deg,var(--orange)"] {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  color: #fff !important;
}
body.bone-ash [style*="linear-gradient(135deg,var(--pink)"] {
  background: linear-gradient(135deg, #9b4a2c, #6b5a4e) !important;
  color: #fff !important;
}
body.bone-ash [style*="linear-gradient(135deg,var(--green)"] {
  background: #2e6b5a !important;
  color: #fff !important;
}
body.bone-ash [style*="linear-gradient(135deg,var(--purple)"] {
  background: #6b5a4e !important;
  color: #fff !important;
}
body.bone-ash [style*="linear-gradient(135deg,var(--blue)"] {
  background: #2e6b5a !important;
  color: #fff !important;
}

/* --- COLOR VAR OVERRIDES FOR INLINE STYLES --- */
body.bone-ash [style*="color:var(--gold)"] {
  color: #9b4a2c !important;
}
body.bone-ash [style*="color:var(--pink)"] {
  color: #9b4a2c !important;
}
body.bone-ash [style*="color:var(--muted)"] {
  color: #7a7068 !important;
}
body.bone-ash [style*="color:var(--text)"] {
  color: #201c16 !important;
}
body.bone-ash [style*="color:var(--orange)"] {
  color: #c44b2e !important;
}
body.bone-ash [style*="color:var(--purple)"] {
  color: #6b5a4e !important;
}
body.bone-ash [style*="color:var(--cyan)"] {
  color: #2e6b5a !important;
}
body.bone-ash [style*="color:var(--blue)"] {
  color: #2e6b5a !important;
}
body.bone-ash [style*="color:var(--green)"] {
  color: #2e6b5a !important;
}

/* --- BACKGROUND VAR OVERRIDES FOR INLINE STYLES --- */
body.bone-ash [style*="background:var(--card)"] {
  background: rgba(255,252,245,0.8) !important;
}
body.bone-ash [style*="border:1px solid var(--border)"],
body.bone-ash [style*="border-top:1px solid var(--border)"],
body.bone-ash [style*="border-bottom:1px solid var(--border)"] {
  border-color: rgba(32,28,22,0.06) !important;
}
body.bone-ash [style*="border-left:3px solid var(--pink)"] {
  border-left-color: #9b4a2c !important;
}

/* --- DAILY WISDOM / WELCOME --- */
body.bone-ash #welcomeMessage {
  color: #9b4a2c !important;
}
body.bone-ash #dailyWisdom {
  color: #7a7068 !important;
  background: rgba(155,74,44,0.04) !important;
  border-left-color: #9b4a2c !important;
}

/* --- INSIGHTS --- */
body.bone-ash .insights-stat {
  color: #2e6b5a !important;
}

/* --- FOUNDER MODAL --- */
body.bone-ash #founderModal .modal-content {
  background: linear-gradient(180deg, #fffcf5, #f5f0e8) !important;
}

/* --- COIN SHOP --- */
body.bone-ash .coin-shop-item {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .coin-price {
  color: #9b4a2c !important;
}

/* --- GENERAL TEXT CLEANUP --- */
body.bone-ash h1, body.bone-ash h2, body.bone-ash h3 {
  color: #201c16 !important;
}
body.bone-ash p {
  color: #201c16 !important;
}
body.bone-ash strong[style*="color:var(--pink)"] {
  color: #9b4a2c !important;
}

/* --- AGREEMENT/DECISION GAME SPECIFIC --- */
body.bone-ash .agree-btn {
  background: rgba(46,107,90,0.1) !important;
  border: 2px solid #2e6b5a !important;
  color: #2e6b5a !important;
}
body.bone-ash .disagree-btn {
  background: rgba(155,74,44,0.1) !important;
  border: 2px solid #9b4a2c !important;
  color: #9b4a2c !important;
}
body.bone-ash .agree-btn.selected {
  background: #2e6b5a !important;
  color: #fff !important;
}
body.bone-ash .disagree-btn.selected {
  background: #9b4a2c !important;
  color: #fff !important;
}

/* --- SLIDER / RANGE --- */
body.bone-ash input[type="range"] {
  accent-color: #9b4a2c !important;
}

/* --- PROGRESS DOTS --- */
body.bone-ash .h-dot {
  background: rgba(32,28,22,0.15) !important;
}
body.bone-ash .h-dot.active {
  background: #9b4a2c !important;
}

/* --- TOAST --- */
body.bone-ash .toast {
  background: #201c16 !important;
  color: #ede8df !important;
}

/* --- SCROLLBAR --- */
body.bone-ash ::-webkit-scrollbar-track {
  background: #ede8df !important;
}
body.bone-ash ::-webkit-scrollbar-thumb {
  background: rgba(32,28,22,0.15) !important;
}

/* --- ONBOARDING --- */
body.bone-ash .onboard {
  background: rgba(237,232,223,0.95) !important;
}
body.bone-ash .onboard-card {
  background: #fffcf5 !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .onboard-title {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-family: 'Fraunces', serif !important;
}
body.bone-ash .onboard-next,
body.bone-ash .onboard-start {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
}
body.bone-ash .onboard-skip {
  color: #7a7068 !important;
}

/* --- LANG TOGGLE --- */
body.bone-ash #langDropBtn {
  background: linear-gradient(135deg, #2e6b5a, #6b5a4e) !important;
  border-color: rgba(32,28,22,0.06) !important;
}
body.bone-ash #langDropdown {
  background: #fffcf5 !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .lang-opt {
  color: #201c16 !important;
}

/* --- MISC: remove dark-theme artifacts --- */
body.bone-ash .vignette {
  display: none !important;
}
body.bone-ash .app::before,
body.bone-ash .app::after {
  display: none !important;
}

/* --- MUSIC PICKER (theme-aware) --- */
body.bone-ash .music-picker {
  background: linear-gradient(180deg, rgba(255,252,245,0.98), rgba(242,237,230,0.98)) !important;
  border: 1px solid rgba(32,28,22,0.08) !important;
}
body.bone-ash .music-picker-title {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}
body.bone-ash .music-picker-btn {
  background: rgba(32,28,22,0.02) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .music-picker-btn .mp-name {
  color: #201c16 !important;
}
body.bone-ash .music-picker-btn .mp-sub {
  color: #7a7068 !important;
}
body.bone-ash .music-picker-close {
  color: #7a7068 !important;
}
body.bone-ash .music-picker-overlay {
  background: rgba(237,232,223,0.8) !important;
}

/* --- IOS / SHARE MODALS --- */
body.bone-ash .ios-modal,
body.bone-ash .share-card-modal {
  background: rgba(237,232,223,0.92) !important;
}
body.bone-ash .ios-add-card {
  background: #fffcf5 !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}

/* --- SHARE CARD (Pattern Result) --- */
body.bone-ash .share-card {
  background: linear-gradient(165deg, #fffcf5 0%, #f5f0e8 100%) !important;
  box-shadow: 0 8px 60px rgba(32,28,22,0.15), 0 0 0 1px rgba(32,28,22,0.06) !important;
}
body.bone-ash .share-card::before {
  background: radial-gradient(circle at 30% 30%, rgba(155,74,44,0.06) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(107,90,78,0.06) 0%, transparent 50%) !important;
}
body.bone-ash .share-card-logo {
  color: #7a7068 !important;
}
body.bone-ash .share-card-label {
  color: #9b4a2c !important;
  background: rgba(155,74,44,0.1) !important;
}
body.bone-ash .share-card-icon {
  filter: none !important;
}
body.bone-ash .share-card-name {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e, #6b5a4e) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}
body.bone-ash .share-card-tagline {
  color: #7a7068 !important;
}
body.bone-ash .share-card-stats {
  border-top-color: rgba(32,28,22,0.08) !important;
}
body.bone-ash .share-card-stat-value {
  color: #201c16 !important;
}
body.bone-ash .share-card-stat-label {
  color: #7a7068 !important;
}
body.bone-ash .share-card-cta {
  color: #7a7068 !important;
}
body.bone-ash .share-card-btn {
  color: #201c16 !important;
}
body.bone-ash .share-card-btn.primary {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
  color: #fff !important;
  box-shadow: 0 4px 20px rgba(155,74,44,0.25) !important;
}
body.bone-ash .share-card-btn.secondary {
  background: rgba(32,28,22,0.04) !important;
  border: 1px solid rgba(32,28,22,0.08) !important;
  color: #201c16 !important;
}

/* --- START PLAYING BUTTON (hook result) --- */
body.bone-ash .start-playing-btn {
  background: #9b4a2c !important;
  color: #fff !important;
  box-shadow: 0 4px 20px rgba(155,74,44,0.3) !important;
}
body.bone-ash .start-playing-btn::before {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent) !important;
}
body.bone-ash .start-playing-btn:hover {
  box-shadow: 0 6px 28px rgba(155,74,44,0.4) !important;
}

/* --- SHARE BUTTON (hook result) --- */
body.bone-ash .share-btn {
  background: rgba(255,252,245,0.9) !important;
  border: 2px solid #9b4a2c !important;
  color: #9b4a2c !important;
  box-shadow: 0 4px 20px rgba(155,74,44,0.1) !important;
}
body.bone-ash .share-btn::before {
  display: none !important;
}
body.bone-ash .share-btn:hover {
  background: rgba(155,74,44,0.06) !important;
  box-shadow: 0 8px 30px rgba(155,74,44,0.15) !important;
}

/* --- SHARE SECONDARY BUTTON --- */
body.bone-ash .share-btn-secondary {
  border-color: rgba(32,28,22,0.1) !important;
  color: #7a7068 !important;
}
body.bone-ash .share-btn-secondary:hover {
  border-color: #9b4a2c !important;
  color: #201c16 !important;
  background: rgba(155,74,44,0.04) !important;
}

/* --- HOOK RESULT SECTION (YOUR PATTERN area) --- */
body.bone-ash .hook-result-label {
  color: #9b4a2c !important;
}
body.bone-ash .hook-result-bars span {
  background: #9b4a2c !important;
}
body.bone-ash .hook-result-divider {
  background: rgba(32,28,22,0.08) !important;
}

/* --- HOOK BUTTONS (main CTA) --- */
body.bone-ash .hook-btn {
  background: #9b4a2c !important;
  color: #fff !important;
  box-shadow: 0 4px 24px rgba(155,74,44,0.3) !important;
}
body.bone-ash .hook-btn::before {
  display: none !important;
}
body.bone-ash .hook-btn:hover {
  box-shadow: 0 8px 36px rgba(155,74,44,0.4) !important;
}
body.bone-ash .hook-btn-secondary {
  border-color: #201c16 !important;
  color: #201c16 !important;
}
`;
document.head.appendChild(css);

// Auto-activate if loaded (index.html handles toggle logic)
document.body.classList.add('bone-ash');

console.log('[Light Theme v1.1] Loaded');
})();
