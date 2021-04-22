"use strict";

function calc_days_passed(date1, date2) {
  return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(calc_days_passed(new Date(2037, 3, 15), new Date(2037, 3, 18)));
