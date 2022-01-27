let readline = require('readline-sync');

let num1 = readline.question('Enter the first number: ');
let num2 = readline.question('Enter the second number: ');

let operator = ['+', '-', '*', '/', '%', '**'];

console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
console.log(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`);
console.log(`${num1} ** ${num2} = ${Number(num1) ** Number(num2)}`);


/*
Write a program that prompts the user for two positive integers, and then prints 
the results of the following operations on those two numbers: addition, 
subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/