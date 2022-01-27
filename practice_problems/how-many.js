let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(input) {
  let obj = {};
  input.forEach(element => {
    if (obj[element]) obj[element] += 1;
    else obj[element] = 1;
  })
  let arrObj = Object.entries(obj);
  arrObj.forEach(element => {
    console.log(`${element[0]} => ${element[1]}`);
  })
}


countOccurrences(vehicles);


/*
// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/