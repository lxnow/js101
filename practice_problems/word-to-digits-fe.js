const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function replacer(match) {
  return NUM_WORDS[match.toLowerCase()];
}

function wordToDigit(sentence) {
  let pattern = new RegExp('\\b(one|two|three|four|five|six|seven|eight|nine|zero)\\b', 'gi');
  return sentence.replace(pattern, replacer);
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Wait eight weight. Two. three four. Done.'));