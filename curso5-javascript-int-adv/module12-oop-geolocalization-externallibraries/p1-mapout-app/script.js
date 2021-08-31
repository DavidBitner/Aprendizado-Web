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

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  type = "running";

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calc_pace();
  }

  calc_pace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";

  constructor(coords, distance, duration, elevation_gain) {
    super(coords, distance, duration);
    this.elevation_gain = elevation_gain;
    this.calc_speed();
  }

  calc_speed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

///////////////////////////////////////////
// Application Architecture
class App {
  // Variáveis privadas da classe
  #map_event;
  #map;
  #workouts = [];

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

    // Funções auxiliares
    // Função para validar inputs
    const valid_inputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));

    // Função para validar numeros positivos
    const all_positive = (...inputs) => inputs.every((inp) => inp > 0);

    // Coletar data do formulário
    const type = input_type.value;
    const distance = +input_distance.value; // + converte para numero
    const duration = +input_duration.value;
    const { lat, lng } = this.#map_event.latlng;
    let workout;

    // Se o workout for running, criar um objeto running
    if (type === "running") {
      const cadence = +input_cadence.value;

      // Checar se as informações são validas
      if (
        !valid_inputs(distance, duration, cadence) ||
        !all_positive(distance, duration, cadence)
      ) {
        return alert("Inputs have to be positive numbers!");
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // Se o workout for cycling, criar um objeto cycling
    if (type === "cycling") {
      const elevation = +input_elevation.value;

      // Checar se as informações são validas
      if (
        !valid_inputs(distance, duration, elevation) ||
        !all_positive(distance, duration)
      ) {
        return alert("Inputs have to be positive numbers!");
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Adicionar o novo objeto ao array de workouts
    this.#workouts.push(workout);

    // Mostrar workout no mapa como marcador
    this._render_workout_marker(workout);

    // Mostrar workout na lista

    // Limpando campos do formulário depois de envia-lo
    input_cadence.value =
      input_distance.value =
      input_duration.value =
      input_elevation.value =
        "";
  }

  _render_workout_marker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        // Definindo configurações do popup
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      // Definindo texto dentro do popup
      .setPopupContent(workout.distance)
      .openPopup();
  }
}

const app = new App();
