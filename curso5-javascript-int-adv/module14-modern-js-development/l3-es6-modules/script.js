// Importing module

// Usando import em multiplos itens de dentro do módulo "shoppingCart"
import { addToCart, totalPrice as price, quantity } from "./shoppingCart.js";
console.log(`Importing module`);

addToCart("Potato", 5);
console.log(price, quantity);

// Importando todos os itens de um módulo
import * as ShoppingCart from "./shoppingCart.js";

ShoppingCart.removeFromCart();

// Importando valor padrão do módulo sem chaves
import defaultExport from "./shoppingCart.js";
console.log(defaultExport);
