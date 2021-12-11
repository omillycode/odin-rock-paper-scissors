/* choose from either rock, paper, or scissors randomly */
function computerPlay() {
   let choices = [
       "Rock",
       "Paper",
       "Scissors"
   ]
   let randomSelection = choices[Math.floor(Math.random()*choices.length)]
   return randomSelection;
}