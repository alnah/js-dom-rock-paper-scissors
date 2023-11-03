const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerChoiceImg = document.querySelector("#player-choice");
const computerChoiceImg = document.querySelector("#computer-choice");
const roundCounterInfo = document.querySelector("#round-counter");
const playerScoreInfo = document.querySelector("#player-score");
const computerScoreInfo = document.querySelector("#computer-score");
const roundInfo = document.querySelector("#round-info");
const overlay = document.querySelector('#overlay');
const playAgain = document.querySelector("#play-again");
const endGameInfo = document.querySelector('#end-game');

rock.addEventListener("click", () => playRound("rock", rock));
paper.addEventListener("click", () => playRound("paper", paper));
scissors.addEventListener("click", () => playRound("scissors", scissors));

let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, element) {
  let computerChoice;
  let roundResult;
  vibratePlayerImg(element);
  computerChoice = getComputerChoice();
  roundResult = getRoundResult(playerChoice, computerChoice);
  updateChoiceImg(playerChoice, computerChoice);
  updateGameInfo(playerChoice, computerChoice, roundResult);
  endGame(playerScore, computerScore);
  restartGame();
}

function vibratePlayerImg(element) {
  element.classList.add('vibration');
  element.addEventListener('animationend', function() {
    element.classList.remove('vibration');
  })
}

function updateChoiceImg(playerChoice, computerChoice) {
  playerChoiceImg.src = `./img/${playerChoice}.svg`
  computerChoiceImg.src = `./img/${computerChoice}.svg`
}

function endGame(playerScore, computerScore) {
  let playerWon = playerScore === 5;
  let computerWon = computerScore === 5;
  if (playerWon || computerWon) {
    overlay.style.display = "flex";
    if (playerWon) {
      endGameInfo.textContent = "Game over! You won the game! Play again!"
    } else {
      endGameInfo.textContent = "Game over! You lost! Try again!"
    }
  }
}

// Fonction pour fermer l'alerte personnalisée
function restartGame() {
  playAgain.textContent = "Play again";
  playAgain.addEventListener("click", () => {
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0;
    overlay.style.display = "";
    roundCounterInfo.textContent = "Start the game to check the scores!"
    playerScoreInfo.textContent = "Player score 0"
    computerScoreInfo.textContent = "Computer score 0"
    roundInfo.textContent = "Make your choice!"
    for (let element of [playerChoiceImg, computerChoiceImg]) {
      element.src = `./img/question-mark.svg`
    }
  })
}

function getRoundResult(playerChoice, computerChoice) {
  let roundResult;
  if (playerChoice === computerChoice) {
    roundResult = "tie";
  } else {
    if (playerChoice === "rock" && computerChoice === "scissors"
      || playerChoice === "paper" && computerChoice === "rock"
      || playerChoice === "scissors" && computerChoice === "paper") {
      roundResult = "win";
    } else {
      roundResult = "lose";
    }
  }
  return roundResult;
}

function updateGameInfo(playerChoice, computerChoice, roundResult) {
  let info = "";
  switch (roundResult) {
    case "win":
      vibratePlayerImg(playerChoiceImg);
      playerScore += 1;
      info = `You win! ${playerChoice} beats ${computerChoice}`;
      playerScoreInfo.textContent = `Player score ${playerScore}`;
      roundInfo.textContent = info;
      break;
    case "lose":
      vibratePlayerImg(computerChoiceImg);
      computerScore += 1
      info = `You lose! ${computerChoice} defeats ${playerChoice}`;
      computerScoreInfo.textContent = `Computer score ${computerScore}`;
      roundInfo.textContent = info;
      break;
    case "tie":
      for (let element of [playerChoiceImg, computerChoiceImg]) {
        vibratePlayerImg(element);
      }
      info = `It's a tie! ${playerChoice} on both sides`;
      roundInfo.textContent = info;
      break;
  }
  roundCounter += 1;
  roundCounterInfo.textContent = `Round ${roundCounter}`;
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

const image = document.querySelector('#github');
image.classList.add('spin');
setTimeout(() => { image.classList.remove('spin'); }, 10000); // Stop after 10 seconds