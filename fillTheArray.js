/** 
   Task description: Write a method that creates a new array with given values 
   Expected Result: (3, 'a') => ['a', 'a', 'a'] 
*/

let newArray = [];

function fillArray(arr){
    for (let i = 0; i < 3; i++){
        arr[i] = 'a';
    }
    return arr;
}

console.log(fillArray(newArray));