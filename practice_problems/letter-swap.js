function swap(string) {
  let strArray = string.split(' ');
  return strArray.map(word => {
    let wordArray = word.split('');
    let first = wordArray[0];
    let last = wordArray[wordArray.length - 1];
    wordArray[0] = last;
    wordArray[wordArray.length -1] = first;
    return wordArray.join('');
  }).join(' ');
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"