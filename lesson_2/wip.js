let names = ['kim', 'joe', 'sam'];
let test;
console.log(test);
console.log(test + 1);

names.forEach((_, index) => {
  console.log(index);
  console.log(_);
  console.log(`${index + 1}: got a name!`);
});

// logs
// => 1: Got a name!
// => 2: Got a name!
// => 3: Got a name!