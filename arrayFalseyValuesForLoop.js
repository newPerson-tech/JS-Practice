let arrayGiven = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];

function removeFalseyValues(arr){
    let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if(arr[i]){
                newArr.push(arr[i]);
            }
        }
    return newArr;
}

console.log(removeFalseyValues(arrayGiven));