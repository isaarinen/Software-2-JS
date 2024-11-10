'use strict';
const target = document.getElementById("target");
const form = document.getElementById("source");
source.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstname = document.getElementsByName("firstname")[0].value;
    let lastname = document.getElementsByName("lastname")[0].value;
    target.innerHTML = `Your name is ${firstname} ${lastname}`;
})
