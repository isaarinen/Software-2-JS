'use strict';
let form = document.querySelector("form");
const results = document.getElementById("results");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = document.getElementById("query");
    const action = form.action;
    try {
        const response = await fetch(`${action}?query=${query.value}`);
        const jokes = await response.json();
        for (const joke of jokes.result) {
            let p = document.createElement("p");
            p.innerText = joke.value;
            let article = document.createElement("article");
            article.appendChild(p);
            results.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});