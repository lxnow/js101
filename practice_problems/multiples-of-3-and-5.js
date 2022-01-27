function multisum(number) {
  let result = number;
  for (let counter = 1; counter < number; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      result = result + counter;
    } 
  }
  return result;
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168


/*

Problem: get the sum of a range of numbers
the range of numbers are from 1 to the number provided
the range only includes numbers that are multiples of 3 or 5
input: number

logic: 
data structure: use arrays to create the range
then apply the reduce method to calculate total

Write a function that computes the sum of all numbers between 1 and some other number, 
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/
