"use strict";

document.querySelector("button").addEventListener("click", btn_klik);

function btn_klik() {
  document.querySelector("button").addEventListener("animationend", AnimationsIterateAndEnd);
  document.querySelector("button").addEventListener("animationiteration", AnimationsIterateAndEnd);
  document.querySelector("#ball").classList.add("ani");
}

function AnimationsIterateAndEnd(evt) {
  console.log("AnimationsIterateAndEnd", evt.type);
  if (evt.type === "animationend") {
    document.querySelector("#ball").classList.remove("ani");
  }
}
