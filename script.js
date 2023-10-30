const clickRock = document.querySelector("#btn-rock");
const clickPaper = document.querySelector("#btn-paper");
const clickScissors = document.querySelector("#btn-scissors");
const roundNumber = document.querySelector("#round-number");
const roundInfo = document.querySelector("#round-info");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const gameScore = document.querySelector("#game-score");
const tiesScore = document.querySelector("#ties-score");
const newGame = document.querySelector("#new-game");
const yesNewGame = document.querySelector("#yes-new-game");
const noNewGame = document.querySelector("#no-new-game");
const allElements = [
  roundNumber,
  roundInfo,
  playerScore,
  computerScore,
  tiesScore,
  gameScore,
  newGame,
  yesNewGame,
  noNewGame
];

const MAX_ROUNDS = 5;
let round = 0;
let playerResult = 0;
let computerResult = 0;
let tiesResult = 0;

clickRock.addEventListener("click", () => playRound("rock"));
clickPaper.addEventListener("click", () => playRound("paper"));
clickScissors.addEventListener("click", () => playRound("scissors"))

function endGame() {
  if (round === MAX_ROUNDS) {
    if (playerResult === computerResult) {
      gameScore.textContent = "Nobody won the game!";
    } else if (playerResult > computerResult) {
      gameScore.textContent = "You won the game!";
    } else {
      gameScore.textContent = "You lost the game...";
    }
    for (let element of [clickRock, clickPaper, clickScissors]) {
      element.remove()
    }

    newGame.textContent = "Do you want to play again?";
    roundInfo.textContent = "";
    noNewGame.textContent = "❌";
    yesNewGame.textContent = "✅";
    yesNewGame.addEventListener("click", startGame);
    noNewGame.addEventListener("click", sayGoodbye);
  }
}

function startGame() {
  round = 0;
  playerResult = 0;
  computerResult = 0;
  tiesResult = 0;

  for (let node of allElements) {
    node.textContent = "";
  }
  for (let element of [clickRock, clickPaper, clickScissors]) {
    document.body.insertBefore(element, roundNumber);
  }
}

function sayGoodbye() {
  for (let node of allElements) {
    node.textContent = "";
  }
  noNewGame.textContent = "Thank you for playing!"
}

function playRound(playerSelection) {
  let capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  let roundResult;
  let computerSelection = capitalize(getComputerChoice());
  playerSelection = capitalize(playerSelection);

  if (playerSelection === computerSelection) {
    roundResult = "nobody";
    roundInfo.textContent = "Nobody wins that round!"
  } else {
    if (playerSelection === "Rock" && computerSelection === "Scissors"
      || playerSelection === "Paper" && computerSelection === "Rock"
      || playerSelection === "Scissors" && computerSelection === "Paper") {
      roundInfo.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      roundResult = "player";
    } else {
      roundResult = "computer";
      roundInfo.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  if (roundResult === "player") {
    playerResult += 1;
  } else if (roundResult === "computer") {
    computerResult += 1;
  } else {
    tiesResult += 1;
  }

  round += 1;
  roundNumber.textContent = `Round n°${round}:`;
  playerScore.textContent = `- Player's score: ${playerResult}`
  computerScore.textContent = `- Computer's score: ${computerResult}`
  tiesScore.textContent = `- Ties: ${tiesResult}`
  endGame();
}


function getComputerChoice() {
  let computerChoice = "";
  let number = Math.ceil((Math.random() * 3));
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