"use strict";

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
  // Static Methods podem ser usados pela classe, mas não pelos objetos que são criados a partir da classe
  static hey() {
    console.log("Hey");
    console.log(this);
  }
}

Person.hey();
