const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan week");
    break;
  case "tuesday":
    console.log("Work on tables");
    break;
  case "wednesday": // Quando dois cases são colocados em seguida, ambos são executados
  case "thursday":
    console.log("Read books");
    break;
  case "friday":
    console.log("Play piano");
    break;
  case "saturday":
    console.log("Go out");
    break;
  case "sunday":
    console.log("Review week");
    break;
  default:
    console.log("Not a valid day");
}

/**
 * Atividade
 * 1.Use a switch statement to log the following string for the given 'language':
 * chinese or mandarin: 'MOST number of native speakers!'
 * spanish: '2nd place in number of native speakers'
 * english: '3rd place'
 * hindi: 'Number 4'
 * arabic: '5th most spoken language'
 * for all other simply log 'Great language too :D'
 */

console.log("Atividade");

const language = "chinese";

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
  default:
    console.log("Great language too :D");
    break;
}
