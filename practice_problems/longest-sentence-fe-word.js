function longestSentence(string) {
  let stringArr = string.split(/[?.!]/g);
  let wordsInSentence = stringArr.map(element => element.split(' '));
  let longestPosition = 0;
  let longestCount = wordsInSentence[0][0].length;
  let longestWord;

  for (let counter = 0; counter < wordsInSentence.length; counter += 1) {
    for (let subCounter = 0; subCounter < wordsInSentence[counter].length; subCounter += 1) {
      if (wordsInSentence[counter][subCounter].length > longestCount) {
        longestPosition = counter;
        longestCount = wordsInSentence[counter][subCounter].length;

        longestWord = wordsInSentence[counter][subCounter];
      }
    }
  }

  let longestSen = wordsInSentence[longestPosition].join(' ');
  let lastChar = string[string.indexOf(longestSen) + longestSen.length];
  longestSen += lastChar;

  console.log(longestSen + '\n');
  console.log(`The longest word is ${longestWord} and has ${longestCount} characters.`);
}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

/*
input: string
output: two string logs (1) the sentence with longest word count, and (2) strin g stating the length of that sentence
rules:
- a word is any char except space and !.?, separated by a space
- sentences end with !.?
- longest sentence is determined based on word

algorithm:
array = string.split(/[?.!]/g)
newArr = array.map(element => element.split(' '));
let longestPos = 0;
for (let counter = 0; counter < newArr.length - 1; counter ++) {
  if (newArr[counter - 1].length > newArr[counter]) longestPos = counter - 1;
}
let longestSen = newArr[longestPos].join('') 
let longestSenLength = longestSen.length
lastChar = string[string.indexOf(longestSen) + longestSen.length]
longestSen = longestSen + lastChar
console.log longestSen
consoel.log(`The longest sentence has ${newArr[longestPos].length} words.`)
*/

