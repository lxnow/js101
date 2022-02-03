function fibonacci(position) {
  if (!Number.isInteger(Number(position))) return "Please pass an integer as argument.";
  else if (position === 0) return "Please enter an integer greater than zero.";
  else if (position === 1 || position === 2) return 1;
  else return calculateFibo(3, position);
}

function calculateFibo(counter, finalPosition, previousVal = 1, currentVal = 1) {
  let holdingVal = previousVal + currentVal;
  previousVal = currentVal;
  currentVal = holdingVal;
  if (counter === finalPosition) return currentVal;
  counter += 1;
  return calculateFibo(counter, finalPosition, previousVal, currentVal);
}

console.log(fibonacci(0));
console.log(fibonacci('test'));
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(100));
/*
input: a number representing the nth location on the sequence
output: a number, which is the fibo value
rule:
- argument is the last number
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
start countering up from 0 to up to n argument
if n = 0 return error
if n is not integer return error, using Number.isInteger(Number(x))

algorithm:
let prevValue = 1;
let currentValue = 1;
let counter = 3;
if number is not an integer, then return string error "sorry that is not a num"
if number is zero, then return string error "please enter int greater 0"
if number is 1, then return cv
if number is 2, return cv
else call function
  function fibo(counter, num)
    if (counter === num) return answer
    counter += 1
    let holdingVal = prevVal + currentVal;
    prevVal = currentVal
    currentVal = holdingVal 
    fibo(counter, num)
*/