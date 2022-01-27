function reverseWords(string) {
  let array = string.split(' ');
  let resultArray = array.map(element => {
    if (element.length >= 5) {
      return element.split('').reverse().join('');
    } else return element;
  });
  return resultArray.join(' ');
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"