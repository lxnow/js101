// Given the following data structure, use the map method to return a new array 
// identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let answer = arr.map(obj => {
  let objArr = Object.entries(obj);
  let newObj = {}
  let newElement = objArr.map(element => [element[0], element[1] += 1]);
  newElement.map(subNewElement => newObj[subNewElement[0]] = subNewElement[1]);
  return newObj;
})


console.log(answer);
console.log(arr);

/* 
  traverse array
  encounter object
  get object keys
  increment the value += accessing using object[key]
  return the object through assignment with the new value >> push?
*/ 