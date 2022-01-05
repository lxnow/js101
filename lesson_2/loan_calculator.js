const rl = require('readline-sync');

let loanAmount = NaN;
let apr = NaN;
let loanDur;
let loanDurMonths;
let monthlyIntRate;
let monthlyPayment;
let computeAgain;

function print(message) {
  console.log(': ' + message);
}

function notValidNumber(input) {
  if (isNaN(Number(input)) || input === '' || Number(input) < 0) {
    print("You entered an invalid number. Try again.");
    return true;
  } else return false;
}

function notValidDuration(input) {
  if (isNaN(Number(input[0]))
    || isNaN(Number(input[1]))
    || input.length !== 2
    || input[0] < 0
    || input[1] < 0
    || (Number(input[0]) === 0 && Number(input[1]) === 0)) {
    return true;
  } else return false;
}

function getLoanAmount() {
  print("Welcome to LXman's Mortgage Calculator!");
  do {
    print("What is the loan amount?");
    loanAmount = rl.question();
  } while (notValidNumber(loanAmount));
  loanAmount = Number(loanAmount);
  print("The amount intended to loan is $" + loanAmount);
}

function getApr() {
  do {
    print("What is the Annual Percentage Rate in % terms? (Example: for 5%, enter 5)");
    apr = rl.question();
  } while (notValidNumber(apr));
  apr = Number(apr);
  monthlyIntRate = Number((apr / 12) / 100);
  print(`Your APR is ${apr}%, which is a monthly interest rate of ${(monthlyIntRate * 100).toFixed(2)}%`);
}

function getDuration() {
  do {
    print("How long is the loan duration? (separate years and months with a comma, e.g. 0, 6 for 0 years and 6 months)");
    loanDur = rl.question();
    loanDur = loanDur.split(',');
    if (notValidDuration(loanDur)) {
      print("Invalid entry. Enter in 'year, month' format, e.g. '1, 3' for 1 year and 3 months. Without quotes.");
    }
  } while (notValidDuration(loanDur));

  loanDurMonths = (Number(loanDur[0]) * 12) + Number(loanDur[1]);
  print(`The duration of this loan is ${loanDurMonths} months`);
}

function calculate() {
  switch (monthlyIntRate) {
    case 0:
      monthlyPayment = loanAmount / loanDurMonths;
      break;
    default:
      monthlyPayment = loanAmount *
        (monthlyIntRate /
        (1 - Math.pow((1 + monthlyIntRate), (-loanDurMonths))));
  }
  print("Your monthly payment is $" + monthlyPayment.toFixed(2));
}

do {
  getLoanAmount();
  getApr();
  getDuration();
  calculate();
  print("Would you like to try again? (y/n)");
  computeAgain = rl.question();
} while (computeAgain.toLowerCase() === 'y');

print("See you again soon! Exiting...");