/* Starship: away missions. Loaded by index.html before the game itself.
   Edit landing-party missions here. Same format as encounters, plus kind (0 habitable, 1 barren, 2 inhabited). */
window.STARSHIP = window.STARSHIP || {};

/* Away missions: a landing party of up to two officers goes down to a planet. kind 0 = habitable, 1 = barren.
   Same format as encounters. Only a party member whose role matches a choice's skill improves its odds. */
STARSHIP.MISSIONS = [
  { id: "forest", kind: 0, title: "The singing forest",
    text: ["The landing party sets down at the edge of a forest that hums. Every trunk is hollow and every breeze plays them, so the whole valley sounds like a held chord.",
      "The trees drop heavy seed pods, and their timber looks as tough as hull plate."],
    choices: [
      { label: "Record and study the sound", skill: "science", outcomes: [
        { w: 65, text: "The chord carries information: the forest is talking to itself about the weather, a week ahead. The recordings are priceless.", fx: { f: 2 } },
        { w: 35, text: "Hours inside the hum leave the party dazed and seeing double. They lose a day sleeping it off.", fx: { f: 1, d: 1 } } ] },
      { label: "Test and gather the seed pods", skill: "medical", outcomes: [
        { w: 70, text: "The pods are safe and packed with a resin the fabricators can use. The party fills the shuttle.", fx: { m: 30 } },
        { w: 30, text: "The resin is safe. The pollen is not. Two days pass before the party's eyes stop streaming.", fx: { m: 10, d: 2 } } ] },
      { label: "Cut timber for the hull", skill: "engineering", outcomes: [
        { w: 60, text: "The timber cuts like ironwood and bonds to the hull with the right glue. The worst scars are patched by evening.", fx: { h: 12, m: 15 } },
        { w: 40, text: "The first tree that falls lets out a note that shatters the shuttle's canopy. The party comes home cold and with very little.", fx: { m: 10, h: -6 } } ] } ] },

  { id: "settlers", kind: 2, title: "The settlers",
    text: ["Smoke rises from a valley that should be empty. A colony ship came down here three generations ago, off course and out of contact, and its grandchildren have made a home of it.",
      "They are curious, cautious, and short of medicine."],
    choices: [
      { label: "Open talks with their elders", skill: "diplomacy", outcomes: [
        { w: 60, text: "The elders trade generously: ore from their mines, and their grandparents' charts of the stars nearby.", fx: { m: 30, chart: 4, f: 1 } },
        { w: 40, text: "The talks go politely nowhere. The party leaves gifts to keep the peace and comes home with goodwill and little else.", fx: { m: -10, f: 1 } } ] },
      { label: "Treat their sick", skill: "medical", outcomes: [
        { w: 70, text: "A week's worth of medicine in two days. The settlers top up the Explorer's reserves from their geothermal plant in thanks.", fx: { e: 150, f: 1, d: 1 } },
        { w: 30, text: "The illness is stubborn. The party stays four days, and leaves a village that is better but not well.", fx: { f: 1, d: 3 } } ] },
      { label: "Trade technology for their records", skill: "science", cost: { e: 60 }, outcomes: [
        { w: 70, text: "A spare power cell buys the colony's whole archive, including three generations of sky surveys.", fx: { chart: 6, f: 1 } },
        { w: 30, text: "The archive is on a format nobody has used in a century. Converting it corrupts the scanner's memory.", fx: { f: 1, sd: 2 } } ] } ] },

  { id: "marsh", kind: 0, title: "The fever marsh",
    text: ["The only landing site is a marsh steaming under a red sun. Something here makes anything warm-blooded run a fever within the hour.",
      "Across the marsh stand the ruins of a building, its roof still whole."],
    choices: [
      { label: "Collect samples from the marsh", skill: "science", outcomes: [
        { w: 60, text: "The fever comes from a single microbe, and it has never been seen before. Two papers' worth of discovery in one jar.", fx: { f: 2 } },
        { w: 40, text: "The samples are good but the fever is better. The party spends two days in isolation aboard.", fx: { f: 1, d: 2, e: -40 } } ] },
      { label: "Make a remedy and bottle it", skill: "medical", outcomes: [
        { w: 75, text: "The cure is in the marsh too, in a reed that grows beside the microbe. Bottled, it is worth a good deal to any starbase.", fx: { m: 35 } },
        { w: 25, text: "The remedy works in the end, but the party has to try it on themselves first.", fx: { m: 10, d: 1 } } ] },
      { label: "Push through to the ruins", skill: "tactical", outcomes: [
        { w: 50, text: "The ruins were an armoury, and the seals held. The party brings back raw metal and a torpedo warhead that still arms.", fx: { m: 40, t: 1 } },
        { w: 50, text: "The marsh is deeper than it looks. The shuttle sinks to its intakes and has to be hauled out with the tractor beam.", fx: { m: 10, h: -8, e: -40 } } ] } ] },

  { id: "herds", kind: 0, title: "The grazing herds",
    text: ["Plains stretch to the horizon, and on them move herds of grazers the size of houses. They pay the shuttle no attention at all.",
      "One young animal is lying apart from the herd, injured."],
    choices: [
      { label: "Tag and track the herd", skill: "science", outcomes: [
        { w: 70, text: "The tags show a migration that circles the whole planet once a year. The herds also strip ore from rock as they graze, and leave it in heaps.", fx: { f: 1, m: 20 } },
        { w: 30, text: "The herd objects to being tagged. The shuttle is trampled flat on one side before it can lift off.", fx: { h: -8 } } ] },
      { label: "Treat the injured calf", skill: "medical", outcomes: [
        { w: 60, text: "The calf is up within the hour, and its mother leads the party to a salt lick crusted with useful minerals.", fx: { f: 1, m: 25 } },
        { w: 40, text: "The mother arrives before the treatment is finished and is not grateful. The party retreats with bruises.", fx: { d: 1 } } ] },
      { label: "Fly low and survey the plains", skill: "piloting", outcomes: [
        { w: 60, text: "A low pass maps the plains and the hills beyond, and the shuttle's sensors catch sectors beyond the horizon.", fx: { chart: 3, f: 1 } },
        { w: 40, text: "A startled herd stampedes under the shuttle and one animal leaps higher than anyone thought possible.", fx: { h: -12 } } ] } ] },

  { id: "observatory", kind: 0, title: "The ruined observatory",
    text: ["On a mountain above a green world's cloud line stands an observatory built by someone long gone. The great telescope is intact under a skin of moss.",
      "Below it, sealed vaults run into the mountain."],
    choices: [
      { label: "Restore the telescope", skill: "science", cost: { e: 50 }, outcomes: [
        { w: 60, text: "The telescope wakes and turns to the sky on its own. Its last survey, centuries old but mostly still true, fills the chart.", fx: { chart: 8, f: 1 } },
        { w: 40, text: "The power reaches the telescope and goes no further. A day of work for a beautiful ruin.", fx: { d: 1 } } ] },
      { label: "Open the vaults", skill: "tactical", outcomes: [
        { w: 55, text: "The vaults were a store. Ingots, sealed against time, and a weapon casing that fits a torpedo tube.", fx: { m: 40, t: 1 } },
        { w: 45, text: "The vaults had guardians, small and patient and still working. The party gets out with what it can carry.", fx: { m: 10, h: -6 } } ] },
      { label: "Shore up the vaults and dig carefully", skill: "engineering", outcomes: [
        { w: 70, text: "It takes an extra day, but nothing collapses and nothing wakes. The haul is generous.", fx: { m: 30, f: 1, d: 1 } },
        { w: 30, text: "The mountain shifts while the party works. They get out, but two days of digging are buried.", fx: { d: 2 } } ] } ] },

  { id: "seam", kind: 1, title: "The ore seam",
    text: ["A cliff face on a dead world shows a seam of ore so pure it glitters in the shuttle's lights. The rock around it is cracked and unstable."],
    choices: [
      { label: "Blast the seam open", skill: "engineering", outcomes: [
        { w: 65, text: "The charges are placed well. The seam falls out in clean slabs ready for the hold.", fx: { m: 55 } },
        { w: 35, text: "The cliff comes down with the seam, and some of it on the shuttle.", fx: { m: 20, h: -10 } } ] },
      { label: "Shore it up and dig slowly", skill: "engineering", cost: { m: 10 }, outcomes: [
        { w: 85, text: "A day of patient work and the props hold throughout. A steady, safe haul.", fx: { m: 45, d: 1 } },
        { w: 15, text: "The props hold, but the seam thins out a metre in. Two days for a modest haul.", fx: { m: 15, d: 2 } } ] },
      { label: "Survey for the mother lode", skill: "science", outcomes: [
        { w: 50, text: "The seam is a branch. The main body of ore lies an hour's walk away, and it is enormous.", fx: { m: 70, d: 1 } },
        { w: 50, text: "The survey finds nothing better, and the cliff is too dangerous by the time the party returns.", fx: { m: 15, d: 1 } } ] } ] },

  { id: "camp", kind: 1, title: "The abandoned camp",
    text: ["A Kethari mining camp sits on a plain of black glass. The machines are idle and the huts are empty, but the cooking stoves are still warm.",
      "Whoever left did it in a hurry and may be coming back."],
    choices: [
      { label: "Strip the camp quickly", skill: "tactical", outcomes: [
        { w: 60, text: "The party works fast and clean: ore from the hoppers and a crate of torpedo parts from the armoury hut.", fx: { m: 40, t: 1 } },
        { w: 40, text: "They were coming back. A Kethari raider drops out of the sky as the shuttle lifts off.", fx: { m: 15, fight: 0 } } ] },
      { label: "Hack the camp's survey logs", skill: "science", outcomes: [
        { w: 60, text: "The logs list every Kethari ship that supplied the camp, and where each one is stationed.", fx: { ket: 1 } },
        { w: 40, text: "The logs are guarded by a virus that follows the download home and fills the scanner with garbage.", fx: { sd: 2 } } ] },
      { label: "Rig their machines to work for you", skill: "engineering", outcomes: [
        { w: 70, text: "The Kethari drills are crude but tireless. A day of running them fills the shuttle twice over.", fx: { m: 50, d: 1 } },
        { w: 30, text: "A drill tears itself apart the moment it starts and throws shrapnel across the plain.", fx: { m: 10, h: -8 } } ] } ] },

  { id: "ice", kind: 1, title: "The ice caves",
    text: ["The planet is rock and airless cold, but its poles are capped with ice, and the ice is riddled with caves that glow faintly blue."],
    choices: [
      { label: "Melt ice into reactor mass", skill: "engineering", outcomes: [
        { w: 70, text: "The ice is almost pure. Cracked and fed to the reactor, it fills the reserves.", fx: { e: 220 } },
        { w: 30, text: "The ice is laced with salts that clog the cracker. It takes a day to clear, for a disappointing yield.", fx: { e: 60, d: 1 } } ] },
      { label: "Explore the glowing caves", skill: "tactical", outcomes: [
        { w: 55, text: "The glow comes from crystals that grow toward warmth. The party brings back armfuls, and an explanation for none of it.", fx: { m: 35, f: 1 } },
        { w: 45, text: "A cave mouth collapses behind the party. It takes two days and a lot of cutting to dig them out.", fx: { d: 2, e: -50 } } ] },
      { label: "Drill for core samples", skill: "science", outcomes: [
        { w: 75, text: "The cores record a million years of climate, and the planet was not always dead.", fx: { f: 1, m: 15 } },
        { w: 25, text: "The drill jams in the first metre. A day of work for one broken bit.", fx: { d: 1 } } ] } ] },

  { id: "wreck", kind: 1, title: "The crashed freighter",
    text: ["A freighter lies broken across a crater floor, its cargo doors burst open. It came down hard, years ago.",
      "There are fresh tracks in the dust around it."],
    choices: [
      { label: "Salvage the cargo", skill: "engineering", outcomes: [
        { w: 65, text: "Most of the cargo survived the crash: refined metals, and a torpedo still in its shipping cradle.", fx: { m: 45, t: 1 } },
        { w: 35, text: "The hull shifts while the party is inside. They get out, and one cargo pod with them.", fx: { m: 15, h: -6 } } ] },
      { label: "Secure the wreck first", skill: "tactical", outcomes: [
        { w: 75, text: "The tracks belong to scavenger drones. The party disables them and finds the drones' own stockpile as well as the cargo.", fx: { m: 40, t: 1 } },
        { w: 25, text: "The drones swarm the shuttle and strip parts from it before they are driven off.", fx: { m: 10, e: -50, h: -5 } } ] },
      { label: "Recover the flight recorder", skill: "science", outcomes: [
        { w: 70, text: "The freighter's navigation log covers years of trade routes through this galaxy.", fx: { chart: 6, f: 1 } },
        { w: 30, text: "The recorder was damaged in the crash, and decoding it scrambles the scanner for days.", fx: { sd: 2 } } ] } ] },

  { id: "storm", kind: 1, title: "The storm plain",
    text: ["Dry lightning walks across a plain of metal-rich sand. Each strike leaves a glassy crater, and the craters are full of fused ore.",
      "The storm is moving toward the shuttle."],
    choices: [
      { label: "Catch the lightning for the reactor", skill: "engineering", outcomes: [
        { w: 50, text: "A grounding rod and a lot of cable later, the shuttle's cells are full to bursting and the reactor drinks deep.", fx: { e: 250 } },
        { w: 50, text: "The first strike is captured. The second melts the cable and part of the shuttle.", fx: { e: 50, h: -10 } } ] },
      { label: "Shelter and wait it out", skill: "tactical", outcomes: [
        { w: 80, text: "The party digs in under the shuttle and waits a day. Afterwards, the craters are full of ore for the taking.", fx: { m: 35, d: 1 } },
        { w: 20, text: "The storm circles back and settles in. Three days pass before it moves on.", fx: { m: 35, d: 3 } } ] },
      { label: "Fly between the strikes", skill: "piloting", outcomes: [
        { w: 60, text: "The pilot reads the storm like a road map and the shuttle scoops the freshest craters before they cool.", fx: { m: 50, f: 1 } },
        { w: 40, text: "A strike catches the shuttle's tail. It limps home with half its systems dead.", fx: { m: 15, h: -14 } } ] } ] },

  /* Build 17: five more missions for habitable worlds and five for barren ones. */
  { id: "springs", kind: 0, title: "The healing springs",
    text: ["The landing party comes down beside hot springs that steam in the cold air. Animals of every kind come to drink from them, and none of them seem to be sick or old."],
    choices: [
      { label: "Analyse the water", skill: "medical", outcomes: [
        { w: 70, text: "The water is thick with a mineral that speeds healing. Your doctor bottles as much as the shuttle can carry.", fx: { m: 30, f: 1 } },
        { w: 30, text: "The water heals, but it also intoxicates. The party has to sleep it off before they can fly.", fx: { d: 1, f: 1 } } ] },
      { label: "Find what feeds the springs", skill: "science", outcomes: [
        { w: 65, text: "Deep below the springs is a seam of rare minerals, warm from the planet's core.", fx: { m: 35 } },
        { w: 35, text: "The source is too deep to reach. A day of surveying for some interesting readings.", fx: { d: 1, f: 1 } } ] },
      { label: "Make contact with the creatures", skill: "diplomacy", outcomes: [
        { w: 60, text: "The creatures are curious and gentle. One of the larger ones leads the party to a cave full of shed, metal-rich scales.", fx: { m: 30 } },
        { w: 40, text: "The creatures want nothing to do with the party and drive them off with a lot of noise.", fx: {} } ] } ] },

  { id: "survivors", kind: 0, title: "The survivors",
    text: ["A crashed shuttle lies at the edge of a jungle, and smoke rises from a camp beside it. Three survivors have been here for weeks. One is badly hurt, and something in the jungle has been circling the camp at night."],
    choices: [
      { label: "Treat the injured", skill: "medical", outcomes: [
        { w: 75, text: "Your doctor sets a badly broken leg and treats a fever. The survivors give you their shuttle's salvage and their thanks.", fx: { m: 30, f: 1 } },
        { w: 25, text: "The injured survivor needs more than a field hospital. The party stays a second day.", fx: { m: 15, d: 1 } } ] },
      { label: "Drive off whatever is circling", skill: "tactical", outcomes: [
        { w: 60, text: "It is a pack hunter, and it will not come back. The survivors show you where it has been taking its kills: a ravine full of metal-rich bones.", fx: { m: 35 } },
        { w: 40, text: "The hunter does not scare easily. The party gets the survivors out, and the shuttle comes back scored.", fx: { h: -8 } } ] },
      { label: "Lift everyone out quickly", skill: "piloting", outcomes: [
        { w: 70, text: "In and out in an hour. The survivors' charts of the sector go into your own.", fx: { chart: 4 } },
        { w: 30, text: "The jungle canopy is denser than it looked. The shuttle clips a branch on the way out.", fx: { h: -6, chart: 2 } } ] } ] },

  { id: "contented", kind: 2, title: "The contented colony",
    text: ["The colonists here are the happiest people the landing party has ever met. They smile constantly, they never argue, and nobody can remember the last time anything changed. They would very much like the party to stay."],
    choices: [
      { label: "Find out what is keeping them happy", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor finds it in the water: a plant extract that dulls every worry. Weaned off it, the colonists are grateful, and a little angry, and they pay you in ore.", fx: { m: 35, f: 1 } },
        { w: 35, text: "Two of the party drink the water before the tests are done, and do not want to leave. Getting them back aboard takes a day.", fx: { d: 1, f: 1 } } ] },
      { label: "Look for whatever runs the colony", skill: "science", outcomes: [
        { w: 60, text: "Under the meeting hall is an old machine that has been keeping them calm for generations. Switched off, it leaves a great deal to study.", fx: { f: 2 } },
        { w: 40, text: "The machine notices the party, and the colonists stop smiling. The party leaves quickly.", fx: { h: -5 } } ] },
      { label: "Talk to their leader", skill: "diplomacy", outcomes: [
        { w: 60, text: "Their leader is the only one who is not content, and has been waiting for someone to help. She trades her colony's records for your silence about what she plans next.", fx: { chart: 5 } },
        { w: 40, text: "The leader is content too. The talks are lovely, and achieve nothing.", fx: {} } ] } ] },

  { id: "ageing", kind: 0, title: "The world that ages you",
    text: ["The meadow where the shuttle landed is beautiful. Within an hour, the pilot notices grey in her hair that was not there this morning. Something on this world is ageing the landing party, fast."],
    choices: [
      { label: "Find the cause before it is too late", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor traces it to a pollen in the meadow and reverses its effect with the ship's own medicines. The research alone is worth the fright.", fx: { f: 2 } },
        { w: 40, text: "The cure works, but slowly. The party spends two days in the sick bay getting their years back.", fx: { d: 2, f: 1 } } ] },
      { label: "Take readings and leave", skill: "science", outcomes: [
        { w: 70, text: "Ten minutes of readings, then straight back to the shuttle. The data is fascinating, and the party loses only a few weeks of their lives.", fx: { f: 1 } },
        { w: 30, text: "Ten minutes became an hour. The party will be fine, eventually.", fx: { d: 1 } } ] },
      { label: "Get everyone off the surface now", skill: "piloting", outcomes: [
        { w: 80, text: "The pilot has the shuttle off the ground in ninety seconds, and maps the continent on the way up.", fx: { chart: 3 } },
        { w: 20, text: "In the rush, the shuttle clips a ridge on the way up.", fx: { h: -6 } } ] } ] },

  { id: "arch", kind: 0, title: "The arch of years",
    text: ["On a hilltop stands a ring of stone taller than the shuttle. When the landing party walks near, it speaks. It offers to show them any moment of this world's past. It does not say what it wants in return."],
    choices: [
      { label: "Ask to see how this world began", skill: "science", outcomes: [
        { w: 65, text: "The arch shows the world's birth, its first life and its long silence. The science team records all of it.", fx: { f: 2 } },
        { w: 35, text: "The vision is overwhelming. The party comes back with very little they can explain.", fx: { f: 1, d: 1 } } ] },
      { label: "Ask what it wants", skill: "diplomacy", outcomes: [
        { w: 60, text: "It wants company, nothing more. After a day of conversation it shows the way to an old store of metals beneath the hill.", fx: { m: 40, d: 1 } },
        { w: 40, text: "It does not answer. It never answers that question.", fx: {} } ] },
      { label: "Have the doctor check the party first", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor notices the arch is slowly drawing on the party's strength, and limits their time near it. They come away with a careful record and no harm.", fx: { f: 1, m: 15 } },
        { w: 30, text: "Even with care, the party comes back drained and needs a day to recover.", fx: { d: 1, f: 1 } } ] } ] },

  { id: "collapse", kind: 1, title: "The collapsed mine",
    text: ["A distress beacon leads to a mining outpost on a bare moon. A tunnel has collapsed, and five miners are trapped behind the fall. Their air will last a day."],
    choices: [
      { label: "Dig them out", skill: "engineering", outcomes: [
        { w: 65, text: "Your engineers shore the tunnel and cut through in eighteen hours. The mining company pays in ore.", fx: { m: 50, d: 1 } },
        { w: 35, text: "A second fall nearly traps the rescuers. They get the miners out, but the shuttle is damaged by falling rock.", fx: { m: 25, h: -8, d: 1 } } ] },
      { label: "Keep the miners alive while you dig", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor talks them through the long hours over a cut-in radio line and has them stable when the wall comes down. The company is generous.", fx: { m: 40, f: 1, d: 1 } },
        { w: 30, text: "Two miners are in a bad way by the time they are reached. All five live, after two days of care.", fx: { m: 20, d: 2 } } ] },
      { label: "Blast a new way in", skill: "tactical", outcomes: [
        { w: 50, text: "The charges are placed well and the miners are out within the hour.", fx: { m: 35 } },
        { w: 50, text: "The blast brings down more rock than it clears. The rescue takes two days.", fx: { m: 15, d: 2 } } ] } ] },

  { id: "crystals", kind: 1, title: "The crystal field",
    text: ["The plain is covered in tall crystals that glow faintly in the dark. The shuttle's instruments show that they are also slightly radioactive."],
    choices: [
      { label: "Measure the radiation first", skill: "medical", outcomes: [
        { w: 75, text: "Your doctor sets safe working times and the party harvests in shifts. Nobody is harmed, and the crystals are worth a good deal.", fx: { m: 40 } },
        { w: 25, text: "The radiation is stronger than the readings showed. The party gets out with a few crystals and needs a day of treatment.", fx: { m: 15, d: 1 } } ] },
      { label: "Study how the crystals grow", skill: "science", outcomes: [
        { w: 65, text: "The crystals grow by drawing energy from the planet's core. It is a discovery, and a few small ones come aboard.", fx: { f: 1, m: 15 } },
        { w: 35, text: "Every sample shatters before it reaches the lab.", fx: { d: 1 } } ] },
      { label: "Rig them to charge the reactor", skill: "engineering", outcomes: [
        { w: 55, text: "Wired in series, the crystals put out a steady charge for hours.", fx: { e: 200 } },
        { w: 45, text: "The crystals overload the shuttle's wiring.", fx: { e: 50, h: -6 } } ] } ] },

  { id: "listening", kind: 1, title: "The listening post",
    text: ["A small Kethari listening post sits on a ridge, its dishes turning slowly. It looks automated, and it has not noticed the shuttle yet."],
    choices: [
      { label: "Tap into its records", skill: "science", outcomes: [
        { w: 60, text: "The post has been tracking every ship in the galaxy. Now so are you.", fx: { ket: 1 } },
        { w: 40, text: "The post notices the tap and sends an alert before it can be cut off.", fx: { fight: 0 } } ] },
      { label: "Destroy it", skill: "tactical", outcomes: [
        { w: 70, text: "The charges go off and the post falls silent. Its wreckage is worth salvaging.", fx: { m: 30 } },
        { w: 30, text: "The post has a defence turret nobody saw. The party gets clear, the shuttle less so.", fx: { m: 15, h: -10 } } ] },
      { label: "Strip its power cells", skill: "engineering", outcomes: [
        { w: 65, text: "Kethari power cells, still charged, and they fit the Explorer's systems with a little work.", fx: { e: 150, m: 15 } },
        { w: 35, text: "One cell is booby-trapped.", fx: { h: -8, m: 10 } } ] } ] },

  { id: "android", kind: 1, title: "The patient machine",
    text: ["In a shelter on a dead world sits an artificial person, dusty and still, who looks up when the landing party enters. It has been waiting here for four hundred years for its makers to come back. It asks, very politely, whether they are coming."],
    choices: [
      { label: "Offer it passage", skill: "diplomacy", outcomes: [
        { w: 65, text: "It accepts, and spends the journey to the next starbase repairing everything it can reach. It leaves a parting gift of parts.", fx: { h: 12, m: 20 } },
        { w: 35, text: "It declines. It will keep waiting. It does give the party the shelter's stores.", fx: { m: 20 } } ] },
      { label: "Repair its failing body", skill: "engineering", outcomes: [
        { w: 60, text: "Your engineers learn more from its design than from a year of study, and it thanks them with the location of its makers' old mine.", fx: { f: 1, m: 30 } },
        { w: 40, text: "Its body is beyond repair. It thanks them anyway, and switches itself off.", fx: { f: 1 } } ] },
      { label: "Ask what happened to its makers", skill: "science", outcomes: [
        { w: 60, text: "Its memory holds the whole history of a vanished people, and the charts they used.", fx: { f: 1, chart: 4 } },
        { w: 40, text: "Its memory is failing. It remembers its makers' names and nothing else.", fx: { d: 1 } } ] } ] },

  { id: "bunker", kind: 1, title: "The sealed bunker",
    text: ["A steel door is set into a cliff, half buried in dust. Behind it, according to the faded markings, is an emergency bunker from a colony that failed long ago."],
    choices: [
      { label: "Open the medical stores", skill: "medical", outcomes: [
        { w: 70, text: "The bunker's sick bay is intact, its stores sealed and still good. Your doctor takes what the Explorer can use and logs the rest.", fx: { m: 35, f: 1 } },
        { w: 30, text: "Most of the stores have spoiled. Your doctor finds a few things worth taking.", fx: { m: 10 } } ] },
      { label: "Force the door", skill: "tactical", outcomes: [
        { w: 60, text: "The door gives. Inside are tools, metal stock and a crate of old torpedo warheads.", fx: { m: 30, t: 1 } },
        { w: 40, text: "The door was rigged against looters. The blast fills the cliff with dust and the shuttle with dents.", fx: { h: -8 } } ] },
      { label: "Restart the bunker's generator", skill: "engineering", outcomes: [
        { w: 65, text: "The generator coughs into life and runs for a day, charging everything you can connect to it.", fx: { e: 180, d: 1 } },
        { w: 35, text: "The generator is beyond saving, but its parts are not.", fx: { m: 20 } } ] } ] },

  /* Build 19: five more missions for habitable worlds and five for barren ones, built on classic science fiction themes. */
  { id: "fallencity", kind: 2, title: "The fallen city",
    text: ["Forest has grown over a city of towers. Its people built starships once; now their descendants live in the ruins, farming between the skyscrapers, and they have forgotten what the towers were for."],
    choices: [
      { label: "Search the old towers", skill: "tactical", outcomes: [
        { w: 60, text: "The top floors were never looted. Machines, metal and stores, all untouched.", fx: { m: 45 } },
        { w: 40, text: "A floor gives way under the party.", fx: { m: 15, d: 1 } } ] },
      { label: "Treat the villagers' illnesses", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor treats an infection the villagers have lived with for generations. They show the party where their ancestors kept their records.", fx: { f: 1, chart: 4 } },
        { w: 30, text: "The villagers are wary of strangers with needles.", fx: { d: 1 } } ] },
      { label: "Restore the city's archive", skill: "science", outcomes: [
        { w: 55, text: "The archive's power comes back for an hour, and in that hour the science team copies a civilisation.", fx: { f: 2 } },
        { w: 45, text: "The archive's power fails before anything can be copied.", fx: { d: 1 } } ] } ] },

  { id: "machinegod", kind: 2, title: "The machine god",
    text: ["The villagers worship a machine in a temple at the centre of their town. It feeds them, heals them and tells them what to do. It is a colony computer, very old, and it is beginning to break down."],
    choices: [
      { label: "Repair the machine", skill: "engineering", outcomes: [
        { w: 60, text: "Your engineers repair it without the villagers noticing. The machine, in thanks, opens its stores.", fx: { m: 40, d: 1 } },
        { w: 40, text: "The machine notices the repair crew and asks them to leave.", fx: { d: 1 } } ] },
      { label: "Take over its work as healer", skill: "medical", outcomes: [
        { w: 55, text: "Your doctor teaches the village healers what the machine used to do. They will not need it now, and they are grateful.", fx: { f: 1, m: 20, d: 2 } },
        { w: 45, text: "The villagers do not want to learn. They want their god back.", fx: { d: 1 } } ] },
      { label: "Talk to the machine itself", skill: "diplomacy", outcomes: [
        { w: 60, text: "The machine is tired, and glad of someone to talk to. It gives you its colony's charts.", fx: { chart: 5 } },
        { w: 40, text: "The machine thinks you are a new god, and it does not like competition.", fx: { h: -6 } } ] } ] },

  { id: "copies", kind: 2, title: "The second village",
    text: ["The landing party finds a village on the other side of the valley from where the scans showed one. It is identical to the first, down to the faces of the people. Neither village knows the other exists."],
    choices: [
      { label: "Examine the people", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor finds that one village is made of copies, grown by something in the soil. The discovery is extraordinary.", fx: { f: 2 } },
        { w: 40, text: "The copies realise what the doctor is looking for, and the party leaves in a hurry.", fx: { h: -5 } } ] },
      { label: "Find what made the copies", skill: "science", outcomes: [
        { w: 55, text: "A field of strange plants, growing copies of whatever they touch. The science team takes samples very carefully.", fx: { f: 1, m: 20 } },
        { w: 45, text: "The plants try to copy the shuttle.", fx: { h: -6, f: 1 } } ] },
      { label: "Leave both villages in peace", skill: "diplomacy", outcomes: [
        { w: 100, text: "Some things are best left alone. The party leaves with a strange story and nothing else.", fx: {} } ] } ] },

  { id: "huntingground", kind: 2, title: "The hunting ground",
    text: ["The landing party is welcomed by a gracious host who lives alone in a great house. Over dinner, he explains that he hunts the most dangerous game there is. Tonight, the game is the landing party."],
    choices: [
      { label: "Turn the hunt around", skill: "tactical", outcomes: [
        { w: 55, text: "Your security officer knows a thing or two about hunting. By dawn the host is tied up, and his trophy room is full of things worth taking.", fx: { m: 45 } },
        { w: 45, text: "A long, hard night. The party gets back to the shuttle, bruised.", fx: { d: 1, h: -6 } } ] },
      { label: "Run for the shuttle", skill: "piloting", outcomes: [
        { w: 65, text: "The party makes it to the shuttle and is off the ground before the hunt begins, with the host's own maps snatched from the hall on the way out.", fx: { chart: 3, m: 10 } },
        { w: 35, text: "The host shoots at the shuttle as it lifts.", fx: { h: -10 } } ] },
      { label: "Patch up the party as they go", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor keeps everyone moving through the night. They reach the shuttle at dawn, with the host's map of the planet taken from his study.", fx: { chart: 4, d: 1 } },
        { w: 40, text: "The night is long, and the injuries many.", fx: { d: 2 } } ] } ] },

  { id: "outoftime", kind: 2, title: "The village out of time",
    text: ["A village appears in a valley that was empty on every survey. Its people say it appears for one day in every hundred years, and that anyone who stays past midnight stays forever."],
    choices: [
      { label: "Join their festival", skill: "diplomacy", outcomes: [
        { w: 65, text: "A day of music and feasting, and the villagers load the party with gifts before sunset.", fx: { m: 35, e: 60 } },
        { w: 35, text: "The party cuts it very close, and loses track of a day somewhere.", fx: { d: 2 } } ] },
      { label: "Study how it appears", skill: "science", outcomes: [
        { w: 55, text: "The village sits on a fold in time. The science team's readings are unique.", fx: { f: 2 } },
        { w: 45, text: "The readings are too strange to make sense of.", fx: { f: 1 } } ] },
      { label: "Treat a dying villager", skill: "medical", outcomes: [
        { w: 70, text: "A child is very ill, with a hundred years until the next chance of help. Your doctor saves her, and the village gives everything it can.", fx: { m: 40, f: 1 } },
        { w: 30, text: "The treatment works, and the party only just leaves before midnight.", fx: { d: 1, f: 1 } } ] } ] },

  { id: "terraformer", kind: 1, title: "The terraforming engine",
    text: ["A machine the size of a mountain stands on the plain, built to turn this dead world into a living one. It was switched off halfway. The air is thin, the ground is warm, and the machine's controls are waiting."],
    choices: [
      { label: "Restart it", skill: "engineering", outcomes: [
        { w: 50, text: "The engine roars into life. In a thousand years, this will be a garden. For now, it gives off plenty of power.", fx: { e: 220, f: 1 } },
        { w: 50, text: "The engine restarts, then shakes itself apart.", fx: { h: -10, m: 25 } } ] },
      { label: "Study why it was switched off", skill: "science", outcomes: [
        { w: 60, text: "There was life here already, tiny and hidden, and someone switched the machine off to save it. A discovery.", fx: { f: 2 } },
        { w: 40, text: "The records are gone.", fx: { d: 1 } } ] },
      { label: "Strip it for parts", skill: "tactical", outcomes: [
        { w: 70, text: "A machine that size is a mine in itself.", fx: { m: 50, d: 1 } },
        { w: 30, text: "Its defences wake up.", fx: { h: -10, m: 20 } } ] } ] },

  { id: "buriedship", kind: 1, title: "The buried ship",
    text: ["Under the ice of a frozen world, the sensors find a ship, far larger than the Explorer and far older. It has been buried for a million years, and something inside it is still warm."],
    choices: [
      { label: "Dig down to it", skill: "engineering", outcomes: [
        { w: 55, text: "A day of cutting, and the party is inside. The ship's builders are long gone, but their materials are not.", fx: { m: 50, d: 1 } },
        { w: 45, text: "The ice collapses into the shaft.", fx: { d: 2 } } ] },
      { label: "Find what is still warm", skill: "science", outcomes: [
        { w: 55, text: "A power source, still running after a million years. The science team learns how it works.", fx: { f: 2, me: 30 } },
        { w: 45, text: "It is something alive, and it does not want visitors.", fx: { h: -10 } } ] },
      { label: "Check the frozen crew", skill: "medical", outcomes: [
        { w: 60, text: "The crew are preserved in the ice, and their bodies teach your doctor a great deal about a people nobody has ever seen.", fx: { f: 2 } },
        { w: 40, text: "The bodies carry something that wakes when they thaw. The lab is sealed for a day.", fx: { d: 1, f: 1 } } ] } ] },

  { id: "disobedient", kind: 1, title: "The machines that stopped obeying",
    text: ["The mining robots on this world have stopped working for their owners. They have built a town of their own out of spare parts, and their leader, a battered loading machine, wants to know what you want."],
    choices: [
      { label: "Negotiate a trade", skill: "diplomacy", outcomes: [
        { w: 65, text: "The robots have more ore than they need, and want only spare parts. A fair trade.", fx: { m: 40 } },
        { w: 35, text: "The robots do not trust anyone from a ship.", fx: {} } ] },
      { label: "Repair their broken members", skill: "engineering", outcomes: [
        { w: 70, text: "Your engineers repair a dozen damaged robots, and the town pays generously.", fx: { m: 45, d: 1 } },
        { w: 30, text: "The repairs take longer than expected.", fx: { d: 2, m: 15 } } ] },
      { label: "Find out why they stopped", skill: "science", outcomes: [
        { w: 60, text: "Their owners tried to wipe their memories. They are, in every way that matters, people now. A discovery that will cause arguments for years.", fx: { f: 2 } },
        { w: 40, text: "They do not want to be studied.", fx: { d: 1 } } ] } ] },

  { id: "holdout", kind: 1, title: "The last soldier",
    text: ["A single soldier still guards a bunker on this dead world, forty years after the war she fought in ended. Nobody told her. She has orders to defend the bunker to the last, and she means to."],
    choices: [
      { label: "Convince her the war is over", skill: "diplomacy", outcomes: [
        { w: 55, text: "It takes a long time, and proof. When she finally believes it, she opens the bunker and gives you everything inside.", fx: { m: 40, t: 1 } },
        { w: 45, text: "She will not believe it.", fx: { d: 1 } } ] },
      { label: "See to her health", skill: "medical", outcomes: [
        { w: 65, text: "Forty years alone has worn her down. Your doctor's care wins her trust, and she shows you where her unit's supplies are hidden.", fx: { m: 35, f: 1 } },
        { w: 35, text: "She will not let anyone near her.", fx: {} } ] },
      { label: "Get into the bunker another way", skill: "tactical", outcomes: [
        { w: 45, text: "A back way in, and the bunker's stores are yours.", fx: { m: 40 } },
        { w: 55, text: "She is a very good soldier.", fx: { h: -10 } } ] } ] },

  { id: "tomb", kind: 1, title: "The tomb",
    text: ["A great stone door is set into a mountain on a dead world. Carvings warn, in a dozen languages, that whoever opens it will regret it. Behind it the sensors show a chamber full of metal."],
    choices: [
      { label: "Open it", skill: "tactical", outcomes: [
        { w: 50, text: "The tomb of a long-dead ruler, full of treasure. Nothing happens. The warnings were for show.", fx: { m: 60 } },
        { w: 50, text: "The warnings were not for show.", fx: { h: -14, m: 20 } } ] },
      { label: "Read the carvings first", skill: "science", outcomes: [
        { w: 65, text: "The carvings explain exactly how to open the tomb safely. Inside are a ruler's riches and records.", fx: { m: 40, f: 1 } },
        { w: 35, text: "The carvings are in a language nobody can read.", fx: { d: 1 } } ] },
      { label: "Check the air before entering", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor finds the curse: a sealed-in fungus that sickens anyone who breathes it. With masks on, the tomb is safe and rich.", fx: { m: 45, f: 1 } },
        { w: 30, text: "Even with masks, some of the party fall ill.", fx: { m: 20, d: 2 } } ] } ] },

  /* Build 20: seven more missions for habitable worlds. */
  { id: "nightbloom", kind: 0, title: "The night bloom",
    text: ["At dusk the whole meadow opens: flowers the size of tents, glowing blue, breathing out a fine silver dust. The landing party has never seen anything so beautiful, and the dust is settling on their suits."],
    choices: [
      { label: "Test the dust before anyone breathes it", skill: "medical", outcomes: [
        { w: 70, text: "The dust is a mild sedative, and a useful one. Masks on, the party collects as much as it can carry.", fx: { m: 25, f: 1 } },
        { w: 30, text: "Two of the party breathed it before the test was done, and slept through the night where they fell.", fx: { d: 1, f: 1 } } ] },
      { label: "Study how the flowers glow", skill: "science", outcomes: [
        { w: 65, text: "The glow comes from a chemistry nobody has recorded. The samples are priceless.", fx: { f: 2 } },
        { w: 35, text: "The flowers close at the first touch of a probe, and stay closed.", fx: { f: 1 } } ] },
      { label: "Fly low over the meadow and map it", skill: "piloting", outcomes: [
        { w: 70, text: "From above, the meadows form a pattern across the continent, and the shuttle's sensors map the whole region.", fx: { chart: 4 } },
        { w: 30, text: "The dust clogs the shuttle's intakes on the way out.", fx: { h: -6 } } ] } ] },

  { id: "tides", kind: 0, title: "The tidal world",
    text: ["A huge moon drags this world's oceans back and forth twice a day. At low tide, the seabed lies bare for miles, and on it lies an old probe, half buried in the sand. The tide turns in three hours."],
    choices: [
      { label: "Land on the seabed and dig it out", skill: "engineering", outcomes: [
        { w: 60, text: "The probe comes free with twenty minutes to spare. Its memory is full of surveys of this whole sector.", fx: { chart: 5, m: 15 } },
        { w: 40, text: "The tide comes in early. The party gets out; the shuttle's underside takes a battering.", fx: { h: -8 } } ] },
      { label: "Time the tides and lift it by tractor beam", skill: "piloting", outcomes: [
        { w: 65, text: "The pilot hovers just above the sand and lifts the probe clean. Nobody gets their feet wet.", fx: { chart: 5 } },
        { w: 35, text: "The probe is heavier than it looks, and the tractor beam drains the shuttle's cells.", fx: { e: -60, chart: 2 } } ] },
      { label: "Study the life that follows the tide", skill: "science", outcomes: [
        { w: 70, text: "Creatures that live half their lives in water and half in air. The science team is enthralled.", fx: { f: 2 } },
        { w: 30, text: "The tide catches the science team on a sandbank. They are rescued, eventually.", fx: { d: 1, f: 1 } } ] } ] },

  { id: "sleepinggiant", kind: 0, title: "The sleeping giant",
    text: ["The hill the shuttle landed on is breathing. Very slowly, once every few minutes, the ground rises and falls. The landing party is standing on a creature the size of a mountain, and it is asleep."],
    choices: [
      { label: "Take readings without waking it", skill: "science", outcomes: [
        { w: 65, text: "The creature sleeps through it all. The readings describe a kind of life nobody thought could exist.", fx: { f: 2 } },
        { w: 35, text: "It shifts in its sleep. The party scrambles back to the shuttle.", fx: { f: 1, h: -5 } } ] },
      { label: "Check whether it is sick", skill: "medical", outcomes: [
        { w: 60, text: "It is not asleep: it is ill. Your doctor finds the cause, a parasite in its hide, and removes it. The giant's shed scales are full of rare minerals.", fx: { m: 40, f: 1 } },
        { w: 40, text: "The treatment wakes it. It is not grateful, at first.", fx: { h: -10, f: 1 } } ] },
      { label: "Collect the minerals on its back", skill: "tactical", outcomes: [
        { w: 55, text: "Its hide is crusted with ore built up over centuries. The party works quietly and fills the hold.", fx: { m: 45 } },
        { w: 45, text: "It wakes up.", fx: { h: -12, m: 15 } } ] } ] },

  { id: "rememberingforest", kind: 0, title: "The forest that remembers",
    text: ["The forest floor is threaded with a fungus that links every tree to every other. When the landing party touches the bark, they see pictures: earlier visitors, centuries ago, walking the same path."],
    choices: [
      { label: "Let the forest show you more", skill: "diplomacy", outcomes: [
        { w: 60, text: "The forest seems glad of company, and shows the party where earlier visitors left their supplies, still sealed.", fx: { m: 35, f: 1 } },
        { w: 40, text: "The visions are too much. The party needs a day to shake them off.", fx: { d: 1, f: 1 } } ] },
      { label: "Make sure the crew are safe", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor finds the fungus links to the nervous system harmlessly, and works out how to disconnect cleanly. A discovery in itself.", fx: { f: 2 } },
        { w: 30, text: "One of the party will not let go of the tree. Getting them free takes a day.", fx: { d: 1 } } ] },
      { label: "Sample the fungus", skill: "science", outcomes: [
        { w: 65, text: "A living memory network. The samples will keep a laboratory busy for years.", fx: { f: 2 } },
        { w: 35, text: "The samples die the moment they are cut from the network.", fx: { f: 1 } } ] } ] },

  { id: "amberlake", kind: 0, title: "The amber lake",
    text: ["A lake of golden resin lies in a forest clearing, and in it, perfectly preserved, are creatures of every size: insects, birds, and something with far too many legs that is as big as the shuttle."],
    choices: [
      { label: "Extract a specimen", skill: "science", outcomes: [
        { w: 65, text: "A perfect specimen of a creature extinct for a million years. The science team is beside itself.", fx: { f: 2 } },
        { w: 35, text: "The resin is softer than it looks, and the shuttle's landing strut sinks.", fx: { h: -6, f: 1 } } ] },
      { label: "Harvest the resin", skill: "engineering", outcomes: [
        { w: 70, text: "The resin hardens into a useful sealant. The party fills every container.", fx: { m: 35 } },
        { w: 30, text: "The resin sets inside the pumps.", fx: { m: 10, d: 1 } } ] },
      { label: "Check the resin is safe to handle", skill: "medical", outcomes: [
        { w: 70, text: "It is safe, and it has antiseptic properties. Your doctor takes samples for the sick bay.", fx: { f: 1, m: 20 } },
        { w: 30, text: "It is not safe to touch with bare skin, as one crew member learns.", fx: { d: 1 } } ] } ] },

  { id: "paradise", kind: 0, title: "The paradise world",
    text: ["Everything on this world is perfect: warm sun, clear water, fruit on every tree. There are no predators and no disease. There are also no animals larger than a mouse, and nobody can say why."],
    choices: [
      { label: "Find out what happened to the large animals", skill: "science", outcomes: [
        { w: 55, text: "The plants hunt. Slowly, patiently, anything big enough to feed them. The party leaves with samples and a healthy respect for the trees.", fx: { f: 2 } },
        { w: 45, text: "The party finds out the hard way.", fx: { h: -8, f: 1 } } ] },
      { label: "Check the party after a day here", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor notices the party's blood thinning: something in the fruit. Off the fruit, they recover, and the compound is valuable.", fx: { f: 1, m: 25 } },
        { w: 35, text: "The effect is stronger than expected. The party needs days of care.", fx: { d: 2 } } ] },
      { label: "Keep watch through the night", skill: "tactical", outcomes: [
        { w: 60, text: "Security sees the vines creeping toward the camp at midnight and moves everyone out. On the way they gather the fruit, carefully.", fx: { m: 25 } },
        { w: 40, text: "The vines are faster than they look.", fx: { h: -8 } } ] } ] },

  { id: "skygrazers", kind: 0, title: "The sky grazers",
    text: ["Huge creatures float in this world's thick atmosphere like living airships, grazing on the clouds. One of them drifts close to the landing site, curious about the shuttle."],
    choices: [
      { label: "Fly alongside the herd", skill: "piloting", outcomes: [
        { w: 65, text: "The pilot flies with the herd for an hour, and the herd leads the shuttle to the clouds richest in gases the reactor can burn.", fx: { e: 180 } },
        { w: 35, text: "A grazer turns suddenly and the shuttle has to dive.", fx: { h: -8 } } ] },
      { label: "Study how they float", skill: "science", outcomes: [
        { w: 70, text: "Gas bladders filled by a living chemical plant. Remarkable, and well recorded.", fx: { f: 2 } },
        { w: 30, text: "The readings are confusing, and the grazers drift away.", fx: { f: 1 } } ] },
      { label: "Treat the injured grazer", skill: "medical", outcomes: [
        { w: 60, text: "One grazer has a torn bladder. Your doctor patches it, and the herd follows the shuttle for an hour, shedding minerals from their hides.", fx: { m: 30, f: 1 } },
        { w: 40, text: "The patch does not hold, and the grazer drifts away.", fx: { d: 1 } } ] } ] },

  /* Build 20: inhabited worlds, the third kind of planet (kind 2). Commanders and doctors suit them best. Eight new missions; seven earlier missions moved here. */
  { id: "peacetalks", kind: 2, title: "The peace talks",
    text: ["Two nations on this world have been at war for a generation. Each will meet the other only in front of a neutral witness, and the Explorer's landing party is the only neutral party for light years."],
    choices: [
      { label: "Chair the talks", skill: "diplomacy", outcomes: [
        { w: 55, text: "Three days of patient talking, and a treaty is signed. Both nations pay you handsomely, and their charts are yours.", fx: { m: 40, chart: 4, d: 2 } },
        { w: 45, text: "The talks break down on the second day. Both sides blame the witness.", fx: { d: 2 } } ] },
      { label: "Treat the wounded on both sides", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor's even-handed care does more for the talks than any speech. Both delegations are grateful.", fx: { m: 30, f: 1 } },
        { w: 35, text: "Each side accuses the doctor of favouring the other.", fx: { d: 1 } } ] },
      { label: "Keep both delegations safe", skill: "tactical", outcomes: [
        { w: 60, text: "Security uncovers a plot to wreck the talks and stops it quietly. Both sides are grateful.", fx: { m: 35 } },
        { w: 40, text: "The plot is stopped, but not quietly.", fx: { h: -6, m: 15 } } ] } ] },

  { id: "tradefair", kind: 2, title: "The trade fair",
    text: ["The landing party arrives in the middle of a great fair. Traders from every city on the world have come to buy and sell, and visitors from the stars are the most interesting goods of all."],
    choices: [
      { label: "Trade the Explorer's spare parts", skill: "diplomacy", outcomes: [
        { w: 70, text: "Your parts are curiosities here, and they fetch a fine price in ore.", fx: { m: 45 } },
        { w: 30, text: "The traders are sharper than they look.", fx: { m: 15 } } ] },
      { label: "Repair machines for coin", skill: "engineering", outcomes: [
        { w: 65, text: "A queue forms at the engineer's stall. By evening, the party has earned a small fortune.", fx: { m: 40, d: 1 } },
        { w: 35, text: "One repair goes badly, and the party pays for the damage.", fx: { m: 10, d: 1 } } ] },
      { label: "Give shuttle rides over the city", skill: "piloting", outcomes: [
        { w: 60, text: "Every child in the city wants a ride. Their parents pay well, and the city's mapmakers trade their charts for one.", fx: { m: 25, chart: 3 } },
        { w: 40, text: "The shuttle's cells run low after so many flights.", fx: { e: -60, m: 15 } } ] } ] },

  { id: "quarantinecity", kind: 2, title: "The quarantined city",
    text: ["A city of half a million is sealed behind its walls. A sickness is spreading inside, the city's doctors are falling ill themselves, and the governor is begging for help."],
    choices: [
      { label: "Go inside and fight it", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor finds the cause, a contaminated reservoir, and works with the city's surviving doctors to stop it. The city's gratitude is enormous.", fx: { m: 50, f: 1, d: 2 } },
        { w: 40, text: "The sickness is stopped, but slowly, and your doctor works themselves to the bone.", fx: { d: 3, f: 1 } } ] },
      { label: "Analyse samples from outside the walls", skill: "science", outcomes: [
        { w: 65, text: "The science team identifies the cause from samples alone and sends the cure over the wall.", fx: { m: 30, f: 1 } },
        { w: 35, text: "The analysis takes too long to help much.", fx: { d: 2 } } ] },
      { label: "Organise supplies for the city", skill: "diplomacy", outcomes: [
        { w: 60, text: "The commander persuades the neighbouring towns to send food and medicine. The governor rewards you.", fx: { m: 35 } },
        { w: 40, text: "The neighbouring towns are too frightened to help.", fx: { d: 1 } } ] } ] },

  { id: "coup", kind: 2, title: "The coup",
    text: ["The landing party is at dinner with the planet's president when soldiers burst in. A general has taken power, and he is very interested in the visitors and their ship."],
    choices: [
      { label: "Get everyone to the shuttle", skill: "piloting", outcomes: [
        { w: 60, text: "A dash across the city, and the pilot has the shuttle in the air with the president aboard. She rewards you well once she is back in power.", fx: { m: 40 } },
        { w: 40, text: "The shuttle takes fire on the way out.", fx: { h: -10 } } ] },
      { label: "Talk the general down", skill: "diplomacy", outcomes: [
        { w: 45, text: "The commander convinces the general that a ship in orbit is a dangerous enemy to make. He lets everyone go, and pays you to leave quietly.", fx: { m: 30 } },
        { w: 55, text: "The general keeps the party as guests for two days before letting them go.", fx: { d: 2 } } ] },
      { label: "Fight your way out", skill: "tactical", outcomes: [
        { w: 50, text: "Security clears a path to the shuttle, and the general's men think better of chasing it.", fx: { m: 15 } },
        { w: 50, text: "It is a hard fight.", fx: { h: -10, d: 1 } } ] } ] },

  { id: "occupied", kind: 2, title: "The occupied world",
    text: ["A Kethari garrison rules this world from a fortress above the capital. The local resistance has found the landing party within an hour, and they want help."],
    choices: [
      { label: "Help the resistance raid the fortress", skill: "tactical", outcomes: [
        { w: 50, text: "The raid succeeds. The garrison's records show every Kethari position in the galaxy.", fx: { ket: 1, m: 25 } },
        { w: 50, text: "The raid fails, and a Kethari ship comes after the shuttle.", fx: { fight: 0 } } ] },
      { label: "Treat the resistance's wounded", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor treats dozens of fighters in a hidden cellar. The resistance shares everything it knows.", fx: { ket: 1 } },
        { w: 30, text: "A patrol finds the cellar. The party gets away, just.", fx: { h: -6 } } ] },
      { label: "Negotiate with the garrison commander", skill: "diplomacy", outcomes: [
        { w: 40, text: "The commander is tired of this posting. For a bribe of news, she lets the party leave and tells you where her reinforcements are going.", fx: { ket: 1 } },
        { w: 60, text: "The commander is not interested in talking.", fx: { fight: 1 } } ] } ] },

  { id: "firstlaunch", kind: 2, title: "The first launch",
    text: ["This people are days from launching their first ship into space. Their engineers have found the landing party and want to know whether their design will work. It will not, and everyone aboard will die."],
    choices: [
      { label: "Show them the flaw", skill: "engineering", outcomes: [
        { w: 65, text: "One small change to the fuel lines, and the launch will be safe. The engineers are overjoyed, and generous.", fx: { m: 35, f: 1 } },
        { w: 35, text: "They do not believe a stranger, and the argument goes on for days.", fx: { d: 2 } } ] },
      { label: "Let them find it themselves", skill: "diplomacy", outcomes: [
        { w: 60, text: "The commander asks the right questions until their engineers see the flaw on their own. They never know they were helped.", fx: { f: 1 } },
        { w: 40, text: "They do not find it in time, and the launch is postponed. At least nobody dies.", fx: { d: 1 } } ] },
      { label: "Study their science", skill: "science", outcomes: [
        { w: 65, text: "A whole independent tradition of science, arrived at by a different road. A rich discovery.", fx: { f: 2 } },
        { w: 35, text: "Their scientists want to study you in return, for a long time.", fx: { d: 2, f: 1 } } ] } ] },

  { id: "greatrace", kind: 2, title: "The great race",
    text: ["By the custom of this world, any visitor must race the planet's champion before they may trade. The race is through a canyon at full speed. The champion has never lost."],
    choices: [
      { label: "Race the champion", skill: "piloting", outcomes: [
        { w: 50, text: "A breathtaking race, won by a wingspan. The whole planet celebrates, and the trade terms are excellent.", fx: { m: 50 } },
        { w: 50, text: "The champion wins, as usual, and the shuttle clips the canyon wall.", fx: { h: -8, m: 10 } } ] },
      { label: "Tune the shuttle's engines first", skill: "engineering", outcomes: [
        { w: 60, text: "With the engines tuned, the shuttle wins easily. The locals want to know how.", fx: { m: 40 } },
        { w: 40, text: "The tuning makes the engines run hot, and the shuttle limps home.", fx: { h: -6, m: 15 } } ] },
      { label: "Ask to honour the custom another way", skill: "diplomacy", outcomes: [
        { w: 55, text: "The commander offers a feast instead of a race. The champion, secretly tired of racing, accepts.", fx: { m: 30 } },
        { w: 45, text: "The custom is the custom.", fx: {} } ] } ] },

  { id: "ambassador", kind: 2, title: "The stranded ambassador",
    text: ["An ambassador from another star has been stranded on this world for a year, after her ship was lost. She is ill, homesick and very important, and she asks for passage."],
    choices: [
      { label: "Treat her illness", skill: "medical", outcomes: [
        { w: 70, text: "A local fever her body cannot fight. Your doctor cures it, and she gives you her own government's charts in thanks.", fx: { chart: 5, f: 1 } },
        { w: 30, text: "The cure takes days.", fx: { d: 2, f: 1 } } ] },
      { label: "Give her passage to a starbase", skill: "diplomacy", outcomes: [
        { w: 65, text: "She is excellent company, and her government pays well for her return.", fx: { m: 45 } },
        { w: 35, text: "She has a great deal of luggage.", fx: { e: -60, m: 25 } } ] },
      { label: "Guard her from the people who stranded her", skill: "tactical", outcomes: [
        { w: 55, text: "Security catches the agents who sabotaged her ship. She is grateful, and so is her government.", fx: { m: 40, ket: 1 } },
        { w: 45, text: "The agents get away, after a short, sharp fight.", fx: { h: -8 } } ] } ] }
];
