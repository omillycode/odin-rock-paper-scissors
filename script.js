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
    const computerSelection = computerPlay;
    rock > scissors;
    
    if (playerSelection === computerSelection) {
        return("It's a tie");
    } else if (playerSelection < computerSelection) {
        return("Try Again");
    }else {
        return("You've won!");
    }
    
}