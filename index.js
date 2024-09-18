const gameState = {
  computerScore: 0,
  humanScore: 0,
  roundCount: 0,
};
const choices = [
  { name: "rock", symbol: "✊" },
  { name: "paper", symbol: "✋" },
  { name: "scissors", symbol: "✌" },
];
const humanScoreElem = document.getElementById("humanScore");
const computerScoreElem = document.getElementById("computerScore");
const heading = document.querySelector(".heading");
const originalHeading = heading.textContent;
const computerSelection = document.querySelector("#computerSelection");
const humanSelection = document.querySelector("#humanSelection");
const playAgainBtn = document.querySelector(".playAgain");
const modal = document.querySelector(".modal");
const modalHeading = document.querySelector(".modal h2");
const overlay = document.querySelector(".overlay");
const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const startGame = document.getElementById("startGame");

function updateScoreOnScreen(humanChoice = null, computerChoice = null) {
  humanScoreElem.innerText = gameState.humanScore;
  computerScoreElem.innerText = gameState.computerScore;

  humanSelection.textContent = humanChoice?.symbol ?? "❔";
  computerSelection.textContent = computerChoice?.symbol ?? "❔";
  if (gameState.roundCount == 5) {
    const winner =
      gameState.computerScore > gameState.humanScore ? "Computer" : "You";
    heading.textContent = `${winner} won`;
    modalHeading.textContent = `${winner} won`;
    modal.classList.add("active");
    overlay.classList.add("active");
  }
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    gameState.humanScore++;
    gameState.computerScore++;
  } else if (rules[humanChoice] === computerChoice) {
    gameState.humanScore++;
  } else {
    gameState.computerScore++;
  }
}

const actions = document.querySelector(".action_section");

actions.addEventListener("click", (e) => {
  const humanChoiceName = e.target.getAttribute("data-value");
  const humanChoice = choices.find((choice) => choice.name === humanChoiceName);

  const computerChoice = getComputerChoice();
  if (gameState.roundCount < 5) {
    gameState.roundCount += 1;
    playRound(humanChoice.name, computerChoice.name);
    updateScoreOnScreen(humanChoice, computerChoice);
  }
});

playAgainBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  heading.textContent = originalHeading;
  modalHeading.textContent = "";
  Object.assign(gameState, { humanScore: 0, computerScore: 0, roundCount: 0 });
  updateScoreOnScreen();
});
