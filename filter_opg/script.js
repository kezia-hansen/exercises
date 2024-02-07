document.querySelectorAll("button").forEach((button) => {
  console.log(button);
  button.addEventListener("click", btnFilterEVTListener);
});

function btnFilterEVTListener(evt) {
  console.log(evt.currentTarget);
  if (evt.currentTarget.dataset.filter === "*") {
    showTheseVehicles(vehicles);
  } else if (evt.currentTarget.dataset.filter === "electric") {
    showTheseVehicles(vehicles.filter(isElectric));
  } else if (evt.currentTarget.dataset.filter === "more_than_two_seats") {
    showTheseVehicles(vehicles.filter(HasMoreThanTwoSeats));
  } else if (evt.currentTarget.dataset.filter === "electric_owned_by_j") {
    showTheseVehicles(vehicles.filter(electricAndOwnedByJonas));
  }
}

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

//isElectric
function isElectric(vehicle) {
  if (vehicle.isElectric === true) {
    return vehicle;
  }
}
//const allElectricVehicles = vehicles.filter(isElectric);
//showTheseVehicles(allElectricVehicles);

//HasMoreThanTwoSeats
function HasMoreThanTwoSeats(vehicle) {
  if (vehicle.passengers >= 1) {
    return vehicle;
  }
}
const MoreThanTwoSeats = vehicles.filter(HasMoreThanTwoSeats);
//showTheseVehicles(MoreThanTwoSeats);

//isElectric and owned by Jonas
function electricAndOwnedByJonas(vehicle) {
  if (vehicle.isElectric && vehicle.ownedBy === "Jonas") {
    return vehicle;
  }
}
const electricalAndOwnedByJonas = vehicles.filter(electricAndOwnedByJonas);
//showTheseVehicles(vehicles);

//isFueledByRugbrød and has space for more than one
function isFueledByRugbrødandSpaceForMultiple(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers >= 1) {
    return vehicle;
  }
}
const rugbrødAndMultipleSpaces = vehicles.filter(isFueledByRugbrødandSpaceForMultiple);
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  ulPointer.innerHTML = "  <li><strong>Type</strong></li> <li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric ? "X" : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem ? "X" : ""}</li>`;
  });
}
