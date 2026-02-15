// Level Up Service Worker v7.0 - Network-first for updates
const CACHE_NAME = 'levelup-v7';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/scenarios.js',
  '/translations.js',
  '/scenario-translations-es.js',
  '/levelup-theme.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/level-up.mp3',
  '/intro.mp3',
  '/arthur.jpg',
  '/laurie.jpg',
  '/aurora.jpg',
  '/heghine.jpg',
  '/roger.jpg',
  '/Lily_Bot.jpg',
  '/og-game.png',
  '/ap.svg',
  '/google.svg',
  '/yahoo.svg',
  '/bloomberg.svg'
];
// Install - cache assets and take over immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
      .catch(err => console.log('Cache failed:', err))
  );
});
// Activate - delete ALL old caches and claim clients immediately
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
// Fetch - NETWORK FIRST for HTML, cache-first for assets
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;
  
  const url = new URL(event.request.url);
  
  // Network-first for HTML (always get latest)
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the fresh response
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          // Offline - serve from cache
          return caches.match(event.request) || caches.match('/index.html');
        })
    );
    return;
  }
  
  // Network-first for JS too (always get latest game content + translations)
  if (url.pathname.endsWith('.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // Cache-first for other assets (images, audio, fonts)
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) return cachedResponse;
        
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200) return response;
          
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        });
      })
      .catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      })
  );
});
// Push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Your streak is waiting!',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [100, 50, 100]
  };
  event.waitUntil(self.registration.showNotification('Level Up 🔥', options));
});
// Notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
