"use strict";

/**
 * A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone;
 *
 * A closure gives a function access to all variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time;
 *
 * A closure makes sure that a function doen't loose connection to variables that existed at the function's birth place;
 *
 * A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
 *
 * We do not have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is not a tangible JavaScript object.
 */

// Exemplo 1
function secure_booking() {
  let passenger_count = 0;

  return function () {
    passenger_count++;
    console.log(`${passenger_count} passengers`);
  };
}

const booker = secure_booking();

booker();
booker();
booker();

// Exemplo 2
let a;

function b() {
  const c = 2;
  a = function () {
    console.log(c * 2);
  };
}

function d() {
  const e = 3;
  a = function () {
    console.log(e * 2);
  };
}

b();
a();
// Reasigning a
d();
a();

// Exemplo 3
function board_passengers(passengers, wait) {
  const per_group = passengers / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${passengers} passengers`);
    console.log(`There are 3 groups, each with ${per_group} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}

board_passengers(100, 5);
