"use strict";

document.querySelectorAll("button").forEach((button) => {
  console.log(button);
  button.addEventListener("click", btnFilterEVTListener);
});

function btnFilterEVTListener(evt) {
  console.log(evt.currentTarget.dataset.filter);
}
