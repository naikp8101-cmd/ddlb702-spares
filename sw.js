const CACHE_NAME = 'ddlb702-v3';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['./', './index.html', './manifest.json'])));
});
self.addEventListener('fetch', e => {
  if (e.request.url.includes('script.google.com')) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

