"use strict";

// Até o momento dessa aula, ainda não é possível ter uma propriedade realmente privada dentro de JS, por isso é comum que seja usado um "_" na frente de toda propriedade para apontar que aquela propriedade é protegida e deveria ser privada
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    // Propriedade protegida
    this._movements = [];
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  // Método protegido
  _approve_loan(val) {
    return true;
  }
}

const acc1 = new Account("Dave", "R$", 1111);
acc1.deposit(250);
acc1.withdraw(104);
console.log(acc1);
