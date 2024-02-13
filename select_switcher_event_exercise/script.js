document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orange";
function selectChange(evt) {
  console.log("change", evt.target.value);
}
