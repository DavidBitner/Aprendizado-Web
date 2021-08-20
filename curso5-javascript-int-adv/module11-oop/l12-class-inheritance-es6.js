"use strict";

// Class declaration
class Person {
  constructor(first_name, birth_year) {
    this.first_name = first_name;
    this.birth_year = birth_year;
  }

  // Instance Method
  calc_age() {
    console.log(2021 - this.birth_year);
  }

  // Static Method
  static hey() {
    console.log("Hey");
    console.log(this);
  }
}

// Quando um child for criado em ES6 basta usar extends para apontar qual a classe parent, e super para apontar as variáveis de parent que serão reuzadas na child
class Student extends Person {
  constructor(first_name, birth_year, course) {
    // Dentro de constructor, super sempre deve vir primeiro
    super(first_name, birth_year);
    this.course = course;
  }

  // Caso uma classe child não tenha variável/parâmetros diferentes da classe parent, é possível simplesmente não usar o constructor acima e apenas declarar os novos métodos que a classe child possuirá

  // Métodos da classe child
  introduce() {
    console.log(`My name is ${this.first_name} and I study ${this.course}`);
  }

  calc_age() {
    console.log(`I'm ${2021 - this.birth_year} years old!`)
  }
}

const dave = new Student("Dave", "1996", "Computer Science");
dave.introduce();
dave.calc_age();
