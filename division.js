function isDivisible(n, x, y) {
    if((n !==0) && (n % x == 0)){
      alert(`We just found out that ${n} is divisible by ${x}!`);
        if((n !== 0) && (n % y == 0)){
            alert(`Double-shot! ${n} is also divisible by ${y}!`);
        } else if(((n !==0) && (n % x == 0))){
            alert("Not your day today..");
        }
    } else if ((n !==0) && (n % x !== 0)){
        alert("Sorry, doesn't work!");
    }
}
  
  let numberToBeDivided = prompt("We need three integers from you and we'll show you a trick. Please, enter first one", 0);
  let firstNumberToCheck = prompt("Next integer from you, please", 0);
  let secondNumberToCheck = prompt("Please, give us one more integer to work with", 0);

  isDivisible(numberToBeDivided, firstNumberToCheck, secondNumberToCheck);