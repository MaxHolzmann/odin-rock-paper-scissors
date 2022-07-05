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


-- TO DO --
- add log for prompt response of cancel
-"best of 3"

*/ 

const getRandomInt = () => {
    min = 0;
    max = 3;
    return Math.floor(Math.random() * (max - min) + min)
}

const playRound = () => {
    const computerSelection = getRandomInt();
    let playerSelection = prompt("Rock, Paper or Scissors?");
    //fix string for any basic misinputs.
    let playerValue = playerSelection.toLowerCase().replace("0", "o").replace(" ", "");

    /* 
    I used the Math.random() function to randomly generate numbers 0-2
    This gives 3 options for the "computer player" to select, each number
    corresponding with rock, paper or scissors.

    Rock = 0
    Paper = 1
    Scissors = 2

    */

    if(playerValue === "rock") {
        console.log('You entered ' + playerValue + ', which is rock!');
        if(computerSelection == 0) {
            console.log('Tie! Bot selected Rock!')
        } else if (computerSelection == 1) {
            console.log('Bot wins! Bot selected Paper.')
        } else {
            console.log("You win! Bot selected Scissors.")
        }


    } else if(playerValue === "paper") {
        console.log('You entered '+ playerValue + ', which is paper!');
        if(computerSelection == 0) {
            console.log('You win! The bot selected Rock.')
        } else if (computerSelection == 1) {
            console.log('Tie! Bot selected Paper.')
        } else {
            console.log("Bot wins! It selected Scissors. ")
        }

    } else if (playerValue === "scissors") {
        console.log('You entered ' + playerValue + ', which is scissors!')
        if(computerSelection == 0) {
            console.log('Bot wins! It selected Rock.')
        } else if (computerSelection == 1) {
            console.log('You win! Bot selected Paper.')
        } else {
            console.log("Tie! Bot selected Scissors.")
        }
    } else {    
        console.log("You did not enter a good input! " + playerValue);
    }
    console.log(playerValue);
    console.log(computerSelection)
}


const game = () => {
    for (i = 0; i < 5; i++) {
        playRound();
    }
}