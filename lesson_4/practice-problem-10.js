//Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arrAges = Object.entries(ages);
let currentAge;
let currentName;

for (let counter = 0; counter < arrAges.length; counter += 1) {
  if (currentAge === undefined) {
    currentAge = arrAges[counter][1];
    currentName = arrAges[counter][0];
  } else if (arrAges[counter][1] < currentAge) {
    currentAge = arrAges[counter][1];
    currentName = arrAges[counter][0];
  }
}

console.log(currentName);
console.log(currentAge);

// convert object to array
// evaluate the index=1 value to a holder, compared to current if smaller
// if smaller, switch to the new one and save the key as well
//   other wise stick with what we ahve