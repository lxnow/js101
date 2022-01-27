function sequence(count, startingNum) {
  let result = [];
  let multiple = startingNum;
  for (let counter = 0; counter < count; counter += 1) {
    result.push(multiple);
    multiple += startingNum;
  }
  return result;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []