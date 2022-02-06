const WORDS = {
  '%noun': ['music', 'appearance', 'student', 'committee', 'signature', 'soup', 'engine', 'importance', 'product', 'promotion'],
  '%verb': ['reassure', 'repair', 'dress', 'drink', 'enable', 'bury', 'draft', 'equip', 'differentiate', 'belong'],
  '%adjective': ['paltry', 'deep', 'eastern', 'alike', 'young', 'important', 'slimy', 'foreign', 'tidy', 'draconian'],
  '%adverb': ['literally', 'lazily', 'crossly', 'zestfully', 'loyally', 'kookily', 'instantly', 'obnoxiously', 'helpfully', 'loftily'],
}


let template = 'the %noun %verb the %adjective %noun very %adverb. The %adjective %noun was quite unhappy about what happened and %adverb %verb away.'


madlibs(template);


/*
input: template 
  template is a paragraph, where the variables to be replaced are:
    $noun $verb $adjective $adverb
output: string of text with the nounce, verbs, adjectives and adverbs filled out
rules:
- words are already stored in the program
- template should be of a certain format
- words are stored as an object
- let obj = {nouns: [x, y, z], verbs: [x, y, z], adjectives: [x, y, z], adverbs: [x, y, z]}
- generate random number -> establish random-tile in teh range, get that number and splice it out -> 
  length = 4
  1 of 4 (index 0) -> 25%
  2 of 4 - 50%
  3 of 4 - 75%   
  4 of 4 - 100%  n+1 / length
    => between n / length _and_ up to n+1 / length
    splice(n,1)

algorithm:
array = template.split(/[\s.!?]/g)
array.map(element => {
  if element.match(/$noun[\s!.?]/g) => {
    let lastChar = element.slice('$noun'.length - 1);
    return pickRandomWord(noun) + lastChar;
  } else return element;
}
array.join(' ')

pickRandomWord(typeOfWord) {
  let randomNum = Math.random()
  let counter = 0;
  while (true) {
    if (randomNum > (counter / arr.length) && randomNumber <= (counter + 1 / arr.length)) { 
      return arr.splice(counter, 1)[0];
    }
  }
}

*/

function madlibs(template) {
  templateArr = template.split(' ');
  let replacedArr = templateArr.map(element => {
    if (element.match(/%noun[?.!]*/)) {
      return replaceWord('%noun', element);
    }
    if (element.match(/%adjective[?.!]*/)) {
      return replaceWord('%adjective', element);
    }
    if (element.match(/%adverb[?.!]*/)) {
      return replaceWord('%adverb', element);
    }
    if (element.match(/%verb[?.!]*/)) {
      return replaceWord('%verb', element);
    } else return element;       
  })
  console.log(replacedArr.join(' '));
}

function replaceWord(typeStr, word) {
  if (word.length > typeStr.length) {
      let lastChar = word.slice(typeStr.length);
      return pickRandomWord(typeStr) + lastChar;        
    } else return pickRandomWord(typeStr);  
}

function pickRandomWord(typeOfWord) {
  let randomNum = Math.random();
  let counter = 0;
  let wordChoiceArr = WORDS[typeOfWord];  
  while (true) {
    if (randomNum > (counter / wordChoiceArr.length) && 
      randomNum <= (counter + 1) / wordChoiceArr.length) {
      return wordChoiceArr.splice(counter, 1)[0];
    } counter++;
  }
}