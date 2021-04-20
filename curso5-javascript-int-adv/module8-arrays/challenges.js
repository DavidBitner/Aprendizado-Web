"use strict";

/**
 * Atividade 1
 *
 * Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
 * Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
 *
 * 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shadow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
 * 2. Create an array with both Julia's (corrected) and Kate's data
 * 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
 * 4. Run the function for both test datasets
 *
 * TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
 * TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 */
console.log(`Atividade 1`);

function check_dogs(array_julia, array_kate) {
  const array_julia_copy = array_julia.slice(1, -2);
  const array_julia_kate = array_julia_copy.concat(array_kate);

  array_julia_kate.forEach(function (dog, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dog < 3 ? "is still a puppy 🐶" : `an adult and is ${dog} years old`
      }, `
    );
  });
  console.log();
}

check_dogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
check_dogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/**
 * Atividade 2
 *
 * Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
 *
 * Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
 *
 * 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
 * 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
 * 3. Calculate the average human age of all adult dogs
 * 4. Run the function for both test datasets
 *
 * TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
 * TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
 */
console.log(`\nAtividade 2`);

function calc_average_human_age(dogs_ages) {
  // 1
  let human_ages = dogs_ages.map((dog) => {
    if (dog <= 2) {
      return dog * 2;
    } else {
      return 16 + dog * 4;
    }
  });

  console.log(human_ages);

  // 2
  human_ages = human_ages.filter((dog) => dog >= 18);

  console.log(human_ages);

  // 3
  // human_ages = human_ages.reduce((accumulator, dog) => {
  //   if (dog == human_ages[human_ages.length - 1]) {
  //     return (accumulator + dog) / human_ages.length;
  //   } else {
  //     return accumulator + dog;
  //   }

  // }, 0);

  human_ages =
    human_ages.reduce((accumulator, dog) => accumulator + dog, 0) /
    human_ages.length;

  console.log(human_ages);
}

// Data
let dogs1 = [5, 2, 4, 1, 15, 8, 3];
let dogs2 = [16, 6, 10, 5, 6, 1, 4];

// Calling function
calc_average_human_age(dogs1);
calc_average_human_age(dogs2);

/**
 * Atividade 3
 *
 * Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
 *
 * TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
 * TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
 */
console.log(`\nAtividade 3`);

// 1
function simp_calc_average_human_age(dogs_ages) {
  const avg = dogs_ages
    .map((dog) => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter((dog) => dog >= 18)
    .reduce((accumulator, dog, i, arr) => accumulator + dog / arr.length, 0);

  console.log(avg);
}

// Data
dogs1 = [5, 2, 4, 1, 15, 8, 3];
dogs2 = [16, 6, 10, 5, 6, 1, 4];

// Calling function
simp_calc_average_human_age(dogs1);
simp_calc_average_human_age(dogs2);

/**
 * Atividade 4
 *
 * Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
 * Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
 * Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion.
 *
 * 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
 * 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)
 * 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
 * 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
 * 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
 * 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
 * 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
 * 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
 *
 * HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them
 * HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
 *
 * TEST DATA:
 * const dogs = [
 *   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 *   { weight: 8, curFood: 200, owners: ['Matilda'] },
 *   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 *   { weight: 32, curFood: 340, owners: ['Michael'] }
 * ];
 */
console.log(`\nAtividade 4`);

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// let exact_ammount = false;
// let good_ammount = false;
// const ok_dogs = [];

// 1
dogs.forEach((dog) => {
  dog.recommended_food = Math.trunc(dog.weight ** 0.75 * 28);

  // my solution
  // dog.owners.forEach((owner) => {
  //   if (dog.curFood < dog.recommended_food) {
  //     owners_eat_too_little.push(owner);
  //     if (owner === "Sarah") {
  //       console.log(`Sarah's dog is eating too little`);
  //     }
  //     if (dog.curFood > dog.recommended_food * 0.9) {
  //       good_ammount = true;
  //       ok_dogs.push(dog);
  //     }
  //   } else if (dog.curFood > dog.recommended_food) {
  //     owners_eat_too_much.push(owner);
  //     if (owner === "Sarah") {
  //       console.log(`Sarah's dog is eating too much`);
  //     }
  //     if (dog.curFood < dog.recommended_food * 1.1) {
  //       good_ammount = true;
  //       ok_dogs.push(dog);
  //     }
  //   } else {
  //     exact_ammount = True;
  //   }
  // });
});

// 2
const dog_sarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    dog_sarah.curFood > dog_sarah.recommended_food ? "much" : "little"
  }`
);

// 3
const owners_eat_too_much = dogs
  .filter((dog) => dog.curFood > dog.recommended_food)
  .flatMap((dog) => dog.owners);
const owners_eat_too_little = dogs
  .filter((dog) => dog.curFood < dog.recommended_food)
  .flatMap((dog) => dog.owners);

// 4
console.log(`${owners_eat_too_much.join(" and ")}'s dogs eat too much!`);
console.log(`${owners_eat_too_little.join(" and ")}'s dogs eat too little!`);

// 5
// console.log(exact_ammount);
console.log(dogs.some((dog) => dog.curFood === dog.recommended_food));

// 6
// console.log(good_ammount);
const check_eating_ok = (dog) =>
  dog.curFood > dog.recommended_food * 0.9 &&
  dog.curFood < dog.recommended_food * 1.1;

console.log(dogs.some(check_eating_ok));

// 7
// console.log(ok_dogs)
console.log(dogs.filter(check_eating_ok));

// 8
let dogs_copy_ordered = dogs
  .slice()
  .sort((a, b) => a.recommended_food - b.recommended_food);
console.log(dogs_copy_ordered);
