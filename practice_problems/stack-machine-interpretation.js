const stack = [];
let register = 0;


function minilang(commandsStr) {
  commandsArr = commandsStr.split(' ');
  for (let counter = 0; counter < commandsArr.length; counter += 1) {
    switch (commandsArr[counter]) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop(); 
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = register % stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default :
        register = (Number(commandsArr[counter]));
    }      
  }
}
minilang('MULT')
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.

/*
input: number and string commands, effectively one string
output: numerical values that are dependent on the commands given in the string, can be multiple print outs
rules:
- the string needs to be parsed into an array in order to understand each command
- each command should be run from left to right, i.e. index = 0 then index++
- declare and assign stackValue = []
- declare and assign registerValue = 0;
- if command = number, assign this value into register
- if command = PUSH, stackValue.push(registerValue); this will be at least a 0 value
- if command = ADD, SUB, MULT, DIV, or REMAINDER pop the topmost / rightmost valeu from stackValue and apply operation to registerValue, storing inal value to REgister
- if command = POP - pop value from stack, store in register
- if PRINT - console.log(registerValue);

algorithm:
functions for each command
main function minilang(commandsStr):
  commandsArr = commandsStr.split(' ');
  for (let counter = 0; counter < commandsArr.length, commands ++) {
    switch commandsArr[counter] {
      case command
        call function
        break;
    } 
  }

helper functions {
  execute basic idea
  return value
}

*/