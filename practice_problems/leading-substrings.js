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

// function leadingSubstrings(str) {
//   let arr = str.split('');
//   let newArray = [];

//   arr.reduce((a,b) => {
//     a.push(b);
//     newArray.push(a.join(''));
//     return a;
//   }, []);

//   return newArray;
// }
  
// function leadingSubstrings(str) {
//   let result = [...Array(str.length - 1)].reduce((array, _, currentIndex) => {
//     array.push(array[currentIndex] + str[currentIndex + 1]);
//     return array;
//   }, [str[0]]);

//   return result;
// }

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*
input: a string
output: an array, each element is a string
rules - the string should start with one character, first character of argument
- each following element is one character longer, appending the previous char
- OR, one can think of it as the full string is at the end
- every character before that (un-shifted) is one character less (removing from the end)
algorithm:
  - declare array
  - take the string and unshift into the array
  - remove the last character of the string and unshift again
  - finish loop and then return
*/