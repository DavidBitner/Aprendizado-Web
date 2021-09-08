"use strict";

// Geolocation api callback function based
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (error) => console.error(error)
);

// Geolocation api promise based
function get_position() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

get_position()
  .then((position) => console.log(position))
  .catch((error) => console.error(error));
