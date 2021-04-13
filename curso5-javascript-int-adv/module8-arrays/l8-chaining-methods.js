"use strict";

const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];
const eu_to_dol = 1.1;

const total_deposits_USD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eu_to_dol)
  .reduce((acc, mov) => acc + mov, 0);
console.log(total_deposits_USD);
