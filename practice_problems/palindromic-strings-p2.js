function isPalindrome(string) {
  let stringArr = string.split('');
  let reverseString = stringArr.reverse().join('');
  return string === reverseString;
}

function isRealPalindrome(string) {
  let regex = /[a-z0-9]/i;
  let stringArr = string.split('');
  let cleanArr = stringArr.filter(element => regex.test(element))
                          .map(char => char.toLowerCase());
  if (isPalindrome(cleanArr.join(''))) return true;
  return false;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false