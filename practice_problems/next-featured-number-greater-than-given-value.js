function featured(number) {
  const MAX_FEATURED = 9876543201;
  let iteratedNum = Math.floor(+number / 7) * 7;
  let iteratedArr = [];
  let filteredArr = [];

  if (iteratedNum >= MAX_FEATURED) return 'There is no possible number that fulfills those requirements.';

  while (iteratedNum < MAX_FEATURED) {
    iteratedNum += 7;
    iteratedArr = iteratedNum.toString().split('');
    if (iteratedNum % 2 !== 0) {
      filteredArr = iteratedArr.filter((element, currentIndex) => {
        return iteratedArr.indexOf(element) === currentIndex;
      });
    }
    if (filteredArr.length === iteratedArr.length) break;
    filteredArr = [];
  }

  return iteratedNum;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*
input: a number that may or may not be a featured number
output: the next featured number
rules:
featured number is
  multiple of 7
  all digits are unique
  odd
largest possible number is 9876543201
multiple of 7... start with 7
odd is %2 !== 0
uniqueness test => convert to array, traverse array and check count

examples (see above)

algorithm
let iteratedNumber = Math.floor(arg / 7) // start at the lowest multiple
if (iteratedNumber >= 9876543201) return 'There is no possible...'
while (iteratedNumber < arg) {
  iteratedNumber + 7;
  if iteratedNumber % 2 !== 0 then continue
  let iteratedArr = iteratedNumber.split();
  let newArr = iteratedArr.filter((element, index) => {
    itereatedarr.indexOf(element) !== index
  })
  if newArr.length === 0, then break
}
return itereatedNumber;
*/