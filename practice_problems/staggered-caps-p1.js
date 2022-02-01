function staggeredCase(string) {
  let array = string.split('');
  return array.map((element, index) => {
    if (index % 2 === 0) return element.toUpperCase();
    else return element.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/*
input: string
output: string
rules:
upppercase on first char
lowercase on second
alternate going forward
apply to all even if not an alphabet

algorithm
array = string.split('')
array.map((element, index) => 
if index is even, then element.touppercase
if index is odd, then element tolowercase
join the array with ''
retun the joined array 
*/