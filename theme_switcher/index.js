"use strict";

// Select the themes element
const themes = document.querySelector("#themes");

// Add a change event listener to the themes element
themes.addEventListener("change", selectChange);

// Add a click event listener to the themes element
themes.addEventListener("click", selectClick);

// Callback function for the change event listener
function selectChange(evt) {
  // Get the selected theme's name
  const selectedTheme = evt.target.value;
  console.log("change", selectedTheme);

  // Store the selected theme's name in local storage
  localStorage.setItem("filter", selectedTheme);
}

// Callback function for the click event listener
function selectClick(evt) {
  // Get the selected theme's name
  const selectedTheme = evt.target.value;
  console.log("click", selectedTheme);

  // Apply the selected theme
  applyTheme(selectedTheme);
}

// Function to apply the selected theme
function applyTheme(theme) {
  if (theme === "light") {
    // Set the themes element's data-filter attribute to "light"
    themes.dataset.filter = "light";

    // Set the body element's data-filter attribute to "light"
    document.body.dataset.filter = "light";
  } else if (theme === "dark") {
    // Set the themes element's data-filter attribute to "dark"
    themes.dataset.filter = "dark";

    // Set the body element's data-filter attribute to "dark"
    document.body.dataset.filter = "dark";
  } else if (theme === "hawaii") {
    // Set the themes element's data-filter attribute to "hawaii"
    themes.dataset.filter = "hawaii";

    // Set the body element's data-filter attribute to "hawaii"
    document.body.dataset.filter = "hawaii";
  }
}

// Retrieve the stored theme from local storage and apply it
const storedTheme = localStorage.getItem("filter");
if (storedTheme) {
  applyTheme(storedTheme);
}
