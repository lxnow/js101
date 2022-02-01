function rotateRightmostDigits(digits, position) {
  let digitsArr = String(digits).split('');
  digitsArr.push(digitsArr.splice(String(digits).length - position, 1));
  return Number(digitsArr.join(''));
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
inputs: a number with multiple digits and a locatin index but counting from teh right
output: multiple digit number 
rules:
- move the digit located at the number counting from right to left, to the rightmost
- if length is 6, and 1 is right most, then location is length - 1
- if length is 6, and 2, then location is 4 or length - 2
- length - n
- get this digit, slice it out then push it to the right

algorithm:
- 

*/