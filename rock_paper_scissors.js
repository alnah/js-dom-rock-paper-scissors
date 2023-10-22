/*
This script allows a user to play the classic game of Rock, Paper, Scissors
against the computer: the game is played in rounds, and the player provides
their choice through a prompt
 */


/**
 * Generates a random number between 1 and a given maximum
 *
 * @param {number} number - The upper limit of the random number
 * @returns {number} A random number between 1 and `n` inclusive
 */
let getPositiveRandomNumberUpTo = (number) => Math.ceil((Math.random() * number));


/**
 * Converts a number representation into one of the game choices: "rock",
 * "paper", or "scissors"
 *
 * @param {number} number - A random number between 1 and 3
 * @returns {string} The computer's choice corresponding to the input number
 */
function getComputerChoice(number) {

  let computerChoice;

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


/**
 * Capitalizes the first letter of the given string and makes the rest lowercase
 *
 * @param {string} selection - A game choice string ("rock", "paper", or
 * "scissors")
 * @returns {string} The capitalized version of the input string
 */
let capitalizeSelection = (selection) => {
  return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
};


/**
 * Compares the player's choice and the computer's choice to determine the
 * winner of a round
 *
 * @param {string} playerSelection - The player's choice for the round
 * @param {string} computerSelection - The computer's choice for the round
 * @returns {number}
 * - 1 if the player wins
 * - -1 if the computer wins
 * - 0 for a tie
 */
function playRound(playerSelection, computerSelection) {

  let roundResult;
  playerSelection = capitalizeSelection(playerSelection);
  computerSelection = capitalizeSelection(computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Nobody wins that round!");
    roundResult = 0;

  } else {

    if (playerSelection === "Rock" && computerSelection === "Scissors"
      || playerSelection === "Paper" && computerSelection === "Rock"
      || playerSelection === "Scissors" && computerSelection === "Paper") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      roundResult = 1

    } else {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      roundResult = -1
    }

  }

  return roundResult;
}


/**
 * Orchestrates multiple rounds of the game and determines the overall winner
 *
 * @param {number} maxRounds - The total number of rounds to be played
 * @returns {number}
 * - 1 if the player wins the game
 * - 0 otherwise
 */
function playGame(maxRounds) {

  let round = 0;
  let randomNumber = 0;
  let playerSelection = "";
  let computerSelection = "";
  let roundResult = 0;
  let playerResult = 0;
  let computerResult = 0;

  for (round; round <= maxRounds; round++) {

    randomNumber = getPositiveRandomNumberUpTo(3);
    playerSelection = prompt("Rock, Paper or Scissors?!", "");
    computerSelection = getComputerChoice(randomNumber);
    roundResult += playRound(playerSelection, computerSelection);

    if (roundResult === 1) {
      playerResult += 1;
    } else {
      computerResult += 1;
    }

  }

  if (playerResult === computerResult) {
    console.log("Nobody won the game! Play an extra round...")
    playGame(1);
  } else {
    return (playerResult > computerResult) ? 1 : 0;
  }

}


playGame(5) ? console.log("You won") : console.log("You lost");