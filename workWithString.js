/*
Here you are provided with a string to work with. We'd like you to:

Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
Store the length of the array in a variable called arrayLength.
Store the last item in the array in a variable called lastItem.
*/

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

let arrayFromString = myString.split('+');

console.log(arrayFromString);