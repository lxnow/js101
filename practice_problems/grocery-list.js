function buyFruit(groceryListArr) {
  let resultArr = [];
  groceryListArr.forEach(element => {
    for (let counter = 0; counter < element[1]; counter++) {
      resultArr.push(element[0]);
    }
  })
  return resultArr;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
input: array with sub-arrays
output: one array with string elements
rules:
- subarray contains two elements, the name of the fruit [0] and the count at index pos 1
- access each element of the array
- parse the [0] value and assign as a holding variable
- parse [1] value as the number of times we will add [0] into the resulting array
algorithm
- map -> each element should be parsed out
- map again -> each sub element will be parsed out
- for loop on the index 1 value as counter max
- array.push(element) in each for loop
*/