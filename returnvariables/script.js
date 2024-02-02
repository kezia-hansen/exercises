"use strict";

//let firstName = "Mona";
greeting();

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const txt = `Greeting is ${greeting("a name")}`;
console.log(txt);

const result = greeting("Klaus");
console.log(greeting("any name"));
