// Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

console.log(arr);

// arr ==> [2, [5, 8]]
// arr[0] = 2 ==> 4
// arr[1][0] = 5 - 2 => 3
// arr = [4, [3, 8]]