/*
Create an empty array.
Add 0, 1, 2 to the array with the push method and show the array.
Create the string "0 + 1 + 2" out of the array using the join method and show the string.
*/

let emptyArray = [];

emptyArray.push(3, 5, 33, 11, 115, 0);

let stringFromArr = emptyArray.join('+');

console.log(stringFromArr);
console.log(typeof(stringFromArr));