'use strict';
const year = parseInt(prompt("Enter a year."));

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

if (leapYearCheck(year) == true) {
	document.querySelector("#target").innerHTML = year + " is a leap year";
} else {
	document.querySelector("#target").innerHTML = year + " is not a leap year";
}
