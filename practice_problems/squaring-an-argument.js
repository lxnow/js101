function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function square(number) {
  return multiply(number, number);
}

console.log(multiply(5, 3) === 15); // logs true
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

/**
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
**/