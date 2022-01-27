function multiplyList(arr1, arr2) {
  let result = [];
  arr1.forEach((element, index) => {
    result.push(element * arr2[index]);
  })
  return result;
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]