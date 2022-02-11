/* a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null. 

START

  SET counterOccur to track the number of times the character is in array
  SET str as the string to review
  SET char as the char to evaluate at least three times

  WHILE i is less than str.length
    IF str[i] === char
      counterOccur++
      IF counterOccur === 3
        console.log(i);
        break
    console.log(null)

END
*/ 

let counterOccur = 0;

function thirdOccur(str, char) {
  counterOccur = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counterOccur++;
        if (counterOccur === 3) {
          console.log(i);
          return;
        }
    }
  }
  console.log(null);
}

thirdOccur('i342qthahginad;hgahgirhdnlkjvndsvh48hga', 'i');
thirdOccur('abcabcabc', 'd');
thirdOccur('abcabcabcaaa', 'c');