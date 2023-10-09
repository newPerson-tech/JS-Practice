/**
 * Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". Note that startsWith() is a great way to check whether a string starts with a given character.
 */

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

let indexEagles = birds.indexOf("Eagles");
let eBirds = [];

function checkBirdsNames(arr){
    let newArr = [];
    arr.forEach(i => {
        if (i.startsWith('E')){
            newArr.push(i);
        }
    });
    return newArr;
}

console.log(checkBirdsNames(birds));