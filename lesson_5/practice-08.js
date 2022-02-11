// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(element => {
  element.forEach(word => {
    let wordArr = word.split('');
    wordArr.forEach(char => {
      if ('aeiouAEIOU'.includes(char)) console.log(char);
    })
  })
})


/* access the words in the object
take each string and filter out aeiou
return the aeiou and print to console
*/