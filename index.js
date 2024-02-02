import { getRandomNumber } from "../utils/numbers.js";

import { getRandomHSLColor } from "../utils/colors.js";

import { $, $$ } from "../utils/dom.js";

const h1 = Document.querySelector("h1");

const ps = $$("p");

h1.textContent = `Random number: ${getRandomNumber(max)}`;

h1.style.backgroundColor = getRandomHSLColor;

function callBack() {
  ps.forEach((p) => {
    p.textContent = `Random number: ${getRandomNumber(100)}`;
    p.style.color = getRandomHSLColor();
  });
}

btn.addEventlistener("click", callBack);
