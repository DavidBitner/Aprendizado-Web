/*
1.Set the value of 'language'to the language spoken where you live (some countries have multiple languages, but just choose one)
2.Think about which variables should be constvariables (which values will never change, and which might change?). Then, change these variables to const.
3.Try to change one of the changed variables now, and observe what happens
*/

let country = "Brasil";
const continent = "South America";
let population = 200;
const isIsland = false;
let language = "Portuguese";

console.log(
  "Variables assigned with let can be changed throuout the document, const variables cannot"
);
console.log(
  "It's recommended to always use const unless changes are gonna be made to the variable"
);
