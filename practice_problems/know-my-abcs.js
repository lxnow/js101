console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('mud')) //true
console.log(isBlockWord('GTA')) // false
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

function isBlockWord(word) {

  const BLOCKS = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 
    'H:U', 'V:I', 'L:Y', 'Z:M']

  let wordArr = word.toUpperCase().split('');
  for (let counter = 0; counter < wordArr.length; counter += 1) {
    let char = wordArr[counter];
    if (BLOCKS.some(element => containsLetter(element, char))) {
      let index = BLOCKS.findIndex(element => containsLetter(element, char))
      BLOCKS.splice(index, 1);
    } else return false;
  }
  return true;
}

function containsLetter(block, char) {
  return block.includes(char);
}

/*
input: a string
output: boolean value
examples:
isBlockWord('mud') //true
isBlockWord('GTA') // false

rules:
argument is case insensitive
blocks cannot be repeated
there are letter blocks that contain two characters; can only use one or the other
character on that block

## algorithm
declare blocks as const object/array, each element a subarray (use split)
get string
convert string to array
for each array, check which block it exists in
  for element in array, includes letter (use findIndex)
    if found, then pop then replace that block eleemnt
    repeat until you hit false
    if false, return false
    else return true
*/