"use strict";

const btn = document.querySelector(".btn-country");
const countries_container = document.querySelector(".countries");

function get_country_data(country) {
  // Criando variavel do request
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  );
  request.send();

  // Criando event listener que vai aguardar o request ser finalizado e armazenar as informações em outra variavel
  // This nesse caso é a request
  request.addEventListener("load", function () {
    // Converter JSON para uma string JS e desestruturando ao mesmo tempo
    const [data] = JSON.parse(this.responseText);

    // HTML que será usada na aplicação já com as informações necessarias
    const html = `
    <article class="country">
      <img class="country-img" src="${data.flag}" />
      <div class="country-data">
        <h3 class="country-name">${data.name}</h3>
        <h4 class="country-region">${data.region}</h4>
        <p class="country-row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country-row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country-row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

    countries_container.insertAdjacentHTML("beforeend", html);
    countries_container.style.opacity = 1;
  });
}

get_country_data("brasil");
get_country_data("usa");
get_country_data("china");
