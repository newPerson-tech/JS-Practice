let arrayGiven = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];

function removeFalseyValues(arr){
    return arr.filter((i) => {
        if(i) {
            return i;
        }
    });
}

console.log(removeFalseyValues(arrayGiven));