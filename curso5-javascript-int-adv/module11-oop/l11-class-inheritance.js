"use strict";

// Constructor functions parent
function Person(first_name, birth_year) {
  // Propriedades da instância
  this.first_name = first_name;
  this.birth_year = birth_year;
}

// Criando método dentro do prototype
Person.prototype.calc_age = function () {
  console.log(2021 - this.birth_year);
};

// Constructor function child
function Student(first_name, birth_year, course) {
  // Para fazer com que uma classe child tenha os mesmos parâmetros de uma classe parent, usa-se call para apontar que "this" vai se tratar da classe child
  Person.call(this, first_name, birth_year);
  this.course = course;
}

// Usando Object.create para fazer com que a classe child tenha o mesmo prototype da classe parent
// É importante que esse passo seja feito nessa parte do código, entre a criação dos métodos da classe child e o constructor da mesma
Student.prototype = Object.create(Person.prototype);

// Método class child
Student.prototype.introduce = function () {
  console.log(`My name is ${this.first_name} and I study ${this.course}`);
};

const dave = new Student("Dave", 1996, "Computer Science");
dave.introduce();
dave.calc_age();
