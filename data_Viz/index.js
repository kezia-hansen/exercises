"use strict";

fetch("https://kea-alt-del.dk/kata-distortion/")
  .then((response) => response.json())
  .then((data) => console.log(data));
