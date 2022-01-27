function integerToString(number) {
  let arr = [];
  while (number > 9) {
    arr.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  arr.unshift(number);
  return arr.join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"