let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let newArr = numbers.slice();
// newArrr.everse();
// console.log(newArr);
// console.log(numbers);


// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(...numbers); // [ 5, 4, 3, 2, 1 ]
// let setNumbers = [...numbers];
// setNumbers.sort((num1, num2) => num2 - num1);
// console.log(setNumbers);

let newNumbers = [];
numbers.forEach(element => newNumbers.unshift(element));
console.log(newNumbers);


let title = "Flintstone Family Members";
let spaceCount = Math.floor((40 - title.length) / 2);
let firstSpaces = "";
for(let counter =0; counter < spaceCount; counter++) {
  firstSpaces = firstSpaces.concat(" ");
}
console.log(firstSpaces.concat(title));
console.log(spaceCount + title.length);
console.log(title.padStart(spaceCount + title.length, 'x'))
let x = title.padStart(spaceCount)
console.log(x)