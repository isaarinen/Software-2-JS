'use strict';
const dice = prompt("Enter the number of dice.")
const eyes = prompt("Enter sum of the number of eyes.")
function rollDice(dice, eyes) {
    let sum = 0;
    for(let i = 0; i<dice; i++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum == eyes) {
        return true
    } else {
        return false
    }
}
let eyesums = 0;
for (let i = 0; i< 10000; i++) {
    if (rollDice(dice, eyes) == true) {
        eyesums += 1
    }
}
let prob = eyesums / 10000 * 100
document.getElementById("target").innerHTML = "Probability to get sum " + eyes + " with " + dice + " dice is " + prob.toFixed(2) + "%"