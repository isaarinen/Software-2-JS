'use strict';
function diceroll() {
    return Math.floor(Math.random() * 6) + 1;
}

let arr = []
let a = true
while (a == true) {
    let i = diceroll();
    arr.push(i);
    if (i == 6) {
        a = false
    }
}

for (let i in arr) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    document.getElementById("target").append(li);
}
