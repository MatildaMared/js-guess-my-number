'use strict';

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to update text
const updateText = (query, text) => {
    document.querySelector(query).textContent = text;
}

// Game functionality
document.querySelector(".check").addEventListener("click", function () {

    // Store user guess
    const guess = Number(document.querySelector(".guess").value); 

    if (!guess) {
        // When there is no input
        updateText(".message", "😟 No number!");

    // Player wins
    } else if (guess === secretNumber) {
        updateText('.message', '🥳 Correct number!');
        updateText(".number", secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = "30rem";

        // Update highscore
        if (score > highscore) {
            highscore = score;
            updateText('.highscore', highscore);
        }

    // Guess is too high or too low
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score--;           
            updateText(".score", score);
        } else {
            updateText('.message', '😟 You lost the game!');
            updateText(".score", 0);
        }
    } 
})

// Restore the game
document.querySelector(".again").addEventListener("click", function () {

    // Resetting background color
    document.querySelector("body").style.backgroundColor = "mediumpurple";

    // Resetting secret number and styles
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    updateText(".number", "?");
    document.querySelector('.number').style.width = '15rem';

    // Resetting score
    score = 20;
    updateText(".score", score);

    // Resetting message
    updateText(".message", "Start guessing...")

    // Resetting guess input field
    document.querySelector(".guess").value = "";
})