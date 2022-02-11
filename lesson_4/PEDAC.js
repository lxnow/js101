// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

// #input
// a string

// #output
// an array with palindromes for elements

// #rules
// if there are no palindromes, return empty string
// if input is an empty string, then return empty string
// palindromes are case sensitive

function substrings(str) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;

  while (startingIndex <= str.length - 2) {
    startingIndex += 1;
  }

  console.log(startingIndex); // => 5
}

substrings("abcdef");