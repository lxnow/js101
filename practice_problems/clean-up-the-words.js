let pattern = /[A-Za-z]/;
let newString = "";

function cleanUp(string) {
  for (let counter = 0; counter < string.length; counter += 1) {
    if (pattern.test(string[counter])) {
      newString = newString + string[counter];
    } else newString = newString + " ";
  }

let newStringArr = newString.split('');

  for (counter = 0; counter < newStringArr.length; counter += 1) {
    if (newStringArr[counter] === " " && newStringArr[counter + 1] === " ") {
      newStringArr.splice([counter], 1);
      counter -= 1;
    }
  }
  return newStringArr.join("");
}

cleanUp("---what's my +*& line?");    // " what s my line "