// references to html elements
const resultsContainer = document.querySelector(".resultContainer");
const resultHeader = document.querySelector(".resultHeader");
const playOnce = document.querySelectorAll(".playSelect");
const resetGame = document.querySelector("#resetGame");
const gameFooter = document.querySelector(".gameFooter");

//Initialize default values
let playerSelection = "sciSSorS";
let computerSelection = "xyz";
let gameRounds = 0;
let playerScore = 0;
let computerScore = 0;
let maxRounds = 5;
gameFooter.textContent = `Maximum rounds set to ${maxRounds}`;

//reset game listener
resetGame.addEventListener("click", function () {
  gameRounds = 0;
  playerScore = 0;
  computerScore = 0;
  gameFooter.setAttribute("class", "gameFooter");
  gameFooter.textContent = `Maximum rounds set to ${maxRounds}`;

  const toRemove = document.querySelectorAll(".points");
  toRemove.forEach(function (node) {
    node.remove();
    resultHeader.textContent = `Click to Rock, Paper or Scissors to start the game`;
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

//function for game end
const gameEnd = function () {
  if (playerScore > computerScore && gameRounds == maxRounds) {
    gameFooter.textContent = `You Win! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`;
    gameFooter.setAttribute("class", "win");
  } else if (playerScore < computerScore && gameRounds == maxRounds) {
    gameFooter.textContent = `You Lose! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`;
    gameFooter.setAttribute("class", "lose");
  } else if (gameRounds == maxRounds) {
    gameFooter.textContent = `Game complete with no winner! Player: ${playerScore} vs. Computer ${computerScore} in ${gameRounds} Rounds`;
    gameFooter.setAttribute("class", "draw");
  }
  return;
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
  if (gameRounds == maxRounds) {
    resultHeader.textContent = `Maximum rounds of ${maxRounds} reached, please click 'Reset Game' to start another set of ${maxRounds}`;
  } else if (gameRounds < maxRounds) {
    gameRounds = gameRounds + 1;
    playerSelection =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase();
    //Calculate computer choice for current round
    computerSelection = getComputerChoice();
    //Return result for Draw scenario
    if (computerSelection === playerSelection) {
      appendToParent(
        `Draw! Both played ${playerSelection}`,
        resultsContainer
      );
      resultHeader.textContent = `Round ${gameRounds} - Player: ${playerScore} vs. Computer: ${computerScore}`;
      gameEnd();
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
      resultHeader.textContent = `Round ${gameRounds} - Player: ${playerScore} vs. Computer: ${computerScore}`;
      gameEnd();
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
      resultHeader.textContent = `Round ${gameRounds} - Player: ${playerScore} vs. Computer: ${computerScore}`;
      gameEnd();
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    //Return result for error scenario
    else {
      gameEnd();
      return "error scenario";
    }
  }
}
