// Given the following data structure, sort the array so that the sub-arrays are 
// ordered based on the sum of the odd numbers that they contain.
// answer : [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let answer = arr.sort((a, b) => {
  const reducer = (preVal, curVal) => preVal + curVal;
  const filterOddNum = (element) => element %2 !== 0; 
  return a.filter(filterOddNum).reduce(reducer) - b.filter(filterOddNum).reduce(reducer);
})

console.log(answer);

/*

  b before a if > 0
  add only odd numbers then set that to the value of sort 'a' or 'b' variable
  
  traverse the array
  get the subArray element
  filter out or identify the odd numbers only using % 2 !== 0
  sum the odd numbers (using reduce? or for loop)
  return the sum -- and assign this to a or b... this needs to be within a sort method
*/ 