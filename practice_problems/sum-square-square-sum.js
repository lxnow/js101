function sumSquareDifference(num) {
  let countArr = [num];
  for (let counter = num; counter > 0; counter -= 1) {
    countArr.unshift()
  }
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

/*
input: number
output: square of sums - sum of squares
rules:
'count' is the argument
'count' is a positive number (skip 1)`
first 'count' numbers are included in both "operands"
`
algorithm:
array = for (let counter = 1, counter <= num, counter ++)
  array.push(counter)

get square of sums = squareOfSum
  array.reduce (a, b) => a + b
  return ** 2

get sum of squares = sumOfSquares
  newArry = array.map(element => element ** 2)
  newArry.reduce (a,b) => a + b

subtract the two => squareofSum - sumofSquare

*/