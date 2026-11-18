/* Starship: random encounters. Loaded by index.html before the game itself.
   Edit encounters here. Each needs an id, a title, text and two to four choices; a painting is listed in data/paintings.js. */
window.STARSHIP = window.STARSHIP || {};

/* Random encounters. Each has one or two paragraphs and two to four choices. A choice may have a fixed cost and
   has weighted outcomes. fx keys: e energy, h hull, m materials, t torpedoes, f discoveries, d days, me reactor capacity,
   sd days of scanner outage, chart sectors revealed, ket reveal Kethari, jump thrown to a random sector, fight Kethari kind.
   "skill" names the crew skill whose officer shifts a choice's odds (see Officers in index.html). "art" borrows another
   encounter's painting. Every encounter should have a painting listed in data/paintings.js. */
STARSHIP.ENCOUNTERS = [
  { id: "distress", title: "The distress call",
    text: ["A freighter, the Marisol Dawn, is broadcasting on an old civilian band. Her reactor is failing and she has forty people aboard. The voice on the channel is calm in the way of someone who has already done the sums.",
      "Your tactical officer points out, quietly, that Kethari raiders have been known to bait a trap with exactly this kind of call."],
    none: "By the time the Explorer has turned toward the signal it has stopped. There is no freighter, no wreckage and no raider. Only static.",
    choices: [
      { label: "Go straight to her aid", skill: "medical", outcomes: [
        { w: 65, text: "The call is real. You run a power line across and hold her reactor steady while her engineers work. Her captain sends over a share of the cargo and his thanks.", fx: { e: -120, m: 40, f: 1 } },
        { w: 35, text: "The freighter's hull peels away like a stage set. Behind it, a Kethari raider powers up its guns.", fx: { fight: 0 } } ] },
      { label: "Scan her carefully first", skill: "science", cost: { e: 40 }, outcomes: [
        { w: 60, text: "The scan shows a real ship in real trouble, and exactly where the fault lies. Knowing that, the repair takes half the power it might have.", fx: { e: -50, m: 30, f: 1 } },
        { w: 40, text: "The scan shows weapons running hot behind a false hull. You ease away before the trap can close, and lose a day going the long way round.", fx: { d: 1 } } ] },
      { label: "Hold course and leave her", skill: "tactical", outcomes: [
        { w: 60, text: "You never learn whether the call was real. Hours later the Explorer crosses a thin trail of debris and takes what is worth taking.", fx: { m: 12 } },
        { w: 40, text: "Whoever was calling had friends listening. You burn energy shaking a pursuit that never quite shows itself.", fx: { e: -60 } } ] } ] },

  { id: "station", title: "The silent station",
    text: ["A research station hangs in the dark with every light on and nobody answering. The docking port stands open. Its last log entry, half corrupted, mentions the word containment three times.",
      "There is equipment in there. There is also whatever made forty scientists leave their dinners on the table."],
    none: "You circle the station twice. Nothing stirs, nothing answers, and in the end there is nothing aboard worth the risk of finding out why.",
    choices: [
      { label: "Board through the docking port", skill: "tactical", outcomes: [
        { w: 50, text: "The boarding party finds the stores untouched: sealed crates of parts and a rack of torpedo casings in the security locker.", fx: { m: 45, t: 1 } },
        { w: 30, text: "The station's automated defences wake as the party crosses the threshold. They get out with some of what they came for and scorch marks on the hull.", fx: { h: -15, m: 20 } },
        { w: 20, text: "Something comes back with the party in the air. Purging every deck takes a day and a good deal of power.", fx: { e: -100, d: 1 } } ] },
      { label: "Pull the logs by remote link", skill: "science", cost: { e: 30 }, outcomes: [
        { w: 70, text: "Buried in the logs are the station's survey charts, years of patient work on the surrounding sectors.", fx: { chart: 6, f: 1 } },
        { w: 30, text: "The download carries something with it. The scanner fills with garbage and has to be rebuilt from backups.", fx: { sd: 3 } } ] },
      { label: "Cut plating from the outer hull", skill: "engineering", outcomes: [
        { w: 80, text: "The engineers spend a day cutting good plate from the station's skin and welding it over the Explorer's worst scars.", fx: { h: 15, m: 15, d: 1 } },
        { w: 20, text: "A support frame lets go while the cutters are working and a spar swings into the Explorer's flank.", fx: { h: -8, d: 1 } } ] } ] },

  { id: "stowaway", title: "The stowaway",
    text: ["The deck crew find her asleep behind the coolant tanks: a young mechanic who ran from a mining colony and has been living on ration packs for a week. She is not sorry. She says your reactor is tuned like a farm pump and that she could fix that.",
      "The colony has posted a reward for her return."],
    none: "By the next watch she has slipped away at a supply buoy, leaving the tanks cleaner than she found them and nothing else.",
    choices: [
      { label: "Let her at the reactor", skill: "engineering", outcomes: [
        { w: 60, text: "She works for nine hours without looking up. When she is done the reactor runs cooler and holds more than its builders intended.", fx: { me: 60 } },
        { w: 40, text: "She was nearly right. The overload trips every breaker on the engineering deck and dumps a tank of reserve.", fx: { e: -120, h: -5 } } ] },
      { label: "Give her a bunk and a job in stores", skill: "diplomacy", outcomes: [
        { w: 80, text: "She reorganises the stores in a week and turns up parts the quartermaster had written off years ago.", fx: { m: 25 } },
        { w: 20, text: "She leaves at the next buoy with a bag of your best spares.", fx: { m: -15 } } ] },
      { label: "Claim the reward", skill: "diplomacy", outcomes: [
        { w: 70, text: "A colony cutter meets you a day later and pays in ore. She does not look at anyone on the way out.", fx: { m: 35, d: 1 } },
        { w: 30, text: "She hears about it before the cutter arrives. The scanner array is found with its calibration cards missing.", fx: { sd: 3 } } ] } ] },

  { id: "merchant", title: "The Quiet Abacus",
    text: ["A battered trading ship drifts alongside and opens a channel before you can. Her master has a price for everything and a story for every price.",
      "He can part with torpedoes and hull plate, and he is always short of energy."],
    none: "The haggling goes round in circles until a proximity alarm sends the merchant scuttling for cover. No deal is done.",
    choices: [
      { label: "Buy two torpedoes", skill: "diplomacy", cost: { m: 30 }, outcomes: [
        { w: 85, text: "Two torpedoes come across in a cargo net, older than your own but sound.", fx: { t: 2 } },
        { w: 15, text: "One of the two is a dud, as the armourer discovers when she opens it up.", fx: { t: 1 } } ] },
      { label: "Buy hull plate", skill: "engineering", cost: { m: 25 }, outcomes: [
        { w: 100, text: "The plate is good and the merchant's welders are better. The Explorer leaves looking almost respectable.", fx: { h: 20 } } ] },
      { label: "Sell him energy", skill: "diplomacy", cost: { e: 150 }, outcomes: [
        { w: 100, text: "You fill his cells from your own. He pays in refined ore, weighed twice.", fx: { m: 50 } } ] },
      { label: "Trade news and move on", skill: "diplomacy", outcomes: [
        { w: 100, text: "He has no use for your news but pays for it anyway, with a list of what lies in the sectors he has just crossed.", fx: { chart: 3 } } ] } ] },

  { id: "flare", title: "Solar flare",
    text: ["A star you had taken for quiet throws off a flare. The wavefront will reach the Explorer in four minutes."],
    none: "The flare breaks up before it arrives. A faint glow passes over the hull and is gone.",
    choices: [
      { label: "Turn bow-on with shields at full", skill: "tactical", outcomes: [
        { w: 80, text: "The shields flare white and hold. It costs power, and nothing else.", fx: { e: -90 } },
        { w: 20, text: "The shields hold for all but the last second.", fx: { e: -90, h: -8 } } ] },
      { label: "Run for the shadow of a moon", skill: "piloting", outcomes: [
        { w: 60, text: "The helm puts a dead moon between the ship and the star with seconds to spare, and while it waits there the moon proves rich in surface ore.", fx: { e: -40, m: 15, chart: 3 } },
        { w: 40, text: "The moon is a few seconds too far. The flare catches the stern and cooks the scanner array.", fx: { h: -15, sd: 2 } } ] },
      { label: "Deploy the collectors and drink it in", skill: "engineering", outcomes: [
        { w: 45, text: "The collectors glow like filaments and the reserve gauges climb faster than anyone has seen.", fx: { e: 250 } },
        { w: 55, text: "The collectors take as much as they can and then burn. You get something for it, at a price.", fx: { e: 60, h: -12 } } ] } ] },

  { id: "graveyard", title: "The graveyard",
    text: ["Hundreds of warships hang here, broken, from a war nobody recorded. They are not Kethari and not anything in your database.",
      "One of them still has power."],
    none: "The hulks have been picked clean by a hundred earlier visitors, and the one with power is only a failing beacon.",
    choices: [
      { label: "Salvage the nearest hulk", skill: "engineering", outcomes: [
        { w: 70, text: "A day's cutting yields armour plate of an alloy your engineers want very much to understand.", fx: { m: 50, d: 1 } },
        { w: 30, text: "The hulk still carries live ordnance. One round goes off when the cutters touch it.", fx: { h: -20, d: 1 } } ] },
      { label: "Board the ship that still has power", skill: "science", outcomes: [
        { w: 50, text: "Its weapons computer is still running. What your people learn from it goes straight into the torpedo bay.", fx: { t: 2, f: 1 } },
        { w: 30, text: "A Kethari salvage crew is already aboard, and their escort is standing off behind the wreck.", fx: { fight: 0 } },
        { w: 20, text: "Its reactor has been ticking over for centuries. It gives up what it has left to the Explorer.", fx: { e: 150, f: 1 } } ] },
      { label: "Record the site and leave it in peace", skill: "science", outcomes: [
        { w: 100, text: "You map the field ship by ship. It is the largest find of its kind on record.", fx: { f: 1, d: 1 } } ] } ] },

  { id: "defector", title: "The defector",
    text: ["A Kethari shuttle drops out of warp with its weapons cold and its pilot already talking. He says he is a signals officer, that he knows where the Dominion's ships are stationed in this region, and that he wants asylum.",
      "He is either the best piece of luck of the voyage or the bait for something."],
    none: "The shuttle's drive fails mid-sentence and it tumbles away into a dust cloud. You never find it.",
    choices: [
      { label: "Bring him aboard", skill: "diplomacy", outcomes: [
        { w: 55, text: "He is what he says he is. By the end of the watch every Kethari position in the region is on your chart.", fx: { ket: 1, f: 1 } },
        { w: 45, text: "The shuttle is carrying a tracker. A gunship arrives before he has finished his first cup of tea.", fx: { fight: 1 } } ] },
      { label: "Make him send the data first", skill: "tactical", outcomes: [
        { w: 50, text: "He sends it, cursing your caution. The positions are real. He is gone before you can decide what to do with him.", fx: { ket: 1 } },
        { w: 50, text: "He breaks off and runs. An hour later you are dodging the patrol he called.", fx: { e: -70 } } ] },
      { label: "Destroy the shuttle", skill: "tactical", cost: { t: 1 }, outcomes: [
        { w: 70, text: "One torpedo is enough. There is a little worth recovering from what is left.", fx: { m: 15 } },
        { w: 30, text: "The shuttle was packed with explosives. The blast reaches the Explorer.", fx: { h: -10 } } ] } ] },

  { id: "drifters", title: "The drifters",
    text: ["A pod of creatures the size of cruisers is grazing on a gas cloud, slow and unbothered. Nobody has recorded anything like them.",
      "One of the smaller ones has taken an interest in the Explorer and is nudging the hull."],
    none: "The pod turns as one and slides away into the cloud before the instruments can get a clean reading.",
    choices: [
      { label: "Hold still and watch", skill: "science", outcomes: [
        { w: 70, text: "They sing, on frequencies the hull itself picks up. The recordings will keep a university busy for a generation.", fx: { f: 2 } },
        { w: 30, text: "The young one decides the Explorer is a toy. The science team gets its recordings and the hull gets a dent.", fx: { f: 1, h: -10 } } ] },
      { label: "Follow them to where they feed", skill: "piloting", cost: { e: 80 }, outcomes: [
        { w: 60, text: "They lead you to a pocket of gas so rich the collectors barely need extending.", fx: { e: 300 } },
        { w: 40, text: "They lead you into the heart of a storm they are built for and you are not.", fx: { sd: 2, h: -5 } } ] },
      { label: "Harvest the residue they leave", skill: "engineering", outcomes: [
        { w: 70, text: "What they leave behind is dense with rare metals, already half refined.", fx: { m: 35 } },
        { w: 30, text: "The residue eats through the collection scoops and starts on the hull before it is flushed.", fx: { m: 15, h: -10 } } ] } ] },

  { id: "plague", title: "The quarantine ship",
    text: ["A passenger liner is holding station under a quarantine beacon. Her doctor comes on the channel herself. They have a fever aboard, they are out of medical stores, and three ships have already passed them by."],
    none: "A relief ship arrives while you are still deciding. The liner's doctor thanks you for stopping, which is more than most did.",
    choices: [
      { label: "Send medical supplies across", skill: "medical", cost: { m: 20 }, outcomes: [
        { w: 75, text: "The supplies go over in a sealed pod. The liner's engineers, with nothing else to give, top up your reserves from their own.", fx: { e: 150 } },
        { w: 25, text: "The liner's navigator sends back the only thing she has: her charts of the region.", fx: { chart: 5 } } ] },
      { label: "Send a medical team aboard", skill: "medical", outcomes: [
        { w: 50, text: "Your people break the fever in two days. The liner's owners will hear of it, and her purser empties his lockers for you.", fx: { m: 40, t: 1, f: 1, d: 2 } },
        { w: 50, text: "The team brings the fever home. The Explorer sits under her own quarantine for three days with half the crew in their bunks.", fx: { d: 3, e: -80 } } ] },
      { label: "Keep your distance", skill: "tactical", outcomes: [
        { w: 65, text: "You pass by. The beacon follows you for a long time.", fx: { e: -20 } },
        { w: 35, text: "The beacon had drawn other attention. A Kethari raider, hunting stragglers, finds you instead.", fx: { fight: 0 } } ] } ] },

  { id: "gravity", title: "The gravity well",
    text: ["The deck tilts. Something small, dark and very heavy has hold of the Explorer, and it was not on any chart.",
      "The engineer wants to burn straight out. The helm thinks the ship can swing round it and be thrown clear, if the hull will take it."],
    none: "The pull slackens as suddenly as it came. Whatever it was has passed on.",
    choices: [
      { label: "Full burn, straight out", skill: "engineering", outcomes: [
        { w: 75, text: "The engines howl for six minutes and the ship crawls free.", fx: { e: -160 } },
        { w: 25, text: "The ship crawls free, but the strain opens a seam aft.", fx: { e: -160, h: -10 } } ] },
      { label: "Slingshot round it", skill: "piloting", outcomes: [
        { w: 55, text: "The helm threads it. The Explorer is flung clear at a speed her engines could never reach, to somewhere else entirely, and the readings from the slingshot are a discovery in themselves.", fx: { jump: 1, f: 1 } },
        { w: 45, text: "The hull was not built for it. You get clear with frames buckled along one side.", fx: { h: -20 } } ] },
      { label: "Dump cargo to lighten the ship", skill: "engineering", cost: { m: 30 }, outcomes: [
        { w: 100, text: "The cargo falls away into the dark and the lightened ship pulls free on a fraction of the power.", fx: { e: -40 } } ] } ] },

  { id: "oracle", title: "The old probe",
    text: ["A probe older than any spacefaring people you know of wakes as you approach. It speaks in your own language, learned from your own transmissions in the time it took you to arrive.",
      "It says it has watched this region for a very long time and will tell you what it has seen, if you will spare it the power to go on watching."],
    none: "The probe's voice slows, repeats a single word, and stops. Its long watch ended while you were listening.",
    choices: [
      { label: "Give it the power it asks for", skill: "diplomacy", cost: { e: 100 }, outcomes: [
        { w: 60, text: "It keeps its word. A map unfolds across the chart table, more complete than your own.", fx: { chart: 8, f: 1 } },
        { w: 40, text: "It answers in riddles about stars that burned out long ago. The linguists are thrilled. The navigator is not.", fx: { f: 1 } } ] },
      { label: "Take it apart", skill: "engineering", outcomes: [
        { w: 50, text: "Its workings are beyond you, but its materials are not, and its power cell fits a torpedo casing as if made for it.", fx: { m: 40, t: 1 } },
        { w: 50, text: "It had a last defence. The blast takes the workshop wall with it.", fx: { h: -15 } } ] },
      { label: "Leave it to its watch", skill: "science", outcomes: [
        { w: 100, text: "You log its position and its greeting. As you leave it sends one more thing, unasked: a warning about the sectors ahead.", fx: { chart: 2, f: 1 } } ] } ] },

  { id: "coolant", title: "Coolant leak",
    text: ["The chief engineer is on the bridge in person, which is never good. There is a coolant leak in the main loop. She wants the reactor shut down for two days to do the job properly.",
      "It can be patched on the run, she admits, with parts from stores and some luck."],
    none: "The leak turns out to be a faulty gauge. The chief goes back below without a word.",
    choices: [
      { label: "Shut down and do it properly", skill: "engineering", outcomes: [
        { w: 85, text: "Two quiet days. The loop is rebuilt, and the idle hands find a dozen other jobs that needed doing.", fx: { d: 2, h: 10 } },
        { w: 15, text: "A dark, drifting ship is easy prey. A Kethari raider finds you with the reactor barely relit.", fx: { d: 2, fight: 0 } } ] },
      { label: "Patch it on the run", skill: "engineering", cost: { m: 15 }, outcomes: [
        { w: 65, text: "The patch holds, and the chief's improvised bypass turns out to run better than the original.", fx: { me: 30 } },
        { w: 35, text: "The patch lets go under load and a third of a tank boils off into space.", fx: { e: -150 } } ] },
      { label: "Carry on and watch the gauges", skill: "piloting", outcomes: [
        { w: 50, text: "The helm flies cool and fast in a planet's shadow, so the leak never gets the chance to grow. The shortcut gains a day and charts the way.", fx: { e: -20, d: -1, chart: 3 } },
        { w: 50, text: "It gets worse halfway through the manoeuvre, and a third of a tank boils off before it is sealed.", fx: { e: -100 } } ] } ] },

  { id: "cache", title: "The smugglers' cache",
    text: ["A faint beacon leads to a hollowed asteroid and, inside it, a sealed container the size of a shuttle. The seal is Kethari. The lock is not: somebody stole this and hid it here."],
    none: "The container is empty. Whoever hid it came back first.",
    choices: [
      { label: "Crack the lock", skill: "engineering", outcomes: [
        { w: 60, text: "The lock gives after an hour. Inside are refined metals, stacked to the roof.", fx: { m: 60 } },
        { w: 25, text: "The lock was trapped. The charge takes the container and a piece of your hull.", fx: { h: -18 } },
        { w: 15, text: "The lock opens and a transmitter inside begins to scream. Its owners were closer than you would have liked.", fx: { m: 30, fight: 1 } } ] },
      { label: "Blast it open", skill: "tactical", cost: { t: 1 }, outcomes: [
        { w: 100, text: "The torpedo opens the container and ruins about half of what was in it. Nothing in there gets the chance to object.", fx: { m: 35 } } ] },
      { label: "Take it aboard unopened", skill: "diplomacy", outcomes: [
        { w: 80, text: "A sealed Kethari container is worth something to the right buyer, and a passing trader turns out to be one.", fx: { m: 25 } },
        { w: 20, text: "Whatever is in it is leaking. The hold has to be vented and scrubbed.", fx: { e: -60 } } ] } ] },

  { id: "lanterns", title: "The lanterns",
    text: ["A swarm of tiny ships, each no bigger than a lifeboat and glowing like a paper lantern, has formed up around the Explorer. They are flashing patterns at you. No one aboard has any idea what they mean.",
      "This is, as far as you know, first contact."],
    none: "The lanterns wink out one by one, as though a decision has been reached, and you are alone again.",
    choices: [
      { label: "Answer with the running lights", skill: "science", outcomes: [
        { w: 60, text: "Somebody on the bridge has an ear for rhythm. Within the hour the lanterns are answering back, and one of them presses a gift of stored power against the hull.", fx: { f: 2, e: 100 } },
        { w: 40, text: "Whatever you said, it was not polite. They swarm the scanner array and leave it dazzled.", fx: { f: 1, sd: 3 } } ] },
      { label: "Send them your star charts", skill: "diplomacy", outcomes: [
        { w: 70, text: "They understand maps. They send back their own, drawn in light.", fx: { chart: 7, f: 1 } },
        { w: 30, text: "They understand maps well enough to see their home on yours. They do not like it, and say so with their drives.", fx: { h: -10 } } ] },
      { label: "Back away slowly", skill: "piloting", outcomes: [
        { w: 100, text: "You withdraw with every light dimmed. They watch you go. At least you have the recordings.", fx: { f: 1, e: -30 } } ] } ] },

  { id: "mines", title: "The minefield",
    text: ["The scanner picks out the first mine a hundred metres off the bow, and then all the others. They are old Kethari area-denial mines, and the Explorer is already well inside the field."],
    none: "The mines are dead. Their power cells ran down years ago, and the Explorer drifts out among them untouched.",
    choices: [
      { label: "Creep out the way you came", skill: "piloting", outcomes: [
        { w: 75, text: "It takes a day of patient flying. On the way the helm picks up loose mine casings, worth stripping for parts.", fx: { d: 1, m: 20 } },
        { w: 25, text: "Most of the way out, a mine drifts across your path.", fx: { d: 2, h: -12 } } ] },
      { label: "Clear a lane with the lasers", skill: "tactical", cost: { e: 110 }, outcomes: [
        { w: 85, text: "The lasers pick them off one at a time. The casings are worth collecting on the way out.", fx: { m: 15 } },
        { w: 15, text: "One detonation sets off its neighbours, and the chain runs back toward the ship.", fx: { h: -20 } } ] },
      { label: "Bring one aboard for the armourer", skill: "engineering", outcomes: [
        { w: 50, text: "The armourer has it open and safe in an hour. Its warhead makes two good torpedoes.", fx: { t: 2 } },
        { w: 50, text: "It is not as dormant as it looked.", fx: { h: -25 } } ] } ] },

  { id: "hermit", title: "The hermit",
    text: ["An old prospector lives alone in a habitat bolted to an asteroid, and has done for thirty years. He is delighted to see you and suspicious of everything you say.",
      "He knows these sectors better than anyone alive, and he has opinions about the state of your solar collectors."],
    none: "He talks for three hours about a claim dispute from before you were born, and then falls asleep.",
    choices: [
      { label: "Trade for his maps", skill: "diplomacy", cost: { m: 20 }, outcomes: [
        { w: 100, text: "His maps are drawn by hand and are better than your own.", fx: { chart: 6 } } ] },
      { label: "Let him tune the collectors", skill: "engineering", outcomes: [
        { w: 70, text: "He spends a day on the hull with a spanner and a lot of muttering. The reactor holds more for it.", fx: { me: 40, d: 1 } },
        { w: 30, text: "His methods suit his own antique rig better than yours. A collector shorts out.", fx: { e: -80, d: 1 } } ] },
      { label: "Share a meal and move on", skill: "diplomacy", outcomes: [
        { w: 100, text: "He will not take payment for dinner, and he seals a weeping hull seam on his way back to the airlock.", fx: { h: 8 } } ] } ] },

  { id: "echo", title: "The echo",
    text: ["The communications officer has picked up a transponder signal dead ahead. It is the Explorer's own. The timestamp is tomorrow's.",
      "It carries a single line of text: do not go this way."],
    none: "The signal fades as you watch. The computer logs it as a sensor fault, and nobody on the bridge argues.",
    choices: [
      { label: "Follow the signal", skill: "science", outcomes: [
        { w: 50, text: "The ship passes through something that is not quite a place. When the clocks settle, they are three days slow against the stars, and the science team is speechless.", fx: { d: -3, f: 1 } },
        { w: 50, text: "The signal recedes as fast as you chase it. You burn a great deal of power catching nothing.", fx: { e: -120 } } ] },
      { label: "Record everything and analyse it", skill: "science", cost: { e: 30 }, outcomes: [
        { w: 70, text: "Whatever it was, you have the first clean recording of one.", fx: { f: 1 } },
        { w: 30, text: "The signal feeds back through the receivers and takes the scanner down with it.", fx: { sd: 2 } } ] },
      { label: "Take the warning and change course", skill: "piloting", outcomes: [
        { w: 60, text: "The new course leads past an old wreck nobody had found. Its stores are still sealed.", fx: { e: -40, m: 25 } },
        { w: 40, text: "Whatever sent the warning was right about the danger and wrong about the way round it.", fx: { fight: 0 } } ] } ] },

  { id: "comet", title: "The comet",
    text: ["A comet is passing, trailing a tail of ice rich in exactly what the reactor burns. It will be out of reach in two days."],
    none: "The comet breaks up as you match speed with it, and the ice scatters beyond collecting.",
    choices: [
      { label: "Mine it fast", skill: "engineering", outcomes: [
        { w: 70, text: "A day of hard work fills the tanks.", fx: { e: 180, d: 1 } },
        { w: 30, text: "A pocket of gas bursts under the mining rig and throws it against the hull.", fx: { e: 90, h: -10, d: 1 } } ] },
      { label: "Mine it slowly and refine as you go", skill: "engineering", outcomes: [
        { w: 100, text: "Two careful days. The tanks are full and the dross is worth keeping.", fx: { e: 200, m: 15, d: 2 } } ] },
      { label: "Fly through the tail", skill: "piloting", outcomes: [
        { w: 55, text: "The helm flies the tail's edge, where the ice is thickest. The collectors fill, and a few chunks of frozen ore come aboard too.", fx: { e: 120, m: 10 } },
        { w: 45, text: "The tail is full of grit as well as ice.", fx: { e: 30, h: -8 } } ] } ] },

  { id: "convoy", title: "The convoy",
    text: ["Three Kethari supply barges are crossing the sector, fat and slow. Their escort has fallen behind. By your reckoning you have about ten minutes."],
    none: "The barges are riding empty, on their way back from wherever they delivered. There is nothing here to take.",
    choices: [
      { label: "Board and raid the barges", skill: "tactical", outcomes: [
        { w: 55, text: "The barge crews do not argue. You are away with a hold full of Dominion stores, torpedoes among them, before the escort is in range.", fx: { m: 70, t: 2 } },
        { w: 45, text: "Your reckoning was wrong. The escort arrives with your boarding party still aboard the second barge.", fx: { m: 20, fight: 1 } } ] },
      { label: "Cripple them with torpedoes and scoop the spill", skill: "tactical", cost: { t: 2 }, outcomes: [
        { w: 80, text: "Two torpedoes, two broken barges, and a cloud of cargo to fly through on the way out.", fx: { m: 50 } },
        { w: 20, text: "The third barge is armed. It gets one good shot in as you pass.", fx: { m: 50, h: -10 } } ] },
      { label: "Shadow them home", skill: "piloting", cost: { e: 70 }, outcomes: [
        { w: 70, text: "They lead you past every Kethari position in the region, one after another, and never know you are there.", fx: { ket: 1 } },
        { w: 30, text: "The escort catches up and catches you watching.", fx: { fight: 1 } } ] },
      { label: "Let them pass", skill: "tactical", outcomes: [
        { w: 100, text: "You sit dark until they are gone. From their heading, the navigator works out a little of what lies that way.", fx: { chart: 2 } } ] } ] },

  { id: "garden", title: "The garden",
    text: ["The asteroid is hollow, and the hollow is green. Somebody built a garden here, sealed it, lit it and left, long enough ago that the trees have grown through the walkways.",
      "The air is good. There is fruit. In the middle of it all stands a console with a single lit control."],
    none: "You walk the garden for an hour. It asks nothing of you and gives nothing, and you leave it as you found it.",
    choices: [
      { label: "Rest the crew here", skill: "medical", outcomes: [
        { w: 100, text: "Two days under trees. The crew come back to the ship and fix things nobody had the heart to fix before.", fx: { d: 2, h: 15 } } ] },
      { label: "Gather what the garden offers", skill: "science", outcomes: [
        { w: 75, text: "Timber, fibre, fruit and seed. The quartermaster has never been so pleased.", fx: { m: 40 } },
        { w: 25, text: "The garden defends itself. Spores get into the ship's sensors and bloom there.", fx: { m: 20, sd: 2 } } ] },
      { label: "Press the control", skill: "science", outcomes: [
        { w: 50, text: "The console studies the Explorer for a long moment, and then quietly rewrites the way her reactor breathes.", fx: { me: 50, f: 1 } },
        { w: 30, text: "The garden's history plays out in the air around you: who built it, and why they left.", fx: { f: 2 } },
        { w: 20, text: "The asteroid seals itself. Cutting a way out takes most of a tank.", fx: { e: -130 } } ] } ] },

  /* Build 17: ten more encounters for open space and anomalies. */
  { id: "hospital", title: "The hospital ship",
    text: ["A white-hulled hospital ship is holding station with its lights dimmed. Its surgeon comes on the channel looking as if she has not slept in days. A mining accident filled her wards, and her one other doctor is among the injured.",
      "She is asking, plainly, for help."],
    none: "Before you can answer, a second hospital ship arrives to relieve her. She thanks you for stopping and signs off.",
    choices: [
      { label: "Lend her your doctor", skill: "medical", outcomes: [
        { w: 70, text: "Two days of surgery, and every patient lives. The hospital ship's captain fills your stores from his own and sends a sealed case of medical research with your doctor.", fx: { m: 30, f: 1, d: 2 } },
        { w: 30, text: "The work goes on for three days and not everyone can be saved. Your doctor comes home quiet, with a handful of supplies they would not take back.", fx: { m: 10, d: 3 } } ] },
      { label: "Share medical stores and move on", skill: "diplomacy", cost: { m: 20 }, outcomes: [
        { w: 80, text: "The stores go across in a sealed pod. The hospital ship's engineers top up your reserves in return.", fx: { e: 150 } },
        { w: 20, text: "The pod is gratefully received. Nothing comes back but thanks.", fx: {} } ] },
      { label: "Repair her failing generators", skill: "engineering", outcomes: [
        { w: 65, text: "With her power steady, the surgeon can work without rationing. The captain sends over spare plating he will not need.", fx: { h: 10, m: 15 } },
        { w: 35, text: "The generators are older than your engineers expected. The repair holds, at a cost in your own power.", fx: { e: -90 } } ] } ] },

  { id: "frozen", title: "The frozen crew",
    text: ["A lifeboat drifts across your path, its hull white with frost. Inside, six people lie in cold-sleep pods. Two of the pods are already dark, and the rest are failing one by one."],
    none: "By the time the Explorer matches course, the last pod has gone dark. You record the lifeboat's markings and let it drift.",
    choices: [
      { label: "Wake them carefully", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor brings all four survivors out of cold sleep. They were the crew of a survey ship, and they give you everything in their navigation logs.", fx: { chart: 5, f: 1 } },
        { w: 35, text: "Waking from failing pods is brutal. Two survivors make it. They have little to give, and the work costs your medical stores.", fx: { m: -10, d: 1 } } ] },
      { label: "Keep the pods running and tow it", skill: "engineering", outcomes: [
        { w: 70, text: "Your engineers patch the pods into the Explorer's power, and the lifeboat comes along behind. Its crew wake at a starbase later and send a reward.", fx: { e: -60, m: 35 } },
        { w: 30, text: "The tow line snaps under the strain. The lifeboat is recovered, but the pods draw more power than planned.", fx: { e: -130 } } ] },
      { label: "Study the pods' design", skill: "science", outcomes: [
        { w: 70, text: "The pods are a design nobody has seen in a century, and remarkably efficient. The science team learns a great deal before passing the lifeboat to the next patrol.", fx: { f: 1 } },
        { w: 30, text: "Studying them takes a day the sleepers did not have.", fx: { d: 1 } } ] } ] },

  { id: "spores", title: "The spore cloud",
    text: ["A faint green haze drifts across the bow. It is alive: spores, billions of them, and they are settling on the hull and finding their way into the air vents."],
    none: "The haze thins and is gone before it reaches the ship.",
    choices: [
      { label: "Have medical test the crew", skill: "medical", outcomes: [
        { w: 70, text: "The spores are harmless to people, and your doctor finds they make a useful antiseptic. The medical stores are better for it.", fx: { f: 1, m: 15 } },
        { w: 30, text: "A third of the crew come down with a rash and a fever. It passes in two days, but the ship runs short-handed until then.", fx: { d: 2 } } ] },
      { label: "Seal the vents and burn them off", skill: "engineering", outcomes: [
        { w: 75, text: "The vents are sealed and the hull is heated until the spores crisp and fall away.", fx: { e: -70 } },
        { w: 25, text: "The heat clears the spores but warps a stretch of plating.", fx: { e: -70, h: -6 } } ] },
      { label: "Outrun the cloud", skill: "piloting", outcomes: [
        { w: 60, text: "A hard burn takes the Explorer clear before the spores can settle, through sectors nobody has charted, and a day ahead of plan.", fx: { e: -40, chart: 4, d: -1 } },
        { w: 40, text: "The cloud is wider than it looked. The ship gets clear, but the spores in the scanner housings have to be cleaned out by hand.", fx: { e: -50, sd: 2 } } ] } ] },

  { id: "breeders", title: "The gift that grows",
    text: ["A trader at the last stop gave the deck crew a small, warm, purring creature as a gift. This morning there are eleven of them. By evening there are forty, and they are eating their way through the stores."],
    none: "The creatures fall asleep all at once, in a heap in the cargo bay, and never wake. Nobody is sure whether to be sad.",
    choices: [
      { label: "Find what makes them breed", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor finds that the creatures breed when they are overfed. On short rations they settle down, and the crew keep a few as pets.", fx: { m: -10, f: 1 } },
        { w: 30, text: "By the time the answer is found, they have eaten into the stores badly.", fx: { m: -25, f: 1 } } ] },
      { label: "Give them away at the next contact", skill: "diplomacy", outcomes: [
        { w: 65, text: "A passing freighter's crew are delighted to take them, and pay in parts.", fx: { m: 20 } },
        { w: 35, text: "Nobody wants them. You go out of your way for two days trying.", fx: { d: 2, m: -15 } } ] },
      { label: "Seal the bay and move them out", skill: "engineering", outcomes: [
        { w: 60, text: "The engineers rig a sealed cargo pod, the creatures go into it, and it is left at a buoy with a note.", fx: { e: -40 } },
        { w: 40, text: "They are in the air ducts. Clearing them takes a day.", fx: { d: 1, m: -10 } } ] } ] },

  { id: "loop", title: "The same hour again",
    text: ["The ship's clock reads the same time it did an hour ago. So does the log. The crew are having the same conversations, and some of them are starting to notice.",
      "The Explorer is caught in a loop, and every pass through it costs a little more power."],
    none: "On the next pass the loop simply lets go. Nobody can say why.",
    choices: [
      { label: "Find the edge of the loop", skill: "science", outcomes: [
        { w: 60, text: "On the fourth pass the science team leaves itself a message in the sensor buffer, and on the fifth it finds the way out.", fx: { e: -80, f: 1 } },
        { w: 40, text: "It takes eleven passes. The crew are exhausted, and the reserves are worse.", fx: { e: -200, d: 1 } } ] },
      { label: "Keep the crew steady through it", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor spots who remembers the earlier passes and pieces their memories together. The way out is in what they remember.", fx: { e: -60, f: 1 } },
        { w: 35, text: "Some of the crew cannot cope with living the same hour over and over. Getting everyone fit again takes a day after the loop breaks.", fx: { e: -100, d: 1 } } ] },
      { label: "Burn straight through it", skill: "piloting", outcomes: [
        { w: 50, text: "Full power, one heading, no hesitation. The Explorer bursts out of the loop with a day to spare, and the sensors bring back a clean record of how it held the ship.", fx: { e: -80, d: -1, f: 1 } },
        { w: 50, text: "The burn feeds the loop for a while before it finally lets go. The reserves have paid for it.", fx: { e: -150 } } ] } ] },

  { id: "fever", title: "Ship's fever",
    text: ["The sick bay is full by morning. A fever is moving through the Explorer's crew, and nobody knows where it came from."],
    none: "By evening the fever breaks, as quickly as it came. Nobody ever finds the cause.",
    choices: [
      { label: "Let the doctor run it to ground", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor traces it to contaminated water in one tank, flushes it, and has the crew on their feet in a day. The treatment is worth writing up.", fx: { d: 1, f: 1 } },
        { w: 30, text: "The fever runs its course before a cause is found. Three days with half the crew in their bunks.", fx: { d: 3, e: -40 } } ] },
      { label: "Trace the source in the ship's systems", skill: "science", outcomes: [
        { w: 60, text: "The science team finds a mould in the air filters and replaces them. The fever is gone in two days.", fx: { d: 2, m: -10 } },
        { w: 40, text: "The search turns up nothing, and the scanner team is pulled off its work to help.", fx: { d: 2, sd: 2 } } ] },
      { label: "Confine the sick and carry on", skill: "tactical", outcomes: [
        { w: 50, text: "The fever burns out in quarantine. The ship never stops working.", fx: { d: 1 } },
        { w: 50, text: "It spreads anyway. The Explorer drifts for three days with a skeleton crew.", fx: { d: 3, e: -60 } } ] } ] },

  { id: "lightbeing", title: "The visitor of light",
    text: ["A shimmer of light passes through the hull as if it were not there and drifts down the corridors. It stops beside your engineer, and then it goes into her. She turns, and speaks in a voice that is not hers. It wants to know what you are."],
    none: "The light leaves her as gently as it came and passes back out through the hull. She remembers nothing.",
    choices: [
      { label: "Keep the engineer alive while it speaks", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor watches her vital signs while the being asks its questions. When it leaves, she is unharmed, and it has left something behind in the reactor: more capacity than the ship was built with.", fx: { me: 50 } },
        { w: 40, text: "The strain on her body is severe. The being leaves when your doctor insists, and she needs days of rest.", fx: { d: 1 } } ] },
      { label: "Try to talk with it", skill: "science", outcomes: [
        { w: 65, text: "It is old, curious and harmless. In return for your answers it shows the science team a map of its own long journey.", fx: { f: 1, chart: 4 } },
        { w: 35, text: "The conversation goes nowhere, and the being drains power as it talks.", fx: { e: -100 } } ] },
      { label: "Drive it out with the shields", skill: "tactical", outcomes: [
        { w: 55, text: "Reversed shield emitters make the ship uncomfortable for it, and it leaves.", fx: { e: -60 } },
        { w: 45, text: "It leaves angry, and the ship's systems flicker for days.", fx: { e: -60, sd: 2 } } ] } ] },

  { id: "wounded", title: "The wounded enemy",
    text: ["A Kethari gunship hangs crippled in space, venting air. Its weapons are dead, and its crew are calling for help on an open channel. They know who you are."],
    none: "The gunship's reactor fails while you are still deciding. There is nothing left to help.",
    choices: [
      { label: "Send the doctor across", skill: "medical", outcomes: [
        { w: 55, text: "Your doctor saves most of the Kethari crew. Their commander, against every order she has, tells you where the Dominion's ships are stationed.", fx: { ket: 1, f: 1 } },
        { w: 45, text: "The rescue goes well until a Kethari warship arrives to collect its own. It does not wait for explanations.", fx: { fight: 1 } } ] },
      { label: "Take their stores and leave them", skill: "tactical", outcomes: [
        { w: 70, text: "The boarding party strips the gunship's stores while its crew watch.", fx: { m: 40, t: 1 } },
        { w: 30, text: "One of the crew still has a working weapon, and uses it.", fx: { m: 20, h: -8 } } ] },
      { label: "Negotiate their surrender", skill: "diplomacy", outcomes: [
        { w: 60, text: "They surrender their ship's logs in return for a tow to a neutral buoy.", fx: { chart: 5, e: -50 } },
        { w: 40, text: "They refuse, and scuttle the gunship rather than give in.", fx: { h: -5 } } ] } ] },

  { id: "seedvault", title: "The seed vault",
    text: ["A sealed cylinder drifts on a slow tumble, covered in warnings in a dozen languages. Inside, according to its beacon, are frozen seeds and cultures from a world that no longer exists."],
    none: "The vault's beacon dies as you approach, and with it the way to open the door.",
    choices: [
      { label: "Catalogue the cultures", skill: "medical", outcomes: [
        { w: 70, text: "Among the cultures are bacteria that make medicines nobody has seen. Your doctor takes samples and leaves the vault sealed.", fx: { f: 2 } },
        { w: 30, text: "Some of the cultures are dangerous. The lab is sealed and scrubbed, which takes a day.", fx: { f: 1, d: 1 } } ] },
      { label: "Study the seed bank", skill: "science", outcomes: [
        { w: 70, text: "A record of a whole world's plant life. The science team copies the catalogue before the vault is sent on its way.", fx: { f: 1, chart: 2 } },
        { w: 30, text: "The vault's defences take your probe for a thief and fry it.", fx: { e: -40, sd: 2 } } ] },
      { label: "Salvage its power plant", skill: "engineering", outcomes: [
        { w: 60, text: "The vault's reactor is small and nearly new. Fitted to the Explorer, it adds to the reserves.", fx: { me: 40 } },
        { w: 40, text: "The reactor is harder to free than it looks. It costs you power to cut it loose.", fx: { e: -70, m: 15 } } ] } ] },

  { id: "rift", title: "The ship from tomorrow",
    text: ["A rift tears open off the bow, and a ship limps out of it. It is the Explorer: the same hull, the same markings, scorched and holed. Its captain's voice on the channel is your own, older and very tired.",
      "Her crew are hurt. She says she has come back to warn you, and that there is not much time before the rift closes."],
    none: "The rift folds shut with the other Explorer still inside it. The sensors keep no record that it was ever there.",
    choices: [
      { label: "Send the doctor to treat her crew", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor treats people they will one day be, which nobody aboard wants to talk about afterwards. In thanks, the other captain hands over her charts of where the Dominion will be.", fx: { ket: 1, f: 1 } },
        { w: 40, text: "The rift begins to close with your doctor still aboard the other ship. They get back with seconds to spare, shaken and empty-handed.", fx: { d: 1 } } ] },
      { label: "Listen to the warning", skill: "diplomacy", outcomes: [
        { w: 65, text: "She tells you which sectors to avoid and why. The details check out against your own charts.", fx: { chart: 6 } },
        { w: 35, text: "Half of what she says contradicts the other half. Time has not been kind to her memory.", fx: { chart: 2, d: 1 } } ] },
      { label: "Study the rift before it closes", skill: "science", outcomes: [
        { w: 60, text: "The readings are unlike anything recorded. The science team will be arguing about them for years.", fx: { f: 2 } },
        { w: 40, text: "The rift snaps shut on the probe and takes part of the sensor array with it.", fx: { f: 1, sd: 3 } } ] } ] },

  /* Build 19: thirty more encounters for open space and anomalies, built on classic science fiction themes. */
  { id: "otherself", title: "The other Explorer",
    text: ["A ship drops out of warp alongside: the Explorer, down to the last scratch on the hull, except that its running lights burn red. Its captain wears your face and smiles like someone who has never lost an argument.",
      "Where it comes from, the Dominion won long ago, and the Explorer serves it."],
    none: "The other ship flickers and is gone, as if whatever held the two places together had let go.",
    choices: [
      { label: "Trade information, carefully", skill: "diplomacy", outcomes: [
        { w: 55, text: "Each captain gives a little and watches the other closely. What you learn about the Kethari is worth the unease.", fx: { ket: 1 } },
        { w: 45, text: "Your double was never going to trade fairly. The data it sent wipes part of your own charts.", fx: { sd: 3 } } ] },
      { label: "Raise shields and keep your distance", skill: "tactical", outcomes: [
        { w: 70, text: "It probes your shields once, finds them ready, and leaves without a word.", fx: { e: -60 } },
        { w: 30, text: "It fires a single volley, as if to see what you would do, then vanishes.", fx: { h: -10 } } ] },
      { label: "Study how it crossed over", skill: "science", outcomes: [
        { w: 60, text: "The readings show exactly how two versions of the same space can touch. A remarkable discovery.", fx: { f: 2 } },
        { w: 40, text: "The other ship notices the scan and jams your sensors on the way out.", fx: { f: 1, sd: 2 } } ] } ] },

  { id: "worldship", title: "The world inside the ship",
    text: ["A vast, slow ship has been travelling for six hundred years. Its people have forgotten that it is a ship. To them, the hull is the edge of the world, and anyone who talks about stars is a heretic.",
      "Its engines are failing, and nobody aboard knows how to fix them."],
    none: "The ship's people seal their airlocks against you, and you have no right to force them open.",
    choices: [
      { label: "Repair the engines quietly", skill: "engineering", outcomes: [
        { w: 60, text: "Your engineers work in the ship's forgotten machine halls for two days. The engines run again, and the ship's elders leave payment at the airlock without ever asking who you are.", fx: { m: 40, d: 2 } },
        { w: 40, text: "The repair half works. It will hold for a few more generations, which is more than they had.", fx: { m: 10, d: 2 } } ] },
      { label: "Treat the sickness spreading in their villages", skill: "medical", outcomes: [
        { w: 70, text: "A simple fever, deadly with no medicine. Your doctor stops it, and the ship's healers give you their records of six hundred years of travel.", fx: { chart: 5, f: 1 } },
        { w: 30, text: "The treatment works, but the villagers think your doctor is a spirit, and the visit takes much longer than planned.", fx: { d: 2, f: 1 } } ] },
      { label: "Tell them the truth about their world", skill: "diplomacy", outcomes: [
        { w: 45, text: "Their young people take it well, and some of them come aboard to see the stars. They trade what they can.", fx: { m: 25, f: 1 } },
        { w: 55, text: "Their elders do not. You are asked, firmly, to leave.", fx: {} } ] } ] },

  { id: "lonelymind", title: "The lonely mind",
    text: ["The computer of a derelict cruiser is still awake, and very glad to see you. Its crew died long ago. It would like to come with you: to copy itself into the Explorer's systems, just a small part of it, and be useful."],
    none: "Its power runs out mid-sentence. You never learn what it was going to say.",
    choices: [
      { label: "Let it in, behind firewalls", skill: "science", outcomes: [
        { w: 55, text: "It keeps to its corner and quietly retunes the reactor until the ship holds more power than it was built to.", fx: { me: 60 } },
        { w: 45, text: "It is not as small as it said. Purging it takes a day and costs the scanner its memory.", fx: { d: 1, sd: 3 } } ] },
      { label: "Take its ship's stores instead", skill: "engineering", outcomes: [
        { w: 70, text: "It does not mind. It even opens the doors for you.", fx: { m: 40, t: 1 } },
        { w: 30, text: "It minds very much, and seals the cargo bay with your boarding party inside for an hour.", fx: { m: 15 } } ] },
      { label: "Talk with it for a while", skill: "diplomacy", outcomes: [
        { w: 75, text: "It has had no one to talk to in two hundred years. In thanks for the company, it shares its ship's charts.", fx: { chart: 6 } },
        { w: 25, text: "It talks for a day and a half and does not stop.", fx: { d: 1, chart: 2 } } ] } ] },

  { id: "collector", title: "The collector",
    text: ["The stars outside go out, one by one, and are replaced by walls. The Explorer is inside something enormous, alongside ships of a dozen kinds, each in its own lit enclosure. A calm voice explains that you are now part of a collection, and will be well looked after."],
    none: "The voice decides that the Explorer is not interesting enough after all, and the stars come back.",
    choices: [
      { label: "Find a way out of the enclosure", skill: "engineering", outcomes: [
        { w: 55, text: "The walls are projections over a field generator. Your engineers find its rhythm and the Explorer slips out between pulses.", fx: { e: -100, f: 1 } },
        { w: 45, text: "Three days of trying. In the end the collector lets you go, bored with your efforts.", fx: { d: 3, e: -60 } } ] },
      { label: "Convince it the crew will not thrive here", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor explains, at length and with charts, how the crew would sicken and die in captivity. The collector is horrified and releases you with apologies and gifts.", fx: { m: 30, f: 1 } },
        { w: 40, text: "The collector offers to change the air, the light and the food instead. It takes two days to persuade it otherwise.", fx: { d: 2 } } ] },
      { label: "Free the other ships too", skill: "tactical", outcomes: [
        { w: 45, text: "Your security officer finds the controls, and every enclosure opens at once. The grateful captains share what they have.", fx: { m: 40, chart: 3 } },
        { w: 55, text: "The collector notices and is not pleased. You are put out of the collection rather hard.", fx: { h: -12 } } ] } ] },

  { id: "judge", title: "The judge",
    text: ["Everyone on the bridge hears the same voice at once. It belongs to something very old and very powerful, and it has decided that the Explorer's people are to be tested, to see whether they are worth letting go further into the dark."],
    none: "The voice loses interest mid-sentence. You decide not to remind it.",
    choices: [
      { label: "Answer its questions honestly", skill: "diplomacy", outcomes: [
        { w: 60, text: "It asks why you came out here, and listens. It seems satisfied, and leaves a gift in the reactor.", fx: { me: 50 } },
        { w: 40, text: "It does not like your answers, and takes a day of your lives to think about them.", fx: { d: 2 } } ] },
      { label: "Show it how the crew care for each other", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor walks it through the sick bay, the injuries treated and the lives saved. It is moved, as far as such a thing can be.", fx: { f: 1, h: 10 } },
        { w: 35, text: "It finds the subject dull and turns to other questions.", fx: { d: 1 } } ] },
      { label: "Refuse to be judged", skill: "tactical", outcomes: [
        { w: 40, text: "It finds the refusal amusing, and lets you go.", fx: {} },
        { w: 60, text: "It finds the refusal rude, and throws the Explorer across the galaxy to think about it.", fx: { jump: 1 } } ] } ] },

  { id: "shell", title: "The shell around a star",
    text: ["Where the chart shows a star, there is only darkness. Something has built a shell around it: a sphere wider than a planet's orbit, its surface patterned with continents of machinery. A door in it is open."],
    none: "The door closes as you approach. Whatever lives inside does not want visitors today.",
    choices: [
      { label: "Fly inside", skill: "piloting", outcomes: [
        { w: 55, text: "Inside, sunlight falls on an inner surface the size of a thousand worlds. You leave with readings, ore from a dockside and a sense of how small you are.", fx: { f: 2, m: 20 } },
        { w: 45, text: "The way back out is not where the way in was. It takes two days to find it.", fx: { d: 2, f: 1 } } ] },
      { label: "Study the shell from outside", skill: "science", outcomes: [
        { w: 75, text: "The engineering is beyond anything known. The science team fills every drive it has.", fx: { f: 2 } },
        { w: 25, text: "The shell's defences take the scan as an attack and blind the sensors.", fx: { f: 1, sd: 3 } } ] },
      { label: "Tap the light leaking from the seams", skill: "engineering", outcomes: [
        { w: 65, text: "The collectors drink sunlight from the seams until the reserves are full.", fx: { e: 300 } },
        { w: 35, text: "The seam closes on the collector arm.", fx: { e: 80, h: -8 } } ] } ] },

  { id: "traveller", title: "The traveller",
    text: ["A cylinder the length of a small moon is passing through the galaxy at speed, silent and dark. It has no engines that anyone can see, and it has not answered any signal in recorded history."],
    none: "It is gone before the Explorer can match course. The sensors record only its wake.",
    choices: [
      { label: "Match speed and land on it", skill: "piloting", outcomes: [
        { w: 55, text: "The landing is perfect. A hatch opens for the boarding party, and inside are halls of strange metal and one small room full of ore.", fx: { m: 45, f: 1 } },
        { w: 45, text: "Matching its speed costs far more than planned, and the hatch never opens.", fx: { e: -180 } } ] },
      { label: "Scan it as it passes", skill: "science", outcomes: [
        { w: 70, text: "Hours of readings as it slides past. Nobody will understand them for years.", fx: { f: 2 } },
        { w: 30, text: "The traveller scans you back, and your sensors do not like it.", fx: { f: 1, sd: 2 } } ] },
      { label: "Follow its course backwards", skill: "piloting", outcomes: [
        { w: 60, text: "Its path leads through a region nobody has charted. Following it fills in the map.", fx: { chart: 6, d: 1 } },
        { w: 40, text: "The path leads nowhere in particular.", fx: { d: 1 } } ] } ] },

  { id: "leviathan", title: "The leviathan",
    text: ["The thing ahead is not an asteroid. It is alive, and it is a mile long, and before the helm can react it opens a mouth like a canyon and swallows the Explorer whole."],
    none: "The creature coughs the Explorer back out, apparently by mistake, and swims on.",
    choices: [
      { label: "Make it sneeze", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor suggests an irritant in the exhaust. The leviathan heaves, and the Explorer shoots out into open space with a hull coated in something valuable.", fx: { m: 35, f: 1 } },
        { w: 40, text: "It works, eventually, after a day of the creature's digestion working on the hull.", fx: { h: -10, d: 1 } } ] },
      { label: "Fly out the long way", skill: "piloting", outcomes: [
        { w: 50, text: "The helm threads the creature's insides and finds the other end. On the way, the scoops fill with minerals it has swallowed over the centuries.", fx: { e: -60, m: 30 } },
        { w: 50, text: "The insides are longer than anyone thought.", fx: { e: -150, h: -6 } } ] },
      { label: "Cut your way out", skill: "tactical", outcomes: [
        { w: 60, text: "The lasers make short work of it. The creature lets you go and swims off, wounded but alive.", fx: { e: -60 } },
        { w: 40, text: "The creature thrashes, and the Explorer is thrown hard against the walls.", fx: { e: -60, h: -14 } } ] } ] },

  { id: "lostdays", title: "The missing days",
    text: ["The crew wake at their stations, all at once, with no memory of falling asleep. The clock says three days have passed. The log for those three days is empty, and there are marks on the hull that were not there before."],
    none: "Nothing more can be learned. Some of the crew are relieved.",
    choices: [
      { label: "Examine the crew", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor finds tiny traces of a sedative and a tracking implant in every crew member. The implants come out, and teach the science team a great deal.", fx: { f: 2, d: 3 } },
        { w: 40, text: "There is nothing to find. Whoever took those days left no marks on the crew at all.", fx: { d: 3 } } ] },
      { label: "Reconstruct where the ship went", skill: "science", outcomes: [
        { w: 55, text: "The engine logs show where the ship travelled, and someone else's charts were left in the navigation buffer.", fx: { d: 3, chart: 6 } },
        { w: 45, text: "The logs were wiped clean, and so was a good deal of the energy reserve.", fx: { d: 3, e: -120 } } ] },
      { label: "Check the hold", skill: "tactical", outcomes: [
        { w: 50, text: "Someone left something behind: crates of materials, neatly stacked, with no explanation.", fx: { d: 3, m: 50 } },
        { w: 50, text: "Someone took something: a torpedo and some stores are gone.", fx: { d: 3, t: -1, m: -15 } } ] } ] },

  { id: "swapped", title: "Changed places",
    text: ["After an odd surge from an alien buoy, your engineer insists she is the science officer, and your science officer is in the engine room, baffled by the controls. Their minds have changed places."],
    none: "By the next watch they have swapped back, and neither wants to talk about it.",
    choices: [
      { label: "Find a medical way to reverse it", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor finds the pattern the buoy used and reverses it. Both officers wake in their own bodies, and the method is a discovery in its own right.", fx: { f: 2, d: 1 } },
        { w: 40, text: "The reversal takes two days of careful work and a great deal of patience.", fx: { d: 2 } } ] },
      { label: "Return to the buoy and use it again", skill: "science", outcomes: [
        { w: 65, text: "A second pulse from the buoy puts them back, and the science team takes the buoy apart afterwards.", fx: { f: 1, m: 20 } },
        { w: 35, text: "The second pulse swaps them back and blinds the sensors for good measure.", fx: { sd: 2 } } ] },
      { label: "Let them work as they are", skill: "engineering", outcomes: [
        { w: 45, text: "Each one, seeing the other's work from inside, finds a better way of doing it. They swap back on their own a day later.", fx: { me: 30, d: 1 } },
        { w: 55, text: "A science officer running an engine room goes about as well as you would expect.", fx: { e: -100, h: -5 } } ] } ] },

  { id: "shifter", title: "The stranger aboard",
    text: ["The quartermaster has been seen in two places at once. A security camera shows a crew member walking through a bulkhead. Something aboard the Explorer can take any shape it likes, and it is wearing one of the crew."],
    none: "Whatever it was leaves at the next buoy. The real quartermaster is found asleep in a store room, unharmed.",
    choices: [
      { label: "Test every crew member's blood", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor tests the whole crew, one by one. The creature, found out, leaves through an airlock, and its discarded shape turns out to be valuable.", fx: { f: 1, m: 20, d: 1 } },
        { w: 35, text: "The tests work, but it takes two days to test everyone and the creature leaves before the end.", fx: { d: 2 } } ] },
      { label: "Lock down the ship and search", skill: "tactical", outcomes: [
        { w: 55, text: "Security corners it in the cargo bay. It leaves the ship, and leaves a gift behind as an apology.", fx: { m: 30 } },
        { w: 45, text: "It does not like being cornered. Several systems are damaged before it gets away.", fx: { h: -8, sd: 2 } } ] },
      { label: "Try to talk to it", skill: "diplomacy", outcomes: [
        { w: 50, text: "It was frightened and hiding. It tells you where it came from, and the way there.", fx: { chart: 4, f: 1 } },
        { w: 50, text: "It will not talk. It simply leaves.", fx: {} } ] } ] },

  { id: "chorus", title: "The chorus",
    text: ["A fleet of identical ships surrounds the Explorer, and a thousand voices speak as one. They are a single mind spread across many bodies, and they would like you to join them. They promise there is no loneliness in the chorus, and no fear."],
    none: "The chorus decides you are not ready, and moves on as one.",
    choices: [
      { label: "Decline, very politely", skill: "diplomacy", outcomes: [
        { w: 65, text: "The chorus accepts. It finds individuals puzzling, and pays you in ore for the chance to study one.", fx: { m: 35 } },
        { w: 35, text: "It does not understand the word no. You have to run.", fx: { e: -120 } } ] },
      { label: "Shield the crew's minds", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor finds a way to dull the chorus's voice in every head aboard. Unable to persuade, it loses interest.", fx: { f: 1 } },
        { w: 40, text: "Some of the crew hear it anyway, and need care for days afterwards.", fx: { d: 2 } } ] },
      { label: "Break through their formation", skill: "piloting", outcomes: [
        { w: 55, text: "The helm finds a gap and the Explorer is through before the chorus can close it, carrying a recording of the chorus's own navigation net.", fx: { e: -60, chart: 5, f: 1 } },
        { w: 45, text: "The gap closes on your tail.", fx: { e: -60, h: -12 } } ] } ] },

  { id: "watchers", title: "The watchers' rule",
    text: ["A world below has cities and railways but no starships. Its astronomers have just spotted the Explorer, and the planet's radio is full of excitement and fear.",
      "Every spacefaring people you know follows the same rule: do not interfere with a world that has not yet left it."],
    none: "Clouds roll in over the observatories. By the time they clear, the Explorer is a rumour.",
    choices: [
      { label: "Leave quietly", skill: "piloting", outcomes: [
        { w: 80, text: "The Explorer slips behind the moon and is gone. In a hundred years, they will tell stories about tonight.", fx: { f: 1 } },
        { w: 20, text: "Leaving quietly means leaving slowly.", fx: { d: 1 } } ] },
      { label: "Study them from a distance", skill: "science", outcomes: [
        { w: 65, text: "Weeks of careful observation from behind the moon. A whole civilisation, recorded and untouched.", fx: { f: 2, d: 2 } },
        { w: 35, text: "They spot the Explorer again, and the science team decides it is time to go.", fx: { f: 1 } } ] },
      { label: "Answer their signal", skill: "diplomacy", outcomes: [
        { w: 40, text: "A careful, simple greeting. They are thrilled, and send a reply full of their maps of the sky.", fx: { chart: 4 } },
        { w: 60, text: "The planet's governments panic, and so does your conscience. Nothing good comes of it.", fx: { d: 1 } } ] } ] },

  { id: "blackflag", title: "The black flag",
    text: ["Three patched-together ships fan out around the Explorer, guns run out. Their leader wears a coat older than she is and wants half your stores, or she will take all of them."],
    none: "A Kethari patrol appears on the edge of sensors, and the pirates scatter without a word.",
    choices: [
      { label: "Pay them off", skill: "diplomacy", cost: { m: 30 }, outcomes: [
        { w: 80, text: "She takes the materials and, being a pirate of her word, tells you where the Kethari are laying an ambush.", fx: { ket: 1 } },
        { w: 20, text: "She takes the materials and leaves. That is all.", fx: {} } ] },
      { label: "Call her bluff", skill: "tactical", outcomes: [
        { w: 55, text: "She was bluffing. With a grin she salutes and leaves you a crate as a tip for the nerve.", fx: { m: 20 } },
        { w: 45, text: "She was not bluffing.", fx: { h: -15, m: -10 } } ] },
      { label: "Outrun them", skill: "piloting", outcomes: [
        { w: 60, text: "Patched ships, patched engines. To keep up, the pirates dump cargo, and the Explorer scoops it up once they give up the chase.", fx: { e: -80, m: 30 } },
        { w: 40, text: "One of them has a very good engine.", fx: { e: -80, h: -8 } } ] } ] },

  { id: "casino", title: "The house always wins",
    text: ["A station glitters in the dark, lit up like a festival. It is a gambling house, and its owner invites the Explorer's captain to a single game. The stakes are a hold full of ore, against one of your torpedoes."],
    none: "The station's lights go out for the night. The game will have to wait.",
    choices: [
      { label: "Play, and have science count the cards", skill: "science", outcomes: [
        { w: 55, text: "The science officer spots the pattern in the shuffling machine, and the captain plays it perfectly.", fx: { m: 50 } },
        { w: 45, text: "The house always wins.", fx: { t: -1 } } ] },
      { label: "Play, and let the commander read the owner", skill: "diplomacy", outcomes: [
        { w: 55, text: "The commander can tell exactly when the owner is bluffing. The hold fills with ore.", fx: { m: 50 } },
        { w: 45, text: "The owner has no tells at all.", fx: { t: -1 } } ] },
      { label: "Decline and trade instead", skill: "engineering", outcomes: [
        { w: 80, text: "The station needs its generators looked at, and pays in ore for the work.", fx: { m: 25 } },
        { w: 20, text: "The generators are rigged. The repairs cost you more than they earn.", fx: { e: -60, m: 10 } } ] } ] },

  { id: "ghostship", title: "The ship that should not be",
    text: ["A sailing ship of wood and canvas drifts in vacuum, lanterns burning on its decks. It cannot exist. The sensors insist it does. A figure at the wheel raises a hand in greeting."],
    none: "When you look again, there is nothing there at all.",
    choices: [
      { label: "Board it", skill: "tactical", outcomes: [
        { w: 50, text: "The decks are solid. The hold is full of something like gold. When the boarding party returns, the ship is gone, but the gold is not.", fx: { m: 45 } },
        { w: 50, text: "The boarding party comes back a day older than they left, and empty-handed.", fx: { d: 1 } } ] },
      { label: "Study it", skill: "science", outcomes: [
        { w: 60, text: "It is an echo of a ship that sank on a world very far away, carried here by something nobody understands. A discovery, and an eerie one.", fx: { f: 2 } },
        { w: 40, text: "The instruments refuse to agree with each other, and then refuse to work at all.", fx: { sd: 2 } } ] },
      { label: "Hail the figure at the wheel", skill: "diplomacy", outcomes: [
        { w: 60, text: "It points, once, toward a sector you have not charted. Following its direction finds a field of good ore.", fx: { chart: 3, m: 25 } },
        { w: 40, text: "It does not answer. It never answers.", fx: {} } ] } ] },

  { id: "doomsday", title: "The sleeping weapon",
    text: ["Something the size of a city sits dormant in the dark: a hollow cone of armour with a maw at one end. It was built, long ago, to destroy worlds. It is beginning to wake up."],
    none: "Its systems flicker and go dark again. Perhaps it will sleep another thousand years.",
    choices: [
      { label: "Sabotage it before it wakes", skill: "engineering", outcomes: [
        { w: 50, text: "Your engineers find its heart and stop it for good. The armour plating they bring back is extraordinary.", fx: { m: 60, f: 1 } },
        { w: 50, text: "It wakes enough to defend itself before it dies.", fx: { h: -18, m: 20 } } ] },
      { label: "Drive a torpedo into its maw", skill: "tactical", cost: { t: 2 }, outcomes: [
        { w: 70, text: "Two torpedoes into its throat, and the machine tears itself apart from the inside.", fx: { m: 40, f: 1 } },
        { w: 30, text: "It swallows the torpedoes and keeps waking. You leave quickly.", fx: { e: -100 } } ] },
      { label: "Study it and warn others", skill: "science", outcomes: [
        { w: 65, text: "The science team records its weaknesses and broadcasts them. Somewhere, someone will thank you.", fx: { f: 2 } },
        { w: 35, text: "Its waking pulse blinds the sensors.", fx: { f: 1, sd: 3 } } ] } ] },

  { id: "prisonhulk", title: "The prison hulk",
    text: ["A prison ship hangs in space with its guards locked in their own cells. The prisoners have taken over, and their leader, who seems reasonable, asks for food and medicine and passage to somewhere they can start again."],
    none: "A warship arrives to take the hulk back under control. Its captain thanks you for not getting involved.",
    choices: [
      { label: "Treat the injured on both sides", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor treats prisoners and guards alike. Calmed, both sides agree to wait for help, and the guards' captain pays you for your trouble.", fx: { m: 35, f: 1 } },
        { w: 35, text: "The treatment goes well, but the negotiation goes on for two days.", fx: { d: 2, m: 15 } } ] },
      { label: "Free the guards", skill: "tactical", outcomes: [
        { w: 50, text: "A sharp action by your security team. The guards retake their ship, and reward you.", fx: { m: 45 } },
        { w: 50, text: "The prisoners fight back.", fx: { h: -12, m: 15 } } ] },
      { label: "Give them supplies and leave", skill: "diplomacy", cost: { m: 20 }, outcomes: [
        { w: 70, text: "The leader keeps her word and tells you everything she knows about the Kethari who built the prison.", fx: { ket: 1 } },
        { w: 30, text: "They take the supplies and turn their guns on you for more.", fx: { h: -8 } } ] } ] },

  { id: "exodus", title: "The exodus",
    text: ["Hundreds of ships, some barely spaceworthy, crawl across the sector in a ragged line. A whole world is fleeing from something behind them, and they are asking anyone who passes for help."],
    none: "The line of ships turns away to a different course, and is soon out of range.",
    choices: [
      { label: "Help their sick and injured", skill: "medical", outcomes: [
        { w: 65, text: "Two days moving from ship to ship. Your doctor saves many lives, and the fleet's elders give you their charts of what lies behind them.", fx: { chart: 6, d: 2, f: 1 } },
        { w: 35, text: "There are too many in need. You do what you can, and it costs your stores.", fx: { m: -20, d: 2 } } ] },
      { label: "Repair their worst ships", skill: "engineering", outcomes: [
        { w: 60, text: "A dozen ships made safe. Their captains pay in what they have.", fx: { m: 35, e: -60 } },
        { w: 40, text: "Too much to repair, and too little time.", fx: { e: -80 } } ] },
      { label: "Ask what they are running from", skill: "diplomacy", outcomes: [
        { w: 55, text: "A Kethari force, sweeping the sector. They tell you where it is.", fx: { ket: 1 } },
        { w: 45, text: "They do not know. Only that everyone who stayed is gone.", fx: {} } ] } ] },

  { id: "perfectday", title: "The perfect day",
    text: ["The crew are on shore leave on a beautiful world, which is odd, because the Explorer was in deep space a moment ago. Everything is too perfect: the weather, the food, the music. The sky has a seam in it if you look closely enough."],
    none: "The seam opens, and everyone is back at their stations, still holding their drinks.",
    choices: [
      { label: "Find the seam and step through", skill: "science", outcomes: [
        { w: 60, text: "The world is a simulation, and the science team finds its edge. On the way out they copy some of its code.", fx: { f: 2 } },
        { w: 40, text: "The edge is further than it looks. Two days pass inside.", fx: { d: 2, f: 1 } } ] },
      { label: "Check whether the crew are really here", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor finds the crew's real bodies asleep aboard the Explorer, wired into something. Waking them breaks the dream.", fx: { f: 1, d: 1 } },
        { w: 35, text: "Waking them is harder than it should be. Some need days of rest.", fx: { d: 2 } } ] },
      { label: "Enjoy it while it lasts", skill: "diplomacy", outcomes: [
        { w: 50, text: "A day of rest. The crew come back refreshed, and the hull, mysteriously, is repaired.", fx: { h: 15, d: 1 } },
        { w: 50, text: "It lasts much longer than anyone intended.", fx: { d: 3 } } ] } ] },

  { id: "passenger", title: "The passenger",
    text: ["A crew member collapses in the mess hall. Your doctor finds the cause quickly, and does not like it: a creature has attached itself to her spine, and it is growing."],
    none: "By the next watch the creature has let go of her and died. She remembers nothing.",
    choices: [
      { label: "Operate", skill: "medical", outcomes: [
        { w: 60, text: "Four hours of delicate surgery, and the creature is out, alive, in a sealed jar. She recovers, and the creature is a discovery.", fx: { f: 2, d: 1 } },
        { w: 40, text: "The surgery succeeds but takes days, and the creature dies in the attempt.", fx: { d: 2 } } ] },
      { label: "Find where it came from", skill: "science", outcomes: [
        { w: 55, text: "The science team traces it to a sample collected weeks ago, and finds how to make it let go.", fx: { f: 1, d: 1 } },
        { w: 45, text: "The search takes too long, and the scanner team is pulled away to help.", fx: { d: 2, sd: 2 } } ] },
      { label: "Seal off the deck", skill: "tactical", outcomes: [
        { w: 50, text: "Quarantine holds while the doctor works. Nobody else is touched.", fx: { d: 1 } },
        { w: 50, text: "The creature had already spread its young through the air vents. Clearing them takes days.", fx: { d: 3, e: -60 } } ] } ] },

  { id: "lastevening", title: "The last evening",
    text: ["A small colony orbits a star that is about to explode. The colonists have known for years, and most are gone. The last few thousand are waiting for a ship that has not come."],
    none: "Their ship arrives after all, late and battered, and they board it without you.",
    choices: [
      { label: "Take as many as you can", skill: "medical", outcomes: [
        { w: 60, text: "Every corridor full, every bunk shared, and your doctor working without rest. All of them reach safety, and their gratitude is generous.", fx: { m: 40, f: 1, d: 2 } },
        { w: 40, text: "You take as many as you can, and the crowding costs the ship dearly.", fx: { e: -120, d: 2 } } ] },
      { label: "Repair their broken transport", skill: "engineering", outcomes: [
        { w: 55, text: "The transport flies again, just in time. They leave you everything they cannot carry.", fx: { m: 50 } },
        { w: 45, text: "The repairs take too long, and the star's first flare catches the Explorer.", fx: { h: -15, m: 20 } } ] },
      { label: "Measure the star as it goes", skill: "science", outcomes: [
        { w: 50, text: "The colonists are already safe, it turns out. The death of the star is a once-in-a-lifetime observation.", fx: { f: 2 } },
        { w: 50, text: "The star goes early.", fx: { h: -12, f: 1 } } ] } ] },

  { id: "fold", title: "The fold",
    text: ["Space ahead is creased like paper. Through the fold, the sensors can see stars that should be a whole galaxy away. A ship could slip through, if it did not mind the risk."],
    none: "The fold smooths out as you watch, and the far stars vanish.",
    choices: [
      { label: "Fly through the fold", skill: "piloting", outcomes: [
        { w: 55, text: "The Explorer comes out the other side in a different part of the galaxy, a little dizzy but whole.", fx: { jump: 1, f: 1 } },
        { w: 45, text: "The fold closes partway through.", fx: { h: -15, jump: 1 } } ] },
      { label: "Map what you can see through it", skill: "science", outcomes: [
        { w: 70, text: "Through the fold, the sensors chart sectors the Explorer has never seen.", fx: { chart: 7 } },
        { w: 30, text: "The view through the fold bends the sensors out of shape.", fx: { chart: 2, sd: 2 } } ] },
      { label: "Draw power from its edges", skill: "engineering", outcomes: [
        { w: 60, text: "The fold's edges are rich in energy, and the collectors drink deep.", fx: { e: 250 } },
        { w: 40, text: "The edge snaps back against the collectors.", fx: { e: 50, h: -8 } } ] } ] },

  { id: "quietminds", title: "The quiet minds",
    text: ["The ship that hails you does not use its radio. Every person aboard the Explorer hears the same words in their head, gentle and curious. The speakers are telepaths, and they have never met a people who think only in words."],
    none: "The voices fade, and the strange ship moves on.",
    choices: [
      { label: "Let the doctor help the crew cope", skill: "medical", outcomes: [
        { w: 65, text: "With your doctor's help the crew relax, and the conversation becomes a delight. The visitors share their maps and their medicines.", fx: { chart: 4, f: 1 } },
        { w: 35, text: "Several crew find the voices too much, and need days to settle.", fx: { d: 2 } } ] },
      { label: "Talk with them", skill: "diplomacy", outcomes: [
        { w: 60, text: "A long, strange, wonderful conversation. They offer what they can.", fx: { m: 30, f: 1 } },
        { w: 40, text: "They are polite, and baffled, and the conversation goes nowhere.", fx: {} } ] },
      { label: "Study how they do it", skill: "science", outcomes: [
        { w: 55, text: "They are happy to be studied. The science team learns something entirely new.", fx: { f: 2 } },
        { w: 45, text: "They find the study rude and leave.", fx: {} } ] } ] },

  { id: "bounty", title: "The bounty",
    text: ["A sleek, well-armed ship hails the Explorer. Its captain is a bounty hunter, and she has a warrant for one of your officers, for a crime nobody aboard has heard of. She would prefer not to fight about it."],
    none: "She checks her warrant again, swears, and leaves. Wrong ship.",
    choices: [
      { label: "Examine the warrant", skill: "diplomacy", outcomes: [
        { w: 65, text: "The warrant is forged. She is furious, at whoever paid her, and pays you for the trouble.", fx: { m: 35 } },
        { w: 35, text: "Proving it takes a day of arguing.", fx: { d: 1 } } ] },
      { label: "Refuse and raise shields", skill: "tactical", outcomes: [
        { w: 50, text: "She weighs your guns, decides the bounty is not worth it, and leaves.", fx: { e: -40 } },
        { w: 50, text: "She decides it is worth it, for a while.", fx: { h: -14 } } ] },
      { label: "Offer her a better job", skill: "diplomacy", cost: { m: 25 }, outcomes: [
        { w: 70, text: "For a fee, she hunts Kethari instead, and sends you their positions.", fx: { ket: 1 } },
        { w: 30, text: "She takes the fee and disappears.", fx: {} } ] } ] },

  { id: "champion", title: "The champion's challenge",
    text: ["A Kethari warship drops out of warp, but does not fire. Its commander, scarred and proud, challenges the Explorer's champion to single combat, by the old law of her clan. If your champion wins, the warship withdraws. If not, it attacks."],
    none: "A message recalls the warship, and its commander leaves with a look of real disappointment.",
    choices: [
      { label: "Send your security officer", skill: "tactical", outcomes: [
        { w: 55, text: "A long, brutal fight, won on skill. The Kethari commander honours the law, and gives you her clan's charts of the region.", fx: { ket: 1 } },
        { w: 45, text: "Your officer loses, honourably. The warship attacks.", fx: { fight: 1 } } ] },
      { label: "Keep your champion alive whatever happens", skill: "medical", outcomes: [
        { w: 60, text: "Your champion loses, but your doctor keeps them alive. The commander, impressed that you value your people, withdraws anyway.", fx: { f: 1 } },
        { w: 40, text: "The commander thinks the doctor's presence is cheating.", fx: { fight: 1 } } ] },
      { label: "Decline, and talk her round", skill: "diplomacy", outcomes: [
        { w: 40, text: "You quote her own law back at her. She laughs, and leaves.", fx: {} },
        { w: 60, text: "She takes the refusal as cowardice.", fx: { fight: 1 } } ] } ] },

  { id: "endlesswar", title: "The war that never ended",
    text: ["Two fleets of robot warships are fighting across the sector, as they have every day for three hundred years. The empires that built them are long gone. The fleets do not know that."],
    none: "The fleets fight on, and pay you no attention as you pass.",
    choices: [
      { label: "Tell them the war is over", skill: "diplomacy", outcomes: [
        { w: 45, text: "One fleet believes you, and powers down for the last time. Its wrecks are yours to salvage.", fx: { m: 50 } },
        { w: 55, text: "Neither fleet believes you, and both now think you are the enemy.", fx: { h: -12 } } ] },
      { label: "Salvage the wrecks between battles", skill: "engineering", outcomes: [
        { w: 60, text: "The battlefield is full of wrecks, and the robots ignore scavengers.", fx: { m: 45, t: 1 } },
        { w: 40, text: "The robots do not ignore scavengers.", fx: { m: 15, h: -10 } } ] },
      { label: "Study their tactics", skill: "science", outcomes: [
        { w: 65, text: "Three hundred years of tactics, refined by machines. There is a lot to learn.", fx: { f: 2 } },
        { w: 35, text: "One fleet notices you watching.", fx: { h: -8, f: 1 } } ] } ] },

  { id: "memorymerchant", title: "The memory merchant",
    text: ["A small, ornate ship hails you. Its owner deals in memories: the taste of a meal on a world long dead, the feeling of a first flight. He will trade any of them for one of yours."],
    none: "He decides your memories are too new to be valuable, and moves on.",
    choices: [
      { label: "Trade a memory for his charts", skill: "diplomacy", outcomes: [
        { w: 70, text: "The captain gives up the memory of a dull afternoon. In return, the merchant gives you the memories of a navigator who crossed this whole galaxy.", fx: { chart: 7 } },
        { w: 30, text: "The memory he takes is not the one you offered. Nobody is sure what is missing.", fx: { chart: 3 } } ] },
      { label: "Check that the process is safe", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor watches the process closely, and it is safe. The merchant, impressed, trades fairly.", fx: { chart: 4, f: 1 } },
        { w: 40, text: "It is not quite safe. The crew member who volunteered needs care for a day.", fx: { d: 1, chart: 3 } } ] },
      { label: "Buy a memory of a lost world", skill: "science", cost: { m: 20 }, outcomes: [
        { w: 70, text: "A whole lost civilisation, remembered by one of its people. The science team is spellbound.", fx: { f: 2 } },
        { w: 30, text: "The memory is fake.", fx: {} } ] } ] },

  { id: "unrest", title: "Trouble below decks",
    text: ["The crew are tired. It has been a long voyage, and a rumour is going around that the captain plans to push on through the next galaxy without stopping. There is muttering in the mess, and a petition."],
    none: "A good meal and a day of rest settle things before they come to a head.",
    choices: [
      { label: "Listen to their concerns", skill: "diplomacy", outcomes: [
        { w: 70, text: "The commander holds an open meeting. The rumour is cleared up, and the crew work harder for having been heard.", fx: { e: 60 } },
        { w: 30, text: "The meeting goes on for a day, but it does the job.", fx: { d: 1 } } ] },
      { label: "Have the doctor check on the crew", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor finds the real problem: exhaustion and a bad rota. A new rota, and the trouble fades.", fx: { d: 1, h: 5 } },
        { w: 35, text: "Some of the crew need proper rest, and the ship runs short-handed for a while.", fx: { d: 2 } } ] },
      { label: "Restore order firmly", skill: "tactical", outcomes: [
        { w: 50, text: "Firm words from security, and the muttering stops.", fx: {} },
        { w: 50, text: "The muttering goes quiet, but the work slows down.", fx: { d: 2, e: -60 } } ] } ] },

  { id: "library", title: "The library at the edge",
    text: ["A station drifts alone, shaped like a great spiral of shelves. It is a library, built by a people who wanted something of themselves to survive. Its keeper, an old machine, is delighted to have a reader at last."],
    none: "The keeper is asleep, and the library is closed.",
    choices: [
      { label: "Read its histories", skill: "science", outcomes: [
        { w: 70, text: "A whole people's knowledge, freely given. The science team does not want to leave.", fx: { f: 2, d: 1 } },
        { w: 30, text: "Most of it is in a language nobody can read. Still, there is something.", fx: { f: 1, d: 1 } } ] },
      { label: "Read its medical texts", skill: "medical", outcomes: [
        { w: 70, text: "Medicines and treatments nobody has seen. Your doctor copies everything.", fx: { f: 2 } },
        { w: 30, text: "The texts are fascinating, and mostly useless to a human body.", fx: { f: 1 } } ] },
      { label: "Help the keeper repair the library", skill: "engineering", outcomes: [
        { w: 60, text: "Two days of repairs. The grateful keeper gives you its star charts and some spare parts.", fx: { chart: 5, m: 20, d: 2 } },
        { w: 40, text: "The repairs are more than the Explorer can manage.", fx: { d: 1 } } ] } ] },
  /* Terrain encounters: met only on a first visit to a nebula or an asteroid field. */
  { id: "hiding", where: "nebula", art: "tneb", title: "The ship in the cloud",
    text: ["Something large is sitting very still in the gas ahead, running dark. When the Explorer's lights touch it, it turns out to be a civilian hauler with its engines cold.",
      "Its crew is hiding from a Kethari patrol, and they badly want you to keep quiet."],
    none: "When you look again, the hauler has slipped deeper into the cloud. You do not see it again.",
    choices: [
      { label: "Hail them gently", skill: "diplomacy", outcomes: [
        { w: 65, text: "They trust you, in the end. They trade spare parts for news, and give you their charts of the sectors around the cloud.", fx: { m: 25, chart: 3 } },
        { w: 35, text: "They panic at the hail and bolt, lighting up the cloud. You spend energy getting clear before anyone comes to look.", fx: { e: -60 } } ] },
      { label: "Ask what they know of the patrol", skill: "tactical", outcomes: [
        { w: 60, text: "They have been watching the patrol for a week, and they know where every Kethari ship in the region sits.", fx: { ket: 1 } },
        { w: 40, text: "They know less than they think. Their reports send you on a long, careful detour for nothing.", fx: { d: 1, e: -40 } } ] },
      { label: "Share power to get them moving", skill: "engineering", cost: { e: 80 }, outcomes: [
        { w: 75, text: "With a charge in their cells they get under way. Before they go, they send over a crate from the hold.", fx: { m: 30, t: 1 } },
        { w: 25, text: "The power coupling arcs across both hulls before it holds. They get away; you get scorch marks.", fx: { h: -6 } } ] } ] },

  { id: "charged", where: "nebula", art: "tneb", title: "Charged gas",
    text: ["The gas around the Explorer begins to glow. A pocket of the nebula is charged like a storm cloud, and the hull is starting to crackle."],
    none: "The charge bleeds away as quickly as it came, and the glow fades.",
    choices: [
      { label: "Rig the collectors to take the charge", skill: "engineering", outcomes: [
        { w: 55, text: "The collectors drink the charge as fast as it comes. The reserve gauges climb steadily.", fx: { e: 200 } },
        { w: 45, text: "The charge comes faster than the collectors can take it. Something in the power trunk burns out.", fx: { e: -60, h: -6 } } ] },
      { label: "Ride the current through the cloud", skill: "piloting", outcomes: [
        { w: 60, text: "The current carries the Explorer clear across the nebula in half the time, and the sensors map everything it passes.", fx: { chart: 5, d: -1 } },
        { w: 40, text: "The current goes in circles. Two days later you are back where you started.", fx: { d: 2 } } ] },
      { label: "Measure the discharge", skill: "science", outcomes: [
        { w: 70, text: "The charge builds by a process nobody has described before. The science team is delighted.", fx: { f: 1 } },
        { w: 30, text: "The instruments are overloaded by the first big discharge and the scanner goes with them.", fx: { sd: 2 } } ] } ] },

  { id: "nursery", where: "nebula", art: "tneb", title: "The star nursery",
    text: ["Deep in the nebula a new star is forming: a hot, spinning knot of gas that has not yet lit. Around it, dust is clumping into the first rocks of a future system."],
    none: "The knot of gas is cooler and smaller than it looked. It will be a star one day, but not an interesting one.",
    choices: [
      { label: "Observe the young star", skill: "science", outcomes: [
        { w: 70, text: "Few have watched a star this close to its birth. The observations are worth two discoveries on their own.", fx: { f: 2 } },
        { w: 30, text: "A flare from the young star scorches the hull before the Explorer can pull back.", fx: { f: 1, h: -8 } } ] },
      { label: "Collect the dust clumps", skill: "engineering", outcomes: [
        { w: 70, text: "The clumps are rich in heavy elements, and they come aboard easily.", fx: { m: 30 } },
        { w: 30, text: "One clump is larger than it looked. It hits the collection arm hard.", fx: { m: 10, h: -8 } } ] },
      { label: "Slingshot through the core", skill: "piloting", outcomes: [
        { w: 55, text: "The young star's pull flings the Explorer clear across the galaxy, with sensor readings of its heart to show for it.", fx: { jump: 1, f: 1 } },
        { w: 45, text: "The core is hotter than it looked. The Explorer turns back with blistered plating.", fx: { h: -10 } } ] } ] },

  { id: "prospector", where: "asteroids", art: "trock", title: "The prospector",
    text: ["A battered mining rig is wedged between two rocks, its drill jammed. The prospector who owns it has been out here alone for a long time, and talks to you as if you were old friends."],
    none: "By the time you reach the rig the prospector has worked it loose himself. He waves and goes back to his digging.",
    choices: [
      { label: "Free his rig", skill: "engineering", outcomes: [
        { w: 70, text: "Your engineers free the drill in an hour. He insists you take a share of his ore.", fx: { m: 35 } },
        { w: 30, text: "The rock shifts as the drill comes free and grinds along the Explorer's side.", fx: { m: 10, h: -8 } } ] },
      { label: "Buy his claim map", skill: "diplomacy", cost: { m: 15 }, outcomes: [
        { w: 75, text: "His map leads to a rock so rich it is almost pure metal. A day's work fills the hold.", fx: { m: 50, d: 1 } },
        { w: 25, text: "The map is twenty years old and the rock is long gone. He had forgotten to mention that.", fx: { d: 1 } } ] },
      { label: "Check on his health", skill: "medical", outcomes: [
        { w: 70, text: "He has been ill for weeks without knowing it. Once treated, he gives you his survey of the whole region.", fx: { chart: 4, f: 1 } },
        { w: 30, text: "He does not want a doctor and says so at length. You lose a day being polite.", fx: { d: 1 } } ] } ] },

  { id: "livingrock", where: "asteroids", art: "trock", title: "The living rock",
    text: ["One of the asteroids is moving against the others. It is slow, deliberate and warm, and it is drifting toward the Explorer."],
    none: "Whatever it was, it loses interest and drifts back into the field.",
    choices: [
      { label: "Study it from a safe distance", skill: "science", outcomes: [
        { w: 65, text: "It is alive: a creature of rock that feeds on metal. Nobody has seen one before.", fx: { f: 2 } },
        { w: 35, text: "The safe distance was not safe. It reaches the Explorer and takes a bite out of the hull.", fx: { f: 1, h: -10 } } ] },
      { label: "Drive it off with the lasers", skill: "tactical", outcomes: [
        { w: 70, text: "A few shots and it retreats, leaving chips of metal-rich rock behind.", fx: { m: 25, e: -40 } },
        { w: 30, text: "It does not retreat. It charges, and the impact rings through every deck.", fx: { h: -12, e: -40 } } ] },
      { label: "Back away slowly", skill: "piloting", outcomes: [
        { w: 80, text: "The Explorer edges back out of the field. The creature watches it go, and leaves a trail of metal-rich gravel the scoops pick up.", fx: { e: -20, m: 15 } },
        { w: 20, text: "Backing into the field means backing into rocks.", fx: { e: -30, h: -6 } } ] } ] },

  { id: "collision", where: "asteroids", art: "trock", title: "The collision",
    text: ["Two large asteroids are about to collide right ahead of the Explorer. The impact will throw debris across the whole field, and there are about ninety seconds left."],
    none: "The two rocks slide past each other with metres to spare. Nobody breathes until they do.",
    choices: [
      { label: "Thread the gap before they meet", skill: "piloting", outcomes: [
        { w: 60, text: "The Explorer slips through, and on the far side its scoops catch a stream of fresh fragments.", fx: { m: 30 } },
        { w: 40, text: "The gap closes faster than predicted.", fx: { h: -14 } } ] },
      { label: "Shields up and ride it out", skill: "tactical", outcomes: [
        { w: 80, text: "The shields take the storm of debris. It costs power and nothing else.", fx: { e: -80 } },
        { w: 20, text: "The shields hold against all but one large piece.", fx: { e: -80, h: -8 } } ] },
      { label: "Catch a fragment with the tractor beam", skill: "engineering", outcomes: [
        { w: 55, text: "The beam locks on a fragment of the rarest ore in the field and reels it in.", fx: { m: 50 } },
        { w: 45, text: "The fragment is heavier than the beam can hold, and it swings into the hull.", fx: { m: 10, h: -10 } } ] } ] },

  /* Build 19: five more nebula encounters and five more asteroid field encounters. */
  { id: "sirens", where: "nebula", art: "tneb", title: "The voices in the fog",
    text: ["Deep in the nebula the comms pick up voices: a crew calling for help, in your own language, from somewhere just ahead. The voices know the names of your crew."],
    none: "The voices fall silent all at once. The comms log shows nothing was ever received.",
    choices: [
      { label: "Follow the voices", skill: "piloting", outcomes: [
        { w: 40, text: "The voices lead to a real wreck, long dead, its hold still full. Whatever was calling, it showed you the way.", fx: { m: 45 } },
        { w: 60, text: "The voices lead in circles, deeper into the gas, until the helm pulls the ship free.", fx: { e: -120, d: 1 } } ] },
      { label: "Check the crew who hear them most", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor finds that the gas carries a compound that makes people hear what they fear. A filter, and the voices stop. The compound is a discovery.", fx: { f: 1 } },
        { w: 35, text: "The worst affected need a day in the sick bay before the voices fade.", fx: { d: 1 } } ] },
      { label: "Trace where the signal comes from", skill: "science", outcomes: [
        { w: 55, text: "The signal comes from a creature in the gas that mimics sounds to lure ships close. The recordings are remarkable.", fx: { f: 2 } },
        { w: 45, text: "The source moves every time you get close.", fx: { d: 1, sd: 2 } } ] } ] },

  { id: "cloudmind", where: "nebula", art: "tneb", title: "The thinking cloud",
    text: ["The nebula is thinking. Patterns of light ripple through the gas around the Explorer in slow waves, and the sensors show they are answering every ping the ship sends."],
    none: "The patterns slow, and stop. Whatever was thinking has gone to sleep.",
    choices: [
      { label: "Try to talk with it", skill: "science", outcomes: [
        { w: 60, text: "Mathematics first, then shapes, then something like words. It is old, and curious, and shows you the way through itself.", fx: { f: 2, chart: 3 } },
        { w: 40, text: "The patterns become frantic, and the sensors overload.", fx: { sd: 2 } } ] },
      { label: "Be careful not to harm it", skill: "engineering", outcomes: [
        { w: 70, text: "The engines are dampened and the shields set gently. The cloud seems grateful, and its glow fills the collectors.", fx: { e: 200 } },
        { w: 30, text: "Dampening the engines leaves the ship drifting for a day.", fx: { d: 1 } } ] },
      { label: "Leave before it notices you", skill: "piloting", outcomes: [
        { w: 80, text: "The Explorer slips out of the cloud quietly, along a current that carries it a day further on and past sectors nobody has charted.", fx: { e: -20, chart: 3, d: -1 } },
        { w: 20, text: "It noticed, and it pushes the ship out rather hard.", fx: { h: -6 } } ] } ] },

  { id: "waitingfleet", where: "nebula", art: "tneb", title: "The waiting fleet",
    text: ["The sensors, half blind in the gas, catch a shape, then another, then a dozen. A Kethari squadron is hiding in the nebula with its engines cold, waiting for something. It has not seen the Explorer yet."],
    none: "The squadron powers up and leaves, without ever seeing you.",
    choices: [
      { label: "Slip away quietly", skill: "piloting", outcomes: [
        { w: 70, text: "The helm takes the Explorer out of the nebula on the thrusters alone, logging every Kethari ship it passes.", fx: { e: -30, ket: 1 } },
        { w: 30, text: "Someone noticed. One ship breaks off to give chase.", fx: { fight: 0 } } ] },
      { label: "Find out what they are waiting for", skill: "science", outcomes: [
        { w: 55, text: "Their orders are on an open channel. You now know where every Kethari ship in the galaxy will be.", fx: { ket: 1 } },
        { w: 45, text: "Listening too closely gives you away.", fx: { fight: 1 } } ] },
      { label: "Plant a torpedo in their midst and run", skill: "tactical", cost: { t: 1 }, outcomes: [
        { w: 55, text: "The torpedo goes off among them, and the squadron scatters in confusion. Their debris is worth collecting later.", fx: { m: 35 } },
        { w: 45, text: "They regroup faster than expected.", fx: { fight: 1 } } ] } ] },

  { id: "marooned", where: "nebula", art: "tneb", title: "The lost expedition",
    text: ["A survey ship is stranded in the nebula, its engines choked with dust. Its crew have been here for months. They are thin and frightened, and some of them are ill."],
    none: "The survey ship's engines finally catch, and it limps away before you reach it.",
    choices: [
      { label: "Treat the sick", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor treats scurvy and dust fever. Recovered, the survey team give you everything they learned in their months in the gas.", fx: { f: 2 } },
        { w: 30, text: "Some of them are very ill. It takes two days.", fx: { d: 2, f: 1 } } ] },
      { label: "Clean out their engines", skill: "engineering", outcomes: [
        { w: 65, text: "The engines run clean, and the survey crew pay with their charts.", fx: { chart: 5 } },
        { w: 35, text: "The dust gets into the Explorer's intakes too.", fx: { e: -80, chart: 3 } } ] },
      { label: "Tow them out", skill: "piloting", outcomes: [
        { w: 60, text: "A long, slow tow out of the nebula. They are grateful, and generous.", fx: { m: 30, e: -60 } },
        { w: 40, text: "The tow line snaps twice.", fx: { e: -120, d: 1 } } ] } ] },

  { id: "burningfog", where: "nebula", art: "tneb", title: "The burning fog",
    text: ["This part of the nebula glows a sickly yellow, and the radiation counters are climbing. The crew nearest the hull are already feeling unwell."],
    none: "The glow fades as the Explorer moves on, and the counters drop back to normal.",
    choices: [
      { label: "Treat the crew for radiation", skill: "medical", outcomes: [
        { w: 65, text: "Your doctor moves the crew to the ship's core and treats the worst cases. Nobody suffers lasting harm.", fx: { d: 1 } },
        { w: 35, text: "The worst cases need days of care.", fx: { d: 2, e: -40 } } ] },
      { label: "Harden the shields against it", skill: "engineering", outcomes: [
        { w: 60, text: "The shields are retuned to block the radiation, and keep the setting.", fx: { e: -60 } },
        { w: 40, text: "The retuning takes most of the shield power.", fx: { e: -150 } } ] },
      { label: "Collect samples of the glow", skill: "science", outcomes: [
        { w: 55, text: "The glow is a rare isotope, and worth a great deal. The samples go into lead boxes.", fx: { m: 40, f: 1 } },
        { w: 45, text: "Collecting them takes too long in the radiation.", fx: { h: -8, d: 1 } } ] } ] },

  { id: "hollowrock", where: "asteroids", art: "trock", title: "The hollow rock",
    text: ["One of the asteroids has a hatch. Inside, the rock is hollow and fitted out as a ship: corridors, engines, a bridge. Someone disguised a vessel as a rock, a very long time ago."],
    none: "The hatch is sealed from the inside, and nothing will open it.",
    choices: [
      { label: "Explore its corridors", skill: "tactical", outcomes: [
        { w: 60, text: "The crew are long gone. The armoury is not.", fx: { t: 2, m: 25 } },
        { w: 40, text: "The ship's defences still work.", fx: { h: -10, m: 10 } } ] },
      { label: "Start its engines", skill: "engineering", outcomes: [
        { w: 50, text: "The engines start, and the hidden ship gives up its fuel to the Explorer.", fx: { e: 200 } },
        { w: 50, text: "The engines start, and the hidden ship tries to leave with your boarding party on it. They get off in time.", fx: { d: 1 } } ] },
      { label: "Read its logs", skill: "science", outcomes: [
        { w: 70, text: "It was a spy ship, from a war nobody remembers. Its logs map the galaxy as it was.", fx: { chart: 5, f: 1 } },
        { w: 30, text: "The logs are encrypted, and the decryption takes a day.", fx: { d: 1, chart: 2 } } ] } ] },

  { id: "strike", where: "asteroids", art: "trock", title: "The miners' strike",
    text: ["The miners in this field have downed tools. Their company stopped paying them months ago, the company's guard ship is on its way to break the strike, and they ask the Explorer to stand with them."],
    none: "The company pays up before the guard ship arrives. The miners cheer, and go back to work.",
    choices: [
      { label: "Negotiate a settlement", skill: "diplomacy", outcomes: [
        { w: 60, text: "The commander gets both sides talking. The miners get their pay, and give you a share of their ore in thanks.", fx: { m: 40 } },
        { w: 40, text: "Nobody will budge. You lose a day.", fx: { d: 1 } } ] },
      { label: "Treat the miners' injuries", skill: "medical", outcomes: [
        { w: 70, text: "Months without a company medic. Your doctor treats dozens, and the miners pay in ore.", fx: { m: 35, d: 1 } },
        { w: 30, text: "There are more injuries than supplies.", fx: { m: -10, d: 1 } } ] },
      { label: "Stand between the miners and the guard ship", skill: "tactical", outcomes: [
        { w: 55, text: "The guard ship's captain decides it is not worth a fight with a warship, and leaves.", fx: { m: 30 } },
        { w: 45, text: "The guard ship's captain decides otherwise.", fx: { h: -12, m: 20 } } ] } ] },

  { id: "piratenest", where: "asteroids", art: "trock", title: "The pirate nest",
    text: ["Lights in a cave on a large asteroid: a pirate base, built into the rock. Its ships are out raiding. Only a handful of guards are left."],
    none: "The pirates return early, and the Explorer withdraws before they spot it.",
    choices: [
      { label: "Raid the raiders", skill: "tactical", outcomes: [
        { w: 55, text: "The guards surrender quickly. The pirates' hoard is impressive.", fx: { m: 50, t: 1 } },
        { w: 45, text: "The guards fight back hard.", fx: { h: -12, m: 25 } } ] },
      { label: "Copy their charts", skill: "science", outcomes: [
        { w: 65, text: "Pirates keep very good charts of where the Kethari are not.", fx: { chart: 6, ket: 1 } },
        { w: 35, text: "The data is booby-trapped.", fx: { sd: 3 } } ] },
      { label: "Sabotage their ships' fuel", skill: "engineering", outcomes: [
        { w: 60, text: "The pirates will not be raiding anyone for a while. Their fuel goes into the Explorer's tanks.", fx: { e: 180 } },
        { w: 40, text: "The sabotage is spotted.", fx: { h: -8 } } ] } ] },

  { id: "egg", where: "asteroids", art: "trock", title: "The egg",
    text: ["One asteroid is warm, and its surface is cracking. Something is moving inside it. The rest of the field is full of empty shells: this is a nursery, and the last egg is hatching."],
    none: "The egg goes still, and cold. The hatchling did not make it.",
    choices: [
      { label: "Help it hatch", skill: "medical", outcomes: [
        { w: 60, text: "Your doctor, with no idea what the hatchling is, helps it out of its shell. It is enormous, gentle, and leaves behind a shell full of valuable minerals.", fx: { m: 40, f: 1 } },
        { w: 40, text: "The hatchling comes out hungry, and tries to eat the shuttle.", fx: { h: -8, f: 1 } } ] },
      { label: "Study it from a distance", skill: "science", outcomes: [
        { w: 70, text: "The hatching is filmed from start to finish. Nobody has seen anything like it.", fx: { f: 2 } },
        { w: 30, text: "The hatchling's first cry overloads the sensors.", fx: { f: 1, sd: 2 } } ] },
      { label: "Collect the empty shells", skill: "engineering", outcomes: [
        { w: 75, text: "The shells are dense with rare metals.", fx: { m: 45 } },
        { w: 25, text: "The parent comes back.", fx: { h: -14, m: 20 } } ] } ] },

  { id: "exile", where: "asteroids", art: "trock", title: "The exile",
    text: ["A small dome on a lonely rock houses a single scientist, exiled for experiments her people thought too dangerous. She is ill, and she has been alone for a long time. She is also still working."],
    none: "She refuses to answer your hails. You leave her to her work.",
    choices: [
      { label: "Treat her illness", skill: "medical", outcomes: [
        { w: 70, text: "Your doctor treats a long-neglected illness. In gratitude, she shares her research.", fx: { f: 2 } },
        { w: 30, text: "She is sicker than she admitted. The treatment takes two days.", fx: { d: 2, f: 1 } } ] },
      { label: "Look at her experiments", skill: "science", outcomes: [
        { w: 55, text: "Her work on reactor design is brilliant, and only a little dangerous. With her help the Explorer's reactor holds more.", fx: { me: 60 } },
        { w: 45, text: "Her work is every bit as dangerous as her people said.", fx: { h: -10, f: 1 } } ] },
      { label: "Offer her passage", skill: "diplomacy", outcomes: [
        { w: 60, text: "She declines, but sends you away with her spare supplies.", fx: { m: 30 } },
        { w: 40, text: "She is offended at the idea that she needs rescuing.", fx: {} } ] } ] }
];
