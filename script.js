// Game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

// Get DOM elements
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

// Guess button event listener
guessBtn.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    attemptsLeft--;
    attempts.textContent = `Attempts Left: ${attemptsLeft}`;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly! 🎉`;
        message.style.color = "green";
        disableGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try a smaller number.";
        message.style.color = "orange";
    } else {
        message.textContent = "Too low! Try a larger number.";
        message.style.color = "orange";
    }

    if (attemptsLeft <= 0) {
        message.textContent = `Game Over! The correct number was ${randomNumber}.`;
        message.style.color = "red";
        disableGame();
    }
});

// Reset button event listener
resetBtn.addEventListener("click", resetGame);

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    message.textContent = "Make your first guess!";
    message.style.color = "#555";
    attempts.textContent = "Attempts Left: 10";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
}

// Function to disable input and guess button after game ends
function disableGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
}
