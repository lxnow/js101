function wordSizes(string) {
  let wordCountObj = {};
  let stringArr = string.split(' ');
  stringArr.map(element => {
    if (element.length > 0) {
      if(!wordCountObj[element.length]) wordCountObj[element.length] = 0;
      wordCountObj[element.length] = Number(wordCountObj[element.length]) + 1;      
    }
  })
  return wordCountObj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

/*

split the string into an array
get the lengths of each element in the array
increment the key (length) by +1 each time we count
*/