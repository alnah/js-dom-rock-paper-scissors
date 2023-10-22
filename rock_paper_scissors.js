// This in an implementation to play Rock - Paper - Scissors game
// So far this is a just code logic that should run with JavaScript console only


/**
 * Return a number between 1 and 3 included, using Math.random() to return a
 * floating-point number between 0 and 1, then scale it to a range of 3, and
 * finally round it up with Math.ceil() to obtain a number between 1 and 3
 * @returns {number} The random number between 1 and 3 included
 */
let getRandomNumberUpTo = (n) => Math.ceil((Math.random() * n));


/**
 * Return a choice for the computer thanks to a random number from 1 to 3
 * included where 1 is "rock", 2 is "paper" and 3 is "scissors
 * @param {number} number - The random number
 * @return {string} The computer's choice
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
 * Capitalize a selection thanks to a string concatenation putting together
 * its first character into upper case and the remaining part into lower case
 * @param {string} selection - The selection to capitalize
 * @return {string} The word capitalized
 */
let capitalizeSelection = (selection) => {
  return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
};


/**
 * Return 1 when player wins, -1 when computer loses, 0 when nobody wins
 * @param {string} playerSelection The player's selection
 * @param {string} computerSelection The computer's selection
 */
function playRound(playerSelection, computerSelection) {

  let roundResult;
  playerSelection = capitalizeSelection(playerSelection);
  computerSelection = capitalizeSelection(computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Nobody wins! Play again...");
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
 * Doc
 * @param maxRounds
 * @returns {number}
 */
function playGame(maxRounds) {
  const NUMBER_OF_PLAYERS = 2;
  const winningEdge = maxRounds / NUMBER_OF_PLAYERS;

  let round = 0;
  let randomNumber = 0;
  let playerSelection = "";
  let computerSelection = "";
  let playerResult = 0;

  for (round; round <= maxRounds; round++) {
    randomNumber = getRandomNumberUpTo(3);
    playerSelection = prompt("Rock, Paper or Scissors?!", "");
    computerSelection = getComputerChoice(randomNumber);
    playerResult += playRound(playerSelection, computerSelection);
  }

  if (playerResult) {
    return (playerResult > winningEdge) ? 1 : 0;
  } else {
    playGame(1);
  }
}


playGame(5) ? console.log("You won") : console.log("You lost");