/* Offline support for Starship.
   The game page and its content files (data/) are always fetched fresh when online (bypassing any short-term copy), so updates arrive at once,
   and is served from the saved copy when offline. The core files are saved on install so a new version takes over quickly;
   the paintings are then saved in the background, and any painting is also saved the first time it is shown. */
var CACHE = "starship-202611191500";
var FILES = ["./", "index.html", "data/encounters.js", "data/missions.js", "data/paintings.js", "data/relics.js", "data/crew.js", "data/arcs.js", "manifest.webmanifest", "icon-180.png", "icon-512.png", "art/distress.jpg", "art/station.jpg", "art/stowaway.jpg", "art/flare.jpg", "art/graveyard.jpg", "art/merchant.jpg", "art/defector.jpg", "art/drifters.jpg", "art/plague.jpg", "art/gravity.jpg", "art/oracle.jpg", "art/coolant.jpg", "art/cache.jpg", "art/lanterns.jpg", "art/mines.jpg", "art/hermit.jpg", "art/echo.jpg", "art/comet.jpg", "art/convoy.jpg", "art/garden.jpg", "art/hospital.jpg", "art/frozen.jpg", "art/spores.jpg", "art/rift.jpg", "art/loop.jpg", "art/fever.jpg", "art/breeders.jpg", "art/lightbeing.jpg", "art/wounded.jpg", "art/seedvault.jpg", "art/springs.jpg", "art/survivors.jpg", "art/contented.jpg", "art/ageing.jpg", "art/arch.jpg", "art/collapse.jpg", "art/crystals.jpg", "art/listening.jpg", "art/android.jpg", "art/bunker.jpg", "art/hiding.jpg", "art/charged.jpg", "art/nursery.jpg", "art/prospector.jpg", "art/livingrock.jpg", "art/collision.jpg", "art/otherself.jpg", "art/worldship.jpg", "art/lonelymind.jpg", "art/collector.jpg", "art/judge.jpg", "art/shell.jpg", "art/traveller.jpg", "art/leviathan.jpg", "art/lostdays.jpg", "art/swapped.jpg", "art/shifter.jpg", "art/chorus.jpg", "art/watchers.jpg", "art/blackflag.jpg", "art/casino.jpg", "art/ghostship.jpg", "art/doomsday.jpg", "art/prisonhulk.jpg", "art/exodus.jpg", "art/perfectday.jpg", "art/passenger.jpg", "art/lastevening.jpg", "art/fold.jpg", "art/quietminds.jpg", "art/bounty.jpg", "art/champion.jpg", "art/endlesswar.jpg", "art/memorymerchant.jpg", "art/unrest.jpg", "art/library.jpg", "art/sirens.jpg", "art/cloudmind.jpg", "art/waitingfleet.jpg", "art/marooned.jpg", "art/burningfog.jpg", "art/hollowrock.jpg", "art/strike.jpg", "art/piratenest.jpg", "art/egg.jpg", "art/exile.jpg", "art/fallencity.jpg", "art/machinegod.jpg", "art/copies.jpg", "art/huntingground.jpg", "art/outoftime.jpg", "art/terraformer.jpg", "art/buriedship.jpg", "art/disobedient.jpg", "art/holdout.jpg", "art/tomb.jpg", "art/forest.jpg", "art/settlers.jpg", "art/marsh.jpg", "art/herds.jpg", "art/observatory.jpg", "art/seam.jpg", "art/camp.jpg", "art/ice.jpg", "art/wreck.jpg", "art/storm.jpg", "art/nightbloom.jpg", "art/tides.jpg", "art/sleepinggiant.jpg", "art/rememberingforest.jpg", "art/amberlake.jpg", "art/paradise.jpg", "art/skygrazers.jpg", "art/peacetalks.jpg", "art/tradefair.jpg", "art/quarantinecity.jpg", "art/coup.jpg", "art/occupied.jpg", "art/firstlaunch.jpg", "art/greatrace.jpg", "art/ambassador.jpg", "portraits/p01.jpg", "portraits/p02.jpg", "portraits/p03.jpg", "portraits/p04.jpg", "portraits/p05.jpg", "portraits/p06.jpg", "portraits/p07.jpg", "portraits/p08.jpg", "portraits/p09.jpg", "portraits/p10.jpg", "portraits/p11.jpg", "portraits/p12.jpg", "portraits/p13.jpg", "portraits/p14.jpg", "portraits/p15.jpg", "portraits/p16.jpg", "portraits/p17.jpg", "portraits/p18.jpg", "portraits/p19.jpg", "portraits/p20.jpg", "portraits/p21.jpg", "portraits/p22.jpg", "portraits/p23.jpg", "portraits/p24.jpg", "portraits/p25.jpg", "portraits/p26.jpg", "portraits/p27.jpg", "portraits/p28.jpg", "portraits/p29.jpg", "portraits/p30.jpg", "art/hab1.jpg", "art/hab2.jpg", "art/hab3.jpg", "art/hab4.jpg", "art/hab5.jpg", "art/hab6.jpg", "art/bar1.jpg", "art/bar2.jpg", "art/bar3.jpg", "art/bar4.jpg", "art/bar5.jpg", "art/bar6.jpg", "art/inh1.jpg", "art/inh2.jpg", "art/inh3.jpg", "art/inh4.jpg", "art/inh5.jpg", "art/inh6.jpg", "art/lp1.jpg", "art/lp2b.jpg", "art/lp2g.jpg", "art/lp3b.jpg", "art/lp3g.jpg", "art/lp4b.jpg", "art/lp4g.jpg", "art/lp5b.jpg", "art/lp5g.jpg", "art/pw1.jpg", "art/pw2b.jpg", "art/pw2g.jpg", "art/pw3b.jpg", "art/pw3g.jpg", "art/pw4b.jpg", "art/pw4g.jpg", "art/pw5b.jpg", "art/pw5g.jpg", "art/qe1.jpg", "art/qe2b.jpg", "art/qe2g.jpg", "art/qe3b.jpg", "art/qe3g.jpg", "art/qe4b.jpg", "art/qe4g.jpg", "art/qe5b.jpg", "art/qe5g.jpg"];
function isPic(f) { return f.indexOf("art/") === 0 || f.indexOf("portraits/") === 0; }
var CORE = FILES.filter(function (f) { return !isPic(f); });
var ART = FILES.filter(isPic);
/* Save every painting once per version, in the background, a few at a time so the game stays responsive. */
var artDone = false;
function saveArt() {
  if (artDone) return Promise.resolve();
  artDone = true;
  return caches.open(CACHE).then(function (c) {
    var list = ART.slice();
    function next() {
      var batch = list.splice(0, 4); if (!batch.length) return;
      return Promise.all(batch.map(function (f) { return c.match(f).then(function (hit) { return hit || c.add(f).catch(function () {}); }); })).then(next);
    }
    return next();
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
  var data = url.pathname.indexOf("/data/") >= 0 && url.pathname.endsWith(".js");
  if (page || data) {
    var key = page ? "index.html" : "data/" + url.pathname.split("/data/").pop();
    e.respondWith(fetch(req.url, { cache: "no-store", credentials: "same-origin" }).then(function (res) {
      if (res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(key, copy); }); }
      if (page) saveArt();
      return res;
    }).catch(function () { return caches.match(key); }));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && (res.ok || res.type === "opaque")) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  }));
});
