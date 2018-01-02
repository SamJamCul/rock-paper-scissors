
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const tally = document.querySelector('.tally');

let wins = 0;
let losses = 0;
let draws = 0;
let played = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    results.removeChild(results.childNodes[0]);
    tally.removeChild(tally.childNodes[0]);
    let result = document.createElement('p');
    let scores = document.createElement('p');
    scores.textContent = ("Wins: " + wins + " Losses: " + losses + " Draws: " + draws + ".")
    result.textContent = playRound(button.id);
    results.appendChild(result);
    tally.appendChild(scores);
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
        draws += 1;
        played += 1;
        return draw;
      } else if (playerSelection === "scissors") {
        losses += 1;
        played += 1;
        return lose;
      } else {
        wins += 1;
        played += 1;
        return win;
      }
    } else if (computerSelection === "Paper") {
      if (playerSelection === "rock") {
        losses += 1;
        played += 1;
        return lose;
      } else if (playerSelection === "scissors") {
        wins += 1;
        played += 1;
        return win;
      } else {
        draws += 1;
        played += 1;
        return draw;
      }
    } else {
      if (playerSelection === "rock") {
        wins += 1;
        played += 1;
        return win;
      } else if (playerSelection === "scissors") {
        draws += 1;
        played += 1;
        return draw;
      } else {
        losses += 1;
        played += 1;
        return lose;
      }
    }
  }
