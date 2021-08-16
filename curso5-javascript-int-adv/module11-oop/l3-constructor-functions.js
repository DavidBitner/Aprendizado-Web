"use strict";

// Constructor functions sempre começam com a primeira letra maiuscula
function Person(first_name, birth_year) {
  // Propriedades da instância
  this.first_name = first_name;
  this.birth_year = birth_year;
}

const dave = new Person("Dave", 1996);
console.log(dave);

// O que acontece quando "new" é usado?
// 1. Um novo objeto {} é criado
// 2. A função é chamada, this = {}
// 3. O objeto é linkado ao prototype
// 4. A função automaticamente retorna o objeto {}

const deborah = new Person("Deborah", 2000);
const johnsons = new Person("Johnsons", 1985);
console.log(deborah, johnsons);

const frank = "Frank";

// instanceof serve para definir se um objeto é ou não uma instância de uma determinada classe
console.log(dave instanceof Person);
console.log(frank instanceof Person);
