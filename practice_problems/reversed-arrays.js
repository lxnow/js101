function reverse(array) {
  let arrLength = array.length;
  let holdingArray = [];
  for (let counter = 0; counter < arrLength; counter += 1) {
    holdingArray.push(array.shift());
  }
  holdingArray.forEach(element => array.push(element))
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true


/*
Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().
input array
output array that is reversed _and_ same object
algo/rules
- pop-out the elements into a new array
- old array is empty
- add back the elements in the right order

*/