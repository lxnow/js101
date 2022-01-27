function repeater(string) {
  let repeatedStr = '';
  for (let counter = 0; counter < string.length; counter += 1) {
    repeatedStr = repeatedStr + string[counter] + string[counter];
  }
  return repeatedStr
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""