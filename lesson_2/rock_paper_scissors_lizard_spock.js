const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let computerChoice;
let choice;
let playAgainChoice = true;


function displayWinner(choice, computerChoice) {
  if (userWins(choice, computerChoice)) return 'You win!';
  else if (computerWins(choice, computerChoice)) return 'Computer wins!';
  else return "It's a tie";
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
    prompt(`Choose one: ${VALID_CHOICES.join(', ')} (you can also enter the first letter)`);
    choice = readline.question().toLowerCase();
    choice = expandUserChoice(choice);
    if (!VALID_CHOICES.includes(choice)) prompt("That's not a valid choice. Please try again.");
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
    case 's':
      prompt("Did you mean SCissors (sc) or SPock (sp)?");
      break;
    case "sc":
      input = 'scissors';
      break;
    case "sp":
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

while (playAgainChoice) {
  console.clear();
  userChoose();
  computerChoose();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  prompt(displayWinner(choice, computerChoice));
  playAgain();
}