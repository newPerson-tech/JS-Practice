/*
Create an array with all odd numbers that are smaller than 10.
Show the array with the alert command.
Show how many elements the array contains.
Add 2, 4, 6, 8 to the end of the array and show it again.
Insert the value 20 on the 20th array element and show the array again.
*/

let oddNumbersArray = [];
let evenNumbersHereArray =[];

function addNumbers(arr){
    for (let i = 0; i < 10; i += 1){
        if(i % 2 !== 0){
            arr.push(i);
        }  
    }
    return arr;
}

function addEvenNumbersBack(arr){
    for (let i = 0; i < 10; i++){
        if (i % 2 === 0){
            arr.push(i);
        }
    }
    return arr;
}


bkhjgfhgdxfgdcvjbhjnmlkbhgfcfghjk

alert(`Congratulations, you have just filled the array with numbers ${addNumbers(oddNumbersArray)}`);
alert(`The array consists of ${oddNumbersArray.length} numbers`);
alert(`We have even numbers array too ${addEvenNumbersBack(evenNumbersHereArray)}`);
alert(`Here we go, the whole and awesome new array ${oddNumbersArray.concat(evenNumbersHereArray)}`);