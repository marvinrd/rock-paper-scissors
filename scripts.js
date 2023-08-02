//Function to generate computer choice
function getComputerChoice() {
  // with 1/3 probability to generate Rock, Paper or Scissors
  let calcProbability = Math.random() * 100;
  if (calcProbability < 33.33) {
    return "Rock";
  } else if (calcProbability < 66.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Initialize default values
let playerSelection = "sciSSorS";
let computerSelection = "xyz";

//Function to play a round of RPS
function playRound(playerSelection, computerSelection) {
  //Capitalize player input
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  //Calculate computer choice for current round
  computerSelection = getComputerChoice();
  //Return result for Draw scenario
  if (computerSelection === playerSelection) {
    appendToParent(`Draw! Both ${playerSelection} vs ${computerSelection}`, resultsContainer);
    return "Draw! Play again!";
  }
  //Return result for Win scenario
  else if (
    (computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Scissors" && playerSelection === "Rock") ||
    (computerSelection === "Paper" && playerSelection === "Scissors")
  ) {
    appendToParent(`You Win! ${playerSelection} beats ${computerSelection}`,resultsContainer);
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  //Return result for Lose scenario
  else if (
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    appendToParent(`You Lose! ${computerSelection} beats ${playerSelection}`, resultsContainer);
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  //Return result for error scenario
  else {
    return "error scenario";
  }
}

//Create variable for number of rounds to play
let gameRounds = 1;
//Create variable for Player score
let playerScore = 0;
//Create variable for Computer score
let computerScore = 0;

////Function to play a 5 round game
function game() {
  //Create loop to go through 1 to number of rounds
  for (i = 0; i < gameRounds; i++) {
    let roundResult = playRound(prompt("Rock, Paper, Scissors?"));

    //If player wins, add 1 point for player
    if (roundResult.slice(0, 5) === `You L`) {
      ++computerScore;
    }
    //If computer wins, add 1 point for player
    if (roundResult.slice(0, 5) === `You W`) {
      ++playerScore;
    }

    //Log the winner of the round
    console.log(
      `Round${i + 1}: Player: ${playerScore} vs. Computer ${computerScore}`
    );
  }
  //Return with total results and declare winner
  if (playerScore > computerScore) {
    console.log(
      `You Win! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You Lose! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`
    );
  } else {
    console.log(
      `Game complete with no winner! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`
    );
  }
}

// Select all buttons based on class playSelect
const playOnce = document.querySelectorAll(".playSelect");

// for each node in that selection
playOnce.forEach(function (play) {
  // apply a click-event listener that runs a function
  play.addEventListener("click", function () {
    playRound(play.id);
  });
});

// select the results resultsContainer
const resultsContainer = document.querySelector(".results");

const appendToParent = function (string, parent) {
  const div = document.createElement("div");
  parent.appendChild(div);
  div.textContent = string;
};
