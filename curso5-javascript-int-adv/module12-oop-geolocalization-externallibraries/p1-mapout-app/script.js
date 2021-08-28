"use strict";

// Variáveis
const form = document.querySelector(".form");
const container_workouts = document.querySelector(".workouts");
const input_type = document.querySelector(".form-input-type");
const input_distance = document.querySelector(".form-input-distance");
const input_duration = document.querySelector(".form-input-duration");
const input_cadence = document.querySelector(".form-input-cadence");
const input_elevation = document.querySelector(".form-input-elevation");

let map_event, map;

const year = document.querySelector("#year");
const today = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class App {
  // Variáveis privadas da classe
  #map_event;
  #map;

  constructor() {
    this._get_position();
    form.addEventListener("submit", this._new_workout.bind(this));

    // Event listener para quando o tipo de exercicio for selecionado
    input_type.addEventListener("change", this._toggle_elevation_field);
  }

  // Função para conseguir a localização do usuário
  _get_position() {
    navigator.geolocation.getCurrentPosition(
      this._load_map.bind(this),
      function () {
        alert("Could not get your position.");
      }
    );
  }

  // Função de carregamento do mapa
  _load_map(position) {
    // Definindo coordenadas atuais do usuário
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    // Variáveis usadas no mapa
    this.#map = L.map("map").setView(coords, 13);
    const marker_posicao_usuario = L.marker(coords).addTo(this.#map);

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
    ).addTo(this.#map);

    // Função executada ao clicar no mapa
    this.#map.on("click", this._show_form.bind(this));
  }

  _show_form(map_e) {
    this.#map_event = map_e;

    // Abrindo formulário de exercicio ao clicar no mapa
    form.classList.remove("hidden");
    input_distance.focus();
  }

  _toggle_elevation_field() {
    // Seleção dos dois campos que serão alterados quando for alterado o tipo de exercicio
    // Usando método "closest" para selecionar o parent mais próximo
    input_elevation.closest(".form-row").classList.toggle("form-row-hidden");
    input_cadence.closest(".form-row").classList.toggle("form-row-hidden");
  }

  _new_workout(e) {
    // Prevenir que a página recarregue ao enviar formulário
    e.preventDefault();

    // Limpando campos do formulário depois de envia-lo
    input_cadence.value =
      input_distance.value =
      input_duration.value =
      input_elevation.value =
        "";

    // Desconstruindo em variáveis o objeto "latlng" que se encontra dentro do objeto "map_event"
    const { lat, lng } = this.#map_event.latlng;

    // Marker e popup adicionados ao enviar formulário
    L.marker([lat, lng])
      .addTo(this.#map)
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
  }
}

const app = new App();

// Copyright year
year.innerHTML = today.getFullYear();
