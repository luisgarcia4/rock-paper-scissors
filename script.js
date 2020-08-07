// Initializes Score
computerPoints = 0;
playerPoints = 0;

// Randomizes computer choice
const computerChoices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
	return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
computerSelection = computerPlay();

// Compares the player's selection to the computer's selection and delcares results
function playOneRound(playerSelection, computerSelection) {
	if (playerSelection == "rock" && computerSelection == "Paper") {
		computerPoints += 1;
		return "You lose! Paper beats Rock ";
	} else if (playerSelection == "rock" && computerSelection == "Scissors") {
		playerPoints += 1;
		return "You win! Rock beats Scissors ";
	} else if (playerSelection == "paper" && computerSelection == "Rock") {
		playerPoints += 1;
		return "You win! Paper beats Rock";
	} else if (playerSelection == "paper" && computerSelection == "Scissors") {
		computerPoints += 1;
		return "You lose! Scissors beats Paper ";
	} else if (playerSelection == "scissors" && computerSelection == "Paper") {
		playerPoints += 1;
		return "You win! Scissors beats Paper ";
	} else if (playerSelection == "scissors" && computerSelection == "Rock") {
		computerPoints += 1;
		return "You lose! Rock beats Scissors ";
	} else if (playerSelection == "rock" && computerSelection == "Rock") {
		return "Tie! You both chose Rock";
	} else if (playerSelection == "paper" && computerSelection == "Paper") {
		return "Tie! You both chose Paper";
	} else if (playerSelection == "scissors" && computerSelection == "Scissors") {
		return "Tie! You both chose Scissors";
	} else {
		return "That is not one of your choices ";
	}
}

// Keeps track of points
function score() {
	return `Human: ${playerPoints} Computer: ${computerPoints}`;
}

// Declares a winner when one competitor reaches 5 points
function winner() {
	if (playerPoints == 5) {
		playerPoints = 0;
		computerPoints = 0;
		return "You won! Let's play again!";
	} else if (computerPoints == 5) {
		computerPoints = 0;
		playerPoints = 0;
		return "Game Over! Let's play again!";
	} else {
		return "First to 5 points wins! Let's Go!";
	}
}

const messageBox = document.querySelector("#messageBox");

// On selection of icon, records player selection and runs previous functions with the player's selections and the computer's selection as variables
const rockHandIcon = document.querySelector("#rockHandIcon");
rockHandIcon.addEventListener("click", () => {
	playerSelection = "rock";
	computerSelection = computerPlay();
	const selections = document.getElementById("selections");
	selections.textContent = `${playOneRound(playerSelection, computerSelection)}`;
	messageBox.append(selections);
	const scoreTracker = document.getElementById("score");
	scoreTracker.textContent = `${score()}`;
	messageBox.append(scoreTracker);
	const winnerContainer = document.getElementById("winnerContainer");
	winnerContainer.textContent = `${winner()}`;
	messageBox.append(winnerContainer);
});

const paperHandIcon = document.querySelector("#paperHandIcon");
paperHandIcon.addEventListener("click", () => {
	playerSelection = "paper";
	computerSelection = computerPlay();
	const selections = document.getElementById("selections");
	selections.textContent = `${playOneRound(playerSelection, computerSelection)}`;
	messageBox.append(selections);
	const scoreTracker = document.getElementById("score");
	scoreTracker.textContent = `${score()}`;
	messageBox.append(scoreTracker);
	const winnerContainer = document.getElementById("winnerContainer");
	winnerContainer.textContent = `${winner()}`;
	messageBox.append(winnerContainer);
});

const scissorsHand = document.querySelector("#scissorsHandIcon");
scissorsHand.addEventListener("click", () => {
	playerSelection = "scissors";
	computerSelection = computerPlay();
	const selections = document.getElementById("selections");
	selections.textContent = `${playOneRound(playerSelection, computerSelection)}`;
	messageBox.append(selections);
	const scoreTracker = document.getElementById("score");
	scoreTracker.textContent = `${score()}`;
	messageBox.append(scoreTracker);
	const winnerContainer = document.getElementById("winnerContainer");
	winnerContainer.textContent = `${winner()}`;
	messageBox.append(winnerContainer);
});
