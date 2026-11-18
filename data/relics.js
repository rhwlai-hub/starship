/* Starship: relics. Loaded by index.html before the game itself.
   Each relic's effect is written into the game by its id, so a new relic needs code as well as a line here. */
window.STARSHIP = window.STARSHIP || {};

/* ---------- Relics ----------
   Rare finds that last for the voyage. Each is unique; once all are found, a relic find pays materials instead. */
STARSHIP.RELICS = [
  { id: "lattice", n: "Lattice emitter", about: "Each shield point absorbs 1 more damage." },
  { id: "coil", n: "Kethari power coil", about: "+1 reactor power every battle turn." },
  { id: "baffle", n: "Blast baffle", about: "Your torpedoes no longer hit the Explorer at close range." },
  { id: "primer", n: "Warhead primer", about: "Every torpedo does 4 more damage." },
  { id: "scanner", n: "Silent scanner core", about: "Long-range scans cost no energy." },
  { id: "chart", n: "Ancient star chart", about: "Each new galaxy starts with 8 sectors already charted." },
  { id: "sail", n: "Solar sail weave", about: "+50% energy from every star." },
  { id: "harmoniser", n: "Warp harmoniser", about: "Warp costs 10 less energy a sector." },
  { id: "sniffer", n: "Ore sniffer", about: "+15 materials from every run mining an asteroid field." },
  { id: "charm", n: "Salvager's charm", about: "Derelict salvage never goes wrong, and yields 10 more materials." },
  { id: "surgery", n: "Field surgery kit", about: "Injured officers recover in half the time." },
  { id: "codex", n: "Officer's codex", about: "Officers gain experience twice as fast." },
  { id: "charter", n: "Starbase charter", about: "Hull repairs at starbases are free." },
  { id: "transponder", n: "Dominion transponder", about: "The Dominion alert takes 4 more days to rise each level." }
];
