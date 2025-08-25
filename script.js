


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    };    

    function playRound(humanChoice, computerChoice) {

        console.log(humanChoice);
        console.log(computerChoice);

        if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            console.log("draw")
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            console.log("You loose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            console.log("You loose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            console.log("You loose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    };
    
    function getComputerChoice() {
        let max = 3;
        let min = 0;

        randomNumber = Math.floor(Math.random() * (max - min) ) + min;

        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else if (randomNumber === 2) {
            return "scissors";
        };  
    };

    function getHumanChoice() {
        let choice = prompt("Rock, paper or scissors?").toLowerCase();
        
        return choice
    };
};

playGame();
