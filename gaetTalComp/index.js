"use strict";

let lowNum = 0;
let highNum = 100;
let computerGuess;
let computerGuessText = document.querySelector("h1");
let numberOfGuesses = 0;
let userNum = "Korrekt";
let image = document.getElementById("image");

document.querySelector("#forlav").addEventListener("mousedown", tooLowOrHi);
document.querySelector("#forhoej").addEventListener("mousedown", tooLowOrHi);
document.querySelector("#rigtig").addEventListener("mousedown", tooLowOrHi);
document.querySelector("#start").addEventListener("mousedown", startGame);
document.querySelector("#startOver").addEventListener("mousedown", startOver);

function startGame() {
  numberOfGuesses = 0;
  lowNum = 0;
  highNum = 100;
  computerGuess = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
  computerGuessText.textContent = `Tænk på et tal mellem 0-100`;
  image.src = "bearstart.png";
  computerGuesses();
}

function computerGuesses() {
  numberOfGuesses++;
  computerGuess = Math.round(lowNum + (highNum - lowNum) / 2);
  computerGuessText.textContent = `jeg gætter på ${computerGuess}`;
  console.log("numberOfGuesses", numberOfGuesses);
}

function tooLowOrHi(evt) {
  console.log(evt.target.id);

  if (evt.target.id === "forlav") {
    lowNum = computerGuess;
    image.src = "bearlow.png";
  } else if (evt.target.id === "forhoej") {
    highNum = computerGuess;
    image.src = "bearhigh.png";
  } else {
    if (computerGuess === userNum) {
      computerGuessText.textContent = `Jeg gættede rigtigt! Det var ${computerGuess}.`;
      image.src = "bearright.png";
      return;
    }
    computerGuess = userNum;
    image.src = "bearright.png";
  }

  computerGuesses();
}
