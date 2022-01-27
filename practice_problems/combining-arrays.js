function union (arr1, arr2) {
  let arrResult1 = arr1.map(num => num);
  let arrResult2 = arr2.filter(element => !arrResult1.includes(element));
  return arrResult1.concat(arrResult2);
}



console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]