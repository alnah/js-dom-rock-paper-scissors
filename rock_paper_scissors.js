// This in an implementation to play Rock - Paper - Scissors
// So far this is a just code logic that should run with JavaScript console only


/**
 * Return a number between 1 and 3 included, using Math.random to return a
 * floating-point number between 0 and 1, then we scale it to a range of 3, and
 * then we round it up to obtain a number between 1 and 3
 * @returns {number} The random number between 1 and 3 included
 */
let getRandomNumberFrom1to3 = () => Math.ceil((Math.random() * 3));


/**
 * Return a choice for the computer thanks to a random number from 1 to 3
 * included where 1 is "rock", 2 is "paper" and 3 is "scissors
 * @param {number} number - The random number
 * @return {string} The computer's choice
 */
function getComputerChoice(number = getRandomNumberFrom1to3()) {
  let computerChoice = "";
  switch (number) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}
