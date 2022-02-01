function rotateRightmostDigits(digits, position) {
  let digitsArr = String(digits).split('');
  digitsArr.push(digitsArr.splice(String(digits).length - position, 1));
  return Number(digitsArr.join(''));
}

function maxRotation(digits) {
  let counter = String(digits).length;
  for (counter; counter >0; counter -= 1) {
    digits = rotateRightmostDigits(digits, counter);
  }
  return digits;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

/*
input: a number to be rotated
output: a number that is max rotated
rules:
- take the left most number, move to the rightmost
- tkae the second to the next most number, move to the rightmost; freeze 1st digit
- take the third digit, move to rightmost, freeze two diigts
- freeze 3rd, move 4th to the right
-... freeze 5th, move 6th to the right
... freeze 6th - nothing left to move
- stop when entire string has been traversed
- the abstracted rule here is: freeze n = 0 digits, move index=n to rightmost
- keep going n += 1, until n = length - 1

algorithm:
let counter = length of digits;
let digitsLength = digits.length;
let stringNum = String(digits);
let array = Strign(digits).split('')
for (counter, counter > 0 (until it hits 1, counter --) {
  rotaterightmost(digits, counter)
}

*/