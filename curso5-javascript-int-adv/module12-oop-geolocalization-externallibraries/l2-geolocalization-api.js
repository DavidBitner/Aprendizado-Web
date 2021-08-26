"use strict";

// Função para conseguir a localização do usuário
navigator.geolocation.getCurrentPosition(
  // Callback function para quando a posição é encontrada pelo programa
  function (position) {
    // Criando variáveis para armazenar latitude e longitude
    // É possível criar uma variável com o mesmo nome de um campo de um dicionário usando "{}"
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(position);
    console.log(latitude, longitude);

    // Criando link no google maps com as coordenadas
    const google_position = `https://www.google.com.br/maps/@${latitude},${longitude}`;
    console.log(google_position);
  },
  // Callback function para quando não é possível encontrar a posição
  function () {
    alert("Could not get your position.");
  }
);
