/* chooses from either rock, paper, or scissors randomly */
function computerPlay() {
    let choices = [
       "rock",
       "paper",
       "scissors"
   ]
   let randomSelection = choices[Math.floor(Math.random()*choices.length)]
   return randomSelection;
}
let computerSelection; 
let playerSelection;

let playerSelectRock = document.querySelector('#rock')
let playerSelectScissors = document.querySelector('#scissors')
let playerSelectPaper = document.querySelector('#paper')

playerSelectRock.addEventListener('click', function() {playRound("rock", computerSelection);})
playerSelectPaper.addEventListener('click', function() {playRound("paper", computerSelection);})
playerSelectScissors.addEventListener('click', function() { playRound("scissors", computerSelection);});

let playerPoints = 0
let computerPoints = 0

const scoreDiv = document.createElement('div')
const theResult = document.createElement('p')
const mainPage = document.getElementById('mainPage')
mainPage.appendChild(scoreDiv)
scoreDiv.appendChild(theResult)


/* gets players choice, compares it to random choice, and decides who wins the round */
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            theResult.textContent = "You Win!";
            return ++playerPoints;
        }
        if (computerSelection === "paper") {
            theResult.textContent = "You Lose!";
            return ++computerPoints;
        }
        if (computerSelection === playerSelection) {
            theResult.textContent = "It's a tie";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            theResult.textContent = "You Win!";
            return ++playerPoints;
        }
        if (computerSelection === "rock") {
            theResult.textContent = "You Lose!";
            return ++computerPoints;
        }
        if (computerSelection === playerSelection) {
            theResult.textContent = "It's a tie";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            theResult.textContent = "You Win!";
            return ++playerPoints;
        }
        if (computerSelection === "scissors") {
            theResult.textContent = "You Lose!";
            return ++computerPoints;
        }
        if (computerSelection === playerSelection) {
            theResult.textContent = "It's a tie";
        }
    }

}



