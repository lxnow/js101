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
    holdingArray = arrayCopy.filter(subElement => subElement !== element);
    arrayCopy.shift();
    if (arrayCopy.length > 0) return leadingSubstrings(holdingArray);
    else return '';
  }))
  arrayFinal = arrayFinal.flat();
  arrayFinal.pop();
  return arrayFinal;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

