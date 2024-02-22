const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const settings = { filter: "completed" };

document.querySelector("button").addEventListener("click", addTask);
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

/* /// Add event listener to the toggle button
document.querySelector("#myToggleButton").addEventListener("click", toggleTasks);

// Function to toggle between showing unchecked and checked tasks
function toggleTasks() {
  const allTasks = document.querySelectorAll("#list-container li");
  allTasks.forEach((task) => {
    if (settings.filter === "unchecked") {
      if (!task.classList.contains("checked")) {
        task.style.display = "none"; // Hide unchecked tasks
      } else {
        task.style.display = "block"; // Show checked tasks
      }
    } else {
      task.style.display = "block"; // Show all tasks
    }
  });
  // Toggle the filter
  settings.filter = settings.filter === "unchecked" ? "all" : "unchecked";
}
 */
/*******************************************************************/
