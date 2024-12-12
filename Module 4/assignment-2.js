'use strict';
let form = document.querySelector("form");
console.log(form)
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = document.getElementById("query");
    const action = form.action;
    try {
        const response = await fetch(`${action}?q=${query.value}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});