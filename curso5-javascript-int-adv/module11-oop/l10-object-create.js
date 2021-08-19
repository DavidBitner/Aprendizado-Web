"use strict";

// Object.create serve para criar uma classe sem prototype, o que significa que você mesmo deve criar o prototype da classe
// Atráves do Object.create é possível também designar a uma classe o protótipo de qualquer outra classe

// Prototype que será usado para as classes Person
const Person_prototype = {
  calc_age() {
    console.log(2021 - this.birth_year);
  },
};

// Criando objeto vazio e designando a ele o prototype "Person_prototype"
const dave = Object.create(Person_prototype);
console.log(dave);

// Preenchendo objeto com informações
dave.name = "Dave";
dave.birth_year = "1996";
dave.calc_age();
