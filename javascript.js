function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a Tie!"
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper"
        }
    } else {
        if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Win! Paper beats Rock"
        }
    }
}


function buttonClicked(e) {
    console.log(playRound(e.target.textContent, getComputerChoice()))
}


const buttons = document.querySelectorAll('.input-button');
buttons.forEach(button => button.addEventListener('click', buttonClicked));

