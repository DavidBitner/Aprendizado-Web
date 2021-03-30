"use strict";

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Python"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);

// Converter objeto para mapa
// const map_example = new Map(Object.entries[object_example]);

// Varrendo um objeto
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key == "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = 1;
console.log(question.get(question.get("correct") == answer));

// Converter mapa para array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
