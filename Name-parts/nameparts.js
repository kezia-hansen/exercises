"use strict";

//TEST
const fullName = "Peter Heronimous Lind";

const firstIndex = fullName.indexOf(" ");
const lastIndex = fullName.indexOf(" ", firstIndex + 1);

const firstName = fullName.substring(0, firstIndex);
const middleName = fullName.substring(firstIndex + 1, lastIndex);
const lastName = fullName.substring(lastIndex + 1);

console.log("first name:", firstName);
console.log("middle name:", middleName);
console.log("last name:", lastName);
console.log("************************");

//TEST MED EGET NAVN
const fullName2 = "Kezia Naomi Hansen";

const firstIndex2 = fullName2.indexOf(" ");
const lastIndex2 = fullName2.indexOf(" ", firstIndex2 + 1);

const firstName2 = fullName2.substring(0, firstIndex2);
const middleName2 = fullName2.substring(firstIndex2 + 1, lastIndex2);
const lastName2 = fullName2.substring(lastIndex2 + 1);

console.log("first name:", firstName2);
console.log("middle name:", middleName2);
console.log("last name:", lastName2);
console.log("************************");

//OPTIONAL - MULTIPLE MIDDLE NAMES

const fullName3 = "Albus Percival Wulfric Brian Dumbledore";

const firstIndex3 = fullName3.indexOf(" ");
const lastIndex3 = fullName3.lastIndexOf(" ");

const firstName3 = fullName3.substring(0, firstIndex3);
const middleName3 = fullName3.substring(firstIndex3 + 1, lastIndex3);
const lastName3 = fullName3.substring(lastIndex3 + 1);

console.log("first name:", firstName3);
console.log("middle name:", middleName3);
console.log("last name:", lastName3);

console.log("************************");

//TEST MED EGET NAVN

const fullName4 = "Kezia Naomi Sofie Hansen";

const firstIndex4 = fullName4.indexOf(" ");
const lastIndex4 = fullName4.lastIndexOf(" ");

const firstName4 = fullName4.substring(0, firstIndex4);
const middleName4 = fullName4.substring(firstIndex4 + 1, lastIndex4);
const lastName4 = fullName4.substring(lastIndex4 + 1);

console.log("first name:", firstName4);
console.log("middle name:", middleName4);
console.log("last name:", lastName4);

console.log("************************");
