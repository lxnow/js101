const regex = /[aeiou]*/ig

function removeVowels(array) {
  return array.map(element => element.replace(regex, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/*
input: array with strings as elements
output: array also with strings as elements, but without the vowels
rules: remove vowels, upper or lowercase
return the same array length just modifying the elements
traverse the arara
at each element, replace vowels with space
return the string without vowels and push into resulting array
return array

## algorithm
- declare const regex = /aeiou/ig
- array.map(element => element.replace(regex, '')) 
- return resulting array;
*/
