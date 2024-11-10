'use strict';
const eyes = prompt("Enter the number of eyes on the dice:")

function diceroll(eyes) {
    return Math.floor(Math.random() * eyes) + 1;
}
let arr = []
let a = true
while (a == true) {
    let i = diceroll(eyes);
    arr.push(i);
    if (i == eyes) {
        a = false
    }
}

for (let i in arr) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    document.getElementById("target").append(li);
}
