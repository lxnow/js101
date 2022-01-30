function sum(digits) {
  return String(digits).split("").reduce((a, b) => +a + +b);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45