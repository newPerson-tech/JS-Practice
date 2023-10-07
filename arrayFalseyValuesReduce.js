let arrayInitial = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];

function removeFalseyValues(arr){
    return arr.reduce((accumulator, i) => {
        if(i){
            return [accumulator, i];
        } else{
            return accumulator;
        }
    },[]);
}

console.log(removeFalseyValues(arrayInitial));