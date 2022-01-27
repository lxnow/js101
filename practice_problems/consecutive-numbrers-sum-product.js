let readline = require('readline-sync');
let rangeArr = [];
let answer;
let number;
let sumOrProduct;

function validAnswer(input, validOptionsArr) {
  if (validOptionsArr.includes(input.toLowerCase())) return true;
  else {
    console.log("Not a valid response. Please try again.");
    return false;
  }
}

function validPositiveNumber(input) {
  if (typeof Number(input) === 'number' && input > 0) return true;
  else {
    console.log('Not a valid number or integer. Please try again.');
    return false;
  }
}

function getInteger() {
  while (true) {
    number = readline.question("Please enter an integer greater than zero: ");
    if (validPositiveNumber(number)) {
      number = parseInt(number);
      break;
    }
  }
}

function getOperation() {
  while (true) {
    sumOrProduct = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
    if (validAnswer(sumOrProduct, ['s', 'p'])) break;
  }  
}

function transformToRange(input) {
  for (let counter = 1; counter <= input; counter += 1) {
    rangeArr.push(counter);
  }  
}

function calculateAnswer(option) {
  switch (option) {
    case 's' :
      answer = rangeArr.reduce((a, b) => a + b);
      break;
    case 'p' :
      answer = rangeArr.reduce((a, b) => a * b);
  }  
}

getInteger();
getOperation();
transformToRange(number);
calculateAnswer(sumOrProduct);
console.log(`The ${sumOrProduct === 's' ? "sum" : "product" } of the range is ${answer}`);

/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
*/