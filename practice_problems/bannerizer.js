const logInBox = function placeBorderAroundString (string, wordWrapLimit = string.length) {
  let dashes = '';
  let spaces = ''
  if (wordWrapLimit > string.length) wordWrapLimit = string.length;

  while (dashes.length != wordWrapLimit) {
      dashes = '-'.repeat(wordWrapLimit);
      spaces = ' '.repeat(wordWrapLimit);
  }    

  console.log(`+-${dashes}-+`);
  console.log(`| ${spaces} |`);
  let loopTimes = Math.ceil(string.length / wordWrapLimit);
  let sliceIndex = 0;
  let finalSpaces = ' '.repeat(Math.abs(string.length - (sliceIndex + wordWrapLimit)));
  for (let counter = 0; counter < (loopTimes - 1); counter += 1){
    console.log(`| ${string.slice(sliceIndex, sliceIndex + wordWrapLimit)} |`);
    sliceIndex = sliceIndex + wordWrapLimit;
  }
  console.log(`| ${string.slice(sliceIndex, sliceIndex + wordWrapLimit)}${finalSpaces} |`);
  console.log(`| ${spaces} |`);
  console.log(`+-${dashes}-+`);
}

logInBox('To boldly go where no one has gone before.', 30);
logInBox('To boldly go where no one has gone before.', 43);
logInBox('', 100);
logInBox('');