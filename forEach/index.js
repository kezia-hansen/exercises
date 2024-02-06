"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParms(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}

people.forEach(testParms);

/* function sayHello(person) {
  console.log(`Hello ${person}`);
} */

/* people.forEach(sayHello); */
