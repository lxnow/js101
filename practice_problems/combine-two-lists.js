// function interleave(arr1, arr2) {
//   let answer = [];
//   for (let counter = 0; counter < arr1.length; counter += 1) {
//     answer.push(arr1[counter], arr2[counter]);
//   }
//   return answer;
// }

// using forEach
// function interleave (arr1, arr2) {
//   let result = [];
//   arr1.forEach((element, index) => result.push(element, arr2[index]));
//   return result;
// }

// using map
// function interleave(arr1, arr2) {
//   let result = [];
//   arr1.map((element, index) => result.push(element, arr2[index]))
//   return result;
// }

//use reduce
function interleave(arr1, arr2) {
  return arr1.reduce((acc, _, index) => {
    acc.push(arr1[index], arr2[index]);
    return acc;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*
both arguments have equal element counts / lengths
get index postiion via counter
then push to new array
return array

*/