const words = [
  "DIRAI",
  "RAYEE",
  "TRAIN",
  "PISTE",
  "EUROS",
  "TARTE",
  "PHARE",
  "USAGE",
  "MIAOU",
  "BORNA",
  "AMUSE",
  "SITUE",
  "FOUET",
  "AMBRE",
  "DOUZE",
  "CALMA",
  "VAGUE",
  "ZEBRE",
  "GEOLE",
  "TABLE",
  "ETAPE",
  "BUSTE",
  "CABAS",
  "ALPIN",
  "FUSSE",
  "SAOUL",
  "BAZAR",
  "MEURE",
  "EPICE",
  "TUEUR",
  "LOCAL",
  "DEBUT",
  "MURET",
  "VISER",
  "PIECE",
  "PRISE",
  "GALOP",
  "STRIE",
  "BOISE",
  "CRIAI",
  "GLOBE",
  "VIENS",
  "FERAI",
  "LEGAL",
  "NUISE",
  "MENTE",
  "AGACA",
  "FURAX",
  "AIGRI",
  "PEINE",
  "SOTTE",
  "FONDU",
  "FORUM",
  "FIGUE",
  "LOURD",
  "ANIMA",
  "ECRIA",
  "SIROP",
  "ROUER",
  "GARNI",
  "RASER",
  "EUSSE",
  "CANON",
  "TORSE",
  "MOTTE",
  "REAGI",
  "PARME",
  "MICHE",
  "FUGUE",
  "SNACK",
  "CRIER",
  "EXCLU",
  "GACHE",
  "CHAUD",
  "PROIE",
  "PARAI",
  "VIVRE",
  "SALSA",
  "TITAN",
  "PONDU",
  "CHERI",
  "GAVER",
  "PUANT",
  "TAPER",
  "PINCE",
  "TIEDE",
  "FLUTE",
  "PONCE",
  "PANNE",
  "OMBRE",
  "OUBLI",
  "EVADE",
  "GRAAL",
  "PITRE",
  "VAGIN",
  "BISOU",
  "SOMME",
  "REPAS",
  "BOUDE",
  "PLAIN",
  "MAJOR",
  "RESTA",
  "JEUNE",
  "HABIT",
  "MUTER",
  "PUISE",
  "IMITA",
  "REMET",
  "FRELE",
  "ABOLI",
  "TARIF",
  "GAULE",
  "RICHE",
  "ENFER",
  "CYCLE",
  "SAMBA",
  "NAVRE",
  "AURAI",
  "RINCA",
  "JUSTE",
  "LECON",
  "PENTU",
  "COUPA",
  "LIVRA",
  "RUGIT",
  "AUDIO",
  "MERCI",
  "GLAND",
  "SEMER",
  "OTAGE",
  "DECHU",
  "TERNE",
  "CHILI",
  "FORGE",
  "MOINS",
  "FAUNE",
  "GAGNE",
  "SORTI",
  "COUSU",
  "ACTIF",
];

function getRandomWord(wordlist) {
  const base = wordlist[Math.floor(Math.random() * wordlist.length)];
  return base;
}

const base = getRandomWord(words);
console.log("Random word:", base, typeof base);

function tryWord(word, base) {
  let upperWord = word.toUpperCase();
  if (upperWord === base) {
    return true;
  } else if (word.length === base.length) {
    let wellPlaced = [];
    let notInWord = [];
    let notWellPlaced = [];
    let missplaced = [];

    let arrayBase = base.split("");
    let arrayWord = upperWord.split("");

    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] === arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else {
        notWellPlaced.push(arrayWord[i]);
      }
    }
    for (const char of notWellPlaced) {
      if (arrayBase.includes(char) === false) {
        notInWord.push(char);
      } else {
        missplaced.push(char);
      }
    }
    console.log({
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    });
    return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    };
  } else {
    document.getElementById(
      "win"
    ).innerText = `You need to guess a ${base.length} letters word`;
  }
}

// 3 etats : gagné erreur ou hints
// front pas dans la fonction tryWord
// vérifier caractères
// (vérifier existence mot)
// conserver historique hints

function guess(baseToGuess) {
  document.getElementById("win").innerText = "";
  let word = document.getElementById("word").value;
  let result = tryWord(word, baseToGuess);
  if (result === true) {
    document.getElementById("win").innerText = "Vous avez gagné";
    return;
  }
  document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerText =
    "Mal placé: " + result.missplaced.join(", ");
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", ");
}


module.exports = { getRandomWord, words};