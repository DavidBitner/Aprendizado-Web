let repetitions = 1;
while (repetitions <= 10) {
  console.log(`Repetition ${repetitions}`);
  repetitions++;
}

let dice = 0;
while (dice != 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a ${dice}`);
}
console.log("Dice landed on 6");
