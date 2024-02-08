"use strict";

// const object = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };

// const nameToGet = "firstName";

// //DOT NOTATION
// console.log(`${object.firstName} is ${object.age}`);

// //BRACKET NOTATION
// console.log(`${object["firstName"]} is ${object["age"]}`);

// //BRACKET NOTATION M/ VARIABLER
// console.log(`${object[nameToGet]} is ${object["age"]}`);

//OPGAVE - SLETTE/OPDATERE PROPERTIES
/* let person1 = {
  firstName: "Klaus",
  age: 59,
  student: false,
};

console.log(person1.lastName);

//GIVER DEN VÆRDIEN "MANDAL"
person1.lastName = "Mandal";

//LOGGER HELE OBJEKTET
console.log(person1);

//GIVER DEN VÆRDIEN "UNDEFINED, MEN ER IKKE SLETTET
person1.lastName = undefined;

console.log("person1.lastName:", person1);

//PRØVER AT FINDE EN VÆRDI SOM IKKE ER DER, SÅ DEN VISER UNDEFINED
console.log("person1.middleName:", person1.middleName);

//SLETTER DENS VÆRDI, SÅ DEN ER OFFCIELT UNDEFINED
delete person1.lastName;

//LOGGER HELE OBJEKTET
console.log(person1); */

//OPGAVE - OBJEKTER SOM VARIABLER

// const person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };

// console.log(person1);

// person1.age++;

// console.log(person1);

// /* const person2 = {
//   firstName: "Bob",
//   age: 82,
//   student: true,
// }; */

// //CONST KAN IKKE ÆNDRES/OPDATERES
// //person1 = person2;

// console.log(person1);

// //FOR AT OPDATERE EN KONSTANT KAN VI SÆTTE DEN LIG MED EN ANDEN - REFERENCE TIL DEN SAMME OBJEKT
// const person2 = person1;

// //NU KAN VI ÆNDRE PROPERTIES SOM VI PLEJER VED AT SÆTTE DET LIG NOGET ANDET
// person2.firstName = "bob";
// console.log(person1.firstName);
// console.log(person1);
// console.log(person2);

//OPGAVE - SAMMENLIGN OBJEKTER

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

//const student2 = student1;

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastNameName;

//FOR AT DE SKAL BLIVE ENS SÅ SKAL DE REFERE TIL DET SAMME OBJEKT (const student2 = student1;),
//HVOR DEN NUVÆRENDE REFERER TIL TO FORSKELLIGE OBJEKTER TIL TRODS FOR ENS PROPERTIES
if (student1 == student2) {
  console.log("they are the same");
} else {
  console.log("they are not");
}
