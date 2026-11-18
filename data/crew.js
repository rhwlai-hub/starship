/* Starship: crew names and portraits. Loaded by index.html before the game itself.
   Names for new officers, and the 30 portraits with the names that go with each. */
window.STARSHIP = window.STARSHIP || {};

STARSHIP.GIVEN = ["Ilse", "Tomas", "Mara", "Desh", "Oren", "Kaia", "Bram", "Sena", "Idris", "Liv", "Teo", "Nadia", "Cael", "Yuki", "Ravi", "Esme", "Joss", "Anouk", "Pell", "Hana", "Milo", "Zara", "Ines", "Corin"];
STARSHIP.FAMILY = ["Vasko", "Okafor", "Lindqvist", "Marr", "Tanaka", "Halloran", "Ezeh", "Brannock", "Ferreira", "Solberg", "Achterberg", "Navarro", "Quell", "Ruiz", "Petrakis", "Ostrander",
  "Adeyemi", "Castellan", "Devane", "Iwata", "Kowal", "Lachance", "Moreau", "Okonjo", "Varga", "Whitlock", "Yarrow", "Zelenko"];
/* Crew portraits: six for each role, mostly human, with three original species (Ossari, Thren, Vauk).
   Each officer is given a portrait not already in use, and a name from that portrait's own list. */
STARSHIP.PORTRAITS = [
  { id: "p01", role: "sci", sp: "human", names: ["Mei Takahara", "Yuna Seo", "Lin Hao"] },
  { id: "p02", role: "sci", sp: "human", names: ["Kwame Asante", "Tunde Okafor", "Kofi Mensah"] },
  { id: "p03", role: "sci", sp: "human", names: ["Ingrid Solberg", "Astrid Lindqvist", "Sigrid Haug"] },
  { id: "p04", role: "sci", sp: "human", names: ["Arjun Mehta", "Rohan Iyer", "Dev Kapoor"] },
  { id: "p05", role: "sci", sp: "human", names: ["Ari Navarro", "Sol Ferreira", "Cris Ruiz"] },
  { id: "p06", role: "sci", sp: "ossari", names: ["Isso Venh", "Teru Ashvel", "Ollo Saav"] },
  { id: "p07", role: "cmd", sp: "human", names: ["Amara Whitlock", "Nia Adeyemi", "Grace Okonjo"] },
  { id: "p08", role: "cmd", sp: "human", names: ["Sione Tuilagi", "Mana Kealoha", "Tama Faleolo"] },
  { id: "p09", role: "cmd", sp: "human", names: ["Leila Haddad", "Yasmin Darwish", "Rana Khoury"] },
  { id: "p10", role: "cmd", sp: "human", names: ["Pavel Zelenko", "Tomas Kowal", "Mirek Varga"] },
  { id: "p11", role: "cmd", sp: "human", names: ["Ruby Walker", "Jessie Morgan", "Kirra Thompson"] },
  { id: "p12", role: "cmd", sp: "thren", names: ["Kaelor Venn", "Ithra Sallow", "Oruun Kade"] },
  { id: "p13", role: "sec", sp: "human", names: ["Kenji Iwata", "Daisuke Tanaka", "Ren Mori"] },
  { id: "p14", role: "sec", sp: "human", names: ["Aroha Ngata", "Hine Parata", "Mere Tane"] },
  { id: "p15", role: "sec", sp: "human", names: ["Liam Brannock", "Conor Halloran", "Sean Devane"] },
  { id: "p16", role: "sec", sp: "human", names: ["Lucia Castellan", "Marisol Vega", "Ines Ortega"] },
  { id: "p17", role: "sec", sp: "human", names: ["Youssef Amrani", "Karim Benali", "Idris Haddou"] },
  { id: "p18", role: "sec", sp: "vauk", names: ["Brann Hollo", "Mok Tessaly", "Grum Awen"] },
  { id: "p19", role: "med", sp: "human", names: ["Hana Park", "Ji-woo Kim", "Soo-ah Lee"] },
  { id: "p20", role: "med", sp: "human", names: ["Emeka Okafor", "Chidi Eze", "Tobi Adeyemi"] },
  { id: "p21", role: "med", sp: "human", names: ["Camila Moreau", "Beatriz Lachance", "Rafaela Souza"] },
  { id: "p22", role: "med", sp: "human", names: ["Vikram Rao", "Anand Krishnan", "Suresh Pillai"] },
  { id: "p23", role: "med", sp: "human", names: ["Eleni Petrakis", "Sofia Andreou", "Daphne Kostas"] },
  { id: "p24", role: "med", sp: "ossari", names: ["Vessa Orin", "Thal Ivren", "Ume Saskar"] },
  { id: "p25", role: "eng", sp: "human", names: ["Mateo Navarro", "Diego Ramos", "Rafael Cruz"] },
  { id: "p26", role: "eng", sp: "human", names: ["Lian Wu", "Xia Chen", "Jing Zhou"] },
  { id: "p27", role: "eng", sp: "human", names: ["Angus Marr", "Callum Ostrander", "Fergus Quell"] },
  { id: "p28", role: "eng", sp: "human", names: ["Selam Bekele", "Hanna Tesfaye", "Meron Alemu"] },
  { id: "p29", role: "eng", sp: "vauk", names: ["Tavvo Rusk", "Pell Haddin", "Orm Kessick"] },
  { id: "p30", role: "eng", sp: "thren", names: ["Sarrik Vane", "Elowe Tarn", "Quill Arath"] }
];
