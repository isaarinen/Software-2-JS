'use strict';
function compareNumbers(a, b) {
    return a - b;
}

let arr = []
let a = true
while (a == true) {
    let num = prompt("Enter a number");
    if (arr.includes(num)) {
        console.log(num, "has already been given before.")
        a = false
    } else {
        arr.push(num)
    }
}
arr.sort(compareNumbers)
for (let i in arr) {
    console.log(arr[i])
}