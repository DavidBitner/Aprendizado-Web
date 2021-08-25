"use strict";

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class.

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/
console.log(`Atividade 4`);

// 1
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;

    // 3
    return this;
  }

  brake() {
    this.speed -= 5;

    // 3
    return this;
  }
}

class Ev extends Car {
  // 2
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  charge_battery(charge_to) {
    this.#charge = charge_to;

    // 3
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} goint at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );

    // 3
    return this;
  }
}

const data_car_1 = new Ev("Rivian", 120, 23);
data_car_1.accelerate();
data_car_1.brake();
data_car_1.charge_battery(90);
data_car_1.accelerate();

// 3
data_car_1.accelerate().brake().brake().brake().accelerate();
