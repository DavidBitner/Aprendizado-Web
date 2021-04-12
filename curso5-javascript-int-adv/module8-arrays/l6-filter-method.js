"use script";

const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];

const deposits = movements.filter((mov) => mov > 0);
const withdraws = movements.filter((mov) => mov < 0);

console.log(deposits);
console.log(withdraws);
