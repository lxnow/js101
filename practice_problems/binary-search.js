var index = 0;

function binarySearch(array, term) {
  let midpoint = Math.ceil(array.length / 2 - 1);
  let evalElement = array[midpoint];
  index += midpoint;

  if (array.length === 1 && evalElement !== term) {
    index = 0;
    return - 1
  } else if (evalElement === term) {
    let result = index;
    index = 0;
    return result;
  } else if (evalElement > term) {
    array = array.slice(0, midpoint + 1);
    index -= midpoint;
  } else if (evalElement < term) {
    array = array.slice(midpoint + 1);
    index += 1;
  }
  return binarySearch(array, term);
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

/*
input: sorted array and search term
output: the index position of the search term, or -1 if it is not found
rules:
  divide by half
  every time you divide by half, the midpoint index is the floor
    10 / 2 = 5 --> index 4
    9 / 2 = 4.5 (or 4) --> index 3
    2 / 2 --> index = 1, midpoint is 0
    length / 2 -> index = Math.floor(length / 2) - 1 << this is the element we are evaluating, the anchor point if you will
  if evalEleemnt === searchTerm, stop and return indexPos
  if evalElement > searchTerm, discard second half (excluding indexPos)
    indexPos can be reset to zero
  if evalElement < searchTerm, discard first half including indexPos
    indexPos + is a floor now
  repeat (including adding the indexPos value)

algorithm:

let index = 0;

function binarySearch(array, term) {
  midpoint = array.length / 2 - 1
  index = index + midpoint;
  evalElement = array[midpoint]
  
  if array.length === 1 && evalElement !== term
    return -1

  if evalElement === term {
    return index;
  } else if evalElement > term {
    arrayX = array.slice(0, midpoint + 1)
    index -= midpoint; // reverse the midpoint value
  } else if evalElement < term {
    arrayX = array.slice(midpoint + 1)
  }
  binarySearch(arrayX, term);
}

*/
