"use strict";

// Immediately invoked function expression IIFE

function run_once() {
  console.log(`This will never run again`);
}

run_once();

// ===

(function () {
  console.log(`This will never run again`);
})();

// Arrow IIFE
(() => console.log(`This will ALSO never run again`))();
