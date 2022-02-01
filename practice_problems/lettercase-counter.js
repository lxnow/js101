function letterCaseCount(string) {
  let resultObj = {lowercase: 0, uppercase: 0, neither: 0};
  for (let counter = 0; counter < string.length; counter += 1) {
    if (string[counter].toUpperCase() === string[counter].toLowerCase()) {
      resultObj.neither += 1;
    } else if (string[counter] === string[counter].toUpperCase()) {
      resultObj.uppercase += 1;
    } else resultObj.lowercase += 1;
  }
  return resultObj;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

/* 
input: string
output: object with key = lowercase, uppercase or neither, value = count of these instances
rule: 
if char uppercase and lower case are not the same then they are letters
if char uppercase and lower case are EQUAL, then consider neither
if char = uppercase then uppercase
if char = lowercase version then lowercase

algorithm:
- for the length of the string
- if charUpperCase === charLowerCase then neither
  - object.neither += 1
- if char === charUppercase then upperCase
  - object.uppercase =+ 1
- else char is lowercase
  - object.lowercase += 1

*/