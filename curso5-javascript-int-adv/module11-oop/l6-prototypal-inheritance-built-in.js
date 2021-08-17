"use strict";

// Constructor functions sempre começam com a primeira letra maiuscula
function Person(first_name, birth_year) {
  // Propriedades da instância
  this.first_name = first_name;
  this.birth_year = birth_year;
}

const dave = new Person("Dave", 1996);
const deborah = new Person("Deborah", 1980);

// Prototypes
console.log(Person.prototype);

// Criando método dentro do prototype
Person.prototype.calc_age = function () {
  console.log(2021 - this.birth_year);
};

// Criando propriedade dentro do prototype
Person.prototype.species = "Homo Sapiens";

// Object.prototype é o topo da cadeia de prototypes
console.log(dave.__proto__);
console.log(dave.__proto__.__proto__);
console.log(dave.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// Prototype de um objeto built-in
const arr = [2, 2, 58, 4, 13, 4, 5, 2]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// É possível adicionar ao prototype de um built-in object um método ou propriedade
Array.prototype.unique_values = function () {
  return [...new Set(this)];
};

console.log(arr.unique_values());
