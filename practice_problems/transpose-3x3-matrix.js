const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

/*
input: nested array, 3 elements with 3 elements under each
output: nested array as well but transposed 3 x 3 matrix
rules
- row 0 (1): colunns 0, 1, 2 ==> column 0 for row 0, 1 2
- row 1 : column 0, 1, 2 => column 1 for row 0, 1 and 2
- row 2 : column 0, 1, 2 => column 2 for row 0, 1 and 2
- generally speaking --
[0][0] => [0][0]
[0][1] => [1][0]
[0][2] => [2][0]
[1][0] => [0][1]
[1][1] => [1][1]
[1][2] => [2][1]
[2][0] => [0][2]
[2][1] => [1][2]
[2][2] => [2][2]
[x][y] => [y][x]

algorithm: 
function (nestedArray)
for (let x = 0; x < nestedArra.length; x++) {
  for (let y = 0; y < nestedArray[x].length; y++){
    newArr[y][x] = nested[x][y];
  }
return newArr
}

*/

function transpose(nestedArray) {
  let newArray = [[,,,],[,,,],[,,,]];
  for (let x = 0; x < nestedArray.length; x += 1) {
    for (let y = 0; y < nestedArray[x].length; y += 1) {
      newArray[y][x] = nestedArray[x][y];
    }
  }
  return newArray;
}