const Fraction = require('fraction.js');

console.log(egyptian(new Fraction(5,91)))
// console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
// console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
// console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

// console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
// console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
// console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
// console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
// console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
// console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
// console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
// console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3

/*
problem 1
input: fraction using Fraction(x, y)
output: an array that contains denominators of egyptian fractions
rules:
- egyptian fractions are comprimsed of units fractions, i.e. all numerators are "1"
- we only have to store the denominator
- we can use the greedy method algorithm, which goes as follows:
>> find the biggest unit fraction and _take it_ from t/b
>> with whatever is left (difference), repeat the process
>> FIRST, divide denom by numer and round up. This is the new denom
>> subtract previous fraction result from t/b, this is the new current fraction
>> repeat FIRST on the current fraction, then subtract from remainder
(current evalFraction is t/b then remainder...)
>> if the final fraction is a UNIT fraction, i.e. the numer is a factor of denom, then we can stop

algorithm:
function egyptian (fraction)
  let answerArr = [];
  let evalFraction = Object.assign({}, fraction)
  let denom = evalFraction.d
  let numer = evalFraction.n
  
  let biggestDenom = Math.ceil(denom / numer)
  answerArr.push(biggestDenom);
  while (denom !== 1) {
    evalFraction = numer.div(denom)).sub(1.div(biggestDnom))
    denom = evalFraction.d
    numer = evalFraction.n
    biggestDenom = Math.ceil(denom / numer)
    answerArr.push(biggestDenom);
  }

*/

function egyptian(fractionObj) {
  let answerArr = [];
  let evalFraction = Object.assign({}, fractionObj);
  let denom = evalFraction.d;
  let numer = evalFraction.n;
  let biggestDenom = Math.ceil(denom / numer); // to determine next EF

  console.log(evalFraction);
  console.log(`denom is ${denom}`);
  console.log(`numer is ${numer}`);
  console.log(`biggestDenom is ${biggestDenom}`);
  console.log(`----`)

  answerArr.push(biggestDenom);
  
  while (denom % numer !== 0) {
    evalFraction = Fraction(numer).div(denom).sub(Fraction(1).div(biggestDenom));
    // evalFraction = Fraction(numer).div(denom);
    console.log(`evalFraction is ${JSON.stringify(evalFraction)}`);
    denom = evalFraction.d;
    numer = evalFraction.n;
    biggestDenom = Math.ceil(denom / numer);
    answerArr.push(biggestDenom);
    // console.log(denom);
    // console.log(numer);
    // console.log(biggestDenom);
  }

  return answerArr;

}