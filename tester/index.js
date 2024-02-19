"use strict";

const task_array = [];

makeNewTask();
makeNewTask();
makeNewTask();
makeNewTask();

function makeNewTask() {
  const task = { name: "Default name", done: false }; //KLIKKER PÅ EN KNAP OGSÅ SKAL MAN UDFYLDE FELTET
  task_array.push(task);
  console.log("task_array", task_array);
  filterAndSortList();
}

function filterAndSortList() {
  let listToShow;
  //sortering og filtrering
  listToShow = task_array;

  showList();
}

function showList() {
  const tbody = document.querySelector("ul");
  tbody.innerHTML = "";
  task_array.forEach((task) => {
    const clone = document.querySelector("template").content.cloneNode(true);
    console.log("HEJx");

    if (task.done) {
      clone.querySelector("header").textContent = "DONE";
    } else {
      clone.querySelector("header").textContent = "TO DO";
    }
    clone.querySelector("button").addEventListener("click", () => {
      console.log("KLIK");

      task.done = !task.done;
      filterAndSortList();
      console.log("task_array", task_array);
    });

    //clone.querySelector("header").textContent = task.name;
    tbody.appendChild(clone);
  });
}
