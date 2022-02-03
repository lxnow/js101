function triangle(a, b, c) {
  if (arguments.length < 3)   return "Please enter 3 numbers into the function";
  let sidesArr = [...arguments]; 
  if (sidesArr.filter(element => validArgsCheck(element)).length !== sidesArr.length) {
    return "Please enter valid numbers"
  }

  sidesArr.sort((a, b) => a -b);
  if ((sidesArr[0] + sidesArr[1]) < sidesArr[2]) return 'not a triangle';
  else if (sidesArr[0] === sidesArr[1] && sidesArr[1] === sidesArr[2]) return 'equilateral';
  else if (sidesArr[0] === sidesArr[1] || sidesArr[1] === sidesArr[2]) return 'isosceles';
  else return 'scalene' 
}

function validArgsCheck(element) {
  if (isNaN(element)) return false;
  else if (element <= 0) return false;
  else return true;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

/*
input: 3 digits representing the three sides of a  triangle
output: string describing what kind of triangle it is
rules:
- sum of two shorter sides must be greater than the third; if not then invalid
- equal sides = equilateral
- two sides same, one side different = isosceles
- all sides different = scalene
- if there are less than 3 arguments, error
- numbers only

algoirthm:
if argument isNaN return "Please enter correct numbers"
if arguments.length < 3 return "Please enter 3 numbers in the function"
create array, sort --> array.sort((a, b) => a - b) // if greater than 1, b before a
check for [0] + [1] > [2] valid
check for equivalence
check for [0] === [1] or [1] === [2]
else scalene

*/