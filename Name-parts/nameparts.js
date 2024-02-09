"use strict";

const fullName = "Peter Heronimous Lind";

const firstIndex = fullName.indexOf(" ");
const lastIndex = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0, firstIndex);
const middleName = fullName.substring(firstIndex + 1, lastIndex);
const lastName = fullName.substring(lastIndex + 1);

console.log("first name:", firstName);
console.log("middle name:", middleName);
console.log("last name:", lastName);
