"use strict";

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greet_hey = greet("Hey");
greet_hey("David");
greet_hey("Deborah");

// Chamar função sem defini-la
greet("Hello")("David");

// Arrow function returning arrow function
const greet_arr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet_arr("Houdy")("David");
