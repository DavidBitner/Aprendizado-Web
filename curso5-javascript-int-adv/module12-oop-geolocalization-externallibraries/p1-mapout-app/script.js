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
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // Criando link no google maps com as coordenadas
    const google_position = `https://www.google.com.br/maps/@${latitude},${longitude}`;
  },
  function () {
    alert("Could not get your position.");
  }
);
