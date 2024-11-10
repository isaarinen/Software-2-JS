'use strict';
const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

trigger.addEventListener("mouseenter", (event) => {
    target.setAttribute("src", "img/picB.jpg")
});
trigger.addEventListener("mouseleave", (event) => {
    target.setAttribute("src", "img/picA.jpg")
});