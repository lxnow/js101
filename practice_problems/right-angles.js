function triangle(a, b, c) {
  anglesArr = [+a, +b, +c];
  if (anglesArr.reduce((a, b) => a + b) !== 180) return 'invalid';
  if (anglesArr.includes(0)) return 'invalid';
  if (anglesArr.includes(90)) return 'right';
  if (anglesArr.filter(element => element > 90).length > 0) return 'obtuse';
  else return 'acute';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

/*
input: three numbers, each number representing the angle of a triangle
output: a description of the triangle, as acute, right obtuse or invalid
rules:
- each argument is an integer
- each argument is entered
- the arguments are in deegrees
- total must be 180 in order for it to be a triangle
- if one angle is exactly 90, and 180 - right
- if all three angles is less than 90, and total is 180 - acute
- if one angle is greater than 90 and total is 180 - obtuse

examples:
- see above
- zero test case

algorithm (let's use arrays)
convert the three arguments into an array
check for total is 180 (reduce)
  if false, return invalid
  else continue
if any of the individual values is zero, return invalid;
check if one angle is 90 (includes) -> return right
check if one angle is >90 (includes) -> return obtuse
else return acute


*/
