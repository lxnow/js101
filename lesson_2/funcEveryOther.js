/*
a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

everyOther([1,4,7,2,5]); // => [1,7,5]

START

  SET arrInt as the array of integers
  SET arrResult as the resulting variable filtered for every other

  function everyOther
  WHILE counter < arrInt.length
    IF currentIndex is odd
      push currentIndex value to arrResult
    ELSE skip
  
  PRINT arrResult

END

*/

let arrInt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrResult = [];

for (let i = 0; i < arrInt.length; i++) {
  if (i % 2 === 0) {
    arrResult.push(arrInt[i]);
  }
}

console.log(arrResult);