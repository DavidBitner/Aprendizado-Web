/**
 * Atividade 1
 * 
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
 * A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
 * 
 * Your tasks:
 * 1.Create a function 'calcAverage' to calculate the average of 3 scores
 * 2.Use the function to calculate the average for both teams
 * 3.Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins'and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
 * 4.Use the 'checkWinner'function to determine the winner for both Data1 and Data2
 * 5.Ignore draws this time
 * 
 * Test data:
 * Data1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
 * Data2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 * 
 * Hints:
 * To calculate average of 3 values, add them all together and divide by 3
 * To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores
*/

function calc_average(score1, score2, score3) {
  return (score1 + score2 + score3) / 3
}

function check_winner(avg_dolphins, avg_koalas) {
  if (avg_dolphins / 2 >= avg_koalas) {
    return `Dolphins win (${avg_dolphins} vs. ${avg_koalas})`
  } else if (avg_koalas / 2 >= avg_dolphins) {
    return `Koalas win (${avg_koalas} vs. ${avg_dolphins})`
  } else {
    return 'Nobody won'
  }
}

// Test 1
let dolphins_average = calc_average(44, 23, 71)
let koalas_average = calc_average(65, 54, 49)

console.log(check_winner(dolphins_average, koalas_average))

// Test 2
dolphins_average = calc_average(85, 54, 41)
koalas_average = calc_average(23, 34, 27)

console.log(check_winner(dolphins_average, koalas_average))

/**
 * Atividade 2
 * 
 * Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
 * 
 * Your tasks:
 * 1.Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
 * 2.And now let's use arrays! So create an array 'bills' containing the test data below
 * 3.Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
 * 4.Bonus: Create an array 'total' containing the total values, so the bill + tip
 * 
 * Test data: 125, 555 and 44
 * 
 * Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)
*/
function calc_tip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}
const bills = [125, 555, 44]
const tips = [calc_tip(bills[0]), calc_tip(bills[1]), calc_tip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills)
console.log(tips)
console.log(total)

/**
 * Atividade 3
 * 
 * Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter)
 * 
 * Your tasks:
 * 1.For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
 * 2.Create a 'calcBMI'method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
 * 3.Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
 * 
 * Test data:Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 */