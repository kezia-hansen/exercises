"use strict";

/* //Semi spoiler alert profanity prep 1: Find et ord i en streng og udskift det

let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

// Using split/join
const newWord = theText.split("ord").join("ting");
console.log(newWord);

// Using replaceAll
let newText = theText.replaceAll("ord", "ting");
console.log(newText);

//*************************************************/

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("pointerdown", checkIfSFW);

function checkIfSFW() {
  let theText = document.querySelector("p").textContent;
  curseWords.forEach((wordObject) => {
    theText = theText.replaceAll(wordObject.bad, wordObject.good);
  });

  console.log(theText);
  document.querySelector("p").textContent = theText;
}
