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

dave.calc_age();
deborah.calc_age();

console.log(dave.__proto__);
console.log(dave.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(dave));

// Criando propriedade dentro do prototype
Person.prototype.species = "Homo Sapiens";
console.log(dave.species, deborah.species);

// Como saber se uma propriedade faz parte do objeto em si ou do prototype
console.log(dave.hasOwnProperty("first_name"));
console.log(dave.hasOwnProperty("species"));
