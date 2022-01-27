// function sequence(integer) {
//   let arrayResult = [];
//   for (let counter = 1; counter <= integer; counter += 1){
//     arrayResult.push(counter);
//   }
//   return arrayResult;
// }

function sequence(integer) {
  let arrayResult = [];
  arrayResult.length = (integer - 1);
  arrayResult.fill(0);
  let counter = 1;
  arrayResult.forEach((element, index) => {
    arrayResult[index] = counter;
    counter += 1;
  })
  return arrayResult;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]