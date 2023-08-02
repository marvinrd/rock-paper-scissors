// references to html elements
const resultsContainer = document.querySelector(".resultContainer");
const totalContainer = document.querySelector(".total");
const playOnce = document.querySelectorAll(".playSelect");
const resetGame = document.querySelector("#resetGame");

//Initialize default values
let playerSelection = "sciSSorS";
let computerSelection = "xyz";
let gameRounds = 0;
let playerScore = 0;
let computerScore = 0;
let maxRounds = 5;

//reset game listener
resetGame.addEventListener("click", function () {
  gameRounds = 0;
  playerScore = 0;
  computerScore = 0;

  const toRemove = document.querySelectorAll(".points");
  toRemove.forEach(function (node) {
    node.remove();

    totalContainer.textContent = `Click to Rock, Paper or Scissors to start the game`;
  });
});

//RPS listener
playOnce.forEach(function (play) {
  play.addEventListener("click", function () {
    playRound(play.id);
  });
});

//function to create new result row
const appendToParent = function (string, parent) {
  const div = document.createElement("div");
  div.setAttribute("class", "points");
  parent.appendChild(div);
  div.textContent = string;
};

//Function to generate computer choice
function getComputerChoice() {
  let calcProbability = Math.random() * 100;
  if (calcProbability < 33.33) {
    return "Rock";
  } else if (calcProbability < 66.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Function to play a round of RPS
function playRound(playerSelection, computerSelection) {
  //Capitalize player input
  gameRounds++;
  if (gameRounds == maxRounds + 1) {
    totalContainer.textContent = `Maximum rounds of ${maxRounds} reached, please click 'Reset Game' to start another set of ${maxRounds}`;
  } else if (gameRounds < maxRounds + 1) {
    playerSelection =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase();
    //Calculate computer choice for current round
    computerSelection = getComputerChoice();
    //Return result for Draw scenario
    if (computerSelection === playerSelection) {
      appendToParent(
        `Draw! Both ${playerSelection} vs ${computerSelection}`,
        resultsContainer
      );
      totalContainer.textContent = `Round ${gameRounds} - Player: ${playerScore} vs. Computer: ${computerScore}`;
      return "Draw! Play again!";
    }
    //Return result for Win scenario
    else if (
      (computerSelection === "Rock" && playerSelection === "Paper") ||
      (computerSelection === "Scissors" && playerSelection === "Rock") ||
      (computerSelection === "Paper" && playerSelection === "Scissors")
    ) {
      appendToParent(
        `You Win! ${playerSelection} beats ${computerSelection}`,
        resultsContainer
      );
      playerScore++;
      totalContainer.textContent = `Round ${gameRounds} - Player: ${playerScore} vs. Computer: ${computerScore}`;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    //Return result for Lose scenario
    else if (
      (computerSelection === "Paper" && playerSelection === "Rock") ||
      (computerSelection === "Rock" && playerSelection === "Scissors") ||
      (computerSelection === "Scissors" && playerSelection === "Paper")
    ) {
      appendToParent(
        `You Lose! ${computerSelection} beats ${playerSelection}`,
        resultsContainer
      );
      computerScore++;
      totalContainer.textContent = `Round ${gameRounds} - Player: ${playerScore} vs. Computer: ${computerScore}`;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    //Return result for error scenario
    else {
      return "error scenario";
    }
  }
  if (playerScore > computerScore) {
    appendToParent(
      `You Win! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`,
      resultsContainer
    );
  } else if (playerScore < computerScore) {
    appendToParent(
      `You Lose! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`,
      resultsContainer
    );
  } else {
    appendToParent(
      `Game complete with no winner! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`,
      resultsContainer
    );
  }
}
