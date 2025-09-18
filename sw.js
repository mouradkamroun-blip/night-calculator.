const CACHE_NAME = "night-calculator-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  // ضع هنا أي ملفات CSS أو JS أو صور أخرى إن أردت تخزينها
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
