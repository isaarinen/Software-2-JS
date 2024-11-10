'use strict';
const num = prompt("Enter a number")
function isPrime(num) {
    for(let i = 2; i < num ;i++) {
        if (num % i == 0) {
            return false
        }
    }
}
if (isPrime(num) != false) {
    document.getElementById("target").innerHTML = num + " is a prime."
} else {
    document.getElementById("target").innerHTML = num + " is not a prime."
}
