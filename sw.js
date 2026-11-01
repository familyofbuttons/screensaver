// Basic Service Worker for PWA installability
const CACHE_NAME = 'cozyla-photo-hub-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Serves dynamic/cached content
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
