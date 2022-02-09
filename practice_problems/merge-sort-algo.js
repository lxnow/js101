console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]


/* 
input: array
output: array but sorted
rules:
- recursive
- nests the array into sub arrays
- each time you break it down, it gets nested down further  
- then sorts the nested sub arrays
- the sorting happens when putting two arrays back together
- during the sorting together, we use an algo to combine them
- then merging each pair back together
- what to do if the number of elements is odd?, likely concat the last piece
[9, 5, 7, 1]
[[9, 5], [7, 1]]
[[9], [5]], [[7], [1]]

algorithm
let arrayCopy = array.slice()
let newArr = [];

break into single element subarrays
function nestArray:
let half = Math.ceiling(array.length / 2)



merge together

*/

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let arrayCopyA = array.slice(0, array.length / 2);
  let arrayCopyB = array.slice(array.length / 2);

  arrayCopyA = mergeSort(arrayCopyA);
  arrayCopyB = mergeSort(arrayCopyB);

  return merge(arrayCopyA, arrayCopyB);

}

//LS solution follows
// function merge(array1, array2) {
//   let copy1 = array1.slice();
//   let copy2 = array2.slice();
//   let result = [];

//   while (copy1.length > 0 && copy2.length > 0) {
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//   }

//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }

function merge(array1, array2) {
  let resultArr = [];

  for (let argCounter = 0; argCounter < arguments.length; argCounter += 1) {
    for (let counter = 0; counter < arguments[argCounter].length; counter += 1) {
      if (resultArr.length === 0) {
        resultArr.push(arguments[argCounter][counter]);
      } else if (resultArr.length === 1) {
        if (resultArr[0] < arguments[argCounter][counter]) {
          resultArr.push(arguments[argCounter][counter]);
        } else resultArr.unshift(arguments[argCounter][counter]);
      } else sortArr(resultArr, arguments[argCounter], counter);
    }
  }
  // console.log(resultArr);
  return resultArr;
}

function sortArr(result, inputArr, counter) {
  result.every((element, index) => {
    if (inputArr[counter] < element && index === 0) {
      result.unshift(inputArr[counter]);
      return false;
    } else if (inputArr[counter] > element && inputArr[counter] <= result[index + 1]) {
      result.splice(index + 1, 0, inputArr[counter]);
      return false;
    } else if (index + 1 === result.length){
      result.push(inputArr[counter]);
      return false;
    } else return true;
  })
}