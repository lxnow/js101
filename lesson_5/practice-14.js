// Given the following data structure write some code to return an array containing 
// the colors of the fruits and the sizes of the vegetables. The sizes should be 
// uppercase, and the colors should be capitalized.

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// console.log(obj.grape.colors)

let answer = [];

for (thing in obj) {
  if (obj[thing]['type'] === 'fruit') {
    let formattedColors = obj[thing]['colors'].map(color =>
      color[0].toUpperCase() + color.slice(1));
    answer.push(formattedColors);
  } else if (obj[thing]['type'] === 'vegetable') {
    answer.push(obj[thing]['size'].toUpperCase());
  }
}

console.log(answer);

// for (fruit in obj){
//   for (element in obj[fruit]){
//     if (element === 'colors') {
//       // console.log(obj[fruit][element]);
//       let formattedColors = obj[fruit][element].map(color => 
//         color[0].toUpperCase() + color.slice(1));
//       answer.push(formattedColors);
//     } else if (element === 'size') {
//       answer.push(obj[fruit][element].toUpperCase());
//     }
//   }
// }

// console.log(answer);

/*
  return array
  array contains color with first letter capitalized
  array contains size in uppercase
  colors have an array value;

  traverse object
  check type:
    if fruit
      get the color array values
      traverse the color values
      capitalize the first letter of the color
       return the formatted color values... and push to new array
    if veg
      traverse the  size values
      capitalize the size values
      return via push to new array
    else do nothing

*/