"use strict";

let lownum = 0;
let highnum = 100;
let computerGuess;

computerGuess = lownum + (highnum - lownum) / 2;

console.log(computerGuess);
const h1 = document.querySelector("h1");

/* gaetTal();
function gaetTal() {
  computerGuess = Math.round(Math.random() * 100);
} */

h1.textContent = `jeg gætter på ${computerGuess}`;

document.querySelector(".forhoej").addEventListener("click", forh);
document.querySelector(".forlav").addEventListener("click", forl);
document.querySelector(".rigtig").addEventListener("click", right);

gaetTal();

function gaetTal(lownum, highnum) {
  return lownum + (highnum - lownum) / 2;
}

let guessCom = gaetTal(50, 100);
console.log("guessCom", guessCom);

function forh() {
  computerGuess = guessCom;
}

function forl() {}

function right() {
  console.log("korrekt");
  getResultat();
}

function getResultat() {
  if (computerGuess === right) {
    alert("Tillykke!");
  }
}
