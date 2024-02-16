"use script";
const themes = document.querySelector("#themes");
let currentTheme = "light";

themes.addEventListener("click", selectChange);

function selectChange(evt) {
  console.log("change", evt.target.value);
  document.querySelector("body").dataset.filter = evt.target.value;
}
