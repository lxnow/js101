const NUMBER_IN_WORDS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

function alphabeticNumberSort(arrayDigits) {
  let arrayWords = [];
  arrayWords = arrayDigits.map(element => NUMBER_IN_WORDS[element]);
  arrayWords.sort();
  return arrayWords.map(element => {
    return Object.keys(NUMBER_IN_WORDS).find(key => NUMBER_IN_WORDS[key] === element)    
  })
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


/*
input: an array of digits
output: array of numbers (still) but sorted in in word lexographical order
rule:
 - how does word sorting work in arrays? pretty sure it sorts based on first char, then second, so on...
 - convert the array to words
  - map the array, with each element matching against Object key, returning value
  - new array with words are then .sort() to get the lexographical order
  - how to return to key? using object key and find

*/