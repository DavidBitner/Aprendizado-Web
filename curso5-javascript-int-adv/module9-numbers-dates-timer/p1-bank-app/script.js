const account1 = {
  owner: "David Bitner",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interest_rate: 1.2, // %
  pin: 1111,

  movements_dates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

const account2 = {
  owner: "Deborah Silva",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interest_rate: 1.5,
  pin: 2222,

  movements_dates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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

// Funções
// Função para mostrar movimentações na conta
function display_movements(movements, sort = false) {
  // Limpando o container de movimentações antes de inserir as informações nele
  container_movements.innerHTML = "";

  // Reordenando ordem dos movimentos caso o botão de ordenar seja pressionado
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    // Função para apontar se a classe do elemento será depósito ou retirada
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements-row">
      <div class="movements-type movements-type-${type}">${i + 1} ${
      mov > 0 ? "DEPÓSITO" : "RETIRADA"
    }</div>
      <div class="movements-value">R$${mov.toFixed(2)}</div>
    </div>
    `;

    container_movements.insertAdjacentHTML("afterbegin", html);
  });
}

// Função para mostrar o balanço baseado nas movimentações
function display_balance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  label_balance.textContent = `R$${acc.balance.toFixed(2)}`;
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
  label_sum_in.textContent = `R$${ins.toFixed(2)}`;

  const outs = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  label_sum_out.textContent = `R$${Math.abs(outs).toFixed(2)}`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interest_rate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, int) => acc + int, 0);
  label_sum_interest.textContent = `R$${interest.toFixed(2)}`;
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

  if (current_account?.pin === +input_login_pin.value) {
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

  const amount = +input_transfer_amount.value;
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

// Empréstimo
btn_loan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(input_loan_amount.value);

  // Checar se o valor do empréstimo é menor do que 10% de qualquer depósito feito na conta
  if (
    amount > 0 &&
    current_account.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Adicionar movimentação
    current_account.movements.push(amount);

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
    +input_close_pin.value === current_account.pin
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

// Botão de ordenar transações
let sorted = false;
btn_sort.addEventListener("click", function (e) {
  e.preventDefault();

  display_movements(current_account.movements, !sorted);
  sorted = !sorted;
});
