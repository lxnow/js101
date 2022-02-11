// Given the following data structure, use a combination of methods, including 
// filter, to return a new array identical in structure to the original, but 
// containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let answer = arr.map(subArr => subArr.filter(element => element % 3 === 0));

console.log(answer);
/* 
  new array
  same structure -- array in arrays
  filter out those that are NOT multiples of 3 -> num % 3 === 0

  traverse layer 1 array
  for each element, traverse again - layer 2 array
  if element passes filter % 3 == 0 then return, else drop .filter()
  push the layer2element back 
*/ 