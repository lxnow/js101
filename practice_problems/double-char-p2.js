function doubleConsonants(string) {
  let stringArray = string.split('');
  const EXCLUDED_CHARS = 'AEIOUaeiou!.,-_""\'1234567890 '.split('')
  return stringArray.map(element => {
    if (EXCLUDED_CHARS.includes(element)) return element;
    else return (element.concat(element));
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""