// this == window global
console.log(this);

// this == undefined
function calc_age(birth_year) {
  console.log(2021 - birth_year);
  console.log(this);
}
calc_age(1996);

// this == david object
const david = {
  year: 1996,
  calc_age: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};
david.calc_age();

// O this declarado no objeto David é passado para o objeto deborah e dentro do objeto deborah ele referência o próprio objeto deborah
const deborah = {
  year: 1990,
};

deborah.calc_age = david.calc_age;
deborah.calc_age();

// O this de "f" é undefined, pois agora a função não tem parente.
const f = david.calc_age;
f();
