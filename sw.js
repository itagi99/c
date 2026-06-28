self.addEventListener('install', (e) => {
  self.skipWaiting();
  console.log('Service Worker installed');
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => {
    return new Response('Offline - Please check your connection');
  }));
});
