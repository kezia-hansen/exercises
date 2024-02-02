"use strict";

// global variables
let userChoice;
let computerChoice;
let score;

// making the rock paper and scissors buttons work
document.querySelector(".rock").addEventListener("click", KlikRock);
document.querySelector(".paper").addEventListener("click", KlikPaper);
document.querySelector(".scissors").addEventListener("click", KlikScissors);
// setting user choice based on which button is clicked

function KlikRock() {
  userChoice = "rock";
  makeComputerChoice();
  console.log("ROCK");
}

function KlikPaper() {
  userChoice = "paper";
  makeComputerChoice();
  console.log("PAPER");
}

function KlikScissors() {
  userChoice = "scissors";
  makeComputerChoice();
  console.log("SCISSORS");
}

// Making the random computer choice
function makeComputerChoice() {
  const randoNum = Math.floor(Math.random() * 3);
  console.log("compChoice", userChoice);

  if (randoNum === 0) {
    computerChoice = "rock";
  } else if (randoNum === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("compChoice", userChoice);
  console.log("RANDO", randoNum);
  console.log("computerChoice", computerChoice);

  getResultat();
}

// finding out who wins
function getResultat() {
  // removing text from last game
  resetResultText();
  if (userChoice === computerChoice) {
    // if the players played the same hand
    score = "draw";
  } else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")) {
    // all the instances in which the computer wins
    score = "lose";
  } else {
    // all other instances left: the human player wins
    score = "win";
  }

  startHandAnimations();
}

function startHandAnimations() {
  // adding animation end eventlistener
  document.querySelector("#player1").addEventListener("animationend", handAnimationsend);
  // get those hands shaking
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
}

function handAnimationsend() {
  // removing all added shake classes so other classes can be added
  resetHands();

  console.log("Animation ended");
  // showing the correct hand signs
  if (userChoice === "rock") {
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice === "paper") {
    document.querySelector("#player1").classList.add("paper");
  } else if (userChoice === "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  }

  if (computerChoice === "rock") {
    document.querySelector("#player2").classList.add("rock");
  } else if (computerChoice === "paper") {
    document.querySelector("#player2").classList.add("paper");
  } else if (computerChoice === "scissors") {
    document.querySelector("#player2").classList.add("scissors");
  }
  showWinner();
}

function showWinner() {
  // show correct winnerscreen
  if (score === "win") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (score === "lose") {
    document.querySelector("#lose").classList.remove("hidden");
  } else if (score === "draw") {
    document.querySelector("#draw").classList.remove("hidden");
  }
}

function resetHands() {
  document.querySelector("#player1").classList.remove("shake", "rock", "paper", "scissors");
  document.querySelector("#player2").classList.remove("shake", "rock", "paper", "scissors");
}

function resetResultText() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}

/* function getComputerChoice() {
  console.log("HELLO");
  let rpsChoices = ["rock", "paper", "scissors"];
  computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  console.log("getcomputerChoice", computerChoice);

  //return computerChoice;
} */

/* const paperBtn = document.querySelector(".paper");

paperBtn.addEventListener("click", () => {
  console.log("paper!");
  userChoice = "paper";
  document.querySelector(".player").classList.add("paper");
  getPlayerChoice();
});

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  console.log("rock!");
  userChoice = "rock";
  document.querySelector(".player").classList.add("rock");

  getPlayerChoice();
});

const scissorBtn = document.querySelector(".scissors");
scissorBtn.addEventListener("click", () => {
  console.log("scissorss!");
  userChoice = "scissors";
  document.querySelector(".player").classList.add("scissors");
  getPlayerChoice();
}); */

/* function getPlayerChoice() {
  getResult(userChoice, computerChoice);
  console.log("userChoice", userChoice);
  console.log("computerChoice", computerChoice);
  console.log("score", score);
} */

/* function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = "draw";
    document.querySelector("#draw").classList.remove("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    score = "win";
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    score = "win";
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    score = "win";
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    // Otherwise human loses (aka set score to -1)
  } else {
    score = "lose";
    document.querySelector("#lose").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
  }
  // return score
  // return score;
} */
