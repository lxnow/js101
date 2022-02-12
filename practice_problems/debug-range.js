function range(start, end) {
  if (arguments.length = 1) {
    start = 0;
    end = end;
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));