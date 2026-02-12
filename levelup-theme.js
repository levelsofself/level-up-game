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

/* --- HOOK MUSIC CONTROLS --- */
body.bone-ash .hook-music-btn {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.08) !important;
  color: #7a7068 !important;
}
body.bone-ash .hook-music-btn.on {
  background: #9b4a2c !important;
  color: #fff !important;
  border: none !important;
}
body.bone-ash .hook-music-btn.spotify {
  color: #1DB954 !important;
}
body.bone-ash .hook-music-btn.apple {
  color: #FC3C44 !important;
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
}
body.bone-ash .coaching-bridge::before {
  background: linear-gradient(90deg, #9b4a2c, #c44b2e, #6b5a4e) !important;
}
body.bone-ash .bridge-btn.primary {
  background: linear-gradient(135deg, #9b4a2c, #c44b2e) !important;
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
`;
document.head.appendChild(css);

// Auto-activate if loaded (index.html handles toggle logic)
document.body.classList.add('bone-ash');

console.log('[Light Theme v1.1] Loaded');
})();
