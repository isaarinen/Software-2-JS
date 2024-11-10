'use strict;'
const button = document.getElementById("start");

button.addEventListener("click", (event) => {
    let calculation = document.getElementById("calculation").value;
    if (calculation.includes("+")) {
        let integers = calculation.split("+");
        let result = parseInt(integers[0]) + parseInt(integers[1]);
        document.getElementById("result").innerHTML = result;
    } else if (calculation.includes("-")) {
        let integers = calculation.split("-");
        let result = parseInt(integers[0]) - parseInt(integers[1]);
        document.getElementById("result").innerHTML = result;
    }else if (calculation.includes("*")) {
        let integers = calculation.split("*");
        let result = parseInt(integers[0]) * parseInt(integers[1]);
        document.getElementById("result").innerHTML = result;
    }else if (calculation.includes("/")) {
        let integers = calculation.split("/");
        let result = parseInt(integers[0]) / parseInt(integers[1]);
        document.getElementById("result").innerHTML = result;
    }
})