let readline = require('readline-sync');
let arr = [];
let lastNumber;

while (true) {
  if (arr.length === 5) {
    lastNumber = readline.question(`Enter the last number: `);
    break;
  } else arr.push(readline.question(`Enter a number (entry #${arr.length + 1}): `));
}

if (arr.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${arr}.`);
} else console.log(`The number ${lastNumber} does not appear in ${arr}.`);

