"use script";
const themes = document.querySelector("#themes");

themes.addEventListener("click", selectChange);

function selectChange(evt) {
  console.log("change", evt.target.value);

  document.querySelector("body").dataset.filter = evt.target.value;
}

let isLight = localStorage.getItem("filter") === "light";

function applyTheme() {
  if (isLight === true) {
    themes.dataset.filter = "light";
    localStorage.setItem("filter", "light");
  } else if (isLight === false) {
    themes.dataset.filter = "dark";
    localStorage.setItem("filter", "dark");
  } else if (isLight === false) {
    themes.dataset.filter = "hawaii";
    localStorage.setItem("filter", "hawaii");
  }
}

function toggleTheme() {
  if (isLight === true) {
    isLight = false;
  } else {
    isLight = true;
  }

  applyTheme();
}

applyTheme();

themes.addEventListener("click", toggleTheme);
