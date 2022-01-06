const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let computerChoice;
let choice;

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
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  choice = readline.question();
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  return choice;
}

let answer = 'yes';
while (answer[0] !== 'n') {
  console.clear();
  userChoose();
  computerChoose();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  prompt(displayWinner(choice, computerChoice));

  prompt("Do you want to play again (y/n)");
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}