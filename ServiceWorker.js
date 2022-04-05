const CACHE_NAME = 'offline-3';
const OFFLINE_URL = '/errorPages/offline.html';
const OFFLINE_URL_IMG = '/errorPages/offline.PNG';
const ERROR404_URL_IMG = '/errorPages/offline.PNG';

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
  
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // console.log('[Service Worker] Fetch', event.request.url);
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL, OFFLINE_URL_IMG);
        return cachedResponse;
      }
    })());
  }
});

self.addEventListener('fetch', function(event) {
  // console.log('[Service Worker] Fetch', event.request.url);
  if (event.request.error === 404) {
    event.respondWith((async () => {
      console.log('[Service Worker] Fetch', event.request.error);
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(OFFLINE_URL);
      return cachedResponse;
    })());
  }
});

// self.addEventListener('fetch', function (event) {
//   return new Promise(function(resolve, reject) {
//     var request = new XMLHttpRequest();
//     request.open('GET', ERROR404_URL_IMG);
//     request.responseType = 'blob';

//     request.onload = function() {
//       if (request.status == 404) {
//         resolve(request.response);
//       } else {
//         reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
//       }
//     };

//     request.onerror = function() {
//       reject(Error('There was a network error.'));
//     };

//     request.send();
//   });
// });
