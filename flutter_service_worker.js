'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c263a8f0ae06cfd4a7399cc3accbb9cb",
"assets/AssetManifest.bin.json": "5a953cb372392ce8486732bfeb71dc09",
"assets/AssetManifest.json": "f87bf338617887a5b3b18a9533e4104c",
"assets/assets/images/b3.jpeg": "62d6dd24c6fc5c54983ab01f322949a9",
"assets/assets/images/ba.jpeg": "0d0785573bcb14cfe88d548e716e8a54",
"assets/assets/images/bannerr.jpeg": "051d2e8f60ed3f63e53ea88876c1e011",
"assets/assets/images/chanachur.jpg": "6ef1f2fe735a0abec9180677e13f17d5",
"assets/assets/images/chop.jpg": "7c521c3133737ea8448399cc2f9efdfb",
"assets/assets/images/kachori.jpg": "67b318f2518282fc656883e9edc0813d",
"assets/assets/images/kajukatli.jpg": "e5d4a35dd21850e1b95958852c252182",
"assets/assets/images/misti_doi.jpg": "7739049aa7227d85f2b75383e856af05",
"assets/assets/images/nimki.jpg": "de29b39ca39861f606d65e15f8010523",
"assets/assets/images/pan_kaju.jpeg": "6100f9ceb26a3a58928ad929d38c1bf2",
"assets/assets/images/rasmalai.jpg": "6f65b07f61fb232168b5b40e9c060d61",
"assets/assets/images/rosogolla.jpg": "9d0a2e9a33e6d90d975193a840135647",
"assets/assets/images/s1.jpeg": "62d6dd24c6fc5c54983ab01f322949a9",
"assets/assets/images/s2.jpeg": "27ecf1449ba234bb197a51b385a4a028",
"assets/assets/images/s3.jpeg": "dc36aeb9854a8f80e772f5e418215b41",
"assets/assets/images/s4.jpeg": "7e8ccd2803443e2ff09d719170877860",
"assets/assets/images/s5.jpeg": "2bd4eafb9e86650814652ded2fed7e7d",
"assets/assets/images/s6.jpeg": "770fce327a89855155d0da8e6c8be2de",
"assets/assets/images/s7.jpeg": "06bb30146e403f43486bc999b87c73d4",
"assets/assets/images/samosa.jpg": "65dfc0d71bfbc7e505db86e6dc6ad1d2",
"assets/assets/images/sandesh.jpeg": "fac63efda500d975a902d924b852a97f",
"assets/assets/images/sattu.jpg": "1a65ceb8e0733b131a33c6393975bbbe",
"assets/assets/images/sev.jpg": "4320011a3c40bd3cc3730be94551f09e",
"assets/assets/images/sweets.jpeg": "ec264f8b32a003523a92c0a56ca4cfb8",
"assets/assets/images/veji.jpg": "fc32ae5c8bb5c4ea14c255eda8656427",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4f5f5eaff985768e8043a24bc8653202",
"assets/NOTICES": "e632f9f9bffca72c31be4ab2bb95c70f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "db9876bcee31cfc9b5c35d095622ca5f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5060ce15a1e83b63105d3bae62c1b37c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/laddu.png": "bba53a6b71299d73bdbdd6caba992972",
"index.html": "585a312a9998cb4540e596e4b60e9154",
"/": "585a312a9998cb4540e596e4b60e9154",
"main.dart.js": "822d2c2e61d4e518ef12361b8c1b3090",
"manifest.json": "f0c063f7717a294567e8b16e71f86dee",
"version.json": "770100ea205f252e280106863d8a3198"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
