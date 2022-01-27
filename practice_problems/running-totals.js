function runningTotal(arr) {
  let result = 0;
  return arr.map(element => result = result + element);
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

/* 

take an element
add the next element but return the new version of the element into a enw array



*/