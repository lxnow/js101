function sumOfSums(array) {
  let sum = 0;
  let len = array.length;
  for (let counter = 0; counter < len; counter++) {
    sum = array.reduce((a, b) => a + b) + sum;
    array.pop();
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/*
input: array single layer
output: number value, sum of all the items recursive
rules:
- at least one element is included in the argument
- the argument/s are numbers
- add each element to the next, then hold. add then next 3 elements, then hold, then 4 elements, then hold
- finally add all the 'holds"'

algorithm - use reduce which takes (a, b), a as the accumulator
- for loop
- sum all the elements using reduce, assign to a sum variable
- pop out the last number to mutate the array using pop
- sum again until we run out of elements
- return the final value

*/