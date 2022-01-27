function findFibonacciIndexByLength(digitsLength) {
  let index = 0n;
  let currentNumber = 0n;
  let sequence = [];

  while(true){
    if (index < 2n) {
      currentNumber = 1n;
    } else {
      currentNumber = BigInt(sequence[index - 1n]) + BigInt(sequence[index - 2n]);
    }
    sequence.push(currentNumber);
    index += 1n;
    if (BigInt(currentNumber.toString().length) === digitsLength) break;
  }
  console.log(index);
  return index;
}

findFibonacciIndexByLength(1n) === 1n;
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

/*
declare first number = 1
declare second numer = 1
let the next number be the sum of the values of the last two index locations
count the number of digits in that curentIndex (using toString, length)
*/