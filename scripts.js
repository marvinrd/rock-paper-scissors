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
let playerInput = "sciSSorS";
let computerSelection = "xyz";

//Capitalize player input
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

//Function to play a round of RPS
function playRound(playerSelection, computerSelection) {
  //Calculate computer choice for current round
  computerSelection = getComputerChoice();
  //Return result for Draw scenario
  if (computerSelection === playerSelection) {
    return "Draw! Play again!";
  } 
  //Return result for Win scenario
  else if (
    (computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Scissors" && playerSelection === "Rock") ||
    (computerSelection === "Paper" && playerSelection === "Scissors")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } 
  //Return result for Lose scenario
  else if (
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } 
  //Return result for error scenario
  else {
    return "error scenario";
  }
};