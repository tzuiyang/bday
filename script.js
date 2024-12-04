// Variables
const startButton = document.getElementById("start-button");
const gameArea = document.getElementById("game-area");
const box = document.getElementById("box");
const result = document.getElementById("result");
const resultMessage = document.getElementById("result-message");
const resultImage = document.getElementById("result-image");
const retryButton = document.getElementById("retry-button");

let timer;

// Start Game
startButton.addEventListener("click", () => {
    startButton.style.display = "none"; // Hide the start button
    gameArea.style.display = "block"; // Show the game area
    box.style.display = "block"; // Show the moving box

    // End the game if the user doesn't click the box within 10 seconds
    timer = setTimeout(() => {
        gameOver(false);
    }, 10000);
});

// Handle Box Click (Win Scenario)
box.addEventListener("click", () => {
    clearTimeout(timer); // Stop the timer
    gameOver(true); // Trigger win scenario
});

// Handle Retry
retryButton.addEventListener("click", () => {
    retryButton.style.display = "none"; // Hide retry button
    result.style.display = "none"; // Hide result message
    gameArea.style.display = "block"; // Show game area again
    box.style.display = "block"; // Show the box again

    // Restart the timer
    timer = setTimeout(() => {
        gameOver(false);
    }, 10000);
});

// Game Over Function
function gameOver(win) {
    gameArea.style.display = "none"; // Hide the game area
    box.style.display = "none"; // Hide the box
    result.style.display = "block"; // Show the result area

    if (win) {
        // If the user wins
        resultMessage.textContent = "🎉 Happy Birthday! 🎂 🎁";
        resultImage.src = "download.jpg"; // Replace with your image path
        resultImage.style.display = "block";
        retryButton.style.display = "none"; // No retry button if they win
    } else {
        // If the user loses
        resultMessage.textContent = "Oh no! Try again!";
        resultImage.style.display = "none"; // Hide the image
        retryButton.style.display = "block"; // Show the retry button
    }
}
