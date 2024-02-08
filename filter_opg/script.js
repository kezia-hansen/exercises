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
  const tbody = document.querySelector("#vehicle-table tbody");
  tbody.innerHTML = "";

  arr.forEach((vehicle) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${vehicle.type}</td>
        <td>${vehicle.fuel ?? "-"}</td>
        <td>${vehicle.passengers}</td>
        <td>${vehicle.stops ?? "-"}</td>
        <td>${vehicle.ownedBy ?? "-"}</td>
        <td>${vehicle.isElectric ? "X" : ""}</td>
        <td>${vehicle.isTandem ? "X" : ""}</td>
      `;
    tbody.appendChild(row);
  });
}
