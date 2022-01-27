function halvsies(array) {
  let resultArray = [];
  let middleIndex = Math.ceil(array.length / 2);
  resultArray[0] = array.slice(0, middleIndex);
  resultArray[1] = array.slice(middleIndex);
  return resultArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


/* 

middleIndex is inclusive for the first half
divide by 2
ceiling
minus 1
4 (3) -> 2  >> 2 --> minus 1 = 1
5 (4) -> 2.5 >> 3 (ceilng) --> minus 1 = 2
11 (10) -> 5.5 >> 6 --> minus 1 = 5


*/