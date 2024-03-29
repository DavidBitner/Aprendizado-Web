"use strict";

// É comum que seja usado um "_" na frente de toda propriedade para apontar que aquela propriedade é protegida e deveria ser privada
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // Propriedade protegida
    this._pin = pin;
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
