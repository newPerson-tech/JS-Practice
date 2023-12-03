function arrayChallenge(arr) {
    let sum = 0;
      for(let i = 0; i < arr.length; i++){
         if(i !== Math.max(arr)){
            sum = sum + i;
         } else if(sum === arr[2]){
            return true;
         } else{
            return false;
         }
    return arr;
  }
}

const arrayGiven = [1, 3, 16, 7, 5];

console.log(arrayChallenge(arrayGiven));
