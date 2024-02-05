"use strict";

/* const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
/* console.log("letters[4]", letters[4]);
console.log("letters[4]", letters[7]);

console.log("sidste letter", "letters.lenght", letters.length - 1); */

//console.log(letters[4]);
//const newarr = letters;
//newarr[4] = "*";
//console.log(letters[4]);

/* const people = ["Harry", "Ron", "Hermione"];
let result;
//console.log('people.push("Draco')
result = people.push("Draco");
console.log("result", result);
console.log("people", people);
console.log("***************");
result = people.pop();
result = people.push("Neville");
result = people.push("Luna");
result = people.slice(0, 3);
result = people.splice(1, 0, "Cho");
people[1] = "Ginny";
result = people.push("Fred", "George");
result = people.indexOf("Fred");
result = people.splice(result, 1); */

// STRING TO ARRAY
const str = "abcdefghijklm";
const arr1 = str.split("");
const arr2 = Array.from(str);
const arr3 = [...str];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// ARRAY TO STRINGS
