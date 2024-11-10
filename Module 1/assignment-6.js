'use strict';
const confirmation = confirm("Should I calculate the square root?");
if (confirmation == true) {
    let num = prompt("Enter a number.");
    let root = Math.sqrt(num);
    document.querySelector("#target").innerHTML = root + " is the square root of " + num;
} else {
    document.querySelector("#target").innerHTML = "The square root is not calculated";
}
