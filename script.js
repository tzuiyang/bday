// Variables
const startButton = document.getElementById("start-button");
const gameArea = document.getElementById("game-area");
const imagesContainer = document.getElementById("images-container");
const result = document.getElementById("result");
const resultMessage = document.getElementById("result-message");
const resultImage = document.getElementById("result-image");
const retryButton = document.getElementById("retry-button");

let selectedImages = [];
let correctImages = ["11.jpg", "12.jpg", "13.jpg"]; // Add paths for correct images
let allImages = [
    ...correctImages,
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

// Start Game
startButton.addEventListener("click", () => {
    startButton.style.display = "none"; // Hide the start button
    gameArea.style.display = "block"; // Show the game area
    displayImages(); // Display images

    // Reset variables
    selectedImages = [];
    result.style.display = "none";
});

// Display Images
function displayImages() {
    // Shuffle images
    const shuffledImages = allImages.sort(() => Math.random() - 0.5);

    // Clear previous images
    imagesContainer.innerHTML = "";

    // Create and display new images
    shuffledImages.forEach((image, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.addEventListener("click", () => handleImageClick(imgElement, image));
        imagesContainer.appendChild(imgElement);
    });
}

// Handle Image Click
function handleImageClick(imgElement, image) {
    if (selectedImages.includes(image)) return; // Ignore if already selected

    // Highlight the selected image
    imgElement.classList.add("selected");
    selectedImages.push(image);

    // Check if all correct images are selected
    if (selectedImages.length === correctImages.length) {
        if (correctImages.every(img => selectedImages.includes(img))) {
            gameOver(true); // User wins
        } else {
            gameOver(false); // User loses
        }
    }
}

// Game Over Function
function gameOver(win) {
    imagesContainer.innerHTML = ""; // Clear the images
    gameArea.style.display = "none";
    result.style.display = "block";

    if (win) {
        resultMessage.textContent = "親愛的娘 生日快樂!!! 以後做更猛的遊戲給你";
        resultImage.src = "final.jpg"; // Replace with your image path
        resultImage.style.display = "block";
        retryButton.style.display = "none"; // No retry button if they win
    } else {
        resultMessage.textContent = "你還真以為你是jennie!!????";
        resultImage.style.display = "none";
        retryButton.style.display = "block";
    }
}

// Handle Retry
retryButton.addEventListener("click", () => {
    retryButton.style.display = "none"; // Hide retry button
    result.style.display = "none"; // Hide result message
    gameArea.style.display = "block"; // Show game area again

    // Reset variables
    selectedImages = [];
    displayImages(); // Redisplay images
});
