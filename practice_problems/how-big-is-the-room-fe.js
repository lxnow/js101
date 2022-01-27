const SQ_METERS_TO_SQ_FEET = 10.7639;
let inputLength;
let inputWidth;
let preferredUOM; // UOM = unit of measure
let resultInSqMeters;
let resultinSqFeet;
let readline = require('readline-sync');

function print(message) {
  console.log(message);
}

function getPreferredUOM() {
  while (true) {
    print('What is the unit of measure (UOM) you are using? Select 1 = Meters, 2 = Feet');
    preferredUOM = readline.prompt().trim().toLowerCase();
    if (validAnswer(preferredUOM, ['1', '2', 'm', 'f', 'meters', 'feet'])) break;
  }
}


function validAnswer(input, arrTest) {
  if (!arrTest.includes(input)) {
    print("That's an invalid response. Please try again");
    return false;
  } else return true;
}

function standardizeVar(uom) {
  if (uom === '1' || uom === 'm' || uom === 'meters') return 'meters';
  else return 'feet';
}

function getLength(uom) {
  print(`Enter the length in ${uom}`);
  inputLength = readline.prompt();
}

function getWidth(uom) {
  print(`Enter the width in ${uom}`);
  inputWidth = readline.prompt();
}

function determineAnswers(uom) {
  switch (uom) {
    case 'meters' :
      resultInSqMeters = inputWidth * inputLength;
      resultinSqFeet = resultInSqMeters * SQ_METERS_TO_SQ_FEET;
      break;
    case 'feet' :
      resultinSqFeet = inputWidth * inputLength;
      resultInSqMeters = resultinSqFeet / SQ_METERS_TO_SQ_FEET;
  }
}

function displayAnswers() {
  print(`The room's area is ${resultInSqMeters.toFixed(2)} square meters or ${resultinSqFeet.toFixed(2)} square feet.`);
}

// main code:
getPreferredUOM();
preferredUOM = standardizeVar(preferredUOM);
getLength(preferredUOM);
getWidth(preferredUOM);
determineAnswers(preferredUOM);
displayAnswers();

// console.log('What is the length (in meters)?');
// let length = readline.prompt();
// console.log('What is the width (in meters)?');
// let width = readline.prompt();
// let sqMeters = length * width;
// let sqFeet = sqMeters / SQ_METERS_TO_SQ_FEET;
// console.log(`The room's area is ${sqMeters} square meters, or ${sqFeet} square feet.`)




/*

Problem
input: 
(1) unit of measure that the user prefers to enter their length and width
(2) the length of the room (a number but will be received as a string so need to parse)
(3) the width of the room (a number but will be received as a string so need to parse)
output:
(1) the area of the room denominated in both units of measure
rules:
(1) the area is the product of the two inputs
(2) the area calculated will be in the same UOM as the inputs entered; hence, we need to assign to the right variable
(3) we need to computer for the alterantive UOM area by either dividing or multiplying 10.7639
questions:
  - do we allow the user to specify a different unit of measure per input? Might the UOM be different between the length and the width?
*/

