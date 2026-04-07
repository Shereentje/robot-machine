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
        resultMessage = Goed gedaan ${playerName}! Jij wint 🎉;
        playerScore++;

        // Confetti bij winst
        launchConfetti();

    } else {
        resultMessage = "De robot wint 🤖";
        robotScore++;
    }

    resultText.innerText = ${resultMessage} (${playerChoice} vs ${robot});

    updateScore();
}