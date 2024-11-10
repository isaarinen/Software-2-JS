'use strict';
const name = prompt("Enter your name.");
let i = Math.floor(Math.random() * 4);
if (i == 1) {
    document.querySelector("#target").innerHTML =
        name + ", you are a Gryffindor";
} else if (i == 2) {
    document.querySelector("#target").innerHTML =
        name + ", you are a Ravenclaw";
} else if (i == 3) {
    document.querySelector("#target").innerHTML =
        name + ", you are a Hufflepuff";
} else if (i == 0) {
    document.querySelector("#target").innerHTML =
        name + ", you are a Slytherin";
}
