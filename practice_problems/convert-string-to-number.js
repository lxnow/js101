function stringToInteger(string) {
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
  let arrayOfDigits = string.split("").map(element => DIGIT_REFERENCE[element]);
  let result = 0;
  let multiplier = 1;
  for (let counter = arrayOfDigits.length - 1; counter >= 0; counter -= 1) {
    result = result + arrayOfDigits[counter] * multiplier;
    multiplier = multiplier * 10;
  }
  return result;
}



console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true