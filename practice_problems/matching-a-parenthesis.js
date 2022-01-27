// function isBalanced(string) {
//   let strArray = string.split('').filter(element => (element === '(' || element === ')'));
//   let cannotBeNeg = 0;

//   if (strArray.length % 2 !== 0) return false;

//   for (let counter = 0; counter < strArray.length; counter += 1) {
//     switch (strArray[counter]) {
//       case "(" : 
//         cannotBeNeg += 1;
//         break
//       case ")" :
//         cannotBeNeg -= 1;
//         break
//     }
//     if (cannotBeNeg < 0) {
//       return false;
//     }
//   }
//   return true;
// }

function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/*
input string
output boolean
rule - count the ( and ) characters
  - each ( should immediately have a ) after it
*/