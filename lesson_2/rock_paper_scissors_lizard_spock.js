const readline = require('readline-sync');
const DISPLAY_CHOICES = ['Rock', 'Paper', 'Scissors', 'Lizard', 'SpocK'];
const VALID_CHOICES = [];
let computerChoice;
let choice;
let playAgainChoice = true;
let userScore = 0;
let computerScore = 0;
let winner;
let winPoints = 3;

function gameDone() {
  if (userScore === winPoints || computerScore === winPoints) {
    return true;
  } else return false;
}

function displayFinalWinner() {
  if (userScore < winPoints && computerScore < winPoints) {
    prompt("Thanks for playing. See you again soon!");
  } else if (userScore === winPoints) {
    prompt(`Congratulations!!! You win with ${userScore} points. Thanks for playing!`);
  } else {
    prompt(`Computer wins with ${computerScore} points. Thanks for playing!`);
  }
}

function updateScore(input) {
  if (input === 'user') {
    userScore += 1;
  } else if (input === 'computer') {
    computerScore += 1;
  }
}

function chooseWinner(choice, computerChoice) {
  if (userWins(choice, computerChoice)) return 'user';
  else if (computerWins(choice, computerChoice)) return 'computer';
  else return "tie";
}

function displayWinner(winner) {
  switch (winner) {
    case 'user':
      prompt("You win this round!");
      break;
    case 'computer':
      prompt("Computer wins this round!");
      break;
    case 'tie':
      prompt("It's a tie.");
  }
  prompt(`Updating scores to [You: ${userScore}], [Computer: ${computerScore}]`);
}

function userWins(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    return true;
  } else return false;
}

function computerWins(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
      (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'lizard' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
      (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    return true;
  } else return false;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function computerChoose() {
  let randomIndex = (Math.floor(Math.random() * VALID_CHOICES.length));
  computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function userChoose() {
  do {
    prompt(`Choose one: ${DISPLAY_CHOICES.join(', ')} \n(you can also enter the capitalized letter, e.g. "k" for spocK, "l" for Lizard)`);
    choice = readline.question().toLowerCase();
    choice = expandUserChoice(choice);
    if (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice. Please try again.");
    }
  } while (!VALID_CHOICES.includes(choice));
  return choice;
}

function expandUserChoice(input) {
  switch (input) {
    case 'r':
      input = 'rock';
      break;
    case 'p':
      input = 'paper';
      break;
    case 'l':
      input = 'lizard';
      break;
    case "s":
      input = 'scissors';
      break;
    case "k":
      input = 'spock';
      break;
  }
  return input;
}

function playAgain() {
  prompt("Do you want to play again (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'y') playAgainChoice = true;
  else if (answer === 'n') playAgainChoice = false;
}

// main code starts here
// initialize valid choices to small letters
for (let counter = 0; counter < DISPLAY_CHOICES.length; counter++) {
  VALID_CHOICES.push(DISPLAY_CHOICES[counter].toLowerCase());
}

console.log(VALID_CHOICES);

while (playAgainChoice || !gameDone()) {
  console.clear();
  console.log(`Rock, Paper, Scissors, Lizard and Spock! First player to reach ${  winPoints} wins the game!`);
  console.log(`### SCOREBOARD You: ${userScore} | Computer ${computerScore} ###`);
  console.log(`---------------------------------------`);
  userChoose();
  computerChoose();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  winner = chooseWinner(choice, computerChoice);
  updateScore(winner);
  displayWinner(winner);
  if (gameDone()) {
    break;
  } else playAgain();
}

displayFinalWinner();
