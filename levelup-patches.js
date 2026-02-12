/* ═══════════════════════════════════════════════════════════
   LEVEL UP — PATCHES v1.0
   Drop this file AFTER index.html loads (before </body>)
   or add via <script src="levelup-patches.js"></script>
   
   Contains:
   1. Black box fix (pattern card display bug)
   2. Music source picker (Apple Music / Spotify / Game Music)
   3. Bone & Ash theme (full game reskin toggle)
   ═══════════════════════════════════════════════════════════ */

(function(){
'use strict';

/* ═══════════════════════════════════════
   1. BLACK BOX FIX
   Bug: updatePatternCard() sets style.display='block'
   then if analyzePatterns() returns null, removes .show
   but doesn't reset display back to none.
   Result: empty purple-bordered card visible = "black box"
   ═══════════════════════════════════════ */
(function fixPatternCard(){
  // Override updatePatternCard to always sync display with show class
  var origUpdate = window.updatePatternCard;
  if(typeof origUpdate === 'function'){
    window.updatePatternCard = function(){
      origUpdate.apply(this, arguments);
      var card = document.getElementById('patternCard');
      if(card && !card.classList.contains('show')){
        card.style.display = 'none';
      }
    };
  }
  // Also fix it right now in case it's already showing
  var card = document.getElementById('patternCard');
  if(card && !card.classList.contains('show')){
    card.style.display = 'none';
  }
})();


/* ═══════════════════════════════════════
   2. MUSIC SOURCE PICKER
   When music is ON and user taps music button: turns OFF
   When music is OFF and user taps music button: shows picker
   Options: Game Music, Apple Music, Spotify
   ═══════════════════════════════════════ */
(function upgradeMusicButton(){

  // Inject the picker popup CSS + HTML
  var pickerCSS = document.createElement('style');
  pickerCSS.textContent = [
    '.music-picker-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9998;display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:mpFadeIn .25s ease}',
    '.music-picker-overlay.show{display:flex}',
    '@keyframes mpFadeIn{from{opacity:0}to{opacity:1}}',
    '.music-picker{background:linear-gradient(180deg,rgba(40,35,60,0.98),rgba(25,20,40,0.98));border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:24px;max-width:300px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.5);animation:mpSlideUp .3s cubic-bezier(.16,1,.3,1)}',
    '@keyframes mpSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}',
    '.music-picker-title{font-size:16px;font-weight:800;text-align:center;margin-bottom:16px;background:linear-gradient(135deg,#ff6b35,#ff3cac);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}',
    '.music-picker-btn{display:flex;align-items:center;gap:12px;width:100%;padding:14px 16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;color:#fff;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;margin-bottom:8px}',
    '.music-picker-btn:hover{background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.12);transform:translateY(-1px)}',
    '.music-picker-btn:active{transform:scale(0.98)}',
    '.music-picker-btn .mp-icon{font-size:24px;width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}',
    '.music-picker-btn .mp-icon.game{background:linear-gradient(135deg,#ff6b35,#ff3cac)}',
    '.music-picker-btn .mp-icon.spotify{background:#1DB954}',
    '.music-picker-btn .mp-icon.apple{background:#FC3C44}',
    '.music-picker-btn .mp-sub{font-size:11px;color:rgba(255,255,255,0.4);font-weight:400;margin-top:2px}',
    '.music-picker-close{display:block;width:100%;padding:12px;background:none;border:1px solid rgba(255,255,255,0.08);border-radius:10px;color:rgba(255,255,255,0.4);font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;margin-top:4px}',
    '.music-picker-close:hover{color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.15)}',
    /* Bone & Ash theme overrides for picker */
    'body.bone-ash .music-picker{background:linear-gradient(180deg,rgba(255,252,245,0.98),rgba(237,232,223,0.98));border-color:rgba(32,28,22,0.08)}',
    'body.bone-ash .music-picker-title{background:linear-gradient(135deg,#9b4a2c,#c44b2e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}',
    'body.bone-ash .music-picker-btn{background:rgba(32,28,22,0.03);border-color:rgba(32,28,22,0.06);color:#201c16}',
    'body.bone-ash .music-picker-btn:hover{background:rgba(32,28,22,0.06)}',
    'body.bone-ash .music-picker-btn .mp-sub{color:rgba(32,28,22,0.4)}',
    'body.bone-ash .music-picker-close{border-color:rgba(32,28,22,0.08);color:rgba(32,28,22,0.4)}',
  ].join('\n');
  document.head.appendChild(pickerCSS);

  // Create picker HTML
  var overlay = document.createElement('div');
  overlay.className = 'music-picker-overlay';
  overlay.id = 'musicPickerOverlay';
  overlay.innerHTML = [
    '<div class="music-picker">',
    '<div class="music-picker-title">Choose Your Music</div>',
    '<button class="music-picker-btn" id="mpGame"><span class="mp-icon game">🎵</span><div><div>Game Music</div><div class="mp-sub">The Palyans — original soundtrack</div></div></button>',
    '<button class="music-picker-btn" id="mpSpotify"><span class="mp-icon spotify"><svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg></span><div><div>Spotify</div><div class="mp-sub">Listen on Spotify</div></div></button>',
    '<button class="music-picker-btn" id="mpApple"><span class="mp-icon apple"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.455-2.105-1.392-.223-.657-.098-1.272.344-1.81.38-.463.9-.713 1.486-.81.543-.09 1.09-.14 1.635-.212.207-.03.4-.09.555-.232.168-.155.212-.357.212-.57v-5.478c0-.098-.027-.152-.127-.172-.376-.074-.75-.154-1.124-.232l-3.89-.804c-.076-.016-.155-.026-.235-.026-.096 0-.126.036-.127.132-.003.25 0 .5 0 .75v8.133c0 .504-.065.998-.283 1.46-.306.65-.822 1.04-1.524 1.203-.34.08-.686.12-1.034.13-1.022.025-1.907-.53-2.18-1.526-.165-.603-.082-1.177.305-1.69.376-.498.888-.763 1.47-.87.508-.094 1.022-.144 1.533-.217.32-.046.617-.14.835-.393.146-.17.2-.373.2-.59V6.266c0-.305.048-.39.34-.453l5.727-1.185c.206-.043.413-.085.622-.1.186-.014.234.028.234.215v5.37z"/></svg></span><div><div>Apple Music</div><div class="mp-sub">Listen on Apple Music</div></div></button>',
    '<button class="music-picker-close" id="mpClose">Cancel</button>',
    '</div>',
  ].join('');
  document.body.appendChild(overlay);

  // Close on overlay click
  overlay.addEventListener('click', function(e){
    if(e.target === overlay) closePicker();
  });
  document.getElementById('mpClose').addEventListener('click', closePicker);

  function closePicker(){
    overlay.classList.remove('show');
  }

  function showPicker(){
    overlay.classList.add('show');
  }

  // Game music button
  document.getElementById('mpGame').addEventListener('click', function(){
    closePicker();
    var introAudio = document.getElementById('introMusic');
    var isInHook = !document.getElementById('hook').classList.contains('hidden');
    var trackToPlay = isInHook ? introAudio : (window.music || introAudio);
    if(trackToPlay){
      trackToPlay.play().then(function(){
        window.musicOn = true;
        syncMusicBtns(true);
        if(typeof showToast === 'function') showToast('🎵 Game music on');
      }).catch(function(){});
    }
  });

  // Spotify button
  document.getElementById('mpSpotify').addEventListener('click', function(){
    closePicker();
    // Pause game music
    pauseAllMusic();
    if(typeof openSpotify === 'function'){
      openSpotify();
    } else {
      window.open('https://open.spotify.com/artist/4sMgiKzENS7YxMCgc9iSHA', '_blank');
    }
  });

  // Apple Music button
  document.getElementById('mpApple').addEventListener('click', function(){
    closePicker();
    pauseAllMusic();
    if(typeof openAppleMusic === 'function'){
      openAppleMusic();
    } else {
      window.open('https://music.apple.com/us/artist/the-palyans/1746579250', '_blank');
    }
  });

  function pauseAllMusic(){
    var introAudio = document.getElementById('introMusic');
    if(introAudio) introAudio.pause();
    if(window.music) window.music.pause();
    window.musicOn = false;
    if(typeof hookMusicPlaying !== 'undefined') window.hookMusicPlaying = false;
    syncMusicBtns(false);
  }

  function syncMusicBtns(on){
    var ids = ['musicBtn','gameMusicToggle','hookMusicToggle'];
    ids.forEach(function(id){
      var btn = document.getElementById(id);
      if(!btn) return;
      if(on){
        btn.classList.add('on');
        btn.classList.remove('off');
      } else {
        btn.classList.remove('on');
        btn.classList.add('off');
      }
    });
  }

  // Override the main toggleMusic to use picker when turning ON
  var origToggle = window.toggleMusic;
  window.toggleMusic = function(){
    if(window.musicOn){
      // Currently playing - just turn off
      var introAudio = document.getElementById('introMusic');
      if(introAudio) introAudio.pause();
      if(window.music) window.music.pause();
      window.musicOn = false;
      syncMusicBtns(false);
      if(typeof showToast === 'function') showToast('Music off');
    } else {
      // Currently off - show picker
      showPicker();
    }
  };

  // Override hook music toggle too
  window.toggleHookMusic = function(){
    if(window.hookMusicPlaying || window.musicOn){
      // Turn off
      var introAudio = document.getElementById('introMusic');
      if(introAudio) introAudio.pause();
      if(window.music) window.music.pause();
      window.hookMusicPlaying = false;
      window.musicOn = false;
      syncMusicBtns(false);
      if(typeof showToast === 'function') showToast('Music off');
    } else {
      // Show picker
      showPicker();
    }
  };

})();


/* ═══════════════════════════════════════
   3. BONE & ASH THEME
   Full game reskin. Toggle via body.bone-ash class.
   All CSS uses body.bone-ash prefix so it only
   applies when the class is present.
   ═══════════════════════════════════════ */
(function injectBoneAshTheme(){

  // Load fonts
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,800;0,9..144,900;1,9..144,300;1,9..144,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600;800&family=Instrument+Serif:ital@0;1&display=swap';
  document.head.appendChild(link);

  var css = document.createElement('style');
  css.id = 'bone-ash-theme';
  css.textContent = `
/* ═══════════════════════════════════════
   BONE & ASH — Full Game Override
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

/* --- CHALLENGE CARD --- */
body.bone-ash .challenge-card,
body.bone-ash .daily-challenge {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .challenge-title {
  color: #201c16 !important;
  font-family: 'Fraunces', serif !important;
}
body.bone-ash .challenge-info {
  color: #7a7068 !important;
}
body.bone-ash .challenge-trending {
  color: #2e6b5a !important;
}
body.bone-ash .challenge-timer {
  color: #9b4a2c !important;
}

/* --- GAME MODE CARDS --- */
body.bone-ash .mode-card {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .mode-card:hover,
body.bone-ash .mode-card.active {
  border-color: #9b4a2c !important;
  box-shadow: 0 4px 20px rgba(155,74,44,0.1) !important;
}
body.bone-ash .mode-card.active::after {
  background: transparent !important;
}
body.bone-ash .mode-icon {
  color: #201c16 !important;
}
body.bone-ash .mode-name {
  color: #201c16 !important;
  font-family: 'Fraunces', serif !important;
  font-weight: 700 !important;
}
body.bone-ash .mode-desc {
  color: #7a7068 !important;
}
body.bone-ash .mode-locked {
  color: #7a7068 !important;
}
body.bone-ash .start-badge {
  background: #9b4a2c !important;
  color: #fff !important;
  font-family: 'Manrope', sans-serif !important;
  font-weight: 700 !important;
}

/* --- STATS / XP BAR --- */
body.bone-ash .xp-container,
body.bone-ash .level-bar {
  background: rgba(255,252,245,0.8) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}
body.bone-ash .xp-fill,
body.bone-ash .level-fill {
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
body.bone-ash .pattern-archetype {
  font-family: 'Fraunces', serif !important;
  color: #201c16 !important;
}
body.bone-ash .pattern-edge {
  color: #7a7068 !important;
  font-family: 'Libre Baskerville', serif !important;
}
body.bone-ash .pattern-label {
  color: #9b4a2c !important;
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
body.bone-ash .level-item:hover {
  border-color: rgba(32,28,22,0.12) !important;
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
body.bone-ash .music-toggle {
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
body.bone-ash .action-btn.breakthrough {
  border-color: rgba(155,74,44,0.15) !important;
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

/* --- COIN DISPLAY --- */
body.bone-ash .coin-reward {
  background: rgba(255,252,245,0.95) !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
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

/* --- IOS MODAL --- */
body.bone-ash .ios-modal {
  background: rgba(237,232,223,0.92) !important;
}
body.bone-ash .ios-add-card {
  background: #fffcf5 !important;
  border: 1px solid rgba(32,28,22,0.06) !important;
}

/* --- SHARE CARD MODAL --- */
body.bone-ash .share-card-modal {
  background: rgba(237,232,223,0.92) !important;
}
`;
  document.head.appendChild(css);

  // Create theme toggle button (floating)
  var toggle = document.createElement('button');
  toggle.id = 'themeToggleBtn';
  toggle.innerHTML = '🦴';
  toggle.title = 'Toggle Bone & Ash theme';
  toggle.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;width:44px;height:44px;border-radius:50%;border:2px solid rgba(155,74,44,0.3);background:rgba(237,232,223,0.95);color:#9b4a2c;font-size:20px;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.15);transition:all 0.3s;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)';
  document.body.appendChild(toggle);

  // Check localStorage for theme preference
  var saved = localStorage.getItem('levelup_theme');
  if(saved === 'bone-ash'){
    document.body.classList.add('bone-ash');
    toggle.innerHTML = '🌙';
    toggle.style.background = 'rgba(25,20,40,0.95)';
    toggle.style.color = '#ff3cac';
    toggle.style.borderColor = 'rgba(255,60,172,0.3)';
  }

  toggle.addEventListener('click', function(){
    if(document.body.classList.contains('bone-ash')){
      // Switch to dark (original)
      document.body.classList.remove('bone-ash');
      toggle.innerHTML = '🦴';
      toggle.style.background = 'rgba(237,232,223,0.95)';
      toggle.style.color = '#9b4a2c';
      toggle.style.borderColor = 'rgba(155,74,44,0.3)';
      localStorage.setItem('levelup_theme', 'dark');
      if(typeof showToast === 'function') showToast('🌙 Dark theme');
    } else {
      // Switch to Bone & Ash
      document.body.classList.add('bone-ash');
      toggle.innerHTML = '🌙';
      toggle.style.background = 'rgba(25,20,40,0.95)';
      toggle.style.color = '#ff3cac';
      toggle.style.borderColor = 'rgba(255,60,172,0.3)';
      localStorage.setItem('levelup_theme', 'bone-ash');
      if(typeof showToast === 'function') showToast('🦴 Bone & Ash');
    }
  });

})();

console.log('[Level Up Patches v1.0] Loaded: black box fix, music picker, Bone & Ash theme');

})();
