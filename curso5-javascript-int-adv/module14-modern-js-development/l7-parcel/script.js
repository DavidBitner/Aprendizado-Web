// Parcel serve para fazer um bundle da aplicação, o comando vai servir para transformar tudo em um arquivo só

/*
PROMPT/POWERSHELL
npm init = Criar package.json
npm i = Instalar módulos
npm i parcel --save-dev = Instalar parcel
npx parcel nomeDoHtml.html = Fazer o bundle da aplicação
npm run start = Fazer o bundle da aplicação depois de criar o script dentro de package.json
npm run build = Fazer o bundle final depois de criar o script dentro de package.json

Depois de criar o script "start": "parcel index.html" dentro do arquivo "package.json", é possível iniciar o servidor pelo parcel com o comando npm run start
"build": "parcel build index.html" dentro do arquivo "package.json" serve para montar o pacote final da aplicação
*/

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import { addToCart, cart } from "./shoppingCart.js";
// import cloneDeep from "lodash-es";


addToCart("pizza", 5);
addToCart("oranges", 12);

console.log(cart);

const state = {
  cart: [
    { product: "pizza", quantity: 5 },
    { product: "apple", quantity: 10 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

// Código que vai fazer o parcel inserir mudanças feitas no código sem recarregar a página do live server
if (module.hot) {
  module.hot.accept();
}
