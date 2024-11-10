'use strict';
const rolls = parseInt(prompt("How many dice?"));
let sum = 0;
for (let i = 0; i < rolls; i++) {
	sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#target").innerHTML = "Sum of the rolls: " + sum;
