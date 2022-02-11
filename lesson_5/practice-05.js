//Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};


let munstersArray = Object.entries(munsters);
let sum = 0;

munstersArray.filter(element => element[1].gender === 'male').forEach(element => {
  sum += element[1].age;
})

console.log(sum);
console.log(Object.values(munsters));

/* 
filter out the males, get their age values, add the ages and return/display
to filter, best to convert to array first since we do not need to return an object

- convert the sub-object to array
- use filter method to return an array with only gender === male
- add up ages on the new array returned
*/