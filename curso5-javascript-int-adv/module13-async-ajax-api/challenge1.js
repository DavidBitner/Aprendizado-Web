"use strict";

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: 'https://geocode.xyz/51.50354,-0.12768?geoit=xml'. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

// Base
const countries_container = document.querySelector(".countries");

function render_country(data, class_name = "") {
  const html = `
    <article class="country ${class_name}">
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
}

function render_error(msg) {
  countries_container.insertAdjacentHTML("beforeend", msg);
}

function get_country_data(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Country not found! ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      render_country(data[0]);
    })
    .catch((error) => {
      console.error(error);
      render_error(`Something went wrong ${error}. Try Again!`);
    })
    .finally(() => {
      countries_container.style.opacity = 1;
    });
}

// 1
function where_am_i(lat = "-23.8451732", lng = "-46.7174964") {
  // 2
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=372124368989912681460x27012`
  )
    .then((response) => {
      // 5
      if (!response.ok) {
        throw new Error(`Problem with geocoding! ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      // 3
      console.log(`You are in ${data.city}, ${data.country}`);

      // 6
      get_country_data(data.country);
    })
    // 4
    .catch((error) => {
      console.error(error);
    });
}

// 7
where_am_i("52.508", "13.381");
where_am_i("19.037", "72.873");
where_am_i("-33.933", "18.474");
