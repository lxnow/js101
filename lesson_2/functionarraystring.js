/*

a function that takes an array of strings, and returns a string that is all those strings concatenated together

START

  SET arrayStr as the array fo strings
  SET concatStr as the array elements concatenated

  concatStr = Loop through the array and add them together using '+' at each step

  PRINT concatStr

END

*/

let arrStr = ['abc', 'def', 'ghi'];
let concatStr = "";

arrStr.forEach(element => concatStr = concatStr + element);

console.log(concatStr);