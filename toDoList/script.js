const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Initial settings
const settings = { filter: "all" };

// Event listener for adding a new task
document.querySelector("button").addEventListener("click", addTask);

function addTask() {
  // Check if the input box is empty
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // Create a new list item and append it to the list container
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create a span for the delete button and append it to the list item
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }

  // Clear the input box
  inputBox.value = "";

  // Save data and filter tasks
  saveData();
  filterTasks();
}

// Event listener for handling task actions (checking, deleting)
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      const targetTask = e.target;
      targetTask.classList.toggle("checked");

      // Apply fade-out effect only when the filter is not set to "all"
      if (settings.filter !== "all") {
        if (targetTask.classList.contains("checked")) {
          targetTask.classList.add("fade-out");
          // Add fade-out class when task is checked
          targetTask.addEventListener("transitionend", function () {
            filterTasks(); // Filter tasks after the transition is complete
          });
        } else {
          targetTask.classList.remove("fade-out"); // Remove fade-out class when task is unchecked
          filterTasks(); // Filter tasks directly after unchecking
        }
      } else {
        filterTasks(); // Filter tasks directly without applying fade-out effect
      }

      // Save data
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Remove the parent list item when the delete button is clicked
      e.target.parentElement.remove();
      saveData();
      filterTasks(); // Filter tasks directly after removing a task
    }
  },
  false
);

// Event listener for changing the filter
const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", function (e) {
  settings.filter = e.target.value;
  saveData();
  filterTasks();
});

// Function to filter tasks based on the current filter settings
function filterTasks() {
  const filter = settings.filter;
  const tasks = listContainer.getElementsByTagName("li");

  // Iterate through each task
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

// Function to save task data to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  filterTasks();
}

showTask(); // Show tasks when the page is loaded
