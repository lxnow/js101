function leadingSubstrings(strArray) {
  let resultArr = [];
  resultArr.push(strArray[0]);
  strArray.reduce((a, b) => {;
    resultArr.push(a + b);
    return a + b;
  });
  return resultArr;    
}
  
function substrings(mainString) {
  let array = mainString.split('');
  let arrayCopy = [...array];
  let holdingArray = [...arrayCopy];
  let arrayFinal = [leadingSubstrings(holdingArray)];
  arrayFinal = arrayFinal.concat(array.map(element => {
    arrayCopy.shift();
    if (arrayCopy.length > 0) return leadingSubstrings(arrayCopy);
    else return '';
  }))
  arrayFinal = arrayFinal.flat();
  arrayFinal.pop();
  return arrayFinal;
}

function evenAndPalindrome(element) {
  if (element.length > 1) {
    let stringHalfLength = Math.floor(element.length / 2);
    for (let counter = 0; counter < stringHalfLength; counter += 1) {
      if (!(element[counter] === element[element.length - (1 + counter)])) {
        return false
      } 
    } return true;     
  } else return false;
}

function palindromes(string) {
  let substringArr = substrings(string);
  return substringArr.filter(evenAndPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/*
input; string
output; array with palindromes as elements
rules:
- single letters are not palindromes
- left to right
- display palindromes in that order
- include special characters, not just letters
- case matters
- if no palindromes are found, return an array with no elements

algorithm:
- use the substrings function to get the arra of strings from left to right
- filter that strings for palindromes
- rule for palindromes:
 - if the first character is equal to the last character, continue
 - if the second character is equalt to length - 1 character, contihue
 - run the logic this way until the we finish _half_ of the length of the string
 - excludde single character strings
 - palindrome string length must be > 1 but not even

length is 5
half length = length / 2 rounded down
0 - 4 ; counter  = 0 , length - 1 - counter
1 - 3 ; counter = 1, length - 1 - counter
2 - 2 : counter = 2, length(5) - 1 - 2

length is 6 (half length is 3)
0 - 5 : counter = 0 : length - 1 - 0
1 - 4 : counter = 1 ; length - 1 - 1
2 - 3 : counter = 2 : length - 1 - 2 (3)
3 - 2 ... check that they a > b; unnecesary since we won't get here, counter will only go up to 2

*/