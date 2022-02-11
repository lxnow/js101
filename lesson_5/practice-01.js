//How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

let answer = arr.sort((a, b) => b - a);
console.log(answer);

let answer2 = arr.sort((a, b) => Number(b) - Number(a));
console.log(answer2);