// Given this previously seen family object, print the name, age, and gender of each family member:
// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.entries(munsters);

munstersArray.forEach(element => {
  console.log(`${element[0]} is a ${element[1].age}-year old ${element[1].gender}.`);
});
