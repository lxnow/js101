let readline = require("readline-sync");
let name = readline.question("What is your name? ");

name[name.length -1] === '!' ? 
  console.log(`HELLO ${name.slice(0,name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`) : 
  console.log(`Hello ${name}.`);

/*
Write a program that will ask for user's name. 
The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.
*/