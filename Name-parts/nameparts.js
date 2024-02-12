"use strict";

const fullName = "Peter Heronimous Mandal Jefferson Lind";

const firstName = fullName.substring(0, fullName.indexOf(" "));
console.log("firstName", firstName + "_");

const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
console.log("middleName", "_" + middleName + "_");

const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
console.log("lastName", "_" + lastName + "_");

console.log(fullName.split(" "));

/**********************************/

const nameArr = fullName.split(" ");

const firstNameSplit = nameArr[0];

const lastNameSplit = nameArr[nameArr.length - 1];

console.log("nameArr", nameArr);
console.log("firstNameSplit", firstNameSplit);
console.log("lastNamesplit", lastNameSplit);
