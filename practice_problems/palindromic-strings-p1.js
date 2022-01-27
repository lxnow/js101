function isPalindrome(string) {
  let stringArr = string.split('');
  let reverseString = stringArr.reverse().join('');
  return string === reverseString;
}


isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true