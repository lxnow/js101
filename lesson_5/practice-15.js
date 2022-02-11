//Given the following data structure, write some code to return an array which 
//contains only the objects where all the numbers are even.
//{ e: [8], f: [6, 10] } 

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


let result = arr.filter(obj => {
  let x = Object.values(obj);
  let y = x[0];
  for (let i = 1; i < x.length; i++) {
    y = y.concat(x[i]);
  }
  return y.every(element => element % 2 === 0);
})

console.log(result);

// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i])
//   let keys = Object.keys(arr[i]);
//   // console.log(keys);
//   for (let j = 0; j < keys.length; j++) {
//     console.log(arr[i][keys[j]])
//   }
// }


  // .every(element => element % 2 === 0));
// console.log(result);

/*
  given an array
  contains objects
  object contains arrays for values
  need to access those values and determine which ones are even
  output: array with 0 to 3 objects depending if all are event (Every)

  layer 0 = array
  layer 1 = objects
  layer 2 = array

  loop 0 array -> get element adn return; use map
  get object values of each element -- the values are arrays
  check the array if all are even
    if true, then return the element
    else discard
  return the array

*/