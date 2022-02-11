//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

const convert = (arr) => {
  let objResult = {} 
  arr.forEach((element,idx) => {
    objResult[element] = idx;
  })
  return objResult;
}

console.log(convert(flintstones)); //{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// take each array element
// take each array position
// declare key as array element
//   ... with value array position
