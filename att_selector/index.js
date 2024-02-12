"use script";

document.querySelector('data-filter="bat"').addEventListener("pointerdown", (evt) => {
  console.log("hej", evt.currentTarget);
});

//document.querySelector("button").addEventListener("pointerdown", btnPointerDown);

function btnPointerDown(evt) {
  //document.querySelector("h1").dataset.filter = "fox";
  const dyr = document.querySelector(h1);

  if (dyr.dataset.filter === "bat") {
    dyr.dataset.filter === "fox";
  } else {
    dyr.dataset.filter === "bat";
  }
}
