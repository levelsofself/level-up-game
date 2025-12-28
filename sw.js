// Level Up Service Worker v4.0
const CACHE_NAME = 'levelup-v4';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/level-up.mp3',
  '/arthur.jpg',
  '/og-game.png',
  '/mirror-level1-individual.js',
  '/mirror-level2-family.js',
  '/mirror-level3-groups.js',
  '/mirror-level4-community.js',
  '/mirror-level5-society.js',
  '/mirror-level6-world.js',
  '/mirror-level7-generations.js',
  '/decision-level1-individual.js',
  '/decision-level2-family.js',
  '/decision-level3-groups.js',
  '/decision-level4-community.js',
  '/decision-level5-society.js',
  '/decision-level6-world.js',
  '/decision-level7-generations.js',
  '/agreement_game.js',
  '/worldwide_challenge.js',
  '/enhanced-deep-insight.js',
  '/pattern-analysis.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
];

// Install - cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.log('Cache failed:', err))
  );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }
        
        // Fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone and cache the response
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Push notifications for streaks
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Your streak is waiting! Don\'t lose your progress.',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      { action: 'play', title: '🎮 Play Now' },
      { action: 'close', title: 'Later' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Level Up 🔥', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'play' || !event.action) {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
