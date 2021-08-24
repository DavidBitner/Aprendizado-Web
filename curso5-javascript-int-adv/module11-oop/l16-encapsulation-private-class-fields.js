"use strict";

class Account {
  // Public fields podem ser usados em todas as instâncias da classe e não serão criados no prototype
  // Public fields são criados como uma variável, mas sem nada na frente e com ";" no final
  language = "English";

  // Private fields servem para prevenir que as propriedades apontadas como private sejam acessadas fora da classe
  // Private fields são criados com uma "#" na frente
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public methods são os métodos publicos que podem ser acessados fora da classe
  deposit(value) {
    this.#movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  // Private methods são os métodos privados que não podem ser acessados fora da classe
  #approve_loan(val) {
    return true;
  }
}

const acc1 = new Account("Dave", "R$", 1111);
acc1.deposit(250);
acc1.withdraw(104);
console.log(acc1);
