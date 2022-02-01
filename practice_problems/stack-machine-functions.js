const push = function(register, stack) {
    stack.push(register);
}

const add = function(register, stack) {
    register += stack.pop();
}

const sub = function(register, stack) {
    register -= stack.pop();
}

const mult = function(register, stack) {
    register *= stack.pop(); 
}

const div = function(register, stack) {
    register = Math.floor(register / stack.pop());
}

const remainder = function(register, stack) {
    register = register % stack.pop();
}

const pop = function(register, stack) {
    register = stack.pop();
}

const print = function(register, stack) {
    console.log(register);
}

module.exports = {
    //  name_exported : internal_name
    PUSH : push,
    ADD : add,
    SUB : sub,
    MULT : mult,
    DIV : div,
    REMAINDER : remainder,
    POP : pop,
    PRINT : print,
}