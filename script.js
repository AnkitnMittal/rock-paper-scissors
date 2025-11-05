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

function updateScores() {
    document.querySelector("#humanScore").textContent = humanScore;
    document.querySelector("#computerScore").textContent = computerScore;
}

function playRound(humanChoice, computerChoice) {
    const messageWindow = document.querySelector("#message");

    if (humanChoice == computerChoice) {
        messageWindow.textContent = `🤝 It's a tie! Both chose ${humanChoice.toUpperCase()}.`;
        return;
    }

    const win =
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")

    if (win) {
        messageWindow.textContent = `🎉 You Win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
        humanScore++;
    }
    else {
        messageWindow.textContent = `💥 You Lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`;
        computerScore++;
    }
}

const btnList = document.querySelector(".btnList");
btnList.addEventListener("click", (event) => {
    if (humanScore == 5) {
        document.querySelector("#message").textContent = "🎉 You Win!";
        return;
    }
    else if (computerScore == 5) {
        document.querySelector("#message").textContent = "💥 You Lose!";
        return;
    }

    let target = event.target;

    const humanChoice = target.id;
    const computerChoice = getComputerChoice();

    document.querySelector("#humanchoice").textContent = humanChoice.toUpperCase();
    document.querySelector("#computerchoice").textContent = computerChoice.toUpperCase();

    playRound(humanChoice, computerChoice);
    updateScores();
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", (event) => {
    document.querySelector("#message").textContent = "Click a Button to START THE GAME!";
    humanScore = 0;
    computerScore = 0;
    updateScores();
});