'use strict;'
let target = document.getElementById("target");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.innerHTML = "<li>First item</li>"
li2.innerHTML = "<li>Second item</li>"
li3.innerHTML = "<li>Third item</li>"
li2.className = "my-item"
target.append(li1)
target.append(li2)
target.append(li3)