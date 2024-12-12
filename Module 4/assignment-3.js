'use strict';
let form = document.querySelector("form");
const results = document.getElementById("results");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = document.getElementById("query");
    const action = form.action;
    try {
        const response = await fetch(`${action}?q=${query.value}`);
        const shows = await response.json();
        results.innerHTML = '';
        for (let tvshow of shows) {
            let article = document.createElement("article");
            let h2 = document.createElement("h2");
            h2.innerText = tvshow.show.name;
            let img = document.createElement("img");
            img.setAttribute("src", tvshow.show.image?.medium);
            img.setAttribute("alt", tvshow.show.name);
            let a = document.createElement("a");
            a.innerText = tvshow.show.url;
            a.setAttribute("href", tvshow.show.url);
            a.setAttribute("target", "_blank")
            let div = document.createElement("div");
            div.innerHTML = tvshow.show.summary;
            article.append(h2);
            article.append(a);
            article.append(img);
            article.append(div);
            results.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});