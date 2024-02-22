const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const settings = { filter: "all" };

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
  filterTasks();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
      filterTasks();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      filterTasks();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  filterTasks();
}
showTask();

const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", function (e) {
  settings.filter = e.target.value;
  saveData();
  filterTasks();
});

function filterTasks() {
  const filter = settings.filter;
  const tasks = listContainer.getElementsByTagName("li");

  Array.from(tasks).forEach((task) => {
    if (filter === "all") {
      task.style.display = "list-item";
    } else if (filter === "checked" && task.classList.contains("checked")) {
      task.style.display = "list-item";
    } else if (filter === "unchecked" && !task.classList.contains("checked")) {
      task.style.display = "list-item";
    } else {
      task.style.display = "none";
    }
  });
}
