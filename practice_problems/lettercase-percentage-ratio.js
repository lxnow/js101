function letterPercentages(string) {
  const RATIOS = {lowercase: 0, uppercase: 0, neither: 0};
  let regexLower = /[a-z]/g;
  let regexUpper = /[A-Z]/g;
  let lowerCount = string.match(regexLower) === null ? 0 : string.match(regexLower).length
  let upperCount = string.match(regexUpper) === null ? 0 : string.match(regexUpper).length
  RATIOS['lowercase'] = (lowerCount / string.length * 100).toFixed(2);
  RATIOS['uppercase'] = (upperCount / string.length * 100).toFixed(2);
  RATIOS['neither'] = (100 - Number(RATIOS['lowercase']) - Number(RATIOS['uppercase'])).toFixed(2);
  return RATIOS;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/*
input: string of characters including spaces
output: an Object containing keys of lower, upper and neither. Each key has a value representing its instance count ratio against total length
rules:
- string will never be empty
- spaces, digits, non-letters are counted

algorithm:
Declare Object = {lowercase: 0, uppercase: 0, neither = 0}
RegexUpper = uppercasepattern /[A-Z]/g
RegexLower = lowercasepattern /[a-z]/g
obj.uppercase = string.match(regexUpper).length / string.length
obj.lowercase = string.match(regexLower).length / string.length
obj.neither = 100 - Obj.uppercase + Obj.lowercase
return Obj
*/