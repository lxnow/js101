function joinOr(arr, divider = ', ', lastName = 'or') {
  lastName = lastName.trim().concat(' ');
  if (arr.length === 1) return arr.toString();
  if (arr.length === 2) return arr[0].toString().concat(' ', lastName, arr[1]);
  arr[arr.length - 1] = lastName.concat(arr[arr.length - 1]);
  return arr.join(divider);

}



console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

/* 
take an array
cycle through (adding a comma per element)
if we're at the last element, prepend with "or"

*/ 