// Perform the same transformation of sorting the subarrays we did in the previous 
// exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(element => {
  if (element.every(subElement => typeof subElement === 'number')) {
    return element.slice().sort((a, b) => b - a);
  } else return element.slice().sort((a, b) => a > b ? -1 : 1);
})

console.log(newArr);
console.log(arr);