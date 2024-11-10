'use strict';
function even(array) {
    let evenarray = []
    for (let i in array) {
        if (array[i] % 2 == 0) {
            evenarray.push(array[i])
        }
    }
    return evenarray
}
let array = [1,2,3,4,5,6,12,12,11,13,5,7,22,2,1,2,6,8]
console.log("original array: "+array)
console.log("even array: "+even(array))