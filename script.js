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
        console.log("Draw!");
    else if (humanChoice == "rock" && computerChoice == "paper")
        console.log("You Lose! Paper beats Rock");
    else if (humanChoice == "rock" && computerChoice == "scissors")
        console.log("You Win! Rock beats Scissors");
    else if (humanChoice == "paper" && computerChoice == "rock")
        console.log("You Win! Paper beats Rock");
    else if (humanChoice == "paper" && computerChoice == "scissors")
        console.log("You Lose! Scissors beats Paper");
    else if (humanChoice == "scissors" && computerChoice == "rock")
        console.log("You Lose! Rock beats Scissors");
    else if (humanChoice == "scissors" && computerChoice == "paper")
        console.log("You Win! Scissors beats Paper");
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);