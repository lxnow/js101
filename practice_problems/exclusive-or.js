function xor(...elements) {
  let truthyValue = elements.filter(element => Boolean(element) === true);
  if (truthyValue.length > 1) return true;
  else return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);