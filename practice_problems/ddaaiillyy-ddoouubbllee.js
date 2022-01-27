const crunch = function collapseRepeatingCharacters (string) {
  let arrString = [];
  for (let counter = 0; counter < string.length; counter += 1) {
    if (string[counter] !== string[counter - 1]) arrString.push(string[counter]);
  }
  return arrString.join('');
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

/*

rule: 
- get the character
- if the next character is the same, then check the next
- if not the same, then push this character into array
- join array again in the end

*/