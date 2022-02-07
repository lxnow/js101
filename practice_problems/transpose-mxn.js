function transpose(nestedArray) {

  // let subArray = new Array; DO NOT PUSH OBJECTS IN!
  // while (subArray.length < nestedArray.length) { subArray.push('') };
  let newArray = new Array;
  while (newArray.length < nestedArray[0].length) { newArray.push([]) };
  for (let x = 0; x < nestedArray.length; x += 1) {
    for (let y = 0; y < newArray.length; y += 1) {
      newArray[y][x] = nestedArray[x][y];
    }
  }
  return newArray;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]