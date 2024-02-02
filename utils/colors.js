import { getRandomNumber } from "./numbers.js";

export getRandomHSLColor

function getRandomHSLColor() {
  const h = getRandomHSLColor(360);
  const s = getRandomHSLColor(100);
  const l = getRandomHSLColor(100);

  return `${h}, ${s}%, ${l}%`;
}

