"use strict";

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'!

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/
console.log(`Atividade 3`);

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

// 1
function Ev(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

Ev.prototype = Object.create(Car.prototype);

// 2
Ev.prototype.charge_battery = function (charge_to) {
  this.charge = charge_to;
};

// 3
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// 4
const data_car_1 = new Ev("Tesla", 120, 23);
data_car_1.accelerate();
data_car_1.brake();
data_car_1.charge_battery(90);
data_car_1.accelerate();
