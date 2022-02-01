function swapCase(string) {
  let resultString = '';
  for (let counter = 0; counter < string.length; counter++) {
    if (string[counter] === string[counter].toUpperCase()) {
      resultString = resultString + string[counter].toLowerCase();
    } else if (string[counter] === string[counter].toLowerCase()) {
      resultString = resultString + string[counter].toUpperCase();
    } else resultString = resultString + string[counter];
  }
  return resultString;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

