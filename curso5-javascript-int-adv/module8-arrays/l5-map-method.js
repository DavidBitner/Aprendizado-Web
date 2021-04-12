"use strict";

const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];

const eu_to_dol = 1.1;

const movements_usd = movements.map(function (movement) {
  return movement * eu_to_dol;
});

console.log(movements);
console.log(movements_usd);

// Map Arrow
// movements.map((movement) => movement * eu_to_dol);

const movements_descriptions = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movements_descriptions);
