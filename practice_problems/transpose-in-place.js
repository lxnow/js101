function transposeInPlace(matrixArr) {
  let iterations = matrixArr.length;
  matrixArr.push([],[],[]);
  for (let counter = 0; counter < iterations; counter += 1) {
    for (let subCounter = 0; subCounter < matrix[counter].length; subCounter += 1) {
      matrixArr[subCounter + 3].push(matrixArr[counter][subCounter]);
    }
  }
  while (matrixArr.length > 3) { matrixArr.shift() };
  return matrixArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transposeInPlace(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

/*
input - nested array matrix 3x3
output - same matrix, but transposed. Same = mutated
rules:
- same Object needs to be used
- mutation is needed on hte matrix
- [x][y] => [y][x]
- cycle through each of the three elements
  get the first element, cycle through each
  push each subElement to the end of the array as an array
  get the second element, cycle through each
  push each SE to the 3, 4, 5 location as a push to the SE
  get the third element, cycle through each
  push each SE to the 3, 4, 5 location as a push into the SE
- shift the first three elements

algorithm
let iterations = matrix.length;
matrix.push([],[],[])
for (let counter = 0; counter < iterations; counter += 1) {
  for (let sub = 0; sub < matrix[0].length; sub += 1) {
    matrix[counter + 3].push(matrix[0][sub]);
  }
  arr.shift();
}
*/