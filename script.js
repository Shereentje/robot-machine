// -----------------------------
// Variabelen voor spelstatus
// -----------------------------
let playerName = "";
let playerScore = 0;
let robotScore = 0;

// -----------------------------
// DOM-elementen opslaan
// Dit maakt de code netter en voorkomt herhaling
// -----------------------------
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const nameInput = document.getElementById("nameInput");
const welcomeText = document.getElementById("welcomeText");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");

// Mogelijke keuzes van het spel
const choices = ["rock", "paper", "scissors"];

// -----------------------------
// Confetti effect bij winst
// -----------------------------
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}


// -----------------------------
// Start het spel
// Controleert of de gebruiker een naam heeft ingevuld
// Daarna wisselt het scherm van startscherm naar gamescherm
// -----------------------------
function startGame() {
    const inputValue = nameInput.value.trim();

    if (inputValue === "") {
        alert("Vul je naam in!");
        return;
    }

    playerName = inputValue;

    // DOM manipulatie: schermen tonen/verbergen
    startScreen.hidden = true;
    gameScreen.hidden = false;

    // DOM manipulatie: welkomsttekst aanpassen
    welcomeText.innerText = `Succes ${playerName}! Versla robot machine 🤖`;

    // Score direct goed tonen bij de start
    updateScore();
}

// -----------------------------
// Bepaalt willekeurig de keuze van de robot
// Math.random kiest een random index uit de array
// -----------------------------
function robotChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// -----------------------------
// Werkt de scoreweergave bij in de DOM
// -----------------------------
function updateScore() {
    scoreText.innerText = `${playerName}: ${playerScore} | Robot: ${robotScore}`;
}

// -----------------------------
// Bepaalt wie wint op basis van de keuze van de speler
// en de willekeurige keuze van de robot
// -----------------------------
function play(playerChoice) {
    const robot = robotChoice();
    let resultMessage = "";

    if (playerChoice === robot) {
        resultMessage = "Gelijkspel";
    } else if (
        (playerChoice === "rock" && robot === "scissors") ||
        (playerChoice === "paper" && robot === "rock") ||
        (playerChoice === "scissors" && robot === "paper")
    ) {
        resultMessage = `Goed gedaan ${playerName}! Jij wint 🎉`;
        playerScore++;

        // 🎉 Confetti bij winst
        launchConfetti();

    } else {
        resultMessage = "De robot wint 🤖";
        robotScore++;
    }

    resultText.innerText = `${resultMessage} (${playerChoice} vs ${robot})`;

    updateScore();
}