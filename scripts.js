function getComputerChoice() {
  let calcProbability = Math.random() * 100;
  console.log("calcProb is " + calcProbability);
  if (calcProbability < 33.33) {
    return "Rock";
  } else if (calcProbability < 66.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let playerSelection = "Rock";

function playRound(playerSelection, computerSelection) {
    

  if (computerSelection === playerSelection) {
    return "Draw! Play again!";
  } else if (
    (computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Scissors" && playerSelection === "Rock") ||
    (computerSelection === "Paper" && playerSelection === "Scissors")
  ) {
    return "Player wins!";
  } else if (
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return "Player wins!";
  } else {
    return "error scenario";
  };

  

  // Include case insensitive
  // Include player input?
}
