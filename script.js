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
let computerSelection; 
let playerSelection;
/* asks for players choice, compares it to random choice, and decides who wins the round */
function playRound(playerSelection, computerSelection) {
    let playerChoice = prompt("Which will you choose?", "rock, paper, or scissors?").toLowerCase();
    playerSelection = playerChoice;
    computerSelection = computerPlay();
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("You Win!");
            return ++playerPoints;
        }
        if (computerSelection === "paper") {
            console.log("You Lose!");
            return ++computerPoints;
        }
        if (computerSelection === playerSelection) {
            console.log("It's A Tie!");
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("You Win!");
            return ++playerPoints;
        }
        if (computerSelection === "rock") {
            console.log("You Lose!");
            return ++computerPoints;
        }
        if (computerSelection === playerSelection) {
            console.log("It's A Tie!");
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win!");
            return ++playerPoints;
        }
        if (computerSelection === "scissors") {
            console.log("You Lose!");
            return ++computerPoints;
        }
        if (computerSelection === playerSelection) {
            console.log("It's A Tie!");
        }
    }

}

/*create a five round game, picking the final winner out of who won most rounds */ 
let playerPoints = 0
let computerPoints = 0
function game() {
    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerPoints} Computer: ${computerPoints}`)
    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerPoints} Computer: ${computerPoints}`)
    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerPoints} Computer: ${computerPoints}`)
    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerPoints} Computer: ${computerPoints}`)
    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerPoints} Computer: ${computerPoints}`)
    if (playerPoints > computerPoints) {
        return "Congrats! You win!"
    }
    if (computerPoints > playerPoints) {
        return "You Lose!Please try again!"
    }
}