"use strict";

// Para que seja possível fazer uma cadeia de métodos, é necessário que o método retorne algo para que o próximo método chamado possa ser executado no objeto retornado.
class Account {
  // Public fields podem ser usados em todas as instâncias da classe e não serão criados no prototype
  language = "English";

  // Private fields servem para prevenir que as propriedades apontadas como private sejam acessadas fora da classe
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.movements = [];
  }

  // Public methods são os métodos publicos que podem ser acessados fora da classe
  deposit(value) {
    this.movements.push(value);

    // Retorna a conta
    return this;
  }

  withdraw(value) {
    this.deposit(-value);

    // Retorna a conta
    return this;
  }

  // Private methods são os métodos privados que não podem ser acessados fora da classe
  #approve_loan(val) {
    return true;
  }
}

const acc1 = new Account("Dave", "R$", 1111);

// Chaining Methods
acc1.deposit(245).deposit(123).withdraw(14).deposit(509).withdraw(300);

console.log(acc1);
