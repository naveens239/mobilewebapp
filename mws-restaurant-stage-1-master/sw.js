importScripts('/cache-polyfill.js');
//adding the code to cache the images,js, css,html
self.addEventListener('install', function(event) {
 event.waitUntil(
   caches.open('mws-restaurant-stage-1-master').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/css/styles.css',
       '/js/main.js',
       '/js/dbhelper.js',
       '/js/restaurant_info.js',
       '/data/restaurants.json',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg',
       'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
       'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'       
     ]);
   })
 );
});
//code that fetches data from cache when offline
self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

