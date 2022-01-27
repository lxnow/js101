function triangle(width) {
  let triangleArr = [];
  while (triangleArr.length < width) {
    triangleArr.push(" ");
  }
  let replaceCounter = width;
  while (replaceCounter >= 0) {
    replaceCounter -= 1;
    console.log(triangleArr.join(''));
    triangleArr[replaceCounter] = '*';
  }
}

triangle(5);
triangle(9);
triangle(50);