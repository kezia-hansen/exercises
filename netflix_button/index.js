"use strict";

const container = document.querySelector("div");
container.classList.add("container");

function colorAnimationStart() {
  const btn = document.querySelector("a");
  btn.classList.add("slide");
  btn.addEventListener("animationend", colorAnimationEnd);
}

function colorAnimationEnd() {
  btn.removeEventListener("animationend", animationEnd);
  btn.classList.remove("slide");
}
