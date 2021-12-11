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
/* plays a single round of rock, paper, scissors with player selection */

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Which will you choose?", "Rock, Paper, or Scissors?")
}