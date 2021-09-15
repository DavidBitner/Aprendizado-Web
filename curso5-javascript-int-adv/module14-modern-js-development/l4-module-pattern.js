// Normalmente um module começa com uma IIFE atribuida a uma variavel, assim os dados contigos dentro da IIFE serão privados e não poderão ser acessados fora da função
const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 159;
  const totalQuantity = 23;

  function addToCart(product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  }

  function orderStock(product, quantity) {
    console.log(`${quantity} ${product} ordered from suplier`);
  }

  // O return nesse caso serve para atribuir as funções da variável que recebeu a IIFE
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// addToCart pode ser acessado fora da função pois foi retornado na IIFE
ShoppingCart.addToCart("orange", 7);
ShoppingCart.addToCart("pizza", 2);
console.log(ShoppingCart);

// Como shippingCost não foi anunciada no return da IIFE, shippingCost não pode ser acessada fora da função
console.log(ShoppingCart.shippingCost);
