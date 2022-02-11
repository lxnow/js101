let statement = "The Flintstones Rock";

let obj = {}

for (let counter = 0; counter < statement.length; counter += 1) {
  if (!Object.keys(obj).includes(statement[counter])) {
    obj[statement[counter]] = 0;
  }
  obj[statement[counter]] += 1;

}

delete obj[' '];

console.log(obj);

//Create an object that expresses the frequency with which each letter occurs in this string:
//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// iterate through string char by char
// for each character, evaluate if object key exist
//   if yes, add +1 to the value of that key
//   if no, create new key with value + 1
