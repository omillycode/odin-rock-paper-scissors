let rock = "rock";
let paper = "paper";
let scissors = "scissors";
/* choose from either rock, paper, or scissors randomly */

function computerPlay() {
    let choices = [
       rock,
       paper,
       scissors
   ]
   let randomSelection = choices[Math.floor(Math.random()*choices.length)]
   return randomSelection;
}
/* asks for players choice, compares it to random choice, and decides who wins the round */

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Which will you choose?", "Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = computerPlay;

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win!";
        }else if (computerSelection === "paper") {
            return "Try Again!";
        }else if (computerSelection === playerSelection) {
            return "It's A Tie!";
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