const PAIRS_TO_TEST = [["(", ")"], ["{", "}"], ["[", "]"], ['"', '"'], ["'", "'"]];

function isOpenClose(char) {
  if (char === '"' || char === "'") return false;
  else return true;
}

function isBalanced(string) {
  for (let pairCounter = 0; pairCounter < PAIRS_TO_TEST.length; pairCounter += 1) {
    let strArray = [];
    strArray = string.split('').filter(element => (element === PAIRS_TO_TEST[pairCounter][0] 
      || element === PAIRS_TO_TEST[pairCounter][1]));
        
    if (strArray.length % 2 !== 0) return false;    

    let cannotBeNeg = 0;

    if (isOpenClose(PAIRS_TO_TEST[pairCounter][0])) {
      for (let counter = 0; counter < strArray.length; counter += 1) {
        if (strArray[counter] === PAIRS_TO_TEST[pairCounter][0]) {
          cannotBeNeg += 1;
        } else if (strArray[counter] === PAIRS_TO_TEST[pairCounter][1]) {
          cannotBeNeg -= 1;
        }
        if (cannotBeNeg < 0) {
          return false;
        }
      }
      if (cannotBeNeg !== 0) return false;      
    }
  }
  return true;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("[thisisgood]") === true);
console.log(isBalanced("[]][thisis notgood") === false);
console.log(isBalanced("{[}thisisgood]") === true);
console.log(isBalanced("[]]}{[thisis notgood") === false);
console.log(isBalanced("[][][[[]][]]") === true);
console.log(isBalanced("[{}}]") === false);
console.log(isBalanced("[[[[") === false);
console.log(isBalanced("[thisisgood]}}") === false);
console.log(isBalanced("[][[[][][]{}{}[]]]") === true);
console.log(isBalanced("'these are quotes'[][]") === true);




/*
input string
output boolean
rule - count the ( and ) characters
  - each ( should immediately have a ) after it
*/