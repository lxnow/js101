// Given the following data structure, return a new array with the same structure, 
// but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// console.log(arr[1].sort((a,b) => a - b))
// console.log(typeof arr[1][1]);

let newArr = arr.map(element => {
  if (element.every(subElement => typeof subElement === 'number')) {
    return element.slice().sort((a, b) => a - b);
  } else return element.slice().sort();
})

console.log(newArr);
console.log(arr);