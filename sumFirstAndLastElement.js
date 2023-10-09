/**
 * Write a function that recieves an array of strings and returns sum of the first and last elements of it
 */

const stringsArray = ['Catcher in the Rye', 'Atlas Shrugged', 'The Gift of the Magi', 'The Man who Laughs'];

function summariseFirstLastElements(arr){
    return arr[0] + ' ' + arr[arr.length - 1];
}

console.log(summariseFirstLastElements(stringsArray));

