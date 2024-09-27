import { getClues, normalizeWord, baseWord } from "./scriptAlgo.js";

let turns = 0; // keeps tracks of the nb of turns =, used for the game function (game over)

function startGame(base) {
  // gives the first letter of word to guess as a hint
  const startLetter = document.getElementById("startLetter");
  startLetter.innerText = base[0];
}

function makeAGuess(base, guess) {
  const result = getClues(base, guess); // calls the function that gives all hints arrays based on the guess
  const wordContainer = document.getElementById("word-container");
  let startLettervar = document.getElementById("startLetter");
  if (startLettervar) {
    // removes the first letter hint that was just for the beginning of the game
    startLettervar.remove();
  }
  for (let i = 0; i < result.guess.length; i++) {
    //Iterates through the guessed letters and appends them to the display.
    const char = result.guess[i];
    const span = document.createElement("span");
    span.innerText = char;

    if (result.wellPlaced[i] === char) {
      // Applies different styles based on the placement of the letter in the word.
      span.className = "well-placed";
    } else if (result.misplaced.includes(char)) {
      span.className = "misplaced";
    } else {
      span.className = "not-in-word";
    }
    span.style.height = "45px";
    span.style.width = "45px";
    span.style.display = "inline-block";
    span.style.textAlign = "center";
    span.style.lineHeight = "45px";
    span.style.color = "rgb(0, 0, 0)";
    span.style.fontWeight = "bold";

    // Appends the letter span to the word container.
    wordContainer.appendChild(span);
  }

  // Adds a line break after each guess.
  const br = document.createElement("br");
  wordContainer.appendChild(br);
}

function win(base, guess) {
  // Checks if the user has guessed the word correctly.
  if (guess === base) {
    document.getElementById("info").innerText = "Bravo ! Tu as deviné le mot !";
    const wordContainer = document.getElementById("winning-word"); // displays winning word
    for (let i = 0; i < guess.length; i++) {
      const span = document.createElement("span");
      span.className = "well-placed";
      span.innerText = guess[i];
      wordContainer.appendChild(span);
    }

    return true;
  }
  return false;
}

function game(base, guess) {
  // Main game function that handles guesses and game over logic.
  if (win(base, guess)) {
    return;
  }
  turns += 1; // Increment the turn count.
  makeAGuess(base, guess);
  if (turns >= 6) {
    // Checks if the maximum number of turns (6) has been reached.
    setTimeout(() => {
      document.getElementById(
        "info"
      ).innerText = `Désolé.e, tu as perdu ! Le mot était : ${base}`; // Game over message.
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // when clicking on the start game button, startGame function called
  document.getElementById("start").addEventListener("click", function () {
    startGame(baseWord);
  });

  document.getElementById("guess").addEventListener("click", function () {
    // gets the guess in the word input, normalizes it with the function
    // calls the game function with this guessWord as an argument
    const rawWord = document.getElementById("word").value;
    const guessWord = normalizeWord(rawWord);
    game(baseWord, guessWord);
  });
});
