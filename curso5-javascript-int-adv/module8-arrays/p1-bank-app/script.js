"use strict";

// Data
const account1 = {
  owner: "David Bitner",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Deborah Silva",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "John Johnsons",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Kraismens Stalanovsky",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elementos
const label_welcome = document.querySelector(".welcome");
const label_date = document.querySelector(".date");
const label_balance = document.querySelector(".balance-value");
const label_sum_in = document.querySelector(".summary-value-in");
const label_sum_out = document.querySelector(".summary-value-out");
const label_sum_interest = document.querySelector(".summary-value-interest");
const label_timer = document.querySelector(".timer");

const container_app = document.querySelector(".app");
const container_movements = document.querySelector(".movements");

const btn_login = document.querySelector(".login-btn");
const btn_transfer = document.querySelector(".form-btn-transfer");
const btn_loan = document.querySelector(".form-btn-loan");
const btn_close = document.querySelector(".form-btn-close");
const btn_sort = document.querySelector(".btn-sort");

const input_login_username = document.querySelector(".login-input-user");
const input_login_pin = document.querySelector(".login-input-pin");
const input_transfer_to = document.querySelector(".form-input-to");
const input_transfer_amount = document.querySelector(".form-input-amount");
const input_loan_amount = document.querySelector(".form-input-loan-amount");
const input_close_username = document.querySelector(".form-input-user");
const input_close_pin = document.querySelector(".form-input-pin");

function display_movements(movements) {
  // Limpando o container de movimentações antes de inserir as informações nele
  container_movements.innerHTML = "";
  
  movements.forEach(function (mov, i) {
    // Função para apontar se a classe do elemento será depósito ou retirada
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements-row">
      <div class="movements-type movements-type-${type}">${i + 1} ${
      mov > 0 ? "DEPÓSITO" : "RETIRADA"
    }</div>
      <div class="movements-value">R$${mov}</div>
    </div>
    `;

    container_movements.insertAdjacentHTML("afterbegin", html);
  });
}

display_movements(account1.movements);
