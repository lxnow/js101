let readline = require('readline-sync');

let currentAge = readline.question(`What is your age? `);
let retirementAge = readline.question(`At what age would you like to retire? `);
let today = new Date();

console.log(`It's ${today.getFullYear()}. You will retire in ${today.getFullYear() + (retirementAge - currentAge)}.`);
console.log(`You have only ${retirementAge - currentAge} years of work to go!`);