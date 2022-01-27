let readline = require('readline-sync');

let bill = readline.question("What is the bill? ");
let tipPercent = readline.question("What is the tip percentage? ");

let tipAbsolute = (Number(tipPercent) / 100) * Number(bill);
let total = tipAbsolute + Number(bill);
console.log(`The tip is $${tipAbsolute.toFixed(2)}.`);
console.log(`The total is $${total.toFixed(2)}.`);


/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/