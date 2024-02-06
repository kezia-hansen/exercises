"use strict";

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },

  {
    name: "Mia",
    type: "cat",
  },

  {
    name: "Leeloo",
    type: "dog",
  },

  {
    name: "Scooby doo",
    type: "dog",
  },
];

// CATS
let onlyCats = animals.filter(isCat);
console.log("Cats", onlyCats);

function isCat(animal) {
  console.log();
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

// DOGS
let onlyDogs = animals.filter(isDog);
console.log("Dogs", onlyDogs);

function isDog(animal) {
  console.log();
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

// += er en måde at tilføje til en string for at opbygge dem - kan bruge +,*,-, ++ (+1)
let str = "hej";
console.log(str);
str += "du!";
console.log(str);

let num = 2;
console.log(num);
num *= 4;
console.log(num);

let i = 0;
console.log(i);
i += 2;
console.log(i);
