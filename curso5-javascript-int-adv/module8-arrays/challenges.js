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
