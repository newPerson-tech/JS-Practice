let arrayGiven = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];

function removeFalseyValues(arr){
    let arrayFinal = [];
    for(i of arr){
        if(i){
            arrayFinal.push(i);
        }
    }
    return arrayFinal;
}

console.log(removeFalseyValues(arrayGiven));