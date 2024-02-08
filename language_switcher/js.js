"use strict";

const selectElement = document.querySelector(".languages");
const result = document.querySelector(".result");

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
  en: {
    texts: [
      { text: "Boat", location: ".header" },
      { text: "The Robot", location: ".footer" },
    ],
  },
};

let locale = "da";
//console.log(texts[locale].texts[0].text);

changeLanguage("da");
function changeLanguage(locale) {
  texts[locale].texts.forEach((each) => {
    //console.log(each.location);
    document.querySelector(each.location).textContent = each.text;
  });
}

selectElement.addEventListener("change", (event) => {
  console.log(event.target.value);
  changeLanguage(event.target.value);
});
