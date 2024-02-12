"use script";

/* document.querySelector('data-theme="light').addEventListener("pointerdown", (evt) => {
  console.log("hej", evt.currentTarget);
}); */

document.querySelector("#themes").addEventListener("click", selectChange);

function selectChange(evt) {
  console.log("change", evt.target.value);
  document.querySelector("body").dataset.filter = evt.target.value;
}
