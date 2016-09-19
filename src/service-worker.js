/*eslint-disable strict */
/* global self, importScripts, URL, caches, fetch, registration, clients, location */

// Import cache polyfill
importScripts('service-worker-cache-polyfill.js');

var staticCacheName = 'cache-static-v2';
var gifCacheName = 'cache-gif-v1';
var apiCacheName = 'cache-api-v1';
var staticFiles = [
  '/',
  '/offline.jpg'
];

self.addEventListener('install', function(event) {

    console.log('Installing ServiceWorker', event);
});

self.addEventListener('activate', function(event) {

    console.log('activate ServiceWorker', event);
});

self.addEventListener('fetch', function(event) {

    var requestURL = new URL(event.request.url);
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
                    cache.put(request, networkResponse.clone());
                    return networkResponse;
                })
                .catch(function() {
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
            var fetchPromise = fetch(request.clone()).then(function(networkResponse) {
                cache.put(request, networkResponse.clone());
                    return networkResponse;
                });
            return response || fetchPromise;
        });
    });
}