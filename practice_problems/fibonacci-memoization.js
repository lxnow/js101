const FIBO_RESULTS = {
  0: 1,
  1: 1,
  2: 1, 
};

function fibonacci(nth) {
  if (FIBO_RESULTS[nth]) return FIBO_RESULTS[nth];
  FIBO_RESULTS[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return FIBO_RESULTS[nth];
}

console.log(fibonacci(0));
// console.log(fibonacci('test'));
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(100));

/*
3
2 + 1
ret1 + ret1
==> 2


*/