"use strict";

"use script";

const first = "peter";

//let result = first.charAt(1).toUpperCase() + first.slice();

let result = first.substring(0, 2).toLowerCase(0, 2) + first.substring(2, 3).toUpperCase(2, 3) + first.substring(3, 5).toLowerCase(3, 5);

console.log(result);

let result2 = first.substring(0, 1).toLowerCase(1, 2) + first.substring(1, 3).toUpperCase(2, 3) + first.substring(3, 5).toLowerCase(3, 5);

console.log(result2);

let result3 = first.substring(0, 2).toUpperCase(0, 2) + first.substring(2, 3).toLowerCase(2, 3) + first.substring(3, 5).toLowerCase(3, 5);

console.log(result3);

let result4 = first.substring(0, 2).toLowerCase(0, 2) + first.substring(2, 3).toLowerCase(2, 3) + first.substring(3, 4).toLowerCase(3, 4) + first.substring(4, 5).toUpperCase(4, 5);

console.log(result4);
