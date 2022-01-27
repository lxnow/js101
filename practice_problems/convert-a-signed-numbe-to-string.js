function integerToString(number) {
  let arr = [];
  while (number > 9) {
    arr.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  arr.unshift(number);
  return arr.join('');
}

function signedIntegerToString(number) {
  let sign = Math.sign(number);
  switch (sign) {
    case 1 :
      return ('+').concat(integerToString(Math.abs(number)));
    case -1 :
      return ('-').concat(integerToString(Math.abs(number)));
  }
  return "0";
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");