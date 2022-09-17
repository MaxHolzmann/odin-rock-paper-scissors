document.getElementById('playgamebtn').addEventListener('click', () =>  {
console.log('Event listener is working')

document.getElementById('hidden').style = "display: flex";

})

const getRandomInt = () => {
    min = 0;
    max = 3;
    return Math.floor(Math.random() * (max - min) + min)
}

const playRound = (playerValue) => {
    const computerSelection = getRandomInt();
    const gameText = document.getElementById('gametext');

    /* 
    I used the Math.random() function to randomly generate numbers 0-2
    This gives 3 options for the "computer player" to select, each number
    corresponding with rock, paper or scissors.

    Rock = 0
    Paper = 1
    Scissors = 2

    */




    /* 
    -- transition to GUI --

    -hide player options until player selects "Play Game! 
        use CSS to show hidden buttons upon selecting playgame? using an event listener! 
    */

    if(playerValue === "rock") {
        console.log('You entered ' + playerValue + ', which is rock!');
        if(computerSelection == 0) {
            gameText.textContent = "Tie! Bot selected Rock!"
        } else if (computerSelection == 1) {
            gameText.textContent = 'Bot wins! Bot selected Paper.'
        } else {
            gameText.textContent ="You win! Bot selected Scissors."
        }


    } else if(playerValue === "paper") {
        console.log('You entered '+ playerValue + ', which is paper!');
        if(computerSelection == 0) {
            gameText.content = 'You win! The bot selected Rock.'
        } else if (computerSelection == 1) {
            gameText.textContent = 'Tie! Bot selected Paper.'
        } else {
            gameText.textContent = "Bot wins! It selected Scissors. "
        }

    } else if (playerValue === "scissors") {
        console.log('You entered ' + playerValue + ', which is scissors!')
        if(computerSelection == 0) {
            gameText.textContent = 'Bot wins! It selected Rock.'
        } else if (computerSelection == 1) {
            gameText.textContent = 'You win! Bot selected Paper.'
        } else {
            gameText.textContent = "Tie! Bot selected Scissors."
        }
    } else {    
        console.log("You did not enter a good input! " + playerValue);
    }
}


const game = () => {
    for (i = 0; i < 5; i++) {
        playRound();
    }
}