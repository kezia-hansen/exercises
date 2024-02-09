"use strict";

let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

// Using split/join
const newWord = theText.split("ord").join("ting");
console.log(newWord);

// Using replaceAll
let newText = theText.replaceAll("ord", "ting");
console.log(newText);
