/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["app/assets/img/close.png","124617b2ac225b4f44dd317a24d854fc"],["app/assets/img/curti.png","140ace6393fbf30460256caadd338f95"],["app/assets/img/favorite-.png","b57c728215647d516ca6d9e59120fe0f"],["app/assets/img/favorite.png","17320782b6e9ed6bc78ca50dc67acaf0"],["app/assets/img/favorite_.png","bdb0db52ff4543a9f01e9142636d3e93"],["app/assets/img/logo-viva-decora.png","dd617a86780c8eef8d11dd3fdc5e5374"],["app/assets/img/menu-lateral.png","afc0ee141604ca0aab3dc41f26494fad"],["app/assets/img/n-curti.png","0adad139cc1b7f71e2bfd34837a250cb"],["app/assets/img/video-camera-vazio.png","1b8d6e5f967b725286ef8d7e51089449"],["app/assets/partial/directive/menu.html","d63ab272d1d8184eaef30ea885905826"],["app/assets/script/Bootstrap.js","fe5f48d3479a43d637942b25858a954e"],["app/assets/script/Configuration.js","1c8007bb98b7b9e10939d053f5222d1f"],["app/assets/script/cache.js","812b7e73d2a02ab2fce5a5e27cffed29"],["app/assets/style/animate.css","8a17503578f663b687c38e608539f1f0"],["app/assets/style/app.css","f99e703bdbe0cddd70a1bf63c861e775"],["app/assets/style/favorite.css","2869a37a7ee0ddd0b946590c40a25592"],["app/assets/style/film-detail.css","a0c3a6a4424a078b80838652b5b7b4ec"],["app/assets/style/film.css","ca824c6f95f966db1953c214a674ba29"],["app/assets/style/font.css","f25d14ec9baa4cdef4a839f403959750"],["app/assets/style/icon.css","92d4276aa4a06cf5f33dcd9accf7c885"],["app/assets/style/main.css","eb89cd73017122de2f5c0ce926ce3ca4"],["app/assets/style/material.css","4081e15619d825ce7c31ef358f18a291"],["app/assets/style/menu.css","7fd9123559307cb4e1e621ace7e514cb"],["app/assets/style/mixin.css","54c668b376497d6cccb286c714d1718f"],["app/assets/style/no-results.css","00b99576a7ad1a2c74e7eb57ff553ca5"],["app/assets/style/variable.css","9d85ed9fe31b28db1977554fb42b6b25"],["app/constant/tmdb.constant.js","6d91b12aadf2836c710cf268f936f4ad"],["app/controller/app.controller.js","d2928f0d533fc24e213bface656be4f7"],["app/controller/film/detail.controller.js","9f623898edf30776d63b333315a0e784"],["app/controller/footer.controller.js","2269cea23408417250afb58f83434b20"],["app/controller/header.controller.js","ad00fc2c7014a3a0a33e17a6b9b46e35"],["app/controller/like.controller.js","4ffb7a80013b113f01e4fef50c0c6031"],["app/controller/main.controller.js","6049da21d8ce83155b82ccdec1587551"],["app/controller/not-like.controller.js","e2e8f4e0ffb05654c7f1a59044797e87"],["app/directive/favorite.directive.js","2ee332f2ad54748089e03c9258707d42"],["app/directive/film-detail.directive.js","b6c0cfd7a3a15d55c14be9e178fa00bf"],["app/directive/film-rating.directive.js","712e158585e8408b6e0b7ac0a608ef64"],["app/directive/film.directive.js","e86affba5a0a8f326f207a8dc84a0ed2"],["app/directive/menu.directive.js","8e01e80f8af3ed3541862d52b2b47cf6"],["app/directive/no-results.directive.js","b34d83875ad8d9fccf94bdbe1266c16a"],["app/factory/film-backdrop.factory.js","5dfa5590cbc3878920fa6786981aa98c"],["app/factory/film-saved.factory.js","0f1d1ef241dc2c8692d177239ac1727a"],["app/factory/genre-saved.factory.js","c0a38289d462a7435a9cef486a89f207"],["app/module/app.module.js","b8b657b340c90188ce08799b8f23f381"],["app/partial/directive/favorite.html","d688bb863796b8e431eea98174474214"],["app/partial/directive/film-detail.html","fa3c4adb0147152ec886cb353ea268d2"],["app/partial/directive/film-rating.html","2daff03f4976281e79dfb88fe642e1b2"],["app/partial/directive/film.html","7ac34f37bb21faaae554f0a910b3e8c7"],["app/partial/directive/no-results.html","98e023e5219423e76c4ebabab2e6a8c4"],["app/partial/film/detail.html","5c713a8873310c2d4faa6e4b4ff3131b"],["app/partial/layout/app.html","376316ea11828f24cddf97cfbd149d75"],["app/partial/layout/footer.html","d41d8cd98f00b204e9800998ecf8427e"],["app/partial/layout/header.html","31d3ace5bb472774dd17d4529183ba4a"],["app/partial/layout/main.html","8f6d8f3618dd7fe774c9b289312c5954"],["app/partial/like/index.html","6bdde4ab375911c437ec9c5b9441da03"],["app/resource/tmdb.resource.js","b9a075ed0058b843b09dc8c4d8c7fda7"],["app/state/app.state.js","5061037558446e1523a6ceac4a20a683"],["app/state/internal.state.js","044fc356b46ad03abf9446223a2bb341"],["app/state/like.state.js","51c790ea287103cbe59622efc0aa2719"],["app/state/not-like.state.js","5828a5a095ffad73411c62c04408846a"],["index.html","3d44735228537692b9975b98c4d4b628"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = 'index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




