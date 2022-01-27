function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) console.log(true);
  else console.log(false);
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

/* 
input year
output true/false if meets conditions
conditions
- divisible by 4 UNLESS divisible by 100 -> condition = %4 === 0 && %100 !== 0;
- else if divisible by 4 AND divisible by 400 -> %4 === 0 && % 400 ==0;
In the modern era under the Gregorian Calendar, leap years occur in every year that 
is evenly divisible by 4, unless the year is also divisible by 100. If the year is 
evenly divisible by 100, then it is not a leap year, unless the year is also 
evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that 
takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
*/