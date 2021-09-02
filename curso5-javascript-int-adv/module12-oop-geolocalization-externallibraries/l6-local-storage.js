"use strict";

// Função que vai armazenar dados do aplicativo em um storage local
function _set_local_storage() {
  // Transformando o objeto em uma string para ser armazenado no local storage
  localStorage.setItem("storage", JSON.stringify(nome_do_objeto));
}

// Função que vai usar as informações depositadas no storage local
function _get_local_storage() {
  // Transformando a string do local storage em um objeto para usar no app
  const data = JSON.parse(localStorage.getItem("storage"));

  // Clausula de defesa para caso não hajam informações no local storage
  if (!data) {
    return;
  }

  // Adicionando as informações do local storage ao aplicativo
  nome_do_objeto = data;
}

// Função publica para resetar local storage pelo console do navegador
function reset() {
  localStorage.removeItem("storage");
  location.reload();
}
