const david = {
  first_name: "David",
  last_name: "Bitner",
  birth_year: 1996,
  job: "Programador",
  friends: ["James", "John", "Johnson"],
  has_drivers_license: true,

  // Primeira forma:
  // calc_age: function (birth_year) {
  //   return 2021 - birth_year
  // }

  // Segunda forma:
  // Usando "this" é possível referênciar dentro da função um elemento que pertence ao objeto
  // console.log(this)
  // return 2021 - this.birth_year

  // Terceira forma
  calc_age: function () {
    // Pode-se determinar a idade apenas uma vez para ficar sempre armazenado no objeto, sem precisar de chamar a função toda vez que o objeto for chamado
    this.age = 2021 - this.birth_year;
    return this.age;
  },

  // Atividade
  get_summary: function () {
    if (this.has_drivers_license) {
      this.summary = `${this.first_name} is a ${this.age}-years old ${this.job}, and he has a driver's license`;
      return this.summary;
    } else {
      this.summary = `${this.first_name} is a ${this.calc_age}-years old ${this.job}, and he does not have a driver's license`;
      return this.summary;
    }
  },
};

// Primeira forma
// console.log(david.calc_age(1991))

// Segunda forma
console.log(david.calc_age());

// Terceira forma
console.log(david.age);

// Atividade
console.log(david.get_summary());
