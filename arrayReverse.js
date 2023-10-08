/*
Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable.
*/

let arrayInOrder = [1, 2, 4, 6, 8, 10];

function reverseArray(arr){
    let newArray = [];
    for (let i = arr.length-1; i >= 0; i--){
        let elementAtIndex = arr[i];
        newArray.push(elementAtIndex);
    }
    return newArray;
}

console.log(reverseArray(arrayInOrder));