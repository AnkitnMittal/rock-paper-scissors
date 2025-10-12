let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0)
        return "rock";
    else if (rand == 1)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock, paper, scissors)");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice)
        console.log("Tie!");
    else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "scissors")) {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
    }
}

playGame();
