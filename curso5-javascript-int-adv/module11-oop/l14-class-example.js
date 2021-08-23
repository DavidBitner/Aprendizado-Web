"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    // É possível criar propriedades independente de inputs
    this.movements = [];

    // É possível também executar qualquer código dentro do constructor
    console.log(`Obrigado por abrir uma conta ${this.owner}`);
  }

  // Para modificar os valores do array da classe, é boa prática criar métodos que façam isso
  deposit(value) {
    this.movements.push(value);
  }

  // Além disso é possível também chamar outros métodos dentro de um método
  withdraw(value) {
    this.deposit(-value);
  }
}

const acc1 = new Account("Dave", "R$", 1111);
console.log(acc1);

// Assim é possível pushar valores para dentro do array da classe
acc1.deposit(250);
acc1.withdraw(104);
console.log(acc1);
