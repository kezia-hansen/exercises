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
