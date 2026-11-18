/* Offline support for Starship.
   The game page is always fetched fresh when online (bypassing any short-term copy), so updates arrive at once,
   and is served from the saved copy when offline. The core files are saved on install so a new version takes over quickly;
   the paintings are then saved in the background, and any painting is also saved the first time it is shown. */
var CACHE = "starship-202611181959";
var FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-512.png", "art/distress.jpg", "art/station.jpg", "art/stowaway.jpg", "art/flare.jpg", "art/graveyard.jpg", "art/merchant.jpg", "art/defector.jpg", "art/drifters.jpg", "art/plague.jpg", "art/gravity.jpg", "art/oracle.jpg", "art/coolant.jpg", "art/cache.jpg", "art/lanterns.jpg", "art/mines.jpg", "art/hermit.jpg", "art/echo.jpg", "art/comet.jpg", "art/convoy.jpg", "art/garden.jpg", "art/hospital.jpg", "art/frozen.jpg", "art/spores.jpg", "art/rift.jpg", "art/loop.jpg", "art/fever.jpg", "art/breeders.jpg", "art/lightbeing.jpg", "art/wounded.jpg", "art/seedvault.jpg", "art/springs.jpg", "art/survivors.jpg", "art/contented.jpg", "art/ageing.jpg", "art/arch.jpg", "art/collapse.jpg", "art/crystals.jpg", "art/listening.jpg", "art/android.jpg", "art/bunker.jpg", "art/hiding.jpg", "art/charged.jpg", "art/nursery.jpg", "art/prospector.jpg", "art/livingrock.jpg", "art/collision.jpg", "art/otherself.jpg", "art/worldship.jpg", "art/lonelymind.jpg", "art/collector.jpg", "art/judge.jpg", "art/shell.jpg", "art/traveller.jpg", "art/leviathan.jpg", "art/lostdays.jpg", "art/swapped.jpg", "art/shifter.jpg", "art/chorus.jpg", "art/watchers.jpg", "art/blackflag.jpg", "art/casino.jpg", "art/ghostship.jpg", "art/doomsday.jpg", "art/prisonhulk.jpg", "art/exodus.jpg", "art/perfectday.jpg", "art/passenger.jpg", "art/lastevening.jpg", "art/fold.jpg", "art/quietminds.jpg", "art/bounty.jpg", "art/champion.jpg", "art/endlesswar.jpg", "art/memorymerchant.jpg", "art/unrest.jpg", "art/library.jpg", "art/sirens.jpg", "art/cloudmind.jpg", "art/waitingfleet.jpg", "art/marooned.jpg", "art/burningfog.jpg", "art/hollowrock.jpg", "art/strike.jpg", "art/piratenest.jpg", "art/egg.jpg", "art/exile.jpg", "art/fallencity.jpg", "art/machinegod.jpg", "art/copies.jpg", "art/huntingground.jpg", "art/outoftime.jpg", "art/terraformer.jpg", "art/buriedship.jpg", "art/disobedient.jpg", "art/holdout.jpg", "art/tomb.jpg", "art/forest.jpg", "art/settlers.jpg", "art/marsh.jpg", "art/herds.jpg", "art/observatory.jpg", "art/seam.jpg", "art/camp.jpg", "art/ice.jpg", "art/wreck.jpg", "art/storm.jpg", "art/nightbloom.jpg", "art/tides.jpg", "art/sleepinggiant.jpg", "art/rememberingforest.jpg", "art/amberlake.jpg", "art/paradise.jpg", "art/skygrazers.jpg", "art/peacetalks.jpg", "art/tradefair.jpg", "art/quarantinecity.jpg", "art/coup.jpg", "art/occupied.jpg", "art/firstlaunch.jpg", "art/greatrace.jpg", "art/ambassador.jpg"];
var CORE = FILES.filter(function (f) { return f.indexOf("art/") !== 0; });
var ART = FILES.filter(function (f) { return f.indexOf("art/") === 0; });
function saveArt() {
  return caches.open(CACHE).then(function (c) {
    return Promise.all(ART.map(function (f) { return c.match(f).then(function (hit) { return hit || c.add(f).catch(function () {}); }); }));
  });
}
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("starship-") === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
  saveArt();
});
self.addEventListener("fetch", function (e) {
  var req = e.request; if (req.method !== "GET") return;
  var url = new URL(req.url);
  var page = req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html");
  if (page) {
    e.respondWith(fetch(req.url, { cache: "no-store", credentials: "same-origin" }).then(function (res) {
      var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put("index.html", copy); }); saveArt(); return res;
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
