function getComputerChoice() {
    let val=Math.floor(Math.random() * 3)
    if (val === 0) {
        return "Computer: Rock"
    } else if (val === 1) {
        return "Computer: Paper"
    } else if (val === 2) {
        return "Computer: Scissor"
    }
}

function getHumanChoice() {
    let answer = prompt("Choose R/P/S(write full name pls): ");
    return "You: " + answer;
}
console.log(getComputerChoice())
console.log(getHumanChoice())