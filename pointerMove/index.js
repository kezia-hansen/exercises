"use strict";

const body = document.querySelector("body");
document.addEventListener("mousemove", skiftFarve);

function skiftFarve(evt) {
  const i = (evt.clientX / window.innerWidth) * 100;
  body.style.setProperty("--i", `${i}%`);
}
