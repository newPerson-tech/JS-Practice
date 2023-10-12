/**
 * Write a JavaScript function to check whether an 'input' is a string or not. 
 */
let userInput = prompt("You are free to enter any nonsence here");

function checkIfString(str){
    if(str === " "){
        alert("This seems to be a string");
    } else{
        alert("Just wrap that nonsence in double quotes");
    }
}

checkIfString(userInput);