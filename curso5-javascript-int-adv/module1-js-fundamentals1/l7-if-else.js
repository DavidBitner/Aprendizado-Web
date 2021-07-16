const age = 19;
const is_old_enough = age >= 18;

if (is_old_enough) {
  console.log(`The user is old enough to drive`);
} else {
  const years_left = 18 - age;
  console.log(`The user isn't old enough to drive. Wait ${years_left} years.`);
}

const birth_year = 1998;

let century;
if (birth_year <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
