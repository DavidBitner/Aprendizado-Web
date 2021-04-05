"use strict";

function one_word(str) {
  return str.replace(/ /g, "").toLowerCase();
}

function first_word_upper(str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

// Higher order function
function transform(str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Function name: ${fn.name}`);
}

transform("JavaScript is a programming language", first_word_upper);
transform("JavaScript is a programming language", one_word);
