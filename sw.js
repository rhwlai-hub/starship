/* Offline support for Starship.
   The game page is fetched fresh when online (so updates arrive) and served from the cache when offline.
   Paintings, icons and fonts are kept in the cache after the first visit. */
var CACHE = "starship-build-20";
var FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-512.png", "art/distress.jpg", "art/station.jpg", "art/stowaway.jpg", "art/flare.jpg", "art/graveyard.jpg", "art/merchant.jpg", "art/defector.jpg", "art/drifters.jpg", "art/plague.jpg"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("starship-") === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request; if (req.method !== "GET") return;
  var url = new URL(req.url);
  var page = req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html");
  if (page) {
    e.respondWith(fetch(req).then(function (res) {
      var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put("index.html", copy); }); return res;
    }).catch(function () { return caches.match("index.html"); }));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && (res.ok || res.type === "opaque")) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  }));
});
