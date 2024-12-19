document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    const playerScoreDisplay = document.querySelector("#playerScore");
    const computerScoreDisplay = document.querySelector("#compScore");
    const resultMessage = document.querySelector("#result-message");

    const botRock = document.querySelector("#comp-rockbtn");
    const botPaper = document.querySelector("#comp-paperbtn");
    const botScissor = document.querySelector("#comp-scissorbtn");

    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissor"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function playRound(humanChoice) {
        if (round >= 5) return; 
        const computerChoice = getComputerChoice();

        resetBotButtons();

        if (computerChoice === "Rock") {
            botRock.style.backgroundColor = "#ffcccc";
        } else if (computerChoice === "Paper") {
            botPaper.style.backgroundColor = "#ffcccc";
        } else if (computerChoice === "Scissor") {
            botScissor.style.backgroundColor = "#ffcccc";
        }

        if (humanChoice === computerChoice) {
            resultMessage.textContent = `It's a tie! Both chose ${humanChoice}.`;
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissor") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissor" && computerChoice === "Paper")
        ) {
            resultMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        } else {
            resultMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }

        round++;
        updateScores();
        checkGameEnd();
    }

    function updateScores() {
        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
    }

    function resetBotButtons() {
        botRock.style.backgroundColor = "";
        botPaper.style.backgroundColor = "";
        botScissor.style.backgroundColor = "";
    }

    function checkGameEnd() {
        if (round >= 5) {
            if (humanScore > computerScore) {
                resultMessage.textContent = "Game Over! 🎉 You Won the Game!";
            } else if (computerScore > humanScore) {
                resultMessage.textContent = "Game Over! 😔 You Lost the Game.";
            } else {
                resultMessage.textContent = "Game Over! 🤝 It's a Tie!";
            }

            document.querySelector("#human-rockbtn").disabled = true;
            document.querySelector("#human-paperbtn").disabled = true;
            document.querySelector("#human-scissorbtn").disabled = true;
        }
    }

    document.querySelector("#human-rockbtn").addEventListener("click", () => playRound("Rock"));
    document.querySelector("#human-paperbtn").addEventListener("click", () => playRound("Paper"));
    document.querySelector("#human-scissorbtn").addEventListener("click", () => playRound("Scissor"));
});