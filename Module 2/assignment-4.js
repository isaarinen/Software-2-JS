'use strict';
function compareNumbers(a, b) {
    return b - a;
}

let arr = []
let a = true
while (a == true) {
    let num = prompt("Enter a number");
    arr.push(num)
    if (num == 0 ) {
        a = false
    }
}
arr.sort(compareNumbers)
for (let i in arr) {
    console.log(arr[i])
}