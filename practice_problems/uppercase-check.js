function isUppercase(string) {
  let array = string.split('');
  if (array.map(element => {
    if (element.toUpperCase() !== element) return false;
  }).includes(false)) return false;
    else return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/*
input: string
output: boolean, true if all characters are positive
rules: 
- check for each character to see if they are equal to themsleves when uppercased
- once you encoutner a false, then return `false` immediately

algorithm
- array = string.split('')
- array.forEach( element => if (element.toUpperCase() !== element) return false)
- return true
*/