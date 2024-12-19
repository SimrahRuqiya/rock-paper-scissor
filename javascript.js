let score=0;
let humanScore=0;
let computerScore=0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let answer = prompt("Choose R/P/S(write full name pls): ");
    return answer;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const resultMessage = document.querySelector("#result-message");
    resultMessage.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.`;
    
    if (humanChoice === computerChoice) {
        resultMessage.textContent += " It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        resultMessage.textContent += " You win this round!";
        humanScore++;
    } else {
        resultMessage.textContent += " You lose this round!";
        computerScore++;
    }
}

function updateScore() {
    const scoreDisplay = document.querySelector("");
    scoreDisplay.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        
        console.log("Bot: " + computerSelection)
        console.log("Human: " + humanSelection)
        
        playRound(humanSelection,computerSelection);
        console.log("*********************************")
    }
    console.log("Your Score: " + humanScore)
    console.log("Bot Score: " + computerScore)
    if (humanScore > computerScore) {
        console.log("You Won!")
    } else if (computerScore > humanScore) {
        console.log("You Lost")
    } else {
        console.log("Play Again")
    }
}

document.querySelector("#human-rockbtn").addEventListener("click", () => playRound("Rock"));
document.querySelector("#human-paperbtn").addEventListener("click", () => playRound("Paper"));
document.querySelector("#human-scissorbtn").addEventListener("click", () => playRound("Scissor"));

playGame();