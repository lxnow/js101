function stringy(number) {
  let lastTime = number % 2;
  let repeatTimes = Math.floor(number / 2);
  return '10'.repeat(repeatTimes) + '1'.repeat(lastTime);
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"