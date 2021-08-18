"use strict";

// Class declaration
class PersonClass {
  constructor(first_name, birth_year) {
    this.first_name = first_name;
    this.birth_year = birth_year;
  }

  // Os métodos serão adicionados ao prototype
  calc_age() {
    console.log(2021 - this.birth_year);
  }
}

const dave = new PersonClass("Dave", 1996);
console.log(dave);
dave.calc_age();

PersonClass.prototype.greet = function () {
  console.log(`Hey ${this.first_name}`);
};

dave.greet();
