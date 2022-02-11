diamond(23);
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

/*
input: a number representing the grid for the diamond
output: a console print of a diamond
rules:
number will always be an odd integer
the number represents the number of rows
the midpoint of the 0->number has the same number of rows printed on it
the first row will have 0->number midpoint as the first print out

algorithm
let rowArr = Array(number).fill('');
let midpointIndex = Math.floor(number / 2)
// rowArr[midpointIndex] = '*'; 
for the length of the Array, we iterate (counter = 0; counter <= midPointIndex; counter++)
    rowArr[midPoint + counter] = '*';
    rowArr(midPoint - counter) = '*'
    console.log(rowArr)
*/

function diamond(number) {
  let rowArr = Array(number).fill(' ');
  let midpointIndex = Math.floor(number / 2);
  for (let counter = 0; counter <= midpointIndex; counter += 1) {
    rowArr[midpointIndex + counter] = '*';
    rowArr[midpointIndex - counter] = '*';
    console.log(rowArr.join(''));
  }
  for (let counter = 0; counter < midpointIndex; counter += 1) {
    rowArr[counter] = ' ';
    rowArr[number - 1 - counter] = ' ';
    console.log(rowArr.join(''));
  }
}