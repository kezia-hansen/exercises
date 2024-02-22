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
      const targetTask = e.target;
      targetTask.classList.toggle("checked");

      if (targetTask.classList.contains("checked")) {
        targetTask.classList.add("fade-out");
        // Add fade-out class when task is checked
        targetTask.addEventListener("transitionend", function () {
          targetTask.remove(); // Remove the task from the DOM after transition
          filterTasks(); // Filter tasks after the transition is complete
        });
      } else {
        targetTask.classList.remove("fade-out"); // Remove fade-out class when task is unchecked
        filterTasks(); // Filter tasks directly after unchecking
      }

      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      filterTasks(); // Filter tasks directly after removing a task
    }
  },
  false
);
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
      task.classList.remove("fade-out"); // Remove fade-out class when filter is "all"
    } else if (filter === "checked" && task.classList.contains("checked")) {
      task.style.display = "list-item";
      task.classList.remove("fade-out"); // Remove fade-out class when filter is "checked"
    } else if (filter === "unchecked" && !task.classList.contains("checked")) {
      task.style.display = "list-item";
      if (task.classList.contains("checked")) {
        task.classList.add("fade-out");
      } else {
        task.classList.remove("fade-out");
      }
    } else {
      task.style.display = "none"; // Hide the task if it doesn't match the filter
    }
  });
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  filterTasks();
}

showTask();

/*
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
      if (task.classList.contains("checked")) {
        task.classList.add("fade-out");
      } else {
        task.classList.remove("fade-out");
      }
    } else {
      task.style.display = "none";
    }
  });
}
 */
