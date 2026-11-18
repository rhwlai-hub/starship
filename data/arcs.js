/* Starship: story arcs. Loaded by index.html before the game itself.
   Each voyage follows one arc, chosen at random: one chapter in each of the five galaxies, found at a story signal on the chart.
   Chapter 1 has one version. Chapters 2 to 5 have two: g (the story is going well: story points at least equal to the chapters played)
   and b (going badly). Chapters use the encounter format, and outcomes add story points with fx "arc" (-1 to 2).
   A chapter not played before leaving its galaxy (or before facing the flagship) costs 1 point.
   The final points choose one of five endings (worst first), which change the flagship battle; the effects themselves are
   set in the game (K.ARC_*), so every arc is balanced the same way. To add an arc, copy one below and give it new ids. */
window.STARSHIP = window.STARSHIP || {};

STARSHIP.ARCS = [
  { id: "pw", title: "The Whisper Below Decks",
    about: "An Ossari engineer serving aboard the Dominion flagship is sending secret messages.",
    cold: "No word came from Ilvane in this galaxy. The trail is colder.",
    chapters: [
      { id: "pw1", title: "A voice in the engine noise",
        text: ["Science flags something odd in the drive noise of a distant Kethari convoy: a rhythm under the roar, too regular to be machinery. Someone is tapping out a message through the hull itself.",
          "It is Ossari tally-code, the counting song of a people the Dominion conquered long ago. Decoded, it says: I serve below decks on the great ship. I can open doors. Who will listen?"],
        choices: [
          { label: "Decode the whole message", skill: "science", outcomes: [
            { w: 60, text: "Hours of work recover the rest: a name, Ilvane, and a way to leave answers in the noise of passing Kethari engines. The conversation has begun.", fx: { arc: 2, f: 1 } },
            { w: 40, text: "The convoy moves out of range halfway through. You have a name, Ilvane, and little else.", fx: { arc: 1 } } ] },
          { label: "Answer at once, in the same code", skill: "diplomacy", outcomes: [
            { w: 50, text: "A pause, then a single word comes back: Listening. Whoever Ilvane is, they now know someone heard.", fx: { arc: 2 } },
            { w: 50, text: "The reply is clumsy and the rhythm wrong. The tapping stops dead, and a Kethari escort turns to look.", fx: { arc: 0, fight: 0 } } ] },
          { label: "Trace where the signal starts", skill: "engineering", outcomes: [
            { w: 60, text: "Engineering pins the source to one freighter in the convoy before losing it, and charts the convoy's route on the way.", fx: { arc: 1, chart: 3 } },
            { w: 40, text: "The trace finds nothing but engine echo.", fx: { arc: 0 } } ] } ] },
      { g: { id: "pw2g", title: "Proof of good faith",
          text: ["Ilvane's next message rides on the beacon of a Kethari supply drone: the flagship's patrol schedule for the coming month. Proof of good faith, Ilvane calls it.",
            "Proof needs testing. The schedule says a courier drone will pass a nearby star tomorrow, alone."],
          choices: [
            { label: "Intercept the courier", skill: "tactical", outcomes: [
              { w: 55, text: "The courier is exactly where Ilvane said. Its memory confirms every line of the schedule, and its parts are worth keeping.", fx: { arc: 2, m: 25 } },
              { w: 45, text: "The courier is there, but it destroys itself as you close, scorching the bow.", fx: { arc: 1, h: -6 } } ] },
            { label: "Watch from a distance", skill: "science", outcomes: [
              { w: 70, text: "The courier passes on time, to the minute. Ilvane is real, and well placed.", fx: { arc: 1, d: 1 } },
              { w: 30, text: "The courier never comes. Ilvane may have been wrong, or worse.", fx: { arc: 0, d: 1 } } ] },
            { label: "Send thanks and ask for more", skill: "diplomacy", outcomes: [
              { w: 50, text: "Ilvane answers with a gift: the frequencies Kethari ships use to call for help. Science is delighted.", fx: { arc: 2, f: 1 } },
              { w: 50, text: "Ilvane goes quiet. Too eager, perhaps.", fx: { arc: 0 } } ] } ] },
        b: { id: "pw2b", title: "The escape capsule",
          text: ["The tapping has stopped. Instead the Explorer finds an Ossari escape capsule drifting in the dark, its passenger barely alive. Ilvane's tally-code is scratched into the hatch.",
            "The passenger is one of Ilvane's people, caught and cast adrift as a warning to the rest."],
          choices: [
            { label: "Revive the survivor", skill: "medical", outcomes: [
              { w: 60, text: "Medical brings her round. She knows Ilvane, and she knows the new code the conspirators use. The trail is warm again.", fx: { arc: 2 } },
              { w: 40, text: "The survivor wakes only long enough to say Ilvane is still alive.", fx: { arc: 1 } } ] },
            { label: "Read the capsule's logs", skill: "science", outcomes: [
              { w: 60, text: "The logs hold the capsule's launch point and part of a new code.", fx: { arc: 1, f: 1 } },
              { w: 40, text: "The logs are wiped. The Kethari were thorough.", fx: { arc: 0 } } ] },
            { label: "Leave it alone: it may be bait", skill: "tactical", outcomes: [
              { w: 50, text: "Nothing happens. It was not bait, and now you will never know what it held.", fx: { arc: 0 } },
              { w: 50, text: "It was not bait, but a Kethari patrol was hunting for it, and finds you instead.", fx: { arc: -1, fight: 0 } } ] } ] } },
      { g: { id: "pw3g", title: "Word to the free Ossari",
          text: ["Ilvane's plan grows bolder. On a world in this galaxy live free Ossari, descendants of those who fled the conquest. If they know the day, they can strike the moment the flagship is open.",
            "Someone has to carry the word to them, and the free Ossari have every reason to distrust strangers."],
          choices: [
            { label: "Go down in person, openly", skill: "diplomacy", outcomes: [
              { w: 55, text: "The elders listen, argue all night, and agree. When Ilvane calls, they will answer.", fx: { arc: 2 } },
              { w: 45, text: "The elders will not risk their children on a stranger's word, though some of the young are listening.", fx: { arc: 1 } } ] },
            { label: "Play them Ilvane's own messages", skill: "science", outcomes: [
              { w: 60, text: "The elders know the old counting song. Some of them weep to hear it, and all of them agree.", fx: { arc: 2, f: 1 } },
              { w: 40, text: "The recordings are too broken to convince anyone.", fx: { arc: 0 } } ] },
            { label: "Win their trust with supplies", skill: "engineering", cost: { m: 30 }, outcomes: [
              { w: 80, text: "The materials go into their failing reactor. Trust is earned the practical way.", fx: { arc: 2 } },
              { w: 20, text: "They take the supplies and the message, and promise nothing.", fx: { arc: 1 } } ] } ] },
        b: { id: "pw3b", title: "False whispers",
          text: ["Messages in Ilvane's code arrive from three directions at once, each claiming to be the real one. The Dominion has learned the tally-code and is flooding the dark with false whispers.",
            "One of them is Ilvane. The others are traps."],
          choices: [
            { label: "Compare the rhythms", skill: "science", outcomes: [
              { w: 55, text: "One message has the tiny stutter of a tired hand. That is Ilvane. The others are machines.", fx: { arc: 2 } },
              { w: 45, text: "You choose wrong, and fly into an empty sector where a Kethari ship is waiting.", fx: { arc: 0, fight: 0 } } ] },
            { label: "Ask what only Ilvane would know", skill: "diplomacy", outcomes: [
              { w: 60, text: "Only one voice answers correctly. The others go silent.", fx: { arc: 2 } },
              { w: 40, text: "All three answer correctly. The Dominion has been listening for a long time.", fx: { arc: -1 } } ] },
            { label: "Hide in the noise and wait", skill: "piloting", outcomes: [
              { w: 60, text: "Days later, a single quiet message comes the old way. Ilvane is safe, for now.", fx: { arc: 1, d: 2 } },
              { w: 40, text: "The silence goes on.", fx: { arc: 0, d: 2 } } ] } ] } },
      { g: { id: "pw4g", title: "The data spike",
          text: ["Ilvane needs a tool: a data spike to slip into the flagship's shield controller. The free Ossari have built it, but it must be smuggled aboard with the next supply run.",
            "The drop point is a listening buoy at the edge of Kethari space. Placing the spike unseen will take a steady hand."],
          choices: [
            { label: "Fly in silent and place it", skill: "piloting", outcomes: [
              { w: 55, text: "The helm drifts in with every system cold. The spike is placed, and nobody sees.", fx: { arc: 2 } },
              { w: 45, text: "A patrol drone passes close. The spike is placed, but you burn hard to get away.", fx: { arc: 1, e: -80 } } ] },
            { label: "Hide it in Kethari scrap", skill: "engineering", outcomes: [
              { w: 65, text: "Engineering welds it into a scrap engine casing. Even Ilvane laughs.", fx: { arc: 2, m: -10 } },
              { w: 35, text: "The disguise is too good: a scavenger takes it before Ilvane's runner can.", fx: { arc: 0 } } ] },
            { label: "Draw the patrols away first", skill: "tactical", cost: { t: 1 }, outcomes: [
              { w: 60, text: "A torpedo into an empty asteroid pulls every patrol off. The spike goes in clean.", fx: { arc: 2 } },
              { w: 40, text: "The diversion draws more attention than it diverts.", fx: { arc: 0, fight: 0 } } ] } ] },
        b: { id: "pw4b", title: "The interrogator",
          text: ["A Kethari interrogator ship is moving from system to system, rounding up anyone who has heard the tally-code. Ilvane's network is falling apart.",
            "The interrogator holds three prisoners. If they talk, Ilvane is finished."],
          choices: [
            { label: "Attack the interrogator", skill: "tactical", outcomes: [
              { w: 70, text: "The Explorer goes in hard and the interrogator's escort turns to meet you. In the confusion, the prisoners slip away.", fx: { arc: 2, fight: 1 } },
              { w: 30, text: "The prisoners are moved before you arrive. The escort is still there.", fx: { arc: 0, fight: 1 } } ] },
            { label: "Buy the prisoners", skill: "diplomacy", cost: { m: 40 }, outcomes: [
              { w: 60, text: "The Kethari are greedy. The prisoners are sold to you as labour, and walk free on your deck.", fx: { arc: 2 } },
              { w: 40, text: "The interrogator takes the materials and keeps the prisoners.", fx: { arc: 0 } } ] },
            { label: "Warn the network to scatter", skill: "science", outcomes: [
              { w: 60, text: "The warning goes out in the noise of a hundred engines. The network scatters before the interrogator arrives.", fx: { arc: 1 } },
              { w: 40, text: "The warning comes too late for some of them.", fx: { arc: 0 } } ] } ] } },
      { g: { id: "pw5g", title: "The count",
          text: ["Ilvane's last message is short. The spike is in place. When the Explorer faces the flagship, Ilvane will open the shield bays for a few seconds, but only if told exactly when.",
            "The timing must be agreed now, before the gate, in a code that cannot be broken."],
          choices: [
            { label: "Agree the timing together", skill: "tactical", outcomes: [
              { w: 60, text: "Tactical and Ilvane agree a count to the second. It will be ready.", fx: { arc: 2 } },
              { w: 40, text: "The count is agreed, but Ilvane is not sure it can be held.", fx: { arc: 1 } } ] },
            { label: "Build a signal only Ilvane can read", skill: "engineering", outcomes: [
              { w: 65, text: "Engineering tunes a pulse to the spike's own frequency. One tap, and the bays open.", fx: { arc: 2 } },
              { w: 35, text: "The pulse is too faint to trust.", fx: { arc: 1 } } ] },
            { label: "Ask Ilvane to escape with you", skill: "diplomacy", outcomes: [
              { w: 40, text: "Ilvane refuses: the work is below decks. But the Ossari aboard the flagship are told to be ready.", fx: { arc: 2 } },
              { w: 60, text: "Ilvane refuses, and the contact ends there.", fx: { arc: 0 } } ] } ] },
        b: { id: "pw5b", title: "The last message",
          text: ["Ilvane has been found out. The last message is a single line: they are coming down the corridor.",
            "If anything is to be saved, it has to be now."],
          choices: [
            { label: "Broadcast a false trail", skill: "diplomacy", outcomes: [
              { w: 50, text: "You flood the band with Ilvane's code, claiming the traitor fled on a freighter. The search turns away from the engine decks.", fx: { arc: 2 } },
              { w: 50, text: "The Kethari are not fooled.", fx: { arc: 0 } } ] },
            { label: "Jam the flagship's internal channels", skill: "engineering", outcomes: [
              { w: 50, text: "For an hour the flagship cannot talk to itself. It is enough for Ilvane to hide.", fx: { arc: 2, e: -60 } },
              { w: 50, text: "The jamming lasts minutes, not hours.", fx: { arc: 0, e: -60 } } ] },
            { label: "Save everything Ilvane ever sent", skill: "science", outcomes: [
              { w: 70, text: "Every message is copied and sorted. There may still be something useful in it at the gate.", fx: { arc: 1, f: 1 } },
              { w: 30, text: "Nothing more comes through.", fx: { arc: 0 } } ] } ] } }
    ],
    endings: [
      { title: "Betrayed", text: "As the flagship looms, a voice comes over the band in perfect tally-code. It is not Ilvane. Ilvane was taken long ago, and every message since was the Dominion's. The flagship has been expecting you, and has added armour." },
      { title: "Silence", text: "No signal comes from below decks. Whatever became of Ilvane, the Explorer faces the flagship alone." },
      { title: "Open doors", text: "As the battle opens, one shield bay on the flagship flickers open, then another. Ilvane is still there, and the flagship's shields are weaker for it." },
      { title: "The spike", text: "The spike fires on the count. The flagship's shields stutter, and a whole section of its armour loses power." },
      { title: "The rising", text: "On the count, the Ossari below decks rise. The shield bays fall open and the free Ossari strike from a dozen small ships before the Explorer fires a shot. The flagship is burning when you reach it." }
    ] },

  { id: "lp", title: "The Long Patience",
    about: "Lanterns left by a lost generation ship, the Long Patience, lead somewhere.",
    cold: "The next lantern of the Long Patience was not found in this galaxy. The trail is colder.",
    chapters: [
      { id: "lp1", title: "Follow the lanterns",
        text: ["A navigation buoy, centuries old, drifts across the Explorer's path. Its light still blinks, and its message still plays: an old dialect, a calm voice, one phrase repeated. Follow the lanterns home.",
          "The archive identifies it as a marker of the Long Patience, a generation ship that left the inner worlds four hundred years ago and was never heard from again."],
        choices: [
          { label: "Decode the old dialect", skill: "science", outcomes: [
            { w: 60, text: "The phrase is a navigation key. The buoy points to the next lantern, somewhere in the galaxies ahead.", fx: { arc: 2, f: 1 } },
            { w: 40, text: "The key is half corrupted: a direction, but no distance.", fx: { arc: 1 } } ] },
          { label: "Repair the buoy's memory", skill: "engineering", outcomes: [
            { w: 55, text: "The memory comes back: a crew list, a course, a promise to return, and the place of the next lantern.", fx: { arc: 2 } },
            { w: 45, text: "The buoy's power cell gives out as you work. Its casing, at least, is good metal.", fx: { arc: 0, m: 10 } } ] },
          { label: "Follow its old drive trail", skill: "piloting", outcomes: [
            { w: 50, text: "The helm reads the faint scar of an ancient drive through the dust. It leads on, toward the gate.", fx: { arc: 1, chart: 3 } },
            { w: 50, text: "The trail fades into the background glow.", fx: { arc: 0 } } ] } ] },
      { g: { id: "lp2g", title: "The lifeboat",
          text: ["The second lantern is fixed to a lifeboat of the Long Patience, its crew long dead but its log intact. The log names a world: the place this lifeboat's people were sent to prepare for the rest.",
            "The lifeboat's systems still answer to the old command codes."],
          choices: [
            { label: "Read the full log", skill: "science", outcomes: [
              { w: 60, text: "The log tells of a split: half the Patience's people were to settle, half to stay aboard and wait. Both halves are out there somewhere.", fx: { arc: 2, f: 1 } },
              { w: 40, text: "Most of the log has decayed. The world's name survives.", fx: { arc: 1 } } ] },
            { label: "Give the crew a proper farewell", skill: "medical", outcomes: [
              { w: 70, text: "The Explorer's crew gives them a spacer's farewell. Under the last body is a sealed record, left for whoever would do that.", fx: { arc: 2 } },
              { w: 30, text: "The farewell is given. Nothing more is found.", fx: { arc: 1 } } ] },
            { label: "Strip the lifeboat for parts", skill: "engineering", outcomes: [
              { w: 70, text: "Old, heavy and well made. The materials are welcome, though the log goes with the hull.", fx: { arc: 0, m: 40 } },
              { w: 30, text: "The hull cracks as you cut, and the lantern's memory is lost.", fx: { arc: -1, m: 20 } } ] } ] },
        b: { id: "lp2b", title: "Scavengers",
          text: ["The second lantern is gone. Scavengers got here first, and their ship is still in the sector: a patched hauler with the lantern lashed to its hull like a trophy.",
            "Their captain hails, cheerful and armed. Everything has a price."],
          choices: [
            { label: "Buy the lantern", skill: "diplomacy", cost: { m: 30 }, outcomes: [
              { w: 80, text: "The lantern's memory is intact. The trail is open again.", fx: { arc: 2 } },
              { w: 20, text: "They sell you the lantern, minus its memory core.", fx: { arc: 0 } } ] },
            { label: "Fire a warning shot", skill: "tactical", outcomes: [
              { w: 50, text: "One shot is enough. The scavengers cut the lantern loose and run.", fx: { arc: 2 } },
              { w: 50, text: "The scavengers fire back before running, and take the lantern with them.", fx: { arc: 0, h: -8 } } ] },
            { label: "Read the lantern from a distance", skill: "science", outcomes: [
              { w: 55, text: "Science reads the lantern's memory straight off the scavengers' hull without them noticing.", fx: { arc: 1, f: 1 } },
              { w: 45, text: "The scavengers notice, and leave in a hurry.", fx: { arc: 0 } } ] } ] } },
      { g: { id: "lp3g", title: "The settled half",
          text: ["The lifeboat's world is real. The settlers' descendants live quietly under a forest canopy, hidden from the Kethari, who do not know they are there.",
            "They still sing the old songs of the Patience, and they know where the other half went. They will not risk their hiding place for strangers."],
          choices: [
            { label: "Speak to their council", skill: "diplomacy", outcomes: [
              { w: 55, text: "The council hears you out, and agrees to send word to the Patience: someone has come back.", fx: { arc: 2 } },
              { w: 45, text: "The council thanks you politely and tells you nothing.", fx: { arc: 1 } } ] },
            { label: "Treat their sick", skill: "medical", outcomes: [
              { w: 65, text: "There is fever in the village. Medical works for three days. On the fourth, the council comes to you.", fx: { arc: 2, d: 2 } },
              { w: 35, text: "The fever is beyond the ship's supplies. They are grateful, but stay hidden.", fx: { arc: 1, d: 2 } } ] },
            { label: "Show them the Explorer's guns", skill: "tactical", outcomes: [
              { w: 40, text: "They are impressed, and frightened, and tell you what you want to know so that you will leave.", fx: { arc: 1 } },
              { w: 60, text: "They vanish into the forest. The village is empty by morning.", fx: { arc: -1 } } ] } ] },
        b: { id: "lp3b", title: "The burned village",
          text: ["The Kethari found the lifeboat's world before you did. The settlement is ash, but footprints lead up to the caves above.",
            "The survivors are few, hungry and frightened."],
          choices: [
            { label: "Bring them medical aid", skill: "medical", outcomes: [
              { w: 65, text: "The survivors are treated. Their leader, an old woman with the Patience's crest on her coat, tells you where her people's ship still waits.", fx: { arc: 2 } },
              { w: 35, text: "Too many are too sick. The few who recover can tell you little.", fx: { arc: 1 } } ] },
            { label: "Rebuild their shelter", skill: "engineering", cost: { m: 25 }, outcomes: [
              { w: 75, text: "Engineering builds them a shelter the Kethari will never see from orbit. In thanks, they share the Patience's course.", fx: { arc: 2 } },
              { w: 25, text: "The shelter is built. They are too grieved to talk.", fx: { arc: 1 } } ] },
            { label: "Search the ruins for records", skill: "science", outcomes: [
              { w: 50, text: "Under the ash is a sealed vault: charts of the Patience's old course.", fx: { arc: 1, chart: 4 } },
              { w: 50, text: "The fire was thorough.", fx: { arc: 0 } } ] } ] } },
      { g: { id: "lp4g", title: "The Long Patience",
          text: ["There she is: the Long Patience, a ship the size of a city in orbit around a dead star, dark except for a thin line of lights. Thousands still sleep in her holds; a few hundred keep her running, as their grandparents did.",
            "Her council has waited four hundred years for someone to come back. They want to know whether it is time to wake the rest."],
          choices: [
            { label: "Tell them the truth about the Dominion", skill: "diplomacy", outcomes: [
              { w: 60, text: "The council listens in silence, then votes. They will wake the ship's old warships.", fx: { arc: 2 } },
              { w: 40, text: "The council is divided. Some will help; most will keep waiting.", fx: { arc: 1 } } ] },
            { label: "Help restart her engines", skill: "engineering", outcomes: [
              { w: 55, text: "The great engines turn over for the first time in a century. The council will not forget it.", fx: { arc: 2, e: -60 } },
              { w: 45, text: "The engines cough and die. The council is grateful for the effort.", fx: { arc: 1, e: -60 } } ] },
            { label: "Study her shield design", skill: "science", outcomes: [
              { w: 60, text: "The Patience's shields are an old design that the Dominion stole long ago. The flagship's shields are built on the same plan, flaws and all.", fx: { arc: 2, f: 1 } },
              { w: 40, text: "The design is fascinating, and no use to anyone today.", fx: { arc: 1, f: 1 } } ] } ] },
        b: { id: "lp4b", title: "The guardians",
          text: ["The Long Patience is here, but her automated guardians do not know the Explorer. Three old defence drones rise from her hull and lock on.",
            "Somewhere aboard, someone could call them off, if they could be reached."],
          choices: [
            { label: "Hail on every old frequency", skill: "diplomacy", outcomes: [
              { w: 55, text: "An old voice answers at last, and the drones fall back. The Patience's people apologise, and listen.", fx: { arc: 2 } },
              { w: 45, text: "No one answers before the drones fire.", fx: { arc: 0, h: -10 } } ] },
            { label: "Outfly the drones to the docking bay", skill: "piloting", outcomes: [
              { w: 55, text: "The helm weaves through their fire and docks. The people aboard are astonished, and impressed.", fx: { arc: 2, e: -40 } },
              { w: 45, text: "The drones are faster than they look.", fx: { arc: 0, h: -12 } } ] },
            { label: "Send the lantern code", skill: "science", outcomes: [
              { w: 60, text: "The drones recognise the lantern code and stand down.", fx: { arc: 2 } },
              { w: 40, text: "The code is centuries out of date.", fx: { arc: 0, h: -8 } } ] } ] } },
      { g: { id: "lp5g", title: "The Patient Fleet",
          text: ["The Patience's old warships are heavy, slow and armed with weapons nobody has built in centuries. They will fly against the flagship, but they need parts and power to do it.",
            "Their commander, Captain Idony Fairweather, asks what the Explorer can spare."],
          choices: [
            { label: "Share materials for repairs", skill: "engineering", cost: { m: 40 }, outcomes: [
              { w: 80, text: "Her shipwrights work through the night. Three warships will fly.", fx: { arc: 2 } },
              { w: 20, text: "Only one ship can be made ready in time.", fx: { arc: 1 } } ] },
            { label: "Share energy for their reactors", skill: "science", cost: { e: 150 }, outcomes: [
              { w: 75, text: "Their cold reactors light one by one. The fleet will be at the gate.", fx: { arc: 2 } },
              { w: 25, text: "Only half the reactors take the charge.", fx: { arc: 1 } } ] },
            { label: "Plan the attack together", skill: "tactical", outcomes: [
              { w: 55, text: "The plan is simple: they strike first, from the flank, and the Explorer finishes what they start.", fx: { arc: 2 } },
              { w: 45, text: "Captain Fairweather prefers her own plan. It may not match yours.", fx: { arc: 1 } } ] } ] },
        b: { id: "lp5b", title: "One ship",
          text: ["The council will not risk the whole fleet. They send one ship and one pilot, a young volunteer who has never seen battle.",
            "She wants proof the Explorer will stand and fight before she follows it into the last galaxy."],
          choices: [
            { label: "Fly with her and show her", skill: "piloting", outcomes: [
              { w: 60, text: "Two days of drills. She learns fast, and she will fly with you. Her messages home bring more ships.", fx: { arc: 2, d: 2 } },
              { w: 40, text: "She is braver than she is skilled.", fx: { arc: 1, d: 2 } } ] },
            { label: "Tell her what you have seen", skill: "diplomacy", outcomes: [
              { w: 55, text: "She listens to every word, then sends it home. The council reconsiders.", fx: { arc: 2 } },
              { w: 45, text: "She is polite, and unconvinced.", fx: { arc: 0 } } ] },
            { label: "Check she is fit to fly", skill: "medical", outcomes: [
              { w: 60, text: "She is, and she is grateful someone asked. She sends word home: the Explorer can be trusted.", fx: { arc: 2 } },
              { w: 40, text: "She is not, and she goes home.", fx: { arc: 0 } } ] } ] } }
    ],
    endings: [
      { title: "Stripped", text: "The flagship's hull glints with familiar plating. The Dominion found the Long Patience first and stripped her armour for its own use. There is more of it than before." },
      { title: "Still waiting", text: "The Long Patience keeps waiting in the dark. Nobody comes to the gate but the Explorer." },
      { title: "An old flaw", text: "The Patience's engineers send one last message: the flagship's shields still carry a flaw from the stolen design. Science tunes the lasers to find it." },
      { title: "First strike", text: "The old warships of the Patience come in first, slow and heavy, and fire everything they have. The flagship's shields buckle and its armour scars." },
      { title: "The Patient Fleet", text: "The whole fleet of the Long Patience arrives, ships nobody has seen in four hundred years, and they do not stop firing until the Explorer is in range. The flagship is badly hurt before your first shot." }
    ] },

  { id: "qe", title: "The Quiet Engine",
    about: "A scholar is racing the Dominion for the pieces of an ancient machine that can silence shields.",
    cold: "No piece of the Quiet Engine was found in this galaxy. The Dominion's search goes on.",
    chapters: [
      { id: "qe1", title: "The scholar's request",
        text: ["A small research ship hails the Explorer. Its owner, Doctor Ynes Corrow, has spent her life chasing a legend: the Quiet Engine, a machine left by a vanished people that could still every shield in a star system.",
          "The Dominion is chasing it too. She has found the first piece in a ruined observatory nearby, and she cannot dig it out alone."],
        choices: [
          { label: "Help her read the ruins", skill: "science", outcomes: [
            { w: 60, text: "Together you find the piece, and carved beside it, the way to the next.", fx: { arc: 2, f: 1 } },
            { w: 40, text: "You find the piece. The carvings beside it are too worn to read.", fx: { arc: 1 } } ] },
          { label: "Dig the piece out", skill: "engineering", outcomes: [
            { w: 60, text: "Engineering cuts it free in a day. It hums faintly in the hold.", fx: { arc: 2, d: 1 } },
            { w: 40, text: "The piece cracks as it comes loose. Half of it is still whole.", fx: { arc: 1, d: 1 } } ] },
          { label: "Stand guard while she works", skill: "tactical", outcomes: [
            { w: 55, text: "A Kethari scout comes sniffing, sees the Explorer and leaves. She works in peace.", fx: { arc: 1 } },
            { w: 45, text: "The scout does not leave.", fx: { arc: 1, fight: 0 } } ] } ] },
      { g: { id: "qe2g", title: "The ice moon",
          text: ["The second piece is frozen into an ice moon, deep under a glacier that moves a few metres a year.",
            "Corrow's instruments say it is still running, after all this time."],
          choices: [
            { label: "Melt a shaft down to it", skill: "engineering", cost: { e: 100 }, outcomes: [
              { w: 75, text: "The shaft reaches it in a day. The piece comes up glittering with ice.", fx: { arc: 2 } },
              { w: 25, text: "The shaft freezes over faster than you can cut it. You get the piece, damaged.", fx: { arc: 1 } } ] },
            { label: "Call it up from orbit", skill: "science", outcomes: [
              { w: 50, text: "The piece answers Corrow's signal and works its own way to the surface over two days.", fx: { arc: 2, d: 2 } },
              { w: 50, text: "It answers, then goes quiet again.", fx: { arc: 0, d: 2 } } ] },
            { label: "Land on the glacier", skill: "piloting", outcomes: [
              { w: 55, text: "The helm sets down on moving ice and the team digs fast.", fx: { arc: 2 } },
              { w: 45, text: "The ice shifts under the landing struts. The piece is recovered at a cost.", fx: { arc: 1, h: -8 } } ] } ] },
        b: { id: "qe2b", title: "The salvage barge",
          text: ["The second piece is gone. A Kethari salvage barge dug it up a week ago and is hauling it slowly toward the gate.",
            "Barges are lightly armed, but never travel alone."],
          choices: [
            { label: "Attack the barge's escort", skill: "tactical", outcomes: [
              { w: 65, text: "The escort turns to fight, and the barge's crew abandon it. The piece is yours if you win.", fx: { arc: 2, fight: 0 } },
              { w: 35, text: "The escort is heavier than it looked.", fx: { arc: 0, fight: 1 } } ] },
            { label: "Match course and slip aboard", skill: "piloting", outcomes: [
              { w: 50, text: "The helm holds the Explorer against the barge's blind side for an hour. The piece comes across by hand.", fx: { arc: 2 } },
              { w: 50, text: "The barge's crew spot you and open fire before you break off.", fx: { arc: 0, h: -10 } } ] },
            { label: "Record it as it passes", skill: "science", outcomes: [
              { w: 60, text: "Science records the piece's signature. Not the piece itself, but enough for Corrow to build a copy.", fx: { arc: 1, f: 1 } },
              { w: 40, text: "The barge's shielding blocks the readings.", fx: { arc: 0 } } ] } ] } },
      { g: { id: "qe3g", title: "The test",
          text: ["With two pieces joined, the Engine wakes for a moment. Every light on the Explorer flickers, and the shields drop to nothing for a second.",
            "Corrow wants to run it again, longer, to learn how it works. The crew would rather she did not."],
          choices: [
            { label: "Run the test, carefully", skill: "science", outcomes: [
              { w: 55, text: "For ten seconds every shield in the sector goes quiet, a Kethari patrol's included. Now you know what it can do.", fx: { arc: 2, f: 1 } },
              { w: 45, text: "The test fuses half the scanner's circuits.", fx: { arc: 1, h: -6, sd: 2 } } ] },
            { label: "Build a safe test rig", skill: "engineering", cost: { m: 25 }, outcomes: [
              { w: 80, text: "The rig takes the strain, and the readings are perfect.", fx: { arc: 2 } },
              { w: 20, text: "The rig works, but the readings make little sense.", fx: { arc: 1 } } ] },
            { label: "Check on the crew first", skill: "medical", outcomes: [
              { w: 60, text: "The crew's headaches are the Engine's hum, not illness. The medical readings tell Corrow more than her own instruments.", fx: { arc: 2 } },
              { w: 40, text: "The crew are fine. Corrow runs the test without you.", fx: { arc: 1 } } ] } ] },
        b: { id: "qe3b", title: "Corrow taken",
          text: ["Corrow's ship is found drifting, her cabin empty. A Kethari transport took her two days ago, with her notes.",
            "Without her, the Engine is just scrap."],
          choices: [
            { label: "Run down the transport", skill: "tactical", outcomes: [
              { w: 60, text: "You catch the transport, and its escort turns to fight. Corrow is aboard if you win.", fx: { arc: 2, fight: 0 } },
              { w: 40, text: "The transport is long gone. Its escort is not.", fx: { arc: 0, fight: 1 } } ] },
            { label: "Offer a trade for her", skill: "diplomacy", cost: { m: 40 }, outcomes: [
              { w: 60, text: "The transport captain values materials more than scholars. Corrow comes back angry and unharmed.", fx: { arc: 2 } },
              { w: 40, text: "The captain takes the materials and laughs.", fx: { arc: 0 } } ] },
            { label: "Rebuild her notes from her ship", skill: "science", outcomes: [
              { w: 55, text: "Her ship's memory holds most of her work. You can go on without her, for now.", fx: { arc: 1, f: 1 } },
              { w: 45, text: "The Kethari wiped it before they left.", fx: { arc: 0 } } ] } ] } },
      { g: { id: "qe4g", title: "The keeper",
          text: ["The last piece is guarded by the one who made it: a machine mind in a hollow asteroid, older than the Dominion and very tired.",
            "It asks only one question. Why should it trust anyone with its Engine again?"],
          choices: [
            { label: "Tell it about the Dominion", skill: "diplomacy", outcomes: [
              { w: 55, text: "It listens for a long time. Then the piece rises from the floor and drifts toward you.", fx: { arc: 2 } },
              { w: 45, text: "It gives you the piece, but not its blessing.", fx: { arc: 1 } } ] },
            { label: "Show it what you have learned", skill: "science", outcomes: [
              { w: 60, text: "It is pleased that someone understood. It gives you the piece, and corrects two of Corrow's mistakes.", fx: { arc: 2, f: 1 } },
              { w: 40, text: "It is not impressed.", fx: { arc: 0 } } ] },
            { label: "Offer to repair it", skill: "engineering", cost: { m: 30 }, outcomes: [
              { w: 75, text: "Engineering patches its failing cells. It gives you the piece, and tells you the Engine was built to protect, not to attack.", fx: { arc: 2 } },
              { w: 25, text: "The repairs are beyond the ship. It gives you the piece anyway.", fx: { arc: 1 } } ] } ] },
        b: { id: "qe4b", title: "The collector",
          text: ["The last piece belongs to a mercenary collector called Pellam Grey, who is selling it at a private auction. A Kethari buyer is bidding too.",
            "Grey does not care who wins, as long as the price is high."],
          choices: [
            { label: "Outbid the Kethari", skill: "diplomacy", cost: { m: 50 }, outcomes: [
              { w: 70, text: "The Kethari buyer storms out. Grey shakes your hand and hands over the piece.", fx: { arc: 2 } },
              { w: 30, text: "The Kethari bid more. Grey shrugs.", fx: { arc: 0 } } ] },
            { label: "Steal it during the auction", skill: "piloting", outcomes: [
              { w: 45, text: "The helm takes the shuttle in under Grey's sensors and out again before the bidding ends.", fx: { arc: 2 } },
              { w: 55, text: "Grey's guards are better than his sensors.", fx: { arc: -1, h: -10 } } ] },
            { label: "Ambush the winner", skill: "tactical", outcomes: [
              { w: 55, text: "The Kethari buyer wins, and leaves with a single escort. You are waiting.", fx: { arc: 2, fight: 0 } },
              { w: 45, text: "The buyer leaves with two escorts and the piece.", fx: { arc: 0, fight: 1 } } ] } ] } },
      { g: { id: "qe5g", title: "The assembly",
          text: ["Every piece is aboard. Corrow and engineering have three days to put the Quiet Engine together before the gate.",
            "It will work once, at full strength, for about a minute. It has to be fired at the right moment."],
          choices: [
            { label: "Assemble it by the old plans", skill: "engineering", outcomes: [
              { w: 60, text: "The pieces lock together as though they had never been apart.", fx: { arc: 2 } },
              { w: 40, text: "One joint will not seat properly. It should hold.", fx: { arc: 1 } } ] },
            { label: "Tune it to the flagship's shields", skill: "science", outcomes: [
              { w: 60, text: "Science matches it to the flagship's shield pattern, recorded at the last gate.", fx: { arc: 2, f: 1 } },
              { w: 40, text: "The tuning is a best guess.", fx: { arc: 1 } } ] },
            { label: "Plan when to fire it", skill: "tactical", outcomes: [
              { w: 55, text: "Tactical works out the moment: just as the flagship raises its shields to fire.", fx: { arc: 2 } },
              { w: 45, text: "There is no telling when the moment will come.", fx: { arc: 1 } } ] } ] },
        b: { id: "qe5b", title: "An incomplete engine",
          text: ["Pieces are missing. What remains might work, briefly, or might not work at all.",
            "Corrow thinks she can improvise the rest from the Explorer's own shield generator, if engineering will let her near it."],
          choices: [
            { label: "Let her use the shield generator", skill: "engineering", outcomes: [
              { w: 55, text: "It works, at a cost to the ship's own systems.", fx: { arc: 2, h: -6 } },
              { w: 45, text: "It does not work, and the generator needs repairs.", fx: { arc: 0, h: -6 } } ] },
            { label: "Build the missing pieces", skill: "science", cost: { m: 40 }, outcomes: [
              { w: 60, text: "Corrow's copies are rough, but they fit.", fx: { arc: 2 } },
              { w: 40, text: "Only some of the copies fit.", fx: { arc: 1 } } ] },
            { label: "Save it for later", skill: "diplomacy", outcomes: [
              { w: 70, text: "She agrees, reluctantly. The Engine will at least hum at the gate.", fx: { arc: 1 } },
              { w: 30, text: "She leaves in her own ship, taking the Engine with her.", fx: { arc: 0 } } ] } ] } }
    ],
    endings: [
      { title: "The Dominion's engine", text: "The flagship has a piece of the Quiet Engine fitted to its own hull. The Dominion found the pieces you missed and turned the Engine's protection to its own use. The flagship is tougher than ever." },
      { title: "Silence", text: "The Engine hums, sputters and goes still. Whatever it was, it will not help today." },
      { title: "A quiet moment", text: "The Engine fires as the battle opens. For a moment the flagship's shields falter, and they never quite recover." },
      { title: "The Engine sings", text: "The Engine fires at full strength. The flagship's shields fall, and a whole section of its armour goes dead." },
      { title: "The keeper's gift", text: "The Engine fires, and the keeper's ancient sentinels come with it, old machines in their hundreds. By the time the Explorer closes, the flagship is crippled." }
    ] }
];
