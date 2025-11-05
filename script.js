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

const btnList = document.querySelector(".btnList");
btnList.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
});

