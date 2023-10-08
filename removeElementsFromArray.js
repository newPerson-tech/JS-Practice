/*
Create an array with all numbers from 1 to 6.
Show the array with the alert command.
Delete the first and last element and show the resulting array.
*/

let smallArray = [];
let arrayShortened = [0, 1, 2, 3, 4, 5, 6];

function fillArray(arr){
    for (let i = 0; i <= 6; i++){
        arr.push(i);
    }
    return arr;
}

function deleteArrayElements(arr){
    arr.shift();
    arr.pop();
    return arr;
}
console.log(deleteArrayElements(arrayShortened));

// alert(`Here we have a small array ${fillArray(smallArray)} containing ${smallArray.length} items`);
// alert(`Array shortened looks like that ${deleteArrayElements(arrayFinal)}`);
