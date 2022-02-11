/* 
a function that returns the sum of two numbers

START

  SET number1 variable
  SET number2 variable
  SET sum variable

  GET number1 input from user
  GET number2 input from user

  sum = number1 + number2

  PRINT sum

END

*/

const readline = require('readline-sync');

let number1;
let number2;
let sum;

number1 = readline.question('What is the first number? ');
number2 = readline.question('What is the second number? ');

sum = Number(number1) + Number(number2);

console.log(sum);