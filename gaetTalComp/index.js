"use strict";

let lowNum = 0;
let highNum = 100;
let computerGuess;
let computerGuessText = document.querySelector("h1");
let numberOfGuesses = 0;
let userNum = "Korrekt";

document.querySelector("#forlav").addEventListener("mousedown", tooLowOrHi);
document.querySelector("#forhoej").addEventListener("mousedown", tooLowOrHi);
document.querySelector("#rigtig").addEventListener("mousedown", tooLowOrHi);

computerGuesses();

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
  } else if (evt.target.id === "forhoej") {
    highNum = computerGuess;
  } else {
    computerGuess = userNum;
  }

  computerGuesses();
}

/* function forl() {
  console.log("For lavt");
  lowNum = computerGuess;
  computerGuesses();
}
function forh() {
  console.log("For højt");
  highNum = computerGuess;
  computerGuesses();
}
function right() {
  console.log("Korrekt");
}
 */
