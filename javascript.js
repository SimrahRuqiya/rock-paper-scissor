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
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("Win");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Win");
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("Loss");
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("Loss");
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("Win");
    } else {
        console.log("Tie");
    }
}

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

console.log("Bot: " + computerSelection)
console.log("Human: " + humanSelection)

playRound(humanSelection, computerSelection);