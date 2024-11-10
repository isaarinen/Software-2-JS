'use strict';
const amount = prompt("How many participants?")
let participants = []
for (let i = 1; i <= amount; i++) {
    participants.push(prompt("Enter the name of participant "+ i))
}
participants.sort()
for (let i in participants) {
    let li = document.createElement("li")
    li.innerHTML = participants[i]
    document.getElementById("target").append(li)
}
