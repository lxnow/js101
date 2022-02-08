function rotate90(bluePill) {
  let redPill = new Array;
  while (redPill.length < bluePill[0].length) { redPill.push([]) };
  for (let counter = 0; counter < redPill.length; counter += 1) {
    for (let subCounter = 0; subCounter < bluePill.length; subCounter += 1) {
      redPill[counter][subCounter] = bluePill[bluePill.length - 1 - subCounter][counter];
    }
  }
  return redPill;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

/*
input: array with arrays
output: array with ararys but rotated 90 degrees clockwise
rules:
a b c
d e f
g h i 

g d a
h e b
i f c

a b c
d e f

d a
e b
f c

a b c d
e f g h
i j k l
m n o p

m i e a
n j f b
o k g c
p l h d

row 1 => col 3
row 2 => col 2
row 3 => col 1

row 1 => col 2
row 2 => col 1

row first => col last
row [1] => col [last - 1]
row [2] => col [last - 2]
row last => col first
** generally the number of rows => number of columns and vice versa
each _new_ row contains column elements:
newRow first => oldRowLast[0], oldRow3[0], oldRow2[0]... last -> first
newRow second => oldRowLAST1[1], oldRow3[1]... last -> first
...
newRow last => oldRowLAST[last], oldRow3[last].... last -> first

newMatrix.length = matrix[0].length //number of rows is old columns
for (let counter = 0; counter < newMatrix.length; counter++ ) // number of columns based on old row count
  for (let x = 0; x < matrix.length; x++) {
    newMatrix[counter][x] = matrix[matrix.length - 1 - x][counter];    
  }

*/

