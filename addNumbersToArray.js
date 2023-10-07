//Create an array with all odd numbers that are smaller than 10.

let smallArray = [];

function addNumbers(arr){
    for (let i = 0; i < 10; i += 1){
        if(i % 2 !== 0){
            arr.push(i);
        }  
    }
    return arr;
}

alert(addNumbers(smallArray));
alert(smallArray.length);