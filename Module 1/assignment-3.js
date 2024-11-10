'use strict';
const i = parseInt(prompt("Enter an integer."));
const ii = parseInt(prompt("Enter an integer."));
const iii = parseInt(prompt("Enter an integer."));

const sum = i + ii + iii;
const product = i * i * iii;
const average = sum / 3;
document.querySelector("#target").innerHTML =
	"Sum: " + sum + "<br>Product: " + product + "<br>Average: " + average;
