function negative (integer) {
  return integer >= 0 ? -integer : +integer
}
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0