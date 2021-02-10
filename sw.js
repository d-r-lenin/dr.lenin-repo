
const cacheName = 'catch-1';
const cacheItems = [
 '/',
 'index.html',
 'style.css',
 'script.js'
];

self.addEventListener('install',event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => { 
       return cache.addAll(cacheItems);
    })
  );
})
