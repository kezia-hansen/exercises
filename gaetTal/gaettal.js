let computerGuess;
gaetTal();
function gaetTal() {
  computerGuess = Math.round(Math.random() * 100);
  console.log("computerGuess", computerGuess);
}

document.querySelector("#tjek").addEventListener("click", () => {
  let userGuess = document.querySelector("#tal").value;
  userGuess = parseInt(userGuess);
  console.log("userGuess", typeof userGuess);

  /* if (userGuess === "") {
    alert("Indtast venligst et tal.");
    return;
  } */

  if (userGuess === computerGuess) {
    alert("Tillykke!");
  } else if (userGuess < computerGuess) {
    alert("For lavt. Prøv igen.");
  } else {
    alert("For højt. Prøv igen.");
  }
});
