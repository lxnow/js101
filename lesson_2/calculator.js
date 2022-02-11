const MESSAGE = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(MSG) {
  console.log(`=> ${MSG}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(`Choose language: (1) English, default, (2) Filipino:`);
let lang = '';
let chooseLang = readline.question();
switch (chooseLang) {
  case '1':
    lang = 'en';
    break;
  case '2':
    lang = 'ph';
    break;
  default:
    lang = 'en';
}

const MESSAGEX = MESSAGE[lang];

prompt(MESSAGEX.welcome);
let tryAgain = 'y';

while (tryAgain[0].toLowerCase() === 'y') {
  prompt(MESSAGEX["first number"]);
  let number1 = readline.question();
  prompt(number1);

  while (invalidNumber(number1)) {
    prompt(MESSAGEX["not a number"]);
    number1 = readline.question();
  }

  prompt(MESSAGEX["second number"]);
  let number2 = readline.question();
  prompt(number2);

  while (invalidNumber(number2)) {
    prompt(MESSAGEX["not a number"]);
    number2 = readline.question();
  }

  prompt(MESSAGEX.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGEX["must choose"]);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(MESSAGEX.result + output + '.');

  prompt(MESSAGEX["try again"]);
  tryAgain = readline.question();
  console.log(tryAgain);

  if (tryAgain === "" || tryAgain[0].toLowerCase() !== 'y') {
    console.log(MESSAGEX.exiting);
    break;
  }
}
