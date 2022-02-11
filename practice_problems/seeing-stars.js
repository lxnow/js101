function star(number) {
  let midpoint = Math.ceil(number / 2);
  for (let counter = 1; counter <= number; counter += 1) {
    let rowArr = Array(number).fill(' ');
    rowArr[rowArr.length - counter] = '*';
    rowArr[midpoint - 1] = '*';
    rowArr[counter - 1] = '*';
    if (counter === midpoint) {
      rowArr.fill('*');
    }
    console.log(rowArr.join(''));
  }
}


star(23);

star(7);
/* logs
*  *  * 1
 * * *  2
  ***   3
******* 4
  ***   5
 * * *  6
*  *  * 7
*/

star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/

/*
problem: display an eight pointed star in an NxN grid
input: integer N; N is odd and at least 7.
output: a displayed string of * and blank spaces representing a star
examples: see above
rules: 
- n is an odd integer
- because N is odd, there is always a whole number middle row (math.ceil(N / 2) )
- there is likewise a midpoint column (since this is an NxN grid)
- midrow will always have a full set of * (no blanks)
- at midrow +/- 1 row (above and below), there will be three *s at midpoint and +/- 1 column
- at +-/2 row from midpoint row, there is one space in between the stars
- at +-/x row from midpoint row, there are (x-1) space in between the stars
- there will always just be three *s
- columns rule: at row x, just calculate the position of the other two xs and keep the middle one constant
- the positin of the other two x's are (x-1) from midpoint column
data structure: we represent each row as a string
alogirthm
let midpoint = Math.ceil(number / 2);
for (let counter = 1; counter <= rowArr.length; counter++) {
  let rowArr = Array(number).fill(' ');
  if (counter < midpoint)
    rowARr(counter - 1) = '*';
    rowArr(midpoint - 1) = '*';
    rowArr(rowArr.length - counter)
    console.log(rowArr.join(''));
  if (counter === midpoint)
    console.log(rowArr.fill('*')).join('')
  else
    rowArr(rowArr.length - counter)
    rowArr(midpoint - 1) = '*';
    rowArr(counter);
    console.log(rowArr.join(''))
} 
*/
