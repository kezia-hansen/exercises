"use strict";

const firstName = "Peter";

const len = firstName.length;

const type = "cat";

const PetName = "Mandu";

console.log(`My name is ${firstName}. \n I have a ${type} called ${PetName} `);
document.querySelector("p").textContent = `My name is ${firstName}. \n I have a ${type} called ${PetName} `;

console.log(`${firstName} is ${len} characters long`);

const letter = firstName[0];

console.log(`The first letter of ${firstName} is ${letter}`);

const forNavn = "Albus Percival Wulfric Brian Dumbledore";
const leng = forNavn.length;
console.log(leng);
const character = forNavn[6];
console.log(character);
console.log(forNavn.indexOf("D"));
console.log(forNavn.lastIndexOf("e"));

const substr = forNavn.substring(2, 5);
// 0, 5 = Albus
// 29 = Dumbledore
// 15, 22 = "Wulfric"
// 15, 23 = "Wulfric "
// 25, 28 = Ian
// 2, 5 = bus
console.log(substr + "_");

const str = "hello world";

// capitalize the first letter
let result = str.charAt(0).toUpperCase() + str.slice(1);

// print the result
console.log(result); // "Hello world"
