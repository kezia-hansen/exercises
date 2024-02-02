/*
"use strict";
momsBeregner(200);

function momsBeregner(beloeb, moms = 25) {
  const total = beloeb * (1 + moms / 100);

  console.log(total);
}
 */

"use strict";

momsBeregner(200);

function momsBeregner(beloeb, moms = 25) {
  return beloeb * (1 + moms / 100);

  // console.log(total);
}

let beregnetMoms = momsBeregner(100);
console.log("beregnetMoms", beregnetMoms);
