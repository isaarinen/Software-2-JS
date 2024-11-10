'use strict';
let dogs = []
for (let i = 1; i <= 6; i++) {
    dogs.push(prompt("Enter the name of dog "+ i))
}
dogs.sort()
dogs.reverse()
for (let dog in dogs) {
    let li = document.createElement("li")
    li.innerHTML = dogs[dog]
    document.getElementById("target").append(li)
}
