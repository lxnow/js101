function leadingSubstrings(string) {
  let resultArr = [];
  let strArray = string.split('');
  resultArr.push(strArray[0]);
  strArray.reduce((a, b) => {;
    resultArr.push(a + b);
    return a + b;
  });
  return resultArr;    
}
  
function substrings(mainString) {
  let answerArray = [];
  for (counter = 0; counter < mainString.length; counter += 1) {
    let newString = mainString.slice(counter);
    answerArray = answerArray.concat(leadingSubstrings(newString));
  }
  return answerArray;
}


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

/*
input:  string of characters
output: an array that contains substrings
rule: the output should start with string index zero, return one character at a time
when the string is completely added to the array, then we move on to the next character
after moving to the next character, we add each character

algorightm
- create a loop that traverses the string character by character
- at each new character, run the leadingSubStrings() function 
- all values returned by this function should be added to a new array
*/
