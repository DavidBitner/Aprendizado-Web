"use strict";

const lufthansa = {
  airline: "lufthansa",
  short: "LH",
  bookings: [],
  book: function (flight_num, passenger_name) {
    console.log(
      `${passenger_name} booked a seat on ${this.airline} flight ${this.short}${flight_num}`
    );
    this.bookings.push({
      flight: `${this.short}${flight_num}`,
      passenger_name,
    });
  },
};

lufthansa.book(237, "David");
lufthansa.book(157, "Deborah");

// Atribuindo a uma variável a função já criada
const book = lufthansa.book;

const euro_wings = {
  name: "EuroWings",
  short: "EW",
  bookings: [],
};

// Call method
// Lembrando que a keyword "this" vai ser undefined caso a função não esteja dentro de um objeto, baseado nisso, é possível especificar através de métodos o que "this" significa para um objeto
// Através do método "call", é possível passar como primeiro argumento a palavra chave que ficara no lugar de "this", nesse caso euro_wings
book.call(euro_wings, 666, "Johnsons");
book.call(lufthansa, 157, "Batman");

// Apply method
// O método "apply" é parecido com o "call", com a diferença que ele aceita um array de informações. Este método não é muito recomendado no JS pois call com spread é melhor.
const data = [157, "Superman"];
book.apply(lufthansa, data);

// Call com spread
book.call(lufthansa, ...data);

// Bind method
// O método "bind" serve para definir uma variável como a função de um objeto, já substituindo a keyword "this" na sua execução
const book_ew = book.bind(euro_wings);
const book_lh = book.bind(lufthansa);

book_ew(248, "Wonder Woman");
book_lh(666, "Flash");

// Dentro do método "bind" é possível definir parâmetros padrões para as funções além da keyword "this", no caso do exemplo abaixo o numero do voo padrão será o 999, assim, sempre que a função for chamada só será necessário passar o nome do passageiro. O nome dado para essa ação é "partial application"
const book_ew_999 = book.bind(euro_wings, 999);
book_ew_999("Kraismens");

// Logando os objetos
console.log(lufthansa);
console.log(euro_wings);

// Exemplo com event listener. Nesse caso, caso o event listener seja chamado em um botão, "this" irá ser o próprio botão, já que "this" é definido dinamicamente, então o recomendado é usar o método "bind" para definir "this" como lufthansa
lufthansa.planes = 300;
lufthansa.buy_plane = function () {
  this.planes++;
};
// document
//   .querySelector("buy")
//   .addEventListener("click", lufthansa.buy_plane.bind(lufthansa));

// Partial application com bind
const add_tax = (rate, value) => value + value * rate;
console.log(add_tax(0.1, 200));

const add23 = add_tax.bind(null, 0.23);
// add_tax = value => value + value * 0.23

// Função retornando função
function add_tax2(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const add23_2 = add_tax2(0.23);

// Logando resultados
console.log(add23(100));
console.log(add23(23));
console.log(add23_2(100));
console.log(add23_2(23));
