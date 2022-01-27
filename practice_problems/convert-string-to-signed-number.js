function stringToSignedInteger(string) {
  const DIGIT_REFERENCE = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }
  let sign;
  let result = 0;
  let multiplier = 1;
  let arrayOfDigits = string.split("");

  if (arrayOfDigits[0] === '-' || arrayOfDigits[0] === '+') {
    sign = arrayOfDigits.shift()
  }
  for (let counter = arrayOfDigits.length - 1; counter >= 0; counter -= 1) {
    result = result + arrayOfDigits[counter] * multiplier;
    multiplier = multiplier * 10;
    if (counter === 0 && sign === '-') {
      result = result * -1;
    }
  }
  return result;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true