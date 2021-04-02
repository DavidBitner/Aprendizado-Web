"use strict";

const bookings = [];

function create_booking(
  flight_number,
  number_passengers = 1,
  price = 199 * number_passengers
) {
  const booking = {
    flight_number,
    number_passengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

create_booking("JJ123");
create_booking("JJ123", 2);
create_booking("JJ123", 2, 800);
create_booking("JJ123", 5);
create_booking("JJ123", undefined, 5);
