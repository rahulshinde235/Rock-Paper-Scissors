let computerScore = 0;
let humanScore = 0;
const choices = ["rock", "paper", "scissors"];
const humanScoreElem = document.getElementById("humanScore");
const computerScoreElem = document.getElementById("computerScore");
const gameSummary = document.getElementById("game_summary");
console.log(humanScoreElem, computerScoreElem);

function updateScoreOnScreen(humanChoice, computerChoice) {
  humanScoreElem.innerText = humanScore;
  computerScoreElem.innerText = computerScore;
  gameSummary.innerHTML += `<li>Your choice was ${humanChoice} and computer choice was ${computerChoice}</li>`;
}

function getComputerChoice(min, max) {
  const randomNum = Math.floor(min + Math.random() * (max - min + 1));
  return choices[randomNum];
}

function getHumanChoice() {
  const userInput = prompt(
    "Please enter your choice for Rock Paper Scissors as text"
  )
    .toLowerCase()
    .trim();
  return userInput;
}
function playRound(humanChoice, computerChoice) {
  console.log({ humanChoice, computerChoice });

  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    humanScore--;
    computerScore++;
  }
  if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    computerScore--;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    humanScore--;
    computerScore++;
  }
  if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    computerScore--;
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    humanScore--;
    computerScore++;
  }
  if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    computerScore--;
  }

  //rock defeats sci
  //sci defeats paper
  //paper defeats rock
  updateScoreOnScreen(humanChoice, computerChoice);
}

function playGame(numOfRounds) {
  for (let index = 1; index <= numOfRounds; index++) {
    playRound(getHumanChoice(), getComputerChoice(0, 2));
  }
}

const userInput = parseInt(prompt("How many rounds do you want to play?"));
playGame(userInput);
