'use strict';
function leapYearCheck(year) {
	if (year >= 100) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return true;
			} else {
				return false;
			}
		} else {
			if (year % 4 == 0) {
				return true;
			} else {
				return false;
			}
		}
	} else {
		if (year % 4 == 0) {
			return true;
		} else {
			return false;
		}
	}
}

const startYear = parseInt(prompt("Enter the start year."));
const endYear = parseInt(prompt("Enter the end year."));
let leapyears = [];
for (let i = startYear; i <= endYear; i++) {
	if (leapYearCheck(i) == true) {
		leapyears.push(i);
	}
}
leapyears.forEach(year => {
	let li = document.createElement('li');
	li.innerText = year;
	document.getElementById("target").appendChild(li); 
});