"use strict";

// Getters e setters servem para pegar e colocar valores dentro das variáveis de uma classe ou objeto
const account = {
  owner: "David",
  movements: [10, 12, 14, 122, 143],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Setters sempre possuem um parâmetro, nesse caso "mov"
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 200;
console.log(account.movements);

// Class declaration
class PersonClass {
  constructor(full_name, birth_year) {
    this.full_name = full_name;
    this.birth_year = birth_year;
  }

  // Getter e setter
  get age() {
    return 2021 - this.birth_year;
  }

  // Set uma propriedade que já existe
  set full_name(name) {
    console.log(name);
    if (name.includes(" ")) {
      this._full_name = name;
    } else {
      console.log(`${name} is not a full name!`);
    }
  }
  get full_name() {
    return this._full_name;
  }
}

const dave = new PersonClass("Dave", 1996);
console.log(dave.age);

const johnsons = new PersonClass("Johnsons Johnsons", 1956);
console.log(johnsons);
