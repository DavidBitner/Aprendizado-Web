"use strict";

const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];

const first_withdrawal = movements.find((mov) => mov < 0);

console.log(movements);
console.log(first_withdrawal);

// const account = accounts.find((acc) => acc.owner === 'David Bitner')