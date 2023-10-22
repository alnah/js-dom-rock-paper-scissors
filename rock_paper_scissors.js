/**
 * Return randomly "rock", "paper" or "scissors" for the computer choice
 * @return {string} The computer's choice
 */
function getComputerChoice() {
  // Math.random returns a floating-point number between 0 and 1, so we scale it
  // to a range of 3, and then we round it up to obtain a number between 1 and 3
  const randomNumber = Math.ceil((Math.random() * 3));
  // init value for computerChoice is an empty string
  let computerChoice = "";
  // we assign "rock", "paper" or "scissors" thanks to our random number
  switch (randomNumber) {
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