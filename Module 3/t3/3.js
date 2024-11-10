'use strict';
const names = ['John', 'Paul', 'Jones'];
target = document.getElementById("target")
for (let i of names) {
    let li = document.createElement("li")
    li.innerHTML = i
    target.append(li)
}