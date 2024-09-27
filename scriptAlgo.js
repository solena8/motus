import { words } from "./words.js";

export function normalizeWord(word) {
  // makes sure guesses and word to guess are not case sensitive
  const normWord = word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const upperWord = normWord.toUpperCase();
  return upperWord;
}

const rawBase = words[Math.floor(Math.random() * words.length)]; //picks a random word from the array in word.js
export const baseWord = normalizeWord(rawBase); // normalizes the word to guess

export function getClues(base, guess) {
  const arrayBase = base.split("");
  const arrayGuess = guess.split(""); // makes an array of the word to guess and the guess word
  const wellPlaced = [];
  const notWellPlaced = [];
  const notInWord = [];
  const misplaced = [];

  if (guess.length === base.length) {
    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] === arrayGuess[i]) {
        wellPlaced.push(arrayGuess[i]); // checks for letter in common placed at the same index in the array
      } else {
        notWellPlaced.push(arrayGuess[i]);
        wellPlaced.push("*"); // pushes in the well placed array for future hints
      }
    }
    for (const char of arrayGuess) {
      if (!arrayBase.includes(char)) {
        // checks if in the remaining letters some letters in the guess are not present in the word to guess
        notInWord.push(char); // pushes in the not in word array for future hints
      } else {
        misplaced.push(char);
        // the rest of the letters is de facto good letters misplaced, pushes in the misplaced array for future hints
      }
    }
    return {
      guess: guess,
      wellPlaced: wellPlaced,
      misplaced: misplaced,
      notInWord: notInWord, // returns all the hints arrays
    };
  } else {
    alert(`Le mot doit être composé de ${base.length} lettres`);
    // if the guess is not the same length as the word to guess, error message
  }
}
