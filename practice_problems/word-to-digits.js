function wordToDigit(string) {
  const NUM_REFERENCE = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
    seven: 7, eight: 8, nine: 9, zero: 0,};
  let stringArr = string.split(' ');
  return stringArr.map(element => {
    if (element.indexOf('.') > 0) {
      let subKey = (element.slice(0,element.indexOf('.')));
      if (subKey in NUM_REFERENCE) return NUM_REFERENCE[subKey] + '.';
      else return element;
    } 

    if (Object.keys(NUM_REFERENCE).includes(element)) {
      return NUM_REFERENCE[element];
    } else return element;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/*
input: a string
output: a string with the word representation of numbers converted to digits
rules:
- numbers are single digit numbers from 0 to 9
- the number-word is in the string and must be converted to an actual typeof Number
- the returned digit should be joined together sto have the same format as the original string
- we _can_ use an Object to lookup the digit values using key-value references
- we can treat the string as an array in order to manipulate, switch and join again in the end

algorithm:
Object = {one: 1, two: 2, and so on}
array = string.split('');
answerArr - array.map(element => {
  if Object.key array.includes element then {
    Return Object.value() when element = Object.key (Object[element])  
  } else return the element again
})
join the answerArr and return this

*/