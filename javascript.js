let score=0;
let humanScore=0;
let computerScore=0;

function getComputerChoice() {
    let val=Math.floor(Math.random() * 3)
    if (val === 0) {
        return "Rock";
    } else if (val === 1) {
        return "Paper";
    } else if (val === 2) {
        return "Scissor";
    }
}

function getHumanChoice() {
    let answer = prompt("Choose R/P/S(write full name pls): ");
    return answer;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("Loss");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("Win");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Win");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("Loss");
        computerScore++;
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("Loss");
        computerScore++;
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("Win");
        humanScore++;
    } else {
        console.log("Tie");
    }
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

playGame();