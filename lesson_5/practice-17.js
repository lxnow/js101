/*
Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) 
represented as a string. The value is typically broken into 5 sections in an 
8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.
*/

let result = '';

let uuid = () => {
  for (let counter = 1; counter <= 32; counter += 1 ){
    let randomNumber = (Math.floor(Math.random() * 16));
    if (randomNumber < 10) {
      randomNumber = randomNumber + 48;
    } else  randomNumber = randomNumber + 87;
    // console.log(randomNumber);
    result = result + String.fromCharCode(randomNumber);
  }
  result = result.slice(0, 8) + '-' + result.slice(8, 12) 
    + '-' + result.slice(12, 16) + '-' + result.slice(16, 20) + '-' 
    + result.slice(20)
  console.log(result);
}

uuid();