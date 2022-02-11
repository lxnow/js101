function multiplyElements(numbers, multiplier) {
  let result = [];
  for (let counter = 0; counter < numbers.length; counter += 1) {
    result.push(numbers[counter] * multiplier);
  }
  return result;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiplyElements(myNumbers, 3));