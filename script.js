/* choose from either rock, paper, or scissors randomly */
function computerPlay() {
    let choices = [
       "rock",
       "paper",
       "scissors"
   ]
   let randomSelection = choices[Math.floor(Math.random()*choices.length)]
   return randomSelection;
}
let playerChoice = prompt("Which will you choose?", "rock, paper, or scissors?").toLowerCase();
let playerSelection = playerChoice
let computerSelection; 
/* asks for players choice, compares it to random choice, and decides who wins the round */
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return ("You Win!");
        }
        if (computerSelection === "paper") {
            return ("Try Again!");
        }
        if (computerSelection === playerSelection) {
            return ("It's A Tie!");
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win!";
        }
        if (computerSelection === "rock") {
            return "You Lose!";
        }
        if (computerSelection === playerSelection) {
            return "It's A Tie!";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win!";
        }
        if (computerSelection === "scissors") {
            return "You Lose!";
        }
        if (computerSelection === playerSelection) {
            return "It's A Tie!";
        }
    }

}