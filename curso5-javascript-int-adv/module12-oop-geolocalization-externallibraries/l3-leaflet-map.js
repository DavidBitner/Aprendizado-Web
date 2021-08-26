"use strict";

// Função para conseguir a localização do usuário
navigator.geolocation.getCurrentPosition(
  // Callback function para quando a posição é encontrada pelo programa
  function (position) {
    // Criando variáveis para armazenar latitude e longitude
    // É possível criar uma variável com o mesmo nome de um campo de um dicionário usando "{}"
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    // Leaflet
    const map = L.map("map").setView(coords, 13);
    const marker = L.marker(coords).addTo(map);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/navigation-day-v1",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZGF2aWQzODIxIiwiYSI6ImNrc3RmbnlkNDE2Mmsyd2xtbXA0MWpuc3kifQ.RbxAc34mJzDrGhZZT7e2Sg",
      }
    ).addTo(map);
  },
  // Callback function para quando não é possível encontrar a posição
  function () {
    alert("Could not get your position.");
  }
);
