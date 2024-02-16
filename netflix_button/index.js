"use strict";

document.querySelector("body").addEventListener("mousemove", colorAniEnd);

function colorAniEnd() {
  document.querySelector("a").classList.remove("slide");
  document.querySelector("body").style.backgroundColor = red;
}

document.querySelector("a").addEventListener("animationend", animationEnd);

function animationEnd() {
  document.querySelector("a").style.backgroundColor = "red";
}
