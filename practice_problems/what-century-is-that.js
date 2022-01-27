function century(year) {
  let shortCentury = Math.ceil(year / 100);

  if (shortCentury % 100 === 11) return String(shortCentury) + 'th'
  if (shortCentury % 100 === 12) return String(shortCentury) + 'th'
  if (shortCentury % 100 === 13) return String(shortCentury) + 'th'
  if (shortCentury % 10 === 1) return String(shortCentury) + 'st';
  if (shortCentury % 10 === 2) return String(shortCentury) + 'nd';
  if (shortCentury % 10 === 3) return String(shortCentury) + 'rd';
  else return String(shortCentury) + 'th';
}

console.log(century(2100));         // '21st'
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(11200));
console.log(century(11009));
/*

determine the two letters to append at the end fo the century, there is a pattern
1st
2nd
3rd
4th
5th
6th
7th
8th
9th
10th 
....11th, 12th, 13th, 14th, 15th, 16th, 17th, 18th, 19th 20th then it repeats

establish the ranging.
1 to 100 -> 1st
101 to 200 -> 2nd
... 
901 to 1000 -> 10th


ranging is the first 1000 numbers
1001 to 2000 will give us the special "th" range
else just take the last three digits, apply the suffix 2 letters, and add back the first _n_ digits

*/