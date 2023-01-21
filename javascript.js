function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}


function getResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 0
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return -1;
        } else {
            return 1;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return -1;
        } else {
            return 1;
        }
    } else {
        if (computerSelection == "scissors") {
            return -1;
        } else {
            return 1;
        }
    }
}

let wins = 0;
let ties = 0;
let losses = 0;

function updateScreen(result = "") {
    const resultLabel = document.querySelector('.game-output');
    const playerScore = document.querySelector('#player');
    const compScore = document.querySelector('#computer');
    const tieScore = document.querySelector('#tie');

    resultLabel.textContent = result;
    playerScore.textContent = wins;
    compScore.textContent = losses;
    tieScore.textContent = ties;
}

function playRound(e) {

    const outputLabel = document.querySelector('.game-output');
    let result = getResult(e.target.textContent,getComputerChoice())
    let resultLabel = "";

    if ((losses >= 5) || (wins >= 5)) {
        updateScreen("Press n to start a new game!");
        return
    }
    
    if (result == 0){
        ties += 1;
        resultLabel = "It's a tie!"; 
    } else if (result == -1) {
        losses += 1;
        resultLabel = "You lose!";
    } else if (result == 1) {
        wins += 1;
        resultLabel = "You win!";
    }

    updateScreen(resultLabel);

    if (losses == 5){
        updateScreen("Computer has won the game!")
    }
    if (wins == 5){
        updateScreen("You have won the game!")
    }
}

function newGame(){
    wins = 0;
    ties = 0;
    losses = 0;
    updateScreen("Press a button to play!")
}

window.addEventListener('keydown', function(e){
    if (e.keyCode == 78){
        newGame();
    }
})

const buttons = document.querySelectorAll('.input-button');
buttons.forEach(button => button.addEventListener('click', playRound));



