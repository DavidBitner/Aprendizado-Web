import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

/*
PROMPT/POWERSHELL
npm -v = Verificar se o npm está instalado
npm init = Iniciar NPM
npm i nomeDoPacote = Instalar novo pacote NPM
npm i = Instalar todos os pacotes que o diretório precisa para funcionar
npm i nomeDoPacote --save-dev = Instalar novo pacote em uma nova dependencia
npm uninstall nomeDoPacote = Desinstalar pacote

IMPORTANTE:
Quando for necessário passar um pacote para outro computador ou outro servidor, nunca copiar a pasta node_modules, usar "npm i" para instalar no novo ambiente de trabalho os pacotes.
*/

const state = {
  cart: [
    { product: "pizza", quantity: 5 },
    { product: "apple", quantity: 10 },
  ],
  user: { loggedIn: true },
};

// stateClone com Object.assign cria um clone que se modifica junto com o original
const stateClone = Object.assign({}, state);

// stateDeepClone com cloneDeep() cria um clone que não se modifica junto com o original
const stateDeepClone = cloneDeep(state);

// Mudando objeto original e vendo resultado
state.user.loggedIn = false;

// stateClone mostra o estado atual do objeto original, ao invés de mostrar a cópia
console.log(stateClone);

// stateDeepClone mostra o estado do objeto no momento da cópia
console.log(stateDeepClone);
