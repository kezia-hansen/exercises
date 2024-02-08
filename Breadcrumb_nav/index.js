"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

console.log("bc.length", bc.length);
document.querySelector("button").addEventListener("click", generateBreadCrumb);
const pPointer = document.querySelector("p");

function generateBreadCrumb() {
  bc.forEach((crumb, i) => {
    console.log("i", i);
    if (i === bc.length - 1) {
      pPointer.innerHTML += crumb.name;
    } else {
      pPointer.innerHTML += `<a href=${crumb.link}>${crumb.name}</a> / `;
    }
  });
}
