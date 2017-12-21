
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    results.removeChild(results.childNodes[0]);
    let result = document.createElement('p');
    result.textContent = playRound(button.id);
    results.appendChild(result);
  })
});



// this function forces the computer to choose a move
  function computerPlay() {
   let choices = ["Rock", "Paper", "Scissors"];
   return choice = choices[Math.floor(Math.random() * 3)];
  }

//this function makes the computer act out a simulated round of RPS
  function playRound(playerSelection, computerSelection = computerPlay()) {

//setting up some variables for different outcomes
    let win = ("You win! " + playerSelection + " beats " + computerSelection + "!");
    let lose = ("You loser. " + computerSelection + " beats " + playerSelection + ".");
    let draw = ("You drew it, " + playerSelection + " bounces harmlessly off " + computerSelection + ".");

//a mess of if statments to see what outcome happened, i'm sure this can be improved
    if (computerSelection === "Rock") {
      if (playerSelection === "rock") {
        return draw;
      } else if (playerSelection === "scissors") {
        return lose;
      } else {
        return win;
      }
    } else if (computerSelection === "Paper") {
      if (playerSelection === "rock") {
        return lose;
      } else if (playerSelection === "scissors") {
        return win;
      } else {
        return draw;
      }
    } else {
      if (playerSelection === "rock") {
        return win;
      } else if (playerSelection === "scissors") {
        return draw;
      } else {
        return lose;
      }
    }
  }
