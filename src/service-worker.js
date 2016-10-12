/*eslint-disable strict */
/* global self, importScripts, URL, caches, fetch, registration, clients, location */

// Import version numbers
importScripts('service-worker-cache-version.js');

// Import cache polyfill
importScripts('service-worker-cache-polyfill.js');

var staticCacheName = `cache-static-v${cacheVersion}`;
var imageCacheName = `cache-img-v${cacheVersion}`;
var apiCacheName = `cache-api-v${cacheVersion}`;

var staticFiles = [
  '/',
  '/offline.jpg'
];

self.addEventListener('install', function(event) {

    console.log('Installing ServiceWorker', event);
});

self.addEventListener('activate', function(event) {

    console.log('activate ServiceWorker', event);

    event.waitUntil(
        caches.keys().then(function(keyList) {

            return Promise.all(keyList.map(function(key) {
                
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(event) {

    let requestURL = new URL(event.request.url);
    let hostname = requestURL.hostname;
    let href = requestURL.href;   

    if (hostname === 'api.spotify.com') {

         event.respondWith(networkFallbackOnCache(event.request, apiCacheName));
    }

    if (hostname === 'localhost') {

        event.respondWith(networkFallbackOnCache(event.request, staticCacheName));
    }

    if (hostname === 'i.scdn.co' && href.indexOf('image') >= 0) {

        event.respondWith(networkFallbackOnCache(event.request, imageCacheName));
    }

    console.log('Trying to fetch: ', requestURL);
});

/**
 * Send request -> save in cache -> reply with response
 * If network fail => reply with cache value
 * @param {Request} request   request from event
 * @param {String} cacheName cache name
 * @return {Promise}
 */
function networkFallbackOnCache(request, cacheName) {
    return caches.open(cacheName).then(function(cache) {

        return cache.match(request.clone()).then(function(response) {

            return fetch(request.clone())
                .then(function(networkResponse) {

                    // Save in cache
                    cache.put(request, networkResponse.clone());
                    return networkResponse;
                })
                .catch(function() {

                    // Handle cache saving error
                    return response;
                });
        });
    });
}

/**
 * Check if we have the request in cache, if we do: response, else make a network request and update the cache.
 * @param  {Request} request
 * @param  {String} cacheName
 * @return {Promise}
 */
function cacheFallbackOnNetwork(request, cacheName) {

    return caches.open(cacheName).then(function(cache) {

        return cache.match(request.clone()).then(function(response) {

            let fetchPromise = fetch(request.clone()).then(function(networkResponse) {

                // Save the result in cache
                cache.put(request, networkResponse.clone());
                    return networkResponse;
                });

                // Return the network request 
                return response || fetchPromise;
        });
    });
}