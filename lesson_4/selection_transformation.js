let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// const id = 'Fruit';

// const selectFruit = (obj) => {
//   for (let entry in obj){
//     if (obj[entry] !== id) {
//       delete obj[entry];
//     }
//   }
//   return obj;
// }

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
