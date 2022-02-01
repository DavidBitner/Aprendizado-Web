const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// \r\n jumps to the next line in nodejs
readline.question("Who are you?\r\n", (name) => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
