'use strict';
function concat(array) {
    let string = ""
    for (let i in array) {
            string = string + array[i]
    }
    return string
}

const array = ["meow", "cat", "dog", "woof", "moo", "cow"]
document.getElementById("target").innerHTML = concat(array)