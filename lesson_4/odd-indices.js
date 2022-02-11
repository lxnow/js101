function doubleOddIndices(numbers) {
  let result = [];
  for (let counter = 0; counter < numbers.length; counter += 1) {
    console.log(counter % 2);
    if (counter % 2 !== 0) {
      result.push(numbers[counter] * 2);
    } else result.push(numbers[counter]);
  }
  return result;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]
