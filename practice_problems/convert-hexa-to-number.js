function hexadecimalToInteger(string) {
  const DIGITS = {
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
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  }

  let power = string.length - 1
  let strArray = string.split('');
  let result = 0;
  for (let counter = 0; counter < strArray.length; counter += 1) {
    result = result + DIGITS[strArray[counter]] * (16 ** power);
    power -= 1;
  }
  return result;
}



console.log(hexadecimalToInteger('4D9f') === 19871); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/*
split the string to letters
fist element index, raised to Maxpower
next element, raised to maxpower - 1
next element ... reduce this
*/