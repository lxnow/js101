merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

/*
input: two arrays
output: an array that is sorted
rules:
- cannot use sort
- cannot sort the result or modify result
- do not modify / mutate arguments
- take an element from the first arg
- compare with the [0], if greater than or equals to, then move to right ; loop
- if less than, then unshift
- if nothing else to compare to, then push
- repeat on the next argument

algorithm:
let resultArr = [];
for (let counter = 0; counter < array1.length; counter++) {
  resultArr.every((element, index, resultArr) => {
    if the array1[counter] < element && array1[counter] >= resultArr[index - 1] {
      resultArry.splice(index, 0, array1[counter])
      return false;
    }    
  })
  if resultArr.length = 0, resultArr.push(array1[counter]);
  
}
*/

function merge(array1, array2) {
  let resultArr = [];
  for (let counter = 0; counter < array1.length; counter += 1) {
    if (resultArr.length === 0) {
      resultArr.push(array1[counter]);
    } else if (resultArr.length === 1) {
      if (resultArr[0] < array1[counter]) resultArr.push(array1[counter]);
      else resultArr.unshift(array1[counter]);
    } else resultArr.every((element, index) => {
      if (array1[counter] < element && array1[counter >= resultArr[index - 1]]) {
        resultArr.splice(index, 0, array1[counter]);
        return false;
      }
    })
    console.log(`element is ${array1[counter]}`)
  }
  console.log(resultArr);
}