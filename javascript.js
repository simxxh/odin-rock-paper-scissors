function getComputerChoice() {
  let min = 1;
  let max = 3;
  let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
  if (rand < 2) choice = "Rock";
  else if (rand < 3 && rand >= 2) choice = "Paper";
  else choice = "Scissors";
  return choice;
}


function playRound (playerSelection, computerSelection) {
  playerSelection = prompt("What's your choice: rock, paper or scissors?");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  if (playerSelection === "rock" && computerSelection === "Rock") {
    return "Tie";
  }
  else if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  }
  else if (playerSelection === "rock" && computerSelection === "Scissors") {  
    return "You Win! Rock beats Scissors";
  }
  else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  }
  else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "Tie";
  }
  else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beat Paper";
  } 
  else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  }
  else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beat Paper";
  }
  else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    return "Tie";
  }
}

function game() {
  let results = [];
  for (let i=0; i<5; i++) {
    results[i] = playRound(playerSelection, computerSelection);
    console.log(results[i]);
  }
  for (let i=0; i<5; i++) {
    if (results[i].includes("Win")) winCounter++;
    else if (results[i].includes("Lose")) lossCounter++;
    else if (results[i].includes("Tie")) tieCounter++;
  } 
  if (winCounter >= 3) {
    return "You won the five-round game!";
  } else if (lossCounter >= 3) {
    return "You lost the five-round game!";
  } else if (winCounter === 2 && lossCounter === 2) {
    return "The five-round game is a tie!";
  } else if (tieCounter === 5) {
    return "The five-round game is a tie!";
  } else if (tieCounter === 4) {
    if (winCounter === 1) {
      return "You won the five-round game!";
    } else return "You lost the five-round game!";
  } else if (tieCounter === 3) {
    if (winCounter === 1 || lossCounter === 1) {
      return "The five-round game is a tie!";
    } else if (winCounter === 2) {
      return "You won the five-round game!";
    } else return "You lost the five-round game!";
  } else if (tieCounter === 2) {
    if (winCounter === 2) {
      return "You won the five-round game!";
    } else return "You lost the five-round game!";
  } else if (tieCounter === 1) return "The five-round game is a tie!";
  
}

let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;
let playerSelection;
let computerSelection;
console.log(game());


