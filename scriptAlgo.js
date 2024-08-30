const { words } = require("./words");

function normalizeWord(word) {
  const normWord = word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const upperWord = normWord.toUpperCase();
  return upperWord;
}

const rawBase = words[Math.floor(Math.random() * words.length)];
const baseWord = normalizeWord(rawBase);
let turns = 0;

function getClues(base, guess) {
  const arrayBase = base.split("");
  const arrayGuess = guess.split("");
  const wellPlaced = [];
  const notWellPlaced = [];
  const notInWord = [];
  const misplaced = [];

  if (guess.length === base.length) {
    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] === arrayGuess[i]) {
        wellPlaced.push(arrayGuess[i]);
      } else {
        notWellPlaced.push(arrayGuess[i]);
        wellPlaced.push("*");
      }
    }
    for (const char of arrayGuess) {
      if (!arrayBase.includes(char)) {
        notInWord.push(char);
      } else {
        misplaced.push(char);
      }
    }
    return {
      guess: guess,
      wellPlaced: wellPlaced,
      misplaced: misplaced,
      notInWord: notInWord,
    };
  } else {
    alert(`Le mot doit être composé de ${base.length} lettres`);
  }
}

module.exports = { normalizeWord };
