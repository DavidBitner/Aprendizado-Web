"use strict";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const container_workouts = document.querySelector(".workouts");
const input_type = document.querySelector(".form-input-type");
const input_distance = document.querySelector(".form-input-distance");
const input_duration = document.querySelector(".form-input-duration");
const input_cadence = document.querySelector(".form-input-cadence");
const input_elevation = document.querySelector(".form-input-elevation");

const year = document.querySelector("#year");
const today = new Date();

// Copyright year
year.innerHTML = today.getFullYear();

// Função para conseguir a localização do usuário
navigator.geolocation.getCurrentPosition(
  function (position) {
    // Definindo coordenadas atuais do usuário
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    // Variáveis usadas no mapa
    const map = L.map("map").setView(coords, 13);
    const marker_posicao_usuario = L.marker(coords).addTo(map);

    // Função de loadind do mapa
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

    // Função para colocar um popup ao clicar em uma posição do mapa
    map.on("click", function (map_event) {
      // Desconstruindo em variáveis o objeto "latlng" que se encontra dentro do objeto "map_event"
      const { lat, lng } = map_event.latlng;

      // Popup
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
          // Definindo configurações do popup
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: "running-popup",
          })
        )
        // Definindo texto dentro do popup
        .setPopupContent(`Workout ${lat}:${lng}`)
        .openPopup();
    });
  },
  function () {
    alert("Could not get your position.");
  }
);
