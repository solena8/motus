function startGame(base) {
  const startLetter = document.getElementById("startLetter");
  startLetter.innerText = base[0];
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start").addEventListener("click", function () {
    startGame(baseWord);
  });

  document.getElementById("guess").addEventListener("click", function () {
    const rawWord = document.getElementById("word").value; 
    const guessWord = normalizeWord(rawWord); 
    game(baseWord, guessWord);
  });
});

function makeAGuess(base, guess) {
  const result = getClues(base, guess);
  const wordContainer = document.getElementById("word-container");
  let startLettervar = document.getElementById("startLetter");
  if (startLettervar) {
    startLetter.remove();
  }
  for (let i = 0; i < result.guess.length; i++) {
    const char = result.guess[i];
    const span = document.createElement("span");
    span.innerText = char;

    if (result.wellPlaced[i] === char) {
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
    wordContainer.appendChild(span);
  }

  const br = document.createElement("br");
  wordContainer.appendChild(br);
}

function win(base, guess) {
  if (guess === base) {
    document.getElementById("info").innerText = "Bravo ! Tu as deviné le mot !";
    const wordContainer = document.getElementById("winning-word");
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
  if (!win(base, guess)) {
    if (turns >= 5) {
      document.getElementById(
        "info"
      ).innerText = `Désolé.e, tu as perdu ! Le mot était : ${base}`;
    } else {
      makeAGuess(base, guess);
      turns += 1;
    }
  }
}

