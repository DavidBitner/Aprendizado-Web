"use strict";

// Data
const account1 = {
  owner: "David Bitner",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interest_rate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Deborah Silva",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interest_rate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "John Johnsons",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interest_rate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Kraismens Stalanovsky",
  movements: [430, 1000, 700, 50, 90],
  interest_rate: 1,
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

// Função para mostrar movimentações na conta
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

// Função para mostrar o balanço baseado nas movimentações
function display_balance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  label_balance.textContent = `R$${acc.balance}`;
}

// Função para criar automaticamente o nome de usuário das contas
function create_username(accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
}
create_username(accounts);

// Função para mostrar depósitos, retiradas e interesse
function calc_display_summary(account) {
  const movements = account.movements;
  const ins = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  label_sum_in.textContent = `R$${ins}`;

  const outs = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  label_sum_out.textContent = `R$${Math.abs(outs)}`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interest_rate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, int) => acc + int, 0);
  label_sum_interest.textContent = `R$${interest}`;
}

// Função para fazer update da UI
function update_ui(acc) {
  // Mostrar movimentações
  display_movements(acc.movements);

  // Mostrar balanço
  display_balance(acc);

  // Mostrar summary
  calc_display_summary(acc);
}

// Eventos
let current_account;

// Login
btn_login.addEventListener("click", function (e) {
  // Prevenir que a página recarregue, já que o botão faz parte de um formulário
  e.preventDefault();

  // Definindo usuário logado
  current_account = accounts.find(
    (acc) => acc.username === input_login_username.value
  );

  if (current_account?.pin === Number(input_login_pin.value)) {
    // Mostrar UI e uma mensagem
    label_welcome.textContent = `Bem vindo, ${
      current_account.owner.split(" ")[0]
    }`;
    container_app.style.opacity = 100;

    // Mostrar informações
    update_ui(current_account);

    // Limpar campos de texto de login
    /*
    input_login_username.value = input_login_pin.value = "";
    input_login_pin.blur();
    */
  }
});

// Transferência
btn_transfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(input_transfer_amount.value);
  const receiver_acc = accounts.find(
    (acc) => acc.username === input_transfer_to.value
  );

  // Limpar campos de texto de transferência
  input_transfer_amount.value = input_transfer_to.value = "";

  // Checkar se a transferência é valida
  if (
    amount > 0 &&
    receiver_acc &&
    current_account?.balance >= amount &&
    receiver_acc?.username !== current_account.username
  ) {
    // Fazendo a transferência
    current_account.movements.push(-amount);
    receiver_acc.movements.push(amount);

    // Update UI
    update_ui(current_account);
  }
});

// Fechar conta
btn_close.addEventListener("click", function (e) {
  e.preventDefault();

  // Deletar conta
  if (
    input_close_username.value === current_account.username &&
    Number(input_close_pin.value) === current_account.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === current_account.username
    );

    accounts.splice(index, 1);
  }

  // Escondendo UI
  container_app.style.opacity = 0;

  // Limpar campos de texto de fechamento de conta
  input_close_username.value = input_close_pin.value = "";
});
