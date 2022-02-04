function fridayThe13ths(year) {
  let evalDate = new Date('February 5, 2022 06:30:00');
  let count13th = 0;
  for (let month = 0; month < 12; month += 1) {
    evalDate.setFullYear(+year, month, 13);
    if (evalDate.getDay(13) === 5) count13th += 1;
  }
  return count13th;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

/*
input: an integer reepresenting a year
output: an integer representing the number of days in that year when the 13th day of the month falls on a Friday
rules:
- argument will always be > 1752
- argument will always be a four digit integer
- 
examples:
see above

algorithm:
declare counter
declare a new date `startDate` appending the year to 1/1
for (month = 1, month < 13, month ++)
  if dateObj.getDate() === 5, counter++ 
  modify dateObj to next month (setfullyear)
return counter

*/