function fibonacci(position) {
  if (!Number.isInteger(Number(position))) return "Please pass an integer as argument.";
  else if (position === 0) return "Please enter an integer greater than zero.";
  else if (position === 1 || position === 2) return 1;
  else return calculateFibo(3, position);
}

function calculateFibo(counter, finalPosition, previousVal = 1, currentVal = 1) {
  let holdingVal;  
  for (counter; counter <= finalPosition; counter += 1) {
    holdingVal = previousVal + currentVal;
    previousVal = currentVal;
    currentVal = holdingVal;
  }
  return holdingVal;
}

console.log(fibonacci(0)); // error message
console.log(fibonacci('test')); // error message
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(78));
