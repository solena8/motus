# Word Guessing Game

This repository contains a simple word-guessing game implemented in JavaScript. The goal of the game is to guess the correct word by making guesses and receiving feedback on which letters are well-placed, misplaced, or not in the word at all. This project was developed as a part of a coding exercise.

## Description

The game starts by selecting a random word from a predefined list of words. The player then tries to guess the word, with feedback provided after each guess:

- **Well-Placed**: Letters that are in the correct position.
- **Misplaced**: Letters that are in the word but not in the correct position.
- **Not In Word**: Letters that are not in the word.

The player has a limited number of attempts to guess the word correctly.

## Usage

### Normalizing Words

The `normalizeWord` function is used to normalize a word by removing diacritics (accents) and converting it to uppercase.


### Starting the Game

The game starts by selecting a random word from the list and normalizing it.

```javascript
const baseWord = normalizeWord(rawBase);
startGame(baseWord);
```

### Making a Guess

The player makes a guess by entering a word. The game provides feedback on the guess, highlighting well-placed, misplaced, and incorrect letters.

```javascript
makeAGuess(baseWord, guessWord);
```

### Checking for a Win

The game checks if the player's guess matches the base word. If the player wins, a congratulatory message is displayed.

```javascript
if (win(baseWord, guessWord)) {
  console.log("Congratulations! You've guessed the word.");
}
```

### Full Game Flow

The game flow is controlled by the `game` function, which checks for a win, provides feedback, and counts the number of attempts.

```javascript
game(baseWord, guessWord);
```

## Game Logic

The game logic is implemented as follows:

1. **normalizeWord**: Normalizes the word by removing diacritics and converting it to uppercase.
2. **getClues**: Provides feedback on the player's guess, categorizing each letter as well-placed, misplaced, or not in the word.
3. **startGame**: Initializes the game by displaying the first letter of the base word.
4. **makeAGuess**: Handles the player's guess, updating the display based on the feedback.
5. **win**: Checks if the player has guessed the word correctly.
6. **game**: Manages the overall game flow, including turn counting and win/loss conditions.

