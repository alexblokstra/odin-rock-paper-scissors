const result = document.getElementById("result");
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

let choiceButtons = document.getElementsByClassName("choice");

for (let button of choiceButtons) {
    button.addEventListener("click", function(event) {
        const humanChoice = event.target.value;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
}

function playRound(humanChoice, computerChoice) {
    if (roundsPlayed >= maxRounds) {
        resetGame();
    };

    let resultText = "";

    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        resultText = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    resultText += `<br>You: ${humanScore} | Computer: ${computerScore}`;

    roundsPlayed++;
    resultText += `<br> <i> Round: ${roundsPlayed}</i>`;

    if (roundsPlayed === maxRounds) {
        if (humanScore > computerScore) {
            resultText += `<br><strong>🎉 You won the game!</strong>`;
        } else if (humanScore < computerScore) {
            resultText += `<br><strong>💀 You lost the game.</strong>`;
        } else {
            resultText += `<br><strong>🤝 It's a tie!</strong>`;
        }
    }

    result.innerHTML = resultText;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}
