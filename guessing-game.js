// Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.

// Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

// After a correct guess, the game ends.

function guessingGame() {
	let secretNum = Math.floor(Math.random() * 100);
	let gameOver = false;
	let guessCount = 0;
	return function (num) {
		if (gameOver) {
			return "The game is over, you already won!";
		}
		guessCount++;
		if (num < secretNum) {
			return `${num} is too low!`;
		} else if (num > secretNum) {
			return `${num} is too high!`;
		} else {
			gameOver = true;
			return `You win! You found ${secretNum} in ${guessCount} guesses.`;
		}
	};
}

module.exports = { guessingGame };
