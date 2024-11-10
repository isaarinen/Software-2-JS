'use strict';
const button = document.getElementById("start");
button.addEventListener("click", (event) => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = document.getElementById("result")
    let operation = document.getElementById("operation").value;

    switch (operation)  {
        case 'add':
            result.innerHTML = num1 + num2;
            break;
        case 'sub':
            result.innerHTML = num1 - num2;
            break;
        case 'multi':
            result.innerHTML = num1 * num2;
            break;
        case 'div':
            result.innerHTML = num1 / num2;
            break;
        default:
            console.log(operation);
            result.innerHTML = "aaaaa";
    }

});