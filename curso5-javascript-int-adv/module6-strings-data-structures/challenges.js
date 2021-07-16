"use strict";

/**
 * Atividade 1
 *
 * We're building a football betting app!
 * Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data.
 * So here are your tasks:
 * 1. Create one player array for each team (variables 'players1' and 'players2')
 * 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
 * 3. Create an array 'allPlayers' containing all players of both teams (22 players)
 * 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
 * 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
 * 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
 * 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
 *
 * TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 * GOOD LUCK 😀
 */

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log(`ATIVIDADE 1`);
// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...field_players] = players1;
console.log(gk, field_players);

// 3
const all_players = [...players1, ...players2];
console.log(all_players);

// 4
const players1_final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1_final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
function print_goals(...players) {
  console.log(`${players.length} goals were scored!`);
}
print_goals("Davies", "Muller", "Lewandowski", "Kimmich");
print_goals(...game.scored);

// 7
team1 > team2 && console.log(`Team 1 is more likely to win`);
team1 < team2 && console.log(`Team 2 is more likely to win`);

/**
 * Atividade 2
 *
 * Let's continue with our football betting app!
 *
 * 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
 * 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
 * 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
 * Odd of victory Bayern Munich: 1.33
 * Odd of draw: 3.25
 * Odd of victory Borrussia Dortmund: 6.5
 * Get the team names directly from the game object, don't hardcode them (except for "draw")
 *
 * HINT: Note how the odds and the game objects have the same property names
 *
 * BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
 * {
 *  Gnarby: 1,
 *  Hummels: 1,
 *  Lewandowski: 2
 * }
 */

console.log(`\nATIVIDADE 2`);
// 1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2
let avg = 0;
for (const iterator of Object.values(game.odds)) {
  avg += iterator;
}
avg /= Object.values(game.odds).length;
console.log(avg);

// 3
for (const [key, odd] of Object.entries(game.odds)) {
  const t = game[key];
  t && console.log(`Odd of victory ${game[key]}: ${odd}`);
  t || console.log(`Odd of draw: ${odd}`);
}

// 4
const scorers = {};
for (const player of game.scored) {
  if (!scorers[player]) {
    scorers[player] = 1;
  } else {
    scorers[player]++;
  }
}
for (const [key, value] of Object.entries(scorers)) {
  console.log(`${key}: ${value},`);
}

/**
 * Atividade 3
 * 
 * // Coding Challenge #3
 * 
 * Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
 * 
 * 1. Create an array 'events' of the different game events that happened (no duplicates)
 * 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
 * 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
 * 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
    [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const game_events = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(`\nATIVIDADE 3`);
// 1
const events = new Set([...game_events.values()]);
console.log(events);

// 2
game_events.delete(64);
console.log(game_events);

// 3
const string = `An event happened, on average, every ${
  90 / game_events.size
} minutes`;
console.log(string);

// 4
for (const [min, event] of game_events) {
  if (min <= 45) {
    console.log(`[FIRST HALF] ${min}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${min}: ${event}`);
  }
}

/**
 * Atividade 4
 *
 * Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
 *
 * THIS TEST DATA (pasted to textarea)
 * underscore_case
 * first_name
 * Some_Variable
 * calculate_AGE
 * delayed_departure
 *
 * SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
 * underscoreCase      ✅
 * firstName           ✅✅
 * someVariable        ✅✅✅
 * calculateAge        ✅✅✅✅
 * delayedDeparture    ✅✅✅✅✅
 *
 * HINT 1: Remember which character defines a new line in the textarea 😉
 * HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
 * HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
 * HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
 */

console.log(`\nAtividade 4`);

// 1
function underscore_case(entry = "", rights) {
  const [first_word, second_word] = entry.split("_");
  let str =
    first_word.toLowerCase() +
    second_word[0].toUpperCase() +
    second_word.slice(1).toLowerCase();
  str = str.padEnd(20, " ");
  for (let i = 0; i < rights; i++) {
    str += "✅";
  }
  console.log(str);
  return (rights += 1);
}
let rights = 1;
rights = underscore_case("underscore_case", rights);
rights = underscore_case("first_name", rights);
rights = underscore_case("Some_Variable", rights);
rights = underscore_case("calculate_AGE", rights);
rights = underscore_case("delayed_departure", rights);

/**
 * Atividade 5
 *
 * Deixar string legivel para o público
 *
 * Exemplo:
 * Emoji Delayed Departure from FAO to TXL (11h25)
 *                 Arrival from BRU to FAO (11h45)
 *   Emoji Delayer Arrival from HEL to FAO (12h05)
 *               Departure from FAO to LIS (12h30)
 */

console.log(`\nAtividade 5`);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 1
const flights_list = flights.split("+");
const flights_list2 = [];
for (const flight of flights_list) {
  let temp = flight.split(";");
  flights_list2.push(temp);
}

for (const info of flights_list2) {
  info[0] = info[0].replace(/_/g, " ");
  info[1] = info[1].slice(0, 3).toUpperCase();
  info[2] = info[2].slice(0, 3).toUpperCase();
  info[3] = `(${info[3].replace(":", "h")})`;
  let str = `${info[0]} from ${info[1]} to ${info[2]} ${info[3]}`;
  if (!info[0].includes("Delayed")) {
    console.log(str.padStart(50));
  } else {
    str = console.log(`Emoji ${str}`.padStart(50));
  }
}
