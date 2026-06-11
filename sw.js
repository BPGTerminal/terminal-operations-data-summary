// BPGT Terminal Operations Data Summary — Service Worker v1.0
const CACHE = 'bpgt-summary-v1';
const ASSETS = [
  '/terminal-operations-data-summary/BPGT-Daily-Summary.html',
  '/terminal-operations-data-summary/manifest.json',
  '/terminal-operations-data-summary/bpgt-logo.png',
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE; })
            .map(function(k){ return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.url.includes('docs.google.com') || e.request.url.includes('script.google.com')) {
    e.respondWith(fetch(e.request).catch(function(){
      return new Response('{"error":"offline"}', {headers:{'Content-Type':'application/json'}});
    }));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(res) {
        return caches.open(CACHE).then(function(cache) {
          cache.put(e.request, res.clone());
          return res;
        });
      });
    })
  );
});
