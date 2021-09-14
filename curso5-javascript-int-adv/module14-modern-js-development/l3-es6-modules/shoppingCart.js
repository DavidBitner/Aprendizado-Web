// Exporting module
console.log(`Exporting module`);

const shippingCost = 10;
const cart = [];

// Para que algo dentro de um modulo possa ser usado por outro, é necessário usar "export" para que seja possível usar "import" em outro módulo
export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 500;
const totalQuantity = 50;

// Exportando multiplos itens
export { totalPrice, totalQuantity as quantity };

export function removeFromCart() {
  console.log(`Product removed from cart`);
}

// Exportando um valor padrão
export default cart;
