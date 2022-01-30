function multiplyAllPairs(array1, array2) {
  let productArray = [];
  array1.forEach(element => {
    array2.forEach(subElement => {
      productArray.push(element * subElement);
    });
  });
  return productArray.sort((a, b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/*
input two arrays
output: one array with products of all possible pairs
rules 
- the final answer has to be sorted in ascending order
- each element in array 1 needs to be multiplied with every element in array 2
- there will never be an empty array in this example

algorithm:
- main function takes two arrays, and returns a single array
- runs a loop on the first array
- at each iteration (element), we run a second loop through second array
- at each iteration of second loop, we multiply 2nd array element with first array element
- the product of this operation is pushed into a new resulting array
- when second loop finishes, the first loop moves on to the next element in the first array, multiplying again
- sort the array and return
*/