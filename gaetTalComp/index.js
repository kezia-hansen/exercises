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

function forh() {
  lownum = 0;
  highnum = 50;
  console.log("for højt");
  getResultat();
}

function forl() {
  lownum = 0;
  highnum = 75;
  console.log("for lavt");
}

function right() {
  console.log("korrekt");
  getResultat();
}

function gaetTal(highnum, lownum = 0) {
  return lownum + (highnum - lownum) / 2;
}

function getResultat() {
  if (computerGuess === right) {
    alert("Tillykke!");
  }
}
