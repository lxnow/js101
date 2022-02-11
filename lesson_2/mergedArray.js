/*

a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should becoome the elements at the odd indexes. For instance:

START 

  SET array1 variable (assume equal length)
  SET array2 varaible
  SET mergedArray variable

  WHILE counter < array1.length (assume equal length of both arrays)
    mergedArray push = array1[i]
    mergedArray push = array2[i]

  PRINT mergedarray

END

*/


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray =[];

function merge(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
  console.log(newArray);
  return newArray;
}


merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
