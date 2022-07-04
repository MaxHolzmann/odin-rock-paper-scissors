// Thinking through the game! 

/* 

Played against a Computer
Computer function will be called computerPlay()
computerPlay will return a randomly generated string, Rock/Paper/Scissors

playRound function for user
Make input non case-sensitive
playRound has two parameters, playerSelection and computerSelection.

-- LOGIC --
Rock beats Scissors
Paper beats Rock
Scissors Beats paper

After a single game, code for multiple games using a for loop.
I will begin this after finishing a single game. 

*/ 

const getRandomInt = () => {
    min = 0;
    max = 3;
    return Math.floor(Math.random() * (max - min) + min)
}

const computerPlay = () => {
 
    // create this logic somewhere else 
   const computerTurn = getRandomInt();
    console.log(computerTurn);
   if(computerTurn == 0) {
    console.log("rock")
   } else if (computerTurn == 1) {
    console.log("paper")
   } else if (computerTurn == 2) {
    console.log("scissors")
   }
}

const playRound = () => {
    const computerSelection = getRandomInt();
    let playerSelection = prompt("Rock, Paper or Scissors?");
    //create a function to look at the strings.
    let playerValue = playerSelection.toLowerCase();
    console.log(playerValue);
}