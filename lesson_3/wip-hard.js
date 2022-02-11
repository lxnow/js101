function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) { return false };
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('1.11.1.1'));
console.log(isDotSeparatedIpAddress('0.1.1.0x11'));
console.log(isDotSeparatedIpAddress('0.2.3.2459'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
console.log(isDotSeparatedIpAddress('1.2.3'));
console.log(isDotSeparatedIpAddress('node'));
console.log(isDotSeparatedIpAddress('192.168.0.1'));